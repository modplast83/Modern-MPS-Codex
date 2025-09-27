import type { Express, Request } from "express";
import { createServer, type Server } from "http";
import bcrypt from "bcrypt";

// Extend Express Request type to include session
declare module 'express-serve-static-core' {
  interface Request {
    session: {
      userId?: number;
      [key: string]: any;
      destroy?: (callback: (err?: any) => void) => void;
    };
  }
}
import { storage } from "./storage";
import { db } from "./db";
import { 
  insertUserSchema, 
  insertNewOrderSchema, 
  insertProductionOrderSchema,
  insertRollSchema, 
  insertMaintenanceRequestSchema,
  insertMaintenanceActionSchema,
  insertMaintenanceReportSchema,
  insertOperatorNegligenceReportSchema,
  insertConsumablePartSchema,
  insertConsumablePartTransactionSchema,
  insertInventoryMovementSchema,
  insertInventorySchema,
  insertCutSchema,
  insertWarehouseReceiptSchema,
  insertProductionSettingsSchema,
  customers,
  customer_products,
  locations,
  users
} from "@shared/schema";
import { eq } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";

import { z } from "zod";
import { parseIntSafe, parseFloatSafe, coercePositiveInt, coerceNonNegativeInt, extractNumericId, generateNextId } from "@shared/validation-utils";

// Helper functions for safe route parameter parsing
const parseRouteParam = (param: string | undefined, paramName: string): number => {
  if (!param) {
    throw new Error(`${paramName} parameter is required`);
  }
  return parseIntSafe(param, paramName, { min: 1 });
};

const parseOptionalQueryParam = (param: any, paramName: string, defaultValue: number): number => {
  if (!param) return defaultValue;
  try {
    return parseIntSafe(param, paramName, { min: 1 });
  } catch {
    return defaultValue;
  }
};

const insertCustomerSchema = createInsertSchema(customers).omit({ id: true, created_at: true }).extend({
  sales_rep_id: z.union([z.string(), z.number(), z.null()]).optional().transform(val => {
    if (val === '' || val === null || val === undefined) return null;
    if (typeof val === 'number') return val;
    try {
      return parseIntSafe(val as string, "Sales Rep ID", { min: 1 });
    } catch {
      return null; // Return null for invalid values instead of NaN
    }
  })
});
const insertCustomerProductSchema = createInsertSchema(customer_products).omit({ id: true, created_at: true });
const insertLocationSchema = createInsertSchema(locations).omit({ id: true });
import { openaiService } from "./services/openai";
import { mlService } from "./services/ml-service";
import { NotificationService } from "./services/notification-service";
import { getNotificationManager, type SystemNotificationData } from "./services/notification-manager";
import { setNotificationManager } from "./storage";
import { createPerformanceIndexes, createTextSearchIndexes } from "./database-optimizations";
import { 
  createAlertsRouter,
  createSystemHealthRouter,
  createPerformanceRouter,
  createCorrectiveActionsRouter,
  createDataValidationRouter
} from "./routes/alerts";
import { getSystemHealthMonitor } from "./services/system-health-monitor";
import { getAlertManager } from "./services/alert-manager";
import { getDataValidator } from "./services/data-validator";
import QRCode from 'qrcode';
import { validateRequest, commonSchemas, requireAuth, requireAdmin } from './middleware/validation';
import { calculateProductionQuantities } from "@shared/quantity-utils";

// Initialize notification service
const notificationService = new NotificationService(storage);

// Initialize notification manager (singleton)
let notificationManager: ReturnType<typeof getNotificationManager> | null = null;

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.post("/api/login", 
    validateRequest({ body: commonSchemas.loginCredentials }),
    async (req, res) => {
    try {
      const { username, password } = req.body;

      // Enhanced validation
      if (!username?.trim() || !password?.trim()) {
        return res.status(400).json({ message: "اسم المستخدم وكلمة المرور مطلوبان" });
      }

      const user = await storage.getUserByUsername(username.trim());
      if (!user) {
        return res.status(401).json({ message: "بيانات تسجيل الدخول غير صحيحة" });
      }

      // Enhanced null checks for user properties
      if (!user.password) {
        console.error('User found but password is null/undefined:', user.id);
        return res.status(401).json({ message: "بيانات تسجيل الدخول غير صحيحة" });
      }

      // Check password using bcrypt for security
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "بيانات تسجيل الدخول غير صحيحة" });
      }

      if (user.status !== 'active') {
        return res.status(401).json({ message: "بيانات تسجيل الدخول غير صحيحة" });
      }

      // Save user session with explicit save callback
      req.session.userId = user.id;
      

      // Ensure session is saved before responding with additional reliability measures
      req.session.save((err: any) => {
        if (err) {
          console.error("Session save error:", err);
          return res.status(500).json({ message: "خطأ في حفظ الجلسة" });
        }
        
        // Force session persistence for MemoryStore reliability
        if (req.session?.touch) {
          req.session.touch();
        }
        
        // Log successful session creation in development
        if (process.env.NODE_ENV !== 'production') {
          console.log(`✅ Session created and saved for user ${user.id}`);
        }
        
        // Session saved successfully - safe property access
        res.json({ 
          user: { 
            id: user.id ?? null, 
            username: user.username ?? '', 
            display_name: user.display_name ?? '',
            display_name_ar: user.display_name_ar ?? '',
            role_id: user.role_id ?? null,
            section_id: user.section_id ?? null 
          } 
        });
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "خطأ في الخادم" });
    }
  });

  // Get current user
  app.get("/api/me", requireAuth, async (req, res) => {
    try {
      // Double-check session (redundant with requireAuth but safer)
      if (!req.session?.userId || typeof req.session.userId !== 'number') {
        // Debug session state in development
        if (process.env.NODE_ENV !== 'production') {
          console.log('🔍 /api/me session debug:', {
            sessionExists: !!req.session,
            userId: req.session?.userId,
            userIdType: typeof req.session?.userId,
            sessionId: req.session?.id || 'no-session-id'
          });
        }
        return res.status(401).json({ 
          message: "جلسة غير صحيحة",
          success: false
        });
      }

      const user = await storage.getUserById(req.session.userId);
      if (!user) {
        // User doesn't exist in database, clear invalid session
        try {
          if (req.session?.destroy) {
            req.session.destroy((err: any) => {
              if (err) console.error("Error destroying invalid session:", err);
            });
          }
        } catch (destroyError) {
          console.error("Failed to destroy invalid session:", destroyError);
        }
        return res.status(404).json({ 
          message: "المستخدم غير موجود",
          success: false
        });
      }

      // Validate user status
      if (user.status !== 'active') {
        return res.status(403).json({
          message: "الحساب غير نشط",
          success: false
        });
      }

      // User found - extend session safely
      try {
        if (req.session?.touch) {
          req.session.touch();
        }
        
        // Save session to ensure it persists (non-blocking)
        if (req.session?.save) {
          req.session.save((err: any) => {
            if (err) {
              console.error("Error saving session on /api/me:", err);
              // Continue anyway, don't break the response
            }
          });
        }
      } catch (sessionError) {
        console.error("Session management error:", sessionError);
        // Don't fail the request for session issues
      }

      // Return sanitized user data
      const userData = {
        id: user.id || null,
        username: user.username || '',
        display_name: user.display_name || '',
        display_name_ar: user.display_name_ar || '',
        role_id: user.role_id || null,
        section_id: user.section_id || null
      };

      res.json({ 
        user: userData,
        success: true
      });
    } catch (error) {
      console.error("Get current user error:", error);
      res.status(500).json({ 
        message: "خطأ في الخادم",
        success: false
      });
    }
  });

  // Logout
  app.post("/api/logout", async (req, res) => {
    try {
      if (req.session?.destroy) {
        req.session.destroy((err) => {
          if (err) {
            console.error("Session destroy error:", err);
            return res.status(500).json({ message: "خطأ في تسجيل الخروج" });
          }
          // Clear all possible session cookies
          res.clearCookie('connect.sid');
          res.clearCookie('plastic-bag-session');
          res.json({ message: "تم تسجيل الخروج بنجاح" });
        });
      } else {
        // Fallback session clearing
        req.session = {} as any;
        res.clearCookie('connect.sid');
        res.clearCookie('plastic-bag-session');
        res.json({ message: "تم تسجيل الخروج بنجاح" });
      }
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({ message: "خطأ في تسجيل الخروج" });
    }
  });

  // Dashboard stats
  app.get("/api/dashboard/stats", requireAuth, async (req, res) => {
    try {
      const stats = await storage.getDashboardStats();
      res.json(stats);
    } catch (error) {
      console.error("Dashboard stats error:", error);
      res.status(500).json({ message: "خطأ في جلب الإحصائيات" });
    }
  });



  // ==== NOTIFICATIONS API ROUTES ====
  
  // Send WhatsApp message (Meta API or Twilio)
  app.post("/api/notifications/whatsapp", 
    requireAuth,
    validateRequest({ body: commonSchemas.whatsappMessage }),
    async (req, res) => {
    try {
      const { phone_number, message, title, priority, context_type, context_id, template_name, variables, use_template = false } = req.body;

      let result;
      try {
        result = await notificationService.sendWhatsAppMessage(phone_number, message, {
          title,
          priority,
          context_type,
          context_id,
          useTemplate: use_template,
          templateName: template_name
        });
      } catch (serviceError: any) {
        console.error('Notification service error:', serviceError);
        return res.status(503).json({
          message: "خدمة الإشعارات غير متوفرة مؤقتاً",
          success: false,
          error: 'SERVICE_UNAVAILABLE'
        });
      }

      if (!result) {
        return res.status(500).json({
          message: "لم يتم الحصول على رد من خدمة الإشعارات",
          success: false
        });
      }

      if (result.success) {
        res.json({ 
          data: {
            messageId: result.messageId,
            phone_number,
            message: message.substring(0, 100) + (message.length > 100 ? '...' : ''),
            timestamp: new Date().toISOString()
          },
          message: "تم إرسال رسالة الواتس اب بنجاح",
          success: true
        });
      } else {
        // Handle specific notification service errors
        let statusCode = 500;
        let errorMessage = "فشل في إرسال رسالة الواتس اب";
        
        if (result.error?.includes('Invalid phone number')) {
          statusCode = 400;
          errorMessage = "رقم الهاتف غير صحيح";
        } else if (result.error?.includes('Rate limit')) {
          statusCode = 429;
          errorMessage = "تم تجاوز حد عدد الرسائل المسموح";
        } else if (result.error?.includes('Template not found')) {
          statusCode = 404;
          errorMessage = "قالب الرسالة غير موجود";
        }
        
        res.status(statusCode).json({ 
          message: errorMessage,
          error: result.error,
          success: false
        });
      }
    } catch (error: any) {
      console.error("Error sending WhatsApp message:", error);
      
      // Handle different types of errors gracefully
      if (error.name === 'ValidationError') {
        return res.status(400).json({ 
          message: "بيانات الطلب غير صحيحة",
          success: false
        });
      }
      
      if (error.message?.includes('timeout')) {
        return res.status(504).json({
          message: "انتهت مهلة الاتصال بخدمة الواتس اب",
          success: false
        });
      }
      
      res.status(500).json({ 
        message: "خطأ غير متوقع في إرسال رسالة الواتس اب",
        success: false
      });
    }
  });

  // Send test message
  app.post("/api/notifications/test", async (req, res) => {
    try {
      const { phone_number } = req.body;
      
      if (!phone_number) {
        return res.status(400).json({ message: "رقم الهاتف مطلوب" });
      }

      const result = await notificationService.sendTestMessage(phone_number);
      
      if (result.success) {
        res.json({
          success: true,
          message: result.message
        });
      } else {
        res.status(500).json({
          success: false,
          error: result.error
        });
      }
    } catch (error: any) {
      console.error("Error sending test message:", error);
      res.status(500).json({ message: "خطأ في إرسال رسالة الاختبار" });
    }
  });

  // Get notifications
  app.get("/api/notifications", async (req, res) => {
    try {
      // Enhanced parameter validation with safe parsing
      let userId: number | undefined;
      if (req.query.user_id) {
        try {
          userId = parseIntSafe(req.query.user_id as string, "User ID", { min: 1 });
        } catch {
          userId = undefined; // Invalid user ID parameter
        }
      }
      
      let limitParam = 50;
      if (req.query.limit) {
        try {
          limitParam = parseIntSafe(req.query.limit as string, "Limit", { min: 1, max: 100 });
        } catch {
          limitParam = 50; // Default to 50 for invalid limit
        }
      }
      
      let offsetParam = 0;
      if (req.query.offset) {
        try {
          offsetParam = parseIntSafe(req.query.offset as string, "Offset", { min: 0 });
        } catch {
          offsetParam = 0; // Default to 0 for invalid offset
        }
      }
      
      // Validate pagination parameters with enhanced null safety
      const validLimit = Math.min(Math.max(isNaN(limitParam) ? 50 : limitParam, 1), 100);
      const validOffset = Math.max(isNaN(offsetParam) ? 0 : offsetParam, 0);
      
      const notifications = await storage.getNotifications(userId, validLimit, validOffset);
      res.json(notifications);
    } catch (error: any) {
      console.error("Error fetching notifications:", error);
      res.status(500).json({ message: "خطأ في جلب الإشعارات" });
    }
  });

  // Webhook endpoint for Meta WhatsApp
  app.get("/api/notifications/webhook/meta", (req, res) => {
    // Verify webhook (Meta requirement)
    const VERIFY_TOKEN = process.env.META_WEBHOOK_VERIFY_TOKEN || 'mpbf_webhook_token';
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('✅ Meta Webhook verified successfully');
      res.status(200).send(challenge);
    } else {
      console.log('❌ Meta Webhook verification failed');
      res.sendStatus(403);
    }
  });

  app.post("/api/notifications/webhook/meta", async (req, res) => {
    try {
      console.log("📨 Meta Webhook received:", JSON.stringify(req.body, null, 2));
      
      // معالجة webhook من Meta
      if (notificationService.metaWhatsApp) {
        await notificationService.metaWhatsApp.handleWebhook(req.body);
      }

      res.status(200).send('OK');
    } catch (error: any) {
      console.error("Error processing Meta webhook:", error);
      res.status(500).json({ message: "خطأ في معالجة Meta webhook" });
    }
  });

  // Update notification status (Twilio webhook)
  app.post("/api/notifications/webhook/twilio", async (req, res) => {
    try {
      const { MessageSid, MessageStatus, ErrorMessage } = req.body;
      
      if (MessageSid) {
        await notificationService.updateMessageStatus(MessageSid);
      }
      
      res.status(200).send("OK");
    } catch (error: any) {
      console.error("Error handling Twilio webhook:", error);
      res.status(500).send("Error");
    }
  });

  // ============ SSE Real-time Notification System ============
  
  // SSE endpoint for real-time notifications
  app.get("/api/notifications/stream", requireAuth, async (req, res) => {
    try {
      // Initialize notification manager if not already done
      if (!notificationManager) {
        notificationManager = getNotificationManager(storage);
        // Set notification manager in storage for production updates
        setNotificationManager(notificationManager);
        
        // Apply database optimizations on first initialization
        console.log('[System] Applying database optimizations...');
        createPerformanceIndexes().catch(err => 
          console.error('[System] Database optimization failed:', err)
        );
        createTextSearchIndexes().catch(err => 
          console.error('[System] Text search optimization failed:', err)
        );
      }

      const userId = req.session?.userId;
      if (!userId) {
        return res.status(401).json({ message: "غير مصرح به" });
      }

      // Generate unique connection ID
      const connectionId = `${userId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      // Add SSE connection
      notificationManager.addConnection(connectionId, userId, res);

      console.log(`[SSE] New connection established for user ${userId}, connectionId: ${connectionId}`);

    } catch (error) {
      console.error("Error establishing SSE connection:", error);
      res.status(500).json({ message: "خطأ في إنشاء الاتصال" });
    }
  });

  // Create system notification
  app.post("/api/notifications/system", requireAuth, 
    validateRequest({ 
      body: z.object({
        title: z.string().min(1, "العنوان مطلوب"),
        title_ar: z.string().optional(),
        message: z.string().min(1, "الرسالة مطلوبة"),
        message_ar: z.string().optional(),
        type: z.enum(['system', 'order', 'production', 'maintenance', 'quality', 'hr']).default('system'),
        priority: z.enum(['low', 'normal', 'high', 'urgent']).default('normal'),
        recipient_type: z.enum(['user', 'role', 'all']),
        recipient_id: z.string().optional(),
        context_type: z.string().optional(),
        context_id: z.string().optional(),
        sound: z.boolean().optional().default(false),
        icon: z.string().optional()
      })
    }),
    async (req, res) => {
    try {
      // Initialize notification manager if not already done
      if (!notificationManager) {
        notificationManager = getNotificationManager(storage);
        // Set notification manager in storage for production updates
        setNotificationManager(notificationManager);
        
        // Apply database optimizations on first initialization
        console.log('[System] Applying database optimizations...');
        createPerformanceIndexes().catch(err => 
          console.error('[System] Database optimization failed:', err)
        );
        createTextSearchIndexes().catch(err => 
          console.error('[System] Text search optimization failed:', err)
        );
      }

      const notificationData: SystemNotificationData = req.body;

      // Send notification based on recipient type
      if (notificationData.recipient_type === 'user' && notificationData.recipient_id) {
        const userId = parseInt(notificationData.recipient_id);
        if (isNaN(userId)) {
          return res.status(400).json({ message: "معرف المستخدم غير صحيح" });
        }
        await notificationManager.sendToUser(userId, notificationData);
      } else if (notificationData.recipient_type === 'role' && notificationData.recipient_id) {
        const roleId = parseInt(notificationData.recipient_id);
        if (isNaN(roleId)) {
          return res.status(400).json({ message: "معرف الدور غير صحيح" });
        }
        await notificationManager.sendToRole(roleId, notificationData);
      } else if (notificationData.recipient_type === 'all') {
        await notificationManager.sendToAll(notificationData);
      } else {
        return res.status(400).json({ message: "نوع المستلم أو معرف المستلم مطلوب" });
      }

      res.json({ 
        success: true, 
        message: "تم إرسال الإشعار بنجاح",
        recipient_type: notificationData.recipient_type,
        recipient_id: notificationData.recipient_id 
      });

    } catch (error: any) {
      console.error("Error creating system notification:", error);
      res.status(500).json({ 
        success: false, 
        message: error.message || "فشل في إرسال الإشعار" 
      });
    }
  });

  // Mark notification as read
  app.patch("/api/notifications/mark-read/:id", requireAuth, async (req, res) => {
    try {
      const notificationId = parseRouteParam(req.params.id, "معرف الإشعار");
      
      const notification = await storage.markNotificationAsRead(notificationId);
      
      res.json({ 
        success: true, 
        message: "تم تعليم الإشعار كمقروء",
        notification 
      });

    } catch (error: any) {
      console.error("Error marking notification as read:", error);
      res.status(500).json({ 
        success: false, 
        message: error.message || "فشل في تعليم الإشعار كمقروء" 
      });
    }
  });

  // Mark all notifications as read for current user
  app.patch("/api/notifications/mark-all-read", requireAuth, async (req, res) => {
    try {
      const userId = req.session?.userId;
      if (!userId) {
        return res.status(401).json({ message: "غير مصرح به" });
      }
      
      await storage.markAllNotificationsAsRead(userId);
      
      res.json({ 
        success: true, 
        message: "تم تعليم جميع الإشعارات كمقروءة" 
      });

    } catch (error: any) {
      console.error("Error marking all notifications as read:", error);
      res.status(500).json({ 
        success: false, 
        message: error.message || "فشل في تعليم الإشعارات كمقروءة" 
      });
    }
  });

  // Delete notification
  app.delete("/api/notifications/delete/:id", requireAuth, async (req, res) => {
    try {
      const notificationId = parseRouteParam(req.params.id, "معرف الإشعار");
      
      await storage.deleteNotification(notificationId);
      
      res.json({ 
        success: true, 
        message: "تم حذف الإشعار" 
      });

    } catch (error: any) {
      console.error("Error deleting notification:", error);
      res.status(500).json({ 
        success: false, 
        message: error.message || "فشل في حذف الإشعار" 
      });
    }
  });

  // Get user notifications with real-time support
  app.get("/api/notifications/user", requireAuth, async (req, res) => {
    try {
      const userId = req.session?.userId;
      if (!userId) {
        return res.status(401).json({ message: "غير مصرح به" });
      }

      const unreadOnly = req.query.unread_only === 'true';
      const limit = parseOptionalQueryParam(req.query.limit, "الحد الأقصى", 50);
      const offset = parseOptionalQueryParam(req.query.offset, "الإزاحة", 0);

      const notifications = await storage.getUserNotifications(userId, {
        unreadOnly,
        limit,
        offset
      });

      // Count unread notifications
      const unreadNotifications = await storage.getUserNotifications(userId, {
        unreadOnly: true,
        limit: 1000 // Get all unread to count
      });

      res.json({
        success: true,
        notifications,
        unread_count: unreadNotifications.length,
        total_returned: notifications.length
      });

    } catch (error: any) {
      console.error("Error fetching user notifications:", error);
      res.status(500).json({ 
        success: false, 
        message: error.message || "فشل في جلب الإشعارات" 
      });
    }
  });

  // Get SSE connection statistics (admin only)
  app.get("/api/notifications/stats", requireAuth, requireAdmin, async (req, res) => {
    try {
      if (!notificationManager) {
        return res.json({
          success: true,
          stats: { activeConnections: 0, connectionsByUser: {} }
        });
      }

      const stats = notificationManager.getStats();
      res.json({ success: true, stats });

    } catch (error: any) {
      console.error("Error getting notification stats:", error);
      res.status(500).json({ 
        success: false, 
        message: "فشل في جلب إحصائيات الإشعارات" 
      });
    }
  });

  // Get notification templates
  app.get("/api/notification-templates", async (req, res) => {
    try {
      const templates = await storage.getNotificationTemplates();
      res.json(templates);
    } catch (error: any) {
      console.error("Error fetching notification templates:", error);
      res.status(500).json({ message: "خطأ في جلب قوالب الإشعارات" });
    }
  });

  // Create notification template
  app.post("/api/notification-templates", async (req, res) => {
    try {
      const template = await storage.createNotificationTemplate(req.body);
      res.json(template);
    } catch (error: any) {
      console.error("Error creating notification template:", error);
      res.status(500).json({ message: "خطأ في إنشاء قالب الإشعار" });
    }
  });

  // Machine Learning API routes
  app.get("/api/ml/predictions/:machineId", 
    requireAuth,
    validateRequest({ 
      params: commonSchemas.idParam.extend({ machineId: z.string().regex(/^\d+$/).transform(Number) }),
      query: z.object({ hours: z.string().regex(/^\d+$/).transform(Number).optional() })
    }),
    async (req, res) => {
    try {
      // Enhanced parameter validation with null safety
      if (!req.params?.machineId) {
        return res.status(400).json({
          message: "معرف المكينة مطلوب",
          success: false
        });
      }
      
      const machineId = parseInt(req.params.machineId);
      const hoursParam = req.query?.hours;
      let hoursAhead = 24; // default
      
      if (hoursParam !== undefined) {
        const hours = typeof hoursParam === 'number' ? hoursParam : parseInt(hoursParam as string);
        hoursAhead = !isNaN(hours) && hours > 0 ? hours : 24;
      }
      
      if (!machineId || isNaN(machineId) || machineId <= 0) {
        return res.status(400).json({
          message: "معرف المكينة غير صحيح",
          success: false
        });
      }

      if (hoursAhead < 1 || hoursAhead > 168) { // Max 1 week
        return res.status(400).json({
          message: "عدد الساعات يجب أن يكون بين 1 و 168",
          success: false
        });
      }
      
      const prediction = await mlService.predictProductionPerformance(machineId, hoursAhead);
      
      if (!prediction) {
        return res.status(404).json({
          message: "لم يتم العثور على تنبؤات لهذه المكينة",
          success: false
        });
      }

      res.json({
        data: prediction,
        success: true
      });
    } catch (error: any) {
      console.error('ML prediction error:', error);
      
      // Handle specific ML service errors
      if (error.message?.includes('Machine not found')) {
        return res.status(404).json({
          message: "المكينة غير موجودة",
          success: false
        });
      }
      
      if (error.message?.includes('Insufficient data')) {
        return res.status(422).json({
          message: "بيانات غير كافية لإجراء التنبؤ",
          success: false
        });
      }
      
      res.status(500).json({ 
        message: "خطأ في خدمة الذكاء الاصطناعي",
        success: false
      });
    }
  });

  app.get("/api/ml/anomalies/:machineId", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.machineId) {
        return res.status(400).json({ message: "معرف المكينة مطلوب" });
      }
      
      const idStr = req.params.machineId as string;
      if (!/^\d+$/.test(idStr)) {
        return res.status(400).json({ message: "معرف المكينة غير صحيح" });
      }
      const machineId = Number(idStr);
      
      // استخدام آخر بيانات متاحة للمكينة
      const mockData = {
        timestamp: new Date(),
        machineId,
        productionRate: 75 + Math.random() * 20,
        qualityScore: 85 + Math.random() * 10,
        wastePercentage: 3 + Math.random() * 4,
        temperature: 180 + Math.random() * 20,
        pressure: 12 + Math.random() * 3,
        speed: 80 + Math.random() * 15
      };
      
      const anomaly = await mlService.detectAnomalies(mockData);
      res.json(anomaly);
    } catch (error) {
      console.error('ML anomaly detection error:', error);
      res.status(500).json({ message: "خطأ في اكتشاف الشذوذ" });
    }
  });

  app.get("/api/ml/patterns", async (req, res) => {
    try {
      const patterns = await mlService.analyzeProductionPatterns();
      res.json(patterns);
    } catch (error) {
      console.error('ML pattern analysis error:', error);
      res.status(500).json({ message: "خطأ في تحليل الأنماط" });
    }
  });

  app.get("/api/ml/optimization/:machineId", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.machineId) {
        return res.status(400).json({ message: "معرف المكينة مطلوب" });
      }
      
      const idStr = req.params.machineId as string;
      if (!/^\d+$/.test(idStr)) {
        return res.status(400).json({ message: "معرف المكينة غير صحيح" });
      }
      const machineId = Number(idStr);
      
      const optimization = await mlService.optimizeProductionParameters(machineId);
      res.json(optimization);
    } catch (error) {
      console.error('ML optimization error:', error);
      res.status(500).json({ message: "خطأ في تحليل التحسينات" });
    }
  });

  app.post("/api/ml/train/:machineId", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.machineId) {
        return res.status(400).json({ message: "معرف المكينة مطلوب" });
      }
      
      const idStr = req.params.machineId as string;
      if (!/^\d+$/.test(idStr)) {
        return res.status(400).json({ message: "معرف المكينة غير صحيح" });
      }
      const machineId = Number(idStr);
      
      // محاكاة تدريب النموذج بإضافة بيانات عشوائية
      for (let i = 0; i < 50; i++) {
        const data = {
          timestamp: new Date(Date.now() - i * 3600000), // آخر 50 ساعة
          machineId,
          productionRate: 70 + Math.random() * 25,
          qualityScore: 80 + Math.random() * 15,
          wastePercentage: 2 + Math.random() * 6,
          temperature: 175 + Math.random() * 20,
          pressure: 10 + Math.random() * 5,
          speed: 75 + Math.random() * 20
        };
        await mlService.addProductionData(data);
      }
      
      res.json({ 
        success: true, 
        message: `تم تدريب النموذج للمكينة ${machineId} بنجاح`,
        dataPoints: 50
      });
    } catch (error) {
      console.error('ML training error:', error);
      res.status(500).json({ message: "خطأ في تدريب النموذج" });
    }
  });

  app.post("/api/ml/apply-optimization/:machineId", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.machineId) {
        return res.status(400).json({ message: "معرف المكينة مطلوب" });
      }
      
      const idStr = req.params.machineId as string;
      if (!/^\d+$/.test(idStr)) {
        return res.status(400).json({ message: "معرف المكينة غير صحيح" });
      }
      const machineId = Number(idStr);
      
      const optimization = req.body || {};
      
      // محاكاة تطبيق التحسينات
      res.json({ 
        success: true, 
        message: `تم تطبيق التحسينات على المكينة ${machineId}`,
        appliedSettings: optimization
      });
    } catch (error) {
      console.error('ML optimization application error:', error);
      res.status(500).json({ message: "خطأ في تطبيق التحسينات" });
    }
  });

  app.post("/api/ml/production-data", async (req, res) => {
    try {
      // Enhanced null safety for request body
      if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ message: "بيانات الإنتاج مطلوبة" });
      }
      
      const productionData = req.body;
      await mlService.addProductionData(productionData);
      res.json({ success: true, message: "تم إضافة البيانات بنجاح" });
    } catch (error) {
      console.error('ML data addition error:', error);
      res.status(500).json({ message: "خطأ في إضافة البيانات" });
    }
  });

  // Orders routes
  app.get("/api/orders", 
    requireAuth,
    async (req, res) => {
    try {
      const orders = await storage.getAllOrders();
      
      if (!Array.isArray(orders)) {
        return res.status(500).json({
          message: "خطأ في تحميل الطلبات",
          success: false
        });
      }

      res.json({
        data: orders,
        count: orders.length,
        success: true
      });
    } catch (error: any) {
      console.error("Orders fetch error:", error);
      
      if (error.name === 'DatabaseError') {
        return res.status(500).json({
          message: error.message,
          success: false
        });
      }
      
      res.status(500).json({ 
        message: "خطأ في جلب الطلبات",
        success: false
      });
    }
  });

  // Generate next order number
  app.get("/api/orders/next-number", requireAuth, async (req, res) => {
    try {
      // Prevent caching to ensure fresh order numbers
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      
      const orders = await storage.getAllOrders();
      const orderNumbers = orders
        .map((order: any) => order.order_number)
        .filter((num: string) => num && num.startsWith('ORD'))
        .map((num: string) => {
          const match = num.match(/^ORD(\d+)$/);
          if (!match || !match[1]) return 0;
          // Use parseInt directly for order numbers to handle leading zeros
          const parsed = parseInt(match[1], 10);
          return isNaN(parsed) || parsed < 1 ? 0 : parsed;
        })
        .filter(num => num > 0); // Remove invalid entries (zeros)
      
      const nextNumber = orderNumbers.length > 0 ? Math.max(...orderNumbers) + 1 : 1;
      const orderNumber = `ORD${nextNumber.toString().padStart(3, '0')}`;
      
      res.json({ orderNumber });
    } catch (error) {
      console.error("Order number generation error:", error);
      res.status(500).json({ message: "خطأ في توليد رقم الطلب" });
    }
  });

  app.post("/api/orders", 
    requireAuth,
    validateRequest({ body: commonSchemas.createOrder }),
    async (req, res) => {
    try {
      // Session is already validated by requireAuth middleware
      const userId = req.session.userId;
      if (!userId || typeof userId !== 'number') {
        return res.status(401).json({ 
          message: "معرف المستخدم غير صحيح",
          success: false
        });
      }

      // Validate required fields are present
      const { customer_id, order_number } = req.body;
      if (!customer_id?.trim()) {
        return res.status(400).json({
          message: "معرف العميل مطلوب",
          success: false
        });
      }

      if (!order_number?.trim()) {
        return res.status(400).json({
          message: "رقم الطلب مطلوب",
          success: false
        });
      }

      // Prepare order data with safe defaults
      let deliveryDays: number | null = null;
      if (req.body.delivery_days) {
        try {
          deliveryDays = parseIntSafe(req.body.delivery_days, "Delivery days", { min: 1, max: 365 });
        } catch (error) {
          return res.status(400).json({
            message: `Invalid delivery days: ${error instanceof Error ? error.message : 'Invalid value'}`,
            success: false
          });
        }
      }
      
      const orderData = {
        ...req.body,
        created_by: userId,
        delivery_days: deliveryDays,
        customer_id: customer_id.trim(),
        order_number: order_number.trim(),
        notes: req.body.notes?.trim() || null
      };

      const validatedData = insertNewOrderSchema.parse(orderData);
      const order = await storage.createOrder(validatedData);
      
      if (!order) {
        return res.status(500).json({
          message: "فشل في إنشاء الطلب",
          success: false
        });
      }

      res.status(201).json({
        data: order,
        message: "تم إنشاء الطلب بنجاح",
        success: true
      });
    } catch (error: any) {
      console.error("Order creation error:", error);
      
      if (error.name === 'DatabaseError') {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      
      res.status(500).json({ 
        message: "خطأ في إنشاء الطلب",
        success: false
      });
    }
  });

  app.delete("/api/orders/:id", 
    requireAuth,
    validateRequest({ params: commonSchemas.idParam }),
    async (req, res) => {
    try {
      const orderId = parseInt(req.params.id);
      
      if (!orderId || isNaN(orderId) || orderId <= 0) {
        return res.status(400).json({
          message: "معرف الطلب غير صحيح",
          success: false
        });
      }

      // Check if order exists before deletion
      const existingOrder = await storage.getOrderById(orderId);
      if (!existingOrder) {
        return res.status(404).json({
          message: "الطلب غير موجود",
          success: false
        });
      }

      await storage.deleteOrder(orderId);
      
      res.json({ 
        message: "تم حذف الطلب بنجاح",
        success: true
      });
    } catch (error: any) {
      console.error("Order deletion error:", error);
      
      if (error.name === 'DatabaseError') {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      
      res.status(500).json({ 
        message: "خطأ في حذف الطلب",
        success: false
      });
    }
  });

  // Get orders for production page
  app.get("/api/production/orders-for-production", requireAuth, async (req, res) => {
    try {
      const orders = await storage.getOrdersForProduction();
      res.json(orders);
    } catch (error) {
      console.error("Error fetching orders for production:", error);
      res.status(500).json({ message: "خطأ في جلب طلبات الإنتاج" });
    }
  });

  // Get hierarchical orders for production page
  app.get("/api/production/hierarchical-orders", requireAuth, async (req, res) => {
    try {
      const orders = await storage.getHierarchicalOrdersForProduction();
      res.json(orders);
    } catch (error) {
      console.error("Error fetching hierarchical orders for production:", error);
      res.status(500).json({ message: "خطأ في جلب طلبات الإنتاج الهرمية" });
    }
  });

  // Production Orders routes
  app.get("/api/production-orders", requireAuth, async (req, res) => {
    try {
      const productionOrders = await storage.getAllProductionOrders();
      res.json(productionOrders);
    } catch (error) {
      console.error("Error fetching production orders:", error);
      res.status(500).json({ message: "خطأ في جلب أوامر الإنتاج" });
    }
  });

  app.post("/api/production-orders", requireAuth, async (req, res) => {
    try {
      const validatedData = insertProductionOrderSchema.parse(req.body);
      const productionOrder = await storage.createProductionOrder(validatedData);
      res.status(201).json(productionOrder);
    } catch (error) {
      console.error("Error creating production order:", error);
      if (error instanceof Error && 'issues' in error) {
        res.status(400).json({ message: "بيانات غير صحيحة", errors: error });
      } else {
        res.status(500).json({ message: "خطأ في إنشاء أمر الإنتاج" });
      }
    }
  });

  app.put("/api/production-orders/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertProductionOrderSchema.partial().parse(req.body);
      const productionOrder = await storage.updateProductionOrder(id, validatedData);
      res.json(productionOrder);
    } catch (error) {
      console.error("Error updating production order:", error);
      res.status(500).json({ message: "خطأ في تحديث أمر الإنتاج" });
    }
  });

  app.delete("/api/production-orders/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteProductionOrder(id);
      res.json({ message: "تم حذف أمر الإنتاج بنجاح" });
    } catch (error) {
      console.error("Error deleting production order:", error);
      res.status(500).json({ message: "خطأ في حذف أمر الإنتاج" });
    }
  });

  // Preview quantity calculations for production orders
  app.post("/api/production-orders/preview-quantities", requireAuth, async (req, res) => {
    try {
      const { customer_product_id, quantity_kg } = req.body;

      // Validate inputs
      if (!customer_product_id || !quantity_kg || quantity_kg <= 0) {
        return res.status(400).json({ 
          message: "معرف المنتج والكمية الأساسية مطلوبان",
          success: false 
        });
      }

      // Get specific customer product info for intelligent calculation (optimized with cache)
      const customerProducts = await storage.getCustomerProducts();
      const customerProduct = customerProducts.find(cp => cp.id === parseInt(customer_product_id));
      
      if (!customerProduct) {
        return res.status(404).json({ 
          message: "المنتج غير موجود",
          success: false 
        });
      }

      // Calculate quantities using intelligent system
      const quantityCalculation = calculateProductionQuantities(
        parseFloat(quantity_kg), 
        customerProduct.punching
      );

      res.json({
        success: true,
        data: {
          customer_product_id: parseInt(customer_product_id),
          quantity_kg: parseFloat(quantity_kg),
          overrun_percentage: quantityCalculation.overrunPercentage,
          final_quantity_kg: quantityCalculation.finalQuantityKg,
          overrun_reason: quantityCalculation.overrunReason,
          product_info: {
            punching: customerProduct.punching,
            size_caption: customerProduct.size_caption,
            raw_material: customerProduct.raw_material,
            master_batch_id: customerProduct.master_batch_id
          }
        }
      });
    } catch (error) {
      console.error("Quantity preview error:", error);
      res.status(500).json({ 
        message: "خطأ في حساب الكمية",
        success: false 
      });
    }
  });

  // Get all orders with enhanced search and filtering
  app.get("/api/orders/enhanced", requireAuth, async (req, res) => {
    try {
      const { 
        search, 
        customer_id, 
        status, 
        date_from, 
        date_to, 
        page = 1, 
        limit = 50 
      } = req.query;

      // Build dynamic query with filters (performance optimized)
      const orders = await storage.getOrdersEnhanced({
        search: search as string,
        customer_id: customer_id as string,
        status: status as string,
        date_from: date_from as string,
        date_to: date_to as string,
        page: parseInt(page as string),
        limit: parseInt(limit as string)
      });

      res.json({
        success: true,
        data: orders
      });
    } catch (error) {
      console.error("Enhanced orders fetch error:", error);
      res.status(500).json({ 
        message: "خطأ في جلب الطلبات",
        success: false 
      });
    }
  });


  // Rolls routes with pagination support
  app.get("/api/rolls", requireAuth, async (req, res) => {
    try {
      const { stage, limit, offset } = req.query;
      const options = {
        limit: limit ? parseInt(limit as string) : undefined,
        offset: offset ? parseInt(offset as string) : undefined,
        stage: stage as string
      };
      
      if (stage) {
        const rolls = await storage.getRollsByStage(stage as string, {
          limit: options.limit,
          offset: options.offset
        });
        res.json(rolls);
      } else {
        const rolls = await storage.getRolls(options);
        res.json(rolls);
      }
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب الرولات" });
    }
  });


  app.patch("/api/rolls/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const roll = await storage.updateRoll(id, updates);
      res.json(roll);
    } catch (error) {
      res.status(400).json({ message: "خطأ في تحديث الرول" });
    }
  });

  // Machines routes
  app.get("/api/machines", requireAuth, async (req, res) => {
    try {
      const machines = await storage.getMachines();
      res.json(machines);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب المكائن" });
    }
  });

  // Customers routes
  app.get("/api/customers", requireAuth, async (req, res) => {
    try {
      const customers = await storage.getCustomers();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب العملاء" });
    }
  });

  // Health check endpoint for deployment
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });

  // ================ ADVANCED REPORTING API ROUTES ================

  // Order Reports
  app.get("/api/reports/orders", requireAuth, async (req, res) => {
    try {
      const { date_from, date_to } = req.query;
      const reports = await storage.getOrderReports(
        date_from as string, 
        date_to as string
      );
      res.json({
        success: true,
        data: reports
      });
    } catch (error) {
      console.error("Order reports error:", error);
      res.status(500).json({ 
        message: "خطأ في جلب تقارير الطلبات",
        success: false 
      });
    }
  });

  // Advanced Metrics (OEE, Cycle Time, Quality)
  app.get("/api/reports/advanced-metrics", requireAuth, async (req, res) => {
    try {
      const { date_from, date_to } = req.query;
      const metrics = await storage.getAdvancedMetrics(
        date_from as string, 
        date_to as string
      );
      res.json({
        success: true,
        data: metrics
      });
    } catch (error) {
      console.error("Advanced metrics error:", error);
      res.status(500).json({ 
        message: "خطأ في جلب المؤشرات المتقدمة",
        success: false 
      });
    }
  });

  // HR Reports
  app.get("/api/reports/hr", requireAuth, async (req, res) => {
    try {
      const { date_from, date_to } = req.query;
      const reports = await storage.getHRReports(
        date_from as string, 
        date_to as string
      );
      res.json({
        success: true,
        data: reports
      });
    } catch (error) {
      console.error("HR reports error:", error);
      res.status(500).json({ 
        message: "خطأ في جلب تقارير الموارد البشرية",
        success: false 
      });
    }
  });

  // Maintenance Reports
  app.get("/api/reports/maintenance", requireAuth, async (req, res) => {
    try {
      const { date_from, date_to } = req.query;
      const reports = await storage.getMaintenanceReports(
        date_from as string, 
        date_to as string
      );
      res.json({
        success: true,
        data: reports
      });
    } catch (error) {
      console.error("Maintenance reports error:", error);
      res.status(500).json({ 
        message: "خطأ في جلب تقارير الصيانة",
        success: false 
      });
    }
  });

  // Comprehensive Dashboard Report (All KPIs)
  app.get("/api/reports/dashboard", requireAuth, async (req, res) => {
    try {
      const { date_from, date_to } = req.query;
      
      // Fetch all reports in parallel for better performance
      const [
        orderReports,
        advancedMetrics,
        hrReports,
        maintenanceReports,
        realTimeStats,
        userPerformance,
        rolePerformance,
        machineUtilization,
        productionEfficiency,
        productionAlerts
      ] = await Promise.all([
        storage.getOrderReports(date_from as string, date_to as string),
        storage.getAdvancedMetrics(date_from as string, date_to as string),
        storage.getHRReports(date_from as string, date_to as string),
        storage.getMaintenanceReports(date_from as string, date_to as string),
        storage.getRealTimeProductionStats(),
        storage.getUserPerformanceStats(undefined, date_from as string, date_to as string),
        storage.getRolePerformanceStats(date_from as string, date_to as string),
        storage.getMachineUtilizationStats(date_from as string, date_to as string),
        storage.getProductionEfficiencyMetrics(date_from as string, date_to as string),
        storage.getProductionAlerts()
      ]);

      res.json({
        success: true,
        data: {
          orders: orderReports,
          metrics: advancedMetrics,
          hr: hrReports,
          maintenance: maintenanceReports,
          realTime: realTimeStats,
          userPerformance,
          rolePerformance,
          machineUtilization,
          productionEfficiency,
          alerts: productionAlerts
        },
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error("Comprehensive dashboard error:", error);
      res.status(500).json({ 
        message: "خطأ في جلب التقرير الشامل",
        success: false 
      });
    }
  });

  // Export Report (Placeholder for PDF/Excel export)
  app.post("/api/reports/export", requireAuth, async (req, res) => {
    try {
      const { 
        report_type, 
        format, 
        date_from, 
        date_to, 
        filters 
      } = req.body;

      // Basic validation
      if (!report_type || !format) {
        return res.status(400).json({
          message: "نوع التقرير والصيغة مطلوبان",
          success: false
        });
      }

      // Get the requested report data
      let reportData;
      switch (report_type) {
        case 'orders':
          reportData = await storage.getOrderReports(date_from, date_to);
          break;
        case 'advanced-metrics':
          reportData = await storage.getAdvancedMetrics(date_from, date_to);
          break;
        case 'hr':
          reportData = await storage.getHRReports(date_from, date_to);
          break;
        case 'maintenance':
          reportData = await storage.getMaintenanceReports(date_from, date_to);
          break;
        default:
          return res.status(400).json({
            message: "نوع التقرير غير صحيح",
            success: false
          });
      }

      // For now, return the data as JSON
      // TODO: Implement actual PDF/Excel generation
      const exportData = {
        report_type,
        format,
        generated_at: new Date().toISOString(),
        date_range: { from: date_from, to: date_to },
        filters,
        data: reportData
      };

      if (format === 'json') {
        res.json({
          success: true,
          data: exportData
        });
      } else {
        // For PDF/Excel, return download link or base64 data
        res.json({
          success: true,
          message: `تم تجهيز التقرير بصيغة ${format}`,
          download_url: `/api/reports/download/${report_type}-${Date.now()}.${format}`,
          data: exportData
        });
      }
    } catch (error) {
      console.error("Export report error:", error);
      res.status(500).json({ 
        message: "خطأ في تصدير التقرير",
        success: false 
      });
    }
  });

  // Base API endpoint - return 404 instead of serving HTML
  app.get("/api", (req, res) => {
    res.status(404).json({ 
      message: "API endpoint not found", 
      availableEndpoints: [
        "/api/health",
        "/api/me", 
        "/api/login",
        "/api/logout",
        "/api/orders",
        "/api/production-orders",
        "/api/notifications"
      ]
    });
  });

  // Handle HEAD requests to /api to stop constant polling - suppress logging
  app.head("/api", (req, res) => {
    // Don't log these spam requests - they're likely from browser extensions or dev tools
    res.status(404).end();
  });

  // Customers routes  
  app.post("/api/customers", async (req, res) => {
    try {
      console.log('Received customer data:', req.body);
      const validatedData = insertCustomerSchema.parse(req.body);
      console.log('Validated customer data:', validatedData);
      const customer = await storage.createCustomer(validatedData);
      res.json(customer);
    } catch (error) {
      console.error('Customer creation error:', error);
      if (error instanceof Error) {
        console.error('Error message:', error.message);
      }
      res.status(400).json({ message: "بيانات غير صحيحة", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  app.put("/api/customers/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const validatedData = insertCustomerSchema.parse(req.body);
      const customer = await storage.updateCustomer(id, validatedData);
      res.json(customer);
    } catch (error) {
      console.error('Customer update error:', error);
      res.status(400).json({ message: "خطأ في تحديث العميل", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  // Sections routes
  app.get("/api/sections", async (req, res) => {
    try {
      const sections = await storage.getSections();
      res.json(sections);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب الأقسام" });
    }
  });

  // Material Groups routes (Categories)
  app.get("/api/material-groups", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      console.error('Error fetching material groups:', error);
      res.status(500).json({ message: "خطأ في جلب مجموعات المواد" });
    }
  });

  // Items routes
  app.get("/api/items", async (req, res) => {
    try {
      const items = await storage.getItems();
      res.json(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ message: "خطأ في جلب الأصناف" });
    }
  });

  // Customer Products routes
  app.get("/api/customer-products", async (req, res) => {
    try {
      const customerProducts = await storage.getCustomerProducts();
      res.json(customerProducts);
    } catch (error) {
      console.error("Customer products fetch error:", error);
      res.status(500).json({ message: "خطأ في جلب منتجات العملاء" });
    }
  });

  app.post("/api/customer-products", requireAuth, async (req, res) => {
    try {
      // STEP 1: Zod schema validation
      const validatedData = insertCustomerProductSchema.parse(req.body);
      
      // STEP 2: DataValidator integration for business rules
      const validationResult = await getDataValidator(storage).validateData('customer_products', validatedData);
      if (!validationResult.isValid) {
        const criticalErrors = validationResult.errors.filter(e => e.severity === 'critical' || e.severity === 'high');
        if (criticalErrors.length > 0) {
          return res.status(400).json({ 
            message: criticalErrors[0].message_ar || criticalErrors[0].message,
            errors: validationResult.errors,
            success: false
          });
        }
      }
      
      // STEP 3: Create customer product with validated data
      const customerProduct = await storage.createCustomerProduct(validatedData);
      
      res.status(201).json({
        data: customerProduct,
        message: "تم إنشاء منتج العميل بنجاح",
        success: true
      });
    } catch (error: any) {
      console.error('Customer product creation error:', error);
      
      if (error.name === 'DatabaseError') {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      
      res.status(500).json({ 
        message: "خطأ في إنشاء منتج العميل",
        success: false 
      });
    }
  });

  // Locations routes
  app.get("/api/locations", async (req, res) => {
    try {
      const locations = await storage.getLocations();
      res.json(locations);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب المواقع" });
    }
  });

  app.post("/api/locations", async (req, res) => {
    try {
      const validatedData = insertLocationSchema.parse(req.body);
      const location = await storage.createLocationExtended(validatedData);
      res.json(location);
    } catch (error) {
      console.error('Location creation error:', error);
      res.status(400).json({ message: "بيانات غير صحيحة" });
    }
  });

  app.put("/api/locations/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const validatedData = insertLocationSchema.partial().parse(req.body);
      const location = await storage.updateLocationExtended(id, validatedData);
      res.json(location);
    } catch (error) {
      console.error('Location update error:', error);
      res.status(400).json({ message: "فشل في تحديث الموقع" });
    }
  });

  // Inventory movements routes
  app.get("/api/inventory-movements", async (req, res) => {
    try {
      const movements = await storage.getInventoryMovements();
      res.json(movements);
    } catch (error) {
      console.error('Error fetching inventory movements:', error);
      res.status(500).json({ message: "خطأ في جلب حركات المخزون" });
    }
  });

  app.post("/api/inventory-movements", async (req, res) => {
    try {
      const validatedData = insertInventoryMovementSchema.parse(req.body);
      const movement = await storage.createInventoryMovement(validatedData);
      res.json(movement);
    } catch (error) {
      console.error('Inventory movement creation error:', error);
      res.status(400).json({ message: "بيانات غير صحيحة" });
    }
  });

  app.delete("/api/inventory-movements/:id", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.id) {
        return res.status(400).json({ message: "معرف الحركة مطلوب" });
      }
      
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "معرف الحركة غير صحيح" });
      }
      
      const success = await storage.deleteInventoryMovement(id);
      if (success) {
        res.json({ message: "تم حذف الحركة بنجاح" });
      } else {
        res.status(404).json({ message: "الحركة غير موجودة" });
      }
    } catch (error) {
      console.error('Inventory movement deletion error:', error);
      res.status(500).json({ message: "خطأ في حذف الحركة" });
    }
  });

  // Users routes
  app.get("/api/users", async (req, res) => {
    try {
      const users = await storage.getSafeUsers();
      res.json(users);
    } catch (error) {
      console.error('Error fetching safe users:', error);
      res.status(500).json({ message: "خطأ في جلب المستخدمين" });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.id) {
        return res.status(400).json({ message: "معرف المستخدم مطلوب" });
      }
      
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "معرف المستخدم غير صحيح" });
      }
      
      const user = await storage.getSafeUser(id);
      if (!user) {
        return res.status(404).json({ message: "المستخدم غير موجود" });
      }
      res.json(user);
    } catch (error) {
      console.error('Error fetching safe user by ID:', error);
      res.status(500).json({ message: "خطأ في جلب بيانات المستخدم" });
    }
  });

  // Categories routes (for material groups)
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب الفئات" });
    }
  });

  app.post("/api/categories", async (req, res) => {
    try {
      console.log('Received category data:', req.body);
      
      // Generate sequential ID if not provided with enhanced null safety
      let categoryId = req.body?.id;
      if (!categoryId) {
        const existingCategories = await storage.getCategories() || [];
        const categoryNumbers = existingCategories
          .map(cat => cat?.id)
          .filter(id => id && typeof id === 'string' && id.startsWith('CAT') && id.length <= 6) // Standard format only
          .map(id => {
            const num = id.replace('CAT', '');
            const parsed = parseInt(num);
            return isNaN(parsed) ? 0 : parsed;
          })
          .filter(num => num > 0)
          .sort((a, b) => b - a);
        
        const nextNumber = categoryNumbers.length > 0 ? categoryNumbers[0] + 1 : 1;
        categoryId = nextNumber < 10 ? `CAT0${nextNumber}` : `CAT${nextNumber}`;
      }
      
      // Enhanced null safety for request body processing
      const processedData = {
        ...req.body,
        id: categoryId,
        parent_id: (!req.body?.parent_id || req.body.parent_id === 'none' || req.body.parent_id === '') ? null : req.body.parent_id,
        code: (!req.body?.code || req.body.code === '') ? null : req.body.code
      };
      
      console.log('Processed category data:', processedData);
      const category = await storage.createCategory(processedData);
      console.log('Created category:', category);
      res.json(category);
    } catch (error) {
      console.error('Category creation error:', error);
      res.status(500).json({ message: "خطأ في إنشاء الفئة", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  app.put("/api/categories/:id", async (req, res) => {
    try {
      const id = req.params.id;
      console.log('Updating category:', id, req.body);
      
      const processedData = {
        ...req.body,
        parent_id: req.body.parent_id === 'none' || req.body.parent_id === '' ? null : req.body.parent_id,
        code: req.body.code === '' || !req.body.code ? null : req.body.code
      };
      
      const category = await storage.updateCategory(id, processedData);
      res.json(category);
    } catch (error) {
      console.error('Category update error:', error);
      res.status(500).json({ message: "خطأ في تحديث الفئة", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  app.delete("/api/categories/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await storage.deleteCategory(id);
      res.json({ message: "تم حذف الفئة بنجاح" });
    } catch (error) {
      console.error('Category deletion error:', error);
      res.status(500).json({ message: "خطأ في حذف الفئة", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  // Training Records routes
  app.get("/api/training-records", async (req, res) => {
    try {
      const trainingRecords = await storage.getTrainingRecords();
      res.json(trainingRecords);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب سجلات التدريب" });
    }
  });

  app.post("/api/training-records", async (req, res) => {
    try {
      const trainingRecord = await storage.createTrainingRecord(req.body);
      res.json(trainingRecord);
    } catch (error) {
      res.status(400).json({ message: "بيانات غير صحيحة" });
    }
  });

  // Admin Decisions routes
  app.get("/api/admin-decisions", async (req, res) => {
    try {
      const adminDecisions = await storage.getAdminDecisions();
      res.json(adminDecisions);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب القرارات الإدارية" });
    }
  });

  app.post("/api/admin-decisions", async (req, res) => {
    try {
      const adminDecision = await storage.createAdminDecision(req.body);
      res.json(adminDecision);
    } catch (error) {
      res.status(400).json({ message: "بيانات غير صحيحة" });
    }
  });

  // Warehouse Transactions routes
  app.get("/api/warehouse-transactions", async (req, res) => {
    try {
      const warehouseTransactions = await storage.getWarehouseTransactions();
      res.json(warehouseTransactions);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب حركات المستودع" });
    }
  });

  app.post("/api/warehouse-transactions", async (req, res) => {
    try {
      const warehouseTransaction = await storage.createWarehouseTransaction(req.body);
      res.json(warehouseTransaction);
    } catch (error) {
      res.status(400).json({ message: "بيانات غير صحيحة" });
    }
  });

  // Mixing Recipes routes
  app.get("/api/mixing-recipes", async (req, res) => {
    try {
      const mixingRecipes = await storage.getMixingRecipes();
      res.json(mixingRecipes);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب وصفات الخلط" });
    }
  });

  app.post("/api/mixing-recipes", async (req, res) => {
    try {
      const mixingRecipe = await storage.createMixingRecipe(req.body);
      res.json(mixingRecipe);
    } catch (error) {
      res.status(400).json({ message: "بيانات غير صحيحة" });
    }
  });




  // Maintenance routes
  app.get("/api/maintenance", async (req, res) => {
    try {
      const requests = await storage.getMaintenanceRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب طلبات الصيانة" });
    }
  });

  app.post("/api/maintenance", async (req, res) => {
    try {
      const validatedData = insertMaintenanceRequestSchema.parse(req.body);
      const request = await storage.createMaintenanceRequest(validatedData);
      res.json(request);
    } catch (error) {
      res.status(400).json({ message: "بيانات غير صحيحة" });
    }
  });

  // Quality checks routes
  app.get("/api/quality-checks", async (req, res) => {
    try {
      const qualityChecks = await storage.getQualityChecks();
      res.json(qualityChecks);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب فحوصات الجودة" });
    }
  });

  // Maintenance requests routes
  app.get("/api/maintenance-requests", async (req, res) => {
    try {
      const maintenanceRequests = await storage.getMaintenanceRequests();
      res.json(maintenanceRequests);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب طلبات الصيانة" });
    }
  });

  app.post("/api/maintenance-requests", async (req, res) => {
    try {
      console.log('Creating maintenance request with data:', req.body);
      const validatedData = insertMaintenanceRequestSchema.parse(req.body);
      const request = await storage.createMaintenanceRequest(validatedData);
      console.log('Created maintenance request:', request);
      res.json(request);
    } catch (error) {
      console.error('Error creating maintenance request:', error);
      res.status(500).json({ 
        message: "خطأ في إنشاء طلب الصيانة", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Maintenance Actions routes
  app.get("/api/maintenance-actions", async (req, res) => {
    try {
      const actions = await storage.getAllMaintenanceActions();
      res.json(actions);
    } catch (error) {
      console.error('Error fetching maintenance actions:', error);
      res.status(500).json({ message: "خطأ في جلب إجراءات الصيانة" });
    }
  });

  app.get("/api/maintenance-actions/request/:requestId", async (req, res) => {
    try {
      const requestId = parseInt(req.params.requestId);
      const actions = await storage.getMaintenanceActionsByRequestId(requestId);
      res.json(actions);
    } catch (error) {
      console.error('Error fetching maintenance actions by request:', error);
      res.status(500).json({ message: "خطأ في جلب إجراءات الصيانة للطلب" });
    }
  });

  app.post("/api/maintenance-actions", async (req, res) => {
    try {
      console.log('Creating maintenance action with data:', req.body);
      const data = insertMaintenanceActionSchema.parse(req.body);
      console.log('Parsed action data:', data);
      const action = await storage.createMaintenanceAction(data);
      console.log('Created maintenance action:', action);
      res.json(action);
    } catch (error) {
      console.error('Error creating maintenance action:', error);
      res.status(500).json({ 
        message: "خطأ في إنشاء إجراء الصيانة",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  app.put("/api/maintenance-actions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const action = await storage.updateMaintenanceAction(id, req.body);
      res.json(action);
    } catch (error) {
      console.error('Error updating maintenance action:', error);
      res.status(500).json({ message: "خطأ في تحديث إجراء الصيانة" });
    }
  });

  app.delete("/api/maintenance-actions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteMaintenanceAction(id);
      res.json({ message: "تم حذف إجراء الصيانة بنجاح" });
    } catch (error) {
      console.error('Error deleting maintenance action:', error);
      res.status(500).json({ message: "خطأ في حذف إجراء الصيانة" });
    }
  });

  // Maintenance Reports routes
  app.get("/api/maintenance-reports", async (req, res) => {
    try {
      const { type } = req.query;
      const reports = type 
        ? await storage.getMaintenanceReportsByType(type as string)
        : await storage.getAllMaintenanceReports();
      res.json(reports);
    } catch (error) {
      console.error('Error fetching maintenance reports:', error);
      res.status(500).json({ message: "خطأ في جلب بلاغات الصيانة" });
    }
  });

  app.post("/api/maintenance-reports", async (req, res) => {
    try {
      const data = insertMaintenanceReportSchema.parse(req.body);
      const report = await storage.createMaintenanceReport(data);
      res.json(report);
    } catch (error) {
      console.error('Error creating maintenance report:', error);
      res.status(500).json({ message: "خطأ في إنشاء بلاغ الصيانة" });
    }
  });

  app.put("/api/maintenance-reports/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const report = await storage.updateMaintenanceReport(id, req.body);
      res.json(report);
    } catch (error) {
      console.error('Error updating maintenance report:', error);
      res.status(500).json({ message: "خطأ في تحديث بلاغ الصيانة" });
    }
  });

  app.delete("/api/maintenance-reports/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteMaintenanceReport(id);
      res.json({ message: "تم حذف بلاغ الصيانة بنجاح" });
    } catch (error) {
      console.error('Error deleting maintenance report:', error);
      res.status(500).json({ message: "خطأ في حذف بلاغ الصيانة" });
    }
  });

  // Operator Negligence Reports routes
  app.get("/api/operator-negligence-reports", async (req, res) => {
    try {
      const { operator_id } = req.query;
      const reports = operator_id 
        ? await storage.getOperatorNegligenceReportsByOperator(parseInt(operator_id as string))
        : await storage.getAllOperatorNegligenceReports();
      res.json(reports);
    } catch (error) {
      console.error('Error fetching operator negligence reports:', error);
      res.status(500).json({ message: "خطأ في جلب بلاغات إهمال المشغلين" });
    }
  });

  app.post("/api/operator-negligence-reports", async (req, res) => {
    try {
      const data = insertOperatorNegligenceReportSchema.parse(req.body);
      const report = await storage.createOperatorNegligenceReport(data);
      res.json(report);
    } catch (error) {
      console.error('Error creating operator negligence report:', error);
      res.status(500).json({ message: "خطأ في إنشاء بلاغ إهمال المشغل" });
    }
  });

  app.put("/api/operator-negligence-reports/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const report = await storage.updateOperatorNegligenceReport(id, req.body);
      res.json(report);
    } catch (error) {
      console.error('Error updating operator negligence report:', error);
      res.status(500).json({ message: "خطأ في تحديث بلاغ إهمال المشغل" });
    }
  });

  app.delete("/api/operator-negligence-reports/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteOperatorNegligenceReport(id);
      res.json({ message: "تم حذف بلاغ إهمال المشغل بنجاح" });
    } catch (error) {
      console.error('Error deleting operator negligence report:', error);
      res.status(500).json({ message: "خطأ في حذف بلاغ إهمال المشغل" });
    }
  });

  // Spare Parts routes
  app.get("/api/spare-parts", async (req, res) => {
    try {
      const spareParts = await storage.getAllSpareParts();
      res.json(spareParts);
    } catch (error) {
      console.error('Error fetching spare parts:', error);
      res.status(500).json({ message: "خطأ في جلب قطع الغيار" });
    }
  });

  app.post("/api/spare-parts", async (req, res) => {
    try {
      const sparePart = await storage.createSparePart(req.body);
      res.json(sparePart);
    } catch (error) {
      console.error('Error creating spare part:', error);
      res.status(500).json({ message: "خطأ في إنشاء قطعة الغيار" });
    }
  });

  app.put("/api/spare-parts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const sparePart = await storage.updateSparePart(id, req.body);
      res.json(sparePart);
    } catch (error) {
      console.error('Error updating spare part:', error);
      res.status(500).json({ message: "خطأ في تحديث قطعة الغيار" });
    }
  });

  app.delete("/api/spare-parts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteSparePart(id);
      res.json({ message: "تم حذف قطعة الغيار بنجاح" });
    } catch (error) {
      console.error('Error deleting spare part:', error);
      res.status(500).json({ message: "خطأ في حذف قطعة الغيار" });
    }
  });

  // Consumable Parts routes
  app.get("/api/consumable-parts", async (req, res) => {
    try {
      const consumableParts = await storage.getAllConsumableParts();
      res.json(consumableParts);
    } catch (error) {
      console.error('Error fetching consumable parts:', error);
      res.status(500).json({ message: "خطأ في جلب قطع الغيار الاستهلاكية" });
    }
  });

  app.post("/api/consumable-parts", async (req, res) => {
    try {
      const consumablePart = await storage.createConsumablePart(req.body);
      res.json(consumablePart);
    } catch (error) {
      console.error('Error creating consumable part:', error);
      res.status(500).json({ message: "خطأ في إنشاء قطعة الغيار الاستهلاكية" });
    }
  });

  app.put("/api/consumable-parts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const consumablePart = await storage.updateConsumablePart(id, req.body);
      res.json(consumablePart);
    } catch (error) {
      console.error('Error updating consumable part:', error);
      res.status(500).json({ message: "خطأ في تحديث قطعة الغيار الاستهلاكية" });
    }
  });

  app.delete("/api/consumable-parts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteConsumablePart(id);
      res.json({ message: "تم حذف قطعة الغيار الاستهلاكية بنجاح" });
    } catch (error) {
      console.error('Error deleting consumable part:', error);
      res.status(500).json({ message: "خطأ في حذف قطعة الغيار الاستهلاكية" });
    }
  });

  // Consumable Parts Transactions routes
  app.get("/api/consumable-parts-transactions", async (req, res) => {
    try {
      const transactions = await storage.getConsumablePartTransactions();
      res.json(transactions);
    } catch (error) {
      console.error('Error fetching consumable parts transactions:', error);
      res.status(500).json({ message: "خطأ في جلب حركات قطع الغيار الاستهلاكية" });
    }
  });

  app.get("/api/consumable-parts-transactions/part/:partId", async (req, res) => {
    try {
      const partId = parseInt(req.params.partId);
      const transactions = await storage.getConsumablePartTransactionsByPartId(partId);
      res.json(transactions);
    } catch (error) {
      console.error('Error fetching consumable parts transactions by part:', error);
      res.status(500).json({ message: "خطأ في جلب حركات قطعة الغيار الاستهلاكية" });
    }
  });

  app.post("/api/consumable-parts-transactions", async (req, res) => {
    try {
      const transaction = await storage.createConsumablePartTransaction(req.body);
      res.json(transaction);
    } catch (error) {
      console.error('Error creating consumable parts transaction:', error);
      res.status(500).json({ message: "خطأ في إنشاء حركة قطعة الغيار الاستهلاكية" });
    }
  });

  // Barcode scanning endpoint for consumable parts
  app.post("/api/consumable-parts/scan-barcode", async (req, res) => {
    try {
      const { barcode } = req.body;
      if (!barcode) {
        return res.status(400).json({ message: "الباركود مطلوب" });
      }
      
      const consumablePart = await storage.getConsumablePartByBarcode(barcode);
      if (!consumablePart) {
        return res.status(404).json({ message: "لم يتم العثور على قطعة غيار بهذا الباركود" });
      }
      
      res.json(consumablePart);
    } catch (error) {
      console.error('Error scanning barcode:', error);
      res.status(500).json({ message: "خطأ في قراءة الباركود" });
    }
  });

  // Process barcode transaction (in/out)
  app.post("/api/consumable-parts/barcode-transaction", async (req, res) => {
    try {
      const { barcode, transaction_type, quantity, transaction_reason, notes, manual_entry } = req.body;
      
      if (!barcode || !transaction_type || !quantity) {
        return res.status(400).json({ message: "الباركود ونوع الحركة والكمية مطلوبة" });
      }

      // Find consumable part by barcode
      const consumablePart = await storage.getConsumablePartByBarcode(barcode);
      if (!consumablePart) {
        return res.status(404).json({ message: "لم يتم العثور على قطعة غيار بهذا الباركود" });
      }

      // Create transaction
      const transactionData = {
        consumable_part_id: consumablePart.id,
        transaction_type,
        quantity: parseInt(quantity),
        barcode_scanned: barcode,
        manual_entry: manual_entry || false,
        transaction_reason: transaction_reason || '',
        notes: notes || '',
        performed_by: req.session.userId || 1
      };

      const transaction = await storage.processConsumablePartBarcodeTransaction(transactionData);
      res.json(transaction);
    } catch (error) {
      console.error('Error processing barcode transaction:', error);
      res.status(500).json({ message: "خطأ في معالجة حركة الباركود" });
    }
  });

  // Attendance routes
  app.get("/api/attendance", async (req, res) => {
    try {
      const attendance = await storage.getAttendance();
      res.json(attendance);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب بيانات الحضور" });
    }
  });

  // AI Assistant routes
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, context, userId } = req.body;
      
      if (!message) {
        return res.status(400).json({ message: "الرسالة مطلوبة" });
      }

      // استخدام المساعد الذكي المتطور
      const reply = await openaiService.processMessage(message, userId);
      res.json({ reply });
    } catch (error) {
      console.error('AI Chat Error:', error);
      const fallbackResponse = generateFallbackResponse(req.body.message);
      res.json({ reply: fallbackResponse });
    }
  });

  // AI Voice Command endpoint
  app.post("/api/ai/voice-command", async (req, res) => {
    try {
      const { command, language = 'ar-SA', context = 'voice_assistant' } = req.body;
      
      if (!command || typeof command !== 'string') {
        return res.status(400).json({ message: "أمر صوتي غير صالح" });
      }

      const { dialect } = req.body;
      const result = await openaiService.processVoiceCommand(command, language, dialect);
      
      // Map actions to actual system operations
      let actionData = null;
      switch (result.action) {
        case 'navigate_dashboard':
          actionData = { route: '/dashboard' };
          break;
        case 'navigate_orders':
          actionData = { route: '/orders' };
          break;
        case 'navigate_production':
          actionData = { route: '/production' };
          break;
        case 'navigate_maintenance':
          actionData = { route: '/maintenance' };
          break;
        case 'navigate_definitions':
          actionData = { route: '/definitions' };
          break;
        case 'navigate_hr':
          actionData = { route: '/hr' };
          break;
        case 'navigate_quality':
          actionData = { route: '/quality' };
          break;
        case 'navigate_reports':
          actionData = { route: '/reports' };
          break;
        case 'show_stats':
          actionData = { queryKey: '/api/dashboard/stats' };
          break;
        case 'refresh_orders':
          actionData = { queryKey: '/api/orders' };
          break;
        case 'refresh_machines':
          actionData = { queryKey: '/api/machines' };
          break;
        case 'refresh_production':
          actionData = { queryKey: '/api/production-orders' };
          break;
      }

      res.json({
        message: result.response,
        action: result.action !== 'none' ? result.action : null,
        data: actionData,
        intent: result.intent,
        parameters: result.parameters
      });
    } catch (error) {
      console.error('Voice Command Error:', error);
      res.status(500).json({ message: "خطأ في معالجة الأمر الصوتي" });
    }
  });

  // AI Advanced Features routes
  app.post("/api/ai/generate-report", async (req, res) => {
    try {
      const { reportType, parameters, userId } = req.body;
      
      if (!reportType) {
        return res.status(400).json({ message: "نوع التقرير مطلوب" });
      }

      const { AIReports } = await import('./services/ai-reports');
      
      let report;
      switch (reportType.toLowerCase()) {
        case 'production':
        case 'إنتاج':
          report = await AIReports.generateProductionReport(parameters);
          break;
        case 'quality':
        case 'جودة':
          report = await AIReports.generateQualityReport(parameters);
          break;
        case 'maintenance':
        case 'صيانة':
          report = await AIReports.generateMaintenanceReport(parameters);
          break;
        case 'sales':
        case 'مبيعات':
          report = await AIReports.generateSalesReport(parameters);
          break;
        default:
          report = await AIReports.generateCustomReport(reportType, parameters);
      }

      res.json({ report });
    } catch (error) {
      console.error('Report Generation Error:', error);
      res.status(500).json({ message: "خطأ في توليد التقرير الذكي" });
    }
  });

  app.get("/api/ai/notifications", async (req, res) => {
    try {
      const { AINotifications } = await import('./services/ai-notifications');
      const notifications = AINotifications.getActiveNotifications();
      res.json({ notifications });
    } catch (error) {
      console.error('Notifications Error:', error);
      res.status(500).json({ message: "خطأ في جلب الإشعارات" });
    }
  });

  app.post("/api/ai/monitor", async (req, res) => {
    try {
      const { AINotifications } = await import('./services/ai-notifications');
      const notifications = await AINotifications.performIntelligentMonitoring();
      res.json({ notifications, count: notifications.length });
    } catch (error) {
      console.error('Monitoring Error:', error);
      res.status(500).json({ message: "خطأ في النظام الذكي للمراقبة" });
    }
  });

  app.get("/api/ai/learning-stats", async (req, res) => {
    try {
      const { AILearning } = await import('./services/ai-learning');
      const stats = AILearning.getLearningStatistics();
      res.json({ stats });
    } catch (error) {
      console.error('Learning Stats Error:', error);
      res.status(500).json({ message: "خطأ في جلب إحصائيات التعلم" });
    }
  });

  app.get("/api/ai/recommendations/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const { AILearning } = await import('./services/ai-learning');
      const recommendations = await AILearning.getPersonalizedRecommendations(parseInt(userId));
      res.json({ recommendations });
    } catch (error) {
      console.error('Recommendations Error:', error);
      res.status(500).json({ message: "خطأ في جلب التوصيات المخصصة" });
    }
  });

  app.post("/api/ai/feedback", async (req, res) => {
    try {
      const { userId, actionType, context, feedback } = req.body;
      
      const { AILearning } = await import('./services/ai-learning');
      await AILearning.recordLearningData(userId, actionType, context, true, 0, feedback);
      
      res.json({ message: "تم تسجيل التعليق بنجاح" });
    } catch (error) {
      console.error('Feedback Error:', error);
      res.status(500).json({ message: "خطأ في تسجيل التعليق" });
    }
  });

  function generateFallbackResponse(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('إنتاج') || lowerMessage.includes('production')) {
      return 'بناءً على البيانات الحالية، معدل الإنتاج يبلغ 85%. يمكنك مراجعة تفاصيل أكثر في صفحة الإنتاج.';
    } else if (lowerMessage.includes('جودة') || lowerMessage.includes('quality')) {
      return 'فحوصات الجودة تتم بانتظام. يمكنك مراجعة نتائج الفحوصات من صفحة إدارة الجودة.';
    } else if (lowerMessage.includes('صيانة') || lowerMessage.includes('maintenance')) {
      return 'هناك طلبات صيانة نشطة. يرجى مراجعة صفحة الصيانة للتفاصيل.';
    } else if (lowerMessage.includes('موظف') || lowerMessage.includes('employee')) {
      return 'يمكنك مراجعة حضور الموظفين وإدارة الموارد البشرية من القسم المخصص.';
    } else {
      return 'شكراً لك على استفسارك. يمكنني مساعدتك في معلومات حول الإنتاج، الجودة، الصيانة، والموارد البشرية. ما الذي تريد معرفته؟';
    }
  }

  // Dashboard stats endpoint
  app.get("/api/dashboard/stats", async (req, res) => {
    try {
      const stats = {
        activeOrders: 12,
        productionRate: 85,
        presentEmployees: 18,
        totalEmployees: 22,
        maintenanceAlerts: 2
      };
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب إحصائيات لوحة المتابعة" });
    }
  });

  // Rolls endpoint
  app.get("/api/rolls", async (req, res) => {
    try {
      const rolls = await storage.getRolls();
      res.json(rolls);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب الرولات" });
    }
  });

  // Reports endpoint
  app.get("/api/reports", async (req, res) => {
    try {
      const reports: any[] = []; // Placeholder for reports data
      res.json(reports);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب التقارير" });
    }
  });

  // Machines routes  
  app.get("/api/machines", async (req, res) => {
    try {
      const machines = await storage.getMachines();
      res.json(machines);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب المكائن" });
    }
  });

  app.post("/api/machines", requireAuth, async (req, res) => {
    try {
      console.log('Received machine data:', req.body);
      
      // Generate sequential ID if not provided with enhanced null safety
      let machineId = req.body?.id;
      if (!machineId) {
        // Get the latest machine to determine the next sequential number
        const existingMachines = await storage.getMachines() || [];
        const machineNumbers = existingMachines
          .map(machine => machine?.id)
          .filter(id => id && typeof id === 'string' && id.startsWith('MAC'))
          .map(id => {
            const num = id.replace('MAC', '');
            const parsed = parseInt(num);
            return isNaN(parsed) ? 0 : parsed;
          })
          .filter(num => num > 0)
          .sort((a, b) => b - a);
        
        const nextNumber = machineNumbers.length > 0 ? machineNumbers[0] + 1 : 1;
        machineId = `MAC${nextNumber.toString().padStart(2, '0')}`;
      }
      
      const processedData = {
        ...req.body,
        id: machineId
      };
      
      // STEP 1: DataValidator integration for business rules
      const validationResult = await getDataValidator(storage).validateData('machines', processedData);
      if (!validationResult.isValid) {
        const criticalErrors = validationResult.errors.filter(e => e.severity === 'critical' || e.severity === 'high');
        if (criticalErrors.length > 0) {
          return res.status(400).json({ 
            message: criticalErrors[0].message_ar || criticalErrors[0].message,
            errors: validationResult.errors,
            success: false
          });
        }
      }
      
      console.log('Processed machine data:', processedData);
      const machine = await storage.createMachine(processedData);
      console.log('Created machine:', machine);
      
      res.status(201).json({
        data: machine,
        message: "تم إنشاء الماكينة بنجاح",
        success: true
      });
    } catch (error: any) {
      console.error('Machine creation error:', error);
      
      if (error.name === 'DatabaseError') {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      
      res.status(500).json({ 
        message: "خطأ في إنشاء الماكينة",
        success: false 
      });
    }
  });

  app.put("/api/machines/:id", async (req, res) => {
    try {
      const id = req.params.id; // Now using string ID
      console.log('Updating machine:', id, req.body);
      const machine = await storage.updateMachine(id, req.body);
      res.json(machine);
    } catch (error) {
      console.error('Machine update error:', error);
      res.status(500).json({ message: "خطأ في تحديث الماكينة", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  // Users routes
  app.post("/api/users", async (req, res) => {
    try {
      console.log('Received user data:', req.body);
      
      // ID will be auto-generated by the database (serial/auto-increment)

      // Handle role_id conversion - convert role name to role ID
      let roleId = null;
      if (req.body.role_id && req.body.role_id !== '' && req.body.role_id !== 'none') {
        if (typeof req.body.role_id === 'string') {
          // If it's a role name like 'admin', convert to role ID
          const roles = await storage.getRoles();
          const role = roles.find(r => r.name === req.body.role_id || r.name_ar === req.body.role_id);
          if (role) {
            roleId = role.id;
          } else {
            // If it's a numeric string, parse it
            const parsed = parseInt(req.body.role_id);
            if (!isNaN(parsed)) {
              roleId = parsed;
            }
          }
        } else if (typeof req.body.role_id === 'number') {
          roleId = req.body.role_id;
        }
      }

      // Handle section_id - convert section string ID to integer
      let sectionId = null;
      if (req.body.section_id && req.body.section_id !== '' && req.body.section_id !== 'none') {
        // Simple mapping from section string ID to integer
        const sectionMapping: { [key: string]: number } = {
          'SEC01': 1,
          'SEC02': 2,
          'SEC03': 3,
          'SEC04': 4,
          'SEC05': 5,
          'SEC06': 6,
          'SEC07': 7
        };
        sectionId = sectionMapping[req.body.section_id] || null;
      }
      
      const processedData = {
        username: req.body.username,
        password: req.body.password || 'defaultPassword',
        display_name: req.body.display_name,
        display_name_ar: req.body.display_name_ar,
        role_id: roleId,
        section_id: sectionId,
        status: req.body.status || 'active'
      };
      
      console.log('Processed user data:', processedData);
      const user = await storage.createUser(processedData);
      console.log('Created user:', user);
      res.json(user);
    } catch (error) {
      console.error('User creation error:', error);
      res.status(500).json({ message: "خطأ في إنشاء المستخدم", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  app.put("/api/users/:id", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.id) {
        return res.status(400).json({ message: "معرف المستخدم مطلوب" });
      }
      
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "معرف المستخدم غير صحيح" });
      }
      
      if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ message: "بيانات التحديث مطلوبة" });
      }
      
      console.log('Updating user:', id, req.body);
      
      // Process role_id and section_id to convert empty strings and "none" to null with enhanced null safety
      let roleId = null;
      if (req.body?.role_id && req.body.role_id !== '' && req.body.role_id !== 'none') {
        const roleMapping = {
          'ROLE01': 1,
          'ROLE02': 2,
          'ROLE03': 3,
          'ROLE04': 4,
          'ROLE05': 5,
          'ROLE06': 6,
          'ROLE07': 7
        };
        roleId = roleMapping[req.body.role_id as keyof typeof roleMapping] ?? null;
      }
      
      let sectionId = null;
      if (req.body?.section_id && req.body.section_id !== '' && req.body.section_id !== 'none') {
        const sectionMapping = {
          'SEC01': 1,
          'SEC02': 2,
          'SEC03': 3,
          'SEC04': 4,
          'SEC05': 5,
          'SEC06': 6,
          'SEC07': 7
        };
        sectionId = sectionMapping[req.body.section_id as keyof typeof sectionMapping] ?? null;
      }
      
      const processedData = {
        ...req.body,
        role_id: roleId,
        section_id: sectionId
      };
      
      console.log('Processed role_id:', roleId, 'from:', req.body.role_id);
      console.log('Processed section_id:', sectionId, 'from:', req.body.section_id);
      
      const user = await storage.updateUser(id, processedData);
      if (!user) {
        return res.status(404).json({ message: "المستخدم غير موجود" });
      }
      res.json(user);
    } catch (error) {
      console.error('User update error:', error);
      res.status(500).json({ message: "خطأ في تحديث المستخدم", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  // Roles management routes
  app.get("/api/roles", async (req, res) => {
    try {
      const roles = await storage.getRoles();
      res.json(roles);
    } catch (error) {
      console.error('Roles fetch error:', error);
      res.status(500).json({ message: "خطأ في جلب الأدوار" });
    }
  });

  app.post("/api/roles", async (req, res) => {
    try {
      console.log('Received role data:', req.body);
      const role = await storage.createRole(req.body);
      console.log('Created role:', role);
      res.json(role);
    } catch (error) {
      console.error('Role creation error:', error);
      res.status(500).json({ message: "خطأ في إنشاء الدور", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  app.put("/api/roles/:id", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.id) {
        return res.status(400).json({ message: "معرف الدور مطلوب" });
      }
      
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "معرف الدور غير صحيح" });
      }
      
      if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ message: "بيانات التحديث مطلوبة" });
      }
      
      console.log('Updating role:', id, req.body);
      const role = await storage.updateRole(id, req.body);
      if (!role) {
        return res.status(404).json({ message: "الدور غير موجود" });
      }
      res.json(role);
    } catch (error) {
      console.error('Role update error:', error);
      res.status(500).json({ message: "خطأ في تحديث الدور", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  app.delete("/api/roles/:id", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.id) {
        return res.status(400).json({ message: "معرف الدور مطلوب" });
      }
      
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "معرف الدور غير صحيح" });
      }
      
      await storage.deleteRole(id);
      // If no error thrown, deletion was successful
      res.json({ message: "تم حذف الدور بنجاح" });
    } catch (error) {
      console.error('Role deletion error:', error);
      res.status(500).json({ message: "خطأ في حذف الدور", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  // Sections routes
  app.post("/api/sections", async (req, res) => {
    try {
      console.log('Received section data:', req.body);
      
      // Generate sequential ID if not provided with enhanced null safety
      let sectionId = req.body?.id;
      if (!sectionId) {
        // Get the latest section to determine the next sequential number
        const existingSections = await storage.getSections() || [];
        const sectionNumbers = existingSections
          .map(section => section?.id)
          .filter(id => id && typeof id === 'string' && id.startsWith('SEC'))
          .map(id => {
            const num = id.replace('SEC', '');
            const parsed = parseInt(num);
            return isNaN(parsed) ? 0 : parsed;
          })
          .filter(num => num > 0)
          .sort((a, b) => b - a);
        
        const nextNumber = sectionNumbers.length > 0 ? sectionNumbers[0] + 1 : 1;
        sectionId = `SEC${nextNumber.toString().padStart(2, '0')}`;
      }
      
      const processedData = {
        ...req.body,
        id: sectionId
      };
      
      console.log('Processed section data:', processedData);
      const section = await storage.createSection(processedData);
      console.log('Created section:', section);
      res.json(section);
    } catch (error) {
      console.error('Section creation error:', error);
      res.status(500).json({ message: "خطأ في إنشاء القسم", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  app.put("/api/sections/:id", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.id?.trim()) {
        return res.status(400).json({ message: "معرف القسم مطلوب" });
      }
      
      if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ message: "بيانات التحديث مطلوبة" });
      }
      
      const id = req.params.id.trim();
      const section = await storage.updateSection(id, req.body);
      if (!section) {
        return res.status(404).json({ message: "القسم غير موجود" });
      }
      res.json(section);
    } catch (error) {
      res.status(500).json({ message: "خطأ في تحديث القسم" });
    }
  });

  // Material Groups routes




  // Items routes
  app.post("/api/items", async (req, res) => {
    try {
      console.log('Received item data:', req.body);
      
      // Generate sequential ID if not provided with enhanced null safety
      let itemId = req.body?.id;
      if (!itemId) {
        // Get the latest item to determine the next sequential number
        const existingItems = await storage.getItems() || [];
        const itemNumbers = existingItems
          .map(item => item?.id)
          .filter(id => id && typeof id === 'string' && id.startsWith('ITEM'))
          .map(id => {
            const num = id.replace('ITEM', '');
            const parsed = parseInt(num);
            return isNaN(parsed) ? 0 : parsed;
          })
          .filter(num => num > 0)
          .sort((a, b) => b - a);
        
        const nextNumber = itemNumbers.length > 0 ? itemNumbers[0] + 1 : 1;
        itemId = `ITEM${nextNumber.toString().padStart(3, '0')}`;
      }
      
      // Convert empty strings to null for optional fields with enhanced null safety
      const processedData = {
        ...req.body,
        id: itemId,
        category_id: (!req.body?.category_id || req.body.category_id === '' || req.body.category_id === 'none') ? null : req.body.category_id,
        code: (!req.body?.code || req.body.code === '') ? null : req.body.code
      };
      
      console.log('Processed item data:', processedData);
      const item = await storage.createItem(processedData);
      console.log('Created item:', item);
      res.json(item);
    } catch (error) {
      console.error('Item creation error:', error);
      console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
      res.status(500).json({ message: "خطأ في إنشاء الصنف", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  app.put("/api/items/:id", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.id?.trim()) {
        return res.status(400).json({ message: "معرف الصنف مطلوب" });
      }
      
      if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ message: "بيانات التحديث مطلوبة" });
      }
      
      const id = req.params.id.trim();
      console.log('Updating item:', id, req.body);
      
      // Convert empty strings to null for optional fields with enhanced null safety
      const processedData = {
        ...req.body,
        category_id: (!req.body?.category_id || req.body.category_id === '' || req.body.category_id === 'none') ? null : req.body.category_id,
        code: (!req.body?.code || req.body.code === '') ? null : req.body.code
      };
      
      console.log('Processed item update data:', processedData);
      const item = await storage.updateItem(id, processedData);
      if (!item) {
        return res.status(404).json({ message: "الصنف غير موجود" });
      }
      res.json(item);
    } catch (error) {
      console.error('Item update error:', error);
      res.status(500).json({ message: "خطأ في تحديث الصنف", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  // Customer Products routes
  app.post("/api/customer-products", async (req, res) => {
    try {
      // Convert material_group_id to category_id for backwards compatibility
      const processedData = {
        ...req.body,
        category_id: req.body.material_group_id || req.body.category_id,
      };
      delete processedData.material_group_id;
      
      const customerProduct = await storage.createCustomerProduct(processedData);
      res.json(customerProduct);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء منتج العميل" });
    }
  });

  app.put("/api/customer-products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      
      // Validate the ID parameter
      if (isNaN(id)) {
        return res.status(400).json({ message: "معرف المنتج غير صحيح" });
      }
      
      // Validate request body using Zod schema
      const validation = insertCustomerProductSchema.safeParse({
        ...req.body,
        category_id: req.body.material_group_id || req.body.category_id,
      });
      
      if (!validation.success) {
        console.error('Customer product validation error:', validation.error.errors);
        return res.status(400).json({ 
          message: "بيانات غير صحيحة", 
          errors: validation.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      
      // Remove material_group_id for backwards compatibility
      const processedData = { ...validation.data };
      delete (processedData as any).material_group_id;
      
      const customerProduct = await storage.updateCustomerProduct(id, processedData);
      
      if (!customerProduct) {
        return res.status(404).json({ message: "منتج العميل غير موجود" });
      }
      
      res.json(customerProduct);
    } catch (error) {
      console.error('Customer product update error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ 
        message: "خطأ في تحديث منتج العميل", 
        error: errorMessage 
      });
    }
  });

  // Locations routes
  app.post("/api/locations", async (req, res) => {
    try {
      console.log('Received location data:', req.body);
      
      // Generate sequential ID if not provided
      let locationId = req.body.id;
      if (!locationId) {
        // Get the latest location to determine the next sequential number
        const existingLocations = await storage.getLocations();
        const locationNumbers = existingLocations
          .map(location => location.id)
          .filter(id => id.startsWith('LOC'))
          .map(id => parseInt(id.replace('LOC', '')))
          .filter(num => !isNaN(num))
          .sort((a, b) => b - a);
        
        const nextNumber = locationNumbers.length > 0 ? locationNumbers[0] + 1 : 1;
        locationId = `LOC${nextNumber.toString().padStart(2, '0')}`;
      }
      
      const processedData = {
        ...req.body,
        id: locationId
      };
      
      console.log('Processed location data:', processedData);
      const location = await storage.createLocation(processedData);
      console.log('Created location:', location);
      res.json(location);
    } catch (error) {
      console.error('Location creation error:', error);
      res.status(500).json({ message: "خطأ في إنشاء الموقع", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  app.put("/api/locations/:id", async (req, res) => {
    try {
      const id = req.params.id; // Now using string ID
      console.log('Updating location:', id, req.body);
      const location = await storage.updateLocation(id, req.body);
      res.json(location);
    } catch (error) {
      console.error('Location update error:', error);
      res.status(500).json({ message: "خطأ في تحديث الموقع", error: error instanceof Error ? error.message : 'Unknown error' });
    }
  });

  // ============ HR System API Routes ============

  // Training Programs
  app.get("/api/hr/training-programs", async (req, res) => {
    try {
      const programs = await storage.getTrainingPrograms();
      res.json(programs);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب البرامج التدريبية" });
    }
  });

  app.post("/api/hr/training-programs", async (req, res) => {
    try {
      const program = await storage.createTrainingProgram(req.body);
      res.json(program);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء البرنامج التدريبي" });
    }
  });

  app.put("/api/hr/training-programs/:id", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.id) {
        return res.status(400).json({ message: "معرف البرنامج التدريبي مطلوب" });
      }
      
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "معرف البرنامج التدريبي غير صحيح" });
      }
      
      if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ message: "بيانات التحديث مطلوبة" });
      }
      
      const program = await storage.updateTrainingProgram(id, req.body);
      if (!program) {
        return res.status(404).json({ message: "البرنامج التدريبي غير موجود" });
      }
      res.json(program);
    } catch (error) {
      res.status(500).json({ message: "خطأ في تحديث البرنامج التدريبي" });
    }
  });

  app.get("/api/hr/training-programs/:id", async (req, res) => {
    try {
      // Enhanced parameter validation
      if (!req.params?.id) {
        return res.status(400).json({ message: "معرف البرنامج التدريبي مطلوب" });
      }
      
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "معرف البرنامج التدريبي غير صحيح" });
      }
      
      const program = await storage.getTrainingProgramById(id);
      if (!program) {
        return res.status(404).json({ message: "البرنامج التدريبي غير موجود" });
      }
      res.json(program);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب البرنامج التدريبي" });
    }
  });

  // Training Materials
  app.get("/api/hr/training-materials", async (req, res) => {
    try {
      // Enhanced query parameter validation
      let programId: number | undefined;
      if (req.query?.program_id) {
        const programIdParam = parseInt(req.query.program_id as string);
        programId = !isNaN(programIdParam) && programIdParam > 0 ? programIdParam : undefined;
      }
      
      const materials = await storage.getTrainingMaterials(programId);
      if (!materials) {
        return res.json([]); // Return empty array instead of null
      }
      res.json(materials);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب المواد التدريبية" });
    }
  });

  app.post("/api/hr/training-materials", async (req, res) => {
    try {
      const material = await storage.createTrainingMaterial(req.body);
      res.json(material);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء المادة التدريبية" });
    }
  });

  // Training Enrollments  
  app.get("/api/hr/training-enrollments", async (req, res) => {
    try {
      // Enhanced query parameter validation
      let employeeId: number | undefined;
      if (req.query?.employee_id) {
        const employeeIdParam = parseInt(req.query.employee_id as string);
        employeeId = !isNaN(employeeIdParam) && employeeIdParam > 0 ? employeeIdParam : undefined;
      }
      
      const enrollments = await storage.getTrainingEnrollments(employeeId);
      if (!enrollments) {
        return res.json([]); // Return empty array instead of null
      }
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب التسجيلات التدريبية" });
    }
  });

  app.post("/api/hr/training-enrollments", async (req, res) => {
    try {
      const enrollment = await storage.createTrainingEnrollment(req.body);
      res.json(enrollment);
    } catch (error) {
      res.status(500).json({ message: "خطأ في تسجيل الموظف في البرنامج" });
    }
  });

  app.put("/api/hr/training-enrollments/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const enrollment = await storage.updateTrainingEnrollment(id, req.body);
      res.json(enrollment);
    } catch (error) {
      res.status(500).json({ message: "خطأ في تحديث التسجيل التدريبي" });
    }
  });

  // Training Evaluations
  app.get("/api/hr/training-evaluations", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? parseInt(req.query.employee_id as string) : undefined;
      const programId = req.query.program_id ? parseInt(req.query.program_id as string) : undefined;
      const evaluations = await storage.getTrainingEvaluations(employeeId, programId);
      res.json(evaluations);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب التقييمات التدريبية" });
    }
  });

  app.post("/api/hr/training-evaluations", async (req, res) => {
    try {
      const evaluation = await storage.createTrainingEvaluation(req.body);
      res.json(evaluation);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء التقييم التدريبي" });
    }
  });

  app.put("/api/hr/training-evaluations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const evaluation = await storage.updateTrainingEvaluation(id, req.body);
      res.json(evaluation);
    } catch (error) {
      res.status(500).json({ message: "خطأ في تحديث التقييم التدريبي" });
    }
  });

  app.get("/api/hr/training-evaluations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const evaluation = await storage.getTrainingEvaluationById(id);
      if (evaluation) {
        res.json(evaluation);
      } else {
        res.status(404).json({ message: "التقييم التدريبي غير موجود" });
      }
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب التقييم التدريبي" });
    }
  });

  // Training Certificates
  app.get("/api/hr/training-certificates", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? parseInt(req.query.employee_id as string) : undefined;
      const certificates = await storage.getTrainingCertificates(employeeId);
      res.json(certificates);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب الشهادات التدريبية" });
    }
  });

  app.post("/api/hr/training-certificates", async (req, res) => {
    try {
      const certificate = await storage.createTrainingCertificate(req.body);
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء الشهادة التدريبية" });
    }
  });

  app.post("/api/hr/training-certificates/generate/:enrollmentId", async (req, res) => {
    try {
      const enrollmentId = parseInt(req.params.enrollmentId);
      const certificate = await storage.generateTrainingCertificate(enrollmentId);
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إصدار الشهادة التدريبية" });
    }
  });

  app.put("/api/hr/training-certificates/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const certificate = await storage.updateTrainingCertificate(id, req.body);
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: "خطأ في تحديث الشهادة التدريبية" });
    }
  });

  // Training Evaluations
  app.get("/api/hr/training-evaluations", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? parseInt(req.query.employee_id as string) : undefined;
      const programId = req.query.program_id ? parseInt(req.query.program_id as string) : undefined;
      const evaluations = await storage.getTrainingEvaluations(employeeId, programId);
      res.json(evaluations);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب تقييمات التدريب" });
    }
  });

  app.post("/api/hr/training-evaluations", async (req, res) => {
    try {
      const evaluation = await storage.createTrainingEvaluation(req.body);
      res.json(evaluation);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء تقييم التدريب" });
    }
  });

  app.put("/api/hr/training-evaluations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const evaluation = await storage.updateTrainingEvaluation(id, req.body);
      res.json(evaluation);
    } catch (error) {
      res.status(500).json({ message: "خطأ في تحديث تقييم التدريب" });
    }
  });

  // Training Certificates
  app.get("/api/hr/training-certificates", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? parseInt(req.query.employee_id as string) : undefined;
      const certificates = await storage.getTrainingCertificates(employeeId);
      res.json(certificates);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب شهادات التدريب" });
    }
  });

  app.post("/api/hr/training-certificates", async (req, res) => {
    try {
      const certificate = await storage.createTrainingCertificate(req.body);
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء شهادة التدريب" });
    }
  });

  app.get("/api/hr/training-certificates/:id/generate", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const certificate = await storage.generateTrainingCertificate(id);
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: "خطأ في توليد شهادة التدريب" });
    }
  });

  // Performance Reviews
  app.get("/api/hr/performance-reviews", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? req.query.employee_id as string : undefined;
      const reviews = await storage.getPerformanceReviews(employeeId);
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب تقييمات الأداء" });
    }
  });

  app.post("/api/hr/performance-reviews", async (req, res) => {
    try {
      const review = await storage.createPerformanceReview(req.body);
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء تقييم الأداء" });
    }
  });

  app.put("/api/hr/performance-reviews/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const review = await storage.updatePerformanceReview(id, req.body);
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: "خطأ في تحديث تقييم الأداء" });
    }
  });

  // Performance Criteria
  app.get("/api/hr/performance-criteria", async (req, res) => {
    try {
      const criteria = await storage.getPerformanceCriteria();
      res.json(criteria);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب معايير التقييم" });
    }
  });

  app.post("/api/hr/performance-criteria", async (req, res) => {
    try {
      const criteria = await storage.createPerformanceCriteria(req.body);
      res.json(criteria);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء معيار التقييم" });
    }
  });

  // Leave Types
  app.get("/api/hr/leave-types", async (req, res) => {
    try {
      const leaveTypes = await storage.getLeaveTypes();
      res.json(leaveTypes);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب أنواع الإجازات" });
    }
  });

  app.post("/api/hr/leave-types", async (req, res) => {
    try {
      const leaveType = await storage.createLeaveType(req.body);
      res.json(leaveType);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء نوع الإجازة" });
    }
  });

  // Leave Requests
  app.get("/api/hr/leave-requests", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? req.query.employee_id as string : undefined;
      const requests = await storage.getLeaveRequests(employeeId);
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب طلبات الإجازات" });
    }
  });

  app.post("/api/hr/leave-requests", async (req, res) => {
    try {
      const request = await storage.createLeaveRequest(req.body);
      res.json(request);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء طلب الإجازة" });
    }
  });

  app.put("/api/hr/leave-requests/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const request = await storage.updateLeaveRequest(id, req.body);
      res.json(request);
    } catch (error) {
      res.status(500).json({ message: "خطأ في تحديث طلب الإجازة" });
    }
  });

  app.get("/api/hr/leave-requests/pending", async (req, res) => {
    try {
      const requests = await storage.getPendingLeaveRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب الطلبات المعلقة" });
    }
  });

  // Leave Balances
  app.get("/api/hr/leave-balances/:employeeId", async (req, res) => {
    try {
      const employeeId = req.params.employeeId;
      const year = req.query.year ? parseInt(req.query.year as string) : undefined;
      const balances = await storage.getLeaveBalances(employeeId, year);
      res.json(balances);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب أرصدة الإجازات" });
    }
  });

  app.post("/api/hr/leave-balances", async (req, res) => {
    try {
      const balance = await storage.createLeaveBalance(req.body);
      res.json(balance);
    } catch (error) {
      res.status(500).json({ message: "خطأ في إنشاء رصيد الإجازة" });
    }
  });

  // DELETE routes for definitions
  app.delete("/api/customers/:id", async (req, res) => {
    try {
      await storage.deleteCustomer(req.params.id);
      res.json({ message: "تم حذف العميل بنجاح" });
    } catch (error) {
      res.status(500).json({ message: "خطأ في حذف العميل" });
    }
  });

  app.delete("/api/sections/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await storage.deleteSection(id);
      res.json({ message: "تم حذف القسم بنجاح" });
    } catch (error) {
      res.status(500).json({ message: "خطأ في حذف القسم" });
    }
  });



  app.delete("/api/items/:id", async (req, res) => {
    try {
      await storage.deleteItem(req.params.id);
      res.json({ message: "تم حذف الصنف بنجاح" });
    } catch (error) {
      res.status(500).json({ message: "خطأ في حذف الصنف" });
    }
  });

  app.delete("/api/customer-products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteCustomerProduct(id);
      res.json({ message: "تم حذف منتج العميل بنجاح" });
    } catch (error) {
      res.status(500).json({ message: "خطأ في حذف منتج العميل" });
    }
  });

  app.delete("/api/locations/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await storage.deleteLocation(id);
      res.json({ message: "تم حذف الموقع بنجاح" });
    } catch (error) {
      res.status(500).json({ message: "خطأ في حذف الموقع" });
    }
  });

  app.delete("/api/machines/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await storage.deleteMachine(id);
      res.json({ message: "تم حذف الماكينة بنجاح" });
    } catch (error) {
      res.status(500).json({ message: "خطأ في حذف الماكينة" });
    }
  });

  app.delete("/api/users/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteUser(id);
      res.json({ message: "تم حذف المستخدم بنجاح" });
    } catch (error) {
      res.status(500).json({ message: "خطأ في حذف المستخدم" });
    }
  });

  // Inventory Management routes
  app.get("/api/inventory", async (req, res) => {
    try {
      const inventory = await storage.getInventoryItems();
      res.json(inventory);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب بيانات المخزون" });
    }
  });

  app.get("/api/inventory/stats", async (req, res) => {
    try {
      const stats = await storage.getInventoryStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "خطأ في جلب إحصائيات المخزون" });
    }
  });

  app.post("/api/inventory", requireAuth, async (req, res) => {
    try {
      // STEP 1: Zod schema validation
      const validatedData = insertInventorySchema.parse(req.body);
      
      // STEP 2: DataValidator integration for business rules
      const validationResult = await getDataValidator(storage).validateData('inventory', validatedData);
      if (!validationResult.isValid) {
        const criticalErrors = validationResult.errors.filter(e => e.severity === 'critical' || e.severity === 'high');
        if (criticalErrors.length > 0) {
          return res.status(400).json({ 
            message: criticalErrors[0].message_ar || criticalErrors[0].message,
            errors: validationResult.errors,
            success: false
          });
        }
      }
      
      // STEP 3: Create inventory item with validated data
      const item = await storage.createInventoryItem(validatedData);
      
      res.status(201).json({
        data: item,
        message: "تم إضافة صنف المخزون بنجاح",
        success: true
      });
    } catch (error: any) {
      console.error('Inventory creation error:', error);
      
      if (error.name === 'DatabaseError') {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      
      res.status(500).json({ 
        message: "خطأ في إضافة صنف للمخزون",
        success: false 
      });
    }
  });

  app.put("/api/inventory/:id", requireAuth, async (req, res) => {
    try {
      // STEP 1: Parameter validation
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ 
          message: "معرف المخزون غير صحيح",
          success: false 
        });
      }
      
      // STEP 2: Zod schema validation (partial for updates)
      const validatedData = insertInventorySchema.partial().parse(req.body);
      
      // STEP 3: DataValidator integration for business rules
      const validationResult = await getDataValidator(storage).validateData('inventory', validatedData, true);
      if (!validationResult.isValid) {
        const criticalErrors = validationResult.errors.filter(e => e.severity === 'critical' || e.severity === 'high');
        if (criticalErrors.length > 0) {
          return res.status(400).json({ 
            message: criticalErrors[0].message_ar || criticalErrors[0].message,
            errors: validationResult.errors,
            success: false
          });
        }
      }
      
      // STEP 4: Update inventory item with validated data
      const item = await storage.updateInventoryItem(id, validatedData);
      
      res.json({
        data: item,
        message: "تم تحديث صنف المخزون بنجاح",
        success: true
      });
    } catch (error: any) {
      console.error('Inventory update error:', error);
      
      if (error.name === 'DatabaseError') {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      
      res.status(500).json({ 
        message: "خطأ في تحديث صنف المخزون",
        success: false 
      });
    }
  });

  app.delete("/api/inventory/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteInventoryItem(id);
      res.json({ message: "تم حذف صنف المخزون بنجاح" });
    } catch (error) {
      res.status(500).json({ message: "خطأ في حذف صنف المخزون" });
    }
  });

  // ============ Locations Management API ============
  
  app.get("/api/locations", async (req, res) => {
    try {
      const locations = await storage.getLocations();
      res.json(locations);
    } catch (error) {
      console.error('Error fetching locations:', error);
      res.status(500).json({ message: "خطأ في جلب المواقع" });
    }
  });

  app.post("/api/locations", async (req, res) => {
    try {
      const result = insertLocationSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "بيانات غير صحيحة", errors: result.error.errors });
      }
      
      const location = await storage.createLocationExtended(result.data);
      res.status(201).json(location);
    } catch (error) {
      console.error('Error creating location:', error);
      res.status(500).json({ message: "خطأ في إنشاء الموقع" });
    }
  });

  app.put("/api/locations/:id", async (req, res) => {
    try {
      const locationId = req.params.id;
      const result = insertLocationSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "بيانات غير صحيحة", errors: result.error.errors });
      }
      
      const location = await storage.updateLocationExtended(locationId, result.data);
      res.json(location);
    } catch (error) {
      console.error('Error updating location:', error);
      res.status(500).json({ message: "خطأ في تحديث الموقع" });
    }
  });

  // ============ Inventory Movements Management API ============
  
  app.get("/api/inventory-movements", async (req, res) => {
    try {
      const movements = await storage.getAllInventoryMovements();
      res.json(movements);
    } catch (error) {
      console.error('Error fetching inventory movements:', error);
      res.status(500).json({ message: "خطأ في جلب حركات المخزون" });
    }
  });

  app.post("/api/inventory-movements", async (req, res) => {
    try {
      const result = insertInventoryMovementSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "بيانات غير صحيحة", errors: result.error.errors });
      }
      
      const movement = await storage.createInventoryMovement(result.data);
      res.status(201).json(movement);
    } catch (error) {
      console.error('Error creating inventory movement:', error);
      res.status(500).json({ message: "خطأ في إنشاء حركة المخزون" });
    }
  });

  app.delete("/api/inventory-movements/:id", async (req, res) => {
    try {
      const movementId = parseInt(req.params.id);
      await storage.deleteInventoryMovement(movementId);
      res.json({ message: "تم حذف الحركة بنجاح" });
    } catch (error) {
      console.error('Error deleting inventory movement:', error);
      res.status(500).json({ message: "خطأ في حذف الحركة" });
    }
  });

  // ============ Orders Management API ============
  
  app.get("/api/orders", async (req, res) => {
    try {
      const orders = await storage.getAllOrders();
      res.json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: "خطأ في جلب الطلبات" });
    }
  });

  app.post("/api/orders", async (req, res) => {
    try {
      console.log('Received order data:', req.body);
      const order = await storage.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ message: "خطأ في إنشاء الطلب" });
    }
  });

  app.put("/api/orders/:id", async (req, res) => {
    try {
      const orderId = parseInt(req.params.id);
      const result = insertNewOrderSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "بيانات غير صحيحة", errors: result.error.errors });
      }
      
      // Convert Date objects to strings for database compatibility
      const updateData = { 
        ...result.data,
        delivery_date: result.data.delivery_date ? result.data.delivery_date.toISOString().split('T')[0] : result.data.delivery_date
      };
      const order = await storage.updateOrder(orderId, updateData);
      res.json(order);
    } catch (error) {
      console.error('Error updating order:', error);
      res.status(500).json({ message: "خطأ في تحديث الطلب" });
    }
  });

  app.patch("/api/orders/:id/status", requireAuth, async (req, res) => {
    try {
      const orderId = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status) {
        return res.status(400).json({ message: "الحالة مطلوبة", success: false });
      }

      // Enhanced status validation with state transition rules (INVARIANT D)
      const validStatuses = ['waiting', 'in_production', 'paused', 'completed', 'cancelled', 'pending', 'for_production', 'on_hold', 'in_progress', 'delivered'];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "حالة غير صحيحة", success: false });
      }
      
      // STEP 1: Get current order status for state transition validation
      const currentOrder = await storage.getOrderById(orderId);
      if (!currentOrder) {
        return res.status(404).json({ message: "الطلب غير موجود", success: false });
      }
      
      // STEP 2: INVARIANT D - State transition validation with business rules
      const currentStatus = currentOrder.status;
      const newStatus = status;
      
      // Define valid state transitions based on business logic
      const validTransitions: Record<string, string[]> = {
        'pending': ['waiting', 'for_production', 'cancelled'],
        'waiting': ['in_production', 'for_production', 'on_hold', 'cancelled'],
        'for_production': ['in_production', 'waiting', 'on_hold', 'cancelled'],
        'in_production': ['paused', 'completed', 'on_hold', 'in_progress'],
        'in_progress': ['paused', 'completed', 'on_hold'],
        'paused': ['in_production', 'in_progress', 'cancelled'],
        'on_hold': ['waiting', 'for_production', 'cancelled'],
        'completed': ['delivered'], // Only allow delivery from completed
        'delivered': [], // Terminal state - no further transitions
        'cancelled': [] // Terminal state - no further transitions
      };
      
      // Check if transition is allowed
      const allowedNextStates = validTransitions[currentStatus] || [];
      if (currentStatus !== newStatus && !allowedNextStates.includes(newStatus)) {
        return res.status(400).json({ 
          message: `لا يمكن تغيير حالة الطلب من "${currentStatus}" إلى "${newStatus}". التحولات المسموحة: ${allowedNextStates.join(', ')}`,
          success: false,
          currentStatus,
          requestedStatus: newStatus,
          allowedTransitions: allowedNextStates
        });
      }
      
      // STEP 3: Additional business rule validations
      if (newStatus === 'completed') {
        // Check if all production orders are completed before marking order as completed
        const allProductionOrders = await storage.getAllProductionOrders();
        const productionOrders = allProductionOrders.filter((po: any) => po.order_id === orderId);
        const incompleteProdOrders = productionOrders.filter((po: any) => po.status !== 'completed');
        
        if (incompleteProdOrders.length > 0) {
          return res.status(400).json({ 
            message: `لا يمكن إتمام الطلب - يوجد ${incompleteProdOrders.length} أوامر إنتاج غير مكتملة`,
            success: false,
            incompleteProdOrders: incompleteProdOrders.length
          });
        }
      }
      
      if (newStatus === 'cancelled') {
        // Check if there are production orders in progress
        const allProductionOrders = await storage.getAllProductionOrders();
        const productionOrders = allProductionOrders.filter((po: any) => po.order_id === orderId);
        const activeProdOrders = productionOrders.filter((po: any) => ['in_progress', 'in_production'].includes(po.status));
        
        if (activeProdOrders.length > 0) {
          return res.status(400).json({ 
            message: `لا يمكن إلغاء الطلب - يوجد ${activeProdOrders.length} أوامر إنتاج نشطة`,
            success: false,
            activeProdOrders: activeProdOrders.length
          });
        }
      }
      
      // STEP 4: Perform atomic status update with validation
      const order = await storage.updateOrderStatus(orderId, newStatus);
      
      res.json({
        data: order,
        message: `تم تغيير حالة الطلب إلى "${newStatus}" بنجاح`,
        success: true,
        previousStatus: currentStatus,
        currentStatus: newStatus
      });
    } catch (error: any) {
      console.error('Error updating order status:', error);
      
      if (error.name === 'DatabaseError') {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      
      res.status(500).json({ 
        message: "خطأ في تحديث حالة الطلب",
        success: false 
      });
    }
  });


  // ============ Settings API ============
  
  // System Settings
  app.get("/api/settings/system", async (req, res) => {
    try {
      const settings = await storage.getSystemSettings();
      res.json(settings);
    } catch (error) {
      console.error("Error fetching system settings:", error);
      res.status(500).json({ message: "خطأ في جلب إعدادات النظام" });
    }
  });

  app.post("/api/settings/system", async (req, res) => {
    try {
      const { settings, userId } = req.body;
      const results = [];
      
      for (const [key, value] of Object.entries(settings)) {
        try {
          const existingSetting = await storage.getSystemSettingByKey(key);
          if (existingSetting) {
            const updated = await storage.updateSystemSetting(key, String(value), userId);
            results.push(updated);
          } else {
            const created = await storage.createSystemSetting({
              setting_key: key,
              setting_value: String(value),
              updated_by: userId
            });
            results.push(created);
          }
        } catch (error) {
          console.error(`Error saving setting ${key}:`, error);
        }
      }
      
      res.json({ message: "تم حفظ إعدادات النظام بنجاح", settings: results });
    } catch (error) {
      console.error("Error saving system settings:", error);
      res.status(500).json({ message: "خطأ في حفظ إعدادات النظام" });
    }
  });

  // User Settings
  app.get("/api/settings/user/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const settings = await storage.getUserSettings(userId);
      res.json(settings);
    } catch (error) {
      console.error("Error fetching user settings:", error);
      res.status(500).json({ message: "خطأ في جلب إعدادات المستخدم" });
    }
  });

  app.post("/api/settings/user/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const { settings } = req.body;
      const results = [];
      
      for (const [key, value] of Object.entries(settings)) {
        try {
          const updated = await storage.updateUserSetting(userId, key, String(value));
          results.push(updated);
        } catch (error) {
          console.error(`Error saving user setting ${key}:`, error);
        }
      }
      
      res.json({ message: "تم حفظ إعداداتك الشخصية بنجاح", settings: results });
    } catch (error) {
      console.error("Error saving user settings:", error);
      res.status(500).json({ message: "خطأ في حفظ إعدادات المستخدم" });
    }
  });

  // Database Management routes
  app.get("/api/database/stats", requireAdmin, async (req, res) => {
    try {
      const stats = await storage.getDatabaseStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching database stats:", error);
      res.status(500).json({ message: "خطأ في جلب إحصائيات قاعدة البيانات" });
    }
  });

  app.post("/api/database/backup", requireAdmin, async (req, res) => {
    try {
      const backup = await storage.createDatabaseBackup();
      
      // Set headers for file download
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', `attachment; filename="${backup.filename}"`);
      
      // Send the backup data directly for download
      res.send(backup.data);
    } catch (error) {
      console.error("Error creating database backup:", error);
      res.status(500).json({ message: "خطأ في إنشاء النسخة الاحتياطية" });
    }
  });

  app.get("/api/database/backup/download/:backupId", requireAdmin, async (req, res) => {
    try {
      const backupId = req.params.backupId;
      const backupFile = await storage.getBackupFile(backupId);
      
      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Content-Disposition', `attachment; filename="backup-${backupId}.sql"`);
      res.send(backupFile);
    } catch (error) {
      console.error("Error downloading backup:", error);
      res.status(500).json({ message: "خطأ في تحميل النسخة الاحتياطية" });
    }
  });

  app.post("/api/database/restore", requireAdmin, async (req, res) => {
    try {
      const { backupData } = req.body;
      const result = await storage.restoreDatabaseBackup(backupData);
      res.json({ message: "تم استعادة قاعدة البيانات بنجاح", result });
    } catch (error) {
      console.error("Error restoring database:", error);
      res.status(500).json({ message: "خطأ في استعادة قاعدة البيانات" });
    }
  });

  app.get("/api/database/export/:tableName", requireAdmin, async (req, res) => {
    try {
      const tableName = req.params.tableName;
      const format = req.query.format as string || 'csv';
      
      const data = await storage.exportTableData(tableName, format);
      
      let contentType = 'text/csv';
      let fileExtension = 'csv';
      
      switch (format) {
        case 'json':
          contentType = 'application/json';
          fileExtension = 'json';
          break;
        case 'excel':
          contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
          fileExtension = 'xlsx';
          break;
      }
      
      res.setHeader('Content-Type', contentType);
      res.setHeader('Content-Disposition', `attachment; filename="${tableName}.${fileExtension}"`);
      
      // Set proper charset for CSV to ensure Arabic text encoding
      if (format === 'csv') {
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      }
      
      res.send(data);
    } catch (error) {
      console.error("Error exporting table data:", error);
      res.status(500).json({ message: "خطأ في تصدير بيانات الجدول" });
    }
  });

  app.post("/api/database/import/:tableName", requireAdmin, async (req, res) => {
    try {
      const tableName = req.params.tableName;
      const { data, format } = req.body;
      
      const result = await storage.importTableData(tableName, data, format);
      res.json({ 
        message: "تم استيراد البيانات بنجاح", 
        importedRecords: result.count
      });
    } catch (error) {
      console.error("Error importing table data:", error);
      res.status(500).json({ message: "خطأ في استيراد البيانات" });
    }
  });

  // Enhanced batch import endpoint
  app.post("/api/database/import/:tableName/batch", requireAdmin, async (req, res) => {
    try {
      const tableName = req.params.tableName;
      const { data, options } = req.body;
      
      if (!Array.isArray(data) || data.length === 0) {
        return res.status(400).json({ message: "البيانات المرسلة غير صالحة" });
      }

      console.log(`Processing batch import for ${tableName}: ${data.length} records (Batch ${options?.batchNumber || 1}/${options?.totalBatches || 1})`);
      
      const results = {
        successful: 0,
        failed: 0,
        errors: [] as string[],
        warnings: [] as string[]
      };

      // Process each record in the batch
      for (let i = 0; i < data.length; i++) {
        const record = data[i];
        
        try {
          // Validate and process the record based on table type
          let processedRecord = { ...record };
          
          // Table-specific processing
          if (tableName === 'customers') {
            // Generate ID if not provided
            if (!processedRecord.id) {
              const existingCustomers = await storage.getCustomers();
              const lastId = existingCustomers.length > 0 
                ? Math.max(...existingCustomers.map(c => {
                    const idNum = parseInt(c.id.replace('CID', ''));
                    return isNaN(idNum) ? 0 : idNum;
                  }))
                : 0;
              processedRecord.id = `CID${String(lastId + 1).padStart(4, '0')}`;
            }
            
            // Validate using schema
            const validatedRecord = insertCustomerSchema.parse(processedRecord);
            await storage.createCustomer(validatedRecord);
            
          } else if (tableName === 'categories') {
            // Generate ID if not provided
            if (!processedRecord.id) {
              const existingCategories = await storage.getCategories();
              const lastId = existingCategories.length > 0 
                ? Math.max(...existingCategories.map(c => {
                    const idNum = parseInt(c.id.replace('CAT', ''));
                    return isNaN(idNum) ? 0 : idNum;
                  }))
                : 0;
              processedRecord.id = `CAT${String(lastId + 1).padStart(2, '0')}`;
            }
            
            await storage.createCategory(processedRecord);
            
          } else if (tableName === 'sections') {
            // Generate ID if not provided
            if (!processedRecord.id) {
              const existingSections = await storage.getSections();
              const lastId = existingSections.length > 0 
                ? Math.max(...existingSections.map(s => {
                    const idNum = parseInt(s.id.replace('SEC', ''));
                    return isNaN(idNum) ? 0 : idNum;
                  }))
                : 0;
              processedRecord.id = `SEC${String(lastId + 1).padStart(2, '0')}`;
            }
            
            await storage.createSection(processedRecord);
            
          } else if (tableName === 'items') {
            // Generate ID if not provided
            if (!processedRecord.id) {
              const existingItems = await storage.getItems();
              const lastId = existingItems.length > 0 
                ? Math.max(...existingItems.map(i => {
                    const idNum = parseInt(i.id.replace('ITM', ''));
                    return isNaN(idNum) ? 0 : idNum;
                  }))
                : 0;
              processedRecord.id = `ITM${String(lastId + 1).padStart(3, '0')}`;
            }
            
            await storage.createItem(processedRecord);
            
          } else if (tableName === 'customer_products') {
            // Auto-increment numeric ID
            if (!processedRecord.id) {
              const existingProducts = await storage.getCustomerProducts();
              const lastId = existingProducts.length > 0 
                ? Math.max(...existingProducts.map(p => p.id).filter(id => typeof id === 'number'))
                : 0;
              processedRecord.id = lastId + 1;
            }
            
            // Handle cutting_unit field specifically to ensure it's included
            if (processedRecord.cutting_unit !== undefined && processedRecord.cutting_unit !== null) {
              // Keep the cutting_unit value as is
              console.log('Processing cutting_unit:', processedRecord.cutting_unit);
            }
            
            // Convert numeric string fields to proper types
            const numericFields = ['width', 'left_facing', 'right_facing', 'thickness', 'unit_weight_kg', 'package_weight_kg'];
            numericFields.forEach(field => {
              if (processedRecord[field] && typeof processedRecord[field] === 'string') {
                const numValue = parseFloat(processedRecord[field]);
                if (!isNaN(numValue)) {
                  processedRecord[field] = numValue;
                }
              }
            });
            
            const integerFields = ['cutting_length_cm', 'unit_quantity'];
            integerFields.forEach(field => {
              if (processedRecord[field] && typeof processedRecord[field] === 'string') {
                const intValue = parseInt(processedRecord[field]);
                if (!isNaN(intValue)) {
                  processedRecord[field] = intValue;
                }
              }
            });
            
            // Handle boolean fields
            if (processedRecord.is_printed !== undefined) {
              processedRecord.is_printed = processedRecord.is_printed === 'true' || processedRecord.is_printed === true;
            }
            
            // Validate using schema
            const validatedRecord = insertCustomerProductSchema.parse(processedRecord);
            await storage.createCustomerProduct(validatedRecord);
            
          } else if (tableName === 'users') {
            // Auto-increment numeric ID
            if (!processedRecord.id) {
              const existingUsers = await storage.getSafeUsers();
              const lastId = existingUsers.length > 0 
                ? Math.max(...existingUsers.map(u => u.id))
                : 0;
              processedRecord.id = lastId + 1;
            }
            
            // Set default role if not provided
            if (!processedRecord.role_id) {
              processedRecord.role_id = 2; // Default user role
            }
            
            // Validate using schema
            const validatedRecord = insertUserSchema.parse(processedRecord);
            await storage.createUser(validatedRecord);
            
          } else if (tableName === 'machines') {
            // Generate ID if not provided
            if (!processedRecord.id) {
              const existingMachines = await storage.getMachines();
              const lastId = existingMachines.length > 0 
                ? Math.max(...existingMachines.map(m => {
                    const idNum = parseInt(m.id.replace('MAC', ''));
                    return isNaN(idNum) ? 0 : idNum;
                  }))
                : 0;
              processedRecord.id = `MAC${String(lastId + 1).padStart(2, '0')}`;
            }
            
            await storage.createMachine(processedRecord);
            
          } else if (tableName === 'locations') {
            // Auto-increment numeric ID
            if (!processedRecord.id) {
              const existingLocations = await storage.getLocations();
              const lastId = existingLocations.length > 0 
                ? Math.max(...existingLocations.map(l => typeof l.id === 'number' ? l.id : parseInt(l.id)))
                : 0;
              processedRecord.id = lastId + 1;
            }
            
            // Validate using schema
            const validatedRecord = insertLocationSchema.parse(processedRecord);
            await storage.createLocation(validatedRecord);
            
          } else {
            // Generic handling for other tables
            await storage.importTableData(tableName, [record], 'json');
          }
          
          results.successful++;
          
        } catch (error) {
          results.failed++;
          const errorMsg = `السجل ${i + 1}: ${error instanceof Error ? error.message : 'خطأ غير معروف'}`;
          results.errors.push(errorMsg);
          
          if (!options?.continueOnError) {
            // Stop processing if not continuing on error
            break;
          }
        }
      }

      res.json({
        successful: results.successful,
        failed: results.failed,
        errors: results.errors,
        warnings: results.warnings,
        batchNumber: options?.batchNumber || 1,
        totalBatches: options?.totalBatches || 1
      });
      
    } catch (error) {
      console.error("Error in batch import:", error);
      res.status(500).json({ 
        message: "خطأ في معالجة الدفعة", 
        error: error instanceof Error ? error.message : "خطأ غير معروف" 
      });
    }
  });

  app.post("/api/database/optimize", requireAdmin, async (req, res) => {
    try {
      const result = await storage.optimizeTables();
      res.json({ message: "تم تحسين الجداول بنجاح", result });
    } catch (error) {
      console.error("Error optimizing tables:", error);
      res.status(500).json({ message: "خطأ في تحسين الجداول" });
    }
  });

  app.post("/api/database/integrity-check", requireAdmin, async (req, res) => {
    try {
      const result = await storage.checkDatabaseIntegrity();
      res.json({ message: "تم فحص تكامل قاعدة البيانات", result });
    } catch (error) {
      console.error("Error checking database integrity:", error);
      res.status(500).json({ message: "خطأ في فحص تكامل قاعدة البيانات" });
    }
  });

  app.post("/api/database/cleanup", requireAdmin, async (req, res) => {
    try {
      const { daysOld } = req.body;
      const result = await storage.cleanupOldData(daysOld || 90);
      res.json({ 
        message: "تم تنظيف البيانات القديمة بنجاح", 
        deletedRecords: result.count
      });
    } catch (error) {
      console.error("Error cleaning up old data:", error);
      res.status(500).json({ message: "خطأ في تنظيف البيانات القديمة" });
    }
  });

  // ============ HR Attendance Management API ============
  
  app.get("/api/attendance", async (req, res) => {
    try {
      const attendance = await storage.getAttendance();
      res.json(attendance);
    } catch (error) {
      console.error('Error fetching attendance:', error);
      res.status(500).json({ message: "خطأ في جلب بيانات الحضور" });
    }
  });

  // Get daily attendance status for a user
  app.get("/api/attendance/daily-status/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const date = req.query.date as string || new Date().toISOString().split('T')[0];
      
      const status = await storage.getDailyAttendanceStatus(userId, date);
      res.json(status);
    } catch (error) {
      console.error('Error fetching daily attendance status:', error);
      res.status(500).json({ message: "خطأ في جلب حالة الحضور اليومية" });
    }
  });

  app.post("/api/attendance", async (req, res) => {
    try {
      const attendance = await storage.createAttendance(req.body);
      
      // Send attendance notification
      try {
        const user = await storage.getUserById(req.body.user_id);
        if (user && user.phone) {
          let messageTemplate = '';
          let priority = 'normal';
          
          switch (req.body.status) {
            case 'حاضر':
              messageTemplate = `مرحباً ${user.display_name_ar || user.username}، تم تسجيل حضورك اليوم بنجاح في ${new Date().toLocaleTimeString('ar')}. نتمنى لك يوم عمل مثمر!`;
              priority = 'normal';
              break;
            case 'في الاستراحة':
              messageTemplate = `${user.display_name_ar || user.username}، تم تسجيل بدء استراحة الغداء في ${new Date().toLocaleTimeString('ar')}. استمتع بوقت راحتك!`;
              priority = 'low';
              break;
            case 'يعمل':
              messageTemplate = `${user.display_name_ar || user.username}، تم تسجيل انتهاء استراحة الغداء في ${new Date().toLocaleTimeString('ar')}. مرحباً بعودتك للعمل!`;
              priority = 'normal';
              break;
            case 'مغادر':
              messageTemplate = `${user.display_name_ar || user.username}، تم تسجيل انصرافك في ${new Date().toLocaleTimeString('ar')}. شكراً لجهودك اليوم، نراك غداً!`;
              priority = 'normal';
              break;
          }
          
          if (messageTemplate) {
            await notificationService.sendWhatsAppMessage(user.phone, messageTemplate, {
              title: 'تنبيه الحضور',
              priority,
              context_type: 'attendance',
              context_id: attendance.id?.toString()
            });
          }
        }
      } catch (notificationError) {
        console.error("Failed to send attendance notification:", notificationError);
        // Don't fail the main request if notification fails
      }
      
      res.status(201).json(attendance);
    } catch (error) {
      console.error('Error creating attendance:', error);
      
      // Return the specific error message for validation errors
      if (error instanceof Error && error.message.includes('تم تسجيل')) {
        return res.status(400).json({ message: error.message });
      }
      
      if (error instanceof Error && error.message.includes('يجب')) {
        return res.status(400).json({ message: error.message });
      }
      
      res.status(500).json({ message: "خطأ في إنشاء سجل الحضور" });
    }
  });

  app.put("/api/attendance/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const attendance = await storage.updateAttendance(id, req.body);
      res.json(attendance);
    } catch (error) {
      console.error('Error updating attendance:', error);
      res.status(500).json({ message: "خطأ في تحديث سجل الحضور" });
    }
  });

  app.delete("/api/attendance/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteAttendance(id);
      res.json({ message: "تم حذف سجل الحضور بنجاح" });
    } catch (error) {
      console.error('Error deleting attendance:', error);
      res.status(500).json({ message: "خطأ في حذف سجل الحضور" });
    }
  });

  // ============ User Violations Management API ============
  
  app.get("/api/violations", async (req, res) => {
    try {
      const violations = await storage.getViolations();
      res.json(violations);
    } catch (error) {
      console.error('Error fetching violations:', error);
      res.status(500).json({ message: "خطأ في جلب بيانات المخالفات" });
    }
  });

  app.post("/api/violations", async (req, res) => {
    try {
      const violation = await storage.createViolation(req.body);
      res.status(201).json(violation);
    } catch (error) {
      console.error('Error creating violation:', error);
      res.status(500).json({ message: "خطأ في إنشاء المخالفة" });
    }
  });

  app.put("/api/violations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const violation = await storage.updateViolation(id, req.body);
      res.json(violation);
    } catch (error) {
      console.error('Error updating violation:', error);
      res.status(500).json({ message: "خطأ في تحديث المخالفة" });
    }
  });

  app.delete("/api/violations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteViolation(id);
      res.json({ message: "تم حذف المخالفة بنجاح" });
    } catch (error) {
      console.error('Error deleting violation:', error);
      res.status(500).json({ message: "خطأ في حذف المخالفة" });
    }
  });

  // ============ User Requests Management API ============
  
  app.get("/api/user-requests", async (req, res) => {
    try {
      console.log('Fetching user requests - Session ID:', req.sessionID);
      console.log('Fetching user requests - User ID in session:', req.session.userId);
      
      const requests = await storage.getUserRequests();
      console.log('Found', requests.length, 'user requests');
      
      res.json(requests);
    } catch (error) {
      console.error('Error fetching user requests:', error);
      res.status(500).json({ message: "خطأ في جلب طلبات المستخدمين" });
    }
  });

  app.post("/api/user-requests", async (req, res) => {
    try {
      const request = await storage.createUserRequest(req.body);
      res.status(201).json(request);
    } catch (error) {
      console.error('Error creating user request:', error);
      res.status(500).json({ message: "خطأ في إنشاء الطلب" });
    }
  });

  app.put("/api/user-requests/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const request = await storage.updateUserRequest(id, req.body);
      res.json(request);
    } catch (error) {
      console.error('Error updating user request:', error);
      res.status(500).json({ message: "خطأ في تحديث الطلب" });
    }
  });

  app.patch("/api/user-requests/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const request = await storage.updateUserRequest(id, req.body);
      res.json(request);
    } catch (error) {
      console.error('Error updating user request:', error);
      res.status(500).json({ message: "خطأ في تحديث الطلب" });
    }
  });

  app.delete("/api/user-requests/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteUserRequest(id);
      res.json({ message: "تم حذف الطلب بنجاح" });
    } catch (error) {
      console.error('Error deleting user request:', error);
      res.status(500).json({ message: "خطأ في حذف الطلب" });
    }
  });

  // ============ PRODUCTION FLOW API ENDPOINTS ============

  // Production Settings
  app.get("/api/production/settings", async (req, res) => {
    try {
      const settings = await storage.getProductionSettings();
      res.json(settings);
    } catch (error) {
      console.error('Error fetching production settings:', error);
      res.status(500).json({ message: "خطأ في جلب إعدادات الإنتاج" });
    }
  });

  app.patch("/api/production/settings", async (req, res) => {
    try {
      const validationSchema = insertProductionSettingsSchema.pick({
        overrun_tolerance_percent: true,
        allow_last_roll_overrun: true,
        qr_prefix: true
      }).extend({
        overrun_tolerance_percent: z.number().min(0).max(10).transform(v => Number(v.toFixed(2))),
        qr_prefix: z.string().min(1, "بادئة الـ QR مطلوبة")
      });

      const validated = validationSchema.parse(req.body);
      const settings = await storage.updateProductionSettings(validated);
      res.json(settings);
    } catch (error) {
      console.error('Error updating production settings:', error);
      res.status(400).json({ message: "خطأ في تحديث إعدادات الإنتاج" });
    }
  });

  // Start Production
  app.patch("/api/production-orders/:id/start-production", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const productionOrder = await storage.startProduction(id);
      res.json(productionOrder);
    } catch (error) {
      console.error('Error starting production:', error);
      res.status(400).json({ message: "خطأ في بدء الإنتاج" });
    }
  });

  // Create Roll with QR
  app.post("/api/rolls", 
    requireAuth,
    validateRequest({ body: insertRollSchema.omit({ created_by: true }) }),
    async (req, res) => {
    try {
      console.log('Roll creation request body:', JSON.stringify(req.body, null, 2));
      console.log('Session userId:', req.session.userId);
      
      // Ensure session userId is valid
      if (!req.session.userId || typeof req.session.userId !== 'number') {
        return res.status(401).json({ message: "معرف المستخدم غير صحيح" });
      }
      
      // Get DataValidator for business rule enforcement
      const dataValidator = getDataValidator(storage);
      
      // Add created_by from session and validate the complete data
      const rollData = {
        ...req.body,
        created_by: Number(req.session.userId)
      };
      
      // Validate with insertRollSchema AFTER adding created_by
      let validatedRollData;
      try {
        validatedRollData = insertRollSchema.parse(rollData);
        console.log('Validation successful for roll data');
      } catch (validationError) {
        console.error('Roll schema validation failed:', validationError);
        if (validationError instanceof z.ZodError) {
          return res.status(400).json({ 
            message: "بيانات غير صحيحة", 
            errors: validationError.errors 
          });
        }
        throw validationError;
      }
      
      console.log('Final validated roll data:', JSON.stringify(validatedRollData, null, 2));
      
      // INVARIANT B: Validate roll weight against production order limits
      const productionOrder = await storage.getProductionOrderById(validatedRollData.production_order_id);
      if (!productionOrder) {
        return res.status(400).json({ 
          message: "أمر الإنتاج غير موجود",
          field: "production_order_id"
        });
      }
      
      // INVARIANT E: Validate machine is active
      const machine = await storage.getMachineById(validatedRollData.machine_id);
      if (!machine) {
        return res.status(400).json({ 
          message: "المكينة غير موجودة", 
          field: "machine_id"
        });
      }
      if (machine.status !== 'active') {
        return res.status(400).json({ 
          message: "المكينة غير نشطة - لا يمكن إنشاء رولات عليها", 
          field: "machine_id"
        });
      }
      
      // Run synchronous business rule validation
      const validationResult = await dataValidator.validateRollCreation(validatedRollData);
      if (!validationResult.isValid) {
        return res.status(400).json({
          message: "فشل في التحقق من قواعد العمل",
          errors: validationResult.errors,
          warnings: validationResult.warnings
        });
      }
      
      // Generate QR code and roll number with validation passed
      const roll = await storage.createRollWithQR(validatedRollData);
      res.status(201).json(roll);
    } catch (error) {
      console.error('Error creating roll:', error);
      if (error instanceof z.ZodError) {
        console.error('Validation errors:', error.errors);
        res.status(400).json({ 
          message: "بيانات غير صحيحة", 
          errors: error.errors 
        });
      } else if (error instanceof Error && error.message.includes('تجاوزت الحد المسموح')) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "خطأ في إنشاء الرول" });
      }
    }
  });

  // Printing Operations
  app.patch("/api/rolls/:id/print", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (!req.session.userId) {
        return res.status(401).json({ message: "غير مسجل الدخول" });
      }
      const roll = await storage.markRollPrinted(id, req.session.userId);
      res.json(roll);
    } catch (error) {
      console.error('Error marking roll printed:', error);
      res.status(400).json({ message: "خطأ في تسجيل طباعة الرول" });
    }
  });

  // Cutting Operations
  app.post("/api/cuts", async (req, res) => {
    try {
      const validationSchema = insertCutSchema.extend({
        cut_weight_kg: z.coerce.number().gt(0, "الوزن يجب أن يكون أكبر من صفر").max(50000, "الوزن يتجاوز 50 طن").transform(v => Number(v.toFixed(3))),
        pieces_count: z.coerce.number().positive().optional()
      });

      const validated = validationSchema.parse(req.body);
      if (!req.session.userId) {
        return res.status(401).json({ message: "غير مسجل الدخول" });
      }
      const cut = await storage.createCut({
        ...validated,
        performed_by: req.session.userId
      });
      res.status(201).json(cut);
    } catch (error) {
      console.error('Error creating cut:', error);
      if (error instanceof Error && error.message.includes('الوزن المطلوب أكبر من المتاح')) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "خطأ في تسجيل القطع" });
      }
    }
  });

  // Warehouse Receipts
  app.post("/api/warehouse/receipts", async (req, res) => {
    try {
      const validationSchema = insertWarehouseReceiptSchema.extend({
        received_weight_kg: z.coerce.number().gt(0, "الوزن يجب أن يكون أكبر من صفر").max(50000, "الوزن يتجاوز 50 طن").transform(v => Number(v.toFixed(3)))
      });

      const validated = validationSchema.parse(req.body);
      if (!req.session.userId) {
        return res.status(401).json({ message: "غير مسجل الدخول" });
      }
      const receipt = await storage.createWarehouseReceipt({
        ...validated,
        received_by: req.session.userId
      });
      res.status(201).json(receipt);
    } catch (error) {
      console.error('Error creating warehouse receipt:', error);
      res.status(500).json({ message: "خطأ في تسجيل استلام المستودع" });
    }
  });

  // Get warehouse receipts with detailed information grouped by order number
  app.get("/api/warehouse/receipts-detailed", async (req, res) => {
    try {
      const receipts = await storage.getWarehouseReceiptsDetailed();
      res.json(receipts);
    } catch (error) {
      console.error('Error fetching detailed warehouse receipts:', error);
      res.status(500).json({ message: "خطأ في جلب تفاصيل إيصالات المستودع" });
    }
  });

  // Production Queues
  app.get("/api/production/film-queue", async (req, res) => {
    try {
      const queue = await storage.getFilmQueue();
      res.json(queue);
    } catch (error) {
      console.error('Error fetching film queue:', error);
      res.status(500).json({ message: "خطأ في جلب قائمة الفيلم" });
    }
  });

  app.get("/api/production/printing-queue", async (req, res) => {
    try {
      const queue = await storage.getPrintingQueue();
      res.json(queue);
    } catch (error) {
      console.error('Error fetching printing queue:', error);
      res.status(500).json({ message: "خطأ في جلب قائمة الطباعة" });
    }
  });

  app.get("/api/production/cutting-queue", async (req, res) => {
    try {
      const queue = await storage.getCuttingQueue();
      res.json(queue);
    } catch (error) {
      console.error('Error fetching cutting queue:', error);
      res.status(500).json({ message: "خطأ في جلب قائمة التقطيع" });
    }
  });

  app.get("/api/production/grouped-cutting-queue", async (req, res) => {
    try {
      const queue = await storage.getGroupedCuttingQueue();
      res.json(queue);
    } catch (error) {
      console.error('Error fetching grouped cutting queue:', error);
      res.status(500).json({ message: "خطأ في جلب قائمة التقطيع المجمعة" });
    }
  });

  // Production hall - get production orders ready for warehouse receipt
  app.get("/api/warehouse/production-hall", async (req, res) => {
    try {
      const productionOrders = await storage.getProductionOrdersForReceipt();
      res.json(productionOrders);
    } catch (error) {
      console.error('Error fetching production hall data:', error);
      res.status(500).json({ message: "خطأ في جلب بيانات صالة الإنتاج" });
    }
  });

  // Create warehouse receipt from production hall
  app.post("/api/warehouse/receipts", async (req, res) => {
    try {
      const receiptData = req.body;
      const receipt = await storage.createWarehouseReceipt(receiptData);
      res.json(receipt);
    } catch (error) {
      console.error('Error creating warehouse receipt:', error);
      res.status(500).json({ message: "خطأ في تسجيل استلام المستودع" });
    }
  });

  app.get("/api/production/order-progress/:jobOrderId", async (req, res) => {
    try {
      const jobOrderId = parseInt(req.params.jobOrderId);
      const progress = await storage.getOrderProgress(jobOrderId);
      res.json(progress);
    } catch (error) {
      console.error('Error fetching order progress:', error);
      res.status(500).json({ message: "خطأ في جلب تقدم الطلب" });
    }
  });

  app.get("/api/rolls/:id/qr", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const qrData = await storage.getRollQR(id);
      res.json(qrData);
    } catch (error) {
      console.error('Error fetching roll QR:', error);
      res.status(500).json({ message: "خطأ في جلب رمز QR للرول" });
    }
  });

  // Label printing endpoint - generates 4" x 5" label
  app.get("/api/rolls/:id/label", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const labelData = await storage.getRollLabelData(id);
      res.json(labelData);
    } catch (error) {
      console.error('Error generating roll label:', error);
      res.status(500).json({ message: "خطأ في توليد ليبل الرول" });
    }
  });

  // ============ Production Monitoring Analytics API Routes ============
  
  // Get user performance statistics
  app.get("/api/production/user-performance", 
    requireAuth,
    async (req, res) => {
    try {
      const userId = req.query.user_id ? parseIntSafe(req.query.user_id as string, "User ID", { min: 1 }) : undefined;
      const dateFrom = req.query.date_from as string || undefined;
      const dateTo = req.query.date_to as string || undefined;
      
      // Validate date format if provided
      if (dateFrom && !/^\d{4}-\d{2}-\d{2}$/.test(dateFrom)) {
        return res.status(400).json({ message: "تنسيق تاريخ البداية غير صحيح (YYYY-MM-DD)" });
      }
      if (dateTo && !/^\d{4}-\d{2}-\d{2}$/.test(dateTo)) {
        return res.status(400).json({ message: "تنسيق تاريخ النهاية غير صحيح (YYYY-MM-DD)" });
      }
      
      const performance = await storage.getUserPerformanceStats(userId, dateFrom, dateTo);
      
      res.json({
        data: performance,
        period: {
          from: dateFrom || 'آخر 7 أيام',
          to: dateTo || 'اليوم',
          user_filter: userId ? `المستخدم ${userId}` : 'جميع المستخدمين'
        },
        lastUpdated: new Date().toISOString()
      });
    } catch (error: any) {
      console.error("Error fetching user performance stats:", error);
      res.status(500).json({ 
        message: "خطأ في جلب إحصائيات أداء المستخدمين",
        error: error.message 
      });
    }
  });

  // Get role performance statistics
  app.get("/api/production/role-performance", 
    requireAuth,
    async (req, res) => {
    try {
      const dateFrom = req.query.date_from as string || undefined;
      const dateTo = req.query.date_to as string || undefined;
      
      // Validate date format if provided
      if (dateFrom && !/^\d{4}-\d{2}-\d{2}$/.test(dateFrom)) {
        return res.status(400).json({ message: "تنسيق تاريخ البداية غير صحيح (YYYY-MM-DD)" });
      }
      if (dateTo && !/^\d{4}-\d{2}-\d{2}$/.test(dateTo)) {
        return res.status(400).json({ message: "تنسيق تاريخ النهاية غير صحيح (YYYY-MM-DD)" });
      }
      
      const performance = await storage.getRolePerformanceStats(dateFrom, dateTo);
      
      res.json({
        data: performance,
        period: {
          from: dateFrom || 'آخر 7 أيام',
          to: dateTo || 'اليوم'
        },
        lastUpdated: new Date().toISOString()
      });
    } catch (error: any) {
      console.error("Error fetching role performance stats:", error);
      res.status(500).json({ 
        message: "خطأ في جلب إحصائيات أداء الأقسام",
        error: error.message 
      });
    }
  });

  // Get real-time production statistics
  app.get("/api/production/real-time-stats", 
    requireAuth,
    async (req, res) => {
    try {
      const realTimeStats = await storage.getRealTimeProductionStats();
      
      res.json({
        ...realTimeStats,
        updateInterval: 30000 // 30 seconds
      });
    } catch (error: any) {
      console.error("Error fetching real-time production stats:", error);
      res.status(500).json({ 
        message: "خطأ في جلب الإحصائيات الفورية",
        error: error.message 
      });
    }
  });

  // Get production efficiency metrics
  app.get("/api/production/efficiency-metrics", 
    requireAuth,
    async (req, res) => {
    try {
      const dateFrom = req.query.date_from as string || undefined;
      const dateTo = req.query.date_to as string || undefined;
      
      // Validate date format if provided
      if (dateFrom && !/^\d{4}-\d{2}-\d{2}$/.test(dateFrom)) {
        return res.status(400).json({ message: "تنسيق تاريخ البداية غير صحيح (YYYY-MM-DD)" });
      }
      if (dateTo && !/^\d{4}-\d{2}-\d{2}$/.test(dateTo)) {
        return res.status(400).json({ message: "تنسيق تاريخ النهاية غير صحيح (YYYY-MM-DD)" });
      }
      
      const metrics = await storage.getProductionEfficiencyMetrics(dateFrom, dateTo);
      
      res.json({
        ...metrics,
        period: {
          from: dateFrom || 'آخر 30 يوم',
          to: dateTo || 'اليوم'
        },
        lastUpdated: new Date().toISOString()
      });
    } catch (error: any) {
      console.error("Error fetching production efficiency metrics:", error);
      res.status(500).json({ 
        message: "خطأ في جلب مؤشرات الكفاءة",
        error: error.message 
      });
    }
  });

  // Get production alerts
  app.get("/api/production/alerts", 
    requireAuth,
    async (req, res) => {
    try {
      const alerts = await storage.getProductionAlerts();
      
      res.json({
        alerts,
        alertCount: alerts.length,
        criticalCount: alerts.filter((a: any) => a.priority === 'critical').length,
        warningCount: alerts.filter((a: any) => a.priority === 'high' || a.priority === 'medium').length,
        lastUpdated: new Date().toISOString()
      });
    } catch (error: any) {
      console.error("Error fetching production alerts:", error);
      res.status(500).json({ 
        message: "خطأ في جلب تنبيهات الإنتاج",
        error: error.message 
      });
    }
  });

  // Get machine utilization statistics
  app.get("/api/production/machine-utilization", 
    requireAuth,
    async (req, res) => {
    try {
      const dateFrom = req.query.date_from as string || undefined;
      const dateTo = req.query.date_to as string || undefined;
      
      // Validate date format if provided
      if (dateFrom && !/^\d{4}-\d{2}-\d{2}$/.test(dateFrom)) {
        return res.status(400).json({ message: "تنسيق تاريخ البداية غير صحيح (YYYY-MM-DD)" });
      }
      if (dateTo && !/^\d{4}-\d{2}-\d{2}$/.test(dateTo)) {
        return res.status(400).json({ message: "تنسيق تاريخ النهاية غير صحيح (YYYY-MM-DD)" });
      }
      
      const utilizationStats = await storage.getMachineUtilizationStats(dateFrom, dateTo);
      
      res.json({
        data: utilizationStats,
        period: {
          from: dateFrom || 'آخر 7 أيام',
          to: dateTo || 'اليوم'
        },
        totalMachines: utilizationStats.length,
        activeMachines: utilizationStats.filter((m: any) => m.status === 'active').length,
        lastUpdated: new Date().toISOString()
      });
    } catch (error: any) {
      console.error("Error fetching machine utilization stats:", error);
      res.status(500).json({ 
        message: "خطأ في جلب إحصائيات استخدام المكائن",
        error: error.message 
      });
    }
  });

  // ============ نظام التحذيرات الذكية ============
  
  // تفعيل خدمات النظام
  const healthMonitor = getSystemHealthMonitor(storage);
  const alertManager = getAlertManager(storage);
  const dataValidator = getDataValidator(storage);
  
  // إعداد routes التحذيرات الذكية
  app.use('/api/alerts', createAlertsRouter(storage));
  app.use('/api/system/health', createSystemHealthRouter(storage));
  app.use('/api/system/performance', createPerformanceRouter(storage));
  app.use('/api/corrective-actions', createCorrectiveActionsRouter(storage));
  app.use('/api/data-validation', createDataValidationRouter(storage));
  
  console.log('[SmartAlerts] نظام التحذيرات الذكية مُفعل ✅');

  const httpServer = createServer(app);
  return httpServer;
}
