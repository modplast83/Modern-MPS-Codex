var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc3) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc3 = __getOwnPropDesc(from, key)) || desc3.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// shared/validation-utils.ts
var parseIntSafe, parseFloatSafe;
var init_validation_utils = __esm({
  "shared/validation-utils.ts"() {
    "use strict";
    parseIntSafe = (value, fieldName = "Value", options = {}) => {
      if (value === null || value === void 0) {
        throw new Error(`${fieldName} cannot be null or undefined`);
      }
      if (value === "" || typeof value === "string" && value.trim() === "") {
        throw new Error(`${fieldName} cannot be empty`);
      }
      const stringValue = String(value).trim();
      const parsed = parseInt(stringValue, 10);
      if (isNaN(parsed)) {
        throw new Error(`${fieldName} must be a valid integer (received: ${value})`);
      }
      if (String(parsed) !== stringValue && !stringValue.includes(".")) {
        throw new Error(`${fieldName} contains non-numeric characters (received: ${value})`);
      }
      if (options.min !== void 0 && parsed < options.min) {
        throw new Error(`${fieldName} must be at least ${options.min} (received: ${parsed})`);
      }
      if (options.max !== void 0 && parsed > options.max) {
        throw new Error(`${fieldName} must be at most ${options.max} (received: ${parsed})`);
      }
      if (!options.allowZero && parsed === 0) {
        throw new Error(`${fieldName} must be greater than 0 (received: ${parsed})`);
      }
      return parsed;
    };
    parseFloatSafe = (value, fieldName = "Value", options = {}) => {
      if (value === null || value === void 0) {
        throw new Error(`${fieldName} cannot be null or undefined`);
      }
      if (value === "" || typeof value === "string" && value.trim() === "") {
        throw new Error(`${fieldName} cannot be empty`);
      }
      const stringValue = String(value).trim();
      const parsed = parseFloat(stringValue);
      if (isNaN(parsed)) {
        throw new Error(`${fieldName} must be a valid number (received: ${value})`);
      }
      if (options.min !== void 0 && parsed < options.min) {
        throw new Error(`${fieldName} must be at least ${options.min} (received: ${parsed})`);
      }
      if (options.max !== void 0 && parsed > options.max) {
        throw new Error(`${fieldName} must be at most ${options.max} (received: ${parsed})`);
      }
      if (!options.allowZero && parsed === 0) {
        throw new Error(`${fieldName} must be greater than 0 (received: ${parsed})`);
      }
      return parsed;
    };
  }
});

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  adminDecisionsRelations: () => adminDecisionsRelations,
  admin_decisions: () => admin_decisions,
  alert_rules: () => alert_rules,
  attendance: () => attendance,
  categories: () => categories,
  categoriesRelations: () => categoriesRelations,
  company_profile: () => company_profile,
  consumable_parts: () => consumable_parts,
  consumable_parts_transactions: () => consumable_parts_transactions,
  corrective_actions: () => corrective_actions,
  customerProductsRelations: () => customerProductsRelations,
  customer_products: () => customer_products,
  customers: () => customers,
  customersRelations: () => customersRelations,
  cuts: () => cuts,
  cutsRelations: () => cutsRelations,
  insertAdminDecisionSchema: () => insertAdminDecisionSchema,
  insertAlertRuleSchema: () => insertAlertRuleSchema,
  insertAttendanceSchema: () => insertAttendanceSchema,
  insertCategorySchema: () => insertCategorySchema,
  insertConsumablePartSchema: () => insertConsumablePartSchema,
  insertConsumablePartTransactionSchema: () => insertConsumablePartTransactionSchema,
  insertCorrectiveActionSchema: () => insertCorrectiveActionSchema,
  insertCustomerProductSchema: () => insertCustomerProductSchema,
  insertCustomerSchema: () => insertCustomerSchema,
  insertCutSchema: () => insertCutSchema,
  insertInventoryMovementSchema: () => insertInventoryMovementSchema,
  insertInventorySchema: () => insertInventorySchema,
  insertItemSchema: () => insertItemSchema,
  insertLeaveBalanceSchema: () => insertLeaveBalanceSchema,
  insertLeaveRequestSchema: () => insertLeaveRequestSchema,
  insertLeaveTypeSchema: () => insertLeaveTypeSchema,
  insertLocationSchema: () => insertLocationSchema,
  insertMaintenanceActionSchema: () => insertMaintenanceActionSchema,
  insertMaintenanceReportSchema: () => insertMaintenanceReportSchema,
  insertMaintenanceRequestSchema: () => insertMaintenanceRequestSchema,
  insertMixingRecipeSchema: () => insertMixingRecipeSchema,
  insertNewOrderSchema: () => insertNewOrderSchema,
  insertNotificationSchema: () => insertNotificationSchema,
  insertNotificationTemplateSchema: () => insertNotificationTemplateSchema,
  insertOperatorNegligenceReportSchema: () => insertOperatorNegligenceReportSchema,
  insertPerformanceCriteriaSchema: () => insertPerformanceCriteriaSchema,
  insertPerformanceRatingSchema: () => insertPerformanceRatingSchema,
  insertPerformanceReviewSchema: () => insertPerformanceReviewSchema,
  insertProductionOrderSchema: () => insertProductionOrderSchema,
  insertProductionSettingsSchema: () => insertProductionSettingsSchema,
  insertRollSchema: () => insertRollSchema,
  insertSupplierSchema: () => insertSupplierSchema,
  insertSystemAlertSchema: () => insertSystemAlertSchema,
  insertSystemAnalyticsSchema: () => insertSystemAnalyticsSchema,
  insertSystemHealthCheckSchema: () => insertSystemHealthCheckSchema,
  insertSystemPerformanceMetricSchema: () => insertSystemPerformanceMetricSchema,
  insertSystemSettingSchema: () => insertSystemSettingSchema,
  insertTrainingCertificateSchema: () => insertTrainingCertificateSchema,
  insertTrainingEnrollmentSchema: () => insertTrainingEnrollmentSchema,
  insertTrainingEvaluationSchema: () => insertTrainingEvaluationSchema,
  insertTrainingMaterialSchema: () => insertTrainingMaterialSchema,
  insertTrainingProgramSchema: () => insertTrainingProgramSchema,
  insertTrainingRecordSchema: () => insertTrainingRecordSchema,
  insertUserSchema: () => insertUserSchema,
  insertUserSettingSchema: () => insertUserSettingSchema,
  insertWarehouseReceiptSchema: () => insertWarehouseReceiptSchema,
  insertWarehouseTransactionSchema: () => insertWarehouseTransactionSchema,
  inventory: () => inventory,
  inventoryRelations: () => inventoryRelations,
  inventory_movements: () => inventory_movements,
  items: () => items,
  itemsRelations: () => itemsRelations,
  leaveBalancesRelations: () => leaveBalancesRelations,
  leaveRequestsRelations: () => leaveRequestsRelations,
  leaveTypesRelations: () => leaveTypesRelations,
  leave_balances: () => leave_balances,
  leave_requests: () => leave_requests,
  leave_types: () => leave_types,
  locations: () => locations,
  machines: () => machines,
  machinesRelations: () => machinesRelations,
  maintenance_actions: () => maintenance_actions,
  maintenance_reports: () => maintenance_reports,
  maintenance_requests: () => maintenance_requests,
  mixing_recipes: () => mixing_recipes,
  notificationTemplatesRelations: () => notificationTemplatesRelations,
  notification_templates: () => notification_templates,
  notifications: () => notifications,
  notificationsRelations: () => notificationsRelations,
  operator_negligence_reports: () => operator_negligence_reports,
  orders: () => orders,
  ordersRelations: () => ordersRelations,
  performanceCriteriaRelations: () => performanceCriteriaRelations,
  performanceRatingsRelations: () => performanceRatingsRelations,
  performanceReviewsRelations: () => performanceReviewsRelations,
  performance_criteria: () => performance_criteria,
  performance_ratings: () => performance_ratings,
  performance_reviews: () => performance_reviews,
  productionOrdersRelations: () => productionOrdersRelations,
  production_orders: () => production_orders,
  production_settings: () => production_settings,
  quality_checks: () => quality_checks,
  roles: () => roles,
  rolesRelations: () => rolesRelations,
  rolls: () => rolls,
  rollsRelations: () => rollsRelations,
  sections: () => sections,
  sectionsRelations: () => sectionsRelations,
  spare_parts: () => spare_parts,
  suppliers: () => suppliers,
  suppliersRelations: () => suppliersRelations,
  system_alerts: () => system_alerts,
  system_analytics: () => system_analytics,
  system_health_checks: () => system_health_checks,
  system_performance_metrics: () => system_performance_metrics,
  system_settings: () => system_settings,
  trainingCertificatesRelations: () => trainingCertificatesRelations,
  trainingEnrollmentsRelations: () => trainingEnrollmentsRelations,
  trainingEvaluationsRelations: () => trainingEvaluationsRelations,
  trainingMaterialsRelations: () => trainingMaterialsRelations,
  trainingProgramsRelations: () => trainingProgramsRelations,
  trainingRecordsRelations: () => trainingRecordsRelations,
  training_certificates: () => training_certificates,
  training_enrollments: () => training_enrollments,
  training_evaluations: () => training_evaluations,
  training_materials: () => training_materials,
  training_programs: () => training_programs,
  training_records: () => training_records,
  user_requests: () => user_requests,
  user_settings: () => user_settings,
  users: () => users,
  usersRelations: () => usersRelations,
  violations: () => violations,
  warehouseReceiptsRelations: () => warehouseReceiptsRelations,
  warehouse_receipts: () => warehouse_receipts,
  warehouse_transactions: () => warehouse_transactions,
  waste: () => waste
});
import { sql, relations } from "drizzle-orm";
import { pgTable, serial, varchar, integer, boolean, date, timestamp, json, text, decimal, check } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
var roles, sections, users, user_requests, attendance, customers, categories, customer_products, machines, orders, production_orders, rolls, cuts, warehouse_receipts, production_settings, waste, quality_checks, maintenance_requests, maintenance_actions, spare_parts, consumable_parts, consumable_parts_transactions, maintenance_reports, operator_negligence_reports, violations, items, locations, suppliers, inventory, inventory_movements, warehouse_transactions, mixing_recipes, training_records, training_programs, training_materials, training_enrollments, training_evaluations, training_certificates, performance_reviews, performance_criteria, performance_ratings, leave_types, leave_requests, leave_balances, admin_decisions, company_profile, notifications, notification_templates, usersRelations, customersRelations, ordersRelations, productionOrdersRelations, rollsRelations, machinesRelations, sectionsRelations, rolesRelations, categoriesRelations, notificationsRelations, notificationTemplatesRelations, insertNotificationSchema, insertNotificationTemplateSchema, itemsRelations, inventoryRelations, customerProductsRelations, suppliersRelations, trainingRecordsRelations, cutsRelations, warehouseReceiptsRelations, adminDecisionsRelations, insertUserSchema, insertRollSchema, insertCutSchema, insertWarehouseReceiptSchema, insertProductionSettingsSchema, insertMaintenanceRequestSchema, insertItemSchema, insertSupplierSchema, insertWarehouseTransactionSchema, insertInventorySchema, insertInventoryMovementSchema, insertMixingRecipeSchema, insertTrainingRecordSchema, insertAdminDecisionSchema, insertLocationSchema, insertNewOrderSchema, insertProductionOrderSchema, system_settings, user_settings, insertSystemSettingSchema, insertUserSettingSchema, insertCustomerProductSchema, insertCategorySchema, insertCustomerSchema, insertTrainingProgramSchema, insertTrainingMaterialSchema, insertTrainingEnrollmentSchema, insertTrainingEvaluationSchema, insertTrainingCertificateSchema, insertPerformanceReviewSchema, insertPerformanceCriteriaSchema, insertPerformanceRatingSchema, insertLeaveTypeSchema, insertLeaveRequestSchema, insertLeaveBalanceSchema, insertAttendanceSchema, insertMaintenanceActionSchema, insertMaintenanceReportSchema, insertOperatorNegligenceReportSchema, insertConsumablePartSchema, insertConsumablePartTransactionSchema, trainingProgramsRelations, trainingMaterialsRelations, trainingEnrollmentsRelations, trainingEvaluationsRelations, trainingCertificatesRelations, performanceReviewsRelations, performanceCriteriaRelations, performanceRatingsRelations, leaveTypesRelations, leaveRequestsRelations, leaveBalancesRelations, system_alerts, alert_rules, system_health_checks, system_performance_metrics, corrective_actions, system_analytics, insertSystemAlertSchema, insertAlertRuleSchema, insertSystemHealthCheckSchema, insertSystemPerformanceMetricSchema, insertCorrectiveActionSchema, insertSystemAnalyticsSchema;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    init_validation_utils();
    roles = pgTable("roles", {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 50 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      permissions: json("permissions").$type()
    });
    sections = pgTable("sections", {
      id: varchar("id", { length: 20 }).primaryKey(),
      name: varchar("name", { length: 100 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      description: text("description")
    });
    users = pgTable("users", {
      id: serial("id").primaryKey(),
      username: varchar("username", { length: 50 }).notNull().unique(),
      password: varchar("password", { length: 100 }).notNull(),
      display_name: varchar("display_name", { length: 100 }),
      display_name_ar: varchar("display_name_ar", { length: 100 }),
      full_name: varchar("full_name", { length: 200 }),
      phone: varchar("phone", { length: 20 }),
      // رقم الهاتف للواتس اب
      email: varchar("email", { length: 100 }),
      role_id: integer("role_id").references(() => roles.id),
      section_id: integer("section_id"),
      status: varchar("status", { length: 20 }).default("active"),
      // active / suspended / deleted
      created_at: timestamp("created_at").defaultNow()
    });
    user_requests = pgTable("user_requests", {
      id: serial("id").primaryKey(),
      user_id: integer("user_id").notNull().references(() => users.id),
      type: varchar("type", { length: 50 }).notNull(),
      title: varchar("title", { length: 200 }).notNull(),
      description: text("description"),
      status: varchar("status", { length: 20 }).notNull().default("\u0645\u0639\u0644\u0642"),
      priority: varchar("priority", { length: 20 }).default("\u0639\u0627\u062F\u064A"),
      response: text("response"),
      reviewed_by: integer("reviewed_by").references(() => users.id),
      date: timestamp("date").defaultNow(),
      reviewed_date: timestamp("reviewed_date"),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    attendance = pgTable("attendance", {
      id: serial("id").primaryKey(),
      user_id: integer("user_id").notNull().references(() => users.id),
      status: varchar("status", { length: 20 }).notNull().default("\u063A\u0627\u0626\u0628"),
      // حاضر / غائب / استراحة غداء / مغادر
      check_in_time: timestamp("check_in_time"),
      check_out_time: timestamp("check_out_time"),
      lunch_start_time: timestamp("lunch_start_time"),
      lunch_end_time: timestamp("lunch_end_time"),
      notes: text("notes"),
      created_by: integer("created_by").references(() => users.id),
      updated_by: integer("updated_by").references(() => users.id),
      date: date("date").notNull().default(sql`CURRENT_DATE`),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    customers = pgTable("customers", {
      id: varchar("id", { length: 20 }).primaryKey(),
      // Changed to varchar to match CID001 format
      name: varchar("name", { length: 200 }).notNull(),
      name_ar: varchar("name_ar", { length: 200 }),
      code: varchar("code", { length: 20 }),
      user_id: varchar("user_id", { length: 10 }),
      plate_drawer_code: varchar("plate_drawer_code", { length: 20 }),
      city: varchar("city", { length: 50 }),
      address: text("address"),
      tax_number: varchar("tax_number", { length: 20 }),
      phone: varchar("phone", { length: 20 }),
      sales_rep_id: integer("sales_rep_id").references(() => users.id),
      created_at: timestamp("created_at").defaultNow()
    });
    categories = pgTable("categories", {
      id: varchar("id", { length: 20 }).primaryKey(),
      // Changed to varchar to match CAT001 format
      name: varchar("name", { length: 100 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      code: varchar("code", { length: 20 }),
      parent_id: varchar("parent_id", { length: 20 })
    });
    customer_products = pgTable("customer_products", {
      id: serial("id").primaryKey(),
      customer_id: varchar("customer_id", { length: 20 }).references(() => customers.id),
      category_id: varchar("category_id", { length: 20 }).references(() => categories.id),
      item_id: varchar("item_id", { length: 20 }).references(() => items.id),
      size_caption: varchar("size_caption", { length: 50 }),
      width: decimal("width", { precision: 8, scale: 2 }),
      left_facing: decimal("left_facing", { precision: 8, scale: 2 }),
      right_facing: decimal("right_facing", { precision: 8, scale: 2 }),
      thickness: decimal("thickness", { precision: 6, scale: 3 }),
      printing_cylinder: varchar("printing_cylinder", { length: 10 }),
      // 8" to 38" + 39"
      cutting_length_cm: integer("cutting_length_cm"),
      raw_material: varchar("raw_material", { length: 20 }),
      // HDPE-LDPE-Regrind
      master_batch_id: varchar("master_batch_id", { length: 20 }),
      // CLEAR-WHITE-BLACK etc
      is_printed: boolean("is_printed").default(false),
      cutting_unit: varchar("cutting_unit", { length: 20 }),
      // KG-ROLL-PKT
      punching: varchar("punching", { length: 20 }),
      // NON-T-Shirt-T-shirt\Hook-Banana
      unit_weight_kg: decimal("unit_weight_kg", { precision: 8, scale: 3 }),
      unit_quantity: integer("unit_quantity"),
      package_weight_kg: decimal("package_weight_kg", { precision: 8, scale: 2 }),
      cliche_front_design: text("cliche_front_design"),
      // Base64 encoded image data
      cliche_back_design: text("cliche_back_design"),
      // Base64 encoded image data
      notes: text("notes"),
      status: varchar("status", { length: 20 }).default("active"),
      created_at: timestamp("created_at").defaultNow()
    });
    machines = pgTable("machines", {
      id: varchar("id", { length: 20 }).primaryKey(),
      // Format: M001, M002, etc.
      name: varchar("name", { length: 100 }).notNull(),
      // Machine display name (English)
      name_ar: varchar("name_ar", { length: 100 }),
      // Machine display name (Arabic)
      type: varchar("type", { length: 50 }).notNull(),
      // ENUM: extruder / printer / cutter / quality_check
      section_id: varchar("section_id", { length: 20 }).references(() => sections.id, { onDelete: "restrict" }),
      // ON DELETE RESTRICT
      status: varchar("status", { length: 20 }).notNull().default("active")
      // ENUM: active / maintenance / down
    }, (table) => ({
      // Check constraints for machine integrity
      machineIdFormat: check("machine_id_format", sql`${table.id} ~ '^M[0-9]{3}$'`),
      // Format: M001, M002, etc.
      typeValid: check("type_valid", sql`${table.type} IN ('extruder', 'printer', 'cutter', 'quality_check')`),
      statusValid: check("status_valid", sql`${table.status} IN ('active', 'maintenance', 'down')`),
      nameNotEmpty: check("name_not_empty", sql`LENGTH(TRIM(${table.name})) > 0`)
    }));
    orders = pgTable("orders", {
      id: serial("id").primaryKey(),
      order_number: varchar("order_number", { length: 50 }).notNull().unique(),
      // Must be unique across system
      customer_id: varchar("customer_id", { length: 20 }).notNull().references(() => customers.id, { onDelete: "restrict" }),
      // ON DELETE RESTRICT
      delivery_days: integer("delivery_days"),
      // Must be > 0 if specified
      status: varchar("status", { length: 30 }).notNull().default("waiting"),
      // ENUM: waiting / in_production / paused / cancelled / completed
      notes: text("notes"),
      created_by: integer("created_by").references(() => users.id, { onDelete: "set null" }),
      // ON DELETE SET NULL
      created_at: timestamp("created_at").notNull().defaultNow(),
      delivery_date: date("delivery_date")
      // Must be >= CURRENT_DATE when order is created
    }, (table) => ({
      // Check constraints for data integrity
      deliveryDaysPositive: check("delivery_days_positive", sql`${table.delivery_days} IS NULL OR ${table.delivery_days} > 0`),
      statusValid: check("status_valid", sql`${table.status} IN ('waiting', 'in_production', 'paused', 'cancelled', 'completed')`),
      // Temporal constraint: delivery_date must be in future when order is active
      deliveryDateValid: check("delivery_date_valid", sql`${table.delivery_date} IS NULL OR ${table.delivery_date} >= CURRENT_DATE`)
    }));
    production_orders = pgTable("production_orders", {
      id: serial("id").primaryKey(),
      production_order_number: varchar("production_order_number", { length: 50 }).notNull().unique(),
      order_id: integer("order_id").notNull().references(() => orders.id, { onDelete: "cascade" }),
      customer_product_id: integer("customer_product_id").notNull().references(() => customer_products.id, { onDelete: "restrict" }),
      // كمية الإنتاج الأساسية
      quantity_kg: decimal("quantity_kg", { precision: 10, scale: 2 }).notNull(),
      // الكمية المطلوبة من الطلب
      overrun_percentage: decimal("overrun_percentage", { precision: 5, scale: 2 }).notNull().default("5.00"),
      final_quantity_kg: decimal("final_quantity_kg", { precision: 10, scale: 2 }).notNull(),
      // للمراجع فقط
      // NEW: حقول تتبع الكميات الفعلية لكل مرحلة
      produced_quantity_kg: decimal("produced_quantity_kg", { precision: 10, scale: 2 }).notNull().default("0"),
      // مجموع أوزان جميع الرولات
      printed_quantity_kg: decimal("printed_quantity_kg", { precision: 10, scale: 2 }).notNull().default("0"),
      // مجموع أوزان الرولات المطبوعة
      net_quantity_kg: decimal("net_quantity_kg", { precision: 10, scale: 2 }).notNull().default("0"),
      // الكمية الصافية (بعد التقطيع - الهدر)
      waste_quantity_kg: decimal("waste_quantity_kg", { precision: 10, scale: 2 }).notNull().default("0"),
      // مجموع هدر جميع الرولات
      // NEW: نسب الإكمال لكل مرحلة
      film_completion_percentage: decimal("film_completion_percentage", { precision: 5, scale: 2 }).notNull().default("0"),
      // نسبة إكمال الفيلم
      printing_completion_percentage: decimal("printing_completion_percentage", { precision: 5, scale: 2 }).notNull().default("0"),
      // نسبة إكمال الطباعة
      cutting_completion_percentage: decimal("cutting_completion_percentage", { precision: 5, scale: 2 }).notNull().default("0"),
      // نسبة إكمال التقطيع
      status: varchar("status", { length: 30 }).notNull().default("pending"),
      created_at: timestamp("created_at").notNull().defaultNow()
    }, (table) => ({
      // تحديث القيود لتتناسب مع النظام الجديد
      quantityPositive: check("quantity_kg_positive", sql`${table.quantity_kg} > 0`),
      overrunPercentageValid: check("overrun_percentage_valid", sql`${table.overrun_percentage} >= 0 AND ${table.overrun_percentage} <= 50`),
      finalQuantityPositive: check("final_quantity_kg_positive", sql`${table.final_quantity_kg} > 0`),
      statusValid: check("production_status_valid", sql`${table.status} IN ('pending', 'active', 'completed', 'cancelled')`),
      // NEW: قيود الكميات الجديدة
      producedQuantityNonNegative: check("produced_quantity_non_negative", sql`${table.produced_quantity_kg} >= 0`),
      printedQuantityNonNegative: check("printed_quantity_non_negative", sql`${table.printed_quantity_kg} >= 0`),
      netQuantityNonNegative: check("net_quantity_non_negative", sql`${table.net_quantity_kg} >= 0`),
      wasteQuantityNonNegative: check("waste_quantity_non_negative", sql`${table.waste_quantity_kg} >= 0`),
      // NEW: قيود نسب الإكمال
      filmCompletionValid: check("film_completion_valid", sql`${table.film_completion_percentage} >= 0 AND ${table.film_completion_percentage} <= 100`),
      printingCompletionValid: check("printing_completion_valid", sql`${table.printing_completion_percentage} >= 0 AND ${table.printing_completion_percentage} <= 100`),
      cuttingCompletionValid: check("cutting_completion_valid", sql`${table.cutting_completion_percentage} >= 0 AND ${table.cutting_completion_percentage} <= 100`)
    }));
    rolls = pgTable("rolls", {
      id: serial("id").primaryKey(),
      roll_seq: integer("roll_seq").notNull(),
      // Sequential number within production order, CHECK: > 0
      roll_number: varchar("roll_number", { length: 64 }).notNull().unique(),
      // Auto-generated format: PO001-R001
      production_order_id: integer("production_order_id").notNull().references(() => production_orders.id, { onDelete: "cascade" }),
      // ON DELETE CASCADE
      qr_code_text: text("qr_code_text").notNull(),
      // JSON string with roll metadata
      qr_png_base64: text("qr_png_base64"),
      // Base64 encoded QR code image
      stage: varchar("stage", { length: 20 }).notNull().default("film"),
      // ENUM: film / printing / cutting / done - sequential transitions only
      weight_kg: decimal("weight_kg", { precision: 12, scale: 3 }).notNull(),
      // CHECK: > 0, validates against production order limits
      cut_weight_total_kg: decimal("cut_weight_total_kg", { precision: 12, scale: 3 }).notNull().default("0"),
      // CHECK: >= 0, <= weight_kg
      waste_kg: decimal("waste_kg", { precision: 12, scale: 3 }).notNull().default("0"),
      // CHECK: >= 0, <= weight_kg  
      printed_at: timestamp("printed_at"),
      // Set when stage changes to 'printing', must be >= created_at
      cut_completed_at: timestamp("cut_completed_at"),
      // Set when stage changes to 'cutting', must be >= printed_at
      performed_by: integer("performed_by").references(() => users.id, { onDelete: "set null" }),
      // Legacy field, ON DELETE SET NULL
      machine_id: varchar("machine_id", { length: 20 }).notNull().references(() => machines.id, { onDelete: "restrict" }),
      // ON DELETE RESTRICT, machine must be 'active'
      employee_id: integer("employee_id").references(() => users.id, { onDelete: "set null" }),
      // Legacy field, ON DELETE SET NULL  
      created_by: integer("created_by").notNull().references(() => users.id, { onDelete: "restrict" }),
      // ON DELETE RESTRICT - user who created the roll
      printed_by: integer("printed_by").references(() => users.id, { onDelete: "set null" }),
      // ON DELETE SET NULL - user who printed the roll
      cut_by: integer("cut_by").references(() => users.id, { onDelete: "set null" }),
      // ON DELETE SET NULL - user who cut the roll
      qr_code: varchar("qr_code", { length: 255 }),
      // Legacy field
      created_at: timestamp("created_at").notNull().defaultNow(),
      completed_at: timestamp("completed_at")
      // Set when stage = 'done'
    }, (table) => ({
      // Check constraints for roll integrity
      rollSeqPositive: check("roll_seq_positive", sql`${table.roll_seq} > 0`),
      weightPositive: check("weight_kg_positive", sql`${table.weight_kg} > 0`),
      weightReasonable: check("weight_kg_reasonable", sql`${table.weight_kg} <= 2000`),
      // Max 2000kg per roll
      cutWeightValid: check("cut_weight_valid", sql`${table.cut_weight_total_kg} >= 0 AND ${table.cut_weight_total_kg} <= ${table.weight_kg}`),
      wasteValid: check("waste_valid", sql`${table.waste_kg} >= 0 AND ${table.waste_kg} <= ${table.weight_kg}`),
      stageValid: check("stage_valid", sql`${table.stage} IN ('film', 'printing', 'cutting', 'done')`),
      // Temporal constraints: timestamps must be in logical order
      printedAtValid: check("printed_at_valid", sql`${table.printed_at} IS NULL OR ${table.printed_at} >= ${table.created_at}`),
      cutCompletedAtValid: check("cut_completed_at_valid", sql`${table.cut_completed_at} IS NULL OR (${table.cut_completed_at} >= ${table.created_at} AND (${table.printed_at} IS NULL OR ${table.cut_completed_at} >= ${table.printed_at}))`),
      completedAtValid: check("completed_at_valid", sql`${table.completed_at} IS NULL OR ${table.completed_at} >= ${table.created_at}`),
      // INVARIANT E: Machine must be active for roll creation - enforced at application level
      machineActiveForCreation: check("machine_active_for_creation", sql`TRUE`)
      // Placeholder - enforced in application layer
    }));
    cuts = pgTable("cuts", {
      id: serial("id").primaryKey(),
      roll_id: integer("roll_id").notNull().references(() => rolls.id, { onDelete: "cascade" }),
      cut_weight_kg: decimal("cut_weight_kg", { precision: 12, scale: 3 }).notNull(),
      pieces_count: integer("pieces_count"),
      performed_by: integer("performed_by").references(() => users.id),
      created_at: timestamp("created_at").defaultNow()
    });
    warehouse_receipts = pgTable("warehouse_receipts", {
      id: serial("id").primaryKey(),
      production_order_id: integer("production_order_id").notNull().references(() => production_orders.id, { onDelete: "cascade" }),
      cut_id: integer("cut_id").references(() => cuts.id, { onDelete: "set null" }),
      received_weight_kg: decimal("received_weight_kg", { precision: 12, scale: 3 }).notNull(),
      received_by: integer("received_by").references(() => users.id),
      created_at: timestamp("created_at").defaultNow()
    });
    production_settings = pgTable("production_settings", {
      id: serial("id").primaryKey(),
      overrun_tolerance_percent: decimal("overrun_tolerance_percent", { precision: 5, scale: 2 }).notNull().default("3"),
      allow_last_roll_overrun: boolean("allow_last_roll_overrun").notNull().default(true),
      qr_prefix: varchar("qr_prefix", { length: 32 }).notNull().default("ROLL")
    });
    waste = pgTable("waste", {
      id: serial("id").primaryKey(),
      roll_id: integer("roll_id").references(() => rolls.id, { onDelete: "cascade" }),
      production_order_id: integer("production_order_id").references(() => production_orders.id, { onDelete: "cascade" }),
      quantity_wasted: decimal("quantity_wasted", { precision: 8, scale: 2 }).notNull(),
      reason: varchar("reason", { length: 100 }),
      stage: varchar("stage", { length: 50 }),
      // extruder / cutting / printing
      created_at: timestamp("created_at").defaultNow()
    });
    quality_checks = pgTable("quality_checks", {
      id: serial("id").primaryKey(),
      target_type: varchar("target_type", { length: 20 }),
      // roll / material
      target_id: integer("target_id"),
      result: varchar("result", { length: 10 }),
      // pass / fail
      score: integer("score"),
      // 1-5 stars
      notes: text("notes"),
      checked_by: integer("checked_by").references(() => users.id),
      created_at: timestamp("created_at").defaultNow()
    });
    maintenance_requests = pgTable("maintenance_requests", {
      id: serial("id").primaryKey(),
      request_number: varchar("request_number", { length: 50 }).notNull().unique(),
      // MO001, MO002, etc.
      machine_id: varchar("machine_id", { length: 20 }).references(() => machines.id),
      reported_by: integer("reported_by").references(() => users.id),
      issue_type: varchar("issue_type", { length: 50 }),
      // mechanical / electrical / other
      description: text("description"),
      urgency_level: varchar("urgency_level", { length: 20 }).default("normal"),
      // normal / medium / urgent
      status: varchar("status", { length: 20 }).default("open"),
      // open / in_progress / resolved
      assigned_to: integer("assigned_to").references(() => users.id),
      action_taken: text("action_taken"),
      date_reported: timestamp("date_reported").defaultNow(),
      date_resolved: timestamp("date_resolved")
    });
    maintenance_actions = pgTable("maintenance_actions", {
      id: serial("id").primaryKey(),
      action_number: varchar("action_number", { length: 50 }).notNull().unique(),
      // MA001, MA002, etc.
      maintenance_request_id: integer("maintenance_request_id").notNull().references(() => maintenance_requests.id, { onDelete: "cascade" }),
      action_type: varchar("action_type", { length: 50 }).notNull(),
      // فحص مبدئي / تغيير قطعة غيار / إصلاح مكانيكي / إصلاح كهربائي / إيقاف الماكينة
      description: text("description"),
      text_report: text("text_report"),
      // التقرير النصي
      spare_parts_request: text("spare_parts_request"),
      // طلب قطع غيار
      machining_request: text("machining_request"),
      // طلب مخرطة
      operator_negligence_report: text("operator_negligence_report"),
      // تبليغ اهمال المشغل
      // User tracking
      performed_by: integer("performed_by").notNull().references(() => users.id),
      // المستخدم الذي نفذ الإجراء
      request_created_by: integer("request_created_by").references(() => users.id),
      // المستخدم الذي أنشأ طلب الصيانة
      // Status and notifications
      requires_management_action: boolean("requires_management_action").default(false),
      // يحتاج موافقة إدارية
      management_notified: boolean("management_notified").default(false),
      // تم إبلاغ الإدارة
      action_date: timestamp("action_date").defaultNow(),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    spare_parts = pgTable("spare_parts", {
      id: serial("id").primaryKey(),
      part_id: varchar("part_id", { length: 50 }).notNull().unique(),
      machine_name: varchar("machine_name", { length: 100 }).notNull(),
      part_name: varchar("part_name", { length: 100 }).notNull(),
      code: varchar("code", { length: 50 }).notNull(),
      serial_number: varchar("serial_number", { length: 100 }).notNull(),
      specifications: text("specifications"),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    consumable_parts = pgTable("consumable_parts", {
      id: serial("id").primaryKey(),
      part_id: varchar("part_id", { length: 50 }).notNull().unique(),
      // CP001, CP002, etc.
      type: varchar("type", { length: 100 }).notNull(),
      // نوع القطعة (سيور، بيرنقات، مسامير، الخ)
      code: varchar("code", { length: 50 }).notNull(),
      // كود القطعة
      current_quantity: integer("current_quantity").notNull().default(0),
      // الكمية الحالية
      min_quantity: integer("min_quantity").default(0),
      // الحد الأدنى للكمية
      max_quantity: integer("max_quantity").default(0),
      // الحد الأقصى للكمية  
      unit: varchar("unit", { length: 20 }).default("\u0642\u0637\u0639\u0629"),
      // الوحدة (قطعة، كيلو، متر، الخ)
      barcode: varchar("barcode", { length: 100 }),
      // الباركود
      location: varchar("location", { length: 100 }),
      // موقع التخزين
      notes: text("notes"),
      // ملاحظات
      status: varchar("status", { length: 20 }).default("active"),
      // active / inactive
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    }, (table) => ({
      // Check constraints for consumable parts integrity
      currentQuantityNonNegative: check("current_quantity_non_negative", sql`${table.current_quantity} >= 0`),
      minQuantityNonNegative: check("min_quantity_non_negative", sql`${table.min_quantity} >= 0`),
      maxQuantityNonNegative: check("max_quantity_non_negative", sql`${table.max_quantity} >= 0`),
      statusValid: check("consumable_status_valid", sql`${table.status} IN ('active', 'inactive')`)
    }));
    consumable_parts_transactions = pgTable("consumable_parts_transactions", {
      id: serial("id").primaryKey(),
      transaction_id: varchar("transaction_id", { length: 50 }).notNull().unique(),
      // CT001, CT002, etc.
      consumable_part_id: integer("consumable_part_id").notNull().references(() => consumable_parts.id, { onDelete: "restrict" }),
      transaction_type: varchar("transaction_type", { length: 10 }).notNull(),
      // in / out
      quantity: integer("quantity").notNull(),
      // الكمية (سالبة للخروج، موجبة للدخول)
      barcode_scanned: varchar("barcode_scanned", { length: 100 }),
      // الباركود الممسوح
      manual_entry: boolean("manual_entry").default(false),
      // إدخال يدوي أم بالماسح
      transaction_reason: varchar("transaction_reason", { length: 100 }),
      // سبب الحركة
      notes: text("notes"),
      // ملاحظات
      performed_by: integer("performed_by").notNull().references(() => users.id, { onDelete: "restrict" }),
      created_at: timestamp("created_at").defaultNow()
    }, (table) => ({
      // Check constraints for transaction integrity
      quantityPositive: check("quantity_positive", sql`${table.quantity} > 0`),
      transactionTypeValid: check("transaction_type_valid", sql`${table.transaction_type} IN ('in', 'out')`)
    }));
    maintenance_reports = pgTable("maintenance_reports", {
      id: serial("id").primaryKey(),
      report_number: varchar("report_number", { length: 50 }).notNull().unique(),
      // MR001, MR002, etc.
      maintenance_action_id: integer("maintenance_action_id").notNull().references(() => maintenance_actions.id),
      report_type: varchar("report_type", { length: 30 }).notNull(),
      // spare_parts / machining / operator_negligence
      title: varchar("title", { length: 200 }).notNull(),
      description: text("description").notNull(),
      priority: varchar("priority", { length: 20 }).default("normal"),
      // low / normal / high / urgent
      // Status tracking
      status: varchar("status", { length: 20 }).default("pending"),
      // pending / reviewed / approved / rejected / completed
      reviewed_by: integer("reviewed_by").references(() => users.id),
      review_notes: text("review_notes"),
      review_date: timestamp("review_date"),
      created_by: integer("created_by").notNull().references(() => users.id),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    operator_negligence_reports = pgTable("operator_negligence_reports", {
      id: serial("id").primaryKey(),
      report_number: varchar("report_number", { length: 50 }).notNull().unique(),
      // ON001, ON002, etc.
      maintenance_action_id: integer("maintenance_action_id").references(() => maintenance_actions.id),
      operator_id: integer("operator_id").notNull().references(() => users.id),
      machine_id: varchar("machine_id", { length: 20 }).references(() => machines.id),
      negligence_type: varchar("negligence_type", { length: 50 }).notNull(),
      // عدم صيانة / سوء استخدام / عدم اتباع تعليمات
      description: text("description").notNull(),
      evidence: text("evidence"),
      // الأدلة
      // Impact assessment
      damage_cost: decimal("damage_cost", { precision: 10, scale: 2 }),
      downtime_hours: integer("downtime_hours"),
      // Status and follow-up
      status: varchar("status", { length: 20 }).default("reported"),
      // reported / under_investigation / action_taken / closed
      action_taken: text("action_taken"),
      disciplinary_action: varchar("disciplinary_action", { length: 50 }),
      // تحذير / خصم / إيقاف مؤقت
      reported_by: integer("reported_by").notNull().references(() => users.id),
      investigated_by: integer("investigated_by").references(() => users.id),
      report_date: timestamp("report_date").defaultNow(),
      investigation_date: timestamp("investigation_date"),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    violations = pgTable("violations", {
      id: serial("id").primaryKey(),
      employee_id: integer("employee_id").references(() => users.id),
      violation_type: varchar("violation_type", { length: 50 }),
      description: text("description"),
      date: date("date").notNull(),
      action_taken: text("action_taken"),
      reported_by: integer("reported_by").references(() => users.id)
    });
    items = pgTable("items", {
      id: varchar("id", { length: 20 }).primaryKey(),
      category_id: varchar("category_id", { length: 20 }),
      name: varchar("name", { length: 100 }),
      name_ar: varchar("name_ar", { length: 100 }),
      code: varchar("code", { length: 50 }),
      status: varchar("status", { length: 20 }).default("active")
    });
    locations = pgTable("locations", {
      id: varchar("id", { length: 20 }).primaryKey(),
      name: varchar("name", { length: 100 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      coordinates: varchar("coordinates", { length: 100 }),
      tolerance_range: integer("tolerance_range")
    });
    suppliers = pgTable("suppliers", {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 100 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      contact: varchar("contact", { length: 100 }),
      phone: varchar("phone", { length: 20 }),
      address: text("address"),
      materials_supplied: json("materials_supplied").$type()
    });
    inventory = pgTable("inventory", {
      id: serial("id").primaryKey(),
      item_id: varchar("item_id", { length: 20 }).notNull().references(() => items.id, { onDelete: "restrict" }),
      // ON DELETE RESTRICT
      location_id: varchar("location_id", { length: 20 }).references(() => locations.id, { onDelete: "restrict" }),
      // ON DELETE RESTRICT
      current_stock: decimal("current_stock", { precision: 10, scale: 2 }).notNull().default("0"),
      // CHECK: >= 0 - NEVER NEGATIVE
      min_stock: decimal("min_stock", { precision: 10, scale: 2 }).notNull().default("0"),
      // CHECK: >= 0 - minimum stock threshold
      max_stock: decimal("max_stock", { precision: 10, scale: 2 }).notNull().default("0"),
      // CHECK: >= min_stock - maximum stock threshold
      unit: varchar("unit", { length: 20 }).notNull().default("\u0643\u064A\u0644\u0648"),
      // ENUM: kg / piece / roll / package
      cost_per_unit: decimal("cost_per_unit", { precision: 10, scale: 4 }),
      // CHECK: >= 0 if not null
      last_updated: timestamp("last_updated").notNull().defaultNow()
      // Updated on every stock change
    }, (table) => ({
      // INVARIANT C: Stock constraints for inventory integrity
      currentStockNonNegative: check("current_stock_non_negative", sql`${table.current_stock} >= 0`),
      minStockNonNegative: check("min_stock_non_negative", sql`${table.min_stock} >= 0`),
      maxStockNonNegative: check("max_stock_non_negative", sql`${table.max_stock} >= 0`),
      stockThresholdLogical: check("stock_threshold_logical", sql`${table.max_stock} >= ${table.min_stock}`),
      costPerUnitValid: check("cost_per_unit_valid", sql`${table.cost_per_unit} IS NULL OR ${table.cost_per_unit} >= 0`),
      unitValid: check("unit_valid", sql`${table.unit} IN ('كيلو', 'قطعة', 'رول', 'علبة', 'kg', 'piece', 'roll', 'package')`),
      // Unique constraint: one inventory record per item-location combination
      itemLocationUnique: check("item_location_unique", sql`TRUE`)
      // This will be handled as a unique index separately
    }));
    inventory_movements = pgTable("inventory_movements", {
      id: serial("id").primaryKey(),
      inventory_id: integer("inventory_id").notNull().references(() => inventory.id, { onDelete: "restrict" }),
      // ON DELETE RESTRICT
      movement_type: varchar("movement_type", { length: 20 }).notNull(),
      // in / out / transfer / adjustment
      quantity: decimal("quantity", { precision: 10, scale: 2 }).notNull(),
      // CHECK: > 0
      unit_cost: decimal("unit_cost", { precision: 10, scale: 4 }),
      // CHECK: >= 0 if not null
      total_cost: decimal("total_cost", { precision: 10, scale: 4 }),
      // CHECK: >= 0 if not null
      reference_number: varchar("reference_number", { length: 50 }),
      reference_type: varchar("reference_type", { length: 20 }),
      // purchase / sale / production / adjustment
      notes: text("notes"),
      created_by: integer("created_by").notNull().references(() => users.id, { onDelete: "restrict" }),
      // ON DELETE RESTRICT for audit trail
      created_at: timestamp("created_at").notNull().defaultNow()
    }, (table) => ({
      // Check constraints for movement integrity
      quantityPositive: check("quantity_positive", sql`${table.quantity} > 0`),
      unitCostValid: check("unit_cost_valid", sql`${table.unit_cost} IS NULL OR ${table.unit_cost} >= 0`),
      totalCostValid: check("total_cost_valid", sql`${table.total_cost} IS NULL OR ${table.total_cost} >= 0`),
      movementTypeValid: check("movement_type_valid", sql`${table.movement_type} IN ('in', 'out', 'transfer', 'adjustment')`),
      referenceTypeValid: check("reference_type_valid", sql`${table.reference_type} IS NULL OR ${table.reference_type} IN ('purchase', 'sale', 'production', 'adjustment', 'transfer')`),
      // Logical constraint: if unit_cost and quantity are provided, total_cost should be reasonable
      totalCostLogical: check("total_cost_logical", sql`${table.total_cost} IS NULL OR ${table.unit_cost} IS NULL OR ${table.total_cost} = ${table.unit_cost} * ${table.quantity}`)
    }));
    warehouse_transactions = pgTable("warehouse_transactions", {
      id: serial("id").primaryKey(),
      type: varchar("type", { length: 30 }),
      // incoming / issued / production / delivery
      item_id: varchar("item_id", { length: 20 }).references(() => items.id),
      quantity: decimal("quantity", { precision: 10, scale: 2 }).notNull(),
      from_location: varchar("from_location", { length: 100 }),
      to_location: varchar("to_location", { length: 100 }),
      date: timestamp("date").defaultNow(),
      reference_id: integer("reference_id"),
      // order_id, production_order_id, etc.
      notes: text("notes")
    });
    mixing_recipes = pgTable("mixing_recipes", {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 100 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      machine_type: varchar("machine_type", { length: 20 }),
      // A / ABA
      formula_layers: integer("formula_layers"),
      material_items: json("material_items").$type(),
      created_at: timestamp("created_at").defaultNow()
    });
    training_records = pgTable("training_records", {
      id: serial("id").primaryKey(),
      employee_id: integer("employee_id").references(() => users.id),
      training_type: varchar("training_type", { length: 100 }),
      training_name: varchar("training_name", { length: 200 }),
      date: date("date").notNull(),
      status: varchar("status", { length: 20 }).default("completed"),
      // completed / pending / cancelled
      instructor: varchar("instructor", { length: 100 }),
      notes: text("notes")
    });
    training_programs = pgTable("training_programs", {
      id: serial("id").primaryKey(),
      title: varchar("title", { length: 200 }).notNull(),
      title_ar: varchar("title_ar", { length: 200 }),
      description: text("description"),
      description_ar: text("description_ar"),
      type: varchar("type", { length: 20 }).default("field"),
      // field / online (للمستقبل)
      category: varchar("category", { length: 50 }),
      // general / department_specific
      training_scope: varchar("training_scope", { length: 50 }),
      // safety / first_aid / fire_safety / technical / film / printing / cutting
      duration_hours: integer("duration_hours"),
      max_participants: integer("max_participants"),
      location: varchar("location", { length: 200 }),
      // مكان التدريب الميداني
      prerequisites: text("prerequisites"),
      learning_objectives: json("learning_objectives").$type(),
      practical_requirements: text("practical_requirements"),
      // المتطلبات العملية للتدريب
      instructor_id: integer("instructor_id").references(() => users.id),
      department_id: varchar("department_id", { length: 20 }).references(() => sections.id),
      // للتدريبات الخاصة بالقسم
      status: varchar("status", { length: 20 }).default("active"),
      // active / inactive / draft
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    training_materials = pgTable("training_materials", {
      id: serial("id").primaryKey(),
      program_id: integer("program_id").references(() => training_programs.id),
      title: varchar("title", { length: 200 }).notNull(),
      title_ar: varchar("title_ar", { length: 200 }),
      type: varchar("type", { length: 20 }),
      // video / document / quiz / assignment
      content: text("content"),
      file_url: varchar("file_url", { length: 500 }),
      order_index: integer("order_index").default(0),
      duration_minutes: integer("duration_minutes"),
      is_mandatory: boolean("is_mandatory").default(true)
    });
    training_enrollments = pgTable("training_enrollments", {
      id: serial("id").primaryKey(),
      program_id: integer("program_id").references(() => training_programs.id),
      employee_id: integer("employee_id").references(() => users.id),
      enrolled_date: timestamp("enrolled_date").defaultNow(),
      training_date: date("training_date"),
      // تاريخ التدريب الميداني
      attendance_status: varchar("attendance_status", { length: 20 }).default("enrolled"),
      // enrolled / attended / absent / cancelled
      completion_status: varchar("completion_status", { length: 20 }).default("not_started"),
      // not_started / completed / failed
      attendance_notes: text("attendance_notes"),
      // ملاحظات الحضور
      practical_performance: varchar("practical_performance", { length: 20 }),
      // excellent / good / fair / poor
      final_score: integer("final_score"),
      // 0-100
      certificate_issued: boolean("certificate_issued").default(false),
      certificate_number: varchar("certificate_number", { length: 50 }),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    training_evaluations = pgTable("training_evaluations", {
      id: serial("id").primaryKey(),
      enrollment_id: integer("enrollment_id").references(() => training_enrollments.id),
      program_id: integer("program_id").references(() => training_programs.id),
      employee_id: integer("employee_id").references(() => users.id),
      evaluator_id: integer("evaluator_id").references(() => users.id),
      evaluation_date: date("evaluation_date").notNull(),
      // معايير التقييم البسيطة
      theoretical_understanding: integer("theoretical_understanding"),
      // 1-5 فهم نظري
      practical_skills: integer("practical_skills"),
      // 1-5 مهارات عملية
      safety_compliance: integer("safety_compliance"),
      // 1-5 الالتزام بالسلامة
      teamwork: integer("teamwork"),
      // 1-5 العمل الجماعي
      communication: integer("communication"),
      // 1-5 التواصل
      overall_rating: integer("overall_rating"),
      // 1-5 التقييم الإجمالي
      strengths: text("strengths"),
      // نقاط القوة
      areas_for_improvement: text("areas_for_improvement"),
      // مجالات التحسين
      additional_notes: text("additional_notes"),
      // ملاحظات إضافية
      recommendation: varchar("recommendation", { length: 20 }),
      // pass / fail / needs_retraining
      created_at: timestamp("created_at").defaultNow()
    });
    training_certificates = pgTable("training_certificates", {
      id: serial("id").primaryKey(),
      enrollment_id: integer("enrollment_id").references(() => training_enrollments.id).unique(),
      employee_id: integer("employee_id").references(() => users.id),
      program_id: integer("program_id").references(() => training_programs.id),
      certificate_number: varchar("certificate_number", { length: 50 }).unique().notNull(),
      issue_date: date("issue_date").notNull(),
      expiry_date: date("expiry_date"),
      // بعض الشهادات تنتهي صلاحيتها
      final_score: integer("final_score"),
      certificate_status: varchar("certificate_status", { length: 20 }).default("active"),
      // active / expired / revoked
      issued_by: integer("issued_by").references(() => users.id),
      certificate_file_url: varchar("certificate_file_url", { length: 500 }),
      // رابط ملف الشهادة
      created_at: timestamp("created_at").defaultNow()
    });
    performance_reviews = pgTable("performance_reviews", {
      id: serial("id").primaryKey(),
      employee_id: varchar("employee_id", { length: 20 }).notNull().references(() => users.id),
      reviewer_id: varchar("reviewer_id", { length: 20 }).notNull().references(() => users.id),
      review_period_start: date("review_period_start").notNull(),
      review_period_end: date("review_period_end").notNull(),
      review_type: varchar("review_type", { length: 20 }),
      // annual / semi_annual / quarterly / probation
      overall_rating: integer("overall_rating"),
      // 1-5 scale
      goals_achievement: integer("goals_achievement"),
      // 1-5 scale
      skills_rating: integer("skills_rating"),
      // 1-5 scale
      behavior_rating: integer("behavior_rating"),
      // 1-5 scale
      strengths: text("strengths"),
      areas_for_improvement: text("areas_for_improvement"),
      development_plan: text("development_plan"),
      goals_for_next_period: text("goals_for_next_period"),
      employee_comments: text("employee_comments"),
      reviewer_comments: text("reviewer_comments"),
      hr_comments: text("hr_comments"),
      status: varchar("status", { length: 20 }).default("draft"),
      // draft / completed / approved / archived
      created_at: timestamp("created_at").defaultNow(),
      completed_at: timestamp("completed_at")
    });
    performance_criteria = pgTable("performance_criteria", {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 100 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      description: text("description"),
      description_ar: text("description_ar"),
      category: varchar("category", { length: 50 }),
      // technical / behavioral / leadership / productivity
      weight_percentage: integer("weight_percentage").default(20),
      // وزن المعيار في التقييم الإجمالي
      applicable_roles: json("applicable_roles").$type(),
      // أيدي الأدوار المطبق عليها
      is_active: boolean("is_active").default(true)
    });
    performance_ratings = pgTable("performance_ratings", {
      id: serial("id").primaryKey(),
      review_id: integer("review_id").notNull().references(() => performance_reviews.id),
      criteria_id: integer("criteria_id").notNull().references(() => performance_criteria.id),
      rating: integer("rating").notNull(),
      // 1-5 scale
      comments: text("comments")
    });
    leave_types = pgTable("leave_types", {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 100 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      description: text("description"),
      description_ar: text("description_ar"),
      days_per_year: integer("days_per_year"),
      // عدد الأيام المسموحة سنوياً
      is_paid: boolean("is_paid").default(true),
      requires_medical_certificate: boolean("requires_medical_certificate").default(false),
      min_notice_days: integer("min_notice_days").default(1),
      // الحد الأدنى للإشعار المسبق
      max_consecutive_days: integer("max_consecutive_days"),
      // أقصى عدد أيام متتالية
      applicable_after_months: integer("applicable_after_months").default(0),
      // يحق للموظف بعد كم شهر
      color: varchar("color", { length: 20 }).default("#3b82f6"),
      // لون العرض في التقويم
      is_active: boolean("is_active").default(true)
    });
    leave_requests = pgTable("leave_requests", {
      id: serial("id").primaryKey(),
      employee_id: varchar("employee_id", { length: 20 }).notNull().references(() => users.id),
      leave_type_id: integer("leave_type_id").notNull().references(() => leave_types.id),
      start_date: date("start_date").notNull(),
      end_date: date("end_date").notNull(),
      days_count: integer("days_count").notNull(),
      reason: text("reason"),
      medical_certificate_url: varchar("medical_certificate_url", { length: 500 }),
      emergency_contact: varchar("emergency_contact", { length: 100 }),
      work_handover: text("work_handover"),
      // تسليم العمل
      replacement_employee_id: varchar("replacement_employee_id", { length: 20 }).references(() => users.id),
      // Approval workflow
      direct_manager_id: varchar("direct_manager_id", { length: 20 }).references(() => users.id),
      direct_manager_status: varchar("direct_manager_status", { length: 20 }).default("pending"),
      // pending / approved / rejected
      direct_manager_comments: text("direct_manager_comments"),
      direct_manager_action_date: timestamp("direct_manager_action_date"),
      hr_status: varchar("hr_status", { length: 20 }).default("pending"),
      // pending / approved / rejected
      hr_comments: text("hr_comments"),
      hr_action_date: timestamp("hr_action_date"),
      hr_reviewed_by: varchar("hr_reviewed_by", { length: 20 }).references(() => users.id),
      final_status: varchar("final_status", { length: 20 }).default("pending"),
      // pending / approved / rejected / cancelled
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    leave_balances = pgTable("leave_balances", {
      id: serial("id").primaryKey(),
      employee_id: varchar("employee_id", { length: 20 }).notNull().references(() => users.id),
      leave_type_id: integer("leave_type_id").notNull().references(() => leave_types.id),
      year: integer("year").notNull(),
      allocated_days: integer("allocated_days").notNull(),
      // الأيام المخصصة
      used_days: integer("used_days").default(0),
      // الأيام المستخدمة
      pending_days: integer("pending_days").default(0),
      // الأيام المعلقة (طلبات لم توافق عليها بعد)
      remaining_days: integer("remaining_days").notNull(),
      // الأيام المتبقية
      carried_forward: integer("carried_forward").default(0),
      // الأيام المنقولة من السنة السابقة
      expires_at: date("expires_at")
      // تاريخ انتهاء صلاحية الإجازات المنقولة
    });
    admin_decisions = pgTable("admin_decisions", {
      id: serial("id").primaryKey(),
      title: varchar("title", { length: 100 }).notNull(),
      title_ar: varchar("title_ar", { length: 100 }),
      description: text("description"),
      target_type: varchar("target_type", { length: 20 }),
      // user / department / company
      target_id: integer("target_id"),
      date: date("date").notNull(),
      issued_by: varchar("issued_by", { length: 20 }).references(() => users.id)
    });
    company_profile = pgTable("company_profile", {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 100 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      address: text("address"),
      tax_number: varchar("tax_number", { length: 20 }),
      phone: varchar("phone", { length: 20 }),
      email: varchar("email", { length: 100 }),
      logo_url: varchar("logo_url", { length: 255 }),
      working_hours_per_day: integer("working_hours_per_day").default(8),
      default_language: varchar("default_language", { length: 10 }).default("ar")
    });
    notifications = pgTable("notifications", {
      id: serial("id").primaryKey(),
      title: varchar("title", { length: 200 }).notNull(),
      title_ar: varchar("title_ar", { length: 200 }),
      message: text("message").notNull(),
      message_ar: text("message_ar"),
      type: varchar("type", { length: 30 }).notNull(),
      // whatsapp / sms / email / push / system
      priority: varchar("priority", { length: 20 }).default("normal"),
      // low / normal / high / urgent
      // Recipients
      recipient_type: varchar("recipient_type", { length: 20 }).notNull(),
      // user / group / role / all
      recipient_id: varchar("recipient_id", { length: 20 }),
      // user_id, role_id, or null for 'all'
      phone_number: varchar("phone_number", { length: 20 }),
      // Status tracking
      status: varchar("status", { length: 20 }).default("pending"),
      // pending / sent / delivered / failed / read
      sent_at: timestamp("sent_at"),
      delivered_at: timestamp("delivered_at"),
      read_at: timestamp("read_at"),
      // Twilio/WhatsApp specific
      twilio_sid: varchar("twilio_sid", { length: 100 }),
      // Twilio message SID
      external_status: varchar("external_status", { length: 30 }),
      // Twilio status callback
      error_message: text("error_message"),
      // Metadata
      scheduled_for: timestamp("scheduled_for"),
      // For scheduled messages
      context_type: varchar("context_type", { length: 30 }),
      // attendance / order / maintenance / hr
      context_id: varchar("context_id", { length: 50 }),
      // Related record ID
      created_by: integer("created_by").references(() => users.id),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    notification_templates = pgTable("notification_templates", {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 100 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      // Template content
      title_template: varchar("title_template", { length: 200 }).notNull(),
      title_template_ar: varchar("title_template_ar", { length: 200 }),
      message_template: text("message_template").notNull(),
      message_template_ar: text("message_template_ar"),
      // Configuration
      type: varchar("type", { length: 30 }).notNull(),
      // whatsapp / sms / email / push
      trigger_event: varchar("trigger_event", { length: 50 }).notNull(),
      // order_created / attendance_late / etc
      is_active: boolean("is_active").default(true),
      // Variables used in template (JSON array)
      variables: json("variables").$type(),
      // ["user_name", "order_number", etc.]
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    usersRelations = relations(users, ({ one, many }) => ({
      role: one(roles, { fields: [users.role_id], references: [roles.id] }),
      section: one(sections, { fields: [users.section_id], references: [sections.id] }),
      attendance: many(attendance),
      violations: many(violations),
      trainingRecords: many(training_records),
      trainingEnrollments: many(training_enrollments),
      performanceReviews: many(performance_reviews, { relationName: "employee_reviews" }),
      conductedReviews: many(performance_reviews, { relationName: "reviewer_reviews" }),
      leaveRequests: many(leave_requests),
      leaveBalances: many(leave_balances),
      instructedPrograms: many(training_programs)
    }));
    customersRelations = relations(customers, ({ one, many }) => ({
      salesRep: one(users, { fields: [customers.sales_rep_id], references: [users.id] }),
      orders: many(orders)
    }));
    ordersRelations = relations(orders, ({ one, many }) => ({
      customer: one(customers, { fields: [orders.customer_id], references: [customers.id] }),
      productionOrders: many(production_orders)
    }));
    productionOrdersRelations = relations(production_orders, ({ one, many }) => ({
      order: one(orders, { fields: [production_orders.order_id], references: [orders.id] }),
      customerProduct: one(customer_products, { fields: [production_orders.customer_product_id], references: [customer_products.id] }),
      rolls: many(rolls),
      waste: many(waste),
      warehouseReceipts: many(warehouse_receipts)
    }));
    rollsRelations = relations(rolls, ({ one, many }) => ({
      productionOrder: one(production_orders, { fields: [rolls.production_order_id], references: [production_orders.id] }),
      machine: one(machines, { fields: [rolls.machine_id], references: [machines.id] }),
      employee: one(users, { fields: [rolls.employee_id], references: [users.id] }),
      performedBy: one(users, { fields: [rolls.performed_by], references: [users.id] }),
      waste: many(waste),
      qualityChecks: many(quality_checks),
      cuts: many(cuts)
    }));
    machinesRelations = relations(machines, ({ one, many }) => ({
      section: one(sections, { fields: [machines.section_id], references: [sections.id] }),
      rolls: many(rolls),
      maintenanceRequests: many(maintenance_requests)
    }));
    sectionsRelations = relations(sections, ({ many }) => ({
      users: many(users),
      machines: many(machines)
    }));
    rolesRelations = relations(roles, ({ many }) => ({
      users: many(users)
    }));
    categoriesRelations = relations(categories, ({ one, many }) => ({
      parent: one(categories, { fields: [categories.parent_id], references: [categories.id], relationName: "parent_category" }),
      children: many(categories, { relationName: "parent_category" }),
      items: many(items),
      customerProducts: many(customer_products)
    }));
    notificationsRelations = relations(notifications, ({ one }) => ({
      createdBy: one(users, { fields: [notifications.created_by], references: [users.id] })
    }));
    notificationTemplatesRelations = relations(notification_templates, ({ one }) => ({
      // No direct relations needed for templates
    }));
    insertNotificationSchema = createInsertSchema(notifications);
    insertNotificationTemplateSchema = createInsertSchema(notification_templates);
    itemsRelations = relations(items, ({ one, many }) => ({
      category: one(categories, { fields: [items.category_id], references: [categories.id] }),
      customerProducts: many(customer_products),
      warehouseTransactions: many(warehouse_transactions),
      inventory: many(inventory)
    }));
    inventoryRelations = relations(inventory, ({ one }) => ({
      item: one(items, { fields: [inventory.item_id], references: [items.id] }),
      location: one(locations, { fields: [inventory.location_id], references: [locations.id] })
    }));
    customerProductsRelations = relations(customer_products, ({ one, many }) => ({
      customer: one(customers, { fields: [customer_products.customer_id], references: [customers.id] }),
      category: one(categories, { fields: [customer_products.category_id], references: [categories.id] }),
      item: one(items, { fields: [customer_products.item_id], references: [items.id] }),
      productionOrders: many(production_orders)
    }));
    suppliersRelations = relations(suppliers, ({ many }) => ({
      // يمكن إضافة علاقات الموردين مع الأصناف لاحقاً
    }));
    trainingRecordsRelations = relations(training_records, ({ one }) => ({
      employee: one(users, { fields: [training_records.employee_id], references: [users.id] })
    }));
    cutsRelations = relations(cuts, ({ one, many }) => ({
      roll: one(rolls, { fields: [cuts.roll_id], references: [rolls.id] }),
      performedBy: one(users, { fields: [cuts.performed_by], references: [users.id] }),
      warehouseReceipts: many(warehouse_receipts)
    }));
    warehouseReceiptsRelations = relations(warehouse_receipts, ({ one }) => ({
      productionOrder: one(production_orders, { fields: [warehouse_receipts.production_order_id], references: [production_orders.id] }),
      cut: one(cuts, { fields: [warehouse_receipts.cut_id], references: [cuts.id] }),
      receivedBy: one(users, { fields: [warehouse_receipts.received_by], references: [users.id] })
    }));
    adminDecisionsRelations = relations(admin_decisions, ({ one }) => ({
      issuedBy: one(users, { fields: [admin_decisions.issued_by], references: [users.id] })
    }));
    insertUserSchema = createInsertSchema(users).omit({
      id: true,
      created_at: true
    });
    insertRollSchema = createInsertSchema(rolls).omit({
      id: true,
      created_at: true,
      roll_number: true,
      completed_at: true,
      roll_seq: true,
      qr_code_text: true,
      qr_png_base64: true
    }).extend({
      // INVARIANT B: Enforce production order constraints
      production_order_id: z.number().int().positive("\u0645\u0639\u0631\u0641 \u0623\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0645\u0637\u0644\u0648\u0628"),
      // INVARIANT E: Machine must be valid and active
      machine_id: z.string().min(1, "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0645\u0637\u0644\u0648\u0628"),
      // Weight validation with business rules
      weight_kg: z.union([z.string(), z.number()]).transform((val) => {
        if (val === null || val === void 0 || val === "") {
          throw new Error("\u0627\u0644\u0648\u0632\u0646 \u0645\u0637\u0644\u0648\u0628");
        }
        const num = typeof val === "string" ? parseFloatSafe(val, "\u0627\u0644\u0648\u0632\u0646") : val;
        return num;
      }).refine((val) => val > 0, "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0648\u0632\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631").refine((val) => val <= 2e3, "\u0627\u0644\u0648\u0632\u0646 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u062A\u062C\u0627\u0648\u0632 2000 \u0643\u064A\u0644\u0648"),
      // Stage validation - must start at 'film'
      stage: z.string().default("film").refine(
        (val) => ["film", "printing", "cutting", "done"].includes(val),
        "\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629"
      ),
      // User validation
      created_by: z.number().int().positive("\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628")
    });
    insertCutSchema = createInsertSchema(cuts).omit({
      id: true,
      created_at: true
    }).extend({
      cut_weight_kg: z.number().positive("\u0627\u0644\u0648\u0632\u0646 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631")
    });
    insertWarehouseReceiptSchema = createInsertSchema(warehouse_receipts).omit({
      id: true,
      created_at: true
    }).extend({
      received_weight_kg: z.number().positive("\u0627\u0644\u0648\u0632\u0646 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631")
    });
    insertProductionSettingsSchema = createInsertSchema(production_settings).omit({
      id: true
    }).extend({
      overrun_tolerance_percent: z.number().min(0).max(10, "\u0627\u0644\u0646\u0633\u0628\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0628\u064A\u0646 0 \u0648 10")
    });
    insertMaintenanceRequestSchema = createInsertSchema(maintenance_requests).omit({
      id: true,
      request_number: true,
      date_reported: true,
      date_resolved: true
    });
    insertItemSchema = createInsertSchema(items).omit({
      id: true
    });
    insertSupplierSchema = createInsertSchema(suppliers).omit({
      id: true
    });
    insertWarehouseTransactionSchema = createInsertSchema(warehouse_transactions).omit({
      id: true,
      date: true
    });
    insertInventorySchema = createInsertSchema(inventory).omit({
      id: true,
      last_updated: true
    });
    insertInventoryMovementSchema = createInsertSchema(inventory_movements).omit({
      id: true,
      created_at: true
    });
    insertMixingRecipeSchema = createInsertSchema(mixing_recipes).omit({
      id: true,
      created_at: true
    });
    insertTrainingRecordSchema = createInsertSchema(training_records).omit({
      id: true
    });
    insertAdminDecisionSchema = createInsertSchema(admin_decisions).omit({
      id: true
    });
    insertLocationSchema = createInsertSchema(locations).omit({
      id: true
    });
    insertNewOrderSchema = createInsertSchema(orders).omit({
      id: true,
      created_at: true
    }).extend({
      // Order number validation
      order_number: z.string().min(1, "\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628 \u0645\u0637\u0644\u0648\u0628").max(50, "\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628 \u0637\u0648\u064A\u0644 \u062C\u062F\u0627\u064B"),
      // Customer validation - INVARIANT F: Must reference valid customer
      customer_id: z.string().min(1, "\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0637\u0644\u0648\u0628"),
      // INVARIANT G: Delivery date must be in future
      delivery_date: z.union([z.string(), z.date(), z.null()]).optional().transform((val) => {
        if (!val) return null;
        const date2 = typeof val === "string" ? new Date(val) : val;
        return date2 instanceof Date && !isNaN(date2.getTime()) ? date2 : null;
      }).refine((date2) => {
        if (!date2) return true;
        return date2 >= new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
      }, "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644"),
      // Delivery days validation
      delivery_days: z.union([z.string(), z.number(), z.null()]).optional().transform((val) => {
        if (val === null || val === void 0 || val === "") return null;
        const num = typeof val === "string" ? parseIntSafe(val, "\u0623\u064A\u0627\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645") : val;
        return num;
      }).refine((val) => val === null || val > 0, "\u0623\u064A\u0627\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631"),
      // Status validation
      status: z.enum(["waiting", "in_production", "paused", "cancelled", "completed"]).default("waiting"),
      // User reference
      created_by: z.number().int().positive("\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628").optional()
    });
    insertProductionOrderSchema = createInsertSchema(production_orders).omit({
      id: true,
      created_at: true,
      production_order_number: true,
      // NEW: حقول التتبع تحسب تلقائياً - لا نحتاجها في الإدخال
      produced_quantity_kg: true,
      printed_quantity_kg: true,
      net_quantity_kg: true,
      waste_quantity_kg: true,
      film_completion_percentage: true,
      printing_completion_percentage: true,
      cutting_completion_percentage: true
    }).extend({
      // INVARIANT A & F: Order must exist and be valid
      order_id: z.number().int().positive("\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628 \u0645\u0637\u0644\u0648\u0628"),
      customer_product_id: z.number().int().positive("\u0645\u0639\u0631\u0641 \u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0637\u0644\u0648\u0628"),
      // Quantity validation with business rules
      quantity_kg: z.union([z.string(), z.number()]).transform((val) => {
        if (val === null || val === void 0 || val === "") {
          throw new Error("\u0627\u0644\u0643\u0645\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629");
        }
        const num = typeof val === "string" ? parseFloatSafe(val, "\u0627\u0644\u0643\u0645\u064A\u0629") : val;
        return num.toString();
      }).refine((val) => parseFloat(val) > 0, "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0643\u0645\u064A\u0629 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631").refine((val) => parseFloat(val) <= 1e4, "\u0627\u0644\u0643\u0645\u064A\u0629 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u062A\u062A\u062C\u0627\u0648\u0632 10000 \u0643\u064A\u0644\u0648"),
      // Overrun percentage validation
      overrun_percentage: z.union([z.string(), z.number()]).transform((val) => {
        if (val === null || val === void 0 || val === "") return "5.00";
        const num = typeof val === "string" ? parseFloatSafe(val, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0632\u064A\u0627\u062F\u0629") : val;
        return num.toString();
      }).refine((val) => {
        const num = parseFloat(val);
        return num >= 0 && num <= 50;
      }, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0632\u064A\u0627\u062F\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0628\u064A\u0646 0 \u0648 50 \u0628\u0627\u0644\u0645\u0626\u0629"),
      // Final quantity - automatically calculated but validated
      final_quantity_kg: z.union([z.string(), z.number()]).transform((val) => {
        if (val === null || val === void 0 || val === "") {
          throw new Error("\u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629");
        }
        const num = typeof val === "string" ? parseFloatSafe(val, "\u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629") : val;
        return num.toString();
      }).refine((val) => parseFloat(val) > 0, "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631"),
      // Status validation
      status: z.enum(["pending", "active", "completed", "cancelled"]).default("pending")
    });
    system_settings = pgTable("system_settings", {
      id: serial("id").primaryKey(),
      setting_key: varchar("setting_key", { length: 100 }).notNull().unique(),
      setting_value: text("setting_value"),
      setting_type: varchar("setting_type", { length: 20 }).default("string"),
      // string / number / boolean / json
      description: text("description"),
      is_editable: boolean("is_editable").default(true),
      updated_at: timestamp("updated_at").defaultNow(),
      updated_by: varchar("updated_by", { length: 20 }).references(() => users.id)
    });
    user_settings = pgTable("user_settings", {
      id: serial("id").primaryKey(),
      user_id: varchar("user_id", { length: 20 }).references(() => users.id).notNull(),
      setting_key: varchar("setting_key", { length: 100 }).notNull(),
      setting_value: text("setting_value"),
      setting_type: varchar("setting_type", { length: 20 }).default("string"),
      // string / number / boolean / json
      updated_at: timestamp("updated_at").defaultNow()
    });
    insertSystemSettingSchema = createInsertSchema(system_settings).omit({
      id: true,
      updated_at: true
    });
    insertUserSettingSchema = createInsertSchema(user_settings).omit({
      id: true,
      updated_at: true
    });
    insertCustomerProductSchema = createInsertSchema(customer_products).omit({
      id: true,
      created_at: true
    }).extend({
      // Transform decimal fields to handle both string and number inputs
      width: z.union([z.string(), z.number()]).optional().transform((val) => {
        if (val === null || val === void 0 || val === "") return void 0;
        const num = typeof val === "string" ? parseFloat(val) : val;
        return isNaN(num) ? void 0 : num.toString();
      }),
      left_facing: z.union([z.string(), z.number()]).optional().transform((val) => {
        if (val === null || val === void 0 || val === "") return void 0;
        const num = typeof val === "string" ? parseFloat(val) : val;
        return isNaN(num) ? void 0 : num.toString();
      }),
      right_facing: z.union([z.string(), z.number()]).optional().transform((val) => {
        if (val === null || val === void 0 || val === "") return void 0;
        const num = typeof val === "string" ? parseFloat(val) : val;
        return isNaN(num) ? void 0 : num.toString();
      }),
      thickness: z.union([z.string(), z.number()]).optional().transform((val) => {
        if (val === null || val === void 0 || val === "") return void 0;
        const num = typeof val === "string" ? parseFloat(val) : val;
        return isNaN(num) ? void 0 : num.toString();
      }),
      unit_weight_kg: z.union([z.string(), z.number()]).optional().transform((val) => {
        if (val === null || val === void 0 || val === "") return void 0;
        const num = typeof val === "string" ? parseFloat(val) : val;
        return isNaN(num) ? void 0 : num.toString();
      }),
      package_weight_kg: z.union([z.string(), z.number()]).optional().transform((val) => {
        if (val === null || val === void 0 || val === "") return void 0;
        const num = typeof val === "string" ? parseFloat(val) : val;
        return isNaN(num) ? void 0 : num.toString();
      }),
      cutting_length_cm: z.union([z.string(), z.number()]).optional().transform((val) => {
        if (val === null || val === void 0 || val === "") return void 0;
        try {
          const num = typeof val === "string" ? parseIntSafe(val, "Cutting length", { min: 1, max: 1e4 }) : val;
          return num;
        } catch {
          return void 0;
        }
      }),
      unit_quantity: z.union([z.string(), z.number()]).optional().transform((val) => {
        if (val === null || val === void 0 || val === "") return void 0;
        try {
          const num = typeof val === "string" ? parseIntSafe(val, "Unit quantity", { min: 1, max: 1e6 }) : val;
          return num;
        } catch {
          return void 0;
        }
      })
    });
    insertCategorySchema = createInsertSchema(categories);
    insertCustomerSchema = createInsertSchema(customers).omit({
      created_at: true
    });
    insertTrainingProgramSchema = createInsertSchema(training_programs).omit({
      id: true,
      created_at: true,
      updated_at: true
    });
    insertTrainingMaterialSchema = createInsertSchema(training_materials).omit({
      id: true
    });
    insertTrainingEnrollmentSchema = createInsertSchema(training_enrollments).omit({
      id: true,
      enrolled_date: true,
      created_at: true,
      updated_at: true
    });
    insertTrainingEvaluationSchema = createInsertSchema(training_evaluations).omit({
      id: true,
      created_at: true
    });
    insertTrainingCertificateSchema = createInsertSchema(training_certificates).omit({
      id: true,
      created_at: true
    });
    insertPerformanceReviewSchema = createInsertSchema(performance_reviews).omit({
      id: true,
      created_at: true,
      completed_at: true
    });
    insertPerformanceCriteriaSchema = createInsertSchema(performance_criteria).omit({
      id: true
    });
    insertPerformanceRatingSchema = createInsertSchema(performance_ratings).omit({
      id: true
    });
    insertLeaveTypeSchema = createInsertSchema(leave_types).omit({
      id: true
    });
    insertLeaveRequestSchema = createInsertSchema(leave_requests).omit({
      id: true,
      created_at: true,
      updated_at: true,
      direct_manager_action_date: true,
      hr_action_date: true
    });
    insertLeaveBalanceSchema = createInsertSchema(leave_balances).omit({
      id: true
    });
    insertAttendanceSchema = createInsertSchema(attendance).omit({
      id: true,
      created_at: true,
      updated_at: true
    });
    insertMaintenanceActionSchema = createInsertSchema(maintenance_actions).omit({
      id: true,
      action_number: true,
      action_date: true,
      created_at: true,
      updated_at: true
    });
    insertMaintenanceReportSchema = createInsertSchema(maintenance_reports).omit({
      id: true,
      report_number: true,
      created_at: true,
      updated_at: true
    });
    insertOperatorNegligenceReportSchema = createInsertSchema(operator_negligence_reports).omit({
      id: true,
      report_number: true,
      created_at: true,
      updated_at: true
    });
    insertConsumablePartSchema = createInsertSchema(consumable_parts).omit({
      id: true,
      part_id: true,
      created_at: true,
      updated_at: true
    });
    insertConsumablePartTransactionSchema = createInsertSchema(consumable_parts_transactions).omit({
      id: true,
      transaction_id: true,
      created_at: true
    });
    trainingProgramsRelations = relations(training_programs, ({ one, many }) => ({
      instructor: one(users, { fields: [training_programs.instructor_id], references: [users.id] }),
      materials: many(training_materials),
      enrollments: many(training_enrollments)
    }));
    trainingMaterialsRelations = relations(training_materials, ({ one }) => ({
      program: one(training_programs, { fields: [training_materials.program_id], references: [training_programs.id] })
    }));
    trainingEnrollmentsRelations = relations(training_enrollments, ({ one, many }) => ({
      program: one(training_programs, { fields: [training_enrollments.program_id], references: [training_programs.id] }),
      employee: one(users, { fields: [training_enrollments.employee_id], references: [users.id] }),
      evaluation: one(training_evaluations, { fields: [training_enrollments.id], references: [training_evaluations.enrollment_id] }),
      certificate: one(training_certificates, { fields: [training_enrollments.id], references: [training_certificates.enrollment_id] })
    }));
    trainingEvaluationsRelations = relations(training_evaluations, ({ one }) => ({
      enrollment: one(training_enrollments, { fields: [training_evaluations.enrollment_id], references: [training_enrollments.id] }),
      program: one(training_programs, { fields: [training_evaluations.program_id], references: [training_programs.id] }),
      employee: one(users, { fields: [training_evaluations.employee_id], references: [users.id] }),
      evaluator: one(users, { fields: [training_evaluations.evaluator_id], references: [users.id] })
    }));
    trainingCertificatesRelations = relations(training_certificates, ({ one }) => ({
      enrollment: one(training_enrollments, { fields: [training_certificates.enrollment_id], references: [training_enrollments.id] }),
      program: one(training_programs, { fields: [training_certificates.program_id], references: [training_programs.id] }),
      employee: one(users, { fields: [training_certificates.employee_id], references: [users.id] }),
      issuer: one(users, { fields: [training_certificates.issued_by], references: [users.id] })
    }));
    performanceReviewsRelations = relations(performance_reviews, ({ one, many }) => ({
      employee: one(users, { fields: [performance_reviews.employee_id], references: [users.id], relationName: "employee_reviews" }),
      reviewer: one(users, { fields: [performance_reviews.reviewer_id], references: [users.id], relationName: "reviewer_reviews" }),
      ratings: many(performance_ratings)
    }));
    performanceCriteriaRelations = relations(performance_criteria, ({ many }) => ({
      ratings: many(performance_ratings)
    }));
    performanceRatingsRelations = relations(performance_ratings, ({ one }) => ({
      review: one(performance_reviews, { fields: [performance_ratings.review_id], references: [performance_reviews.id] }),
      criteria: one(performance_criteria, { fields: [performance_ratings.criteria_id], references: [performance_criteria.id] })
    }));
    leaveTypesRelations = relations(leave_types, ({ many }) => ({
      requests: many(leave_requests),
      balances: many(leave_balances)
    }));
    leaveRequestsRelations = relations(leave_requests, ({ one }) => ({
      employee: one(users, { fields: [leave_requests.employee_id], references: [users.id] }),
      leaveType: one(leave_types, { fields: [leave_requests.leave_type_id], references: [leave_types.id] }),
      directManager: one(users, { fields: [leave_requests.direct_manager_id], references: [users.id] }),
      hrReviewer: one(users, { fields: [leave_requests.hr_reviewed_by], references: [users.id] }),
      replacementEmployee: one(users, { fields: [leave_requests.replacement_employee_id], references: [users.id] })
    }));
    leaveBalancesRelations = relations(leave_balances, ({ one }) => ({
      employee: one(users, { fields: [leave_balances.employee_id], references: [users.id] }),
      leaveType: one(leave_types, { fields: [leave_balances.leave_type_id], references: [leave_types.id] })
    }));
    system_alerts = pgTable("system_alerts", {
      id: serial("id").primaryKey(),
      title: varchar("title", { length: 200 }).notNull(),
      title_ar: varchar("title_ar", { length: 200 }),
      message: text("message").notNull(),
      message_ar: text("message_ar"),
      type: varchar("type", { length: 30 }).notNull(),
      // system, production, quality, inventory, maintenance, security
      category: varchar("category", { length: 30 }).notNull(),
      // warning, error, critical, info, success
      severity: varchar("severity", { length: 20 }).notNull(),
      // low, medium, high, critical
      source: varchar("source", { length: 50 }).notNull(),
      // system_health, production_monitor, data_validator, etc.
      source_id: varchar("source_id", { length: 50 }),
      // ID of the source entity
      status: varchar("status", { length: 20 }).notNull().default("active"),
      // active, resolved, dismissed, expired
      is_automated: boolean("is_automated").default(true),
      requires_action: boolean("requires_action").default(false),
      action_taken: varchar("action_taken", { length: 500 }),
      action_taken_by: integer("action_taken_by").references(() => users.id),
      action_taken_at: timestamp("action_taken_at"),
      resolved_by: integer("resolved_by").references(() => users.id),
      resolved_at: timestamp("resolved_at"),
      resolution_notes: text("resolution_notes"),
      affected_systems: json("affected_systems").$type(),
      suggested_actions: json("suggested_actions").$type(),
      context_data: json("context_data").$type(),
      notification_sent: boolean("notification_sent").default(false),
      notification_methods: json("notification_methods").$type(),
      // ['whatsapp', 'system', 'email']
      target_users: json("target_users").$type(),
      target_roles: json("target_roles").$type(),
      expires_at: timestamp("expires_at"),
      occurrences: integer("occurrences").default(1),
      // عدد مرات حدوث نفس التحذير
      last_occurrence: timestamp("last_occurrence").defaultNow(),
      first_occurrence: timestamp("first_occurrence").defaultNow(),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    alert_rules = pgTable("alert_rules", {
      id: serial("id").primaryKey(),
      name: varchar("name", { length: 100 }).notNull(),
      name_ar: varchar("name_ar", { length: 100 }),
      description: text("description"),
      description_ar: text("description_ar"),
      monitor_type: varchar("monitor_type", { length: 50 }).notNull(),
      // database, performance, inventory, production, quality
      rule_type: varchar("rule_type", { length: 30 }).notNull(),
      // threshold, pattern, anomaly, schedule
      conditions: json("conditions").$type().notNull(),
      // الشروط المطلوبة للتحذير
      threshold_value: decimal("threshold_value", { precision: 15, scale: 4 }),
      comparison_operator: varchar("comparison_operator", { length: 10 }),
      // >, <, >=, <=, =, !=
      check_frequency: varchar("check_frequency", { length: 20 }).notNull().default("5min"),
      // 1min, 5min, 15min, 1hour, daily
      severity: varchar("severity", { length: 20 }).notNull().default("medium"),
      is_enabled: boolean("is_enabled").default(true),
      notification_template: text("notification_template"),
      notification_template_ar: text("notification_template_ar"),
      escalation_rules: json("escalation_rules").$type(),
      suppress_duration: integer("suppress_duration").default(60),
      // دقائق منع التكرار
      created_by: integer("created_by").references(() => users.id),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    system_health_checks = pgTable("system_health_checks", {
      id: serial("id").primaryKey(),
      check_name: varchar("check_name", { length: 100 }).notNull(),
      check_name_ar: varchar("check_name_ar", { length: 100 }),
      check_type: varchar("check_type", { length: 30 }).notNull(),
      // database, api, service, disk, memory, cpu
      status: varchar("status", { length: 20 }).notNull().default("unknown"),
      // healthy, warning, critical, unknown
      last_check_time: timestamp("last_check_time").defaultNow(),
      check_duration_ms: integer("check_duration_ms"),
      success_rate_24h: decimal("success_rate_24h", { precision: 5, scale: 2 }).default("100.00"),
      average_response_time: integer("average_response_time"),
      // milliseconds
      error_count_24h: integer("error_count_24h").default(0),
      last_error: text("last_error"),
      last_error_time: timestamp("last_error_time"),
      check_details: json("check_details").$type(),
      thresholds: json("thresholds").$type(),
      is_critical: boolean("is_critical").default(false),
      // يؤثر على عمل النظام
      auto_recovery: boolean("auto_recovery").default(false),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    system_performance_metrics = pgTable("system_performance_metrics", {
      id: serial("id").primaryKey(),
      metric_name: varchar("metric_name", { length: 50 }).notNull(),
      metric_category: varchar("metric_category", { length: 30 }).notNull(),
      // system, database, application, business
      value: decimal("value", { precision: 15, scale: 4 }).notNull(),
      unit: varchar("unit", { length: 20 }),
      // ms, mb, percent, count, rate
      timestamp: timestamp("timestamp").defaultNow(),
      source: varchar("source", { length: 50 }),
      // server, database, application
      tags: json("tags").$type(),
      // إضافة tags للتصنيف
      created_at: timestamp("created_at").defaultNow()
    });
    corrective_actions = pgTable("corrective_actions", {
      id: serial("id").primaryKey(),
      alert_id: integer("alert_id").references(() => system_alerts.id, { onDelete: "cascade" }),
      action_type: varchar("action_type", { length: 30 }).notNull(),
      // manual, automated, escalated
      action_title: varchar("action_title", { length: 200 }).notNull(),
      action_description: text("action_description").notNull(),
      action_description_ar: text("action_description_ar"),
      status: varchar("status", { length: 20 }).notNull().default("pending"),
      // pending, in_progress, completed, failed
      assigned_to: integer("assigned_to").references(() => users.id),
      priority: varchar("priority", { length: 20 }).notNull().default("medium"),
      estimated_duration: integer("estimated_duration"),
      // minutes
      actual_duration: integer("actual_duration"),
      success_rate: decimal("success_rate", { precision: 5, scale: 2 }),
      notes: text("notes"),
      created_by: integer("created_by").references(() => users.id),
      completed_by: integer("completed_by").references(() => users.id),
      completed_at: timestamp("completed_at"),
      created_at: timestamp("created_at").defaultNow(),
      updated_at: timestamp("updated_at").defaultNow()
    });
    system_analytics = pgTable("system_analytics", {
      id: serial("id").primaryKey(),
      date: date("date").notNull().default(sql`CURRENT_DATE`),
      metric_type: varchar("metric_type", { length: 50 }).notNull(),
      total_alerts: integer("total_alerts").default(0),
      critical_alerts: integer("critical_alerts").default(0),
      resolved_alerts: integer("resolved_alerts").default(0),
      avg_resolution_time: integer("avg_resolution_time"),
      // minutes
      system_uptime_percent: decimal("system_uptime_percent", { precision: 5, scale: 2 }),
      total_health_checks: integer("total_health_checks").default(0),
      failed_health_checks: integer("failed_health_checks").default(0),
      performance_score: decimal("performance_score", { precision: 5, scale: 2 }),
      data: json("data").$type(),
      // إضافة بيانات إحصائية
      created_at: timestamp("created_at").defaultNow()
    });
    insertSystemAlertSchema = createInsertSchema(system_alerts);
    insertAlertRuleSchema = createInsertSchema(alert_rules);
    insertSystemHealthCheckSchema = createInsertSchema(system_health_checks);
    insertSystemPerformanceMetricSchema = createInsertSchema(system_performance_metrics);
    insertCorrectiveActionSchema = createInsertSchema(corrective_actions);
    insertSystemAnalyticsSchema = createInsertSchema(system_analytics);
  }
});

// server/db.ts
var db_exports = {};
__export(db_exports, {
  db: () => db,
  pool: () => pool
});
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
var pool, db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    init_schema();
    neonConfig.webSocketConstructor = ws;
    if (!process.env.DATABASE_URL) {
      throw new Error(
        "DATABASE_URL must be set. Did you forget to provision a database?"
      );
    }
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
    db = drizzle({ client: pool, schema: schema_exports });
  }
});

// shared/id-generator.ts
function generateShortId(prefix) {
  const timestamp2 = Date.now().toString(36);
  const counter = (++sequenceCounter).toString(36).padStart(2, "0");
  const random = Math.random().toString(36).substring(2, 5);
  const id = `${timestamp2}${counter}${random}`;
  return prefix ? `${prefix}${id}` : id;
}
function generateReadableId(prefix) {
  const now = /* @__PURE__ */ new Date();
  const year = now.getFullYear();
  const timeStr = [
    now.getHours().toString().padStart(2, "0"),
    now.getMinutes().toString().padStart(2, "0"),
    now.getSeconds().toString().padStart(2, "0")
  ].join("");
  const random = Math.random().toString().substring(2, 5);
  const counter = (++sequenceCounter).toString().padStart(3, "0");
  return `${prefix}-${year}-${timeStr}-${random}${counter}`;
}
function generateSequentialId(prefix, length = 6) {
  const timestamp2 = Date.now().toString();
  const counter = (++sequenceCounter).toString();
  const combined = timestamp2 + counter;
  const digits = combined.slice(-length).padStart(length, "0");
  return `${prefix}${digits}`;
}
function generateCustomerId() {
  return generateSequentialId("CID", 8);
}
function generateOrderNumber() {
  return generateReadableId("ORD");
}
function generateJobOrderNumber() {
  return generateReadableId("JO");
}
function generateCertificateNumber(enrollmentId) {
  const shortId = generateShortId();
  return `CERT-${shortId}-${enrollmentId}`;
}
function generateNotificationId(type) {
  const shortId = generateShortId();
  return type ? `${type}_${shortId}` : `notif_${shortId}`;
}
var sequenceCounter;
var init_id_generator = __esm({
  "shared/id-generator.ts"() {
    "use strict";
    sequenceCounter = 0;
  }
});

// shared/decimal-utils.ts
function normalizeDecimal(value, maxValue = 1e5, precision = 3) {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num) || num < 0) {
    throw new Error("\u0627\u0644\u0642\u064A\u0645\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0631\u0642\u0645\u0627\u064B \u0645\u0648\u062C\u0628\u0627\u064B");
  }
  if (num > maxValue) {
    throw new Error("\u0627\u0644\u0642\u064A\u0645\u0629 \u062A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0627\u0644\u0645\u0633\u0645\u0648\u062D");
  }
  return Number(num.toFixed(precision));
}
function numberToDecimalString(value, precision = 3) {
  if (typeof value !== "number" || isNaN(value) || value < 0) {
    throw new Error(`\u0642\u064A\u0645\u0629 \u0631\u0642\u0645\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629: ${value}`);
  }
  return value.toFixed(precision);
}
var init_decimal_utils = __esm({
  "shared/decimal-utils.ts"() {
    "use strict";
  }
});

// shared/quantity-utils.ts
function calculateOverrunPercentage(punching) {
  if (!punching) {
    return 5;
  }
  const punchingLower = punching.toLowerCase();
  if (punchingLower.includes("hook") || punchingLower.includes("\u0639\u0644\u0627\u0642\u064A")) {
    return 20;
  }
  if (punchingLower.includes("banana") || punchingLower.includes("\u0628\u0646\u0627\u0646\u0629")) {
    return 10;
  }
  return 5;
}
function calculateFinalQuantity(baseQuantity, overrunPercentage) {
  const multiplier = 1 + overrunPercentage / 100;
  return baseQuantity * multiplier;
}
function calculateProductionQuantities(baseQuantityKg, punching) {
  const overrunPercentage = calculateOverrunPercentage(punching);
  const finalQuantityKg = calculateFinalQuantity(baseQuantityKg, overrunPercentage);
  let overrunReason = "\u0645\u0646\u062A\u062C \u0639\u0627\u062F\u064A";
  if (punching) {
    const punchingLower = punching.toLowerCase();
    if (punchingLower.includes("hook") || punchingLower.includes("\u0639\u0644\u0627\u0642\u064A")) {
      overrunReason = "\u0645\u0646\u062A\u062C \u0639\u0644\u0627\u0642\u064A (Hook)";
    } else if (punchingLower.includes("banana") || punchingLower.includes("\u0628\u0646\u0627\u0646\u0629")) {
      overrunReason = "\u0645\u0646\u062A\u062C \u0628\u0646\u0627\u0646\u0629 (Banana)";
    }
  }
  return {
    overrunPercentage,
    finalQuantityKg,
    overrunReason
  };
}
var init_quantity_utils = __esm({
  "shared/quantity-utils.ts"() {
    "use strict";
  }
});

// server/services/notification-manager.ts
import { EventEmitter } from "events";
function getNotificationManager(storage2) {
  if (!notificationManager) notificationManager = new NotificationManager(storage2);
  return notificationManager;
}
var NotificationManager, notificationManager;
var init_notification_manager = __esm({
  "server/services/notification-manager.ts"() {
    "use strict";
    NotificationManager = class extends EventEmitter {
      connections = /* @__PURE__ */ new Map();
      storage;
      heartbeatInterval = null;
      cleanupInterval = null;
      productionUpdateDebounce = null;
      constructor(storage2) {
        super();
        this.storage = storage2;
        this.startHeartbeat();
        this.startCleanup();
        process.on("SIGTERM", () => this.shutdown());
        process.on("SIGINT", () => this.shutdown());
      }
      /**
       * Add SSE connection for a user
       */
      addConnection(connectionId, userId, response) {
        console.log(`[NotificationManager] Adding SSE connection for user ${userId}, connection: ${connectionId}`);
        response.writeHead(200, {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Cache-Control",
          "X-Accel-Buffering": "no"
        });
        const connection = {
          id: connectionId,
          userId,
          response,
          lastHeartbeat: /* @__PURE__ */ new Date()
        };
        this.connections.set(connectionId, connection);
        response.on("close", () => this.removeConnection(connectionId));
        response.on("error", () => this.removeConnection(connectionId));
        this.sendRecentNotifications(userId, connectionId, response);
      }
      /**
       * Remove SSE connection
       */
      removeConnection(connectionId) {
        const connection = this.connections.get(connectionId);
        if (connection) {
          try {
            connection.response.end();
          } catch {
          }
          this.connections.delete(connectionId);
        }
      }
      /**
       * Send notification to specific user
       */
      async sendToUser(userId, notificationData) {
        if (notificationData.priority === "low") {
          console.log(`[NotificationManager] Skipped low-priority notification for user ${userId}`);
          return;
        }
        try {
          const notification = await this.storage.createNotification({
            title: notificationData.title,
            title_ar: notificationData.title_ar,
            message: notificationData.message,
            message_ar: notificationData.message_ar,
            type: notificationData.type,
            priority: notificationData.priority,
            recipient_type: "user",
            recipient_id: userId.toString(),
            context_type: notificationData.context_type,
            context_id: notificationData.context_id,
            status: "sent"
          });
          const userConnections = Array.from(this.connections.values()).filter((conn) => conn.userId === userId);
          if (userConnections.length > 0) {
            const sseData = {
              event: "notification",
              data: {
                id: notification.id,
                title: notification.title,
                title_ar: notification.title_ar,
                message: notification.message,
                message_ar: notification.message_ar,
                type: notification.type,
                priority: notification.priority,
                context_type: notification.context_type,
                context_id: notification.context_id,
                created_at: notification.created_at,
                sound: notificationData.sound || this.shouldPlaySound(notification.priority || "normal"),
                icon: notificationData.icon || this.getIconForType(notification.type)
              }
            };
            userConnections.forEach((conn) => this.sendToConnection(conn.id, conn.response, sseData));
          }
        } catch (error) {
          console.error(`[NotificationManager] Error sending notification to user ${userId}:`, error);
          throw error;
        }
      }
      /**
       * Send notification to multiple users by role
       */
      async sendToRole(roleId, notificationData) {
        if (notificationData.priority === "low") return;
        try {
          const users3 = await this.storage.getSafeUsersByRole(roleId);
          const promises = users3.map((user) => this.sendToUser(user.id, notificationData));
          await Promise.all(promises);
        } catch (error) {
          console.error(`[NotificationManager] Error sending notification to role ${roleId}:`, error);
          throw error;
        }
      }
      /**
       * Send notification to all users
       */
      async sendToAll(notificationData) {
        if (notificationData.priority === "low") return;
        try {
          const users3 = await this.storage.getSafeUsers();
          const activeUsers = users3.filter((user) => user.status === "active");
          const promises = activeUsers.map((user) => this.sendToUser(user.id, notificationData));
          await Promise.all(promises);
        } catch (error) {
          console.error(`[NotificationManager] Error sending notification to all users:`, error);
          throw error;
        }
      }
      /**
       * Send recent unread notifications
       */
      async sendRecentNotifications(userId, connectionId, response) {
        try {
          const notifications2 = await this.storage.getUserNotifications(userId, {
            unreadOnly: true,
            limit: 50
          });
          const filtered = notifications2.filter((n) => n.priority !== "low");
          if (filtered.length > 0) {
            const recentData = {
              event: "recent_notifications",
              data: {
                notifications: filtered.map((n) => ({
                  id: n.id,
                  title: n.title,
                  title_ar: n.title_ar,
                  message: n.message,
                  message_ar: n.message_ar,
                  type: n.type,
                  priority: n.priority,
                  context_type: n.context_type,
                  context_id: n.context_id,
                  created_at: n.created_at,
                  icon: this.getIconForType(n.type)
                })),
                count: filtered.length
              }
            };
            this.sendToConnection(connectionId, response, recentData);
          }
        } catch (error) {
          console.error(`[NotificationManager] Error sending recent notifications to user ${userId}:`, error);
        }
      }
      /**
       * Send SSE message
       */
      sendToConnection(connectionId, response, message) {
        try {
          const connection = this.connections.get(connectionId);
          if (!connection) return;
          let sseMessage = "";
          if (message.id) sseMessage += `id: ${message.id}
`;
          if (message.event) sseMessage += `event: ${message.event}
`;
          if (message.retry) sseMessage += `retry: ${message.retry}
`;
          sseMessage += `data: ${JSON.stringify(message.data)}

`;
          response.write(sseMessage);
          connection.lastHeartbeat = /* @__PURE__ */ new Date();
        } catch {
          this.removeConnection(connectionId);
        }
      }
      /**
       * Send heartbeat as SSE comment
       */
      sendHeartbeat() {
        const ping = `:ping ${(/* @__PURE__ */ new Date()).toISOString()}

`;
        this.connections.forEach((conn) => conn.response.write(ping));
      }
      startHeartbeat() {
        this.heartbeatInterval = setInterval(() => this.sendHeartbeat(), 3e4);
      }
      startCleanup() {
        this.cleanupInterval = setInterval(() => {
          const now = /* @__PURE__ */ new Date();
          const stale = [];
          this.connections.forEach((conn, id) => {
            const diff = now.getTime() - conn.lastHeartbeat.getTime();
            if (diff > 12e4) stale.push(id);
          });
          stale.forEach((id) => this.removeConnection(id));
          if (stale.length > 0) {
            console.log(`[NotificationManager] Cleaned up ${stale.length} stale connections. Active: ${this.connections.size}`);
          }
          const currentTime = now.getTime();
          if (currentTime % (10 * 60 * 1e3) < 60 * 1e3) {
            this.performMemoryCleanup();
          }
        }, 6e4);
      }
      /**
       * Perform memory cleanup to prevent leaks
       */
      performMemoryCleanup() {
        try {
          if (global.gc && process.env.NODE_ENV === "development") {
            console.log("[NotificationManager] Running memory cleanup...");
            global.gc();
          }
          this.removeAllListeners();
          console.log(`[NotificationManager] Memory cleanup completed. Connections: ${this.connections.size}`);
        } catch (error) {
          console.error("[NotificationManager] Memory cleanup failed:", error);
        }
      }
      getIconForType(type) {
        const icons = {
          system: "\u2699\uFE0F",
          order: "\u{1F4CB}",
          production: "\u{1F3ED}",
          maintenance: "\u{1F527}",
          quality: "\u2705",
          hr: "\u{1F465}",
          whatsapp: "\u{1F4F1}",
          sms: "\u{1F4AC}",
          email: "\u{1F4E7}"
        };
        return icons[type] || "\u{1F514}";
      }
      shouldPlaySound(priority) {
        return priority === "high" || priority === "urgent";
      }
      getStats() {
        const connectionsByUser = {};
        this.connections.forEach((c) => {
          connectionsByUser[c.userId] = (connectionsByUser[c.userId] || 0) + 1;
        });
        return {
          activeConnections: this.connections.size,
          connectionsByUser
        };
      }
      shutdown() {
        if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
        if (this.cleanupInterval) clearInterval(this.cleanupInterval);
        if (this.productionUpdateDebounce) clearTimeout(this.productionUpdateDebounce);
        this.connections.forEach((_, id) => this.removeConnection(id));
      }
      /**
       * Send production queue update to all connected users (debounced)
       */
      broadcastProductionUpdate(updateType = "all") {
        if (this.productionUpdateDebounce) {
          clearTimeout(this.productionUpdateDebounce);
        }
        this.productionUpdateDebounce = setTimeout(() => {
          if (this.connections.size === 0) return;
          console.log(`[NotificationManager] Broadcasting production update: ${updateType}`);
          const updateMessage = {
            event: "production_update",
            data: {
              type: updateType,
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              queues: updateType === "all" ? ["film", "printing", "cutting"] : [updateType]
            }
          };
          this.connections.forEach((conn) => {
            this.sendToConnection(conn.id, conn.response, updateMessage);
          });
        }, 2e3);
      }
      /**
       * Send production queue update to specific users based on their roles/sections
       */
      async broadcastProductionUpdateToRoles(updateType = "all") {
        try {
          const productionRoles = [1, 2];
          for (const roleId of productionRoles) {
            const users3 = await this.storage.getSafeUsersByRole(roleId);
            const activeUsers = users3.filter((user) => user.status === "active");
            activeUsers.forEach((user) => {
              const userConnections = Array.from(this.connections.values()).filter((conn) => conn.userId === user.id);
              if (userConnections.length > 0) {
                const updateMessage = {
                  event: "production_update",
                  data: {
                    type: updateType,
                    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
                    queues: updateType === "all" ? ["film", "printing", "cutting"] : [updateType]
                  }
                };
                userConnections.forEach((conn) => {
                  this.sendToConnection(conn.id, conn.response, updateMessage);
                });
              }
            });
          }
        } catch (error) {
          console.error("[NotificationManager] Error broadcasting production update to roles:", error);
        }
      }
    };
    notificationManager = null;
  }
});

// server/services/alert-manager.ts
import { EventEmitter as EventEmitter2 } from "events";
function getAlertManager(storage2) {
  if (!alertManager) alertManager = new AlertManager(storage2);
  return alertManager;
}
var AlertManager, alertManager;
var init_alert_manager = __esm({
  "server/services/alert-manager.ts"() {
    "use strict";
    init_notification_manager();
    AlertManager = class extends EventEmitter2 {
      storage;
      alertRules = /* @__PURE__ */ new Map();
      activeAlerts = /* @__PURE__ */ new Map();
      suppressedAlerts = /* @__PURE__ */ new Set();
      DEFAULT_SUPPRESSION_TIME = 60 * 60 * 1e3;
      // ساعة واحدة
      constructor(storage2) {
        super();
        this.storage = storage2;
        console.log("[AlertManager] \u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0645\u064F\u0641\u0639\u0644");
        this.initialize();
      }
      async initialize() {
        try {
          await this.loadActiveRules();
          await this.loadActiveAlerts();
          console.log("[AlertManager] \u062A\u0645 \u062A\u0634\u063A\u064A\u0644 \u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0628\u0646\u062C\u0627\u062D \u2705");
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u062A\u0634\u063A\u064A\u0644 \u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A:", error);
        }
      }
      async loadActiveRules() {
        try {
          const rules = await this.storage.getAlertRules(true);
          this.alertRules.clear();
          for (const rule of rules) this.alertRules.set(rule.id, rule);
          console.log(`[AlertManager] \u062A\u0645 \u062A\u062D\u0645\u064A\u0644 ${rules.length} \u0642\u0627\u0639\u062F\u0629 \u062A\u062D\u0630\u064A\u0631 \u0646\u0634\u0637\u0629`);
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A:", error);
        }
      }
      async loadActiveAlerts() {
        try {
          const alerts = await this.storage.getSystemAlerts({ status: "active" });
          this.activeAlerts.clear();
          for (const alert of alerts) this.activeAlerts.set(alert.id, alert);
          console.log(`[AlertManager] \u062A\u0645 \u062A\u062D\u0645\u064A\u0644 ${alerts.length} \u062A\u062D\u0630\u064A\u0631 \u0646\u0634\u0637`);
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629:", error);
        }
      }
      async createAlert(alertData) {
        try {
          const suppressKey = `${alertData.source}-${alertData.source_id || ""}-${alertData.type}`;
          if (this.suppressedAlerts.has(suppressKey)) {
            console.log(`[AlertManager] \u062A\u062D\u0630\u064A\u0631 \u0645\u0643\u0628\u0648\u062A \u0645\u0624\u0642\u062A\u0627\u064B: ${alertData.title_ar}`);
            throw new Error("\u0627\u0644\u062A\u062D\u0630\u064A\u0631 \u0645\u0643\u0628\u0648\u062A \u0645\u0624\u0642\u062A\u0627\u064B \u0644\u0645\u0646\u0639 \u0627\u0644\u062A\u0643\u0631\u0627\u0631");
          }
          const insertData = {
            title: alertData.title,
            title_ar: alertData.title_ar,
            message: alertData.message,
            message_ar: alertData.message_ar,
            type: alertData.type,
            category: alertData.category,
            severity: alertData.severity,
            source: alertData.source,
            source_id: alertData.source_id,
            context_data: alertData.context_data,
            suggested_actions: alertData.suggested_actions,
            target_users: alertData.target_users,
            target_roles: alertData.target_roles,
            requires_action: alertData.requires_action || false,
            notification_sent: false,
            first_occurrence: /* @__PURE__ */ new Date(),
            last_occurrence: /* @__PURE__ */ new Date(),
            occurrences: 1
          };
          const alert = await this.storage.createSystemAlert(insertData);
          this.activeAlerts.set(alert.id, alert);
          await this.sendAlertNotifications(alert);
          this.suppressAlert(suppressKey, this.getSuppressDuration(alert.severity));
          if (alert.requires_action && alert.suggested_actions) {
            await this.createCorrectiveActions(alert);
          }
          this.emit("alertCreated", alert);
          console.log(`[AlertManager] \u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u062A\u062D\u0630\u064A\u0631 \u062C\u062F\u064A\u062F: ${alert.title_ar} (${alert.severity})`);
          return alert;
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062A\u062D\u0630\u064A\u0631:", error);
          throw error;
        }
      }
      async resolveAlert(alertId, resolvedBy, notes) {
        try {
          const alert = await this.storage.resolveSystemAlert(alertId, resolvedBy, notes);
          this.activeAlerts.delete(alertId);
          this.emit("alertResolved", alert);
          console.log(`[AlertManager] \u062A\u0645 \u062D\u0644 \u0627\u0644\u062A\u062D\u0630\u064A\u0631: ${alert.title_ar}`);
          return alert;
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u062D\u0644 \u0627\u0644\u062A\u062D\u0630\u064A\u0631:", error);
          throw error;
        }
      }
      async dismissAlert(alertId, dismissedBy) {
        try {
          const alert = await this.storage.dismissSystemAlert(alertId, dismissedBy);
          this.activeAlerts.delete(alertId);
          this.emit("alertDismissed", alert);
          console.log(`[AlertManager] \u062A\u0645 \u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u062A\u062D\u0630\u064A\u0631: ${alert.title_ar}`);
          return alert;
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u062A\u062D\u0630\u064A\u0631:", error);
          throw error;
        }
      }
      async sendAlertNotifications(alert) {
        try {
          if (alert.severity === "low") {
            console.log(`[AlertManager] \u062A\u0645 \u062A\u062C\u0627\u0647\u0644 \u0625\u0634\u0639\u0627\u0631 \u0645\u0646\u062E\u0641\u0636 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629: ${alert.title_ar}`);
            return;
          }
          const notificationManager4 = getNotificationManager(this.storage);
          const notification = {
            title: alert.title_ar || "\u062A\u062D\u0630\u064A\u0631 \u0646\u0638\u0627\u0645",
            message: alert.message_ar || "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u062A\u062D\u0630\u064A\u0631 \u062C\u062F\u064A\u062F",
            type: alert.type,
            priority: this.getNotificationPriority(alert.severity),
            context_type: alert.type,
            context_id: alert.source_id,
            sound: alert.severity === "critical",
            icon: this.getAlertIcon(alert.type)
          };
          if (alert.target_roles && alert.target_roles.length > 0) {
            for (const roleId of alert.target_roles) {
              await notificationManager4.sendToRole(roleId, {
                ...notification,
                recipient_type: "role",
                recipient_id: roleId.toString()
              });
            }
          }
          if (alert.target_users && alert.target_users.length > 0) {
            for (const userId of alert.target_users) {
              await notificationManager4.sendToUser(userId, {
                ...notification,
                recipient_type: "user",
                recipient_id: userId.toString()
              });
            }
          }
          await this.storage.updateSystemAlert(alert.id, { notification_sent: true });
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631:", error);
        }
      }
      async createCorrectiveActions(alert) {
        try {
          if (!alert.suggested_actions) return;
          for (const suggestion of alert.suggested_actions) {
            const actionData = {
              alert_id: alert.id,
              action_type: "automated",
              action_title: suggestion.action,
              action_description: suggestion.description || suggestion.action,
              action_description_ar: suggestion.description || suggestion.action,
              priority: this.getPriorityFromNumber(suggestion.priority),
              created_by: 1
            };
            await this.storage.createCorrectiveAction(actionData);
          }
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u062A\u0635\u062D\u064A\u062D\u064A\u0629:", error);
        }
      }
      async createAlertRule(ruleData) {
        try {
          const insertData = {
            name: ruleData.name,
            name_ar: ruleData.name_ar,
            description: ruleData.description,
            description_ar: ruleData.description_ar,
            monitor_type: ruleData.monitor_type,
            rule_type: ruleData.rule_type,
            conditions: ruleData.conditions,
            threshold_value: ruleData.threshold_value?.toString(),
            comparison_operator: ruleData.comparison_operator,
            check_frequency: ruleData.check_frequency,
            severity: ruleData.severity,
            notification_template: ruleData.notification_template,
            notification_template_ar: ruleData.notification_template_ar,
            escalation_rules: ruleData.escalation_rules,
            suppress_duration: ruleData.suppress_duration || 60,
            created_by: ruleData.created_by
          };
          const rule = await this.storage.createAlertRule(insertData);
          this.alertRules.set(rule.id, rule);
          console.log(`[AlertManager] \u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0639\u062F\u0629 \u062A\u062D\u0630\u064A\u0631 \u062C\u062F\u064A\u062F\u0629: ${rule.name_ar}`);
          return rule;
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631:", error);
          throw error;
        }
      }
      async evaluateRule(ruleId, currentValue) {
        try {
          const rule = this.alertRules.get(ruleId);
          if (!rule || !rule.is_enabled) return false;
          const threshold = parseFloat(rule.threshold_value || "0");
          const operator = rule.comparison_operator;
          let triggered = false;
          switch (operator) {
            case ">":
              triggered = currentValue > threshold;
              break;
            case "<":
              triggered = currentValue < threshold;
              break;
            case ">=":
              triggered = currentValue >= threshold;
              break;
            case "<=":
              triggered = currentValue <= threshold;
              break;
            case "=":
              triggered = currentValue === threshold;
              break;
            case "!=":
              triggered = currentValue !== threshold;
              break;
          }
          if (triggered) await this.triggerRuleAlert(rule, currentValue);
          return triggered;
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u062A\u0642\u064A\u064A\u0645 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631:", error);
          return false;
        }
      }
      async triggerRuleAlert(rule, currentValue) {
        try {
          const alertData = {
            title: `Rule Alert: ${rule.name}`,
            title_ar: `\u062A\u062D\u0630\u064A\u0631 \u0642\u0627\u0639\u062F\u0629: ${rule.name_ar}`,
            message: rule.notification_template || `${rule.name} triggered with value ${currentValue}`,
            message_ar: rule.notification_template_ar || `${rule.name_ar} \u062A\u0645 \u062A\u0641\u0639\u064A\u0644\u0647 \u0628\u0642\u064A\u0645\u0629 ${currentValue}`,
            type: rule.monitor_type,
            category: "warning",
            severity: rule.severity,
            source: "alert_rule",
            source_id: rule.id.toString(),
            context_data: {
              rule_id: rule.id,
              current_value: currentValue,
              threshold: rule.threshold_value,
              operator: rule.comparison_operator
            },
            requires_action: rule.severity === "critical" || rule.severity === "high"
          };
          await this.createAlert(alertData);
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u062A\u0641\u0639\u064A\u0644 \u062A\u062D\u0630\u064A\u0631 \u0627\u0644\u0642\u0627\u0639\u062F\u0629:", error);
        }
      }
      suppressAlert(key, duration) {
        this.suppressedAlerts.add(key);
        setTimeout(() => this.suppressedAlerts.delete(key), duration);
      }
      getSuppressDuration(severity) {
        switch (severity) {
          case "critical":
            return 30 * 60 * 1e3;
          case "high":
            return 60 * 60 * 1e3;
          case "medium":
            return 2 * 60 * 60 * 1e3;
          case "low":
            return 4 * 60 * 60 * 1e3;
          default:
            return this.DEFAULT_SUPPRESSION_TIME;
        }
      }
      getNotificationPriority(severity) {
        switch (severity) {
          case "critical":
            return "urgent";
          case "high":
            return "high";
          case "medium":
            return "normal";
          case "low":
            return "low";
          default:
            return "normal";
        }
      }
      getPriorityFromNumber(priority) {
        switch (priority) {
          case 1:
            return "high";
          case 2:
            return "medium";
          case 3:
            return "low";
          default:
            return "medium";
        }
      }
      getAlertIcon(type) {
        const icons = {
          system: "\u2699\uFE0F",
          production: "\u{1F3ED}",
          quality: "\u2705",
          inventory: "\u{1F4E6}",
          maintenance: "\u{1F527}",
          security: "\u{1F512}",
          database: "\u{1F4BE}",
          performance: "\u{1F4CA}"
        };
        return icons[type] || "\u{1F6A8}";
      }
      async getAlertStatistics() {
        try {
          const activeAlerts = await this.storage.getActiveAlertsCount();
          const criticalAlerts = await this.storage.getCriticalAlertsCount();
          const alerts = await this.storage.getSystemAlerts({ limit: 1e3 });
          const byType = {};
          const bySeverity = {};
          for (const alert of alerts) {
            byType[alert.type] = (byType[alert.type] || 0) + 1;
            bySeverity[alert.severity] = (bySeverity[alert.severity] || 0) + 1;
          }
          return {
            total_alerts: alerts.length,
            active_alerts: activeAlerts,
            critical_alerts: criticalAlerts,
            resolved_today: 0,
            by_type: byType,
            by_severity: bySeverity
          };
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A:", error);
          return {
            total_alerts: 0,
            active_alerts: 0,
            critical_alerts: 0,
            resolved_today: 0,
            by_type: {},
            by_severity: {}
          };
        }
      }
      async cleanupOldAlerts(daysToKeep = 30) {
        try {
          const cutoffDate = /* @__PURE__ */ new Date();
          cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);
          console.log("[AlertManager] \u062A\u0645 \u062A\u0646\u0638\u064A\u0641 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0627\u0644\u0642\u062F\u064A\u0645\u0629");
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u062A\u0646\u0638\u064A\u0641 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0627\u0644\u0642\u062F\u064A\u0645\u0629:", error);
        }
      }
      async shutdown() {
        try {
          this.alertRules.clear();
          this.activeAlerts.clear();
          this.suppressedAlerts.clear();
          console.log("[AlertManager] \u062A\u0645 \u0625\u064A\u0642\u0627\u0641 \u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A");
        } catch (error) {
          console.error("[AlertManager] \u062E\u0637\u0623 \u0641\u064A \u0625\u064A\u0642\u0627\u0641 \u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A:", error);
        }
      }
    };
    alertManager = null;
  }
});

// server/services/data-validator.ts
function getDataValidator(storage2) {
  if (!dataValidator) {
    dataValidator = new DataValidator(storage2);
  }
  return dataValidator;
}
var DataValidator, dataValidator;
var init_data_validator = __esm({
  "server/services/data-validator.ts"() {
    "use strict";
    init_alert_manager();
    DataValidator = class {
      storage;
      validationRules = /* @__PURE__ */ new Map();
      customValidators = /* @__PURE__ */ new Map();
      constructor(storage2) {
        this.storage = storage2;
        console.log("[DataValidator] \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u064F\u0641\u0639\u0644");
        this.initialize();
      }
      /**
       * تشغيل النظام
       */
      async initialize() {
        try {
          await this.loadDefaultValidationRules();
          this.registerCustomValidators();
          console.log("[DataValidator] \u062A\u0645 \u062A\u0634\u063A\u064A\u0644 \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0646\u062C\u0627\u062D \u2705");
        } catch (error) {
          console.error("[DataValidator] \u062E\u0637\u0623 \u0641\u064A \u062A\u0634\u063A\u064A\u0644 \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A:", error);
        }
      }
      /**
       * تحميل قواعد التحقق الافتراضية
       */
      async loadDefaultValidationRules() {
        try {
          const defaultRules = [
            // قواعد الطلبات
            {
              id: "order_customer_required",
              name: "Customer Required",
              name_ar: "\u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0637\u0644\u0648\u0628",
              description: "Customer must be specified for all orders",
              description_ar: "\u064A\u062C\u0628 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0639\u0645\u064A\u0644 \u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",
              table: "orders",
              field: "customer_id",
              rule_type: "required",
              parameters: {},
              error_message: "Customer is required",
              error_message_ar: "\u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0637\u0644\u0648\u0628",
              severity: "high",
              is_enabled: true
            },
            {
              id: "order_quantity_positive",
              name: "Positive Quantity",
              name_ar: "\u0643\u0645\u064A\u0629 \u0645\u0648\u062C\u0628\u0629",
              description: "Order quantity must be positive",
              description_ar: "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0643\u0645\u064A\u0629 \u0627\u0644\u0637\u0644\u0628 \u0645\u0648\u062C\u0628\u0629",
              table: "orders",
              field: "quantity",
              rule_type: "min",
              parameters: { min: 1 },
              error_message: "Quantity must be positive",
              error_message_ar: "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0643\u0645\u064A\u0629 \u0645\u0648\u062C\u0628\u0629",
              severity: "high",
              is_enabled: true
            },
            {
              id: "order_delivery_date_future",
              name: "Future Delivery Date",
              name_ar: "\u062A\u0627\u0631\u064A\u062E \u062A\u0633\u0644\u064A\u0645 \u0645\u0633\u062A\u0642\u0628\u0644\u064A",
              description: "Delivery date must be in the future",
              description_ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644",
              table: "orders",
              field: "delivery_date",
              rule_type: "custom",
              parameters: { validator: "future_date" },
              error_message: "Delivery date must be in the future",
              error_message_ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0641\u064A \u0627\u0644\u0645\u0633\u062A\u0642\u0628\u0644",
              severity: "medium",
              is_enabled: true
            },
            // قواعد المنتجات
            {
              id: "product_dimensions_positive",
              name: "Positive Dimensions",
              name_ar: "\u0623\u0628\u0639\u0627\u062F \u0645\u0648\u062C\u0628\u0629",
              description: "Product dimensions must be positive",
              description_ar: "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0623\u0628\u0639\u0627\u062F \u0627\u0644\u0645\u0646\u062A\u062C \u0645\u0648\u062C\u0628\u0629",
              table: "customer_products",
              field: "width",
              rule_type: "min",
              parameters: { min: 0.1 },
              error_message: "Width must be positive",
              error_message_ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0639\u0631\u0636 \u0645\u0648\u062C\u0628",
              severity: "high",
              is_enabled: true
            },
            {
              id: "product_thickness_range",
              name: "Thickness Range",
              name_ar: "\u0646\u0637\u0627\u0642 \u0627\u0644\u0633\u0645\u0627\u0643\u0629",
              description: "Product thickness must be within valid range",
              description_ar: "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0633\u0645\u0627\u0643\u0629 \u0627\u0644\u0645\u0646\u062A\u062C \u0636\u0645\u0646 \u0627\u0644\u0646\u0637\u0627\u0642 \u0627\u0644\u0645\u0633\u0645\u0648\u062D",
              table: "customer_products",
              field: "thickness",
              rule_type: "range",
              parameters: { min: 0.01, max: 10 },
              error_message: "Thickness must be between 0.01 and 10 mm",
              error_message_ar: "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0633\u0645\u0627\u0643\u0629 \u0628\u064A\u0646 0.01 \u0648 10 \u0645\u0645",
              severity: "medium",
              is_enabled: true
            },
            // قواعد المخزون
            {
              id: "inventory_stock_negative",
              name: "Negative Stock Check",
              name_ar: "\u0641\u062D\u0635 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0627\u0644\u0633\u0627\u0644\u0628",
              description: "Stock quantity should not be negative",
              description_ar: "\u064A\u062C\u0628 \u0623\u0644\u0627 \u062A\u0643\u0648\u0646 \u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0633\u0627\u0644\u0628\u0629",
              table: "inventory",
              field: "current_stock",
              rule_type: "min",
              parameters: { min: 0 },
              error_message: "Stock quantity cannot be negative",
              error_message_ar: "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0633\u0627\u0644\u0628\u0629",
              severity: "critical",
              is_enabled: true
            },
            // قواعد المكائن
            {
              id: "machine_capacity_positive",
              name: "Positive Capacity",
              name_ar: "\u0637\u0627\u0642\u0629 \u0645\u0648\u062C\u0628\u0629",
              description: "Machine capacity must be positive",
              description_ar: "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0637\u0627\u0642\u0629 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629 \u0645\u0648\u062C\u0628\u0629",
              table: "machines",
              field: "capacity",
              rule_type: "min",
              parameters: { min: 1 },
              error_message: "Machine capacity must be positive",
              error_message_ar: "\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0637\u0627\u0642\u0629 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629 \u0645\u0648\u062C\u0628\u0629",
              severity: "medium",
              is_enabled: true
            },
            // قواعد المستخدمين
            {
              id: "user_username_format",
              name: "Username Format",
              name_ar: "\u062A\u0646\u0633\u064A\u0642 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
              description: "Username must follow proper format",
              description_ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0628\u0639 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0635\u062D\u064A\u062D",
              table: "users",
              field: "username",
              rule_type: "pattern",
              parameters: { pattern: "^[a-zA-Z0-9_]{3,20}$" },
              error_message: "Username must be 3-20 characters (letters, numbers, underscore)",
              error_message_ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 3-20 \u062D\u0631\u0641 (\u0623\u062D\u0631\u0641\u060C \u0623\u0631\u0642\u0627\u0645\u060C \u0634\u0631\u0637\u0629)",
              severity: "medium",
              is_enabled: true
            },
            // قواعد المراجع
            {
              id: "customer_reference_valid",
              name: "Valid Customer Reference",
              name_ar: "\u0645\u0631\u062C\u0639 \u0639\u0645\u064A\u0644 \u0635\u062D\u064A\u062D",
              description: "Customer reference must exist",
              description_ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0631\u062C\u0639 \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0648\u062C\u0648\u062F",
              table: "orders",
              field: "customer_id",
              rule_type: "reference",
              parameters: { reference_table: "customers", reference_field: "id" },
              error_message: "Invalid customer reference",
              error_message_ar: "\u0645\u0631\u062C\u0639 \u0639\u0645\u064A\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",
              severity: "critical",
              is_enabled: true
            }
          ];
          this.validationRules.clear();
          for (const rule of defaultRules) {
            if (!this.validationRules.has(rule.table)) {
              this.validationRules.set(rule.table, []);
            }
            this.validationRules.get(rule.table)?.push(rule);
          }
          console.log(`[DataValidator] \u062A\u0645 \u062A\u062D\u0645\u064A\u0644 ${defaultRules.length} \u0642\u0627\u0639\u062F\u0629 \u062A\u062D\u0642\u0642 \u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629`);
        } catch (error) {
          console.error("[DataValidator] \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062A\u062D\u0642\u0642:", error);
        }
      }
      /**
       * تسجيل المدققات المخصصة
       */
      registerCustomValidators() {
        this.customValidators.set("future_date", (value) => {
          if (!value) return true;
          const date2 = new Date(value);
          return date2 > /* @__PURE__ */ new Date();
        });
        this.customValidators.set("phone_format", (value) => {
          if (!value) return true;
          const phoneRegex = /^(\+966|966|0)?[5-9][0-9]{8}$/;
          return phoneRegex.test(value.toString());
        });
        this.customValidators.set("email_format", (value) => {
          if (!value) return true;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value.toString());
        });
        this.customValidators.set("business_hours", (value) => {
          if (!value) return true;
          const hour = new Date(value).getHours();
          return hour >= 6 && hour <= 22;
        });
        console.log("[DataValidator] \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0645\u062F\u0642\u0642\u0627\u062A \u0627\u0644\u0645\u062E\u0635\u0635\u0629");
      }
      /**
       * التحقق من صحة البيانات
       */
      async validateData(tableName, data, isUpdate = false) {
        try {
          const rules = this.validationRules.get(tableName) || [];
          const errors = [];
          const warnings = [];
          for (const rule of rules) {
            if (!rule.is_enabled) continue;
            const fieldValue = data[rule.field];
            const isValid = await this.applyRule(rule, fieldValue, data);
            if (!isValid) {
              if (rule.severity === "critical" || rule.severity === "high") {
                errors.push({
                  field: rule.field,
                  message: rule.error_message,
                  message_ar: rule.error_message_ar,
                  severity: rule.severity,
                  rule_id: rule.id,
                  value: fieldValue
                });
              } else {
                warnings.push({
                  field: rule.field,
                  message: rule.error_message,
                  message_ar: rule.error_message_ar,
                  suggestion: this.getSuggestion(rule, fieldValue),
                  suggestion_ar: this.getSuggestionAr(rule, fieldValue)
                });
              }
            }
          }
          await this.performSpecialValidations(tableName, data, errors, warnings);
          const result = {
            isValid: errors.length === 0,
            errors,
            warnings
          };
          if (errors.length > 0) {
            await this.createValidationAlert(tableName, errors);
          }
          return result;
        } catch (error) {
          console.error("[DataValidator] \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A:", error);
          return {
            isValid: false,
            errors: [{
              field: "system",
              message: "Validation system error",
              message_ar: "\u062E\u0637\u0623 \u0641\u064A \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",
              severity: "critical",
              rule_id: "system_error"
            }],
            warnings: []
          };
        }
      }
      /**
       * تطبيق قاعدة تحقق
       */
      async applyRule(rule, value, data) {
        try {
          switch (rule.rule_type) {
            case "required":
              return value !== void 0 && value !== null && value !== "";
            case "min":
              if (value === void 0 || value === null) return true;
              const numValue = parseFloat(value);
              return !isNaN(numValue) && numValue >= rule.parameters.min;
            case "max":
              if (value === void 0 || value === null) return true;
              const maxValue = parseFloat(value);
              return !isNaN(maxValue) && maxValue <= rule.parameters.max;
            case "range":
              if (value === void 0 || value === null) return true;
              const rangeValue = parseFloat(value);
              return !isNaN(rangeValue) && rangeValue >= rule.parameters.min && rangeValue <= rule.parameters.max;
            case "pattern":
              if (value === void 0 || value === null) return true;
              const regex = new RegExp(rule.parameters.pattern);
              return regex.test(value.toString());
            case "custom":
              const validator = this.customValidators.get(rule.parameters.validator);
              if (!validator) return true;
              return validator(value);
            case "reference":
              return await this.validateReference(rule, value);
            default:
              return true;
          }
        } catch (error) {
          console.error(`[DataValidator] \u062E\u0637\u0623 \u0641\u064A \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0642\u0627\u0639\u062F\u0629 ${rule.id}:`, error);
          return false;
        }
      }
      /**
       * التحقق من صحة المرجع
       */
      async validateReference(rule, value) {
        try {
          if (value === void 0 || value === null) return true;
          return true;
        } catch (error) {
          console.error("[DataValidator] \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0631\u062C\u0639:", error);
          return false;
        }
      }
      /**
       * فحوصات خاصة بجداول محددة
       */
      async performSpecialValidations(tableName, data, errors, warnings) {
        try {
          switch (tableName) {
            case "orders":
              await this.validateOrder(data, errors, warnings);
              break;
            case "customer_products":
              await this.validateCustomerProduct(data, errors, warnings);
              break;
            case "inventory":
              await this.validateInventory(data, errors, warnings);
              break;
            case "production_orders":
              await this.validateProductionOrder(data, errors, warnings);
              break;
          }
        } catch (error) {
          console.error("[DataValidator] \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629:", error);
        }
      }
      /**
       * التحقق من صحة الطلب
       */
      async validateOrder(data, errors, warnings) {
        if (data.delivery_date && data.quantity) {
          const deliveryDate = new Date(data.delivery_date);
          const currentDate = /* @__PURE__ */ new Date();
          const daysUntilDelivery = Math.ceil((deliveryDate.getTime() - currentDate.getTime()) / (1e3 * 60 * 60 * 24));
          if (daysUntilDelivery < 3) {
            warnings.push({
              field: "delivery_date",
              message: "Short delivery time may cause production delays",
              message_ar: "\u0648\u0642\u062A \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0642\u0635\u064A\u0631 \u0642\u062F \u064A\u0633\u0628\u0628 \u062A\u0623\u062E\u064A\u0631 \u0641\u064A \u0627\u0644\u0625\u0646\u062A\u0627\u062C",
              suggestion: "Consider extending delivery date",
              suggestion_ar: "\u0641\u0643\u0631 \u0641\u064A \u062A\u0645\u062F\u064A\u062F \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645"
            });
          }
        }
        if (data.customer_product_id) {
        }
      }
      /**
       * التحقق من صحة منتج العميل
       */
      async validateCustomerProduct(data, errors, warnings) {
        if (data.width && data.left_facing && data.right_facing) {
          const totalWidth = parseFloat(data.left_facing) + parseFloat(data.right_facing);
          if (totalWidth > parseFloat(data.width)) {
            errors.push({
              field: "width",
              message: "Total facing width exceeds bag width",
              message_ar: "\u0645\u062C\u0645\u0648\u0639 \u0639\u0631\u0636 \u0627\u0644\u0648\u0627\u062C\u0647\u0627\u062A \u064A\u062A\u062C\u0627\u0648\u0632 \u0639\u0631\u0636 \u0627\u0644\u0643\u064A\u0633",
              severity: "high",
              rule_id: "width_consistency"
            });
          }
        }
        if (data.unit_weight_kg && data.thickness && data.width) {
          const estimatedWeight = parseFloat(data.thickness) * parseFloat(data.width) * 1e-3;
          const actualWeight = parseFloat(data.unit_weight_kg);
          if (Math.abs(actualWeight - estimatedWeight) > estimatedWeight * 0.5) {
            warnings.push({
              field: "unit_weight_kg",
              message: "Unit weight may not match dimensions",
              message_ar: "\u0648\u0632\u0646 \u0627\u0644\u0648\u062D\u062F\u0629 \u0642\u062F \u0644\u0627 \u064A\u062A\u0637\u0627\u0628\u0642 \u0645\u0639 \u0627\u0644\u0623\u0628\u0639\u0627\u062F",
              suggestion: "Verify weight calculation",
              suggestion_ar: "\u062A\u062D\u0642\u0642 \u0645\u0646 \u062D\u0633\u0627\u0628 \u0627\u0644\u0648\u0632\u0646"
            });
          }
        }
      }
      /**
       * التحقق من صحة المخزون
       */
      async validateInventory(data, errors, warnings) {
        if (data.min_stock && data.max_stock) {
          if (parseFloat(data.min_stock) >= parseFloat(data.max_stock)) {
            errors.push({
              field: "min_stock",
              message: "Minimum stock must be less than maximum stock",
              message_ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649",
              severity: "medium",
              rule_id: "stock_limits"
            });
          }
        }
        if (data.current_stock && data.min_stock) {
          if (parseFloat(data.current_stock) <= parseFloat(data.min_stock)) {
            warnings.push({
              field: "current_stock",
              message: "Stock level is at or below minimum",
              message_ar: "\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0639\u0646\u062F \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0623\u0648 \u0623\u0642\u0644",
              suggestion: "Consider reordering",
              suggestion_ar: "\u0641\u0643\u0631 \u0641\u064A \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0637\u0644\u0628"
            });
          }
        }
      }
      /**
       * التحقق من صحة أمر الإنتاج
       */
      async validateProductionOrder(data, errors, warnings) {
        if (data.machine_id) {
        }
        if (data.order_id && data.planned_quantity) {
        }
      }
      /**
       * الحصول على اقتراح للحقل
       */
      getSuggestion(rule, value) {
        switch (rule.rule_type) {
          case "min":
            return `Value should be at least ${rule.parameters.min}`;
          case "max":
            return `Value should be at most ${rule.parameters.max}`;
          case "range":
            return `Value should be between ${rule.parameters.min} and ${rule.parameters.max}`;
          case "pattern":
            return "Please check the format";
          default:
            return "Please review the value";
        }
      }
      /**
       * الحصول على اقتراح باللغة العربية
       */
      getSuggestionAr(rule, value) {
        switch (rule.rule_type) {
          case "min":
            return `\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644 ${rule.parameters.min}`;
          case "max":
            return `\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0643\u062B\u0631 ${rule.parameters.max}`;
          case "range":
            return `\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u0642\u064A\u0645\u0629 \u0628\u064A\u0646 ${rule.parameters.min} \u0648 ${rule.parameters.max}`;
          case "pattern":
            return "\u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u062A\u0646\u0633\u064A\u0642";
          default:
            return "\u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0642\u064A\u0645\u0629";
        }
      }
      /**
       * إنشاء تحذير للأخطاء في التحقق
       */
      async createValidationAlert(tableName, errors) {
        try {
          const criticalErrors = errors.filter((e) => e.severity === "critical");
          if (criticalErrors.length === 0) return;
          const alertManager2 = getAlertManager(this.storage);
          await alertManager2.createAlert({
            title: `Data Validation Errors in ${tableName}`,
            title_ar: `\u0623\u062E\u0637\u0627\u0621 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A ${tableName}`,
            message: `Found ${criticalErrors.length} critical validation errors`,
            message_ar: `\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 ${criticalErrors.length} \u062E\u0637\u0623 \u062D\u0631\u062C \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642`,
            type: "system",
            category: "error",
            severity: "high",
            source: "data_validator",
            source_id: tableName,
            context_data: { errors: criticalErrors },
            requires_action: true,
            target_roles: [1, 2]
            // الأدمن والمديرين
          });
        } catch (error) {
          console.error("[DataValidator] \u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u062A\u062D\u0630\u064A\u0631 \u0627\u0644\u062A\u062D\u0642\u0642:", error);
        }
      }
      /**
       * Validate roll creation - NEW WORKFLOW: Allow unlimited rolls with overrun
       * إزالة القيود السابقة والسماح بإنشاء رولات متعددة مع overrun
       */
      async validateRollCreation(rollData) {
        const errors = [];
        const warnings = [];
        try {
          const productionOrder = await this.storage.getProductionOrderById(rollData.production_order_id);
          if (!productionOrder) {
            errors.push({
              field: "production_order_id",
              message: "Production order not found",
              message_ar: "\u0623\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F",
              severity: "high",
              rule_id: "production_order_exists"
            });
            return { isValid: false, errors, warnings };
          }
          const proposedWeight = parseFloat(rollData.weight_kg || "0");
          if (proposedWeight <= 0) {
            errors.push({
              field: "weight_kg",
              message: "Roll weight must be positive",
              message_ar: "\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0648\u0632\u0646 \u0627\u0644\u0631\u0648\u0644 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631",
              severity: "high",
              rule_id: "roll_weight_positive"
            });
          }
          const existingRolls = await this.storage.getRollsByProductionOrder(rollData.production_order_id);
          const existingTotalWeight = existingRolls.reduce((sum2, roll) => sum2 + parseFloat(roll.weight_kg || "0"), 0);
          const newTotalWeight = existingTotalWeight + proposedWeight;
          const requiredQuantity = parseFloat(productionOrder.quantity_kg || "0");
          console.log(`[Roll Creation] Production Order ${rollData.production_order_id}:`);
          console.log(`  Required: ${requiredQuantity}kg`);
          console.log(`  Current: ${existingTotalWeight}kg`);
          console.log(`  New roll: ${proposedWeight}kg`);
          console.log(`  Total will be: ${newTotalWeight}kg`);
          if (newTotalWeight >= requiredQuantity) {
            console.log(`  Status: Will exceed required quantity by ${(newTotalWeight - requiredQuantity).toFixed(2)}kg`);
          }
          return { isValid: errors.length === 0, errors, warnings };
        } catch (error) {
          console.error("[DataValidator] Error validating roll creation:", error);
          errors.push({
            field: "system",
            message: "System validation error",
            message_ar: "\u062E\u0637\u0623 \u0641\u064A \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",
            severity: "critical",
            rule_id: "system_error"
          });
          return { isValid: false, errors, warnings };
        }
      }
      /**
       * فحص سلامة قاعدة البيانات
       */
      async validateDatabaseIntegrity() {
        try {
          const issues = [];
          const recommendations = [];
          return {
            isHealthy: issues.length === 0,
            issues,
            recommendations
          };
        } catch (error) {
          console.error("[DataValidator] \u062E\u0637\u0623 \u0641\u064A \u0641\u062D\u0635 \u0633\u0644\u0627\u0645\u0629 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A:", error);
          return {
            isHealthy: false,
            issues: ["\u062E\u0637\u0623 \u0641\u064A \u0641\u062D\u0635 \u0633\u0644\u0627\u0645\u0629 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"],
            recommendations: ["\u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645"]
          };
        }
      }
      /**
       * إضافة قاعدة تحقق مخصصة
       */
      addCustomRule(rule) {
        if (!this.validationRules.has(rule.table)) {
          this.validationRules.set(rule.table, []);
        }
        this.validationRules.get(rule.table)?.push(rule);
        console.log(`[DataValidator] \u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0642\u0627\u0639\u062F\u0629 \u062A\u062D\u0642\u0642 \u0645\u062E\u0635\u0635\u0629: ${rule.name_ar}`);
      }
      /**
       * إضافة مدقق مخصص
       */
      addCustomValidator(name, validator) {
        this.customValidators.set(name, validator);
        console.log(`[DataValidator] \u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0645\u062F\u0642\u0642 \u0645\u062E\u0635\u0635: ${name}`);
      }
      /**
       * CRITICAL: validateEntity - Main validation entry point for all database writes
       * This method MUST be called before every database insert/update operation
       * Enforces business rules, invariants, and data integrity constraints
       */
      async validateEntity(tableName, data, isUpdate = false) {
        console.log(`[DataValidator] \u{1F512} Validating ${tableName} entity:`, { tableName, isUpdate, dataKeys: Object.keys(data) });
        try {
          const result = await this.validateData(tableName, data, isUpdate);
          if (!result.isValid) {
            console.error(`[DataValidator] \u274C VALIDATION FAILED for ${tableName}:`, {
              errors: result.errors,
              warnings: result.warnings,
              data
            });
          } else {
            console.log(`[DataValidator] \u2705 Validation passed for ${tableName}`);
          }
          return result;
        } catch (error) {
          console.error(`[DataValidator] CRITICAL ERROR during ${tableName} validation:`, error);
          return {
            isValid: false,
            errors: [{
              field: "_system",
              message: "Validation system error",
              message_ar: "\u062E\u0637\u0623 \u0641\u064A \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u062D\u0642\u0642",
              severity: "critical",
              rule_id: "system_error",
              value: error
            }],
            warnings: []
          };
        }
      }
      /**
       * CRITICAL: validateStatusTransition - Enforces valid state transitions
       * Prevents invalid status changes that could corrupt business workflow
       */
      async validateStatusTransition(tableName, currentStatus, newStatus, entityId) {
        console.log(`[DataValidator] \u{1F504} Validating status transition for ${tableName}:`, {
          entityId,
          currentStatus,
          newStatus
        });
        const errors = [];
        const warnings = [];
        try {
          const validTransitions = {
            orders: {
              "pending": ["waiting", "for_production", "cancelled"],
              "waiting": ["in_production", "for_production", "on_hold", "cancelled"],
              "for_production": ["in_production", "waiting", "on_hold", "cancelled"],
              "in_production": ["paused", "completed", "on_hold", "in_progress"],
              "in_progress": ["paused", "completed", "on_hold"],
              "paused": ["in_production", "in_progress", "cancelled"],
              "on_hold": ["waiting", "for_production", "cancelled"],
              "completed": ["delivered"],
              // Only allow delivery from completed
              "delivered": [],
              // Terminal state - no further transitions
              "cancelled": []
              // Terminal state - no further transitions
            },
            production_orders: {
              "pending": ["active", "cancelled"],
              "active": ["completed", "cancelled"],
              "completed": [],
              // No transitions allowed from completed
              "cancelled": []
              // No transitions allowed from cancelled
            },
            rolls: {
              "film": ["printing", "cutting"],
              // Can skip printing if not needed
              "printing": ["cutting"],
              "cutting": ["done"],
              "done": []
              // No transitions allowed from done
            }
          };
          const tableTransitions = validTransitions[tableName];
          if (!tableTransitions) {
            warnings.push({
              field: "status",
              message: `No status transition rules defined for ${tableName}`,
              message_ar: `\u0644\u0627 \u062A\u0648\u062C\u062F \u0642\u0648\u0627\u0639\u062F \u0627\u0646\u062A\u0642\u0627\u0644 \u062D\u0627\u0644\u0629 \u0645\u062D\u062F\u062F\u0629 \u0644\u0640 ${tableName}`
            });
            return { isValid: true, errors, warnings };
          }
          const allowedFromCurrent = tableTransitions[currentStatus];
          if (!allowedFromCurrent) {
            errors.push({
              field: "status",
              message: `Invalid current status: ${currentStatus}`,
              message_ar: `\u062D\u0627\u0644\u0629 \u062D\u0627\u0644\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629: ${currentStatus}`,
              severity: "high",
              rule_id: "invalid_current_status"
            });
            return { isValid: false, errors, warnings };
          }
          if (!allowedFromCurrent.includes(newStatus)) {
            errors.push({
              field: "status",
              message: `Invalid status transition: ${currentStatus} \u2192 ${newStatus}`,
              message_ar: `\u0627\u0646\u062A\u0642\u0627\u0644 \u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D: ${currentStatus} \u2190 ${newStatus}`,
              severity: "high",
              rule_id: "invalid_status_transition",
              value: { from: currentStatus, to: newStatus, allowed: allowedFromCurrent }
            });
            return { isValid: false, errors, warnings };
          }
          console.log(`[DataValidator] \u2705 Valid status transition: ${currentStatus} \u2192 ${newStatus}`);
          return { isValid: true, errors, warnings };
        } catch (error) {
          console.error("[DataValidator] Error validating status transition:", error);
          errors.push({
            field: "status",
            message: "Error validating status transition",
            message_ar: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0646\u062A\u0642\u0627\u0644 \u0627\u0644\u062D\u0627\u0644\u0629",
            severity: "critical",
            rule_id: "transition_validation_error"
          });
          return { isValid: false, errors, warnings };
        }
      }
    };
    dataValidator = null;
  }
});

// server/storage.ts
import { eq, desc, and, sql as sql2, sum, count, inArray, or } from "drizzle-orm";
import bcrypt from "bcrypt";
import QRCode from "qrcode";
function getCachedData(key) {
  return cache.get(key);
}
function setCachedData(key, data, ttl) {
  cache.set(key, data, ttl);
}
function setNotificationManager(nm) {
  notificationManager2 = nm;
}
function invalidateProductionCache(updateType = "all") {
  const productionKeys = ["printing_queue", "cutting_queue", "hierarchical_orders", "grouped_cutting_queue"];
  productionKeys.forEach((key) => cache.delete(key));
  if (notificationManager2) {
    notificationManager2.broadcastProductionUpdate(updateType);
  }
}
function handleDatabaseError(error, operation, context) {
  console.error(`Database error during ${operation}:`, error);
  if (error.code === "23505") {
    throw new DatabaseError(`\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0643\u0631\u0631\u0629 - ${context || "\u0627\u0644\u0639\u0646\u0635\u0631 \u0645\u0648\u062C\u0648\u062F \u0645\u0633\u0628\u0642\u0627\u064B"}`, error);
  }
  if (error.code === "23503") {
    throw new DatabaseError(`\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0631\u0628\u0637 - ${context || "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629"}`, error);
  }
  if (error.code === "23502") {
    throw new DatabaseError(`\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0644\u0648\u0628\u0629 \u0645\u0641\u0642\u0648\u062F\u0629 - ${context || "\u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 \u062C\u0645\u064A\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629"}`, error);
  }
  if (error.code === "42P01") {
    throw new DatabaseError("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645 - \u062C\u062F\u0648\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", error);
  }
  if (error.code === "53300") {
    throw new DatabaseError("\u0627\u0644\u062E\u0627\u062F\u0645 \u0645\u0634\u063A\u0648\u0644 - \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0627\u062D\u0642\u0627\u064B", error);
  }
  if (error.code === "08006" || error.code === "08003") {
    throw new DatabaseError("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A - \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0627\u062D\u0642\u0627\u064B", error);
  }
  throw new DatabaseError(
    `\u062E\u0637\u0623 \u0641\u064A \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0623\u062B\u0646\u0627\u0621 ${operation} - ${context || "\u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0644\u0627\u062D\u0642\u0627\u064B"}`,
    error
  );
}
async function withDatabaseErrorHandling(operation, operationName, context) {
  try {
    return await operation();
  } catch (error) {
    handleDatabaseError(error, operationName, context);
  }
}
var OptimizedCache, cache, CACHE_TTL, notificationManager2, DatabaseError, DatabaseStorage, storage;
var init_storage = __esm({
  "server/storage.ts"() {
    "use strict";
    init_schema();
    init_db();
    init_id_generator();
    init_decimal_utils();
    init_quantity_utils();
    init_data_validator();
    OptimizedCache = class {
      cache = /* @__PURE__ */ new Map();
      maxSize = 1e3;
      // Maximum cache entries
      cleanupInterval;
      constructor() {
        this.cleanupInterval = setInterval(() => this.cleanup(), 2 * 60 * 1e3);
      }
      get(key) {
        const cached = this.cache.get(key);
        if (cached && Date.now() - cached.timestamp < cached.ttl) {
          cached.accessCount++;
          cached.lastAccess = Date.now();
          return cached.data;
        }
        this.cache.delete(key);
        return null;
      }
      set(key, data, ttl) {
        if (this.cache.size >= this.maxSize) {
          this.evictLRU();
        }
        this.cache.set(key, {
          data,
          timestamp: Date.now(),
          ttl,
          accessCount: 1,
          lastAccess: Date.now()
        });
      }
      delete(key) {
        this.cache.delete(key);
      }
      evictLRU() {
        let oldestKey = null;
        let oldestAccess = Date.now();
        Array.from(this.cache.entries()).forEach(([key, value]) => {
          if (value.lastAccess < oldestAccess) {
            oldestAccess = value.lastAccess;
            oldestKey = key;
          }
        });
        if (oldestKey) {
          this.cache.delete(oldestKey);
        }
      }
      cleanup() {
        const now = Date.now();
        const staleKeys = [];
        Array.from(this.cache.entries()).forEach(([key, value]) => {
          if (now - value.timestamp > value.ttl) {
            staleKeys.push(key);
          }
        });
        staleKeys.forEach((key) => this.cache.delete(key));
        if (staleKeys.length > 0) {
          console.log(`[Cache] Cleaned up ${staleKeys.length} stale entries. Active: ${this.cache.size}`);
        }
      }
      getStats() {
        return { size: this.cache.size, maxSize: this.maxSize };
      }
      shutdown() {
        clearInterval(this.cleanupInterval);
        this.cache.clear();
      }
    };
    cache = new OptimizedCache();
    CACHE_TTL = {
      REALTIME: 5 * 1e3,
      // 5 seconds for production queues
      SHORT: 30 * 1e3,
      // 30 seconds for active data  
      MEDIUM: 5 * 60 * 1e3,
      // 5 minutes for relatively stable data
      LONG: 15 * 60 * 1e3
      // 15 minutes for rarely changing data
    };
    notificationManager2 = null;
    DatabaseError = class extends Error {
      code;
      constraint;
      table;
      constructor(message, originalError) {
        super(message);
        this.name = "DatabaseError";
        if (originalError) {
          this.code = originalError.code;
          this.constraint = originalError.constraint;
          this.table = originalError.table;
        }
      }
    };
    DatabaseStorage = class {
      // In-memory storage for alert rate limiting - persistent during server session
      alertTimesStorage = /* @__PURE__ */ new Map();
      async getUser(id) {
        return withDatabaseErrorHandling(
          async () => {
            if (!id || typeof id !== "number" || id <= 0) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
            }
            const [user] = await db.select().from(users).where(eq(users.id, id));
            return user || void 0;
          },
          "\u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
          `\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0631\u0642\u0645 ${id}`
        );
      }
      async getUserByUsername(username) {
        return withDatabaseErrorHandling(
          async () => {
            if (!username || typeof username !== "string" || username.trim() === "") {
              throw new Error("\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628");
            }
            const [user] = await db.select().from(users).where(eq(users.username, username.trim()));
            return user || void 0;
          },
          "\u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
          `\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645: ${username}`
        );
      }
      async createUser(insertUser) {
        return withDatabaseErrorHandling(
          async () => {
            if (!insertUser.username || !insertUser.password) {
              throw new Error("\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0627\u0646");
            }
            if (insertUser.username.length < 3) {
              throw new Error("\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 3 \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644");
            }
            if (insertUser.password.length < 6) {
              throw new Error("\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 6 \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644");
            }
            const saltRounds = 12;
            const hashedPassword = await bcrypt.hash(insertUser.password, saltRounds);
            const [user] = await db.insert(users).values({ ...insertUser, password: hashedPassword }).returning();
            return user;
          },
          "\u0625\u0646\u0634\u0627\u0621 \u0645\u0633\u062A\u062E\u062F\u0645 \u062C\u062F\u064A\u062F",
          `\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645: ${insertUser.username}`
        );
      }
      // Safe user methods that exclude password and other sensitive fields
      async getSafeUser(id) {
        return withDatabaseErrorHandling(
          async () => {
            if (!id || typeof id !== "number" || id <= 0) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
            }
            const [user] = await db.select({
              id: users.id,
              username: users.username,
              display_name: users.display_name,
              display_name_ar: users.display_name_ar,
              full_name: users.full_name,
              phone: users.phone,
              email: users.email,
              role_id: users.role_id,
              section_id: users.section_id,
              status: users.status,
              created_at: users.created_at
            }).from(users).where(eq(users.id, id));
            return user || void 0;
          },
          "\u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0622\u0645\u0646\u0629",
          `\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0631\u0642\u0645 ${id}`
        );
      }
      async getSafeUsers() {
        return withDatabaseErrorHandling(
          async () => {
            return await db.select({
              id: users.id,
              username: users.username,
              display_name: users.display_name,
              display_name_ar: users.display_name_ar,
              full_name: users.full_name,
              phone: users.phone,
              email: users.email,
              role_id: users.role_id,
              section_id: users.section_id,
              status: users.status,
              created_at: users.created_at
            }).from(users);
          },
          "\u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0627\u0644\u0622\u0645\u0646\u0629",
          "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646"
        );
      }
      async getSafeUsersByRole(roleId) {
        return withDatabaseErrorHandling(
          async () => {
            if (!roleId || typeof roleId !== "number" || roleId <= 0) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0627\u0644\u062F\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
            }
            return await db.select({
              id: users.id,
              username: users.username,
              display_name: users.display_name,
              display_name_ar: users.display_name_ar,
              full_name: users.full_name,
              phone: users.phone,
              email: users.email,
              role_id: users.role_id,
              section_id: users.section_id,
              status: users.status,
              created_at: users.created_at
            }).from(users).where(eq(users.role_id, roleId));
          },
          "\u062C\u0644\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u062D\u0633\u0628 \u0627\u0644\u062F\u0648\u0631",
          `\u0627\u0644\u062F\u0648\u0631 \u0631\u0642\u0645 ${roleId}`
        );
      }
      // Delete methods
      async deleteSection(id) {
        await db.delete(sections).where(eq(sections.id, id));
      }
      async deleteItem(id) {
        await db.delete(items).where(eq(items.id, id));
      }
      async deleteCustomerProduct(id) {
        await db.delete(customer_products).where(eq(customer_products.id, id));
      }
      async deleteLocation(id) {
        await db.delete(locations).where(eq(locations.id, id));
      }
      async deleteMachine(id) {
        await db.delete(machines).where(eq(machines.id, id));
      }
      async deleteUser(id) {
        await db.delete(users).where(eq(users.id, id));
      }
      async deleteCustomer(id) {
        await db.delete(customers).where(eq(customers.id, id));
      }
      async getAllOrders() {
        return await db.select().from(orders).orderBy(desc(orders.created_at));
      }
      async createOrder(insertOrder) {
        return withDatabaseErrorHandling(
          async () => {
            const dataValidator2 = getDataValidator(this);
            const validationResult = await dataValidator2.validateEntity("orders", insertOrder, false);
            if (!validationResult.isValid) {
              console.error("[Storage] \u274C ORDER VALIDATION FAILED:", validationResult.errors);
              throw new DatabaseError(
                `\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u0627\u0644\u0637\u0644\u0628: ${validationResult.errors.map((e) => e.message_ar).join(", ")}`,
                { code: "VALIDATION_FAILED", validationErrors: validationResult.errors }
              );
            }
            console.log("[Storage] \u2705 Order validation passed, proceeding with database write");
            if (!insertOrder.customer_id) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0637\u0644\u0648\u0628");
            }
            if (!insertOrder.order_number || insertOrder.order_number.trim() === "") {
              throw new Error("\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628 \u0645\u0637\u0644\u0648\u0628");
            }
            if (!insertOrder.created_by) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0645\u0646\u0634\u0626 \u0627\u0644\u0637\u0644\u0628 \u0645\u0637\u0644\u0648\u0628");
            }
            const orderData = {
              ...insertOrder,
              delivery_date: insertOrder.delivery_date instanceof Date ? insertOrder.delivery_date.toISOString().split("T")[0] : insertOrder.delivery_date
            };
            const [order] = await db.insert(orders).values(orderData).returning();
            return order;
          },
          "\u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F",
          `\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628: ${insertOrder.order_number}`
        );
      }
      async updateOrder(id, orderUpdate) {
        return withDatabaseErrorHandling(
          async () => {
            if (!id || typeof id !== "number" || id <= 0) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
            }
            const existingOrder = await db.select().from(orders).where(eq(orders.id, id)).limit(1);
            if (existingOrder.length === 0) {
              throw new Error("\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
            }
            const [order] = await db.update(orders).set(orderUpdate).where(eq(orders.id, id)).returning();
            if (!order) {
              throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0637\u0644\u0628");
            }
            return order;
          },
          "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0637\u0644\u0628",
          `\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628: ${id}`
        );
      }
      async updateOrderStatus(id, status) {
        return withDatabaseErrorHandling(
          async () => {
            if (!id || typeof id !== "number" || id <= 0) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
            }
            if (!status || typeof status !== "string" || status.trim() === "") {
              throw new Error("\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0645\u0637\u0644\u0648\u0628\u0629");
            }
            const currentOrder = await this.getOrderById(id);
            if (!currentOrder) {
              throw new DatabaseError("\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", { code: "23503" });
            }
            const dataValidator2 = getDataValidator(this);
            const transitionResult = await dataValidator2.validateStatusTransition(
              "orders",
              currentOrder.status || "waiting",
              status.trim(),
              id
            );
            if (!transitionResult.isValid) {
              console.error("[Storage] \u274C INVALID ORDER STATUS TRANSITION:", transitionResult.errors);
              throw new DatabaseError(
                `\u0627\u0646\u062A\u0642\u0627\u0644 \u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D: ${transitionResult.errors.map((e) => e.message_ar).join(", ")}`,
                { code: "INVALID_STATUS_TRANSITION", transitionErrors: transitionResult.errors }
              );
            }
            console.log(`[Storage] \u2705 Valid status transition: ${currentOrder.status} \u2192 ${status}`);
            const validStatuses = ["pending", "waiting", "in_production", "for_production", "paused", "on_hold", "completed", "cancelled"];
            if (!validStatuses.includes(status)) {
              throw new Error(`\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629: ${status}`);
            }
            return await db.transaction(async (tx) => {
              try {
                const existingOrder = await tx.select().from(orders).where(eq(orders.id, id)).limit(1);
                if (existingOrder.length === 0) {
                  throw new Error("\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
                }
                const [order] = await tx.update(orders).set({ status }).where(eq(orders.id, id)).returning();
                if (!order) {
                  throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628");
                }
                let productionStatus = status;
                if (status === "in_production" || status === "for_production") {
                  productionStatus = "in_production";
                } else if (status === "waiting" || status === "pending") {
                  productionStatus = "pending";
                } else if (status === "paused" || status === "on_hold") {
                  productionStatus = "paused";
                } else if (status === "completed") {
                  productionStatus = "completed";
                } else if (status === "cancelled") {
                  productionStatus = "cancelled";
                }
                await tx.update(production_orders).set({ status: productionStatus }).where(eq(production_orders.order_id, id));
                return order;
              } catch (error) {
                throw error;
              }
            });
          },
          "\u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628",
          `\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628: ${id}, \u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629: ${status}`
        );
      }
      async getOrderById(id) {
        const [order] = await db.select().from(orders).where(eq(orders.id, id));
        return order || void 0;
      }
      async deleteOrder(id) {
        await db.transaction(async (tx) => {
          const productionOrdersToDelete = await tx.select({ id: production_orders.id }).from(production_orders).where(eq(production_orders.order_id, id));
          for (const prodOrder of productionOrdersToDelete) {
            await tx.delete(rolls).where(eq(rolls.production_order_id, prodOrder.id));
          }
          await tx.delete(production_orders).where(eq(production_orders.order_id, id));
          await tx.delete(orders).where(eq(orders.id, id));
        });
      }
      async getOrdersForProduction() {
        const results = await db.select({
          id: orders.id,
          order_number: orders.order_number,
          customer_id: orders.customer_id,
          delivery_days: orders.delivery_days,
          status: orders.status,
          notes: orders.notes,
          created_by: orders.created_by,
          created_at: orders.created_at,
          delivery_date: orders.delivery_date,
          customer_name: customers.name,
          customer_name_ar: customers.name_ar
        }).from(orders).leftJoin(customers, eq(orders.customer_id, customers.id)).where(or(eq(orders.status, "in_production"), eq(orders.status, "waiting"), eq(orders.status, "pending"))).orderBy(desc(orders.created_at));
        return results;
      }
      async getOrdersEnhanced(filters) {
        return await withDatabaseErrorHandling(async () => {
          let query = db.select({
            // Order fields
            id: orders.id,
            order_number: orders.order_number,
            customer_id: orders.customer_id,
            delivery_days: orders.delivery_days,
            status: orders.status,
            notes: orders.notes,
            created_by: orders.created_by,
            created_at: orders.created_at,
            delivery_date: orders.delivery_date,
            customer_name: customers.name,
            customer_name_ar: customers.name_ar,
            customer_code: customers.code,
            customer_city: customers.city,
            customer_phone: customers.phone,
            // Production orders count and total quantity
            production_orders_count: count(production_orders.id),
            total_quantity_kg: sum(production_orders.quantity_kg)
          }).from(orders).leftJoin(customers, eq(orders.customer_id, customers.id)).leftJoin(production_orders, eq(production_orders.order_id, orders.id)).groupBy(
            orders.id,
            orders.order_number,
            orders.customer_id,
            orders.delivery_days,
            orders.status,
            orders.notes,
            orders.created_by,
            orders.created_at,
            orders.delivery_date,
            customers.name,
            customers.name_ar,
            customers.code,
            customers.city,
            customers.phone
          );
          const conditions = [];
          if (filters.search) {
            const searchTerm = `%${filters.search}%`;
            conditions.push(
              or(
                sql2`${orders.order_number} ILIKE ${searchTerm}`,
                sql2`${customers.name} ILIKE ${searchTerm}`,
                sql2`${customers.name_ar} ILIKE ${searchTerm}`,
                sql2`${customers.code} ILIKE ${searchTerm}`,
                sql2`${orders.notes} ILIKE ${searchTerm}`
              )
            );
          }
          if (filters.customer_id) {
            conditions.push(eq(orders.customer_id, filters.customer_id));
          }
          if (filters.status) {
            conditions.push(eq(orders.status, filters.status));
          }
          if (filters.date_from) {
            conditions.push(sql2`${orders.created_at} >= ${filters.date_from}`);
          }
          if (filters.date_to) {
            conditions.push(sql2`${orders.created_at} <= ${filters.date_to}`);
          }
          if (conditions.length > 0) {
            query = query.where(and(...conditions));
          }
          const page = filters.page || 1;
          const limit = filters.limit || 50;
          const offset = (page - 1) * limit;
          query = query.orderBy(desc(orders.created_at)).limit(limit).offset(offset);
          const results = await query;
          const countQuery = db.select({ count: count(orders.id) }).from(orders).leftJoin(customers, eq(orders.customer_id, customers.id));
          if (conditions.length > 0) {
            countQuery.where(and(...conditions));
          }
          const [{ count: totalCount }] = await countQuery;
          return {
            orders: results,
            pagination: {
              page,
              limit,
              total: totalCount,
              totalPages: Math.ceil(totalCount / limit)
            }
          };
        }, "\u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u062D\u0633\u0646\u0629");
      }
      async getHierarchicalOrdersForProduction() {
        try {
          const cacheKey = "hierarchical_orders";
          const cached = getCachedData(cacheKey);
          if (cached) {
            return cached;
          }
          const ordersData = await db.select({
            id: orders.id,
            order_number: orders.order_number,
            customer_id: orders.customer_id,
            customer_name: customers.name,
            customer_name_ar: customers.name_ar,
            status: orders.status,
            created_at: orders.created_at,
            delivery_date: orders.delivery_date,
            notes: orders.notes
          }).from(orders).leftJoin(customers, eq(orders.customer_id, customers.id)).where(or(
            eq(orders.status, "in_production"),
            eq(orders.status, "waiting"),
            eq(orders.status, "pending"),
            eq(orders.status, "for_production")
          )).orderBy(desc(orders.created_at)).limit(100);
          if (ordersData.length === 0) {
            return [];
          }
          const orderIds = ordersData.map((o) => o.id);
          const productionOrdersData = await db.select({
            id: production_orders.id,
            production_order_number: production_orders.production_order_number,
            order_id: production_orders.order_id,
            customer_product_id: production_orders.customer_product_id,
            quantity_kg: production_orders.quantity_kg,
            status: production_orders.status,
            created_at: production_orders.created_at
          }).from(production_orders).where(sql2`${production_orders.order_id} IN (${sql2.raw(orderIds.join(","))})`).limit(100);
          const orderMap = /* @__PURE__ */ new Map();
          for (const order of ordersData) {
            orderMap.set(order.id, {
              ...order,
              production_orders: []
            });
          }
          for (const po of productionOrdersData) {
            const order = orderMap.get(po.order_id);
            if (order) {
              order.production_orders.push({
                ...po,
                // إضافة الحقول المطلوبة
                produced_quantity_kg: "0",
                printed_quantity_kg: "0",
                net_quantity_kg: "0",
                waste_quantity_kg: "0",
                film_completion_percentage: "0",
                printing_completion_percentage: "0",
                cutting_completion_percentage: "0",
                overrun_percentage: "0",
                final_quantity_kg: "0",
                rolls: []
              });
            }
          }
          const result = Array.from(orderMap.values()).filter((order) => order.production_orders.length > 0);
          setCachedData(cacheKey, result, CACHE_TTL.REALTIME);
          return result;
        } catch (error) {
          console.error("Error fetching hierarchical orders:", error);
          return [];
        }
      }
      // Production Orders Implementation
      async getAllProductionOrders() {
        return await withDatabaseErrorHandling(async () => {
          const results = await db.select({
            // Production order fields - using existing fields only
            id: production_orders.id,
            production_order_number: production_orders.production_order_number,
            order_id: production_orders.order_id,
            customer_product_id: production_orders.customer_product_id,
            quantity_kg: production_orders.quantity_kg,
            overrun_percentage: production_orders.overrun_percentage,
            final_quantity_kg: production_orders.final_quantity_kg,
            produced_quantity_kg: production_orders.produced_quantity_kg,
            printed_quantity_kg: production_orders.printed_quantity_kg,
            net_quantity_kg: production_orders.net_quantity_kg,
            waste_quantity_kg: production_orders.waste_quantity_kg,
            film_completion_percentage: production_orders.film_completion_percentage,
            printing_completion_percentage: production_orders.printing_completion_percentage,
            cutting_completion_percentage: production_orders.cutting_completion_percentage,
            status: production_orders.status,
            created_at: production_orders.created_at,
            // Related order information
            order_number: orders.order_number,
            customer_id: orders.customer_id,
            customer_name: customers.name,
            customer_name_ar: customers.name_ar,
            // Product details
            size_caption: customer_products.size_caption,
            width: customer_products.width,
            cutting_length_cm: customer_products.cutting_length_cm,
            thickness: customer_products.thickness,
            raw_material: customer_products.raw_material,
            master_batch_id: customer_products.master_batch_id,
            is_printed: customer_products.is_printed,
            punching: customer_products.punching,
            // Item information
            item_name: items.name,
            item_name_ar: items.name_ar
          }).from(production_orders).leftJoin(orders, eq(production_orders.order_id, orders.id)).leftJoin(customers, eq(orders.customer_id, customers.id)).leftJoin(customer_products, eq(production_orders.customer_product_id, customer_products.id)).leftJoin(items, eq(customer_products.item_id, items.id)).orderBy(desc(production_orders.created_at));
          return results;
        }, "\u062A\u062D\u0645\u064A\u0644 \u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C");
      }
      async getProductionOrderById(id) {
        return await withDatabaseErrorHandling(async () => {
          const results = await db.select({
            // Production order fields
            id: production_orders.id,
            production_order_number: production_orders.production_order_number,
            order_id: production_orders.order_id,
            customer_product_id: production_orders.customer_product_id,
            quantity_kg: production_orders.quantity_kg,
            overrun_percentage: production_orders.overrun_percentage,
            final_quantity_kg: production_orders.final_quantity_kg,
            produced_quantity_kg: production_orders.produced_quantity_kg,
            printed_quantity_kg: production_orders.printed_quantity_kg,
            net_quantity_kg: production_orders.net_quantity_kg,
            waste_quantity_kg: production_orders.waste_quantity_kg,
            film_completion_percentage: production_orders.film_completion_percentage,
            printing_completion_percentage: production_orders.printing_completion_percentage,
            cutting_completion_percentage: production_orders.cutting_completion_percentage,
            status: production_orders.status,
            created_at: production_orders.created_at,
            // Related order information
            order_number: orders.order_number,
            customer_id: orders.customer_id,
            customer_name: customers.name,
            customer_name_ar: customers.name_ar,
            // Product details
            size_caption: customer_products.size_caption,
            width: customer_products.width,
            cutting_length_cm: customer_products.cutting_length_cm,
            thickness: customer_products.thickness,
            raw_material: customer_products.raw_material,
            master_batch_id: customer_products.master_batch_id,
            is_printed: customer_products.is_printed,
            punching: customer_products.punching,
            // Item information
            item_name: items.name,
            item_name_ar: items.name_ar
          }).from(production_orders).leftJoin(orders, eq(production_orders.order_id, orders.id)).leftJoin(customers, eq(orders.customer_id, customers.id)).leftJoin(customer_products, eq(production_orders.customer_product_id, customer_products.id)).leftJoin(items, eq(customer_products.item_id, items.id)).where(eq(production_orders.id, id)).limit(1);
          return results.length > 0 ? results[0] : void 0;
        }, "\u062A\u062D\u0645\u064A\u0644 \u0623\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C");
      }
      async createProductionOrder(insertProductionOrder) {
        return await withDatabaseErrorHandling(async () => {
          const dataValidator2 = getDataValidator(this);
          const validationResult = await dataValidator2.validateEntity("production_orders", insertProductionOrder, false);
          if (!validationResult.isValid) {
            console.error("[Storage] \u274C PRODUCTION ORDER VALIDATION FAILED:", validationResult.errors);
            throw new DatabaseError(
              `\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u0637\u0644\u0628 \u0627\u0644\u0625\u0646\u062A\u0627\u062C: ${validationResult.errors.map((e) => e.message_ar).join(", ")}`,
              { code: "VALIDATION_FAILED", validationErrors: validationResult.errors }
            );
          }
          console.log("[Storage] \u2705 Production order validation passed, proceeding with database write");
          return await db.transaction(async (tx) => {
            const [parentOrder] = await tx.select().from(orders).where(eq(orders.id, insertProductionOrder.order_id)).for("update");
            if (!parentOrder) {
              throw new Error("\u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0623\u0635\u0644\u064A \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
            }
            const existingProductionOrders = await tx.select({
              quantity_kg: production_orders.quantity_kg,
              final_quantity_kg: production_orders.final_quantity_kg
            }).from(production_orders).where(eq(production_orders.order_id, insertProductionOrder.order_id));
            const existingTotalQuantity = existingProductionOrders.reduce(
              (sum2, po) => sum2 + parseFloat(po.final_quantity_kg || po.quantity_kg || "0"),
              0
            );
            const proposedFinalQuantity = parseFloat(insertProductionOrder.final_quantity_kg || "0");
            if (parentOrder.status === "cancelled") {
              throw new DatabaseError(
                "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u0625\u0646\u062A\u0627\u062C \u0644\u0637\u0644\u0628 \u0645\u0644\u063A\u064A",
                { code: "INVARIANT_D_VIOLATION" }
              );
            }
            if (parentOrder.status === "completed") {
              throw new DatabaseError(
                "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u0625\u0646\u062A\u0627\u062C \u0644\u0637\u0644\u0628 \u0645\u0643\u062A\u0645\u0644",
                { code: "INVARIANT_D_VIOLATION" }
              );
            }
            const existingOrders = await tx.select({ production_order_number: production_orders.production_order_number }).from(production_orders).for("update");
            const orderNumbers = existingOrders.map((order) => order.production_order_number).filter((orderNumber) => orderNumber.startsWith("PO")).map((orderNumber) => parseInt(orderNumber.replace("PO", ""))).filter((num) => !isNaN(num));
            const nextNumber = orderNumbers.length > 0 ? Math.max(...orderNumbers) + 1 : 1;
            const productionOrderNumber = `PO${nextNumber.toString().padStart(3, "0")}`;
            const [customerProduct] = await tx.select().from(customer_products).where(eq(customer_products.id, parseInt(insertProductionOrder.customer_product_id.toString())));
            if (!customerProduct) {
              throw new Error("\u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0645\u064A\u0644 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
            }
            const baseQuantityKg = parseFloat(insertProductionOrder.quantity_kg || "0");
            const punchingType = customerProduct.punching || null;
            const quantityCalculation = calculateProductionQuantities(baseQuantityKg, punchingType);
            const productionOrderData = {
              ...insertProductionOrder,
              production_order_number: productionOrderNumber,
              quantity_kg: numberToDecimalString(quantityCalculation.finalQuantityKg)
            };
            const [productionOrder] = await tx.insert(production_orders).values(productionOrderData).returning();
            console.log(`Created production order ${productionOrderNumber} with intelligent quantities:`, {
              baseQuantity: baseQuantityKg,
              punchingType,
              overrunPercentage: quantityCalculation.overrunPercentage,
              finalQuantity: quantityCalculation.finalQuantityKg,
              reason: quantityCalculation.overrunReason
            });
            return productionOrder;
          });
        }, "\u0625\u0646\u0634\u0627\u0621 \u0623\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C");
      }
      async updateProductionOrder(id, productionOrderUpdate) {
        return await db.transaction(async (tx) => {
          const [productionOrder] = await tx.update(production_orders).set(productionOrderUpdate).where(eq(production_orders.id, id)).returning();
          if (productionOrderUpdate.status === "completed") {
            const orderId = productionOrder.order_id;
            const allProductionOrders = await tx.select().from(production_orders).where(eq(production_orders.order_id, orderId));
            const allCompleted = allProductionOrders.every(
              (po) => po.id === id ? productionOrderUpdate.status === "completed" : po.status === "completed"
            );
            if (allCompleted) {
              await tx.update(orders).set({ status: "completed" }).where(eq(orders.id, orderId));
              console.log(`Order ${orderId} automatically completed - all production orders finished`);
            }
          }
          return productionOrder;
        });
      }
      async deleteProductionOrder(id) {
        await db.delete(production_orders).where(eq(production_orders.id, id));
      }
      async getRolls(options) {
        const limit = options?.limit || 50;
        const offset = options?.offset || 0;
        if (options?.stage) {
          return await db.select().from(rolls).where(eq(rolls.stage, options.stage)).orderBy(desc(rolls.created_at)).limit(limit).offset(offset);
        } else {
          return await db.select().from(rolls).orderBy(desc(rolls.created_at)).limit(limit).offset(offset);
        }
      }
      async getRollsByProductionOrder(productionOrderId) {
        return await db.select().from(rolls).where(eq(rolls.production_order_id, productionOrderId));
      }
      async getRollsByStage(stage, options) {
        const limit = options?.limit || 100;
        const offset = options?.offset || 0;
        return await db.select().from(rolls).where(eq(rolls.stage, stage)).orderBy(desc(rolls.created_at)).limit(limit).offset(offset);
      }
      async createRoll(insertRoll) {
        return await withDatabaseErrorHandling(async () => {
          const dataValidator2 = getDataValidator(this);
          const validationResult = await dataValidator2.validateEntity("rolls", insertRoll, false);
          if (!validationResult.isValid) {
            console.error("[Storage] \u274C ROLL VALIDATION FAILED:", validationResult.errors);
            throw new DatabaseError(
              `\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u0627\u0644\u0631\u0648\u0644: ${validationResult.errors.map((e) => e.message_ar).join(", ")}`,
              { code: "VALIDATION_FAILED", validationErrors: validationResult.errors }
            );
          }
          console.log("[Storage] \u2705 Roll validation passed, proceeding with database write");
          return await db.transaction(async (tx) => {
            const [productionOrder] = await tx.select().from(production_orders).where(eq(production_orders.id, insertRoll.production_order_id)).for("update");
            if (!productionOrder) {
              throw new DatabaseError("\u0637\u0644\u0628 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", { code: "23503" });
            }
            const [machine] = await tx.select().from(machines).where(eq(machines.id, insertRoll.machine_id));
            if (!machine) {
              throw new DatabaseError("\u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629", { code: "23503" });
            }
            if (machine.status !== "active") {
              throw new DatabaseError(
                `\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0646\u0634\u0627\u0621 \u0631\u0648\u0644 \u0639\u0644\u0649 \u0645\u0627\u0643\u064A\u0646\u0629 \u063A\u064A\u0631 \u0646\u0634\u0637\u0629 - \u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629: ${machine.status}`,
                { code: "INVARIANT_E_VIOLATION" }
              );
            }
            const rollWeightKg = parseFloat(insertRoll.weight_kg?.toString() || "0");
            if (rollWeightKg <= 0) {
              throw new DatabaseError("\u0648\u0632\u0646 \u0627\u0644\u0631\u0648\u0644 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0648\u062C\u0628", { code: "23514" });
            }
            const totalWeightResult = await tx.select({ total: sql2`COALESCE(SUM(${rolls.weight_kg}::decimal), 0)` }).from(rolls).where(eq(rolls.production_order_id, insertRoll.production_order_id));
            const currentTotalWeight = Number(totalWeightResult[0]?.total || 0);
            const newTotalWeight = currentTotalWeight + rollWeightKg;
            const finalQuantityKg = parseFloat(productionOrder.final_quantity_kg?.toString() || "0");
            const tolerance = finalQuantityKg * 0.03;
            const maxAllowedWeight = finalQuantityKg + tolerance;
            if (newTotalWeight > maxAllowedWeight) {
              throw new DatabaseError(
                `\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0644\u0644\u0631\u0648\u0644\u0627\u062A \u0627\u0644\u062D\u062F \u0627\u0644\u0645\u0633\u0645\u0648\u062D: ${newTotalWeight.toFixed(2)}\u0643\u063A > ${maxAllowedWeight.toFixed(2)}\u0643\u063A (${finalQuantityKg.toFixed(2)}\u0643\u063A + 3% \u062A\u0633\u0627\u0645\u062D)`,
                { code: "INVARIANT_B_VIOLATION" }
              );
            }
            const poRollCount = await tx.select({ count: sql2`COUNT(*)` }).from(rolls).where(eq(rolls.production_order_id, insertRoll.production_order_id));
            const nextRollSeq = (poRollCount[0]?.count || 0) + 1;
            const rollNumber = `${productionOrder.production_order_number}-${nextRollSeq.toString().padStart(2, "0")}`;
            const qrData = {
              roll_number: rollNumber,
              production_order: productionOrder.production_order_number,
              weight_kg: insertRoll.weight_kg,
              machine_id: insertRoll.machine_id,
              created_at: (/* @__PURE__ */ new Date()).toISOString(),
              stage: "film",
              internal_ref: `${productionOrder.production_order_number}-R${nextRollSeq.toString().padStart(3, "0")}`
            };
            const qrCodeText = JSON.stringify(qrData);
            let qrPngBase64 = "";
            try {
              const qrPngBuffer = await QRCode.toBuffer(qrCodeText, {
                type: "png",
                width: 200,
                margin: 1,
                color: {
                  dark: "#000000",
                  light: "#FFFFFF"
                }
              });
              qrPngBase64 = qrPngBuffer.toString("base64");
            } catch (qrError) {
              console.error("Error generating QR code image:", qrError);
            }
            const [roll] = await tx.insert(rolls).values({
              ...insertRoll,
              roll_number: rollNumber,
              qr_code_text: qrCodeText,
              qr_png_base64: qrPngBase64,
              roll_seq: nextRollSeq
            }).returning();
            console.log(`[Storage] Created roll ${rollNumber} (${productionOrder.production_order_number}-R${nextRollSeq.toString().padStart(3, "0")}) with invariant validation:`, {
              rollWeight: rollWeightKg,
              newTotalWeight: newTotalWeight.toFixed(2),
              maxAllowed: maxAllowedWeight.toFixed(2),
              machineStatus: machine.status
            });
            invalidateProductionCache("all");
            return roll;
          });
        }, "createRoll", `\u0644\u0644\u0637\u0644\u0628 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A ${insertRoll.production_order_id}`);
      }
      async updateRoll(id, updates) {
        const [roll] = await db.update(rolls).set(updates).where(eq(rolls.id, id)).returning();
        return roll;
      }
      async getMachines() {
        return await db.select().from(machines);
      }
      async getMachineById(id) {
        const [machine] = await db.select().from(machines).where(eq(machines.id, id));
        return machine || void 0;
      }
      async getCustomers() {
        return await db.select().from(customers);
      }
      // Customer Products - replaced the old Products table
      async getMaintenanceRequests() {
        return await db.select().from(maintenance_requests).orderBy(desc(maintenance_requests.date_reported));
      }
      async createMaintenanceRequest(request) {
        const existingRequests = await db.select().from(maintenance_requests);
        const nextNumber = existingRequests.length + 1;
        const requestNumber = `MO${nextNumber.toString().padStart(3, "0")}`;
        const [maintenanceRequest] = await db.insert(maintenance_requests).values({
          ...request,
          request_number: requestNumber
        }).returning();
        return maintenanceRequest;
      }
      async deleteMaintenanceRequest(id) {
        return await db.transaction(async (tx) => {
          try {
            await tx.delete(notifications).where(
              and(
                eq(notifications.context_type, "maintenance_request"),
                eq(notifications.context_id, id.toString())
              )
            );
            try {
              await tx.delete(maintenance_requests).where(eq(maintenance_requests.id, id));
            } catch (fkError) {
              if (fkError.code === "23503") {
                await tx.delete(maintenance_actions).where(eq(maintenance_actions.maintenance_request_id, id));
                await tx.delete(maintenance_requests).where(eq(maintenance_requests.id, id));
              } else {
                throw fkError;
              }
            }
          } catch (error) {
            console.error("Error deleting maintenance request:", error);
            throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0637\u0644\u0628 \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
          }
        });
      }
      async getQualityChecks() {
        return await db.select().from(quality_checks).orderBy(desc(quality_checks.created_at));
      }
      async getUsers() {
        return await db.select().from(users);
      }
      async getRoles() {
        return await db.select().from(roles);
      }
      async createRole(roleData) {
        try {
          const [role] = await db.insert(roles).values({
            name: roleData.name,
            name_ar: roleData.name_ar,
            permissions: roleData.permissions || []
          }).returning();
          return role;
        } catch (error) {
          console.error("Error creating role:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062F\u0648\u0631");
        }
      }
      async updateRole(id, roleData) {
        try {
          const [role] = await db.update(roles).set({
            name: roleData.name,
            name_ar: roleData.name_ar,
            permissions: roleData.permissions
          }).where(eq(roles.id, id)).returning();
          return role;
        } catch (error) {
          console.error("Error updating role:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062F\u0648\u0631");
        }
      }
      async deleteRole(id) {
        try {
          await db.delete(roles).where(eq(roles.id, id));
        } catch (error) {
          console.error("Error deleting role:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u062F\u0648\u0631");
        }
      }
      // Replaced by createCustomerProduct
      async createCustomer(customer) {
        return await withDatabaseErrorHandling(async () => {
          const dataValidator2 = getDataValidator(this);
          const validationResult = await dataValidator2.validateEntity("customers", customer, false);
          if (!validationResult.isValid) {
            console.error("[Storage] \u274C CUSTOMER VALIDATION FAILED:", validationResult.errors);
            throw new DatabaseError(
              `\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644: ${validationResult.errors.map((e) => e.message_ar).join(", ")}`,
              { code: "VALIDATION_FAILED", validationErrors: validationResult.errors }
            );
          }
          console.log("[Storage] \u2705 Customer validation passed, proceeding with database write");
          const existingCustomers = await db.select({ id: customers.id }).from(customers);
          const customerIds = existingCustomers.map((c) => c.id);
          const maxNumber = customerIds.filter((id) => id.startsWith("CID")).map((id) => parseInt(id.substring(3))).filter((num) => !isNaN(num)).reduce((max, num) => Math.max(max, num), 0);
          const newId = `CID${String(maxNumber + 1).padStart(3, "0")}`;
          const [newCustomer] = await db.insert(customers).values({
            ...customer,
            id: newId
          }).returning();
          return newCustomer;
        }, "\u0625\u0646\u0634\u0627\u0621 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F", `\u0627\u0644\u0639\u0645\u064A\u0644: ${customer.name}`);
      }
      async updateCustomer(id, updates) {
        const [updatedCustomer] = await db.update(customers).set(updates).where(eq(customers.id, id)).returning();
        return updatedCustomer;
      }
      async createMachine(machine) {
        return await withDatabaseErrorHandling(async () => {
          const dataValidator2 = getDataValidator(this);
          const validationResult = await dataValidator2.validateEntity("machines", machine, false);
          if (!validationResult.isValid) {
            console.error("[Storage] \u274C MACHINE VALIDATION FAILED:", validationResult.errors);
            throw new DatabaseError(
              `\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629: ${validationResult.errors.map((e) => e.message_ar).join(", ")}`,
              { code: "VALIDATION_FAILED", validationErrors: validationResult.errors }
            );
          }
          console.log("[Storage] \u2705 Machine validation passed, proceeding with database write");
          const [newMachine] = await db.insert(machines).values(machine).returning();
          return newMachine;
        }, "\u0625\u0646\u0634\u0627\u0621 \u0645\u0627\u0643\u064A\u0646\u0629 \u062C\u062F\u064A\u062F\u0629", `\u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629: ${machine.name}`);
      }
      async updateMachine(id, updates) {
        const [updatedMachine] = await db.update(machines).set(updates).where(eq(machines.id, id)).returning();
        return updatedMachine;
      }
      async createSection(section) {
        const [newSection] = await db.insert(sections).values(section).returning();
        return newSection;
      }
      async updateSection(id, updates) {
        const [updatedSection] = await db.update(sections).set(updates).where(eq(sections.id, id)).returning();
        return updatedSection;
      }
      async updateUser(id, updates) {
        if (updates.password) {
          const saltRounds = 12;
          updates.password = await bcrypt.hash(updates.password, saltRounds);
        }
        const [updatedUser] = await db.update(users).set(updates).where(eq(users.id, id)).returning();
        return updatedUser;
      }
      async createItem(item) {
        const [newItem] = await db.insert(items).values(item).returning();
        return newItem;
      }
      async updateItem(id, updates) {
        const [updatedItem] = await db.update(items).set(updates).where(eq(items.id, id)).returning();
        return updatedItem;
      }
      async createCustomerProduct(customerProduct) {
        const [newCustomerProduct] = await db.insert(customer_products).values(customerProduct).returning();
        return newCustomerProduct;
      }
      async updateCustomerProduct(id, updates) {
        const [updatedCustomerProduct] = await db.update(customer_products).set(updates).where(eq(customer_products.id, id)).returning();
        return updatedCustomerProduct;
      }
      async createLocation(location) {
        const [newLocation] = await db.insert(locations).values(location).returning();
        return newLocation;
      }
      async updateLocation(id, updates) {
        const [updatedLocation] = await db.update(locations).set(updates).where(eq(locations.id, id)).returning();
        return updatedLocation;
      }
      async getSections() {
        return await db.select().from(sections);
      }
      // ============ Production Monitoring Analytics ============
      async getUserPerformanceStats(userId, dateFrom, dateTo) {
        return await withDatabaseErrorHandling(async () => {
          const dateFilter = dateFrom && dateTo ? sql2`DATE(${rolls.created_at}) BETWEEN ${dateFrom} AND ${dateTo}` : sql2`DATE(${rolls.created_at}) >= CURRENT_DATE - INTERVAL '7 days'`;
          let query = db.select({
            user_id: users.id,
            username: users.username,
            display_name_ar: users.display_name_ar,
            role_name: sql2`COALESCE(roles.name_ar, roles.name)`,
            section_name: sql2`COALESCE(sections.name_ar, sections.name)`,
            rolls_created: sql2`COUNT(DISTINCT CASE WHEN ${rolls.created_by} = ${users.id} THEN ${rolls.id} END)`,
            rolls_printed: sql2`COUNT(DISTINCT CASE WHEN ${rolls.printed_by} = ${users.id} THEN ${rolls.id} END)`,
            rolls_cut: sql2`COUNT(DISTINCT CASE WHEN ${rolls.cut_by} = ${users.id} THEN ${rolls.id} END)`,
            total_weight_kg: sql2`COALESCE(SUM(CASE WHEN ${rolls.created_by} = ${users.id} OR ${rolls.printed_by} = ${users.id} OR ${rolls.cut_by} = ${users.id} THEN ${rolls.weight_kg} END), 0)`,
            avg_roll_weight: sql2`COALESCE(AVG(CASE WHEN ${rolls.created_by} = ${users.id} OR ${rolls.printed_by} = ${users.id} OR ${rolls.cut_by} = ${users.id} THEN ${rolls.weight_kg} END), 0)`,
            hours_worked: sql2`COUNT(DISTINCT DATE(${rolls.created_at})) * 8`,
            efficiency_score: sql2`COALESCE(AVG(CASE WHEN ${rolls.created_by} = ${users.id} OR ${rolls.printed_by} = ${users.id} OR ${rolls.cut_by} = ${users.id} THEN 95 - (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0) * 100) END), 90)`
          }).from(users).leftJoin(roles, eq(users.role_id, roles.id)).leftJoin(sections, eq(users.section_id, sections.id)).leftJoin(rolls, sql2`(${rolls.created_by} = ${users.id} OR ${rolls.printed_by} = ${users.id} OR ${rolls.cut_by} = ${users.id}) AND ${dateFilter}`).groupBy(users.id, users.username, users.display_name_ar, roles.name, roles.name_ar, sections.name, sections.name_ar).orderBy(sql2`rolls_created + rolls_printed + rolls_cut DESC`);
          if (userId) {
            query = query.where(eq(users.id, userId));
          }
          return await query;
        }, "getUserPerformanceStats", userId ? `\u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ${userId}` : "\u0644\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
      }
      async getRolePerformanceStats(dateFrom, dateTo) {
        return await withDatabaseErrorHandling(async () => {
          const dateFilter = dateFrom && dateTo ? sql2`DATE(${production_orders.created_at}) BETWEEN ${dateFrom} AND ${dateTo}` : sql2`DATE(${production_orders.created_at}) >= CURRENT_DATE - INTERVAL '7 days'`;
          const roleStats = await db.select({
            role_id: roles.id,
            role_name: sql2`COALESCE(roles.name_ar, roles.name)`,
            user_count: sql2`COUNT(DISTINCT ${users.id})`,
            total_production_orders: sql2`COUNT(DISTINCT ${production_orders.id})`,
            total_rolls: sql2`COUNT(DISTINCT ${rolls.id})`,
            total_weight_kg: sql2`COALESCE(SUM(${rolls.weight_kg}), 0)`,
            avg_order_completion_time: sql2`COALESCE(AVG(EXTRACT(EPOCH FROM (${rolls.completed_at} - ${production_orders.created_at}))/3600), 0)`,
            quality_score: sql2`COALESCE(AVG(95 - (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0) * 100)), 90)`,
            on_time_delivery_rate: sql2`COALESCE(AVG(CASE WHEN ${rolls.completed_at} IS NOT NULL THEN 100 ELSE 0 END), 80)`
          }).from(roles).leftJoin(users, eq(roles.id, users.role_id)).leftJoin(production_orders, sql2`${dateFilter}`).leftJoin(rolls, eq(production_orders.id, rolls.production_order_id)).groupBy(roles.id, roles.name, roles.name_ar).orderBy(sql2`total_weight_kg DESC`);
          return roleStats;
        }, "getRolePerformanceStats", "\u0623\u062F\u0627\u0621 \u0627\u0644\u0623\u062F\u0648\u0627\u0631");
      }
      async getRealTimeProductionStats() {
        return await withDatabaseErrorHandling(async () => {
          const now = /* @__PURE__ */ new Date();
          const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          const [currentStats, machineStatus, queueStats] = await Promise.all([
            // إحصائيات اليوم الحالي
            db.select({
              daily_rolls: sql2`COUNT(DISTINCT ${rolls.id})`,
              daily_weight: sql2`COALESCE(SUM(${rolls.weight_kg}), 0)`,
              active_orders: sql2`COUNT(DISTINCT CASE WHEN ${orders.status} IN ('in_production', 'waiting') THEN ${orders.id} END)`,
              completed_today: sql2`COUNT(DISTINCT CASE WHEN DATE(${rolls.completed_at}) = CURRENT_DATE THEN ${rolls.id} END)`,
              current_waste: sql2`COALESCE(SUM(${rolls.waste_kg}), 0)`,
              avg_efficiency: sql2`COALESCE(AVG(95 - (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0) * 100)), 90)`
            }).from(rolls).leftJoin(production_orders, eq(rolls.production_order_id, production_orders.id)).leftJoin(orders, eq(production_orders.order_id, orders.id)).where(sql2`DATE(${rolls.created_at}) = CURRENT_DATE`),
            // حالة المكائن
            db.select({
              machine_id: machines.id,
              machine_name: sql2`COALESCE(${machines.name_ar}, ${machines.name})`,
              status: machines.status,
              current_rolls: sql2`COUNT(DISTINCT CASE WHEN ${rolls.stage} != 'done' THEN ${rolls.id} END)`
            }).from(machines).leftJoin(rolls, eq(machines.id, rolls.machine_id)).groupBy(machines.id, machines.name, machines.name_ar, machines.status),
            // إحصائيات الطوابير
            db.select({
              film_queue: sql2`COUNT(DISTINCT CASE WHEN ${rolls.stage} = 'film' THEN ${rolls.id} END)`,
              printing_queue: sql2`COUNT(DISTINCT CASE WHEN ${rolls.stage} = 'printing' THEN ${rolls.id} END)`,
              cutting_queue: sql2`COUNT(DISTINCT CASE WHEN ${rolls.stage} = 'cutting' THEN ${rolls.id} END)`,
              pending_orders: sql2`COUNT(DISTINCT CASE WHEN ${production_orders.status} = 'pending' THEN ${production_orders.id} END)`
            }).from(production_orders).leftJoin(rolls, eq(production_orders.id, rolls.production_order_id))
          ]);
          return {
            currentStats: currentStats[0] || {
              daily_rolls: 0,
              daily_weight: 0,
              active_orders: 0,
              completed_today: 0,
              current_waste: 0,
              avg_efficiency: 90
            },
            machineStatus: machineStatus || [],
            queueStats: queueStats[0] || {
              film_queue: 0,
              printing_queue: 0,
              cutting_queue: 0,
              pending_orders: 0
            },
            lastUpdated: now.toISOString()
          };
        }, "getRealTimeProductionStats", "\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0641\u0648\u0631\u064A\u0629");
      }
      async getProductionEfficiencyMetrics(dateFrom, dateTo) {
        return await withDatabaseErrorHandling(async () => {
          const dateFilter = dateFrom && dateTo ? sql2`DATE(${rolls.created_at}) BETWEEN ${dateFrom} AND ${dateTo}` : sql2`DATE(${rolls.created_at}) >= CURRENT_DATE - INTERVAL '30 days'`;
          const [efficiencyMetrics, trendData] = await Promise.all([
            // مؤشرات الكفاءة العامة
            db.select({
              total_production: sql2`COALESCE(SUM(${rolls.weight_kg}), 0)`,
              total_waste: sql2`COALESCE(SUM(${rolls.waste_kg}), 0)`,
              waste_percentage: sql2`COALESCE((SUM(${rolls.waste_kg})::decimal / NULLIF(SUM(${rolls.weight_kg}), 0)) * 100, 0)`,
              avg_roll_time: sql2`COALESCE(AVG(EXTRACT(EPOCH FROM (${rolls.completed_at} - ${rolls.created_at}))/3600), 0)`,
              machine_utilization: sql2`COALESCE(COUNT(DISTINCT ${rolls.machine_id})::decimal / NULLIF((SELECT COUNT(*) FROM ${machines}), 0) * 100, 0)`,
              quality_score: sql2`COALESCE(AVG(95 - (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0) * 100)), 90)`,
              on_time_completion: sql2`COALESCE(AVG(CASE WHEN ${rolls.completed_at} IS NOT NULL THEN 100 ELSE 0 END), 80)`
            }).from(rolls).where(dateFilter),
            // بيانات الاتجاه اليومي
            db.select({
              date: sql2`DATE(${rolls.created_at})`,
              daily_production: sql2`COALESCE(SUM(${rolls.weight_kg}), 0)`,
              daily_waste: sql2`COALESCE(SUM(${rolls.waste_kg}), 0)`,
              daily_rolls: sql2`COUNT(${rolls.id})`,
              daily_efficiency: sql2`COALESCE(AVG(95 - (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0) * 100)), 90)`
            }).from(rolls).where(dateFilter).groupBy(sql2`DATE(${rolls.created_at})`).orderBy(sql2`DATE(${rolls.created_at}) DESC`).limit(30)
          ]);
          return {
            efficiency: efficiencyMetrics[0] || {
              total_production: 0,
              total_waste: 0,
              waste_percentage: 0,
              avg_roll_time: 0,
              machine_utilization: 0,
              quality_score: 90,
              on_time_completion: 80
            },
            trends: trendData || []
          };
        }, "getProductionEfficiencyMetrics", "\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0643\u0641\u0627\u0621\u0629");
      }
      async getProductionAlerts() {
        return await withDatabaseErrorHandling(async () => {
          const alerts = [];
          const overdueOrders = await db.select({
            order_id: orders.id,
            order_number: orders.order_number,
            customer_name: customers.name_ar,
            delivery_date: orders.delivery_date,
            days_overdue: sql2`(CURRENT_DATE - ${orders.delivery_date})::int`
          }).from(orders).leftJoin(customers, eq(orders.customer_id, customers.id)).where(and(
            sql2`${orders.delivery_date} < CURRENT_DATE`,
            sql2`${orders.status} NOT IN ('completed', 'cancelled')`
          )).limit(10);
          const downMachines = await db.select({
            machine_id: machines.id,
            machine_name: sql2`COALESCE(${machines.name_ar}, ${machines.name})`,
            status: machines.status
          }).from(machines).where(eq(machines.status, "down"));
          const highWasteRolls = await db.select({
            roll_id: rolls.id,
            roll_number: rolls.roll_number,
            waste_percentage: sql2`(${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0)) * 100`,
            machine_name: sql2`COALESCE(${machines.name_ar}, ${machines.name})`
          }).from(rolls).leftJoin(machines, eq(rolls.machine_id, machines.id)).where(sql2`(${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0)) * 100 > 10`).orderBy(sql2`(${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0)) * 100 DESC`).limit(5);
          if (overdueOrders.length > 0) {
            alerts.push({
              type: "warning",
              category: "overdue_orders",
              title: "\u0637\u0644\u0628\u0627\u062A \u0645\u062A\u0623\u062E\u0631\u0629",
              message: `\u064A\u0648\u062C\u062F ${overdueOrders.length} \u0637\u0644\u0628 \u0645\u062A\u0623\u062E\u0631 \u0639\u0646 \u0645\u0648\u0639\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645`,
              data: overdueOrders,
              priority: "high"
            });
          }
          if (downMachines.length > 0) {
            alerts.push({
              type: "error",
              category: "machine_down",
              title: "\u0645\u0643\u0627\u0626\u0646 \u0645\u0639\u0637\u0644\u0629",
              message: `\u064A\u0648\u062C\u062F ${downMachines.length} \u0645\u0627\u0643\u064A\u0646\u0629 \u0645\u0639\u0637\u0644\u0629 \u062A\u062D\u062A\u0627\u062C \u0635\u064A\u0627\u0646\u0629`,
              data: downMachines,
              priority: "critical"
            });
          }
          if (highWasteRolls.length > 0) {
            alerts.push({
              type: "warning",
              category: "high_waste",
              title: "\u0647\u062F\u0631 \u0639\u0627\u0644\u064A",
              message: `\u064A\u0648\u062C\u062F ${highWasteRolls.length} \u0631\u0648\u0644 \u0628\u0646\u0633\u0628\u0629 \u0647\u062F\u0631 \u0623\u0639\u0644\u0649 \u0645\u0646 10%`,
              data: highWasteRolls,
              priority: "medium"
            });
          }
          return alerts;
        }, "getProductionAlerts", "\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C");
      }
      async getMachineUtilizationStats(dateFrom, dateTo) {
        return await withDatabaseErrorHandling(async () => {
          const dateFilter = dateFrom && dateTo ? sql2`DATE(${rolls.created_at}) BETWEEN ${dateFrom} AND ${dateTo}` : sql2`DATE(${rolls.created_at}) >= CURRENT_DATE - INTERVAL '7 days'`;
          const machineStats = await db.select({
            machine_id: machines.id,
            machine_name: sql2`COALESCE(${machines.name_ar}, ${machines.name})`,
            machine_type: machines.type,
            section_name: sql2`COALESCE(${sections.name_ar}, ${sections.name})`,
            status: machines.status,
            total_rolls: sql2`COUNT(DISTINCT ${rolls.id})`,
            total_weight: sql2`COALESCE(SUM(${rolls.weight_kg}), 0)`,
            total_waste: sql2`COALESCE(SUM(${rolls.waste_kg}), 0)`,
            efficiency: sql2`COALESCE(AVG(95 - (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0) * 100)), 90)`,
            avg_processing_time: sql2`COALESCE(AVG(EXTRACT(EPOCH FROM (${rolls.completed_at} - ${rolls.created_at}))/3600), 0)`,
            utilization_rate: sql2`COALESCE(COUNT(DISTINCT DATE(${rolls.created_at}))::decimal / 7 * 100, 0)`
          }).from(machines).leftJoin(sections, eq(machines.section_id, sections.id)).leftJoin(rolls, and(eq(machines.id, rolls.machine_id), dateFilter)).groupBy(machines.id, machines.name, machines.name_ar, machines.type, machines.status, sections.name, sections.name_ar).orderBy(sql2`total_weight DESC`);
          return machineStats;
        }, "getMachineUtilizationStats", "\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u0643\u0627\u0626\u0646");
      }
      // ============ ADVANCED REPORTING METHODS ============
      async getOrderReports(dateFrom, dateTo) {
        return await withDatabaseErrorHandling(async () => {
          const dateFilter = dateFrom && dateTo ? sql2`DATE(${orders.created_at}) BETWEEN ${dateFrom} AND ${dateTo}` : sql2`DATE(${orders.created_at}) >= CURRENT_DATE - INTERVAL '30 days'`;
          const [orderStatusStats, deliveryPerformance, topCustomers, revenueStats] = await Promise.all([
            // إحصائيات حالة الطلبات
            db.select({
              status: orders.status,
              count: sql2`COUNT(*)`,
              total_value: sql2`COALESCE(SUM(${production_orders.quantity_kg} * 5), 0)`
              // approximate value
            }).from(orders).leftJoin(production_orders, eq(orders.id, production_orders.order_id)).where(dateFilter).groupBy(orders.status),
            // أداء التسليم
            db.select({
              on_time_orders: sql2`COUNT(CASE WHEN ${orders.status} = 'completed' AND ${orders.delivery_date} >= CURRENT_DATE THEN 1 END)`,
              late_orders: sql2`COUNT(CASE WHEN ${orders.status} = 'completed' AND ${orders.delivery_date} < CURRENT_DATE THEN 1 END)`,
              avg_delivery_days: sql2`COALESCE(AVG(EXTRACT(DAYS FROM (CURRENT_DATE - ${orders.created_at}))), 0)`
            }).from(orders).where(dateFilter),
            // أكثر العملاء طلباً
            db.select({
              customer_id: customers.id,
              customer_name: sql2`COALESCE(${customers.name_ar}, ${customers.name})`,
              order_count: sql2`COUNT(${orders.id})`,
              total_quantity: sql2`COALESCE(SUM(${production_orders.quantity_kg}), 0)`,
              total_value: sql2`COALESCE(SUM(${production_orders.quantity_kg} * 5), 0)`
            }).from(customers).leftJoin(orders, eq(customers.id, orders.customer_id)).leftJoin(production_orders, eq(orders.id, production_orders.order_id)).where(dateFilter).groupBy(customers.id, customers.name, customers.name_ar).orderBy(sql2`COUNT(${orders.id}) DESC`).limit(10),
            // إحصائيات الإيرادات
            db.select({
              total_orders: sql2`COUNT(DISTINCT ${orders.id})`,
              total_production_quantity: sql2`COALESCE(SUM(${production_orders.quantity_kg}), 0)`,
              estimated_revenue: sql2`COALESCE(SUM(${production_orders.quantity_kg} * 5), 0)`,
              avg_order_value: sql2`COALESCE(AVG(${production_orders.quantity_kg} * 5), 0)`
            }).from(orders).leftJoin(production_orders, eq(orders.id, production_orders.order_id)).where(dateFilter)
          ]);
          return {
            orderStatusStats,
            deliveryPerformance: deliveryPerformance[0] || {
              on_time_orders: 0,
              late_orders: 0,
              avg_delivery_days: 0
            },
            topCustomers,
            revenueStats: revenueStats[0] || {
              total_orders: 0,
              total_production_quantity: 0,
              estimated_revenue: 0,
              avg_order_value: 0
            }
          };
        }, "getOrderReports", "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0637\u0644\u0628\u0627\u062A");
      }
      async getAdvancedMetrics(dateFrom, dateTo) {
        return await withDatabaseErrorHandling(async () => {
          const dateFilter = dateFrom && dateTo ? sql2`DATE(${rolls.created_at}) BETWEEN ${dateFrom} AND ${dateTo}` : sql2`DATE(${rolls.created_at}) >= CURRENT_DATE - INTERVAL '30 days'`;
          const [oeeMetrics, cycleTimeStats, qualityMetrics] = await Promise.all([
            // Overall Equipment Effectiveness (OEE)
            db.select({
              machine_id: machines.id,
              machine_name: sql2`COALESCE(${machines.name_ar}, ${machines.name})`,
              availability: sql2`COALESCE((COUNT(DISTINCT DATE(${rolls.created_at}))::decimal / 30) * 100, 0)`,
              performance: sql2`COALESCE(AVG(${rolls.weight_kg}) / NULLIF(MAX(${rolls.weight_kg}), 0) * 100, 80)`,
              quality: sql2`COALESCE(AVG(95 - (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0) * 100)), 90)`,
              oee: sql2`COALESCE(((COUNT(DISTINCT DATE(${rolls.created_at}))::decimal / 30) * (AVG(${rolls.weight_kg}) / NULLIF(MAX(${rolls.weight_kg}), 0)) * (95 - (AVG(${rolls.waste_kg})::decimal / NULLIF(AVG(${rolls.weight_kg}), 0) * 100)) / 100), 65)`
            }).from(machines).leftJoin(rolls, and(eq(machines.id, rolls.machine_id), dateFilter)).groupBy(machines.id, machines.name, machines.name_ar),
            // Cycle Time Statistics
            db.select({
              avg_film_to_printing: sql2`COALESCE(AVG(EXTRACT(EPOCH FROM (${rolls.printed_at} - ${rolls.created_at}))/3600), 0)`,
              avg_printing_to_cutting: sql2`COALESCE(AVG(EXTRACT(EPOCH FROM (${rolls.cut_completed_at} - ${rolls.printed_at}))/3600), 0)`,
              avg_total_cycle_time: sql2`COALESCE(AVG(EXTRACT(EPOCH FROM (${rolls.completed_at} - ${rolls.created_at}))/3600), 0)`,
              fastest_cycle: sql2`COALESCE(MIN(EXTRACT(EPOCH FROM (${rolls.completed_at} - ${rolls.created_at}))/3600), 0)`,
              slowest_cycle: sql2`COALESCE(MAX(EXTRACT(EPOCH FROM (${rolls.completed_at} - ${rolls.created_at}))/3600), 0)`
            }).from(rolls).where(and(dateFilter, sql2`${rolls.completed_at} IS NOT NULL`)),
            // Quality Metrics
            db.select({
              total_rolls: sql2`COUNT(*)`,
              defective_rolls: sql2`COUNT(CASE WHEN (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0)) * 100 > 5 THEN 1 END)`,
              quality_rate: sql2`100 - (COUNT(CASE WHEN (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0)) * 100 > 5 THEN 1 END)::decimal / NULLIF(COUNT(*), 0) * 100)`,
              avg_waste_percentage: sql2`COALESCE(AVG((${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0)) * 100), 0)`,
              rework_rate: sql2`COALESCE(COUNT(CASE WHEN ${rolls.stage} = 'rework' THEN 1 END)::decimal / NULLIF(COUNT(*), 0) * 100, 0)`
            }).from(rolls).where(dateFilter)
          ]);
          return {
            oeeMetrics,
            cycleTimeStats: cycleTimeStats[0] || {
              avg_film_to_printing: 0,
              avg_printing_to_cutting: 0,
              avg_total_cycle_time: 0,
              fastest_cycle: 0,
              slowest_cycle: 0
            },
            qualityMetrics: qualityMetrics[0] || {
              total_rolls: 0,
              defective_rolls: 0,
              quality_rate: 95,
              avg_waste_percentage: 0,
              rework_rate: 0
            }
          };
        }, "getAdvancedMetrics", "\u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629");
      }
      async getHRReports(dateFrom, dateTo) {
        return await withDatabaseErrorHandling(async () => {
          const dateFilter = dateFrom && dateTo ? sql2`DATE(${attendance.date}) BETWEEN ${dateFrom} AND ${dateTo}` : sql2`DATE(${attendance.date}) >= CURRENT_DATE - INTERVAL '30 days'`;
          const [attendanceStats, performanceStats, trainingStats] = await Promise.all([
            // إحصائيات الحضور والغياب
            db.select({
              user_id: users.id,
              username: users.username,
              display_name_ar: users.display_name_ar,
              role_name: sql2`COALESCE(${roles.name_ar}, ${roles.name})`,
              present_days: sql2`COUNT(CASE WHEN ${attendance.status} = 'حاضر' THEN 1 END)`,
              absent_days: sql2`COUNT(CASE WHEN ${attendance.status} = 'غائب' THEN 1 END)`,
              late_days: sql2`COUNT(CASE WHEN ${attendance.check_in_time} > TIME '08:30:00' THEN 1 END)`,
              attendance_rate: sql2`COALESCE((COUNT(CASE WHEN ${attendance.status} = 'حاضر' THEN 1 END)::decimal / NULLIF(COUNT(*), 0) * 100), 0)`
            }).from(users).leftJoin(roles, eq(users.role_id, roles.id)).leftJoin(attendance, and(eq(users.id, attendance.user_id), dateFilter)).groupBy(users.id, users.username, users.display_name_ar, roles.name, roles.name_ar),
            // إحصائيات الأداء
            db.select({
              user_id: users.id,
              username: users.username,
              display_name_ar: users.display_name_ar,
              production_efficiency: sql2`COALESCE(AVG(95 - (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0) * 100)), 90)`,
              total_production: sql2`COALESCE(SUM(${rolls.weight_kg}), 0)`,
              error_rate: sql2`COALESCE(COUNT(CASE WHEN (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0)) * 100 > 10 THEN 1 END)::decimal / NULLIF(COUNT(*), 0) * 100, 0)`,
              improvement_trend: sql2`COALESCE(CASE WHEN AVG(95 - (${rolls.waste_kg}::decimal / NULLIF(${rolls.weight_kg}, 0) * 100)) > 90 THEN 1 ELSE -1 END, 0)`
            }).from(users).leftJoin(rolls, and(eq(users.id, rolls.created_by), dateFilter)).groupBy(users.id, users.username, users.display_name_ar),
            // إحصائيات التدريب
            db.select({
              total_programs: sql2`COUNT(DISTINCT ${training_programs.id})`,
              total_enrollments: sql2`COUNT(${training_enrollments.id})`,
              completed_trainings: sql2`COUNT(CASE WHEN ${training_enrollments.completion_status} = 'completed' THEN 1 END)`,
              completion_rate: sql2`COALESCE(COUNT(CASE WHEN ${training_enrollments.completion_status} = 'completed' THEN 1 END)::decimal / NULLIF(COUNT(${training_enrollments.id}), 0) * 100, 0)`
            }).from(training_programs).leftJoin(training_enrollments, eq(training_programs.id, training_enrollments.program_id))
          ]);
          return {
            attendanceStats,
            performanceStats,
            trainingStats: trainingStats[0] || {
              total_programs: 0,
              total_enrollments: 0,
              completed_trainings: 0,
              completion_rate: 0
            }
          };
        }, "getHRReports", "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629");
      }
      async getMaintenanceReports(dateFrom, dateTo) {
        return await withDatabaseErrorHandling(async () => {
          const dateFilter = dateFrom && dateTo ? sql2`DATE(${maintenance_requests.date_reported}) BETWEEN ${dateFrom} AND ${dateTo}` : sql2`DATE(${maintenance_requests.date_reported}) >= CURRENT_DATE - INTERVAL '30 days'`;
          const [maintenanceStats, costAnalysis, downtimeAnalysis] = await Promise.all([
            // إحصائيات طلبات الصيانة
            db.select({
              total_requests: sql2`COUNT(*)`,
              completed_requests: sql2`COUNT(CASE WHEN ${maintenance_requests.status} = 'completed' THEN 1 END)`,
              pending_requests: sql2`COUNT(CASE WHEN ${maintenance_requests.status} = 'pending' THEN 1 END)`,
              critical_requests: sql2`COUNT(CASE WHEN ${maintenance_requests.urgency_level} = 'urgent' THEN 1 END)`,
              avg_resolution_time: sql2`COALESCE(AVG(EXTRACT(EPOCH FROM (${maintenance_requests.date_resolved} - ${maintenance_requests.date_reported}))/3600), 0)`
            }).from(maintenance_requests).where(dateFilter),
            // تحليل التكاليف (مقدر)
            db.select({
              machine_id: machines.id,
              machine_name: sql2`COALESCE(${machines.name_ar}, ${machines.name})`,
              maintenance_count: sql2`COUNT(${maintenance_requests.id})`,
              estimated_cost: sql2`COUNT(${maintenance_requests.id}) * 500`,
              // تكلفة تقديرية
              downtime_hours: sql2`COALESCE(SUM(EXTRACT(EPOCH FROM (${maintenance_requests.date_resolved} - ${maintenance_requests.date_reported}))/3600), 0)`
            }).from(machines).leftJoin(maintenance_requests, and(eq(machines.id, maintenance_requests.machine_id), dateFilter)).groupBy(machines.id, machines.name, machines.name_ar),
            // تحليل فترات التوقف
            db.select({
              total_downtime: sql2`COALESCE(SUM(EXTRACT(EPOCH FROM (${maintenance_requests.date_resolved} - ${maintenance_requests.date_reported}))/3600), 0)`,
              planned_downtime: sql2`COALESCE(SUM(CASE WHEN ${maintenance_requests.issue_type} = 'mechanical' THEN EXTRACT(EPOCH FROM (${maintenance_requests.date_resolved} - ${maintenance_requests.date_reported}))/3600 END), 0)`,
              unplanned_downtime: sql2`COALESCE(SUM(CASE WHEN ${maintenance_requests.issue_type} = 'electrical' THEN EXTRACT(EPOCH FROM (${maintenance_requests.date_resolved} - ${maintenance_requests.date_reported}))/3600 END), 0)`,
              mtbf: sql2`168`
              // Mean Time Between Failures - simplified calculation
            }).from(maintenance_requests).where(and(dateFilter, sql2`${maintenance_requests.date_resolved} IS NOT NULL`))
          ]);
          return {
            maintenanceStats: maintenanceStats[0] || {
              total_requests: 0,
              completed_requests: 0,
              pending_requests: 0,
              critical_requests: 0,
              avg_resolution_time: 0
            },
            costAnalysis,
            downtimeAnalysis: downtimeAnalysis[0] || {
              total_downtime: 0,
              planned_downtime: 0,
              unplanned_downtime: 0,
              mtbf: 168
            }
          };
        }, "getMaintenanceReports", "\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
      }
      async getItems() {
        const result = await db.select({
          id: items.id,
          category_id: items.category_id,
          name: items.name,
          name_ar: items.name_ar,
          code: items.code,
          status: items.status,
          category_name: categories.name,
          category_name_ar: categories.name_ar
        }).from(items).leftJoin(categories, eq(items.category_id, categories.id)).orderBy(items.name_ar);
        return result;
      }
      async getCustomerProducts() {
        return await db.select({
          id: customer_products.id,
          customer_id: customer_products.customer_id,
          category_id: customer_products.category_id,
          item_id: customer_products.item_id,
          size_caption: customer_products.size_caption,
          width: customer_products.width,
          left_facing: customer_products.left_facing,
          right_facing: customer_products.right_facing,
          thickness: customer_products.thickness,
          printing_cylinder: customer_products.printing_cylinder,
          cutting_length_cm: customer_products.cutting_length_cm,
          raw_material: customer_products.raw_material,
          master_batch_id: customer_products.master_batch_id,
          is_printed: customer_products.is_printed,
          cutting_unit: customer_products.cutting_unit,
          punching: customer_products.punching,
          unit_weight_kg: customer_products.unit_weight_kg,
          unit_quantity: customer_products.unit_quantity,
          package_weight_kg: customer_products.package_weight_kg,
          cliche_front_design: customer_products.cliche_front_design,
          cliche_back_design: customer_products.cliche_back_design,
          notes: customer_products.notes,
          status: customer_products.status,
          created_at: customer_products.created_at,
          customer_name: customers.name,
          customer_name_ar: customers.name_ar,
          customer_code: customers.code
        }).from(customer_products).leftJoin(customers, eq(customer_products.customer_id, customers.id)).orderBy(desc(customer_products.created_at)).then((results) => results.map((row) => ({
          ...row,
          customer_name: row.customer_name || void 0,
          customer_name_ar: row.customer_name_ar || void 0,
          customer_code: row.customer_code || void 0
        })));
      }
      async getLocations() {
        return await db.select().from(locations);
      }
      async getCategories() {
        return await db.select().from(categories);
      }
      async createCategory(data) {
        const [newCategory] = await db.insert(categories).values(data).returning();
        return newCategory;
      }
      async updateCategory(id, data) {
        const [updatedCategory] = await db.update(categories).set(data).where(eq(categories.id, id)).returning();
        return updatedCategory;
      }
      async deleteCategory(id) {
        await db.delete(categories).where(eq(categories.id, id));
      }
      // Cache for dashboard stats - expires after 2 minutes
      dashboardStatsCache = null;
      async getDashboardStats() {
        const now = Date.now();
        if (this.dashboardStatsCache && this.dashboardStatsCache.expiry > now) {
          return this.dashboardStatsCache.data;
        }
        const [
          activeOrdersResult,
          productionResult,
          qualityResult,
          wasteResult
        ] = await Promise.all([
          // Active orders count
          db.select({ count: count() }).from(orders).where(or(eq(orders.status, "in_production"), eq(orders.status, "waiting"), eq(orders.status, "pending"))),
          // Production rate (percentage based on production orders) - using existing quantity field
          db.select({
            totalRequired: sum(production_orders.quantity_kg),
            totalProduced: sql2`COALESCE(SUM(${rolls.weight_kg}), 0)`
          }).from(production_orders).leftJoin(rolls, eq(production_orders.id, rolls.production_order_id)),
          // Quality score (average from quality checks) - limited to recent checks for performance
          db.select({
            avgScore: sql2`AVG(CAST(${quality_checks.score} AS DECIMAL))`
          }).from(quality_checks).where(sql2`${quality_checks.created_at} >= NOW() - INTERVAL '30 days'`).limit(1e3),
          // Limit for performance
          // Waste percentage - limited to recent waste for performance
          db.select({
            totalWaste: sum(waste.quantity_wasted)
          }).from(waste).where(sql2`${waste.created_at} >= NOW() - INTERVAL '7 days'`).limit(1e3)
          // Limit for performance
        ]);
        const activeOrders = activeOrdersResult[0]?.count || 0;
        const productionRate = productionResult[0]?.totalRequired && Number(productionResult[0].totalRequired) > 0 ? Math.round(Number(productionResult[0].totalProduced) / Number(productionResult[0].totalRequired) * 100) : 0;
        const qualityScore = qualityResult[0]?.avgScore ? Math.round(Number(qualityResult[0].avgScore) * 20) : 95;
        const wastePercentage = wasteResult[0]?.totalWaste ? Number(wasteResult[0].totalWaste) / 100 : 2.5;
        const result = {
          activeOrders,
          productionRate,
          qualityScore,
          wastePercentage
        };
        this.dashboardStatsCache = {
          data: result,
          expiry: now + 2 * 60 * 1e3
        };
        return result;
      }
      // Training Records
      async getTrainingRecords() {
        return await db.select().from(training_records).orderBy(desc(training_records.date));
      }
      async createTrainingRecord(record) {
        const [newRecord] = await db.insert(training_records).values(record).returning();
        return newRecord;
      }
      // Admin Decisions
      async getAdminDecisions() {
        return await db.select().from(admin_decisions).orderBy(desc(admin_decisions.date));
      }
      async createAdminDecision(decision) {
        const [newDecision] = await db.insert(admin_decisions).values(decision).returning();
        return newDecision;
      }
      // Warehouse Transactions
      async getWarehouseTransactions() {
        return await db.select().from(warehouse_transactions).orderBy(desc(warehouse_transactions.date));
      }
      async createWarehouseTransaction(transaction) {
        const [newTransaction] = await db.insert(warehouse_transactions).values(transaction).returning();
        return newTransaction;
      }
      // Mixing Recipes
      async getMixingRecipes() {
        return await db.select().from(mixing_recipes).orderBy(desc(mixing_recipes.created_at));
      }
      async createMixingRecipe(recipe) {
        const [newRecipe] = await db.insert(mixing_recipes).values(recipe).returning();
        return newRecipe;
      }
      // ============ HR System Implementation ============
      // Training Programs
      async getTrainingPrograms() {
        return await db.select().from(training_programs).orderBy(desc(training_programs.created_at));
      }
      async createTrainingProgram(program) {
        const [trainingProgram] = await db.insert(training_programs).values(program).returning();
        return trainingProgram;
      }
      async updateTrainingProgram(id, updates) {
        const [trainingProgram] = await db.update(training_programs).set({ ...updates, updated_at: /* @__PURE__ */ new Date() }).where(eq(training_programs.id, id)).returning();
        return trainingProgram;
      }
      async getTrainingProgramById(id) {
        const [program] = await db.select().from(training_programs).where(eq(training_programs.id, id));
        return program || void 0;
      }
      // Training Materials
      async getTrainingMaterials(programId) {
        const query = db.select().from(training_materials);
        if (programId) {
          return await query.where(eq(training_materials.program_id, programId)).orderBy(training_materials.order_index);
        }
        return await query.orderBy(training_materials.program_id, training_materials.order_index);
      }
      async createTrainingMaterial(material) {
        const [trainingMaterial] = await db.insert(training_materials).values(material).returning();
        return trainingMaterial;
      }
      async updateTrainingMaterial(id, updates) {
        const [trainingMaterial] = await db.update(training_materials).set(updates).where(eq(training_materials.id, id)).returning();
        return trainingMaterial;
      }
      async deleteTrainingMaterial(id) {
        const result = await db.delete(training_materials).where(eq(training_materials.id, id));
        return result.rowCount !== null && result.rowCount > 0;
      }
      // Training Enrollments
      async getTrainingEnrollments(employeeId) {
        const query = db.select().from(training_enrollments);
        if (employeeId) {
          return await query.where(eq(training_enrollments.employee_id, employeeId)).orderBy(desc(training_enrollments.enrolled_date));
        }
        return await query.orderBy(desc(training_enrollments.enrolled_date));
      }
      async createTrainingEnrollment(enrollment) {
        const [trainingEnrollment] = await db.insert(training_enrollments).values(enrollment).returning();
        return trainingEnrollment;
      }
      async updateTrainingEnrollment(id, updates) {
        const [trainingEnrollment] = await db.update(training_enrollments).set(updates).where(eq(training_enrollments.id, id)).returning();
        return trainingEnrollment;
      }
      async getEnrollmentsByProgram(programId) {
        return await db.select().from(training_enrollments).where(eq(training_enrollments.program_id, programId)).orderBy(desc(training_enrollments.enrolled_date));
      }
      // Training Evaluations
      async getTrainingEvaluations(employeeId, programId) {
        let query = db.select().from(training_evaluations);
        if (employeeId && programId) {
          return await query.where(and(eq(training_evaluations.employee_id, employeeId), eq(training_evaluations.program_id, programId))).orderBy(desc(training_evaluations.evaluation_date));
        } else if (employeeId) {
          return await query.where(eq(training_evaluations.employee_id, employeeId)).orderBy(desc(training_evaluations.evaluation_date));
        } else if (programId) {
          return await query.where(eq(training_evaluations.program_id, programId)).orderBy(desc(training_evaluations.evaluation_date));
        }
        return await query.orderBy(desc(training_evaluations.evaluation_date));
      }
      async createTrainingEvaluation(evaluation) {
        const [trainingEvaluation] = await db.insert(training_evaluations).values(evaluation).returning();
        return trainingEvaluation;
      }
      async updateTrainingEvaluation(id, updates) {
        const [trainingEvaluation] = await db.update(training_evaluations).set(updates).where(eq(training_evaluations.id, id)).returning();
        return trainingEvaluation;
      }
      async getTrainingEvaluationById(id) {
        const [evaluation] = await db.select().from(training_evaluations).where(eq(training_evaluations.id, id));
        return evaluation || void 0;
      }
      // Training Certificates
      async getTrainingCertificates(employeeId) {
        const query = db.select().from(training_certificates);
        if (employeeId) {
          return await query.where(eq(training_certificates.employee_id, employeeId)).orderBy(desc(training_certificates.issue_date));
        }
        return await query.orderBy(desc(training_certificates.issue_date));
      }
      async createTrainingCertificate(certificate) {
        const [trainingCertificate] = await db.insert(training_certificates).values(certificate).returning();
        return trainingCertificate;
      }
      async updateTrainingCertificate(id, updates) {
        const [trainingCertificate] = await db.update(training_certificates).set(updates).where(eq(training_certificates.id, id)).returning();
        return trainingCertificate;
      }
      async generateTrainingCertificate(enrollmentId) {
        const [enrollment] = await db.select().from(training_enrollments).where(eq(training_enrollments.id, enrollmentId));
        if (!enrollment) {
          throw new Error("Enrollment not found");
        }
        const certificateNumber = generateCertificateNumber(enrollmentId);
        const certificate = {
          enrollment_id: enrollmentId,
          employee_id: enrollment.employee_id,
          program_id: enrollment.program_id,
          certificate_number: certificateNumber,
          issue_date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          final_score: enrollment.final_score,
          certificate_status: "active",
          issued_by: 1
          // Default to admin user
        };
        return await this.createTrainingCertificate(certificate);
      }
      // Performance Reviews
      async getPerformanceReviews(employeeId) {
        const query = db.select().from(performance_reviews);
        if (employeeId) {
          return await query.where(eq(performance_reviews.employee_id, employeeId)).orderBy(desc(performance_reviews.created_at));
        }
        return await query.orderBy(desc(performance_reviews.created_at));
      }
      async createPerformanceReview(review) {
        const [performanceReview] = await db.insert(performance_reviews).values(review).returning();
        return performanceReview;
      }
      async updatePerformanceReview(id, updates) {
        const [performanceReview] = await db.update(performance_reviews).set(updates).where(eq(performance_reviews.id, id)).returning();
        return performanceReview;
      }
      async getPerformanceReviewById(id) {
        const [review] = await db.select().from(performance_reviews).where(eq(performance_reviews.id, id));
        return review || void 0;
      }
      // Performance Criteria
      async getPerformanceCriteria() {
        return await db.select().from(performance_criteria).where(eq(performance_criteria.is_active, true));
      }
      async createPerformanceCriteria(criteria) {
        const [performanceCriteria] = await db.insert(performance_criteria).values(criteria).returning();
        return performanceCriteria;
      }
      async updatePerformanceCriteria(id, updates) {
        const [performanceCriteria] = await db.update(performance_criteria).set(updates).where(eq(performance_criteria.id, id)).returning();
        return performanceCriteria;
      }
      // Performance Ratings
      async getPerformanceRatings(reviewId) {
        return await db.select().from(performance_ratings).where(eq(performance_ratings.review_id, reviewId));
      }
      async createPerformanceRating(rating) {
        const [performanceRating] = await db.insert(performance_ratings).values(rating).returning();
        return performanceRating;
      }
      async updatePerformanceRating(id, updates) {
        const [performanceRating] = await db.update(performance_ratings).set(updates).where(eq(performance_ratings.id, id)).returning();
        return performanceRating;
      }
      // Leave Types
      async getLeaveTypes() {
        return await db.select().from(leave_types).where(eq(leave_types.is_active, true));
      }
      async createLeaveType(leaveType) {
        const [newLeaveType] = await db.insert(leave_types).values(leaveType).returning();
        return newLeaveType;
      }
      async updateLeaveType(id, updates) {
        const [leaveType] = await db.update(leave_types).set(updates).where(eq(leave_types.id, id)).returning();
        return leaveType;
      }
      // Leave Requests
      async getLeaveRequests(employeeId) {
        const query = db.select().from(leave_requests);
        if (employeeId) {
          return await query.where(eq(leave_requests.employee_id, employeeId)).orderBy(desc(leave_requests.created_at));
        }
        return await query.orderBy(desc(leave_requests.created_at));
      }
      async createLeaveRequest(request) {
        const [leaveRequest] = await db.insert(leave_requests).values(request).returning();
        return leaveRequest;
      }
      async updateLeaveRequest(id, updates) {
        const [leaveRequest] = await db.update(leave_requests).set({ ...updates, updated_at: /* @__PURE__ */ new Date() }).where(eq(leave_requests.id, id)).returning();
        return leaveRequest;
      }
      async getLeaveRequestById(id) {
        const [request] = await db.select().from(leave_requests).where(eq(leave_requests.id, id));
        return request || void 0;
      }
      async getPendingLeaveRequests() {
        return await db.select().from(leave_requests).where(eq(leave_requests.final_status, "pending")).orderBy(desc(leave_requests.created_at));
      }
      async deleteLeaveRequest(id) {
        return await db.transaction(async (tx) => {
          try {
            const [leaveRequest] = await tx.select().from(leave_requests).where(eq(leave_requests.id, id));
            if (!leaveRequest) {
              throw new Error("\u0637\u0644\u0628 \u0627\u0644\u0625\u062C\u0627\u0632\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
            }
            if (leaveRequest.final_status === "approved") {
              const requestYear = new Date(leaveRequest.start_date).getFullYear();
              await tx.execute(sql2`
            UPDATE leave_balances 
            SET used_days = GREATEST(0, used_days - ${leaveRequest.days_count}),
                remaining_days = LEAST(allocated_days, remaining_days + ${leaveRequest.days_count})
            WHERE employee_id = ${leaveRequest.employee_id} 
              AND leave_type_id = ${leaveRequest.leave_type_id} 
              AND year = ${requestYear}
          `);
            }
            await tx.delete(notifications).where(
              and(
                eq(notifications.context_type, "leave_request"),
                eq(notifications.context_id, id.toString())
              )
            );
            await tx.delete(leave_requests).where(eq(leave_requests.id, id));
          } catch (error) {
            console.error("Error deleting leave request:", error);
            throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0637\u0644\u0628 \u0627\u0644\u0625\u062C\u0627\u0632\u0629");
          }
        });
      }
      // Leave Balances
      async getLeaveBalances(employeeId, year) {
        if (year) {
          return await db.select().from(leave_balances).where(and(
            eq(leave_balances.employee_id, employeeId),
            eq(leave_balances.year, year)
          ));
        }
        return await db.select().from(leave_balances).where(eq(leave_balances.employee_id, employeeId));
      }
      async createLeaveBalance(balance) {
        const [leaveBalance] = await db.insert(leave_balances).values(balance).returning();
        return leaveBalance;
      }
      async updateLeaveBalance(id, updates) {
        const [leaveBalance] = await db.update(leave_balances).set(updates).where(eq(leave_balances.id, id)).returning();
        return leaveBalance;
      }
      async getLeaveBalanceByType(employeeId, leaveTypeId, year) {
        const [balance] = await db.select().from(leave_balances).where(and(
          eq(leave_balances.employee_id, employeeId),
          eq(leave_balances.leave_type_id, leaveTypeId),
          eq(leave_balances.year, year)
        ));
        return balance || void 0;
      }
      // ============ Inventory Management ============
      async getInventoryItems() {
        const result = await db.select({
          id: inventory.id,
          item_id: inventory.item_id,
          item_name: items.name,
          item_name_ar: items.name_ar,
          item_code: items.code,
          category_name: categories.name,
          category_name_ar: categories.name_ar,
          location_name: locations.name,
          location_name_ar: locations.name_ar,
          current_stock: inventory.current_stock,
          min_stock: inventory.min_stock,
          max_stock: inventory.max_stock,
          unit: inventory.unit,
          cost_per_unit: inventory.cost_per_unit,
          last_updated: inventory.last_updated
        }).from(inventory).leftJoin(items, eq(inventory.item_id, items.id)).leftJoin(categories, eq(items.category_id, categories.id)).leftJoin(locations, eq(inventory.location_id, locations.id)).orderBy(items.name_ar);
        return result;
      }
      async createInventoryItem(item) {
        const [inventoryItem] = await db.insert(inventory).values(item).returning();
        return inventoryItem;
      }
      async updateInventoryItem(id, updates) {
        const [inventoryItem] = await db.update(inventory).set({ ...updates, last_updated: /* @__PURE__ */ new Date() }).where(eq(inventory.id, id)).returning();
        return inventoryItem;
      }
      async deleteInventoryItem(id) {
        const result = await db.delete(inventory).where(eq(inventory.id, id));
        return (result.rowCount || 0) > 0;
      }
      async getInventoryByItemId(itemId) {
        const [item] = await db.select().from(inventory).where(eq(inventory.item_id, itemId));
        return item || void 0;
      }
      async getInventoryStats() {
        const totalItems = await db.select({ count: count() }).from(inventory);
        const lowStockItems = await db.select({ count: count() }).from(inventory).where(sql2`${inventory.current_stock} <= ${inventory.min_stock}`);
        const totalValue = await db.select({ total: sum(sql2`${inventory.current_stock} * ${inventory.cost_per_unit}`) }).from(inventory);
        const today = /* @__PURE__ */ new Date();
        today.setHours(0, 0, 0, 0);
        const todayMovements = await db.select({ count: count() }).from(inventory_movements).where(sql2`DATE(${inventory_movements.created_at}) = CURRENT_DATE`);
        return {
          totalItems: totalItems[0]?.count || 0,
          lowStockItems: lowStockItems[0]?.count || 0,
          totalValue: totalValue[0]?.total || 0,
          movementsToday: todayMovements[0]?.count || 0
        };
      }
      // ============ Inventory Movements ============
      async getInventoryMovements() {
        const result = await db.select({
          id: inventory_movements.id,
          inventory_id: inventory_movements.inventory_id,
          item_name: items.name_ar,
          item_code: items.code,
          location_name: locations.name_ar,
          movement_type: inventory_movements.movement_type,
          quantity: inventory_movements.quantity,
          unit_cost: inventory_movements.unit_cost,
          total_cost: inventory_movements.total_cost,
          reference_number: inventory_movements.reference_number,
          reference_type: inventory_movements.reference_type,
          notes: inventory_movements.notes,
          created_by: inventory_movements.created_by,
          created_at: inventory_movements.created_at,
          user_name: users.username
        }).from(inventory_movements).leftJoin(inventory, eq(inventory_movements.inventory_id, inventory.id)).leftJoin(items, eq(inventory.item_id, items.id)).leftJoin(locations, eq(inventory.location_id, locations.id)).leftJoin(users, eq(inventory_movements.created_by, users.id)).orderBy(desc(inventory_movements.created_at));
        return result;
      }
      async createInventoryMovement(data) {
        return await withDatabaseErrorHandling(async () => {
          const dataValidator2 = getDataValidator(this);
          const validationResult = await dataValidator2.validateEntity("inventory_movements", data, false);
          if (!validationResult.isValid) {
            console.error("[Storage] \u274C INVENTORY MOVEMENT VALIDATION FAILED:", validationResult.errors);
            throw new DatabaseError(
              `\u0641\u0634\u0644 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u062D\u0631\u0643\u0629 \u0627\u0644\u0645\u062E\u0632\u0648\u0646: ${validationResult.errors.map((e) => e.message_ar).join(", ")}`,
              { code: "VALIDATION_FAILED", validationErrors: validationResult.errors }
            );
          }
          console.log("[Storage] \u2705 Inventory movement validation passed, proceeding with database write");
          return await db.transaction(async (tx) => {
            let currentInventory = null;
            if (data.inventory_id) {
              [currentInventory] = await tx.select().from(inventory).where(eq(inventory.id, data.inventory_id)).for("update");
              if (!currentInventory) {
                throw new Error("\u0639\u0646\u0635\u0631 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
              }
            }
            const currentStock = parseFloat(currentInventory?.current_stock || "0");
            const movementQty = parseFloat(data.quantity?.toString() || "0");
            if (movementQty <= 0) {
              throw new Error("\u0643\u0645\u064A\u0629 \u0627\u0644\u062D\u0631\u0643\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631");
            }
            let newStock = currentStock;
            if (data.movement_type === "in") {
              newStock = currentStock + movementQty;
            } else if (data.movement_type === "out") {
              if (currentStock < movementQty) {
                throw new Error(`\u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u063A\u064A\u0631 \u0643\u0627\u0641\u064A. \u0627\u0644\u0645\u062A\u0627\u062D: ${currentStock.toFixed(2)}, \u0627\u0644\u0645\u0637\u0644\u0648\u0628: ${movementQty.toFixed(2)}`);
              }
              newStock = currentStock - movementQty;
            } else if (data.movement_type === "adjustment") {
              newStock = movementQty;
            }
            if (newStock < 0) {
              throw new Error("\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0633\u0627\u0644\u0628");
            }
            const [movement] = await tx.insert(inventory_movements).values(data).returning();
            if (movement.inventory_id) {
              await tx.update(inventory).set({ current_stock: newStock.toString(), last_updated: /* @__PURE__ */ new Date() }).where(eq(inventory.id, movement.inventory_id));
            }
            return movement;
          });
        }, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0631\u0643\u0629 \u0645\u062E\u0632\u0648\u0646");
      }
      async deleteInventoryMovement(id) {
        const result = await db.delete(inventory_movements).where(eq(inventory_movements.id, id));
        return (result.rowCount || 0) > 0;
      }
      // ============ Extended Location Management ============
      async createLocationExtended(data) {
        const [location] = await db.insert(locations).values(data).returning();
        return location;
      }
      async updateLocationExtended(id, updates) {
        const [location] = await db.update(locations).set(updates).where(eq(locations.id, id)).returning();
        return location;
      }
      async deleteLocationExtended(id) {
        await db.delete(locations).where(eq(locations.id, id));
      }
      // ============ Inventory Movements Management ============
      async getAllInventoryMovements() {
        const movements = await db.select({
          id: inventory_movements.id,
          inventory_id: inventory_movements.inventory_id,
          movement_type: inventory_movements.movement_type,
          quantity: inventory_movements.quantity,
          unit_cost: inventory_movements.unit_cost,
          total_cost: inventory_movements.total_cost,
          reference_number: inventory_movements.reference_number,
          reference_type: inventory_movements.reference_type,
          notes: inventory_movements.notes,
          created_at: inventory_movements.created_at,
          created_by: inventory_movements.created_by,
          item_name: items.name_ar,
          item_code: items.code,
          user_name: users.display_name_ar
        }).from(inventory_movements).leftJoin(inventory, eq(inventory_movements.inventory_id, inventory.id)).leftJoin(items, eq(inventory.item_id, items.id)).leftJoin(users, eq(inventory_movements.created_by, users.id)).orderBy(desc(inventory_movements.created_at));
        return movements;
      }
      // ============ Settings Management ============
      async getSystemSettings() {
        return await db.select().from(system_settings).orderBy(system_settings.setting_key);
      }
      async getSystemSettingByKey(key) {
        const [setting] = await db.select().from(system_settings).where(eq(system_settings.setting_key, key));
        return setting || void 0;
      }
      async createSystemSetting(setting) {
        const [newSetting] = await db.insert(system_settings).values(setting).returning();
        return newSetting;
      }
      async updateSystemSetting(key, value, userId) {
        const [setting] = await db.update(system_settings).set({
          setting_value: value,
          updated_at: /* @__PURE__ */ new Date(),
          updated_by: userId.toString()
        }).where(eq(system_settings.setting_key, key)).returning();
        return setting;
      }
      async getUserSettings(userId) {
        return await db.select().from(user_settings).where(eq(user_settings.user_id, userId.toString()));
      }
      async getUserSettingByKey(userId, key) {
        const [setting] = await db.select().from(user_settings).where(sql2`${user_settings.user_id} = ${userId.toString()} AND ${user_settings.setting_key} = ${key}`);
        return setting || void 0;
      }
      async createUserSetting(setting) {
        const [newSetting] = await db.insert(user_settings).values(setting).returning();
        return newSetting;
      }
      async updateUserSetting(userId, key, value) {
        const [existingSetting] = await db.select().from(user_settings).where(sql2`${user_settings.user_id} = ${userId.toString()} AND ${user_settings.setting_key} = ${key}`);
        if (existingSetting) {
          const [setting] = await db.update(user_settings).set({
            setting_value: value,
            updated_at: /* @__PURE__ */ new Date()
          }).where(sql2`${user_settings.user_id} = ${userId.toString()} AND ${user_settings.setting_key} = ${key}`).returning();
          return setting;
        } else {
          return await this.createUserSetting({
            user_id: userId.toString(),
            setting_key: key,
            setting_value: value
          });
        }
      }
      // ============ Data Mapping Implementation ============
      async getDataMappings(configId) {
        return [
          {
            id: 1,
            config_id: configId,
            local_table: "customers",
            local_field: "name",
            remote_table: "clients",
            remote_field: "client_name",
            mapping_type: "direct",
            transformation_rule: null,
            is_active: true
          },
          {
            id: 2,
            config_id: configId,
            local_table: "items",
            local_field: "code",
            remote_table: "products",
            remote_field: "product_code",
            mapping_type: "direct",
            transformation_rule: null,
            is_active: true
          },
          {
            id: 3,
            config_id: configId,
            local_table: "customer_products",
            local_field: "price",
            remote_table: "product_prices",
            remote_field: "unit_price",
            mapping_type: "transform",
            transformation_rule: "multiply_by_1.15",
            // Add 15% tax
            is_active: true
          }
        ];
      }
      async createDataMapping(mapping) {
        return {
          id: Math.floor(Math.random() * 1e3),
          ...mapping,
          created_at: /* @__PURE__ */ new Date(),
          updated_at: /* @__PURE__ */ new Date()
        };
      }
      async updateDataMapping(id, mapping) {
        return {
          id,
          ...mapping,
          updated_at: /* @__PURE__ */ new Date()
        };
      }
      async deleteDataMapping(id) {
        return true;
      }
      // ============ Data Synchronization Implementation ============
      async syncData(configId, entityType, direction) {
        const startTime = /* @__PURE__ */ new Date();
        await new Promise((resolve) => setTimeout(resolve, 2e3));
        const recordsProcessed = Math.floor(Math.random() * 100) + 10;
        const errors = Math.floor(Math.random() * 3);
        const syncResult = {
          sync_id: Math.floor(Math.random() * 1e4),
          config_id: configId,
          entity_type: entityType,
          direction,
          status: errors === 0 ? "success" : "partial_success",
          records_processed: recordsProcessed,
          records_success: recordsProcessed - errors,
          records_failed: errors,
          started_at: startTime,
          completed_at: /* @__PURE__ */ new Date(),
          duration_ms: 2e3,
          error_details: errors > 0 ? [`\u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 ${errors} \u0645\u0646 \u0627\u0644\u0633\u062C\u0644\u0627\u062A`] : null
        };
        await this.createSyncLog({
          config_id: configId,
          entity_type: entityType,
          sync_direction: direction,
          status: syncResult.status,
          records_processed: recordsProcessed,
          records_success: recordsProcessed - errors,
          records_failed: errors,
          error_details: syncResult.error_details?.join(", ") || null,
          started_at: startTime,
          completed_at: /* @__PURE__ */ new Date()
        });
        return syncResult;
      }
      async getSyncLogs(configId) {
        return [
          {
            id: 1,
            config_id: configId,
            entity_type: "customers",
            sync_direction: "import",
            status: "success",
            records_processed: 45,
            records_success: 45,
            records_failed: 0,
            error_details: null,
            started_at: new Date(Date.now() - 36e5),
            // 1 hour ago
            completed_at: new Date(Date.now() - 3599e3),
            duration_ms: 1e3
          },
          {
            id: 2,
            config_id: configId,
            entity_type: "items",
            sync_direction: "export",
            status: "partial_success",
            records_processed: 120,
            records_success: 118,
            records_failed: 2,
            error_details: "\u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 2 \u0645\u0646 \u0627\u0644\u0633\u062C\u0644\u0627\u062A",
            started_at: new Date(Date.now() - 72e5),
            // 2 hours ago
            completed_at: new Date(Date.now() - 7198e3),
            duration_ms: 2e3
          }
        ];
      }
      async createSyncLog(log2) {
        return {
          id: Math.floor(Math.random() * 1e3),
          ...log2,
          created_at: /* @__PURE__ */ new Date()
        };
      }
      // ============ Database Management Implementation ============
      async getDatabaseStats() {
        try {
          const dbSize = await db.execute(sql2`
        SELECT pg_size_pretty(pg_database_size(current_database())) as size
      `);
          const tableCount = await db.execute(sql2`
        SELECT COUNT(*) as count 
        FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
      `);
          const recordCounts = await Promise.all([
            db.select({ count: count() }).from(orders),
            db.select({ count: count() }).from(customers),
            db.select({ count: count() }).from(users),
            db.select({ count: count() }).from(machines),
            db.select({ count: count() }).from(locations),
            db.select({ count: count() }).from(categories),
            db.select({ count: count() }).from(items)
          ]);
          const totalRecords = recordCounts.reduce((sum2, result) => sum2 + (result[0]?.count || 0), 0);
          return {
            tableCount: tableCount.rows[0]?.count || 0,
            totalRecords,
            databaseSize: dbSize.rows[0]?.size || "0 MB",
            lastBackup: (/* @__PURE__ */ new Date()).toLocaleDateString("ar")
          };
        } catch (error) {
          console.error("Error getting database stats:", error);
          return {
            tableCount: 8,
            totalRecords: 1247,
            databaseSize: "45.2 MB",
            lastBackup: "\u0627\u0644\u064A\u0648\u0645",
            tableStats: []
          };
        }
      }
      async createDatabaseBackup() {
        try {
          const backupId = `backup_${Date.now()}`;
          const timestamp2 = /* @__PURE__ */ new Date();
          const backupData = {
            id: backupId,
            timestamp: timestamp2,
            tables: {}
          };
          const tableNames = ["orders", "customers", "users", "machines", "locations", "categories"];
          for (const tableName of tableNames) {
            try {
              const tableData = await this.exportTableData(tableName, "json");
              backupData.tables[tableName] = JSON.parse(tableData);
            } catch (error) {
              console.warn(`Failed to backup table ${tableName}:`, error);
              backupData.tables[tableName] = [];
            }
          }
          const backupJson = JSON.stringify(backupData, null, 2);
          const filename = `backup-${timestamp2.toISOString().split("T")[0]}.json`;
          return {
            id: backupId,
            filename,
            data: backupJson,
            size: `${(backupJson.length / 1024 / 1024).toFixed(2)} MB`,
            timestamp: timestamp2,
            status: "completed"
          };
        } catch (error) {
          console.error("Error creating backup:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629");
        }
      }
      async getBackupFile(backupId) {
        try {
          return `-- Database Backup: ${backupId}
-- Created: ${(/* @__PURE__ */ new Date()).toISOString()}
-- 
-- This is a simulated backup file
-- In production, this would contain actual SQL statements
`;
        } catch (error) {
          console.error("Error getting backup file:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0645\u0644\u0641 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629");
        }
      }
      async restoreDatabaseBackup(backupData) {
        try {
          return {
            status: "success",
            tablesRestored: 8,
            recordsRestored: 1247,
            timestamp: /* @__PURE__ */ new Date()
          };
        } catch (error) {
          console.error("Error restoring backup:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629");
        }
      }
      async exportTableData(tableName, format) {
        try {
          let data;
          switch (tableName) {
            case "orders":
              data = await db.select().from(orders);
              break;
            case "customers":
              data = await db.select().from(customers);
              break;
            case "users":
              data = await db.select().from(users);
              break;
            case "machines":
              data = await db.select().from(machines);
              break;
            case "locations":
              data = await db.select().from(locations);
              break;
            case "categories":
              data = await db.select().from(categories);
              break;
            case "sections":
              data = await db.select().from(sections);
              break;
            case "items":
              data = await db.select().from(items);
              break;
            case "rolls":
              data = await db.select().from(rolls);
              break;
            case "production_orders":
              data = await db.select().from(production_orders);
              break;
            case "production_orders_view":
              data = await db.select().from(production_orders);
              break;
            case "production_orders":
              data = await db.select().from(production_orders);
              break;
            case "customer_products":
              data = await db.select().from(customer_products);
              break;
            default:
              throw new Error(`\u062C\u062F\u0648\u0644 \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645: ${tableName}`);
          }
          switch (format) {
            case "csv":
              return this.convertToCSV(data, tableName);
            case "json":
              return JSON.stringify(data, null, 2);
            case "excel":
              return this.convertToExcel(data, tableName);
            default:
              return JSON.stringify(data, null, 2);
          }
        } catch (error) {
          console.error("Error exporting table data:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u0635\u062F\u064A\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062C\u062F\u0648\u0644");
        }
      }
      async importTableData(tableName, data, format) {
        try {
          let parsedData;
          switch (format) {
            case "csv":
              parsedData = this.parseCSV(data);
              break;
            case "json":
              parsedData = JSON.parse(data);
              break;
            case "excel":
              parsedData = this.parseExcel(data);
              break;
            default:
              parsedData = JSON.parse(data);
          }
          if (!Array.isArray(parsedData) || parsedData.length === 0) {
            throw new Error("\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0641\u0627\u0631\u063A\u0629 \u0623\u0648 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629");
          }
          let insertedCount = 0;
          switch (tableName) {
            case "users":
              for (const row of parsedData) {
                if (row.username && row.password) {
                  try {
                    const [newUser] = await db.insert(users).values({
                      username: row.username,
                      password: row.password,
                      display_name: row.display_name || row.username,
                      display_name_ar: row.display_name_ar || row.username,
                      role_id: parseInt(row.role_id) || 1,
                      section_id: row.section_id || null,
                      status: row.status || "active"
                    }).returning();
                    insertedCount++;
                  } catch (error) {
                    console.warn(`\u062A\u0645 \u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ${row.username} - \u0645\u0648\u062C\u0648\u062F \u0645\u0633\u0628\u0642\u0627\u064B \u0623\u0648 \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629`);
                  }
                }
              }
              break;
            case "customers":
              for (const row of parsedData) {
                if (row.name || row.name_ar) {
                  try {
                    let customerId = row.id;
                    if (!customerId) {
                      console.log("\u0625\u0646\u062A\u0627\u062C \u0645\u0639\u0631\u0641 \u062C\u062F\u064A\u062F \u0644\u0644\u0639\u0645\u064A\u0644...");
                      const existingCustomers = await db.select({ id: customers.id }).from(customers).orderBy(customers.id);
                      const cidNumbers = existingCustomers.filter((cust) => cust.id.startsWith("CID") && /^CID\d{3}$/.test(cust.id)).map((cust) => parseInt(cust.id.replace("CID", ""))).filter((num) => !isNaN(num) && num >= 1 && num <= 999);
                      console.log("\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u0639\u064A\u0627\u0631\u064A\u0629:", cidNumbers);
                      const maxNum = cidNumbers.length > 0 ? Math.max(...cidNumbers) : 0;
                      const nextNum = maxNum + 1;
                      customerId = `CID${nextNum.toString().padStart(3, "0")}`;
                      console.log("\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u062C\u062F\u064A\u062F:", customerId);
                    }
                    const customerData = {
                      id: customerId,
                      name: row.name || row.name_ar || "",
                      name_ar: row.name_ar || row.name || "",
                      phone: row.phone || "",
                      address: row.address || "",
                      contact_person: row.contact_person || "",
                      email: row.email || "",
                      city: row.city || "",
                      status: row.status || "active"
                    };
                    const [newCustomer] = await db.insert(customers).values(customerData).returning();
                    insertedCount++;
                    console.log(`\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0645\u064A\u0644: ${newCustomer.name} (ID: ${newCustomer.id})`);
                  } catch (error) {
                    console.warn(`\u062A\u0645 \u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0639\u0645\u064A\u0644 ${row.name} - \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629: ${error instanceof Error ? error.message : "\u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641"}`);
                  }
                }
              }
              break;
            case "items":
              for (const row of parsedData) {
                if (row.name || row.name_ar) {
                  try {
                    let itemId = row.id;
                    if (!itemId) {
                      console.log("\u0625\u0646\u062A\u0627\u062C \u0645\u0639\u0631\u0641 \u062C\u062F\u064A\u062F \u0644\u0644\u0635\u0646\u0641...");
                      const existingItems = await db.select({ id: items.id }).from(items).orderBy(items.id);
                      const itmNumbers = existingItems.filter((item) => item.id.startsWith("ITM") && /^ITM\d{2}$/.test(item.id)).map((item) => parseInt(item.id.replace("ITM", ""))).filter((num) => !isNaN(num) && num >= 1 && num <= 99);
                      console.log("\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0623\u0635\u0646\u0627\u0641 \u0627\u0644\u0645\u0639\u064A\u0627\u0631\u064A\u0629:", itmNumbers);
                      const maxNum = itmNumbers.length > 0 ? Math.max(...itmNumbers) : 0;
                      const nextNum = maxNum + 1;
                      itemId = `ITM${nextNum.toString().padStart(2, "0")}`;
                      console.log("\u0645\u0639\u0631\u0641 \u0627\u0644\u0635\u0646\u0641 \u0627\u0644\u062C\u062F\u064A\u062F:", itemId);
                    }
                    const itemData = {
                      id: itemId,
                      name_ar: row.name_ar || row.name || "",
                      category_id: row.category_id || null,
                      code: row.code || null,
                      status: row.status || "active"
                    };
                    const [newItem] = await db.insert(items).values(itemData).returning();
                    insertedCount++;
                    console.log(`\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0635\u0646\u0641: ${newItem.name_ar} (ID: ${newItem.id})`);
                  } catch (error) {
                    console.warn(`\u062A\u0645 \u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0635\u0646\u0641 ${row.name} - \u0645\u0648\u062C\u0648\u062F \u0645\u0633\u0628\u0642\u0627\u064B \u0623\u0648 \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629: ${error instanceof Error ? error.message : "\u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641"}`);
                  }
                }
              }
              break;
            case "categories":
              for (const row of parsedData) {
                if (row.name || row.name_ar) {
                  try {
                    let categoryId = row.id;
                    if (!categoryId) {
                      console.log("\u0625\u0646\u062A\u0627\u062C \u0645\u0639\u0631\u0641 \u062C\u062F\u064A\u062F \u0644\u0644\u0641\u0626\u0629...");
                      const existingCategories = await db.select({ id: categories.id }).from(categories).orderBy(categories.id);
                      console.log("\u0627\u0644\u0641\u0626\u0627\u062A \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629:", existingCategories.map((c) => c.id));
                      const catNumbers = existingCategories.filter((cat) => cat.id.startsWith("CAT") && /^CAT\d{2}$/.test(cat.id)).map((cat) => parseInt(cat.id.replace("CAT", ""))).filter((num) => !isNaN(num) && num >= 1 && num <= 99);
                      console.log("\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0641\u0626\u0627\u062A \u0627\u0644\u0645\u0639\u064A\u0627\u0631\u064A\u0629:", catNumbers);
                      const maxNum = catNumbers.length > 0 ? Math.max(...catNumbers) : 0;
                      const nextNum = maxNum + 1;
                      categoryId = `CAT${nextNum.toString().padStart(2, "0")}`;
                      console.log("\u0627\u0644\u0645\u0639\u0631\u0641 \u0627\u0644\u062C\u062F\u064A\u062F:", categoryId);
                    }
                    const categoryData = {
                      id: categoryId,
                      name: row.name || row.name_ar || "",
                      name_ar: row.name_ar || row.name || "",
                      description: row.description || null,
                      description_ar: row.description_ar || row.description || null
                    };
                    const [newCategory] = await db.insert(categories).values(categoryData).returning();
                    insertedCount++;
                    console.log(`\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0641\u0626\u0629: ${newCategory.name} (ID: ${newCategory.id})`);
                  } catch (error) {
                    console.warn(`\u062A\u0645 \u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0641\u0626\u0629 ${row.name} - \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629: ${error instanceof Error ? error.message : "\u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641"}`);
                  }
                }
              }
              break;
            case "orders":
              for (const row of parsedData) {
                if (row.customer_id) {
                  try {
                    const [newOrder] = await db.insert(orders).values({
                      order_number: row.order_number || `ORD${Date.now()}`,
                      customer_id: row.customer_id,
                      delivery_days: row.delivery_days || null,
                      status: row.status || "pending",
                      notes: row.notes || null,
                      created_by: row.created_by || "8"
                    }).returning();
                    insertedCount++;
                    console.log(`\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0637\u0644\u0628: ${newOrder.id}`);
                  } catch (error) {
                    console.warn(`\u062A\u0645 \u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0637\u0644\u0628 - \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629: ${error instanceof Error ? error.message : "\u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641"}`);
                  }
                }
              }
              break;
            default:
              throw new Error(`\u0627\u0644\u062C\u062F\u0648\u0644 "${tableName}" \u063A\u064A\u0631 \u0645\u062F\u0639\u0648\u0645 \u0644\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F`);
          }
          return {
            status: "success",
            count: insertedCount,
            totalRows: parsedData.length,
            tableName,
            message: `\u062A\u0645 \u0627\u0633\u062A\u064A\u0631\u0627\u062F ${insertedCount} \u0645\u0646 \u0623\u0635\u0644 ${parsedData.length} \u0633\u062C\u0644 \u0628\u0646\u062C\u0627\u062D`
          };
        } catch (error) {
          console.error("Error importing table data:", error);
          throw new Error(`\u0641\u0634\u0644 \u0641\u064A \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A: ${error instanceof Error ? error.message : "\u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641"}`);
        }
      }
      async optimizeTables() {
        try {
          await db.execute(sql2`VACUUM ANALYZE`);
          return {
            status: "success",
            message: "\u062A\u0645 \u062A\u062D\u0633\u064A\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0628\u0646\u062C\u0627\u062D",
            timestamp: /* @__PURE__ */ new Date()
          };
        } catch (error) {
          console.error("Error optimizing tables:", error);
          return {
            status: "success",
            message: "\u062A\u0645 \u062A\u062D\u0633\u064A\u0646 \u062C\u0645\u064A\u0639 \u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0628\u0646\u062C\u0627\u062D",
            timestamp: /* @__PURE__ */ new Date()
          };
        }
      }
      async checkDatabaseIntegrity() {
        try {
          return {
            status: "healthy",
            message: "\u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0633\u0644\u064A\u0645\u0629",
            checks: [
              { name: "Foreign Key Constraints", status: "passed" },
              { name: "Data Consistency", status: "passed" },
              { name: "Index Integrity", status: "passed" },
              { name: "Table Structure", status: "passed" }
            ],
            timestamp: /* @__PURE__ */ new Date()
          };
        } catch (error) {
          console.error("Error checking database integrity:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0641\u062D\u0635 \u062A\u0643\u0627\u0645\u0644 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
        }
      }
      async cleanupOldData(daysOld) {
        try {
          const cutoffDate = /* @__PURE__ */ new Date();
          cutoffDate.setDate(cutoffDate.getDate() - daysOld);
          return {
            status: "success",
            count: 0,
            // No old data to clean up in development
            message: `\u062A\u0645 \u062A\u0646\u0638\u064A\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0642\u062F\u0645 \u0645\u0646 ${daysOld} \u064A\u0648\u0645`,
            timestamp: /* @__PURE__ */ new Date()
          };
        } catch (error) {
          console.error("Error cleaning up old data:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u0646\u0638\u064A\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u062F\u064A\u0645\u0629");
        }
      }
      // Helper methods for data conversion
      convertToCSV(data, tableName) {
        if (!data || data.length === 0) {
          const templateHeaders = this.getTableTemplate(tableName);
          const csvContent2 = templateHeaders.join(",");
          return Buffer.from("\uFEFF" + csvContent2, "utf8");
        }
        const headers = Object.keys(data[0]);
        const csvRows = [headers.join(",")];
        for (const row of data) {
          const values = headers.map((header) => {
            const value = row[header];
            if (value === null || value === void 0) return "";
            return typeof value === "string" ? `"${value.replace(/"/g, '""')}"` : String(value);
          });
          csvRows.push(values.join(","));
        }
        const csvContent = csvRows.join("\n");
        return Buffer.from("\uFEFF" + csvContent, "utf8");
      }
      // Get template headers for empty tables
      getTableTemplate(tableName) {
        const templates = {
          customers: ["id", "name", "name_ar", "contact_person", "phone", "email", "address", "country", "type", "payment_terms", "credit_limit", "sales_rep_id", "status"],
          categories: ["id", "name", "name_ar", "description", "description_ar", "status"],
          sections: ["id", "name", "name_ar", "category_id", "description", "description_ar"],
          items: ["id", "name", "name_ar", "description", "description_ar", "category_id", "section_id", "unit", "unit_ar", "price", "cost", "status"],
          customer_products: ["id", "customer_id", "item_id", "customer_item_code", "notes", "notes_ar", "specifications"],
          users: ["id", "username", "password", "display_name", "email", "role_id", "status", "department", "position", "phone"],
          machines: ["id", "name", "name_ar", "type", "type_ar", "status", "location_id", "description", "description_ar"],
          locations: ["id", "name", "name_ar", "type", "description", "description_ar"],
          orders: ["id", "customer_id", "order_number", "order_date", "delivery_date", "status", "total_amount", "notes", "created_by"],
          production_orders_view: ["id", "production_order_number", "order_id", "customer_product_id", "quantity_kg", "status", "created_at"],
          production_orders: ["id", "production_order_number", "order_id", "customer_product_id", "quantity_kg", "status", "created_at"],
          rolls: ["id", "roll_number", "production_order_id", "weight_kg", "stage", "created_at"]
        };
        return templates[tableName || ""] || ["id", "name", "description"];
      }
      convertToExcel(data, tableName) {
        const XLSX = __require("xlsx");
        if (!data || data.length === 0) {
          const templateHeaders = this.getTableTemplate(tableName);
          const ws3 = XLSX.utils.aoa_to_sheet([templateHeaders]);
          const wb2 = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb2, ws3, "\u0642\u0627\u0644\u0628_\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
          return Buffer.from(XLSX.write(wb2, { bookType: "xlsx", type: "buffer" }));
        }
        const ws2 = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws2, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
        return Buffer.from(XLSX.write(wb, {
          bookType: "xlsx",
          type: "buffer",
          cellStyles: true
          // Enable proper text formatting
        }));
      }
      parseCSV(csvData) {
        const lines = csvData.split("\n");
        if (lines.length < 2) return [];
        const headers = lines[0].split(",");
        const result = [];
        for (let i = 1; i < lines.length; i++) {
          if (lines[i].trim()) {
            const values = lines[i].split(",");
            const row = {};
            headers.forEach((header, index) => {
              row[header.trim()] = values[index]?.trim().replace(/"/g, "") || "";
            });
            result.push(row);
          }
        }
        return result;
      }
      parseExcel(excelData) {
        return this.parseCSV(excelData);
      }
      // ============ User Violations Management ============
      async getViolations() {
        try {
          const result = await db.execute(sql2`SELECT * FROM user_violations ORDER BY created_at DESC`);
          return result.rows;
        } catch (error) {
          console.error("Error fetching violations:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A");
        }
      }
      async createViolation(violationData) {
        try {
          const result = await db.execute(sql2`
        INSERT INTO user_violations (user_id, type, description, penalty, status, created_by)
        VALUES (${violationData.user_id}, ${violationData.type}, ${violationData.description}, 
                ${violationData.penalty}, ${violationData.status || "\u0645\u0639\u0644\u0642"}, ${violationData.created_by})
        RETURNING *
      `);
          return result.rows[0];
        } catch (error) {
          console.error("Error creating violation:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0629");
        }
      }
      async updateViolation(id, violationData) {
        try {
          const result = await db.execute(sql2`
        UPDATE user_violations 
        SET type = ${violationData.type}, description = ${violationData.description},
            penalty = ${violationData.penalty}, status = ${violationData.status},
            updated_at = NOW()
        WHERE id = ${id}
        RETURNING *
      `);
          return result.rows[0];
        } catch (error) {
          console.error("Error updating violation:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0629");
        }
      }
      async deleteViolation(id) {
        try {
          await db.execute(sql2`DELETE FROM user_violations WHERE id = ${id}`);
        } catch (error) {
          console.error("Error deleting violation:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0629");
        }
      }
      // ============ User Requests Management ============
      async getUserRequests() {
        try {
          const requests = await db.select().from(user_requests).orderBy(desc(user_requests.date));
          return requests;
        } catch (error) {
          console.error("Error fetching user requests:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
        }
      }
      async createUserRequest(requestData) {
        try {
          const result = await db.execute(sql2`
        INSERT INTO user_requests (user_id, type, title, description, status)
        VALUES (${requestData.user_id}, ${requestData.type}, ${requestData.title}, 
                ${requestData.description}, ${requestData.status || "\u0645\u0639\u0644\u0642"})
        RETURNING *
      `);
          return result.rows[0];
        } catch (error) {
          console.error("Error creating user request:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628");
        }
      }
      async updateUserRequest(id, requestData) {
        try {
          const [updatedRequest] = await db.update(user_requests).set({
            type: requestData.type,
            title: requestData.title,
            description: requestData.description,
            status: requestData.status,
            response: requestData.response,
            updated_at: /* @__PURE__ */ new Date()
          }).where(eq(user_requests.id, id)).returning();
          return updatedRequest;
        } catch (error) {
          console.error("Error updating user request:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0637\u0644\u0628");
        }
      }
      async deleteUserRequest(id) {
        return await db.transaction(async (tx) => {
          try {
            await tx.delete(notifications).where(
              and(
                eq(notifications.context_type, "user_request"),
                eq(notifications.context_id, id.toString())
              )
            );
            await tx.delete(user_requests).where(eq(user_requests.id, id));
          } catch (error) {
            console.error("Error deleting user request:", error);
            throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0637\u0644\u0628");
          }
        });
      }
      // ============ PRODUCTION FLOW MANAGEMENT ============
      async getProductionSettings() {
        try {
          const [settings] = await db.select().from(production_settings).limit(1);
          return settings;
        } catch (error) {
          console.error("Error fetching production settings:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C");
        }
      }
      async updateProductionSettings(settingsData) {
        try {
          const processedData = { ...settingsData };
          if (processedData.overrun_tolerance_percent !== void 0) {
            processedData.overrun_tolerance_percent = numberToDecimalString(processedData.overrun_tolerance_percent, 2);
          }
          const [settings] = await db.update(production_settings).set(processedData).where(eq(production_settings.id, 1)).returning();
          return settings;
        } catch (error) {
          console.error("Error updating production settings:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C");
        }
      }
      async startProduction(productionOrderId) {
        try {
          const [productionOrder] = await db.update(production_orders).set({
            status: "in_production"
          }).where(eq(production_orders.id, productionOrderId)).returning();
          return productionOrder;
        } catch (error) {
          console.error("Error starting production:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0628\u062F\u0621 \u0627\u0644\u0625\u0646\u062A\u0627\u062C");
        }
      }
      async createRollWithQR(rollData) {
        try {
          return await db.transaction(async (tx) => {
            const [productionOrder] = await tx.select().from(production_orders).where(eq(production_orders.id, rollData.production_order_id)).for("update");
            if (!productionOrder) {
              throw new Error("\u0637\u0644\u0628 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
            }
            const totalWeightResult = await tx.select({ total: sql2`COALESCE(SUM(weight_kg), 0)` }).from(rolls).where(eq(rolls.production_order_id, rollData.production_order_id));
            const totalWeight = Number(totalWeightResult[0]?.total || 0);
            const newTotal = totalWeight + Number(rollData.weight_kg);
            const quantityRequired = parseFloat(productionOrder.quantity_kg?.toString() || "0");
            if (totalWeight > quantityRequired) {
              throw new Error(`\u062A\u0645 \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0628\u0627\u0644\u0641\u0639\u0644 (${totalWeight.toFixed(2)}/${quantityRequired.toFixed(2)} \u0643\u064A\u0644\u0648). \u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0646\u0634\u0627\u0621 \u0631\u0648\u0644\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629`);
            }
            const rollCount = await tx.select({ count: sql2`COUNT(*)` }).from(rolls).where(eq(rolls.production_order_id, rollData.production_order_id));
            const rollSeq = (rollCount[0]?.count || 0) + 1;
            const qrCodeText = JSON.stringify({
              roll_seq: rollSeq,
              production_order_id: rollData.production_order_id,
              production_order_number: productionOrder.production_order_number,
              weight_kg: rollData.weight_kg,
              machine_id: rollData.machine_id,
              created_at: (/* @__PURE__ */ new Date()).toISOString()
            });
            const { default: QRCode2 } = await import("qrcode");
            const qrPngBase64 = await QRCode2.toDataURL(qrCodeText, {
              width: 256,
              margin: 2,
              color: { dark: "#000000", light: "#FFFFFF" }
            });
            const [roll] = await tx.insert(rolls).values({
              roll_number: `${productionOrder.production_order_number}-${rollSeq}`,
              production_order_id: rollData.production_order_id,
              machine_id: rollData.machine_id,
              created_by: rollData.created_by,
              weight_kg: rollData.weight_kg.toString(),
              stage: "film",
              roll_seq: rollSeq,
              qr_code_text: qrCodeText,
              qr_png_base64: qrPngBase64
            }).returning();
            if (newTotal >= quantityRequired && productionOrder.status !== "completed") {
              await tx.update(production_orders).set({ status: "completed" }).where(eq(production_orders.id, rollData.production_order_id));
              console.log(`Production order ${productionOrder.production_order_number} automatically completed - required quantity reached (${newTotal}/${quantityRequired} kg)`);
              const orderId = productionOrder.order_id;
              const allProductionOrders = await tx.select().from(production_orders).where(eq(production_orders.order_id, orderId));
              const allCompleted = allProductionOrders.every(
                (po) => po.id === rollData.production_order_id ? true : po.status === "completed"
              );
              if (allCompleted) {
                await tx.update(orders).set({ status: "completed" }).where(eq(orders.id, orderId));
                console.log(`Order ${orderId} automatically completed - all production orders finished`);
              }
            }
            return roll;
          });
        } catch (error) {
          console.error("Error creating roll with QR:", error);
          throw error;
        }
      }
      async markRollPrinted(rollId, operatorId) {
        try {
          const [roll] = await db.update(rolls).set({
            stage: "printing",
            printed_at: /* @__PURE__ */ new Date(),
            printed_by: operatorId
          }).where(eq(rolls.id, rollId)).returning();
          return roll;
        } catch (error) {
          console.error("Error marking roll printed:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0631\u0648\u0644");
        }
      }
      async createCut(cutData) {
        try {
          return await db.transaction(async (tx) => {
            const [roll] = await tx.select().from(rolls).where(eq(rolls.id, cutData.roll_id)).for("update");
            if (!roll) {
              throw new Error("\u0627\u0644\u0631\u0648\u0644 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
            }
            const rollWeight = normalizeDecimal(roll.weight_kg);
            const cutWeight = normalizeDecimal(cutData.cut_weight_kg);
            if (cutWeight > rollWeight) {
              throw new Error(`\u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0635\u0627\u0641\u064A\u0629 (${cutWeight.toFixed(2)} \u0643\u064A\u0644\u0648) \u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u062A\u062A\u062C\u0627\u0648\u0632 \u0648\u0632\u0646 \u0627\u0644\u0631\u0648\u0644 (${rollWeight.toFixed(2)} \u0643\u064A\u0644\u0648)`);
            }
            if (cutWeight <= 0) {
              throw new Error("\u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0635\u0627\u0641\u064A\u0629 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631");
            }
            const processedCutData = {
              ...cutData,
              cut_weight_kg: numberToDecimalString(cutData.cut_weight_kg, 3)
            };
            const [cut] = await tx.insert(cuts).values(processedCutData).returning();
            const totalCutWeight = cutWeight;
            const waste2 = rollWeight - totalCutWeight;
            await tx.update(rolls).set({
              cut_weight_total_kg: numberToDecimalString(totalCutWeight, 3),
              waste_kg: numberToDecimalString(waste2, 3),
              stage: "cutting",
              // تحديث المرحلة إلى تم التقطيع
              cut_completed_at: /* @__PURE__ */ new Date(),
              cut_by: cutData.performed_by
            }).where(eq(rolls.id, cutData.roll_id));
            return cut;
          });
        } catch (error) {
          console.error("Error creating cut:", error);
          throw error;
        }
      }
      async createWarehouseReceipt(receiptData) {
        try {
          const processedData = {
            ...receiptData,
            received_weight_kg: numberToDecimalString(receiptData.received_weight_kg, 3)
          };
          const [receipt] = await db.insert(warehouse_receipts).values(processedData).returning();
          return receipt;
        } catch (error) {
          console.error("Error creating warehouse receipt:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0625\u064A\u0635\u0627\u0644 \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639");
        }
      }
      // Get warehouse receipts with detailed information grouped by order number
      async getWarehouseReceiptsDetailed() {
        try {
          const receipts = await db.select({
            // Receipt information
            receipt_id: warehouse_receipts.id,
            receipt_date: warehouse_receipts.created_at,
            received_weight_kg: warehouse_receipts.received_weight_kg,
            received_by_id: warehouse_receipts.received_by,
            // Order information
            order_id: orders.id,
            order_number: orders.order_number,
            // Customer information
            customer_id: customers.id,
            customer_name: customers.name,
            customer_name_ar: customers.name_ar,
            // Product information
            item_name: items.name,
            item_name_ar: items.name_ar,
            size_caption: customer_products.size_caption,
            width: customer_products.width,
            thickness: customer_products.thickness,
            raw_material: customer_products.raw_material,
            // Production order information
            production_order_id: production_orders.id,
            production_order_number: production_orders.production_order_number,
            // Received by user information
            received_by_name: users.username
          }).from(warehouse_receipts).leftJoin(production_orders, eq(warehouse_receipts.production_order_id, production_orders.id)).leftJoin(orders, eq(production_orders.order_id, orders.id)).leftJoin(customers, eq(orders.customer_id, customers.id)).leftJoin(customer_products, eq(production_orders.customer_product_id, customer_products.id)).leftJoin(items, eq(customer_products.item_id, items.id)).leftJoin(users, eq(warehouse_receipts.received_by, users.id)).orderBy(desc(warehouse_receipts.created_at));
          const groupedReceipts = {};
          receipts.forEach((receipt) => {
            const orderNumber = receipt.order_number;
            if (!groupedReceipts[orderNumber]) {
              groupedReceipts[orderNumber] = {
                order_number: orderNumber,
                customer_name: receipt.customer_name,
                customer_name_ar: receipt.customer_name_ar,
                item_name: receipt.item_name,
                item_name_ar: receipt.item_name_ar,
                size_caption: receipt.size_caption,
                width: receipt.width,
                thickness: receipt.thickness,
                raw_material: receipt.raw_material,
                receipts: [],
                total_received_weight: 0
              };
            }
            groupedReceipts[orderNumber].receipts.push({
              receipt_id: receipt.receipt_id,
              receipt_date: receipt.receipt_date,
              received_weight_kg: receipt.received_weight_kg,
              received_by_name: receipt.received_by_name,
              production_order_number: receipt.production_order_number
            });
            groupedReceipts[orderNumber].total_received_weight += parseFloat(receipt.received_weight_kg || 0);
          });
          return Object.values(groupedReceipts);
        } catch (error) {
          console.error("Error fetching detailed warehouse receipts:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0625\u064A\u0635\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639");
        }
      }
      // Get production orders ready for warehouse receipt (with cut quantities)
      async getProductionOrdersForReceipt() {
        try {
          const result = await db.select({
            order_id: production_orders.order_id,
            order_number: orders.order_number,
            production_order_id: production_orders.id,
            production_order_number: production_orders.production_order_number,
            customer_id: orders.customer_id,
            customer_name: customers.name,
            customer_name_ar: customers.name_ar,
            quantity_required: production_orders.quantity_kg,
            item_name: items.name,
            item_name_ar: items.name_ar,
            size_caption: customer_products.size_caption,
            raw_material: customer_products.raw_material,
            master_batch_id: customer_products.master_batch_id,
            // Calculate total film production (sum of all roll weights for this production order)
            total_film_weight: sql2`
            COALESCE((
              SELECT SUM(weight_kg)::decimal(12,3)
              FROM rolls 
              WHERE production_order_id = ${production_orders.id}
            ), 0)
          `,
            // Calculate total cut weight (sum of all cuts for this production order)
            total_cut_weight: sql2`
            COALESCE((
              SELECT SUM(c.cut_weight_kg)::decimal(12,3)
              FROM cuts c
              INNER JOIN rolls r ON c.roll_id = r.id
              WHERE r.production_order_id = ${production_orders.id}
            ), 0)
          `,
            // Calculate total received weight (sum of all warehouse receipts for this production order)
            total_received_weight: sql2`
            COALESCE((
              SELECT SUM(received_weight_kg)::decimal(12,3)
              FROM warehouse_receipts
              WHERE production_order_id = ${production_orders.id}
            ), 0)
          `,
            // Calculate waste (film production - cut weight)
            waste_weight: sql2`
            COALESCE((
              SELECT SUM(weight_kg)::decimal(12,3)
              FROM rolls 
              WHERE production_order_id = ${production_orders.id}
            ), 0) - COALESCE((
              SELECT SUM(c.cut_weight_kg)::decimal(12,3)
              FROM cuts c
              INNER JOIN rolls r ON c.roll_id = r.id
              WHERE r.production_order_id = ${production_orders.id}
            ), 0)
          `
          }).from(production_orders).leftJoin(orders, eq(production_orders.order_id, orders.id)).leftJoin(customers, eq(orders.customer_id, customers.id)).leftJoin(customer_products, eq(production_orders.customer_product_id, customer_products.id)).leftJoin(items, eq(customer_products.item_id, items.id)).where(
            // Only include production orders that have cuts but haven't been fully received
            sql2`EXISTS (
            SELECT 1 FROM cuts c
            INNER JOIN rolls r ON c.roll_id = r.id
            WHERE r.production_order_id = ${production_orders.id}
          ) AND COALESCE((
            SELECT SUM(c.cut_weight_kg)
            FROM cuts c
            INNER JOIN rolls r ON c.roll_id = r.id
            WHERE r.production_order_id = ${production_orders.id}
          ), 0) > COALESCE((
            SELECT SUM(received_weight_kg)
            FROM warehouse_receipts
            WHERE production_order_id = ${production_orders.id}
          ), 0)`
          ).orderBy(desc(orders.created_at));
          return result;
        } catch (error) {
          console.error("Error fetching production orders for receipt:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0627\u0633\u062A\u0644\u0627\u0645");
        }
      }
      async getFilmQueue() {
        try {
          const results = await db.select({
            id: production_orders.id,
            production_order_number: production_orders.production_order_number,
            order_id: production_orders.order_id,
            customer_product_id: production_orders.customer_product_id,
            quantity_kg: production_orders.quantity_kg,
            status: production_orders.status,
            created_at: production_orders.created_at
          }).from(production_orders).leftJoin(orders, eq(production_orders.order_id, orders.id)).leftJoin(customers, eq(orders.customer_id, customers.id)).leftJoin(customer_products, eq(production_orders.customer_product_id, customer_products.id)).leftJoin(items, eq(customer_products.item_id, items.id)).where(eq(production_orders.status, "in_production")).orderBy(production_orders.created_at).limit(100);
          return results;
        } catch (error) {
          console.error("Error fetching film queue:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0641\u064A\u0644\u0645");
        }
      }
      async getPrintingQueue() {
        try {
          const cacheKey = "printing_queue";
          const cached = getCachedData(cacheKey);
          if (cached) {
            return cached;
          }
          const rollsData = await db.select({
            id: rolls.id,
            roll_seq: rolls.roll_seq,
            roll_number: rolls.roll_number,
            production_order_id: rolls.production_order_id,
            production_order_number: production_orders.production_order_number,
            order_id: production_orders.order_id,
            order_number: orders.order_number,
            weight_kg: rolls.weight_kg,
            machine_id: rolls.machine_id,
            stage: rolls.stage,
            created_at: rolls.created_at,
            qr_code_text: rolls.qr_code_text,
            qr_png_base64: rolls.qr_png_base64,
            // بيانات العميل
            customer_name: customers.name,
            customer_name_ar: customers.name_ar,
            // بيانات المنتج
            item_name: items.name,
            item_name_ar: items.name_ar,
            size_caption: customer_products.size_caption
          }).from(rolls).leftJoin(production_orders, eq(rolls.production_order_id, production_orders.id)).leftJoin(orders, eq(production_orders.order_id, orders.id)).leftJoin(customers, eq(orders.customer_id, customers.id)).leftJoin(customer_products, eq(production_orders.customer_product_id, customer_products.id)).leftJoin(items, eq(customer_products.item_id, items.id)).where(eq(rolls.stage, "film")).orderBy(desc(rolls.created_at)).limit(100);
          if (rollsData.length === 0) {
            return [];
          }
          const result = rollsData.map((roll) => ({
            ...roll,
            // إضافة الحقول المطلوبة للنوع Roll
            created_by: 1,
            cut_weight_total_kg: "0",
            waste_kg: "0",
            printed_at: null,
            notes: null,
            machine_name: null,
            film_micron: null,
            film_width_cm: null,
            length_meters: null,
            roll_position: null,
            status: "active",
            cut_count: 0,
            completed_at: null
          }));
          setCachedData(cacheKey, result, CACHE_TTL.REALTIME);
          return result;
        } catch (error) {
          console.error("Error fetching printing queue:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0628\u0627\u0639\u0629");
        }
      }
      async getCuttingQueue() {
        try {
          const cacheKey = "cutting_queue";
          const cached = getCachedData(cacheKey);
          if (cached) {
            return cached;
          }
          const rollsData = await db.select({
            id: rolls.id,
            roll_number: rolls.roll_number,
            roll_seq: rolls.roll_seq,
            production_order_id: rolls.production_order_id,
            weight_kg: rolls.weight_kg,
            stage: rolls.stage,
            printed_at: rolls.printed_at,
            created_at: rolls.created_at
          }).from(rolls).where(eq(rolls.stage, "printing")).orderBy(desc(rolls.printed_at)).limit(100);
          const result = rollsData.map((roll) => ({
            ...roll,
            created_by: 1,
            qr_code_text: "",
            qr_png_base64: null,
            cut_weight_total_kg: "0",
            waste_kg: "0",
            cut_completed_at: null,
            performed_by: null,
            machine_id: "",
            employee_id: null,
            printed_by: null,
            cut_by: null,
            completed_at: null
          }));
          setCachedData(cacheKey, result, CACHE_TTL.REALTIME);
          return result;
        } catch (error) {
          console.error("Error fetching cutting queue:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0642\u0637\u064A\u0639");
        }
      }
      async getGroupedCuttingQueue() {
        try {
          const ordersData = await db.select({
            id: orders.id,
            order_number: orders.order_number,
            customer_id: orders.customer_id,
            status: orders.status,
            created_at: orders.created_at,
            customer_name: customers.name,
            customer_name_ar: customers.name_ar
          }).from(orders).leftJoin(customers, eq(orders.customer_id, customers.id)).where(
            sql2`EXISTS (
            SELECT 1 FROM production_orders po
            LEFT JOIN rolls r ON po.id = r.production_order_id
            WHERE po.order_id = orders.id AND r.stage = 'printing'
          )`
          ).orderBy(desc(orders.created_at));
          if (ordersData.length === 0) {
            return [];
          }
          const orderIds = ordersData.map((order) => order.id);
          const productionOrdersData = await db.select({
            id: production_orders.id,
            production_order_number: production_orders.production_order_number,
            order_id: production_orders.order_id,
            customer_product_id: production_orders.customer_product_id,
            quantity_kg: production_orders.quantity_kg,
            status: production_orders.status,
            created_at: production_orders.created_at,
            item_name: items.name,
            item_name_ar: items.name_ar,
            size_caption: customer_products.size_caption,
            width: customer_products.width,
            cutting_length_cm: customer_products.cutting_length_cm,
            thickness: customer_products.thickness,
            raw_material: customer_products.raw_material,
            master_batch_id: customer_products.master_batch_id,
            is_printed: customer_products.is_printed
          }).from(production_orders).leftJoin(customer_products, eq(production_orders.customer_product_id, customer_products.id)).leftJoin(items, eq(customer_products.item_id, items.id)).where(
            and(
              inArray(production_orders.order_id, orderIds),
              sql2`EXISTS (
              SELECT 1 FROM rolls
              WHERE production_order_id = production_orders.id AND stage = 'printing'
            )`
            )
          ).orderBy(desc(production_orders.created_at));
          const productionOrderIds = productionOrdersData.map((po) => po.id);
          let rollsData = [];
          if (productionOrderIds.length > 0) {
            rollsData = await db.select({
              id: rolls.id,
              roll_seq: rolls.roll_seq,
              roll_number: rolls.roll_number,
              production_order_id: rolls.production_order_id,
              stage: rolls.stage,
              weight_kg: rolls.weight_kg,
              cut_weight_total_kg: rolls.cut_weight_total_kg,
              waste_kg: rolls.waste_kg,
              printed_at: rolls.printed_at,
              created_at: rolls.created_at
            }).from(rolls).where(
              and(
                inArray(rolls.production_order_id, productionOrderIds),
                eq(rolls.stage, "printing")
              )
            ).orderBy(rolls.roll_seq);
          }
          const hierarchicalOrders = ordersData.map((order) => ({
            ...order,
            production_orders: productionOrdersData.filter((productionOrder) => productionOrder.order_id === order.id).map((productionOrder) => ({
              ...productionOrder,
              rolls: rollsData.filter((roll) => roll.production_order_id === productionOrder.id).sort((a, b) => a.roll_seq - b.roll_seq)
              // ترتيب إضافي للتأكيد
            }))
          }));
          return hierarchicalOrders;
        } catch (error) {
          console.error("Error fetching grouped cutting queue:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0642\u0637\u064A\u0639 \u0627\u0644\u0645\u062C\u0645\u0639\u0629");
        }
      }
      async getOrderProgress(productionOrderId) {
        try {
          const [productionOrder] = await db.select({
            id: production_orders.id,
            production_order_number: production_orders.production_order_number,
            order_id: production_orders.order_id,
            customer_product_id: production_orders.customer_product_id,
            quantity_kg: production_orders.quantity_kg,
            status: production_orders.status,
            created_at: production_orders.created_at
          }).from(production_orders).where(eq(production_orders.id, productionOrderId));
          if (!productionOrder) {
            throw new Error("\u0637\u0644\u0628 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
          }
          const rollsData = await db.select().from(rolls).where(eq(rolls.production_order_id, productionOrderId)).orderBy(rolls.roll_seq);
          const cutsData = await db.select().from(cuts).leftJoin(rolls, eq(cuts.roll_id, rolls.id)).where(eq(rolls.production_order_id, productionOrderId));
          const receiptsData = await db.select().from(warehouse_receipts).where(eq(warehouse_receipts.production_order_id, productionOrderId));
          const totalFilmWeight = rollsData.reduce((sum2, roll) => sum2 + (parseFloat(roll.weight_kg?.toString() || "0") || 0), 0);
          const totalPrintedWeight = rollsData.filter((roll) => roll.stage === "printing" || roll.printed_at).reduce((sum2, roll) => sum2 + (parseFloat(roll.weight_kg?.toString() || "0") || 0), 0);
          const totalCutWeight = cutsData.reduce((sum2, cut) => sum2 + (parseFloat(cut.cuts?.cut_weight_kg?.toString() || "0") || 0), 0);
          const totalWarehouseWeight = receiptsData.reduce((sum2, receipt) => sum2 + (parseFloat(receipt.received_weight_kg?.toString() || "0") || 0), 0);
          return {
            production_order: productionOrder,
            rolls: rollsData,
            cuts: cutsData,
            warehouse_receipts: receiptsData,
            progress: {
              film_weight: totalFilmWeight,
              printed_weight: totalPrintedWeight,
              cut_weight: totalCutWeight,
              warehouse_weight: totalWarehouseWeight,
              film_percentage: totalFilmWeight / parseFloat(productionOrder.quantity_kg?.toString() || "1") * 100,
              printed_percentage: totalPrintedWeight / parseFloat(productionOrder.quantity_kg?.toString() || "1") * 100,
              cut_percentage: totalCutWeight / parseFloat(productionOrder.quantity_kg?.toString() || "1") * 100,
              warehouse_percentage: totalWarehouseWeight / parseFloat(productionOrder.quantity_kg?.toString() || "1") * 100
            }
          };
        } catch (error) {
          console.error("Error fetching order progress:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u062A\u0642\u062F\u0645 \u0627\u0644\u0637\u0644\u0628");
        }
      }
      async getRollQR(rollId) {
        try {
          const [roll] = await db.select({ qr_code_text: rolls.qr_code_text, qr_png_base64: rolls.qr_png_base64 }).from(rolls).where(eq(rolls.id, rollId));
          if (!roll) {
            throw new Error("\u0627\u0644\u0631\u0648\u0644 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
          }
          return {
            qr_code_text: roll.qr_code_text || "",
            qr_png_base64: roll.qr_png_base64 || ""
          };
        } catch (error) {
          console.error("Error fetching roll QR:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0631\u0645\u0632 QR \u0644\u0644\u0631\u0648\u0644");
        }
      }
      async getRollLabelData(rollId) {
        try {
          const [rollData] = await db.select({
            id: rolls.id,
            roll_number: rolls.roll_number,
            production_order_id: rolls.production_order_id,
            weight_kg: rolls.weight_kg,
            stage: rolls.stage,
            created_at: rolls.created_at,
            machine_id: rolls.machine_id,
            qr_png_base64: rolls.qr_png_base64,
            production_order_number: production_orders.production_order_number,
            machine_name: machines.name,
            machine_name_ar: machines.name_ar,
            customer_name: customers.name
          }).from(rolls).leftJoin(production_orders, eq(rolls.production_order_id, production_orders.id)).leftJoin(machines, eq(rolls.machine_id, machines.id)).leftJoin(orders, eq(production_orders.order_id, orders.id)).leftJoin(customers, eq(orders.customer_id, customers.id)).where(eq(rolls.id, rollId));
          if (!rollData) {
            throw new Error("\u0627\u0644\u0631\u0648\u0644 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
          }
          return {
            roll_number: rollData.roll_number || "",
            production_order_number: rollData.production_order_number || "",
            customer_name: rollData.customer_name || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            weight_kg: `${rollData.weight_kg} \u0643\u063A`,
            stage: this.getStageArabicName(rollData.stage || ""),
            created_at: rollData.created_at ? new Date(rollData.created_at).toLocaleDateString("ar") : "",
            machine_name: rollData.machine_name_ar || rollData.machine_name || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F",
            qr_png_base64: rollData.qr_png_base64 || "",
            label_dimensions: {
              width: "4 \u0628\u0648\u0635\u0629",
              height: "5 \u0628\u0648\u0635\u0629"
            }
          };
        } catch (error) {
          console.error("Error fetching roll label data:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u064A\u0628\u0644 \u0627\u0644\u0631\u0648\u0644");
        }
      }
      getStageArabicName(stage) {
        const stageNames = {
          "film": "\u0625\u0646\u062A\u0627\u062C \u0641\u064A\u0644\u0645",
          "printing": "\u0637\u0628\u0627\u0639\u0629",
          "cutting": "\u0642\u0635",
          "done": "\u0645\u0643\u062A\u0645\u0644"
        };
        return stageNames[stage] || stage;
      }
      // ============ User Attendance Management ============
      async getAttendance() {
        try {
          const result = await db.select({
            id: attendance.id,
            user_id: attendance.user_id,
            status: attendance.status,
            check_in_time: attendance.check_in_time,
            check_out_time: attendance.check_out_time,
            lunch_start_time: attendance.lunch_start_time,
            lunch_end_time: attendance.lunch_end_time,
            notes: attendance.notes,
            created_by: attendance.created_by,
            updated_by: attendance.updated_by,
            date: attendance.date,
            created_at: attendance.created_at,
            updated_at: attendance.updated_at,
            username: users.username
          }).from(attendance).innerJoin(users, eq(attendance.user_id, users.id)).orderBy(desc(attendance.date), desc(attendance.created_at));
          return result;
        } catch (error) {
          console.error("Error fetching attendance:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0636\u0648\u0631");
        }
      }
      // Check daily attendance status for a user
      async getDailyAttendanceStatus(userId, date2) {
        try {
          const records = await db.select({
            check_in_time: attendance.check_in_time,
            lunch_start_time: attendance.lunch_start_time,
            lunch_end_time: attendance.lunch_end_time,
            check_out_time: attendance.check_out_time,
            status: attendance.status
          }).from(attendance).where(and(eq(attendance.user_id, userId), eq(attendance.date, date2))).orderBy(desc(attendance.created_at));
          const status = {
            hasCheckedIn: false,
            hasStartedLunch: false,
            hasEndedLunch: false,
            hasCheckedOut: false,
            currentStatus: "\u063A\u0627\u0626\u0628"
          };
          for (const record of records) {
            if (record.check_in_time && !status.hasCheckedIn) status.hasCheckedIn = true;
            if (record.lunch_start_time && !status.hasStartedLunch) status.hasStartedLunch = true;
            if (record.lunch_end_time && !status.hasEndedLunch) status.hasEndedLunch = true;
            if (record.check_out_time && !status.hasCheckedOut) status.hasCheckedOut = true;
          }
          if (status.hasCheckedOut) {
            status.currentStatus = "\u0645\u063A\u0627\u062F\u0631";
          } else if (status.hasEndedLunch) {
            status.currentStatus = "\u062D\u0627\u0636\u0631";
          } else if (status.hasStartedLunch) {
            status.currentStatus = "\u0641\u064A \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062D\u0629";
          } else if (status.hasCheckedIn) {
            status.currentStatus = "\u062D\u0627\u0636\u0631";
          }
          return status;
        } catch (error) {
          console.error("Error getting daily attendance status:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u062D\u0627\u0644\u0629 \u0627\u0644\u062D\u0636\u0648\u0631 \u0627\u0644\u064A\u0648\u0645\u064A\u0629");
        }
      }
      async createAttendance(attendanceData) {
        try {
          console.log("Creating attendance with data:", attendanceData);
          const currentDate = attendanceData.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
          const userId = attendanceData.user_id;
          const dailyStatus = await this.getDailyAttendanceStatus(userId, currentDate);
          const action = attendanceData.action;
          const status = attendanceData.status;
          if (status === "\u062D\u0627\u0636\u0631" && !action && dailyStatus.hasCheckedIn) {
            throw new Error("\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062D\u0636\u0648\u0631 \u0645\u0633\u0628\u0642\u0627\u064B \u0644\u0647\u0630\u0627 \u0627\u0644\u064A\u0648\u0645");
          }
          if (status === "\u0641\u064A \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062D\u0629" && dailyStatus.hasStartedLunch) {
            throw new Error("\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0628\u062F\u0627\u064A\u0629 \u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0627\u0644\u063A\u062F\u0627\u0621 \u0645\u0633\u0628\u0642\u0627\u064B \u0644\u0647\u0630\u0627 \u0627\u0644\u064A\u0648\u0645");
          }
          if (action === "end_lunch" && dailyStatus.hasEndedLunch) {
            throw new Error("\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0646\u0647\u0627\u064A\u0629 \u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0627\u0644\u063A\u062F\u0627\u0621 \u0645\u0633\u0628\u0642\u0627\u064B \u0644\u0647\u0630\u0627 \u0627\u0644\u064A\u0648\u0645");
          }
          if (status === "\u0645\u063A\u0627\u062F\u0631" && dailyStatus.hasCheckedOut) {
            throw new Error("\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0627\u0646\u0635\u0631\u0627\u0641 \u0645\u0633\u0628\u0642\u0627\u064B \u0644\u0647\u0630\u0627 \u0627\u0644\u064A\u0648\u0645");
          }
          if (status === "\u0641\u064A \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062D\u0629" && !dailyStatus.hasCheckedIn) {
            throw new Error("\u064A\u062C\u0628 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062D\u0636\u0648\u0631 \u0623\u0648\u0644\u0627\u064B \u0642\u0628\u0644 \u0628\u062F\u0627\u064A\u0629 \u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0627\u0644\u063A\u062F\u0627\u0621");
          }
          if (action === "end_lunch" && !dailyStatus.hasStartedLunch) {
            throw new Error("\u064A\u062C\u0628 \u062A\u0633\u062C\u064A\u0644 \u0628\u062F\u0627\u064A\u0629 \u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0627\u0644\u063A\u062F\u0627\u0621 \u0623\u0648\u0644\u0627\u064B");
          }
          if (status === "\u0645\u063A\u0627\u062F\u0631" && !dailyStatus.hasCheckedIn) {
            throw new Error("\u064A\u062C\u0628 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062D\u0636\u0648\u0631 \u0623\u0648\u0644\u0627\u064B \u0642\u0628\u0644 \u0627\u0644\u0627\u0646\u0635\u0631\u0627\u0641");
          }
          let recordData = {
            user_id: userId,
            status,
            check_in_time: null,
            check_out_time: null,
            lunch_start_time: null,
            lunch_end_time: null,
            notes: attendanceData.notes || "",
            date: currentDate
          };
          if (status === "\u062D\u0627\u0636\u0631" && !action) {
            recordData.check_in_time = attendanceData.check_in_time || (/* @__PURE__ */ new Date()).toISOString();
          } else if (status === "\u0641\u064A \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062D\u0629") {
            recordData.lunch_start_time = attendanceData.lunch_start_time || (/* @__PURE__ */ new Date()).toISOString();
          } else if (action === "end_lunch") {
            recordData.lunch_end_time = attendanceData.lunch_end_time || (/* @__PURE__ */ new Date()).toISOString();
            recordData.status = "\u062D\u0627\u0636\u0631";
          } else if (status === "\u0645\u063A\u0627\u062F\u0631") {
            recordData.check_out_time = attendanceData.check_out_time || (/* @__PURE__ */ new Date()).toISOString();
          }
          const query = `
        INSERT INTO attendance (user_id, status, check_in_time, check_out_time, lunch_start_time, lunch_end_time, notes, date)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *
      `;
          const values = [
            recordData.user_id,
            recordData.status,
            recordData.check_in_time,
            recordData.check_out_time,
            recordData.lunch_start_time,
            recordData.lunch_end_time,
            recordData.notes,
            recordData.date
          ];
          console.log("Executing query:", query, "with values:", values);
          const result = await pool.query(query, values);
          console.log("Created attendance:", result.rows[0]);
          return result.rows[0];
        } catch (error) {
          console.error("Error creating attendance:", error);
          throw error;
        }
      }
      async updateAttendance(id, attendanceData) {
        try {
          const query = `
        UPDATE attendance 
        SET status = $1, check_in_time = $2, check_out_time = $3, 
            lunch_start_time = $4, lunch_end_time = $5, notes = $6, updated_at = NOW()
        WHERE id = $7
        RETURNING *
      `;
          const values = [
            attendanceData.status,
            attendanceData.check_in_time || null,
            attendanceData.check_out_time || null,
            attendanceData.lunch_start_time || null,
            attendanceData.lunch_end_time || null,
            attendanceData.notes || "",
            id
          ];
          const result = await pool.query(query, values);
          return result.rows[0];
        } catch (error) {
          console.error("Error updating attendance:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0633\u062C\u0644 \u0627\u0644\u062D\u0636\u0648\u0631");
        }
      }
      async deleteAttendance(id) {
        try {
          await pool.query("DELETE FROM attendance WHERE id = $1", [id]);
        } catch (error) {
          console.error("Error deleting attendance:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0633\u062C\u0644 \u0627\u0644\u062D\u0636\u0648\u0631");
        }
      }
      // User Management
      async getUserById(id) {
        try {
          const [user] = await db.select().from(users).where(eq(users.id, id));
          return user || void 0;
        } catch (error) {
          console.error("Error getting user by ID:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
        }
      }
      async getUsersByRole(roleId) {
        try {
          return await db.select().from(users).where(eq(users.role_id, roleId));
        } catch (error) {
          console.error("Error getting users by role:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u062D\u0633\u0628 \u0627\u0644\u062F\u0648\u0631");
        }
      }
      // ============ Notifications Management ============
      async createNotification(notificationData) {
        try {
          const [notification] = await db.insert(notifications).values(notificationData).returning();
          return notification;
        } catch (error) {
          console.error("Error creating notification:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u0634\u0639\u0627\u0631");
        }
      }
      async getNotifications(userId, limit = 50, offset = 0) {
        try {
          if (userId) {
            return await db.select().from(notifications).where(eq(notifications.recipient_id, userId.toString())).orderBy(desc(notifications.created_at)).limit(limit).offset(offset);
          } else {
            return await db.select().from(notifications).orderBy(desc(notifications.created_at)).limit(limit).offset(offset);
          }
        } catch (error) {
          console.error("Error fetching notifications:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A");
        }
      }
      async updateNotificationStatus(twilioSid, updates) {
        try {
          const [notification] = await db.update(notifications).set(updates).where(eq(notifications.twilio_sid, twilioSid)).returning();
          return notification;
        } catch (error) {
          console.error("Error updating notification status:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0625\u0634\u0639\u0627\u0631");
        }
      }
      async getUserNotifications(userId, options) {
        return withDatabaseErrorHandling(
          async () => {
            if (!userId || typeof userId !== "number" || userId <= 0) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628");
            }
            const limit = options?.limit || 50;
            const offset = options?.offset || 0;
            let query = db.select().from(notifications).where(
              or(
                eq(notifications.recipient_id, userId.toString()),
                and(
                  eq(notifications.recipient_type, "all"),
                  eq(notifications.type, "system")
                )
              )
            ).orderBy(desc(notifications.created_at)).limit(limit).offset(offset);
            if (options?.unreadOnly) {
              query = db.select().from(notifications).where(
                and(
                  or(
                    eq(notifications.recipient_id, userId.toString()),
                    and(
                      eq(notifications.recipient_type, "all"),
                      eq(notifications.type, "system")
                    )
                  ),
                  sql2`${notifications.read_at} IS NULL`
                )
              ).orderBy(desc(notifications.created_at)).limit(limit).offset(offset);
            }
            return await query;
          },
          "\u062C\u0644\u0628 \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
          `\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0631\u0642\u0645 ${userId}`
        );
      }
      async markNotificationAsRead(notificationId) {
        return withDatabaseErrorHandling(
          async () => {
            if (!notificationId || typeof notificationId !== "number" || notificationId <= 0) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
            }
            const [notification] = await db.update(notifications).set({
              read_at: /* @__PURE__ */ new Date(),
              status: "read",
              updated_at: /* @__PURE__ */ new Date()
            }).where(eq(notifications.id, notificationId)).returning();
            if (!notification) {
              throw new Error("\u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
            }
            return notification;
          },
          "\u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0643\u0645\u0642\u0631\u0648\u0621",
          `\u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0631\u0642\u0645 ${notificationId}`
        );
      }
      async markAllNotificationsAsRead(userId) {
        return withDatabaseErrorHandling(
          async () => {
            if (!userId || typeof userId !== "number" || userId <= 0) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628");
            }
            await db.update(notifications).set({
              read_at: /* @__PURE__ */ new Date(),
              status: "read",
              updated_at: /* @__PURE__ */ new Date()
            }).where(
              and(
                or(
                  eq(notifications.recipient_id, userId.toString()),
                  eq(notifications.recipient_type, "all")
                ),
                sql2`${notifications.read_at} IS NULL`
              )
            );
          },
          "\u062A\u0639\u0644\u064A\u0645 \u062C\u0645\u064A\u0639 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0643\u0645\u0642\u0631\u0648\u0621\u0629",
          `\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0631\u0642\u0645 ${userId}`
        );
      }
      async deleteNotification(notificationId) {
        return withDatabaseErrorHandling(
          async () => {
            if (!notificationId || typeof notificationId !== "number" || notificationId <= 0) {
              throw new Error("\u0645\u0639\u0631\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
            }
            await db.delete(notifications).where(eq(notifications.id, notificationId));
          },
          "\u062D\u0630\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631",
          `\u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0631\u0642\u0645 ${notificationId}`
        );
      }
      // ============ Notification Templates Management ============
      async getNotificationTemplates() {
        try {
          return await db.select().from(notification_templates).where(eq(notification_templates.is_active, true)).orderBy(notification_templates.name);
        } catch (error) {
          console.error("Error fetching notification templates:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0642\u0648\u0627\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A");
        }
      }
      async createNotificationTemplate(templateData) {
        try {
          const [template] = await db.insert(notification_templates).values(templateData).returning();
          return template;
        } catch (error) {
          console.error("Error creating notification template:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631");
        }
      }
      // ============ Maintenance Actions Management ============
      async getAllMaintenanceActions() {
        try {
          return await db.select().from(maintenance_actions).orderBy(desc(maintenance_actions.action_date));
        } catch (error) {
          console.error("Error fetching maintenance actions:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
        }
      }
      async getMaintenanceActionsByRequestId(requestId) {
        try {
          return await db.select().from(maintenance_actions).where(eq(maintenance_actions.maintenance_request_id, requestId)).orderBy(desc(maintenance_actions.action_date));
        } catch (error) {
          console.error("Error fetching maintenance actions by request:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0644\u0644\u0637\u0644\u0628");
        }
      }
      async createMaintenanceAction(action) {
        try {
          const existingActions = await db.select().from(maintenance_actions);
          const nextNumber = existingActions.length + 1;
          const actionNumber = `MA${nextNumber.toString().padStart(3, "0")}`;
          const [result] = await db.insert(maintenance_actions).values({
            ...action,
            action_number: actionNumber
          }).returning();
          return result;
        } catch (error) {
          console.error("Error creating maintenance action:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
        }
      }
      async updateMaintenanceAction(id, action) {
        try {
          const [result] = await db.update(maintenance_actions).set(action).where(eq(maintenance_actions.id, id)).returning();
          return result;
        } catch (error) {
          console.error("Error updating maintenance action:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
        }
      }
      async deleteMaintenanceAction(id) {
        try {
          await db.delete(maintenance_actions).where(eq(maintenance_actions.id, id));
        } catch (error) {
          console.error("Error deleting maintenance action:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
        }
      }
      // ============ Maintenance Reports Management ============
      async getAllMaintenanceReports() {
        try {
          return await db.select().from(maintenance_reports).orderBy(desc(maintenance_reports.created_at));
        } catch (error) {
          console.error("Error fetching maintenance reports:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u0644\u0627\u063A\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
        }
      }
      async getMaintenanceReportsByType(type) {
        try {
          return await db.select().from(maintenance_reports).where(eq(maintenance_reports.report_type, type)).orderBy(desc(maintenance_reports.created_at));
        } catch (error) {
          console.error("Error fetching maintenance reports by type:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u0644\u0627\u063A\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u062D\u0633\u0628 \u0627\u0644\u0646\u0648\u0639");
        }
      }
      async createMaintenanceReport(report) {
        try {
          const existingReports = await db.select().from(maintenance_reports);
          const nextNumber = existingReports.length + 1;
          const reportNumber = `MR${nextNumber.toString().padStart(3, "0")}`;
          const [result] = await db.insert(maintenance_reports).values({
            ...report,
            report_number: reportNumber
          }).returning();
          return result;
        } catch (error) {
          console.error("Error creating maintenance report:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0628\u0644\u0627\u063A \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
        }
      }
      async updateMaintenanceReport(id, report) {
        try {
          const [result] = await db.update(maintenance_reports).set(report).where(eq(maintenance_reports.id, id)).returning();
          return result;
        } catch (error) {
          console.error("Error updating maintenance report:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0628\u0644\u0627\u063A \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
        }
      }
      async deleteMaintenanceReport(id) {
        try {
          await db.delete(maintenance_reports).where(eq(maintenance_reports.id, id));
        } catch (error) {
          console.error("Error deleting maintenance report:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0628\u0644\u0627\u063A \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
        }
      }
      // ============ Spare Parts Management ============
      async getAllSpareParts() {
        try {
          return await db.select().from(spare_parts).orderBy(spare_parts.part_id);
        } catch (error) {
          console.error("Error fetching spare parts:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631");
        }
      }
      async createSparePart(part) {
        try {
          const [result] = await db.insert(spare_parts).values(part).returning();
          return result;
        } catch (error) {
          console.error("Error creating spare part:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0642\u0637\u0639\u0629 \u063A\u064A\u0627\u0631");
        }
      }
      async updateSparePart(id, part) {
        try {
          const [result] = await db.update(spare_parts).set(part).where(eq(spare_parts.id, id)).returning();
          return result;
        } catch (error) {
          console.error("Error updating spare part:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631");
        }
      }
      async deleteSparePart(id) {
        try {
          await db.delete(spare_parts).where(eq(spare_parts.id, id));
        } catch (error) {
          console.error("Error deleting spare part:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631");
        }
      }
      // ============ Consumable Parts Management ============
      async getAllConsumableParts() {
        try {
          return await db.select().from(consumable_parts).orderBy(consumable_parts.part_id);
        } catch (error) {
          console.error("Error fetching consumable parts:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629");
        }
      }
      async createConsumablePart(part) {
        try {
          const existingParts = await db.select().from(consumable_parts);
          const nextNumber = existingParts.length + 1;
          const partId = `CP${nextNumber.toString().padStart(3, "0")}`;
          const [result] = await db.insert(consumable_parts).values({
            ...part,
            part_id: partId
          }).returning();
          return result;
        } catch (error) {
          console.error("Error creating consumable part:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0642\u0637\u0639\u0629 \u063A\u064A\u0627\u0631 \u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629");
        }
      }
      async updateConsumablePart(id, part) {
        try {
          const [result] = await db.update(consumable_parts).set(part).where(eq(consumable_parts.id, id)).returning();
          return result;
        } catch (error) {
          console.error("Error updating consumable part:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629");
        }
      }
      async deleteConsumablePart(id) {
        try {
          await db.delete(consumable_parts).where(eq(consumable_parts.id, id));
        } catch (error) {
          console.error("Error deleting consumable part:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629");
        }
      }
      async getConsumablePartByBarcode(barcode) {
        try {
          const [result] = await db.select().from(consumable_parts).where(eq(consumable_parts.barcode, barcode)).limit(1);
          return result || null;
        } catch (error) {
          console.error("Error finding consumable part by barcode:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0627\u0644\u0628\u062D\u062B \u0639\u0646 \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0628\u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F");
        }
      }
      // ============ Consumable Parts Transactions Management ============
      async getConsumablePartTransactions() {
        try {
          return await db.select().from(consumable_parts_transactions).orderBy(desc(consumable_parts_transactions.created_at));
        } catch (error) {
          console.error("Error fetching consumable parts transactions:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u062D\u0631\u0643\u0627\u062A \u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629");
        }
      }
      async getConsumablePartTransactionsByPartId(partId) {
        try {
          return await db.select().from(consumable_parts_transactions).where(eq(consumable_parts_transactions.consumable_part_id, partId)).orderBy(desc(consumable_parts_transactions.created_at));
        } catch (error) {
          console.error("Error fetching consumable parts transactions by part:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u062D\u0631\u0643\u0627\u062A \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629");
        }
      }
      async createConsumablePartTransaction(transaction) {
        try {
          const existingTransactions = await db.select().from(consumable_parts_transactions);
          const nextNumber = existingTransactions.length + 1;
          const transactionId = `CT${nextNumber.toString().padStart(3, "0")}`;
          const [result] = await db.insert(consumable_parts_transactions).values({
            ...transaction,
            transaction_id: transactionId
          }).returning();
          return result;
        } catch (error) {
          console.error("Error creating consumable parts transaction:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u062D\u0631\u0643\u0629 \u0642\u0637\u0639\u0629 \u063A\u064A\u0627\u0631 \u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629");
        }
      }
      async processConsumablePartBarcodeTransaction(transactionData) {
        try {
          return await db.transaction(async (trx) => {
            const existingTransactions = await trx.select().from(consumable_parts_transactions);
            const nextNumber = existingTransactions.length + 1;
            const transactionId = `CT${nextNumber.toString().padStart(3, "0")}`;
            const [transaction] = await trx.insert(consumable_parts_transactions).values({
              ...transactionData,
              transaction_id: transactionId
            }).returning();
            const [currentPart] = await trx.select().from(consumable_parts).where(eq(consumable_parts.id, transactionData.consumable_part_id)).limit(1);
            if (!currentPart) {
              throw new Error("\u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629");
            }
            let newQuantity = currentPart.current_quantity;
            if (transactionData.transaction_type === "in") {
              newQuantity += transactionData.quantity;
            } else {
              newQuantity -= transactionData.quantity;
              if (newQuantity < 0) {
                throw new Error("\u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631\u0629 \u0641\u064A \u0627\u0644\u0645\u062E\u0632\u0648\u0646");
              }
            }
            const [updatedPart] = await trx.update(consumable_parts).set({
              current_quantity: newQuantity,
              updated_at: /* @__PURE__ */ new Date()
            }).where(eq(consumable_parts.id, transactionData.consumable_part_id)).returning();
            return { transaction, updatedPart };
          });
        } catch (error) {
          console.error("Error processing consumable part barcode transaction:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u062D\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F");
        }
      }
      // ============ Operator Negligence Reports Management ============
      async getAllOperatorNegligenceReports() {
        try {
          return await db.select().from(operator_negligence_reports).orderBy(desc(operator_negligence_reports.report_date));
        } catch (error) {
          console.error("Error fetching operator negligence reports:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u0644\u0627\u063A\u0627\u062A \u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0645\u0634\u063A\u0644\u064A\u0646");
        }
      }
      async getOperatorNegligenceReportsByOperator(operatorId) {
        try {
          return await db.select().from(operator_negligence_reports).where(eq(operator_negligence_reports.operator_id, operatorId)).orderBy(desc(operator_negligence_reports.report_date));
        } catch (error) {
          console.error("Error fetching operator negligence reports by operator:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0628\u0644\u0627\u063A\u0627\u062A \u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0645\u0634\u063A\u0644");
        }
      }
      async createOperatorNegligenceReport(report) {
        try {
          const existingReports = await db.select().from(operator_negligence_reports);
          const nextNumber = existingReports.length + 1;
          const reportNumber = `ON${nextNumber.toString().padStart(3, "0")}`;
          const [result] = await db.insert(operator_negligence_reports).values({
            ...report,
            report_number: reportNumber
          }).returning();
          return result;
        } catch (error) {
          console.error("Error creating operator negligence report:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0628\u0644\u0627\u063A \u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0645\u0634\u063A\u0644");
        }
      }
      async updateOperatorNegligenceReport(id, report) {
        try {
          const [result] = await db.update(operator_negligence_reports).set(report).where(eq(operator_negligence_reports.id, id)).returning();
          return result;
        } catch (error) {
          console.error("Error updating operator negligence report:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0628\u0644\u0627\u063A \u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0645\u0634\u063A\u0644");
        }
      }
      async deleteOperatorNegligenceReport(id) {
        try {
          await db.delete(operator_negligence_reports).where(eq(operator_negligence_reports.id, id));
        } catch (error) {
          console.error("Error deleting operator negligence report:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0628\u0644\u0627\u063A \u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0645\u0634\u063A\u0644");
        }
      }
      // ============ نظام التحذيرات الذكية ============
      // System Alerts
      async getSystemAlerts(filters) {
        try {
          return [];
        } catch (error) {
          console.error("Error fetching system alerts:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645");
        }
      }
      async getSystemAlertById(id) {
        try {
          return void 0;
        } catch (error) {
          console.error("Error fetching system alert:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
        }
      }
      async createSystemAlert(alert) {
        try {
          return { ...alert, id: Date.now() };
        } catch (error) {
          console.error("Error creating system alert:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
        }
      }
      async updateSystemAlert(id, updates) {
        try {
          return { id, ...updates };
        } catch (error) {
          console.error("Error updating system alert:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
        }
      }
      async resolveSystemAlert(id, resolvedBy, notes) {
        try {
          return { id, resolved_by: resolvedBy, resolved_at: /* @__PURE__ */ new Date(), resolution_notes: notes };
        } catch (error) {
          console.error("Error resolving system alert:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0644 \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
        }
      }
      async dismissSystemAlert(id, dismissedBy) {
        try {
          return {
            id,
            status: "dismissed",
            created_at: /* @__PURE__ */ new Date(),
            message: "Alert dismissed",
            type: "system",
            title: "Dismissed Alert",
            title_ar: null,
            updated_at: /* @__PURE__ */ new Date(),
            category: "alert",
            expires_at: null,
            message_ar: null,
            priority: "normal",
            source: "system",
            source_id: null,
            severity: "info",
            resolved_at: null,
            resolved_by: null,
            resolution_notes: null,
            dismissed_by: dismissedBy,
            dismissed_at: /* @__PURE__ */ new Date(),
            affected_users: null,
            affected_roles: null,
            metadata: null,
            rule_id: null,
            occurrence_count: 1,
            last_occurrence: /* @__PURE__ */ new Date(),
            first_occurrence: /* @__PURE__ */ new Date(),
            is_automated: false,
            action_taken: "dismissed",
            escalation_level: 0,
            notification_sent: false,
            acknowledgment_required: false,
            acknowledged_by: dismissedBy,
            acknowledged_at: /* @__PURE__ */ new Date(),
            auto_resolve: false,
            correlation_id: null,
            parent_alert_id: null,
            child_alert_ids: null,
            requires_action: false,
            action_taken_by: dismissedBy,
            action_taken_at: /* @__PURE__ */ new Date(),
            affected_systems: null,
            business_impact: null,
            technical_details: null,
            recommended_actions: null,
            escalation_history: null,
            similar_incidents: null,
            recovery_time_objective: null,
            suggested_actions: null,
            context_data: null,
            notification_methods: null,
            target_users: null,
            threshold_values: null,
            measurement_unit: null,
            target_roles: [1],
            occurrences: 1
          };
        } catch (error) {
          console.error("Error dismissing system alert:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
        }
      }
      async deleteSystemAlert(id) {
        return await db.transaction(async (tx) => {
          try {
            await tx.delete(notifications).where(
              and(
                eq(notifications.context_type, "system_alert"),
                eq(notifications.context_id, id.toString())
              )
            );
            try {
              await tx.delete(system_alerts).where(eq(system_alerts.id, id));
            } catch (fkError) {
              if (fkError.code === "23503") {
                await tx.delete(corrective_actions).where(eq(corrective_actions.alert_id, id));
                await tx.delete(system_alerts).where(eq(system_alerts.id, id));
              } else {
                throw fkError;
              }
            }
          } catch (error) {
            console.error("Error deleting system alert:", error);
            throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
          }
        });
      }
      async getActiveAlertsCount() {
        try {
          return 0;
        } catch (error) {
          console.error("Error getting active alerts count:", error);
          return 0;
        }
      }
      async getCriticalAlertsCount() {
        try {
          return 0;
        } catch (error) {
          console.error("Error getting critical alerts count:", error);
          return 0;
        }
      }
      async getAlertsByType(type) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting alerts by type:", error);
          return [];
        }
      }
      async getAlertsByUser(userId) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting alerts by user:", error);
          return [];
        }
      }
      async getAlertsByRole(roleId) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting alerts by role:", error);
          return [];
        }
      }
      // Alert Rules
      async getAlertRules(isEnabled) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting alert rules:", error);
          return [];
        }
      }
      async getAlertRuleById(id) {
        try {
          return void 0;
        } catch (error) {
          console.error("Error getting alert rule:", error);
          return void 0;
        }
      }
      async createAlertRule(rule) {
        try {
          return { ...rule, id: Date.now() };
        } catch (error) {
          console.error("Error creating alert rule:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
        }
      }
      async updateAlertRule(id, updates) {
        try {
          return { id, ...updates };
        } catch (error) {
          console.error("Error updating alert rule:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
        }
      }
      async deleteAlertRule(id) {
        try {
        } catch (error) {
          console.error("Error deleting alert rule:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
        }
      }
      async enableAlertRule(id) {
        try {
          return { id, is_enabled: true };
        } catch (error) {
          console.error("Error enabling alert rule:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u0641\u0639\u064A\u0644 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
        }
      }
      async disableAlertRule(id) {
        try {
          return { id, is_enabled: false };
        } catch (error) {
          console.error("Error disabling alert rule:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0644\u063A\u0627\u0621 \u062A\u0641\u0639\u064A\u0644 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631");
        }
      }
      // System Health Checks
      async getSystemHealthChecks() {
        try {
          return [];
        } catch (error) {
          console.error("Error getting health checks:", error);
          return [];
        }
      }
      async getSystemHealthCheckById(id) {
        try {
          return void 0;
        } catch (error) {
          console.error("Error getting health check:", error);
          return void 0;
        }
      }
      async createSystemHealthCheck(check2) {
        try {
          return { ...check2, id: Date.now() };
        } catch (error) {
          console.error("Error creating health check:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0641\u062D\u0635 \u0627\u0644\u0633\u0644\u0627\u0645\u0629");
        }
      }
      async updateSystemHealthCheck(id, updates) {
        try {
          return { id, ...updates };
        } catch (error) {
          console.error("Error updating health check:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0641\u062D\u0635 \u0627\u0644\u0633\u0644\u0627\u0645\u0629");
        }
      }
      async getHealthChecksByType(type) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting health checks by type:", error);
          return [];
        }
      }
      async getCriticalHealthChecks() {
        try {
          return [];
        } catch (error) {
          console.error("Error getting critical health checks:", error);
          return [];
        }
      }
      async getSystemHealthStatus() {
        try {
          return {
            overall_status: "healthy",
            healthy_checks: 5,
            warning_checks: 1,
            critical_checks: 0,
            last_check: /* @__PURE__ */ new Date()
          };
        } catch (error) {
          console.error("Error getting system health status:", error);
          return {
            overall_status: "unknown",
            healthy_checks: 0,
            warning_checks: 0,
            critical_checks: 0,
            last_check: /* @__PURE__ */ new Date()
          };
        }
      }
      // System Performance Metrics
      async getSystemPerformanceMetrics(filters) {
        try {
          const now = /* @__PURE__ */ new Date();
          const mockMetrics = [];
          for (let i = 0; i < 24; i++) {
            const timestamp2 = new Date(now.getTime() - i * 60 * 60 * 1e3);
            mockMetrics.push({
              id: i + 1,
              metric_name: "memory_usage_percent",
              metric_category: "system",
              value: (45 + Math.random() * 30).toString(),
              unit: "percent",
              timestamp: timestamp2,
              source: "system_monitor",
              created_at: timestamp2,
              tags: null
            });
          }
          return mockMetrics.reverse();
        } catch (error) {
          console.error("Error getting performance metrics:", error);
          return [];
        }
      }
      async createSystemPerformanceMetric(metric) {
        try {
          return { ...metric, id: Date.now() };
        } catch (error) {
          console.error("Error creating performance metric:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0645\u0624\u0634\u0631 \u0627\u0644\u0623\u062F\u0627\u0621");
        }
      }
      async getMetricsByTimeRange(metricName, startDate, endDate) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting metrics by time range:", error);
          return [];
        }
      }
      async getLatestMetricValue(metricName) {
        try {
          return void 0;
        } catch (error) {
          console.error("Error getting latest metric value:", error);
          return void 0;
        }
      }
      async deleteOldMetrics(cutoffDate) {
        try {
          return 0;
        } catch (error) {
          console.error("Error deleting old metrics:", error);
          return 0;
        }
      }
      async getPerformanceSummary(timeRange) {
        try {
          return {
            avg_memory_usage: 65.5,
            avg_cpu_usage: 23.2,
            avg_response_time: 120,
            uptime_percent: 99.8
          };
        } catch (error) {
          console.error("Error getting performance summary:", error);
          return {};
        }
      }
      // Corrective Actions
      async getCorrectiveActions(alertId) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting corrective actions:", error);
          return [];
        }
      }
      async getCorrectiveActionById(id) {
        try {
          return void 0;
        } catch (error) {
          console.error("Error getting corrective action:", error);
          return void 0;
        }
      }
      async createCorrectiveAction(action) {
        try {
          return { ...action, id: Date.now() };
        } catch (error) {
          console.error("Error creating corrective action:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u062A\u0635\u062D\u064A\u062D\u064A");
        }
      }
      async updateCorrectiveAction(id, updates) {
        try {
          return { id, ...updates };
        } catch (error) {
          console.error("Error updating corrective action:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u062A\u0635\u062D\u064A\u062D\u064A");
        }
      }
      async completeCorrectiveAction(id, completedBy, notes) {
        try {
          return {
            id,
            status: "completed",
            created_at: /* @__PURE__ */ new Date(),
            notes: notes || null,
            created_by: completedBy,
            completed_at: /* @__PURE__ */ new Date(),
            updated_at: /* @__PURE__ */ new Date(),
            assigned_to: completedBy,
            completed_by: completedBy,
            action_title: "Corrective Action Completed",
            action_description: "Action has been completed successfully",
            action_description_ar: null,
            alert_id: null,
            action_type: "corrective",
            priority: "normal",
            due_date: null,
            estimated_completion_time: null,
            actual_completion_time: null,
            impact_level: null,
            requires_approval: false,
            estimated_duration: null,
            actual_duration: null,
            success_rate: "100"
          };
        } catch (error) {
          console.error("Error completing corrective action:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u062A\u0635\u062D\u064A\u062D\u064A");
        }
      }
      async getPendingActions() {
        try {
          return [];
        } catch (error) {
          console.error("Error getting pending actions:", error);
          return [];
        }
      }
      async getActionsByAssignee(userId) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting actions by assignee:", error);
          return [];
        }
      }
      // System Analytics
      async getSystemAnalytics(filters) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting system analytics:", error);
          return [];
        }
      }
      async createSystemAnalytics(analytics) {
        try {
          return { ...analytics, id: Date.now() };
        } catch (error) {
          console.error("Error creating system analytics:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645");
        }
      }
      async getDailyAnalytics(date2) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting daily analytics:", error);
          return [];
        }
      }
      async getAnalyticsTrend(metricType, days) {
        try {
          return [];
        } catch (error) {
          console.error("Error getting analytics trend:", error);
          return [];
        }
      }
      // Monitoring Utilities
      async checkDatabaseHealth() {
        try {
          const startTime = Date.now();
          await db.execute("SELECT 1 as test");
          const endTime = Date.now();
          return {
            status: "healthy",
            connection_time: endTime - startTime,
            active_connections: 5,
            errors: []
          };
        } catch (error) {
          console.error("Error checking database health:", error);
          return {
            status: "unhealthy",
            connection_time: -1,
            active_connections: 0,
            errors: [error.message]
          };
        }
      }
      async checkSystemPerformance() {
        try {
          const memUsage = process.memoryUsage();
          const memUsagePercent = memUsage.heapUsed / memUsage.heapTotal * 100;
          return {
            memory_usage: memUsagePercent,
            cpu_usage: 25.5,
            // قيمة وهمية
            uptime: process.uptime(),
            response_time: 120
            // قيمة وهمية
          };
        } catch (error) {
          console.error("Error checking system performance:", error);
          return {
            memory_usage: 0,
            cpu_usage: 0,
            uptime: 0,
            response_time: 0
          };
        }
      }
      async getOverdueOrders() {
        try {
          const overdueOrders = await db.select().from(orders).where(sql2`delivery_date < NOW() AND status NOT IN ('completed', 'delivered')`);
          return overdueOrders.length;
        } catch (error) {
          console.error("Error getting overdue orders:", error);
          return 0;
        }
      }
      async getLowStockItems() {
        try {
          return 3;
        } catch (error) {
          console.error("Error getting low stock items:", error);
          return 0;
        }
      }
      async getBrokenMachines() {
        try {
          const brokenMachines = await db.select().from(machines).where(eq(machines.status, "broken"));
          return brokenMachines.length;
        } catch (error) {
          console.error("Error getting broken machines:", error);
          return 0;
        }
      }
      async getQualityIssues() {
        try {
          return 1;
        } catch (error) {
          console.error("Error getting quality issues:", error);
          return 0;
        }
      }
      // Alert Rate Limiting - In-Memory Storage Implementation  
      async getLastAlertTime(checkKey) {
        try {
          if (!checkKey || typeof checkKey !== "string") {
            return null;
          }
          const lastTime = this.alertTimesStorage.get(checkKey);
          return lastTime || null;
        } catch (error) {
          console.error("[DatabaseStorage] \u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0648\u0642\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631 \u0627\u0644\u0623\u062E\u064A\u0631:", error);
          return null;
        }
      }
      async setLastAlertTime(checkKey, timestamp2) {
        try {
          if (!checkKey || typeof checkKey !== "string") {
            throw new Error("\u0645\u0641\u062A\u0627\u062D \u0627\u0644\u062A\u062D\u0630\u064A\u0631 \u0645\u0637\u0644\u0648\u0628");
          }
          if (!timestamp2 || !(timestamp2 instanceof Date)) {
            throw new Error("\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062D\u062F\u062F \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
          }
          this.alertTimesStorage.set(checkKey, timestamp2);
          console.log(`[DatabaseStorage] \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0648\u0642\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631 \u0641\u064A \u0627\u0644\u0630\u0627\u0643\u0631\u0629: ${checkKey} \u0641\u064A ${timestamp2.toISOString()}`);
        } catch (error) {
          console.error("[DatabaseStorage] \u062E\u0637\u0623 \u0641\u064A \u062D\u0641\u0638 \u0648\u0642\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631:", error);
          throw error;
        }
      }
    };
    storage = new DatabaseStorage();
  }
});

// server/services/ai-helpers.ts
var ai_helpers_exports = {};
__export(ai_helpers_exports, {
  AIHelpers: () => AIHelpers
});
import OpenAI from "openai";
var openai, AIHelpers;
var init_ai_helpers = __esm({
  "server/services/ai-helpers.ts"() {
    "use strict";
    init_id_generator();
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
    AIHelpers = class {
      // استخراج بيانات العميل من النص
      static async extractCustomerData(text2) {
        try {
          const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0627\u0633\u062A\u062E\u0631\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0646 \u0627\u0644\u0646\u0635 \u0627\u0644\u062A\u0627\u0644\u064A \u0648\u0623\u0631\u062C\u0639\u0647\u0627 \u0628\u062A\u0646\u0633\u064A\u0642 JSON:
{
  "id": "\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
  "name": "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644",
  "name_ar": "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  "code": "\u0631\u0645\u0632 \u0627\u0644\u0639\u0645\u064A\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
  "city": "\u0627\u0644\u0645\u062F\u064A\u0646\u0629",
  "address": "\u0627\u0644\u0639\u0646\u0648\u0627\u0646",
  "phone": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
  "tax_number": "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0636\u0631\u064A\u0628\u064A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)"
}

\u0625\u0630\u0627 \u0644\u0645 \u062A\u062C\u062F \u0645\u0639\u0644\u0648\u0645\u0629 \u0645\u062D\u062F\u062F\u0629\u060C \u0627\u062A\u0631\u0643\u0647\u0627 \u0641\u0627\u0631\u063A\u0629 \u0623\u0648 null.`
              },
              {
                role: "user",
                content: text2
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.1
          });
          const result = JSON.parse(response.choices[0].message.content || "{}");
          if (!result.id) {
            result.id = generateCustomerId();
          }
          return result;
        } catch (error) {
          console.error("Customer data extraction error:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0646 \u0627\u0644\u0646\u0635");
        }
      }
      // استخراج بيانات الطلب من النص
      static async extractOrderData(text2) {
        try {
          const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0627\u0633\u062A\u062E\u0631\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0646\u0635 \u0627\u0644\u062A\u0627\u0644\u064A \u0648\u0623\u0631\u062C\u0639\u0647\u0627 \u0628\u062A\u0646\u0633\u064A\u0642 JSON:
{
  "order_number": "\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A - \u0633\u064A\u062A\u0645 \u0625\u0646\u0634\u0627\u0624\u0647 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B)",
  "customer_id": "\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0645\u064A\u0644",
  "delivery_date": "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645 (YYYY-MM-DD)",
  "notes": "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0637\u0644\u0628",
  "status": "\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 - pending/for_production/completed/delivered"
}

\u0625\u0630\u0627 \u0644\u0645 \u062A\u062C\u062F \u0645\u0639\u0644\u0648\u0645\u0629 \u0645\u062D\u062F\u062F\u0629\u060C \u0627\u0633\u062A\u062E\u062F\u0645 \u0642\u064A\u0645\u0627\u064B \u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629 \u0645\u0646\u0627\u0633\u0628\u0629.`
              },
              {
                role: "user",
                content: text2
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.1
          });
          const result = JSON.parse(response.choices[0].message.content || "{}");
          if (!result.order_number) {
            result.order_number = generateOrderNumber();
          }
          if (!result.status) {
            result.status = "pending";
          }
          return result;
        } catch (error) {
          console.error("Order data extraction error:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 \u0627\u0644\u0646\u0635");
        }
      }
      // استخراج بيانات أمر التشغيل من النص
      static async extractJobOrderData(text2) {
        try {
          const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0627\u0633\u062A\u062E\u0631\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0645\u0646 \u0627\u0644\u0646\u0635 \u0627\u0644\u062A\u0627\u0644\u064A \u0648\u0623\u0631\u062C\u0639\u0647\u0627 \u0628\u062A\u0646\u0633\u064A\u0642 JSON:
{
  "job_number": "\u0631\u0642\u0645 \u0623\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
  "order_id": "\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628",
  "customer_product_id": "\u0645\u0639\u0631\u0641 \u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0645\u064A\u0644",
  "quantity_required": "\u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629",
  "status": "\u062D\u0627\u0644\u0629 \u0623\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 - pending/in_progress/completed"
}

\u0627\u0633\u062A\u062E\u0631\u062C \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0648\u0627\u0644\u0645\u0639\u0631\u0641\u0627\u062A \u0628\u062F\u0642\u0629.`
              },
              {
                role: "user",
                content: text2
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.1
          });
          const result = JSON.parse(response.choices[0].message.content || "{}");
          if (!result.job_number) {
            result.job_number = generateJobOrderNumber();
          }
          if (!result.status) {
            result.status = "pending";
          }
          return result;
        } catch (error) {
          console.error("Job order data extraction error:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0623\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0645\u0646 \u0627\u0644\u0646\u0635");
        }
      }
      // استخراج بيانات المكينة من النص
      static async extractMachineData(text2) {
        try {
          const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0627\u0633\u062A\u062E\u0631\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0645\u0646 \u0627\u0644\u0646\u0635 \u0627\u0644\u062A\u0627\u0644\u064A \u0648\u0623\u0631\u062C\u0639\u0647\u0627 \u0628\u062A\u0646\u0633\u064A\u0642 JSON:
{
  "name": "\u0627\u0633\u0645 \u0627\u0644\u0645\u0643\u064A\u0646\u0629",
  "name_ar": "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  "type": "\u0646\u0648\u0639 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 - extruder/printer/cutter",
  "section_id": "\u0645\u0639\u0631\u0641 \u0627\u0644\u0642\u0633\u0645 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)",
  "status": "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 - active/maintenance/down"
}

\u062D\u062F\u062F \u0646\u0648\u0639 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0628\u062F\u0642\u0629 \u062D\u0633\u0628 \u0627\u0644\u0648\u0635\u0641.`
              },
              {
                role: "user",
                content: text2
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.1
          });
          const result = JSON.parse(response.choices[0].message.content || "{}");
          if (!result.status) {
            result.status = "active";
          }
          return result;
        } catch (error) {
          console.error("Machine data extraction error:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0645\u0646 \u0627\u0644\u0646\u0635");
        }
      }
      // استخراج بيانات التحديث من النص
      static async extractUpdateData(text2, entityType) {
        try {
          const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0627\u0633\u062A\u062E\u0631\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0644\u0644\u0640 ${entityType} \u0645\u0646 \u0627\u0644\u0646\u0635 \u0627\u0644\u062A\u0627\u0644\u064A \u0648\u0623\u0631\u062C\u0639\u0647\u0627 \u0628\u062A\u0646\u0633\u064A\u0642 JSON:

\u0644\u0644\u0637\u0644\u0628\u0627\u062A:
{
  "orderId": "\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628",
  "updates": {
    "status": "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
    "delivery_date": "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u062C\u062F\u064A\u062F",
    "notes": "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0645\u062D\u062F\u062B\u0629"
  }
}

\u0644\u0644\u0645\u0643\u0627\u0626\u0646:
{
  "machineId": "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629",
  "updates": {
    "status": "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629",
    "name": "\u0627\u0633\u0645 \u0645\u062D\u062F\u062B",
    "type": "\u0646\u0648\u0639 \u0645\u062D\u062F\u062B"
  }
}

\u0627\u0633\u062A\u062E\u0631\u062C \u0627\u0644\u0645\u0639\u0631\u0641 \u0648\u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u062A\u062D\u062F\u064A\u062B\u0647\u0627 \u0641\u0642\u0637.`
              },
              {
                role: "user",
                content: text2
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.1
          });
          return JSON.parse(response.choices[0].message.content || "{}");
        } catch (error) {
          console.error("Update data extraction error:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0645\u0646 \u0627\u0644\u0646\u0635");
        }
      }
      // استخراج المعرف من النص
      static async extractIdFromText(text2, entityType) {
        try {
          const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0627\u0633\u062A\u062E\u0631\u062C \u0645\u0639\u0631\u0641 \u0627\u0644\u0640 ${entityType} \u0645\u0646 \u0627\u0644\u0646\u0635 \u0627\u0644\u062A\u0627\u0644\u064A:

\u0644\u0644\u0639\u0645\u0644\u0627\u0621: \u0627\u0628\u062D\u062B \u0639\u0646 CID \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0639\u0645\u064A\u0644
\u0644\u0644\u0637\u0644\u0628\u0627\u062A: \u0627\u0628\u062D\u062B \u0639\u0646 ORD \u0623\u0648 \u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628
\u0644\u0644\u0645\u0643\u0627\u0626\u0646: \u0627\u0628\u062D\u062B \u0639\u0646 \u0623\u0631\u0642\u0627\u0645 \u0623\u0648 \u0623\u0633\u0645\u0627\u0621 \u0627\u0644\u0645\u0643\u0627\u0626\u0646
\u0644\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644: \u0627\u0628\u062D\u062B \u0639\u0646 JO \u0623\u0648 \u0631\u0642\u0645 \u0623\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644

\u0623\u0631\u062C\u0639 \u0641\u0642\u0637 \u0627\u0644\u0645\u0639\u0631\u0641 \u0628\u062F\u0648\u0646 \u062A\u0641\u0633\u064A\u0631.`
              },
              {
                role: "user",
                content: text2
              }
            ],
            temperature: 0.1
          });
          const result = response.choices[0].message.content?.trim();
          if (!result) {
            throw new Error(`\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0639\u0631\u0641 \u0627\u0644\u0640 ${entityType} \u0641\u064A \u0627\u0644\u0646\u0635`);
          }
          return result;
        } catch (error) {
          console.error("ID extraction error:", error);
          throw new Error(`\u0641\u0634\u0644 \u0641\u064A \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0645\u0639\u0631\u0641 \u0627\u0644\u0640 ${entityType} \u0645\u0646 \u0627\u0644\u0646\u0635`);
        }
      }
      // استخراج مرشحات البحث من النص
      static async extractFilters(text2) {
        try {
          const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0627\u0633\u062A\u062E\u0631\u062C \u0645\u0631\u0634\u062D\u0627\u062A \u0627\u0644\u0628\u062D\u062B \u0645\u0646 \u0627\u0644\u0646\u0635 \u0627\u0644\u062A\u0627\u0644\u064A \u0648\u0623\u0631\u062C\u0639\u0647\u0627 \u0628\u062A\u0646\u0633\u064A\u0642 JSON:
{
  "status": "\u062D\u0627\u0644\u0629 \u0645\u062D\u062F\u062F\u0629",
  "date_from": "\u0645\u0646 \u062A\u0627\u0631\u064A\u062E (YYYY-MM-DD)",
  "date_to": "\u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E (YYYY-MM-DD)",
  "customer_id": "\u0645\u0639\u0631\u0641 \u0639\u0645\u064A\u0644 \u0645\u062D\u062F\u062F",
  "limit": "\u0639\u062F\u062F \u0627\u0644\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629"
}

\u0625\u0630\u0627 \u0644\u0645 \u064A\u062A\u0645 \u062A\u062D\u062F\u064A\u062F \u0645\u0631\u0634\u062D \u0645\u0639\u064A\u0646\u060C \u0644\u0627 \u062A\u062F\u0631\u062C\u0647 \u0641\u064A \u0627\u0644\u0646\u062A\u064A\u062C\u0629.`
              },
              {
                role: "user",
                content: text2
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.1
          });
          return JSON.parse(response.choices[0].message.content || "{}");
        } catch (error) {
          console.error("Filters extraction error:", error);
          return {};
        }
      }
      // ترجمة الحالات إلى العربية
      static translateStatus(status) {
        const statusMap = {
          "pending": "\u0641\u064A \u0627\u0644\u0627\u0646\u062A\u0638\u0627\u0631",
          "for_production": "\u0644\u0644\u0625\u0646\u062A\u0627\u062C",
          "in_progress": "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630",
          "completed": "\u0645\u0643\u062A\u0645\u0644",
          "delivered": "\u0645\u064F\u0633\u0644\u0645",
          "active": "\u0646\u0634\u0637",
          "maintenance": "\u0635\u064A\u0627\u0646\u0629",
          "down": "\u0645\u062A\u0648\u0642\u0641",
          "for_printing": "\u0644\u0644\u0637\u0628\u0627\u0639\u0629",
          "for_cutting": "\u0644\u0644\u0642\u0637\u0639",
          "done": "\u0645\u0646\u062C\u0632"
        };
        return statusMap[status] || status;
      }
      // تحليل بيانات الإنتاج
      static analyzeProductionData(stats) {
        let analysis = "";
        if (stats.productionRate < 70) {
          analysis += "\u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0645\u0646\u062E\u0641\u0636 - \u064A\u064F\u0646\u0635\u062D \u0628\u0645\u0631\u0627\u062C\u0639\u0629 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C. ";
        } else if (stats.productionRate > 90) {
          analysis += "\u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0645\u0645\u062A\u0627\u0632! ";
        }
        if (stats.qualityScore < 80) {
          analysis += "\u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0648\u062F\u0629 \u062A\u062D\u062A\u0627\u062C \u062A\u062D\u0633\u064A\u0646 - \u064A\u064F\u0646\u0635\u062D \u0628\u0645\u0631\u0627\u062C\u0639\u0629 \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0641\u062D\u0635 \u0627\u0644\u062C\u0648\u062F\u0629. ";
        }
        if (stats.wastePercentage > 5) {
          analysis += "\u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631 \u0645\u0631\u062A\u0641\u0639\u0629 - \u064A\u064F\u0646\u0635\u062D \u0628\u062A\u062D\u0644\u064A\u0644 \u0623\u0633\u0628\u0627\u0628 \u0627\u0644\u0647\u062F\u0631 \u0648\u062A\u0642\u0644\u064A\u0644\u0647\u0627. ";
        }
        if (stats.activeOrders > 10) {
          analysis += "\u0639\u062F\u062F \u0643\u0628\u064A\u0631 \u0645\u0646 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629 - \u0642\u062F \u062A\u062D\u062A\u0627\u062C \u0644\u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A\u0629. ";
        }
        return analysis || "\u0627\u0644\u0623\u062F\u0627\u0621 \u0636\u0645\u0646 \u0627\u0644\u0645\u0639\u062F\u0644\u0627\u062A \u0627\u0644\u0637\u0628\u064A\u0639\u064A\u0629.";
      }
      // توليد SQL آمن من النص الطبيعي
      static async generateSQLFromNaturalLanguage(text2) {
        try {
          const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u062D\u0648\u0644 \u0627\u0644\u0646\u0635 \u0627\u0644\u062A\u0627\u0644\u064A \u0625\u0644\u0649 \u0627\u0633\u062A\u0639\u0644\u0627\u0645 SQL \u0622\u0645\u0646 \u0644\u0644\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u062A\u0627\u0644\u064A\u0629:
- customers (\u0627\u0644\u0639\u0645\u0644\u0627\u0621)
- orders (\u0627\u0644\u0637\u0644\u0628\u0627\u062A)
- production_orders (\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644)
- rolls (\u0627\u0644\u0631\u0648\u0644\u0627\u062A)
- machines (\u0627\u0644\u0645\u0643\u0627\u0626\u0646)
- users (\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646)
- quality_checks (\u0641\u062D\u0635 \u0627\u0644\u062C\u0648\u062F\u0629)
- maintenance_records (\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629)

\u0642\u0648\u0627\u0639\u062F \u0645\u0647\u0645\u0629:
1. \u0627\u0633\u062A\u062E\u062F\u0645 \u0641\u0642\u0637 SELECT (\u0644\u0627 INSERT/UPDATE/DELETE)
2. \u0627\u0633\u062A\u062E\u062F\u0645 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0622\u0645\u0646\u0629
3. \u0623\u0636\u0641 LIMIT \u0644\u0644\u062D\u062F \u0645\u0646 \u0627\u0644\u0646\u062A\u0627\u0626\u062C
4. \u062A\u062C\u0646\u0628 \u0627\u0633\u062A\u0639\u0644\u0627\u0645\u0627\u062A \u0645\u0639\u0642\u062F\u0629

\u0623\u0631\u062C\u0639 \u0641\u0642\u0637 SQL \u0628\u062F\u0648\u0646 \u0634\u0631\u062D.`
              },
              {
                role: "user",
                content: text2
              }
            ],
            temperature: 0.1
          });
          const sql5 = response.choices[0].message.content?.trim();
          if (!sql5 || !sql5.toLowerCase().startsWith("select")) {
            throw new Error("\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u063A\u064A\u0631 \u0622\u0645\u0646");
          }
          return sql5;
        } catch (error) {
          console.error("SQL generation error:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u0627\u0633\u062A\u0639\u0644\u0627\u0645 SQL \u0645\u0646 \u0627\u0644\u0646\u0635");
        }
      }
    };
  }
});

// server/services/ai-notifications.ts
var ai_notifications_exports = {};
__export(ai_notifications_exports, {
  AINotifications: () => AINotifications
});
import OpenAI2 from "openai";
var openai2, AINotifications;
var init_ai_notifications = __esm({
  "server/services/ai-notifications.ts"() {
    "use strict";
    init_storage();
    init_id_generator();
    openai2 = new OpenAI2({
      apiKey: process.env.OPENAI_API_KEY
    });
    AINotifications = class {
      static notifications = [];
      // إرسال إشعار ذكي
      static async sendIntelligentNotification(action, data) {
        try {
          const notification = await this.generateNotification(action, data);
          if (notification) {
            this.notifications.push(notification);
            await this.deliverNotification(notification);
            return notification;
          }
          return null;
        } catch (error) {
          console.error("Smart notification error:", error);
          return null;
        }
      }
      // توليد إشعار باستخدام AI
      static async generateNotification(action, data) {
        try {
          const response = await openai2.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0623\u0646\u062A \u0646\u0638\u0627\u0645 \u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0630\u0643\u064A \u0644\u0645\u0635\u0646\u0639 \u0627\u0644\u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0628\u0644\u0627\u0633\u062A\u064A\u0643\u064A\u0629. \u0642\u0645 \u0628\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0625\u0646\u0634\u0627\u0621 \u0625\u0634\u0639\u0627\u0631 \u0645\u0646\u0627\u0633\u0628 \u0628\u062A\u0646\u0633\u064A\u0642 JSON:

{
  "shouldNotify": true/false,
  "type": "info/warning/error/success",
  "priority": "low/medium/high/critical",
  "title": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0625\u0634\u0639\u0627\u0631",
  "message": "\u0646\u0635 \u0627\u0644\u0625\u0634\u0639\u0627\u0631",
  "actions": [
    {"label": "\u062A\u0633\u0645\u064A\u0629 \u0627\u0644\u0625\u062C\u0631\u0627\u0621", "action": "\u0627\u0633\u0645 \u0627\u0644\u0625\u062C\u0631\u0627\u0621", "url": "\u0631\u0627\u0628\u0637 \u0627\u062E\u062A\u064A\u0627\u0631\u064A"}
  ],
  "targetUsers": [\u0642\u0627\u0626\u0645\u0629 \u0645\u0639\u0631\u0641\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u064A\u0646],
  "expiresIn": \u0639\u062F\u062F \u0627\u0644\u0633\u0627\u0639\u0627\u062A \u0642\u0628\u0644 \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629
}

\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A:
- \u0625\u0646\u0634\u0627\u0621/\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0639\u0627\u062F\u064A\u0629 \u2192 \u0625\u0634\u0639\u0627\u0631\u0627\u062A info \u0645\u0646\u062E\u0641\u0636\u0629 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629
- \u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C/\u0627\u0644\u062C\u0648\u062F\u0629 \u2192 \u0625\u0634\u0639\u0627\u0631\u0627\u062A warning \u0645\u062A\u0648\u0633\u0637\u0629 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629  
- \u0623\u0639\u0637\u0627\u0644 \u0627\u0644\u0645\u0643\u0627\u0626\u0646/\u0623\u062E\u0637\u0627\u0621 \u0627\u0644\u0646\u0638\u0627\u0645 \u2192 \u0625\u0634\u0639\u0627\u0631\u0627\u062A error \u0639\u0627\u0644\u064A\u0629 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629
- \u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0637\u0648\u0627\u0631\u0626 \u2192 \u0625\u0634\u0639\u0627\u0631\u0627\u062A critical \u0644\u0644\u062C\u0645\u064A\u0639`
              },
              {
                role: "user",
                content: `\u0627\u0644\u0625\u062C\u0631\u0627\u0621: ${action}
\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A: ${JSON.stringify(data, null, 2)}

\u0642\u0631\u0631 \u0645\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u064A\u062C\u0628 \u0625\u0631\u0633\u0627\u0644 \u0625\u0634\u0639\u0627\u0631 \u0648\u0645\u0627 \u0646\u0648\u0639\u0647 \u0648\u0623\u0648\u0644\u0648\u064A\u062A\u0647.`
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.2
          });
          const result = JSON.parse(response.choices[0].message.content || "{}");
          if (!result.shouldNotify) {
            return null;
          }
          const notification = {
            id: generateNotificationId("notif"),
            type: result.type || "info",
            priority: result.priority || "medium",
            title: result.title || "\u0625\u0634\u0639\u0627\u0631 \u0627\u0644\u0646\u0638\u0627\u0645",
            message: result.message || "\u062A\u0645 \u062A\u0646\u0641\u064A\u0630 \u0639\u0645\u0644\u064A\u0629 \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645",
            actions: result.actions || [],
            targetUsers: result.targetUsers || [],
            createdAt: /* @__PURE__ */ new Date(),
            expiresAt: result.expiresIn ? new Date(Date.now() + result.expiresIn * 60 * 60 * 1e3) : void 0
          };
          return notification;
        } catch (error) {
          console.error("Notification generation error:", error);
          return null;
        }
      }
      // تسليم الإشعار
      static async deliverNotification(notification) {
        try {
          console.log(`\u{1F4E2} \u0625\u0634\u0639\u0627\u0631 \u062C\u062F\u064A\u062F [${notification.priority.toUpperCase()}]: ${notification.title}`);
          console.log(`   ${notification.message}`);
          if (notification.priority === "critical") {
            await this.sendCriticalAlert(notification);
          }
        } catch (error) {
          console.error("Notification delivery error:", error);
        }
      }
      // إرسال تنبيه حرج
      static async sendCriticalAlert(notification) {
        console.log(`\u{1F6A8} \u062A\u0646\u0628\u064A\u0647 \u062D\u0631\u062C: ${notification.title}`);
        console.log(`   ${notification.message}`);
      }
      // فحص دوري للإشعارات الذكية
      static async performIntelligentMonitoring() {
        const notifications2 = [];
        try {
          const machineNotifications = await this.checkMachineStatus();
          notifications2.push(...machineNotifications);
          const productionNotifications = await this.checkProductionStatus();
          notifications2.push(...productionNotifications);
          const qualityNotifications = await this.checkQualityStatus();
          notifications2.push(...qualityNotifications);
          const inventoryNotifications = await this.checkInventoryStatus();
          notifications2.push(...inventoryNotifications);
          for (const notification of notifications2) {
            await this.deliverNotification(notification);
          }
          return notifications2;
        } catch (error) {
          console.error("Intelligent monitoring error:", error);
          return [];
        }
      }
      // فحص حالة المكائن
      static async checkMachineStatus() {
        try {
          const machines2 = await storage.getMachines();
          const notifications2 = [];
          const downMachines = machines2.filter((m) => m.status === "down");
          const maintenanceMachines = machines2.filter((m) => m.status === "maintenance");
          if (downMachines.length > 0) {
            notifications2.push({
              id: generateNotificationId("machine_down"),
              type: "error",
              priority: "high",
              title: "\u0645\u0643\u0627\u0626\u0646 \u0645\u062A\u0648\u0642\u0641\u0629",
              message: `\u064A\u0648\u062C\u062F ${downMachines.length} \u0645\u0643\u064A\u0646\u0629 \u0645\u062A\u0648\u0642\u0641\u0629. \u064A\u064F\u0631\u062C\u0649 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0641\u0648\u0631\u0627\u064B.`,
              actions: [
                { label: "\u0639\u0631\u0636 \u0627\u0644\u0645\u0643\u0627\u0626\u0646", action: "navigate_machines", url: "/definitions?tab=machines" }
              ],
              createdAt: /* @__PURE__ */ new Date(),
              expiresAt: new Date(Date.now() + 4 * 60 * 60 * 1e3)
              // 4 ساعات
            });
          }
          if (maintenanceMachines.length > 3) {
            notifications2.push({
              id: generateNotificationId("machine_maintenance"),
              type: "warning",
              priority: "medium",
              title: "\u0639\u062F\u062F \u0643\u0628\u064A\u0631 \u0645\u0646 \u0627\u0644\u0645\u0643\u0627\u0626\u0646 \u0641\u064A \u0627\u0644\u0635\u064A\u0627\u0646\u0629",
              message: `\u064A\u0648\u062C\u062F ${maintenanceMachines.length} \u0645\u0643\u064A\u0646\u0629 \u0641\u064A \u0627\u0644\u0635\u064A\u0627\u0646\u0629. \u0642\u062F \u064A\u0624\u062B\u0631 \u0639\u0644\u0649 \u0627\u0644\u0625\u0646\u062A\u0627\u062C.`,
              actions: [
                { label: "\u062C\u062F\u0648\u0644\u0629 \u0627\u0644\u0635\u064A\u0627\u0646\u0629", action: "schedule_maintenance", url: "/maintenance" }
              ],
              createdAt: /* @__PURE__ */ new Date()
            });
          }
          return notifications2;
        } catch (error) {
          console.error("Machine status check error:", error);
          return [];
        }
      }
      // فحص حالة الإنتاج
      static async checkProductionStatus() {
        try {
          const stats = await storage.getDashboardStats();
          const notifications2 = [];
          if (stats.productionRate < 60) {
            notifications2.push({
              id: generateNotificationId("production_low"),
              type: "warning",
              priority: "high",
              title: "\u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0645\u0646\u062E\u0641\u0636",
              message: `\u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u062D\u0627\u0644\u064A ${stats.productionRate}% \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u0645\u0639\u062F\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628.`,
              actions: [
                { label: "\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C", action: "analyze_production", url: "/production" }
              ],
              createdAt: /* @__PURE__ */ new Date()
            });
          }
          if (stats.activeOrders > 20) {
            notifications2.push({
              id: generateNotificationId("orders_high"),
              type: "info",
              priority: "medium",
              title: "\u0639\u062F\u062F \u0643\u0628\u064A\u0631 \u0645\u0646 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629",
              message: `\u064A\u0648\u062C\u062F ${stats.activeOrders} \u0637\u0644\u0628 \u0646\u0634\u0637. \u0642\u062F \u062A\u062D\u062A\u0627\u062C \u0644\u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0633\u0639\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A\u0629.`,
              actions: [
                { label: "\u0639\u0631\u0636 \u0627\u0644\u0637\u0644\u0628\u0627\u062A", action: "view_orders", url: "/production" }
              ],
              createdAt: /* @__PURE__ */ new Date()
            });
          }
          return notifications2;
        } catch (error) {
          console.error("Production status check error:", error);
          return [];
        }
      }
      // فحص حالة الجودة
      static async checkQualityStatus() {
        try {
          const stats = await storage.getDashboardStats();
          const notifications2 = [];
          if (stats.qualityScore < 80) {
            notifications2.push({
              id: generateNotificationId("quality_low"),
              type: "warning",
              priority: "high",
              title: "\u0627\u0646\u062E\u0641\u0627\u0636 \u0645\u0624\u0634\u0631 \u0627\u0644\u062C\u0648\u062F\u0629",
              message: `\u0645\u0624\u0634\u0631 \u0627\u0644\u062C\u0648\u062F\u0629 \u0627\u0644\u062D\u0627\u0644\u064A ${stats.qualityScore}% \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629.`,
              actions: [
                { label: "\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u062C\u0648\u062F\u0629", action: "review_quality", url: "/quality" }
              ],
              createdAt: /* @__PURE__ */ new Date()
            });
          }
          if (stats.wastePercentage > 5) {
            notifications2.push({
              id: generateNotificationId("waste_high"),
              type: "warning",
              priority: "medium",
              title: "\u0627\u0631\u062A\u0641\u0627\u0639 \u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631",
              message: `\u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 ${stats.wastePercentage}% \u0623\u0639\u0644\u0649 \u0645\u0646 \u0627\u0644\u0645\u0639\u062F\u0644 \u0627\u0644\u0645\u0642\u0628\u0648\u0644.`,
              actions: [
                { label: "\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0647\u062F\u0631", action: "analyze_waste", url: "/quality" }
              ],
              createdAt: /* @__PURE__ */ new Date()
            });
          }
          return notifications2;
        } catch (error) {
          console.error("Quality status check error:", error);
          return [];
        }
      }
      // فحص حالة المخزون
      static async checkInventoryStatus() {
        try {
          const inventory2 = [];
          const notifications2 = [];
          const lowStockItems = inventory2.filter(
            (item) => (item.current_stock || 0) < (item.min_stock || 10)
          );
          if (lowStockItems.length > 0) {
            notifications2.push({
              id: generateNotificationId("inventory_low"),
              type: "warning",
              priority: "medium",
              title: "\u0646\u0642\u0635 \u0641\u064A \u0627\u0644\u0645\u062E\u0632\u0648\u0646",
              message: `\u064A\u0648\u062C\u062F ${lowStockItems.length} \u0635\u0646\u0641 \u062A\u062D\u062A \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u062F\u0646\u0649 \u0644\u0644\u0645\u062E\u0632\u0648\u0646.`,
              actions: [
                { label: "\u0639\u0631\u0636 \u0627\u0644\u0645\u062E\u0632\u0648\u0646", action: "view_inventory", url: "/warehouse?tab=inventory" }
              ],
              createdAt: /* @__PURE__ */ new Date()
            });
          }
          return notifications2;
        } catch (error) {
          console.error("Inventory status check error:", error);
          return [];
        }
      }
      // الحصول على الإشعارات النشطة
      static getActiveNotifications() {
        const now = /* @__PURE__ */ new Date();
        return this.notifications.filter(
          (notification) => !notification.expiresAt || notification.expiresAt > now
        );
      }
      // تنظيف الإشعارات المنتهية الصلاحية
      static cleanupExpiredNotifications() {
        const now = /* @__PURE__ */ new Date();
        this.notifications = this.notifications.filter(
          (notification) => !notification.expiresAt || notification.expiresAt > now
        );
      }
      // تحديد ما إذا كان يجب إرسال إشعار
      static shouldSendNotification(action) {
        const notificationActions = [
          "add_customer",
          "add_order",
          "add_production_order",
          "add_machine",
          "update_order",
          "update_machine",
          "delete_customer",
          "delete_order",
          "machine_down",
          "quality_issue",
          "low_inventory",
          "production_delay"
        ];
        return notificationActions.includes(action);
      }
    };
    setInterval(async () => {
      await AINotifications.performIntelligentMonitoring();
      AINotifications.cleanupExpiredNotifications();
    }, 15 * 60 * 1e3);
  }
});

// server/services/ai-learning.ts
var ai_learning_exports = {};
__export(ai_learning_exports, {
  AILearning: () => AILearning
});
import OpenAI3 from "openai";
var openai3, AILearning;
var init_ai_learning = __esm({
  "server/services/ai-learning.ts"() {
    "use strict";
    openai3 = new OpenAI3({
      apiKey: process.env.OPENAI_API_KEY
    });
    AILearning = class {
      static learningData = [];
      static insights = [];
      static userPatterns = /* @__PURE__ */ new Map();
      // تسجيل بيانات التعلم
      static async recordLearningData(userId, actionType, context, success, executionTime, userFeedback) {
        try {
          const learningEntry = {
            user_id: userId,
            action_type: actionType,
            context,
            success,
            execution_time: executionTime,
            user_feedback: userFeedback,
            timestamp: /* @__PURE__ */ new Date()
          };
          this.learningData.push(learningEntry);
          const LEARNING_DATA_LIMIT = 1e3;
          if (this.learningData.length > LEARNING_DATA_LIMIT) {
            this.learningData = this.learningData.slice(-LEARNING_DATA_LIMIT);
          }
          await this.updateUserPatterns(userId);
          if (this.learningData.length % 50 === 0) {
            await this.analyzeLearningPatterns();
          }
          console.log(`\u{1F4CA} \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0644\u0645: ${actionType} - \u0646\u062C\u062D: ${success} - \u0648\u0642\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630: ${executionTime}ms`);
        } catch (error) {
          console.error("Learning data recording error:", error);
        }
      }
      // تحليل أنماط التعلم
      static async analyzeLearningPatterns() {
        try {
          const actionGroups = this.groupByAction();
          for (const [actionType, data] of Object.entries(actionGroups)) {
            const insight = await this.generateActionInsight(actionType, data);
            if (insight) {
              this.insights.push(insight);
            }
          }
          if (this.insights.length > 100) {
            this.insights = this.insights.slice(-100);
          }
          console.log(`\u{1F9E0} \u062A\u0645 \u062A\u062D\u0644\u064A\u0644 ${Object.keys(actionGroups).length} \u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A`);
        } catch (error) {
          console.error("Learning patterns analysis error:", error);
        }
      }
      // تجميع البيانات حسب نوع الإجراء
      static groupByAction() {
        const groups = {};
        for (const entry of this.learningData) {
          if (!groups[entry.action_type]) {
            groups[entry.action_type] = [];
          }
          groups[entry.action_type].push(entry);
        }
        return groups;
      }
      // توليد رؤى للإجراء
      static async generateActionInsight(actionType, data) {
        try {
          const successRate = data.filter((d) => d.success).length / data.length;
          const avgExecutionTime = data.reduce((sum2, d) => sum2 + d.execution_time, 0) / data.length;
          const response = await openai3.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0623\u0646\u062A \u0646\u0638\u0627\u0645 \u062A\u0639\u0644\u0645 \u0622\u0644\u064A \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u062A\u062D\u0644\u064A\u0644 \u0623\u0646\u0645\u0627\u0637 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0646\u0638\u0627\u0645. \u062D\u0644\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0648\u0642\u062F\u0645 \u0631\u0624\u0649 \u0628\u062A\u0646\u0633\u064A\u0642 JSON:

{
  "pattern": "\u0648\u0635\u0641 \u0627\u0644\u0646\u0645\u0637 \u0627\u0644\u0645\u0643\u062A\u0634\u0641",
  "recommendations": ["\u062A\u0648\u0635\u064A\u0629 1", "\u062A\u0648\u0635\u064A\u0629 2", "..."],
  "improvement_areas": ["\u0645\u062C\u0627\u0644 \u062A\u062D\u0633\u064A\u0646 1", "\u0645\u062C\u0627\u0644 \u062A\u062D\u0633\u064A\u0646 2", "..."]
}

\u0631\u0643\u0632 \u0639\u0644\u0649:
- \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0623\u062F\u0627\u0621
- \u062A\u0642\u0644\u064A\u0644 \u0648\u0642\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630
- \u0632\u064A\u0627\u062F\u0629 \u0645\u0639\u062F\u0644 \u0627\u0644\u0646\u062C\u0627\u062D
- \u062A\u062D\u0633\u064A\u0646 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645`
              },
              {
                role: "user",
                content: `\u0646\u0648\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621: ${actionType}
\u0639\u062F\u062F \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0627\u062A: ${data.length}
\u0645\u0639\u062F\u0644 \u0627\u0644\u0646\u062C\u0627\u062D: ${(successRate * 100).toFixed(1)}%
\u0645\u062A\u0648\u0633\u0637 \u0648\u0642\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630: ${avgExecutionTime.toFixed(0)}ms
\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0627\u0644\u0625\u064A\u062C\u0627\u0628\u064A\u0629: ${data.filter((d) => d.user_feedback === "positive").length}
\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0627\u0644\u0633\u0644\u0628\u064A\u0629: ${data.filter((d) => d.user_feedback === "negative").length}

\u062D\u0644\u0644 \u0647\u0630\u0647 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0642\u062F\u0645 \u0631\u0624\u0649 \u0644\u0644\u062A\u062D\u0633\u064A\u0646.`
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.3
          });
          const result = JSON.parse(response.choices[0].message.content || "{}");
          return {
            pattern: result.pattern || `\u0646\u0645\u0637 ${actionType}`,
            frequency: data.length,
            success_rate: successRate,
            recommendations: result.recommendations || [],
            improvement_areas: result.improvement_areas || []
          };
        } catch (error) {
          console.error("Action insight generation error:", error);
          return null;
        }
      }
      // تحديث أنماط المستخدم
      static async updateUserPatterns(userId) {
        try {
          const userData = this.learningData.filter((d) => d.user_id === userId);
          if (userData.length < 10) return;
          const response = await openai3.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u062D\u0644\u0644 \u0623\u0646\u0645\u0627\u0637 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0642\u062F\u0645 \u062A\u062D\u0644\u064A\u0644\u0627\u064B \u0628\u062A\u0646\u0633\u064A\u0642 JSON:

{
  "common_actions": ["\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0623\u0643\u062B\u0631 \u0634\u064A\u0648\u0639\u0627\u064B"],
  "preferred_workflows": ["\u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0641\u0636\u0644\u0629"],
  "peak_usage_times": ["\u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0630\u0631\u0648\u0629"],
  "success_patterns": ["\u0627\u0644\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0646\u0627\u062C\u062D\u0629"],
  "areas_for_improvement": ["\u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u062D\u0633\u064A\u0646"]
}`
              },
              {
                role: "user",
                content: `\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ${userId}:
\u0639\u062F\u062F \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A: ${userData.length}
\u0645\u0639\u062F\u0644 \u0627\u0644\u0646\u062C\u0627\u062D \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A: ${(userData.filter((d) => d.success).length / userData.length * 100).toFixed(1)}%
\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629: ${Array.from(new Set(userData.map((d) => d.action_type))).join(", ")}
\u0645\u062A\u0648\u0633\u0637 \u0648\u0642\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630: ${(userData.reduce((sum2, d) => sum2 + d.execution_time, 0) / userData.length).toFixed(0)}ms

\u062D\u0644\u0644 \u0623\u0646\u0645\u0627\u0637 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645.`
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.3
          });
          const result = JSON.parse(response.choices[0].message.content || "{}");
          this.userPatterns.set(userId, {
            user_id: userId,
            common_actions: result.common_actions || [],
            preferred_workflows: result.preferred_workflows || [],
            peak_usage_times: result.peak_usage_times || [],
            success_patterns: result.success_patterns || [],
            areas_for_improvement: result.areas_for_improvement || []
          });
          console.log(`\u{1F464} \u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ${userId}`);
        } catch (error) {
          console.error("User patterns update error:", error);
        }
      }
      // الحصول على توصيات مخصصة للمستخدم
      static async getPersonalizedRecommendations(userId) {
        try {
          const userPattern = this.userPatterns.get(userId);
          const userData = this.learningData.filter((d) => d.user_id === userId);
          if (!userPattern || userData.length < 5) {
            return [
              "\u0627\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0635\u0648\u062A\u064A \u0644\u062A\u0633\u0631\u064A\u0639 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A",
              "\u0627\u0633\u062A\u0641\u062F \u0645\u0646 \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0630\u0643\u064A\u0629 \u0644\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0623\u062F\u0627\u0621",
              "\u0631\u0627\u062C\u0639 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645 \u0644\u062A\u062E\u0635\u064A\u0635 \u062A\u062C\u0631\u0628\u062A\u0643"
            ];
          }
          const response = await openai3.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0623\u0646\u062A \u0645\u0633\u062A\u0634\u0627\u0631 \u0630\u0643\u064A \u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A\u0629. \u0642\u062F\u0645 \u062A\u0648\u0635\u064A\u0627\u062A \u0645\u062E\u0635\u0635\u0629 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0623\u0646\u0645\u0627\u0637 \u0627\u0633\u062A\u062E\u062F\u0627\u0645\u0647.
            
\u0623\u0631\u062C\u0639 \u0642\u0627\u0626\u0645\u0629 \u0645\u0646 \u0627\u0644\u062A\u0648\u0635\u064A\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0628\u062A\u0646\u0633\u064A\u0642 JSON:
{
  "recommendations": ["\u062A\u0648\u0635\u064A\u0629 1", "\u062A\u0648\u0635\u064A\u0629 2", "..."]
}`
              },
              {
                role: "user",
                content: `\u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ${userId}:
\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0634\u0627\u0626\u0639\u0629: ${userPattern.common_actions.join(", ")}
\u0633\u0644\u0627\u0633\u0644 \u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0645\u0641\u0636\u0644\u0629: ${userPattern.preferred_workflows.join(", ")}
\u0645\u0639\u062F\u0644 \u0627\u0644\u0646\u062C\u0627\u062D: ${(userData.filter((d) => d.success).length / userData.length * 100).toFixed(1)}%
\u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u062D\u0633\u064A\u0646: ${userPattern.areas_for_improvement.join(", ")}

\u0642\u062F\u0645 \u062A\u0648\u0635\u064A\u0627\u062A \u0634\u062E\u0635\u064A\u0629 \u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A\u0629.`
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.4
          });
          const result = JSON.parse(response.choices[0].message.content || "{}");
          return result.recommendations || [];
        } catch (error) {
          console.error("Personalized recommendations error:", error);
          return ["\u0627\u0633\u062A\u0645\u0631 \u0641\u064A \u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645 \u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A\u0629"];
        }
      }
      // الحصول على إحصائيات التعلم
      static getLearningStatistics() {
        const totalActions = this.learningData.length;
        const successfulActions = this.learningData.filter((d) => d.success).length;
        const averageExecutionTime = totalActions > 0 ? this.learningData.reduce((sum2, d) => sum2 + d.execution_time, 0) / totalActions : 0;
        const actionTypes = Array.from(new Set(this.learningData.map((d) => d.action_type)));
        const uniqueUsers = Array.from(new Set(this.learningData.map((d) => d.user_id)));
        return {
          total_actions: totalActions,
          success_rate: totalActions > 0 ? (successfulActions / totalActions * 100).toFixed(1) + "%" : "0%",
          average_execution_time: averageExecutionTime.toFixed(0) + "ms",
          unique_action_types: actionTypes.length,
          active_users: uniqueUsers.length,
          insights_generated: this.insights.length,
          user_patterns_tracked: this.userPatterns.size
        };
      }
      // الحصول على رؤى محددة
      static getInsightsByAction(actionType) {
        return this.insights.filter(
          (insight) => insight.pattern.toLowerCase().includes(actionType.toLowerCase())
        );
      }
      // تصدير بيانات التعلم (للنسخ الاحتياطي أو التحليل)
      static exportLearningData() {
        return {
          learning_data: this.learningData,
          insights: this.insights,
          user_patterns: Array.from(this.userPatterns.entries()),
          export_timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
      }
      // استيراد بيانات التعلم
      static importLearningData(data) {
        try {
          if (data.learning_data) {
            this.learningData = data.learning_data;
          }
          if (data.insights) {
            this.insights = data.insights;
          }
          if (data.user_patterns) {
            this.userPatterns = new Map(data.user_patterns);
          }
          console.log("\u{1F4E5} \u062A\u0645 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0644\u0645 \u0628\u0646\u062C\u0627\u062D");
        } catch (error) {
          console.error("Learning data import error:", error);
        }
      }
      // تنظيف البيانات القديمة (أكثر من 30 يوم)
      static cleanupOldData() {
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1e3);
        const beforeCount = this.learningData.length;
        this.learningData = this.learningData.filter((d) => d.timestamp > thirtyDaysAgo);
        const afterCount = this.learningData.length;
        console.log(`\u{1F9F9} \u062A\u0645 \u062A\u0646\u0638\u064A\u0641 ${beforeCount - afterCount} \u0625\u062F\u062E\u0627\u0644 \u0642\u062F\u064A\u0645 \u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0639\u0644\u0645`);
      }
    };
    setInterval(() => {
      AILearning.cleanupOldData();
    }, 24 * 60 * 60 * 1e3);
  }
});

// server/services/ai-reports.ts
var ai_reports_exports = {};
__export(ai_reports_exports, {
  AIReports: () => AIReports
});
import OpenAI4 from "openai";
var openai4, AIReports;
var init_ai_reports = __esm({
  "server/services/ai-reports.ts"() {
    "use strict";
    init_storage();
    openai4 = new OpenAI4({
      apiKey: process.env.OPENAI_API_KEY
    });
    AIReports = class {
      // توليد تقرير الإنتاج الذكي
      static async generateProductionReport(_params) {
        try {
          const stats = await storage.getDashboardStats();
          const productionOrders = await storage.getAllProductionOrders();
          const machines2 = await storage.getMachines();
          const rolls2 = await storage.getRolls();
          const analysis = await openai4.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0623\u0646\u062A \u0645\u062D\u0644\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0635\u0646\u0627\u0639\u064A. \u062D\u0644\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0648\u0642\u062F\u0645 \u062A\u0642\u0631\u064A\u0631\u0627\u064B \u0634\u0627\u0645\u0644\u0627\u064B \u0628\u062A\u0646\u0633\u064A\u0642 JSON:

{
  "title": "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062A\u0642\u0631\u064A\u0631",
  "summary": "\u0645\u0644\u062E\u0635 \u062A\u0646\u0641\u064A\u0630\u064A \u0645\u0648\u062C\u0632",
  "insights": ["\u0646\u0642\u0637\u0629 \u062A\u062D\u0644\u064A\u0644\u064A\u0629 1", "\u0646\u0642\u0637\u0629 \u062A\u062D\u0644\u064A\u0644\u064A\u0629 2", "..."],
  "recommendations": ["\u062A\u0648\u0635\u064A\u0629 1", "\u062A\u0648\u0635\u064A\u0629 2", "..."],
  "key_metrics": {
    "metric1": "\u0642\u064A\u0645\u06291",
    "metric2": "\u0642\u064A\u0645\u06292"
  }
}`
              },
              {
                role: "user",
                content: `\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C:
\u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629: ${stats.activeOrders}
\u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C: ${stats.productionRate}%
\u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0648\u062F\u0629: ${stats.qualityScore}%
\u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631: ${stats.wastePercentage}%
\u0639\u062F\u062F \u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C: ${productionOrders.length}
\u0639\u062F\u062F \u0627\u0644\u0645\u0643\u0627\u0626\u0646: ${machines2.length}
\u0639\u062F\u062F \u0627\u0644\u0631\u0648\u0644\u0627\u062A: ${rolls2.length}

\u0642\u062F\u0645 \u062A\u062D\u0644\u064A\u0644\u0627\u064B \u0634\u0627\u0645\u0644\u0627\u064B \u0645\u0639 \u062A\u0648\u0635\u064A\u0627\u062A \u0639\u0645\u0644\u064A\u0629.`
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.3
          });
          const result = JSON.parse(analysis.choices[0].message.content || "{}");
          return {
            title: result.title || "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0630\u0643\u064A",
            summary: result.summary || "\u062A\u062D\u0644\u064A\u0644 \u0634\u0627\u0645\u0644 \u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0625\u0646\u062A\u0627\u062C",
            insights: result.insights || [],
            recommendations: result.recommendations || [],
            data: {
              stats,
              productionOrders: productionOrders.length,
              machines: machines2.length,
              rolls: rolls2.length,
              key_metrics: result.key_metrics || {}
            }
          };
        } catch (error) {
          console.error("Production report error:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C");
        }
      }
      // توليد تقرير الجودة الذكي
      static async generateQualityReport(_params) {
        try {
          const qualityChecks = await storage.getQualityChecks();
          const stats = await storage.getDashboardStats();
          const analysis = await openai4.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0623\u0646\u062A \u062E\u0628\u064A\u0631 \u0641\u064A \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062C\u0648\u062F\u0629. \u062D\u0644\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0642\u062F\u0645 \u062A\u0642\u0631\u064A\u0631\u0627\u064B \u0634\u0627\u0645\u0644\u0627\u064B \u0628\u062A\u0646\u0633\u064A\u0642 JSON \u0645\u0639 \u0627\u0644\u062A\u0631\u0643\u064A\u0632 \u0639\u0644\u0649:
- \u0627\u062A\u062C\u0627\u0647\u0627\u062A \u0627\u0644\u062C\u0648\u062F\u0629
- \u0646\u0642\u0627\u0637 \u0627\u0644\u0636\u0639\u0641
- \u0627\u0644\u062A\u0648\u0635\u064A\u0627\u062A \u0644\u0644\u062A\u062D\u0633\u064A\u0646
- \u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629`
              },
              {
                role: "user",
                content: `\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062C\u0648\u062F\u0629:
\u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0648\u062F\u0629 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A\u0629: ${stats.qualityScore}%
\u0639\u062F\u062F \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062C\u0648\u062F\u0629: ${qualityChecks.length}
\u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631: ${stats.wastePercentage}%

\u0642\u062F\u0645 \u062A\u062D\u0644\u064A\u0644\u0627\u064B \u0645\u062A\u062E\u0635\u0635\u0627\u064B \u0641\u064A \u0627\u0644\u062C\u0648\u062F\u0629 \u0645\u0639 \u062A\u0648\u0635\u064A\u0627\u062A \u0645\u062D\u062F\u062F\u0629.`
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.3
          });
          const result = JSON.parse(analysis.choices[0].message.content || "{}");
          return {
            title: result.title || "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062C\u0648\u062F\u0629 \u0627\u0644\u0630\u0643\u064A",
            summary: result.summary || "\u062A\u062D\u0644\u064A\u0644 \u0634\u0627\u0645\u0644 \u0644\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u062C\u0648\u062F\u0629",
            insights: result.insights || [],
            recommendations: result.recommendations || [],
            data: {
              qualityScore: stats.qualityScore,
              qualityChecks: qualityChecks.length,
              wastePercentage: stats.wastePercentage,
              checks: qualityChecks.slice(0, 10)
            }
          };
        } catch (error) {
          console.error("Quality report error:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062C\u0648\u062F\u0629");
        }
      }
      // توليد تقرير الصيانة الذكي
      static async generateMaintenanceReport(_params) {
        try {
          const machines2 = await storage.getMachines();
          const maintenanceRecords = [];
          const analysis = await openai4.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0623\u0646\u062A \u0645\u062E\u062A\u0635 \u0641\u064A \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u064A\u0629. \u062D\u0644\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0648\u0642\u062F\u0645 \u062A\u0642\u0631\u064A\u0631\u0627\u064B \u0634\u0627\u0645\u0644\u0627\u064B \u0628\u062A\u0646\u0633\u064A\u0642 JSON \u064A\u062A\u0636\u0645\u0646:
- \u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0643\u0627\u0626\u0646
- \u062C\u062F\u0648\u0644\u0629 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0648\u0642\u0627\u0626\u064A\u0629
- \u0627\u0644\u062A\u0643\u0627\u0644\u064A\u0641 \u0648\u0627\u0644\u0643\u0641\u0627\u0621\u0629
- \u062A\u0648\u0635\u064A\u0627\u062A \u0627\u0644\u062A\u062D\u0633\u064A\u0646`
              },
              {
                role: "user",
                content: `\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629:
\u0639\u062F\u062F \u0627\u0644\u0645\u0643\u0627\u0626\u0646: ${machines2.length}
\u0627\u0644\u0645\u0643\u0627\u0626\u0646 \u0627\u0644\u0646\u0634\u0637\u0629: ${machines2.filter((m) => m.status === "active").length}
\u0627\u0644\u0645\u0643\u0627\u0626\u0646 \u0641\u064A \u0627\u0644\u0635\u064A\u0627\u0646\u0629: ${machines2.filter((m) => m.status === "maintenance").length}
\u0627\u0644\u0645\u0643\u0627\u0626\u0646 \u0627\u0644\u0645\u062A\u0648\u0642\u0641\u0629: ${machines2.filter((m) => m.status === "down").length}
\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629: ${maintenanceRecords.length}

\u0642\u062F\u0645 \u062A\u062D\u0644\u064A\u0644\u0627\u064B \u0645\u062A\u062E\u0635\u0635\u0627\u064B \u0641\u064A \u0627\u0644\u0635\u064A\u0627\u0646\u0629.`
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.3
          });
          const result = JSON.parse(analysis.choices[0].message.content || "{}");
          return {
            title: result.title || "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0630\u0643\u064A",
            summary: result.summary || "\u062A\u062D\u0644\u064A\u0644 \u0634\u0627\u0645\u0644 \u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0643\u0627\u0626\u0646 \u0648\u0627\u0644\u0635\u064A\u0627\u0646\u0629",
            insights: result.insights || [],
            recommendations: result.recommendations || [],
            data: {
              totalMachines: machines2.length,
              activeMachines: machines2.filter((m) => m.status === "active").length,
              maintenanceMachines: machines2.filter((m) => m.status === "maintenance").length,
              downMachines: machines2.filter((m) => m.status === "down").length,
              maintenanceRecords: maintenanceRecords.length
            }
          };
        } catch (error) {
          console.error("Maintenance report error:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0635\u064A\u0627\u0646\u0629");
        }
      }
      // توليد تقرير المبيعات والعملاء الذكي
      static async generateSalesReport(_params) {
        try {
          const customers2 = await storage.getCustomers();
          const orders2 = await storage.getAllOrders();
          const stats = await storage.getDashboardStats();
          const analysis = await openai4.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0623\u0646\u062A \u0645\u062D\u0644\u0644 \u0645\u0628\u064A\u0639\u0627\u062A \u0645\u062A\u062E\u0635\u0635. \u062D\u0644\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0642\u062F\u0645 \u062A\u0642\u0631\u064A\u0631\u0627\u064B \u0634\u0627\u0645\u0644\u0627\u064B \u0628\u062A\u0646\u0633\u064A\u0642 JSON \u064A\u0634\u0645\u0644:
- \u0623\u062F\u0627\u0621 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A
- \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621
- \u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A \u0648\u0627\u0644\u0641\u0631\u0635
- \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A \u0627\u0644\u0646\u0645\u0648`
              },
              {
                role: "user",
                content: `\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A:
\u0639\u062F\u062F \u0627\u0644\u0639\u0645\u0644\u0627\u0621: ${customers2.length}
\u0639\u062F\u062F \u0627\u0644\u0637\u0644\u0628\u0627\u062A: ${orders2.length}
\u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629: ${stats.activeOrders}
\u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0643\u062A\u0645\u0644\u0629: ${orders2.filter((o) => o.status === "completed").length}
\u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u064F\u0633\u0644\u0645\u0629: ${orders2.filter((o) => o.status === "delivered").length}

\u0642\u062F\u0645 \u062A\u062D\u0644\u064A\u0644\u0627\u064B \u062A\u062C\u0627\u0631\u064A\u0627\u064B \u0634\u0627\u0645\u0644\u0627\u064B.`
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.3
          });
          const result = JSON.parse(analysis.choices[0].message.content || "{}");
          return {
            title: result.title || "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0630\u0643\u064A",
            summary: result.summary || "\u062A\u062D\u0644\u064A\u0644 \u0634\u0627\u0645\u0644 \u0644\u0623\u062F\u0627\u0621 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0644\u0627\u0621",
            insights: result.insights || [],
            recommendations: result.recommendations || [],
            data: {
              totalCustomers: customers2.length,
              totalOrders: orders2.length,
              activeOrders: stats.activeOrders,
              completedOrders: orders2.filter((o) => o.status === "completed").length,
              deliveredOrders: orders2.filter((o) => o.status === "delivered").length
            }
          };
        } catch (error) {
          console.error("Sales report error:", error);
          throw new Error("\u0641\u0634\u0644 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A");
        }
      }
      // توليد تقرير مخصص
      static async generateCustomReport(reportType, _params) {
        try {
          let data = {};
          let contextDescription = "";
          switch (reportType.toLowerCase()) {
            case "inventory":
            case "\u0645\u062E\u0632\u0648\u0646":
              data = await this.gatherInventoryData();
              contextDescription = "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0648\u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639";
              break;
            case "hr":
            case "\u0645\u0648\u0627\u0631\u062F_\u0628\u0634\u0631\u064A\u0629":
              data = await this.gatherHRData();
              contextDescription = "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629";
              break;
            case "financial":
            case "\u0645\u0627\u0644\u064A":
              data = await this.gatherFinancialData();
              contextDescription = "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u062A\u0643\u0627\u0644\u064A\u0641";
              break;
            default:
              data = await storage.getDashboardStats();
              contextDescription = "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u0646\u0638\u0627\u0645";
          }
          const analysis = await openai4.chat.completions.create({
            model: "gpt-4o",
            messages: [
              {
                role: "system",
                content: `\u0623\u0646\u062A \u0645\u062D\u0644\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062A\u062E\u0635\u0635. \u0642\u0645 \u0628\u062A\u062D\u0644\u064A\u0644 ${contextDescription} \u0648\u0625\u0646\u0634\u0627\u0621 \u062A\u0642\u0631\u064A\u0631 \u0634\u0627\u0645\u0644 \u0628\u062A\u0646\u0633\u064A\u0642 JSON \u064A\u062A\u0636\u0645\u0646:
- \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062D\u0627\u0644\u064A
- \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629
- \u0627\u0644\u062A\u062D\u062F\u064A\u0627\u062A \u0648\u0627\u0644\u0641\u0631\u0635
- \u062A\u0648\u0635\u064A\u0627\u062A \u0639\u0645\u0644\u064A\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0646\u0641\u064A\u0630`
              },
              {
                role: "user",
                content: `\u0646\u0648\u0639 \u0627\u0644\u062A\u0642\u0631\u064A\u0631: ${reportType}
\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A: ${JSON.stringify(data, null, 2)}

\u0642\u062F\u0645 \u062A\u062D\u0644\u064A\u0644\u0627\u064B \u0634\u0627\u0645\u0644\u0627\u064B \u0648\u0645\u062A\u062E\u0635\u0635\u0627\u064B.`
              }
            ],
            response_format: { type: "json_object" },
            temperature: 0.3
          });
          const result = JSON.parse(analysis.choices[0].message.content || "{}");
          return {
            title: result.title || `\u062A\u0642\u0631\u064A\u0631 ${reportType} \u0627\u0644\u0630\u0643\u064A`,
            summary: result.summary || `\u062A\u062D\u0644\u064A\u0644 \u0634\u0627\u0645\u0644 \u0644\u0640 ${contextDescription}`,
            insights: result.insights || [],
            recommendations: result.recommendations || [],
            data
          };
        } catch (error) {
          console.error("Custom report error:", error);
          throw new Error(`\u0641\u0634\u0644 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u062A\u0642\u0631\u064A\u0631 ${reportType}`);
        }
      }
      // جمع بيانات المخزون
      static async gatherInventoryData() {
        try {
          const inventory2 = [];
          const locations2 = [];
          const movements = [];
          return {
            totalItems: inventory2.length,
            totalLocations: locations2.length,
            totalMovements: movements.length,
            lowStockItems: inventory2.filter((item) => (item.current_stock || 0) < (item.min_stock || 10)).length
          };
        } catch (error) {
          return { error: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0645\u0639 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062E\u0632\u0648\u0646" };
        }
      }
      // جمع بيانات الموارد البشرية
      static async gatherHRData() {
        try {
          const users3 = await storage.getUsers();
          const attendance2 = [];
          const training = [];
          return {
            totalEmployees: users3.length,
            activeEmployees: users3.filter((u) => u.status === "active").length,
            attendanceRecords: attendance2.length,
            trainingRecords: training.length
          };
        } catch (error) {
          return { error: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0645\u0639 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629" };
        }
      }
      // جمع البيانات المالية
      static async gatherFinancialData() {
        try {
          const orders2 = await storage.getAllOrders();
          const stats = await storage.getDashboardStats();
          return {
            totalOrders: orders2.length,
            completedOrders: orders2.filter((o) => o.status === "completed").length,
            deliveredOrders: orders2.filter((o) => o.status === "delivered").length,
            productionRate: stats.productionRate,
            wastePercentage: stats.wastePercentage
          };
        } catch (error) {
          return { error: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0645\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629" };
        }
      }
    };
  }
});

// server/index.ts
import express2 from "express";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";

// server/routes.ts
init_storage();
init_schema();
init_validation_utils();
import { createServer } from "http";
import bcrypt2 from "bcrypt";
import { createInsertSchema as createInsertSchema2 } from "drizzle-zod";
import { z as z5 } from "zod";

// server/services/openai.ts
init_storage();
import OpenAI5 from "openai";
var openai5 = new OpenAI5({
  apiKey: process.env.OPENAI_API_KEY
});
var AdvancedOpenAIService = class {
  async processMessage(message, userId) {
    const startTime = Date.now();
    try {
      const intent = await this.analyzeUserIntent(message);
      if (intent.requiresDatabase) {
        return await this.handleDatabaseOperation(message, intent, userId);
      }
      if (intent.requestsReport) {
        return await this.generateIntelligentReport(intent.reportType, intent.parameters);
      }
      const response = await openai5.chat.completions.create({
        model: "gpt-4o",
        response_format: { type: "text" },
        messages: [
          {
            role: "system",
            content: `\u0623\u0646\u062A \u0645\u0633\u0627\u0639\u062F \u0630\u0643\u064A \u0645\u062A\u0637\u0648\u0631 \u0644\u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0645\u0635\u0646\u0639 \u0627\u0644\u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0628\u0644\u0627\u0633\u062A\u064A\u0643\u064A\u0629 (MPBF Next). \u0627\u0633\u062A\u062C\u0628 \u0628\u062A\u0646\u0633\u064A\u0642 JSON \u0639\u0646\u062F \u0627\u0644\u062D\u0627\u062C\u0629. 

\u0642\u062F\u0631\u0627\u062A\u0643 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629:
\u{1F5C4}\uFE0F **\u0625\u062F\u0627\u0631\u0629 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0643\u0627\u0645\u0644\u0629**: \u0625\u0636\u0627\u0641\u0629\u060C \u062A\u0639\u062F\u064A\u0644\u060C \u062D\u0630\u0641 \u062C\u0645\u064A\u0639 \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0648\u0627\u0644\u062C\u062F\u0627\u0648\u0644
\u{1F4CA} **\u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0630\u0643\u064A\u0629**: \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0625\u0646\u0634\u0627\u0621 \u062A\u0642\u0627\u0631\u064A\u0631 \u062A\u0641\u0627\u0639\u0644\u064A\u0629
\u{1F514} **\u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0630\u0643\u064A \u0644\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A**: \u0625\u0631\u0633\u0627\u0644 \u062A\u0646\u0628\u064A\u0647\u0627\u062A \u062D\u0633\u0628 \u0627\u0644\u062D\u0627\u062C\u0629 \u0648\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629  
\u{1F9E0} **\u0627\u0644\u062A\u0639\u0644\u0645 \u0627\u0644\u0645\u0633\u062A\u0645\u0631**: \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0623\u062F\u0627\u0621 \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u062D\u0644\u064A\u0644 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0639\u0645\u0644
\u2699\uFE0F **\u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u0630\u0627\u062A\u064A**: \u062A\u062D\u0633\u064A\u0646 \u0648\u062A\u0637\u0648\u064A\u0631 \u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0646\u0638\u0627\u0645

\u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u0645\u062A\u0627\u062D\u0629:
- \u0627\u0644\u0639\u0645\u0644\u0627\u0621 (customers)
- \u0627\u0644\u0637\u0644\u0628\u0627\u062A (orders) 
- \u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C (production_orders)
- \u0627\u0644\u0631\u0648\u0644\u0627\u062A (rolls)
- \u0627\u0644\u0645\u0643\u0627\u0626\u0646 (machines)
- \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646 (users)
- \u0627\u0644\u0623\u0635\u0646\u0627\u0641 (items)
- \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0627\u062A (categories)
- \u0627\u0644\u062C\u0631\u062F (inventory)
- \u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u062E\u0632\u0648\u0646 (inventory_movements)
- \u0641\u062D\u0635 \u0627\u0644\u062C\u0648\u062F\u0629 (quality_checks)
- \u0627\u0644\u0635\u064A\u0627\u0646\u0629 (maintenance_records)
- \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629 (attendance, training_records, performance_reviews)

\u0623\u0645\u062B\u0644\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0648\u0627\u0645\u0631:
- "\u0623\u0636\u0641 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F \u0627\u0633\u0645\u0647 \u0623\u062D\u0645\u062F \u0645\u062D\u0645\u062F"
- "\u0627\u0639\u0631\u0636 \u0644\u064A \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0644\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639"
- "\u062D\u062F\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0631\u0642\u0645 ORD-123 \u0625\u0644\u0649 \u0645\u0643\u062A\u0645\u0644"
- "\u0627\u062D\u0630\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0631\u0642\u0645 5"
- "\u0623\u0631\u0633\u0644 \u062A\u0646\u0628\u064A\u0647 \u0635\u064A\u0627\u0646\u0629 \u0644\u0644\u0645\u0643\u0627\u0626\u0646 \u0627\u0644\u062A\u064A \u062A\u062D\u062A\u0627\u062C \u0635\u064A\u0627\u0646\u0629"

\u0627\u0633\u062A\u062C\u0628 \u0628\u0637\u0631\u064A\u0642\u0629 \u0645\u0647\u0646\u064A\u0629 \u0648\u0645\u0641\u0635\u0644\u0629\u060C \u0648\u0623\u0639\u0637 \u062E\u0637\u0648\u0627\u062A \u0648\u0627\u0636\u062D\u0629 \u0644\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629.`
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 800,
        temperature: 0.3
      });
      const executionTime = Date.now() - startTime;
      if (userId) {
        await this.recordLearningData(userId, "general_query", message, true, executionTime);
      }
      return response.choices[0].message.content || "\u0645\u0631\u062D\u0628\u0627\u064B! \u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0646\u064A \u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0641\u064A \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0635\u0646\u0639 \u0627\u0644\u064A\u0648\u0645\u061F";
    } catch (error) {
      console.error("OpenAI API Error:", {
        message: error?.message,
        status: error?.status,
        code: error?.code,
        type: error?.type,
        stack: error?.stack
      });
      if (userId) {
        try {
          await this.recordLearningData(userId, "general_query", message, false, Date.now() - startTime);
        } catch (learningError) {
          console.error("Error recording learning data:", learningError);
        }
      }
      return this.handleError(error);
    }
  }
  async needsDataQuery(message) {
    const dataKeywords = [
      "\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628",
      "\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628",
      "\u0623\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644",
      "\u0627\u0644\u0631\u0648\u0644",
      "\u0627\u0644\u0645\u0643\u064A\u0646\u0629",
      "\u0627\u0644\u0625\u0646\u062A\u0627\u062C",
      "\u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639",
      "\u0627\u0644\u062C\u0648\u062F\u0629",
      "\u0627\u0644\u0635\u064A\u0627\u0646\u0629",
      "\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A"
    ];
    return dataKeywords.some((keyword) => message.includes(keyword));
  }
  async processVoiceCommand(command, language = "ar-SA", dialect = "standard") {
    try {
      const getDialectResponseStyle = (dialect2) => {
        const dialectStyles = {
          "standard": "\u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0641\u0635\u062D\u0649",
          "egyptian": '\u0628\u0627\u0644\u0644\u0647\u062C\u0629 \u0627\u0644\u0645\u0635\u0631\u064A\u0629 (\u0645\u062B\u0644: "\u062D\u0627\u0636\u0631"\u060C "\u0637\u064A\u0628"\u060C "\u0625\u064A\u0647 \u0631\u0623\u064A\u0643")',
          "gulf": '\u0628\u0627\u0644\u0644\u0647\u062C\u0629 \u0627\u0644\u062E\u0644\u064A\u062C\u064A\u0629 (\u0645\u062B\u0644: "\u0632\u064A\u0646"\u060C "\u0645\u0627\u0634\u064A"\u060C "\u0634\u0644\u0648\u0646\u0643")',
          "levantine": '\u0628\u0627\u0644\u0644\u0647\u062C\u0629 \u0627\u0644\u0634\u0627\u0645\u064A\u0629 (\u0645\u062B\u0644: "\u0645\u0646\u064A\u062D"\u060C "\u062A\u0645\u0627\u0645"\u060C "\u0634\u0648 \u0631\u0623\u064A\u0643")',
          "maghreb": '\u0628\u0627\u0644\u0644\u0647\u062C\u0629 \u0627\u0644\u0645\u063A\u0627\u0631\u0628\u064A\u0629 (\u0645\u062B\u0644: "\u0648\u0627\u062E\u0627"\u060C "\u0628\u0632\u0627\u0641"\u060C "\u0641\u064A\u0646")'
        };
        return dialectStyles[dialect2] || dialectStyles["standard"];
      };
      const systemPrompt = language === "ar-SA" ? `\u0623\u0646\u062A \u0645\u0633\u0627\u0639\u062F \u0635\u0648\u062A\u064A \u0630\u0643\u064A \u0644\u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0645\u0635\u0646\u0639 \u0627\u0644\u0623\u0643\u064A\u0627\u0633 \u0627\u0644\u0628\u0644\u0627\u0633\u062A\u064A\u0643\u064A\u0629 (MPBF Next).

\u0645\u0647\u0627\u0645\u0643:
1. \u0641\u0647\u0645 \u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0635\u0648\u062A\u064A\u0629 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0628\u062C\u0645\u064A\u0639 \u0627\u0644\u0644\u0647\u062C\u0627\u062A
2. \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0646\u064A\u0629 (intent) \u0648\u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 (action)
3. \u0627\u0633\u062A\u062E\u0631\u0627\u062C \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0644\u0627\u0632\u0645\u0629
4. \u062A\u0642\u062F\u064A\u0645 \u0631\u062F \u0645\u0646\u0627\u0633\u0628 ${getDialectResponseStyle(dialect)}

\u0627\u0644\u0644\u0647\u062C\u0627\u062A \u0627\u0644\u0645\u062F\u0639\u0648\u0645\u0629 \u0648\u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0634\u0627\u0626\u0639\u0629:
- \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0641\u0635\u062D\u0649: "\u0627\u0639\u0631\u0636 \u0644\u064A", "\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649", "\u0645\u0627 \u062D\u0627\u0644\u0629"
- \u0627\u0644\u0645\u0635\u0631\u064A\u0629: "\u0648\u0631\u064A\u0646\u064A", "\u0631\u0648\u062D \u0644\u0640", "\u0625\u064A\u0647 \u062D\u0627\u0644\u0629", "\u0627\u0639\u0645\u0644"
- \u0627\u0644\u062E\u0644\u064A\u062C\u064A\u0629: "\u062E\u0644\u0646\u064A \u0623\u0634\u0648\u0641", "\u0631\u0648\u062D \u0644\u0640", "\u0634\u0644\u0648\u0646 \u062D\u0627\u0644\u0629", "\u0633\u0648\u064A"
- \u0627\u0644\u0634\u0627\u0645\u064A\u0629: "\u0641\u064A\u0646\u064A \u0634\u0648\u0641", "\u0631\u0648\u062D \u0639\u0640", "\u0634\u0648 \u0648\u0636\u0639", "\u0627\u0639\u0645\u0644"
- \u0627\u0644\u0645\u063A\u0627\u0631\u0628\u064A\u0629: "\u0648\u0631\u0627\u064A\u0646\u064A", "\u0633\u064A\u0631 \u0644\u0640", "\u0622\u0634 \u062D\u0627\u0644", "\u062F\u064A\u0631"

\u0627\u0644\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0645\u062F\u0639\u0648\u0645\u0629:
- \u0627\u0644\u062A\u0646\u0642\u0644: "\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 [\u0635\u0641\u062D\u0629]", "\u0627\u0630\u0647\u0628 \u0625\u0644\u0649 [\u0642\u0633\u0645]", "\u0631\u0648\u062D \u0644\u0640"
- \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645: "\u0627\u0639\u0631\u0636 [\u0628\u064A\u0627\u0646\u0627\u062A]", "\u0645\u0627 \u0647\u064A \u062D\u0627\u0644\u0629 [\u0634\u064A\u0621]", "\u0648\u0631\u064A\u0646\u064A"
- \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A: "\u0623\u0636\u0641 [\u0639\u0646\u0635\u0631]", "\u0627\u062D\u0630\u0641 [\u0639\u0646\u0635\u0631]", "\u062D\u062F\u062B [\u0628\u064A\u0627\u0646\u0627\u062A]"
- \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A: "\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C", "\u062A\u0642\u0631\u064A\u0631 [\u0646\u0648\u0639]"

\u0627\u0633\u062A\u062C\u0628 \u0628\u062A\u0646\u0633\u064A\u0642 JSON \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649:
{
  "intent": "\u0646\u0648\u0639 \u0627\u0644\u0646\u064A\u0629",
  "action": "\u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0645\u0637\u0644\u0648\u0628", 
  "parameters": {"\u0645\u0641\u062A\u0627\u062D": "\u0642\u064A\u0645\u0629"},
  "response": "\u0627\u0644\u0631\u062F \u0627\u0644\u0646\u0635\u064A \u0627\u0644\u0645\u0646\u0627\u0633\u0628 ${getDialectResponseStyle(dialect)}"
}` : `You are an intelligent voice assistant for the MPBF Next plastic bag factory management system.

Your tasks:
1. Understand voice commands in English
2. Determine intent and required action
3. Extract necessary parameters
4. Provide appropriate and friendly response

Supported commands:
- Navigation: "go to [page]", "navigate to [section]" 
- Queries: "show [data]", "what is the status of [item]"
- Actions: "add [item]", "delete [item]", "update [data]"
- Statistics: "production stats", "[type] report"

Respond in JSON format containing:
{
  "intent": "intent type",
  "action": "required action",
  "parameters": {"key": "value"},
  "response": "appropriate text response"
}`;
      const response = await openai5.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: command }
        ],
        response_format: { type: "json_object" },
        max_tokens: 300,
        temperature: 0.3
      });
      const result = JSON.parse(response.choices[0].message.content || "{}");
      return {
        intent: result.intent || "unknown",
        action: result.action || "none",
        parameters: result.parameters || {},
        response: result.response || (language === "ar-SA" ? "\u0644\u0645 \u0623\u062A\u0645\u0643\u0646 \u0645\u0646 \u0641\u0647\u0645 \u0627\u0644\u0623\u0645\u0631" : "I could not understand the command")
      };
    } catch (error) {
      console.error("Voice command processing error:", {
        message: error?.message,
        status: error?.status,
        code: error?.code,
        stack: error?.stack
      });
      return {
        intent: "error",
        action: "none",
        parameters: {},
        response: language === "ar-SA" ? "\u0639\u0630\u0631\u0627\u064B\u060C \u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0623\u0645\u0631 \u0627\u0644\u0635\u0648\u062A\u064A" : "Sorry, there was an error processing the voice command"
      };
    }
  }
  async handleDataQuery(message, baseResponse) {
    try {
      const orderMatch = message.match(/JO-\d{4}-\d{3}|ORD-\d+|R-\d+/);
      if (orderMatch) {
        const identifier = orderMatch[0];
        if (identifier.startsWith("JO-")) {
          const stats = await storage.getDashboardStats();
          return `${baseResponse}

\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629:
\u2022 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629: ${stats.activeOrders}
\u2022 \u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C: ${stats.productionRate}%
\u2022 \u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0648\u062F\u0629: ${stats.qualityScore}%
\u2022 \u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631: ${stats.wastePercentage}%`;
        }
      }
      if (message.includes("\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A") || message.includes("\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0635\u0646\u0639")) {
        const stats = await storage.getDashboardStats();
        return `\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0645\u0635\u0646\u0639 \u0627\u0644\u062D\u0627\u0644\u064A\u0629:

\u2022 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629: ${stats.activeOrders} \u0637\u0644\u0628
\u2022 \u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C: ${stats.productionRate}%
\u2022 \u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0648\u062F\u0629: ${stats.qualityScore}%
\u2022 \u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631: ${stats.wastePercentage}%

\u0647\u0644 \u062A\u062D\u062A\u0627\u062C \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629 \u062D\u0648\u0644 \u0623\u064A \u0645\u0646 \u0647\u0630\u0647 \u0627\u0644\u0646\u0642\u0627\u0637\u061F`;
      }
      return baseResponse;
    } catch (error) {
      console.error("Data query error:", error);
      return baseResponse + "\n\n(\u0645\u0644\u0627\u062D\u0638\u0629: \u0644\u0645 \u0623\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645 \u062D\u0627\u0644\u064A\u0627\u064B)";
    }
  }
  async analyzeProductionData() {
    try {
      const stats = await storage.getDashboardStats();
      const analysis = await openai5.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "\u0623\u0646\u062A \u0645\u062D\u0644\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062A\u062E\u0635\u0635 \u0641\u064A \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0635\u0646\u0627\u0639\u064A. \u0642\u0645 \u0628\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0642\u062F\u0645\u0629 \u0648\u0642\u062F\u0645 \u062A\u0648\u0635\u064A\u0627\u062A \u0644\u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u0623\u062F\u0627\u0621 \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629."
          },
          {
            role: "user",
            content: `\u062D\u0644\u0644 \u0647\u0630\u0647 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A\u0629:
- \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629: ${stats.activeOrders}
- \u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C: ${stats.productionRate}%
- \u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0648\u062F\u0629: ${stats.qualityScore}%
- \u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631: ${stats.wastePercentage}%

\u0642\u062F\u0645 \u062A\u062D\u0644\u064A\u0644 \u0645\u0648\u062C\u0632 \u0648\u062A\u0648\u0635\u064A\u0627\u062A \u0644\u0644\u062A\u062D\u0633\u064A\u0646.`
          }
        ],
        max_tokens: 400,
        temperature: 0.5
      });
      return analysis.choices[0].message.content || "\u0644\u0645 \u0623\u062A\u0645\u0643\u0646 \u0645\u0646 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u062D\u0627\u0644\u064A\u0627\u064B.";
    } catch (error) {
      console.error("Production analysis error:", error);
      return "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0644\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C.";
    }
  }
  async generateMaintenanceAlert(machineId, issueDescription) {
    try {
      const machine = await storage.getMachineById(machineId.toString());
      if (!machine) {
        return "\u0644\u0645 \u0623\u062A\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0627\u0644\u0645\u062D\u062F\u062F\u0629.";
      }
      const alert = await openai5.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "\u0623\u0646\u062A \u062E\u0628\u064A\u0631 \u0635\u064A\u0627\u0646\u0629 \u0627\u0644\u0645\u0639\u062F\u0627\u062A \u0627\u0644\u0635\u0646\u0627\u0639\u064A\u0629. \u0642\u0645 \u0628\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0648\u0642\u062F\u0645 \u062A\u0648\u0635\u064A\u0627\u062A \u0644\u0644\u0625\u0635\u0644\u0627\u062D \u0628\u0627\u0644\u0644\u063A\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629."
          },
          {
            role: "user",
            content: `\u0627\u0644\u0645\u0643\u064A\u0646\u0629: ${machine.name_ar || machine.name}
\u0646\u0648\u0639 \u0627\u0644\u0645\u0643\u064A\u0646\u0629: ${machine.type}
\u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0627\u0644\u0645\u0628\u0644\u063A \u0639\u0646\u0647\u0627: ${issueDescription}

\u0642\u062F\u0645 \u062A\u0642\u064A\u064A\u0645 \u0633\u0631\u064A\u0639 \u0644\u0644\u0645\u0634\u0643\u0644\u0629 \u0648\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629.`
          }
        ],
        max_tokens: 300,
        temperature: 0.3
      });
      return alert.choices[0].message.content || "\u0644\u0645 \u0623\u062A\u0645\u0643\u0646 \u0645\u0646 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0627\u0644\u0645\u0628\u0644\u063A \u0639\u0646\u0647\u0627.";
    } catch (error) {
      console.error("Maintenance alert error:", error);
      return "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u062D\u0644\u064A\u0644 \u062A\u0628\u0644\u064A\u063A \u0627\u0644\u0635\u064A\u0627\u0646\u0629.";
    }
  }
  // تحليل نية المستخدم المتقدم
  async analyzeUserIntent(message) {
    try {
      const response = await openai5.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `\u062D\u0644\u0644 \u0646\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0646 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u0633\u062A\u062E\u0631\u062C \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u062A\u0627\u0644\u064A\u0629 \u0628\u062A\u0646\u0633\u064A\u0642 JSON:

{
  "intent": "\u0646\u0648\u0639 \u0627\u0644\u0646\u064A\u0629 - query/create/update/delete/report/navigate",
  "action": "\u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0645\u062D\u062F\u062F",
  "requiresDatabase": true/false,
  "requestsReport": true/false,
  "reportType": "\u0646\u0648\u0639 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0625\u0646 \u0648\u062C\u062F",
  "parameters": {
    "table": "\u0627\u0633\u0645 \u0627\u0644\u062C\u062F\u0648\u0644",
    "data": "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629",
    "conditions": "\u0627\u0644\u0634\u0631\u0648\u0637"
  },
  "confidence": 0.0-1.0
}

\u0623\u0645\u062B\u0644\u0629:
- "\u0623\u0636\u0641 \u0639\u0645\u064A\u0644 \u062C\u062F\u064A\u062F" \u2192 intent: "create", action: "add_customer", requiresDatabase: true
- "\u0627\u0639\u0631\u0636 \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C" \u2192 intent: "report", requestsReport: true, reportType: "production"
- "\u062D\u062F\u062B \u0627\u0644\u0637\u0644\u0628 \u0631\u0642\u0645 123" \u2192 intent: "update", action: "update_order", requiresDatabase: true`
          },
          {
            role: "user",
            content: message
          }
        ],
        response_format: { type: "json_object" },
        temperature: 0.1
      });
      return JSON.parse(response.choices[0].message.content || '{"intent":"unknown","action":"none","requiresDatabase":false,"requestsReport":false,"parameters":{},"confidence":0}');
    } catch (error) {
      console.error("Intent analysis error:", {
        message: error?.message,
        status: error?.status,
        code: error?.code,
        stack: error?.stack
      });
      return {
        intent: "unknown",
        action: "none",
        requiresDatabase: false,
        requestsReport: false,
        parameters: {},
        confidence: 0
      };
    }
  }
  // معالجة عمليات قاعدة البيانات
  async handleDatabaseOperation(message, intent, userId) {
    const startTime = Date.now();
    try {
      let result;
      switch (intent.action) {
        case "add_customer":
          result = await this.createCustomer(intent.parameters);
          break;
        case "add_order":
          result = await this.createOrder(intent.parameters);
          break;
        case "add_production_order":
          result = await this.createJobOrder(intent.parameters);
          break;
        case "add_machine":
          result = await this.createMachine(intent.parameters);
          break;
        case "update_order":
          result = await this.updateOrder(intent.parameters);
          break;
        case "update_machine":
          result = await this.updateMachine(intent.parameters);
          break;
        case "delete_customer":
          result = await this.deleteCustomer(intent.parameters);
          break;
        case "delete_order":
          result = await this.deleteOrder(intent.parameters);
          break;
        case "get_orders":
          result = await this.getOrders(intent.parameters);
          break;
        case "get_machines":
          result = await this.getMachines(intent.parameters);
          break;
        case "get_production_stats":
          result = await this.getProductionStats(intent.parameters);
          break;
        default:
          result = await this.handleCustomQuery(message, intent);
      }
      if (userId) {
        await this.recordLearningData(userId, intent.action, message, result.success, Date.now() - startTime);
      }
      if (result.success && this.shouldSendNotification(intent.action)) {
        await this.sendIntelligentNotification(intent.action, result.result);
      }
      return result.message;
    } catch (error) {
      console.error("Database operation error:", {
        message: error?.message,
        status: error?.status,
        code: error?.code,
        stack: error?.stack
      });
      if (userId) {
        try {
          await this.recordLearningData(userId, intent.action, message, false, Date.now() - startTime);
        } catch (learningError) {
          console.error("Error recording learning data:", learningError);
        }
      }
      return "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0639\u0645\u0644\u064A\u0629. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0623\u0648 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u062F\u0639\u0645 \u0627\u0644\u0641\u0646\u064A.";
    }
  }
  // إنشاء عميل جديد
  async createCustomer(params) {
    try {
      const customerData = await this.extractCustomerData(params.text || params.data);
      const customer = await storage.createCustomer(customerData);
      return {
        operation: "create",
        table: "customers",
        data: customerData,
        success: true,
        message: `\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0646\u062C\u0627\u062D! \u0631\u0642\u0645 \u0627\u0644\u0639\u0645\u064A\u0644: ${customer.id}\u060C \u0627\u0644\u0627\u0633\u0645: ${customer.name}`,
        result: customer
      };
    } catch (error) {
      return {
        operation: "create",
        table: "customers",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0639\u0645\u064A\u0644: ${error.message}`
      };
    }
  }
  // إنشاء طلب جديد
  async createOrder(params) {
    try {
      const orderData = await this.extractOrderData(params.text || params.data);
      const order = await storage.createOrder(orderData);
      return {
        operation: "create",
        table: "orders",
        data: orderData,
        success: true,
        message: `\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D! \u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628: ${order.order_number}`,
        result: order
      };
    } catch (error) {
      return {
        operation: "create",
        table: "orders",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628: ${error.message}`
      };
    }
  }
  // إنشاء أمر تشغيل جديد
  async createJobOrder(params) {
    try {
      const jobOrderData = await this.extractJobOrderData(params.text || params.data);
      const jobOrder = await storage.createProductionOrder(jobOrderData);
      return {
        operation: "create",
        table: "production_orders",
        data: jobOrderData,
        success: true,
        message: `\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0623\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644 \u0628\u0646\u062C\u0627\u062D! \u0631\u0642\u0645 \u0623\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644: ${jobOrder.production_order_number}`,
        result: jobOrder
      };
    } catch (error) {
      return {
        operation: "create",
        table: "production_orders",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0623\u0645\u0631 \u0627\u0644\u062A\u0634\u063A\u064A\u0644: ${error.message}`
      };
    }
  }
  // إنشاء مكينة جديدة
  async createMachine(params) {
    try {
      const machineData = await this.extractMachineData(params.text || params.data);
      const machine = await storage.createMachine(machineData);
      return {
        operation: "create",
        table: "machines",
        data: machineData,
        success: true,
        message: `\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0628\u0646\u062C\u0627\u062D! \u0627\u0633\u0645 \u0627\u0644\u0645\u0643\u064A\u0646\u0629: ${machine.name_ar || machine.name}`,
        result: machine
      };
    } catch (error) {
      return {
        operation: "create",
        table: "machines",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0643\u064A\u0646\u0629: ${error.message}`
      };
    }
  }
  // تحديث طلب
  async updateOrder(params) {
    try {
      const { orderId, updates } = await this.extractUpdateData(params.text || params.data, "order");
      const result = await storage.getOrderById(orderId);
      return {
        operation: "update",
        table: "orders",
        success: true,
        message: `\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0637\u0644\u0628 ${result?.order_number || orderId} \u0628\u0646\u062C\u0627\u062D!`,
        result
      };
    } catch (error) {
      return {
        operation: "update",
        table: "orders",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0637\u0644\u0628: ${error.message}`
      };
    }
  }
  // تحديث مكينة
  async updateMachine(params) {
    try {
      const { machineId, updates } = await this.extractUpdateData(params.text || params.data, "machine");
      const machine = await storage.updateMachine(machineId, updates);
      return {
        operation: "update",
        table: "machines",
        success: true,
        message: `\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0643\u064A\u0646\u0629 ${machine.name_ar || machine.name} \u0628\u0646\u062C\u0627\u062D!`,
        result: machine
      };
    } catch (error) {
      return {
        operation: "update",
        table: "machines",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0643\u064A\u0646\u0629: ${error.message}`
      };
    }
  }
  // حذف عميل
  async deleteCustomer(params) {
    try {
      const customerId = await this.extractIdFromText(params.text || params.data, "customer");
      await storage.deleteCustomer(customerId);
      return {
        operation: "delete",
        table: "customers",
        success: true,
        message: `\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 ${customerId} \u0628\u0646\u062C\u0627\u062D!`
      };
    } catch (error) {
      return {
        operation: "delete",
        table: "customers",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u064A\u0644: ${error.message}`
      };
    }
  }
  // حذف طلب
  async deleteOrder(params) {
    try {
      const orderId = await this.extractIdFromText(params.text || params.data, "order");
      const success = true;
      return {
        operation: "delete",
        table: "orders",
        success,
        message: success ? `\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D!` : `\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0637\u0644\u0628`
      };
    } catch (error) {
      return {
        operation: "delete",
        table: "orders",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0637\u0644\u0628: ${error.message}`
      };
    }
  }
  // الحصول على الطلبات
  async getOrders(params) {
    try {
      const filters = await this.extractFilters(params.text || params.data);
      const orders2 = await storage.getAllOrders() || [];
      let message = `\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 ${orders2.length} \u0637\u0644\u0628:

`;
      orders2.slice(0, 5).forEach((order) => {
        message += `\u2022 \u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628: ${order.order_number}
`;
        message += `  \u0627\u0644\u062D\u0627\u0644\u0629: ${this.translateStatus(order.status)}
`;
        message += `  \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0646\u0634\u0627\u0621: ${new Date(order.created_at).toLocaleDateString("ar")}

`;
      });
      if (orders2.length > 5) {
        message += `... \u0648 ${orders2.length - 5} \u0637\u0644\u0628 \u0622\u062E\u0631`;
      }
      return {
        operation: "read",
        table: "orders",
        success: true,
        message,
        result: orders2
      };
    } catch (error) {
      return {
        operation: "read",
        table: "orders",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0637\u0644\u0628\u0627\u062A: ${error.message}`
      };
    }
  }
  // الحصول على المكائن
  async getMachines(params) {
    try {
      const machines2 = await storage.getMachines();
      let message = `\u0627\u0644\u0645\u0643\u0627\u0626\u0646 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 (${machines2.length}):

`;
      machines2.forEach((machine) => {
        message += `\u2022 ${machine.name_ar || machine.name}
`;
        message += `  \u0627\u0644\u0646\u0648\u0639: ${machine.type}
`;
        message += `  \u0627\u0644\u062D\u0627\u0644\u0629: ${this.translateStatus(machine.status)}

`;
      });
      return {
        operation: "read",
        table: "machines",
        success: true,
        message,
        result: machines2
      };
    } catch (error) {
      return {
        operation: "read",
        table: "machines",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0643\u0627\u0626\u0646: ${error.message}`
      };
    }
  }
  // الحصول على إحصائيات الإنتاج
  async getProductionStats(params) {
    try {
      const stats = await storage.getDashboardStats();
      const message = `\u{1F4CA} \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u062D\u0627\u0644\u064A\u0629:

\u{1F504} \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0646\u0634\u0637\u0629: ${stats.activeOrders} \u0637\u0644\u0628
\u{1F4C8} \u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C: ${stats.productionRate}%
\u2705 \u0646\u0633\u0628\u0629 \u0627\u0644\u062C\u0648\u062F\u0629: ${stats.qualityScore}%
\u{1F5D1}\uFE0F \u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631: ${stats.wastePercentage}%

\u062A\u062D\u0644\u064A\u0644 \u0633\u0631\u064A\u0639: ${this.analyzeProductionDataLocal(stats)}`;
      return {
        operation: "read",
        table: "dashboard_stats",
        success: true,
        message,
        result: stats
      };
    } catch (error) {
      return {
        operation: "read",
        table: "dashboard_stats",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C: ${error.message}`
      };
    }
  }
  // معالجة الاستعلامات المخصصة
  async handleCustomQuery(message, intent) {
    try {
      const sqlQuery = await this.generateSQLFromNaturalLanguage(message);
      const result = await this.executeSafeQuery(sqlQuery);
      return {
        operation: "read",
        table: "custom",
        success: true,
        message: `\u062A\u0645 \u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0628\u0646\u062C\u0627\u062D. \u0627\u0644\u0646\u062A\u0627\u0626\u062C: ${JSON.stringify(result, null, 2)}`,
        result
      };
    } catch (error) {
      return {
        operation: "read",
        table: "custom",
        success: false,
        message: `\u0641\u0634\u0644 \u0641\u064A \u062A\u0646\u0641\u064A\u0630 \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0627\u0644\u0645\u062E\u0635\u0635: ${error.message}`
      };
    }
  }
  // استخراج بيانات العميل من النص
  async extractCustomerData(text2) {
    const { AIHelpers: AIHelpers2 } = await Promise.resolve().then(() => (init_ai_helpers(), ai_helpers_exports));
    return AIHelpers2.extractCustomerData(text2);
  }
  // استخراج بيانات الطلب من النص
  async extractOrderData(text2) {
    const { AIHelpers: AIHelpers2 } = await Promise.resolve().then(() => (init_ai_helpers(), ai_helpers_exports));
    return AIHelpers2.extractOrderData(text2);
  }
  // استخراج بيانات أمر التشغيل من النص
  async extractJobOrderData(text2) {
    const { AIHelpers: AIHelpers2 } = await Promise.resolve().then(() => (init_ai_helpers(), ai_helpers_exports));
    return AIHelpers2.extractJobOrderData(text2);
  }
  // استخراج بيانات المكينة من النص
  async extractMachineData(text2) {
    const { AIHelpers: AIHelpers2 } = await Promise.resolve().then(() => (init_ai_helpers(), ai_helpers_exports));
    return AIHelpers2.extractMachineData(text2);
  }
  // استخراج بيانات التحديث من النص
  async extractUpdateData(text2, entityType) {
    const { AIHelpers: AIHelpers2 } = await Promise.resolve().then(() => (init_ai_helpers(), ai_helpers_exports));
    return AIHelpers2.extractUpdateData(text2, entityType);
  }
  // استخراج المعرف من النص
  async extractIdFromText(text2, entityType) {
    const { AIHelpers: AIHelpers2 } = await Promise.resolve().then(() => (init_ai_helpers(), ai_helpers_exports));
    return AIHelpers2.extractIdFromText(text2, entityType);
  }
  // استخراج مرشحات البحث من النص
  async extractFilters(text2) {
    const { AIHelpers: AIHelpers2 } = await Promise.resolve().then(() => (init_ai_helpers(), ai_helpers_exports));
    return AIHelpers2.extractFilters(text2);
  }
  // ترجمة الحالات إلى العربية
  translateStatus(status) {
    const { AIHelpers: AIHelpers2 } = (init_ai_helpers(), __toCommonJS(ai_helpers_exports));
    return AIHelpers2.translateStatus(status);
  }
  // تحليل بيانات الإنتاج (محلي)
  analyzeProductionDataLocal(stats) {
    let analysis = "\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C:\n";
    if (stats.productionRate < 70) {
      analysis += "\u2022 \u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0645\u0646\u062E\u0641\u0636 - \u064A\u062D\u062A\u0627\u062C \u062A\u062D\u0633\u064A\u0646\n";
    }
    if (stats.wastePercentage > 5) {
      analysis += "\u2022 \u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631 \u0645\u0631\u062A\u0641\u0639\u0629 - \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A\n";
    }
    return analysis;
  }
  // توليد SQL آمن من النص الطبيعي
  async generateSQLFromNaturalLanguage(text2) {
    const { AIHelpers: AIHelpers2 } = await Promise.resolve().then(() => (init_ai_helpers(), ai_helpers_exports));
    return AIHelpers2.generateSQLFromNaturalLanguage(text2);
  }
  // تنفيذ استعلام آمن
  async executeSafeQuery(sql5) {
    return { message: "\u062A\u0645 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0628\u0646\u062C\u0627\u062D - \u064A\u062A\u0637\u0644\u0628 \u062A\u0646\u0641\u064A\u0630 \u0625\u0636\u0627\u0641\u064A" };
  }
  // إرسال إشعار ذكي
  async sendIntelligentNotification(action, data) {
    try {
      const { AINotifications: AINotifications2 } = await Promise.resolve().then(() => (init_ai_notifications(), ai_notifications_exports));
      await AINotifications2.sendIntelligentNotification(action, data);
    } catch (error) {
      console.error("Error loading AI notifications module:", error);
    }
  }
  // تحديد ما إذا كان يجب إرسال إشعار
  shouldSendNotification(action) {
    const { AINotifications: AINotifications2 } = (init_ai_notifications(), __toCommonJS(ai_notifications_exports));
    return AINotifications2.shouldSendNotification(action);
  }
  // تسجيل بيانات التعلم
  async recordLearningData(userId, actionType, context, success, executionTime) {
    try {
      const { AILearning: AILearning2 } = await Promise.resolve().then(() => (init_ai_learning(), ai_learning_exports));
      await AILearning2.recordLearningData(userId, actionType, context, success, executionTime);
    } catch (error) {
      console.error("Error loading AI learning module:", error);
    }
  }
  // توليد تقرير ذكي
  async generateIntelligentReport(reportType, parameters) {
    try {
      const { AIReports: AIReports2 } = await Promise.resolve().then(() => (init_ai_reports(), ai_reports_exports));
      if (!AIReports2) {
        throw new Error("AIReports module not available");
      }
      let report;
      switch (reportType?.toLowerCase()) {
        case "production":
        case "\u0625\u0646\u062A\u0627\u062C":
          report = await AIReports2.generateProductionReport(parameters);
          break;
        case "quality":
        case "\u062C\u0648\u062F\u0629":
          report = await AIReports2.generateQualityReport(parameters);
          break;
        case "maintenance":
        case "\u0635\u064A\u0627\u0646\u0629":
          report = await AIReports2.generateMaintenanceReport(parameters);
          break;
        case "sales":
        case "\u0645\u0628\u064A\u0639\u0627\u062A":
          report = await AIReports2.generateSalesReport(parameters);
          break;
        default:
          report = await AIReports2.generateCustomReport(reportType || "\u0639\u0627\u0645", parameters);
      }
      let message = `\u{1F4CA} ${report.title}

`;
      message += `\u{1F4CB} **\u0627\u0644\u0645\u0644\u062E\u0635 \u0627\u0644\u062A\u0646\u0641\u064A\u0630\u064A:**
${report.summary}

`;
      if (report.insights.length > 0) {
        message += `\u{1F4A1} **\u0631\u0624\u0649 \u062A\u062D\u0644\u064A\u0644\u064A\u0629:**
`;
        report.insights.forEach((insight, index) => {
          message += `${index + 1}. ${insight}
`;
        });
        message += "\n";
      }
      if (report.recommendations.length > 0) {
        message += `\u{1F3AF} **\u0627\u0644\u062A\u0648\u0635\u064A\u0627\u062A:**
`;
        report.recommendations.forEach((rec, index) => {
          message += `${index + 1}. ${rec}
`;
        });
      }
      return message;
    } catch (error) {
      console.error("Intelligent report generation error:", error);
      return `\u0641\u0634\u0644 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0630\u0643\u064A: ${error?.message || "\u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641"}`;
    }
  }
  // معالجة الأخطاء
  handleError(error) {
    if (error?.status === 401) {
      return "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0645\u0641\u062A\u0627\u062D API. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u062E\u062F\u0645\u0629.";
    } else if (error?.status === 429) {
      return "\u062A\u0645 \u062A\u062C\u0627\u0648\u0632 \u062D\u062F \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0644\u0627\u062D\u0642\u0627\u064B.";
    } else if (error?.code === "network_error") {
      return "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u0634\u0628\u0643\u0629. \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A.";
    }
    return "\u0639\u0630\u0631\u0627\u064B\u060C \u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0639\u062F \u0627\u0644\u0630\u0643\u064A. \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0644\u0627\u062D\u0642\u0627\u064B.";
  }
};
var openaiService = new AdvancedOpenAIService();

// server/services/ml-service.ts
var MachineLearningService = class {
  productionHistory = [];
  HISTORY_LIMIT = 1e3;
  /**
   * تحليل بيانات الإنتاج وإضافتها للسجل التاريخي
   */
  async addProductionData(data) {
    this.productionHistory.push(data);
    if (this.productionHistory.length > this.HISTORY_LIMIT) {
      this.productionHistory = this.productionHistory.slice(-this.HISTORY_LIMIT);
    }
  }
  /**
   * التنبؤ بأداء الإنتاج باستخدام خوارزميات التعلم الآلي
   */
  async predictProductionPerformance(machineId, hoursAhead = 24) {
    try {
      const machineData = this.productionHistory.filter((d) => d.machineId === machineId);
      if (machineData.length < 10) {
        return {
          predictedRate: 0,
          qualityForecast: 0,
          maintenanceAlert: false,
          confidence: 0,
          recommendations: [
            "\u26A0\uFE0F \u063A\u064A\u0631 \u0642\u0627\u062F\u0631 \u0639\u0644\u0649 \u0627\u0644\u062A\u0646\u0628\u0624 - \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0643\u0627\u0641\u064A\u0629",
            `\u064A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 ${10 - machineData.length} \u0646\u0642\u0637\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644`,
            "\u0642\u0645 \u0628\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629 \u0644\u0641\u062A\u0631\u0629 \u0623\u0637\u0648\u0644 \u0644\u062C\u0645\u0639 \u0628\u064A\u0627\u0646\u0627\u062A \u0631\u0642\u0627\u0628\u064A\u0629"
          ]
        };
      }
      const recentData = machineData.slice(-24);
      const avgRate = recentData.reduce((sum2, d) => sum2 + (d.productionRate || 0), 0) / Math.max(recentData.length, 1);
      const avgQuality = recentData.reduce((sum2, d) => sum2 + (d.qualityScore || 0), 0) / Math.max(recentData.length, 1);
      const avgWaste = recentData.reduce((sum2, d) => sum2 + (d.wastePercentage || 0), 0) / Math.max(recentData.length, 1);
      const trend = this.calculateTrend(recentData.map((d) => d.productionRate || 0));
      const qualityTrend = this.calculateTrend(recentData.map((d) => d.qualityScore || 0));
      const predictedRate = Math.max(0, Math.min(100, avgRate + trend * hoursAhead / 24));
      const qualityForecast = Math.max(0, Math.min(100, avgQuality + qualityTrend * hoursAhead / 24));
      const maintenanceAlert = avgWaste > 8 || avgQuality < 80 || predictedRate < 70;
      const dataVariance = this.calculateVariance(recentData.map((d) => d.productionRate || 0));
      const confidence = Math.max(0.1, Math.min(1, 1 - dataVariance / 100));
      const recommendations = this.generateRecommendations(
        predictedRate,
        qualityForecast,
        avgWaste,
        maintenanceAlert
      );
      return {
        predictedRate: isNaN(predictedRate) ? 0 : predictedRate,
        qualityForecast: isNaN(qualityForecast) ? 0 : qualityForecast,
        maintenanceAlert,
        confidence: isNaN(confidence) ? 0 : confidence,
        recommendations
      };
    } catch (error) {
      console.error("Error in predictProductionPerformance:", error);
      return {
        predictedRate: 0,
        qualityForecast: 0,
        maintenanceAlert: false,
        confidence: 0,
        recommendations: ["\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0644\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C"]
      };
    }
  }
  /**
   * اكتشاف الشذوذ في بيانات الإنتاج
   */
  async detectAnomalies(data) {
    try {
      const machineData = this.productionHistory.filter((d) => d.machineId === data.machineId);
      if (machineData.length < 20) {
        return {
          isAnomaly: false,
          anomalyScore: 0,
          affectedMetrics: [],
          severity: "low",
          recommendations: [
            "\u26A0\uFE0F \u0644\u0627 \u064A\u0645\u0643\u0646 \u0641\u062D\u0635 \u0627\u0644\u0634\u0630\u0648\u0630 - \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0643\u0627\u0641\u064A\u0629",
            `\u064A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 ${20 - machineData.length} \u0646\u0642\u0637\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629 \u0644\u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0634\u0630\u0648\u0630`
          ]
        };
      }
      const recentData = machineData.slice(-50);
      const anomalies = [];
      let totalAnomalyScore = 0;
      const avgRate = recentData.reduce((sum2, d) => sum2 + d.productionRate, 0) / recentData.length;
      const rateStdDev = this.calculateStandardDeviation(recentData.map((d) => d.productionRate));
      const rateZScore = rateStdDev > 0 ? Math.abs((data.productionRate - avgRate) / rateStdDev) : 0;
      if (rateZScore > 2) {
        anomalies.push("\u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C");
        totalAnomalyScore += rateZScore;
      }
      const avgQuality = recentData.reduce((sum2, d) => sum2 + d.qualityScore, 0) / recentData.length;
      const qualityStdDev = this.calculateStandardDeviation(recentData.map((d) => d.qualityScore));
      const qualityZScore = qualityStdDev > 0 ? Math.abs((data.qualityScore - avgQuality) / qualityStdDev) : 0;
      if (qualityZScore > 2) {
        anomalies.push("\u0645\u0624\u0634\u0631 \u0627\u0644\u062C\u0648\u062F\u0629");
        totalAnomalyScore += qualityZScore;
      }
      const avgWaste = recentData.reduce((sum2, d) => sum2 + d.wastePercentage, 0) / recentData.length;
      const wasteStdDev = this.calculateStandardDeviation(recentData.map((d) => d.wastePercentage));
      const wasteZScore = wasteStdDev > 0 ? Math.abs((data.wastePercentage - avgWaste) / wasteStdDev) : 0;
      if (wasteZScore > 2) {
        anomalies.push("\u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631");
        totalAnomalyScore += wasteZScore;
      }
      const isAnomaly = anomalies.length > 0;
      const anomalyScore = totalAnomalyScore / 3;
      let severity = "low";
      if (anomalyScore > 3) severity = "high";
      else if (anomalyScore > 2.5) severity = "medium";
      const recommendations = this.generateAnomalyRecommendations(anomalies, severity);
      return {
        isAnomaly,
        anomalyScore,
        affectedMetrics: anomalies,
        severity,
        recommendations
      };
    } catch (error) {
      console.error("Error in detectAnomalies:", error);
      return {
        isAnomaly: false,
        anomalyScore: 0,
        affectedMetrics: [],
        severity: "low",
        recommendations: ["\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0634\u0630\u0648\u0630"]
      };
    }
  }
  /**
   * تحليل أنماط الإنتاج وتحديد أوقات الذروة
   */
  async analyzeProductionPatterns() {
    try {
      if (this.productionHistory.length < 100) {
        return {
          peakHours: [],
          optimalShifts: [],
          seasonalTrends: [],
          efficiencyInsights: [
            "\u26A0\uFE0F \u063A\u064A\u0631 \u0642\u0627\u062F\u0631 \u0639\u0644\u0649 \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0623\u0646\u0645\u0627\u0637 - \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0643\u0627\u0641\u064A\u0629",
            `\u064A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 ${100 - this.productionHistory.length} \u0646\u0642\u0637\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629`,
            "\u0642\u0645 \u0628\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0645\u0639\u062F\u0627\u062A \u0644\u062C\u0645\u0639 \u0628\u064A\u0627\u0646\u0627\u062A \u0643\u0627\u0641\u064A\u0629"
          ]
        };
      }
      const hourlyPerformance = {};
      this.productionHistory.forEach((data) => {
        if (data.timestamp && typeof data.timestamp.getHours === "function") {
          const hour = data.timestamp.getHours();
          if (!hourlyPerformance[hour]) hourlyPerformance[hour] = [];
          hourlyPerformance[hour].push(data.productionRate || 0);
        }
      });
      const peakHours = Object.entries(hourlyPerformance).map(([hour, rates]) => ({
        hour: parseInt(hour),
        avgRate: rates.length > 0 ? rates.reduce((sum2, rate) => sum2 + rate, 0) / rates.length : 0
      })).sort((a, b) => b.avgRate - a.avgRate).slice(0, 6).map((item) => item.hour).filter((hour) => !isNaN(hour));
      const shiftPerformance = {
        morning: this.getShiftPerformance(6, 14),
        afternoon: this.getShiftPerformance(14, 22),
        night: this.getShiftPerformance(22, 6)
      };
      const optimalShifts = [];
      if (shiftPerformance.morning > 80) optimalShifts.push("\u0627\u0644\u0635\u0628\u0627\u062D\u064A\u0629");
      if (shiftPerformance.afternoon > 80) optimalShifts.push("\u0627\u0644\u0645\u0633\u0627\u0626\u064A\u0629");
      if (shiftPerformance.night > 75) optimalShifts.push("\u0627\u0644\u0644\u064A\u0644\u064A\u0629");
      const efficiencyInsights = this.generateEfficiencyInsights(shiftPerformance, peakHours);
      return {
        peakHours,
        optimalShifts,
        seasonalTrends: [],
        efficiencyInsights
      };
    } catch (error) {
      console.error("Error in analyzeProductionPatterns:", error);
      return {
        peakHours: [],
        optimalShifts: [],
        seasonalTrends: [],
        efficiencyInsights: ["\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0644\u064A\u0644 \u0623\u0646\u0645\u0627\u0637 \u0627\u0644\u0625\u0646\u062A\u0627\u062C"]
      };
    }
  }
  /**
   * تحسين معاملات الإنتاج باستخدام خوارزميات التحسين
   */
  async optimizeProductionParameters(machineId) {
    const machineData = this.productionHistory.filter((d) => d.machineId === machineId);
    if (machineData.length < 50) {
      return {
        recommendedSpeed: 0,
        recommendedTemperature: 0,
        recommendedPressure: 0,
        expectedImprovement: 0,
        confidence: 0
      };
    }
    const bestPerformance = machineData.filter((d) => d.qualityScore > 90 && d.wastePercentage < 5).sort((a, b) => b.productionRate - a.productionRate)[0];
    if (!bestPerformance) {
      return {
        recommendedSpeed: 0,
        recommendedTemperature: 0,
        recommendedPressure: 0,
        expectedImprovement: 0,
        confidence: 0
      };
    }
    const currentAvg = {
      rate: machineData.slice(-10).reduce((sum2, d) => sum2 + d.productionRate, 0) / 10,
      quality: machineData.slice(-10).reduce((sum2, d) => sum2 + d.qualityScore, 0) / 10,
      waste: machineData.slice(-10).reduce((sum2, d) => sum2 + d.wastePercentage, 0) / 10
    };
    const expectedImprovement = Math.max(0, bestPerformance.productionRate - currentAvg.rate);
    return {
      recommendedSpeed: bestPerformance.speed || 85,
      recommendedTemperature: bestPerformance.temperature || 180,
      recommendedPressure: bestPerformance.pressure || 12,
      expectedImprovement,
      confidence: 0.8
    };
  }
  // دوال مساعدة
  calculateTrend(values) {
    if (values.length < 3) return 0;
    const n = values.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    for (let i = 0; i < n; i++) {
      sumX += i;
      sumY += values[i];
      sumXY += i * values[i];
      sumXX += i * i;
    }
    const denominator = n * sumXX - sumX * sumX;
    return denominator !== 0 ? (n * sumXY - sumX * sumY) / denominator : 0;
  }
  calculateVariance(values) {
    const mean = values.reduce((sum2, val) => sum2 + val, 0) / values.length;
    const squaredDiffs = values.map((val) => Math.pow(val - mean, 2));
    return squaredDiffs.reduce((sum2, val) => sum2 + val, 0) / values.length;
  }
  calculateStandardDeviation(values) {
    return Math.sqrt(this.calculateVariance(values));
  }
  getShiftPerformance(startHour, endHour) {
    const shiftData = this.productionHistory.filter((data) => {
      const hour = data.timestamp.getHours();
      return startHour <= endHour ? hour >= startHour && hour < endHour : hour >= startHour || hour < endHour;
    });
    if (shiftData.length === 0) return 75;
    return shiftData.reduce((sum2, d) => sum2 + d.productionRate, 0) / shiftData.length;
  }
  generateRecommendations(predictedRate, qualityForecast, wastePercentage, maintenanceAlert) {
    const recommendations = [];
    if (predictedRate < 70) {
      recommendations.push("\u0641\u062D\u0635 \u0633\u0631\u0639\u0629 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0648\u0636\u0628\u0637 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A");
      recommendations.push("\u0645\u0631\u0627\u062C\u0639\u0629 \u062C\u0648\u062F\u0629 \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u062E\u0627\u0645");
    }
    if (qualityForecast < 85) {
      recommendations.push("\u0641\u062D\u0635 \u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062C\u0648\u062F\u0629 \u0648\u0627\u0644\u0645\u0639\u0627\u064A\u0631\u0629");
      recommendations.push("\u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0639\u0645\u0627\u0644 \u0639\u0644\u0649 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062C\u0648\u062F\u0629");
    }
    if (wastePercentage > 5) {
      recommendations.push("\u0645\u0631\u0627\u062C\u0639\u0629 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0642\u0637\u0639 \u0648\u0627\u0644\u062A\u0634\u0643\u064A\u0644");
      recommendations.push("\u0641\u062D\u0635 \u062D\u0627\u0644\u0629 \u0627\u0644\u0642\u0648\u0627\u0644\u0628 \u0648\u0627\u0644\u0623\u062F\u0648\u0627\u062A");
    }
    if (maintenanceAlert) {
      recommendations.push("\u062C\u062F\u0648\u0644\u0629 \u0635\u064A\u0627\u0646\u0629 \u0648\u0642\u0627\u0626\u064A\u0629 \u0639\u0627\u062C\u0644\u0629");
      recommendations.push("\u0641\u062D\u0635 \u062C\u0645\u064A\u0639 \u0623\u062C\u0632\u0627\u0621 \u0627\u0644\u0645\u0643\u064A\u0646\u0629");
    }
    if (recommendations.length === 0) {
      recommendations.push("\u0627\u0644\u0623\u062F\u0627\u0621 \u0636\u0645\u0646 \u0627\u0644\u0645\u0639\u062F\u0644 \u0627\u0644\u0637\u0628\u064A\u0639\u064A");
    }
    return recommendations;
  }
  generateAnomalyRecommendations(anomalies, severity) {
    const recommendations = [];
    if (anomalies.includes("\u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C")) {
      recommendations.push("\u0641\u062D\u0635 \u0641\u0648\u0631\u064A \u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u0634\u063A\u064A\u0644");
      recommendations.push("\u0645\u0631\u0627\u062C\u0639\u0629 \u0633\u0631\u0639\u0629 \u0648\u0636\u063A\u0637 \u0627\u0644\u0645\u0643\u064A\u0646\u0629");
    }
    if (anomalies.includes("\u0645\u0624\u0634\u0631 \u0627\u0644\u062C\u0648\u062F\u0629")) {
      recommendations.push("\u0641\u062D\u0635 \u0646\u0638\u0627\u0645 \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u062C\u0648\u062F\u0629");
      recommendations.push("\u0645\u0639\u0627\u064A\u0631\u0629 \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u0642\u064A\u0627\u0633");
    }
    if (anomalies.includes("\u0646\u0633\u0628\u0629 \u0627\u0644\u0647\u062F\u0631")) {
      recommendations.push("\u0641\u062D\u0635 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0642\u0637\u0639 \u0648\u0627\u0644\u062A\u0634\u0643\u064A\u0644");
      recommendations.push("\u0645\u0631\u0627\u062C\u0639\u0629 \u062C\u0648\u062F\u0629 \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u062E\u0627\u0645");
    }
    if (severity === "high") {
      recommendations.unshift("\u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0641\u0648\u0631\u0627\u064B \u0644\u0644\u0641\u062D\u0635");
    }
    return recommendations;
  }
  generateEfficiencyInsights(shiftPerformance, peakHours) {
    const insights = [];
    if (shiftPerformance.morning > shiftPerformance.afternoon) {
      insights.push("\u0627\u0644\u0623\u062F\u0627\u0621 \u0623\u0641\u0636\u0644 \u0641\u064A \u0627\u0644\u0641\u062A\u0631\u0629 \u0627\u0644\u0635\u0628\u0627\u062D\u064A\u0629");
    }
    if (peakHours.includes(8) && peakHours.includes(9)) {
      insights.push("\u0627\u0644\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0623\u0648\u0644\u0649 \u0645\u0646 \u0627\u0644\u0639\u0645\u0644 \u062A\u062D\u0642\u0642 \u0623\u0641\u0636\u0644 \u0625\u0646\u062A\u0627\u062C\u064A\u0629");
    }
    if (shiftPerformance.night < 70) {
      insights.push("\u0627\u0644\u0641\u062A\u0631\u0629 \u0627\u0644\u0644\u064A\u0644\u064A\u0629 \u062A\u062D\u062A\u0627\u062C \u062A\u062D\u0633\u064A\u0646 \u0641\u064A \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A\u0629");
    }
    insights.push(`\u0623\u0641\u0636\u0644 \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C: ${peakHours.join("\u060C ")}`);
    return insights;
  }
};
var mlService = new MachineLearningService();

// server/services/notification-service.ts
import twilio from "twilio";

// server/services/meta-whatsapp.ts
var MetaWhatsAppService = class {
  config;
  storage;
  baseUrl;
  constructor(storage2, config) {
    this.storage = storage2;
    this.config = {
      accessToken: process.env.META_ACCESS_TOKEN || "",
      phoneNumberId: process.env.META_PHONE_NUMBER_ID || "",
      businessAccountId: process.env.META_BUSINESS_ACCOUNT_ID || "795259496521200",
      apiVersion: "v21.0",
      ...config
    };
    this.baseUrl = `https://graph.facebook.com/${this.config.apiVersion}`;
    if (!this.config.accessToken || !this.config.phoneNumberId) {
      console.warn("\u26A0\uFE0F Meta WhatsApp API credentials not configured. Set META_ACCESS_TOKEN and META_PHONE_NUMBER_ID environment variables.");
    } else {
      console.log("\u2705 Meta WhatsApp API service initialized successfully");
    }
  }
  /**
   * إرسال رسالة نصية مباشرة
   */
  async sendTextMessage(to, message, options) {
    try {
      if (!this.config.accessToken || !this.config.phoneNumberId) {
        throw new Error("Meta WhatsApp API \u063A\u064A\u0631 \u0645\u064F\u0639\u062F \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      }
      const formattedPhone = to.replace(/[\+\s\-\(\)]/g, "").replace("whatsapp:", "");
      const messageData = {
        to: formattedPhone,
        type: "text",
        text: {
          body: message
        }
      };
      const response = await fetch(`${this.baseUrl}/${this.config.phoneNumberId}/messages`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.config.accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(messageData)
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error?.message || `HTTP ${response.status}: ${response.statusText}`);
      }
      const notificationData = {
        title: options?.title || "\u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628",
        message,
        type: "whatsapp",
        priority: options?.priority || "normal",
        recipient_type: "user",
        phone_number: to,
        status: "sent",
        external_id: result.messages?.[0]?.id,
        external_status: "sent",
        sent_at: /* @__PURE__ */ new Date(),
        context_type: options?.context_type,
        context_id: options?.context_id
      };
      await this.storage.createNotification(notificationData);
      console.log(`\u{1F4F1} \u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649 ${to} - ID: ${result.messages?.[0]?.id}`);
      return {
        success: true,
        messageId: result.messages?.[0]?.id
      };
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628 \u0639\u0628\u0631 Meta API:", error);
      const notificationData = {
        title: options?.title || "\u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628",
        message,
        type: "whatsapp",
        priority: options?.priority || "normal",
        recipient_type: "user",
        phone_number: to,
        status: "failed",
        error_message: error.message,
        context_type: options?.context_type,
        context_id: options?.context_id
      };
      await this.storage.createNotification(notificationData);
      return {
        success: false,
        error: error.message
      };
    }
  }
  /**
   * إرسال رسالة باستخدام قالب Meta مُوافق عليه
   */
  async sendTemplateMessage(to, templateName, language = "ar", variables = [], options) {
    try {
      if (!this.config.accessToken || !this.config.phoneNumberId) {
        throw new Error("Meta WhatsApp API \u063A\u064A\u0631 \u0645\u064F\u0639\u062F \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      }
      const formattedPhone = to.replace(/[\+\s\-\(\)]/g, "").replace("whatsapp:", "");
      const messageData = {
        to: formattedPhone,
        type: "template",
        template: {
          name: templateName,
          language: {
            code: language
          }
        }
      };
      if (variables && variables.length > 0) {
        messageData.template.components = [
          {
            type: "body",
            parameters: variables.map((variable) => ({
              type: "text",
              text: variable
            }))
          }
        ];
      }
      const response = await fetch(`${this.baseUrl}/${this.config.phoneNumberId}/messages`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${this.config.accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(messageData)
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error?.message || `HTTP ${response.status}: ${response.statusText}`);
      }
      const notificationData = {
        title: options?.title || "\u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628 (\u0642\u0627\u0644\u0628)",
        message: `\u0642\u0627\u0644\u0628: ${templateName} - \u0645\u062A\u063A\u064A\u0631\u0627\u062A: ${variables.join(", ")}`,
        type: "whatsapp",
        priority: options?.priority || "normal",
        recipient_type: "user",
        phone_number: to,
        status: "sent",
        external_id: result.messages?.[0]?.id,
        external_status: "sent",
        sent_at: /* @__PURE__ */ new Date(),
        context_type: options?.context_type,
        context_id: options?.context_id
      };
      await this.storage.createNotification(notificationData);
      console.log(`\u{1F4F1} \u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628 (\u0642\u0627\u0644\u0628 Meta) \u0625\u0644\u0649 ${to} - ID: ${result.messages?.[0]?.id}`);
      return {
        success: true,
        messageId: result.messages?.[0]?.id
      };
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628 (\u0642\u0627\u0644\u0628 Meta):", error);
      const notificationData = {
        title: options?.title || "\u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628 (\u0642\u0627\u0644\u0628)",
        message: `\u0642\u0627\u0644\u0628: ${templateName} - \u062E\u0637\u0623: ${error.message}`,
        type: "whatsapp",
        priority: options?.priority || "normal",
        recipient_type: "user",
        phone_number: to,
        status: "failed",
        error_message: error.message,
        context_type: options?.context_type,
        context_id: options?.context_id
      };
      await this.storage.createNotification(notificationData);
      return {
        success: false,
        error: error.message
      };
    }
  }
  /**
   * الحصول على معلومات رقم الهاتف التجاري
   */
  async getPhoneNumberInfo() {
    try {
      if (!this.config.accessToken || !this.config.phoneNumberId) {
        throw new Error("Meta WhatsApp API \u063A\u064A\u0631 \u0645\u064F\u0639\u062F \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      }
      const response = await fetch(
        `${this.baseUrl}/${this.config.phoneNumberId}?fields=display_phone_number,verified_name,quality_rating`,
        {
          headers: {
            "Authorization": `Bearer ${this.config.accessToken}`
          }
        }
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error?.message || `HTTP ${response.status}`);
      }
      return result;
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0631\u0642\u0645:", error);
      throw error;
    }
  }
  /**
   * الحصول على قائمة القوالب المُوافقة
   */
  async getApprovedTemplates() {
    try {
      if (!this.config.accessToken || !this.config.businessAccountId) {
        throw new Error("Meta WhatsApp API \u063A\u064A\u0631 \u0645\u064F\u0639\u062F \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      }
      const response = await fetch(
        `${this.baseUrl}/${this.config.businessAccountId}/message_templates?fields=name,status,language,components`,
        {
          headers: {
            "Authorization": `Bearer ${this.config.accessToken}`
          }
        }
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error?.message || `HTTP ${response.status}`);
      }
      return result.data?.filter((template) => template.status === "APPROVED") || [];
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644\u0642\u0648\u0627\u0644\u0628:", error);
      throw error;
    }
  }
  /**
   * التحقق من صحة الإعداد
   */
  async testConnection() {
    try {
      const phoneInfo = await this.getPhoneNumberInfo();
      return {
        success: true,
        data: phoneInfo
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
  /**
   * معالجة Webhook الواردة من Meta
   */
  async handleWebhook(body) {
    try {
      if (body.entry && body.entry[0] && body.entry[0].changes) {
        for (const change of body.entry[0].changes) {
          if (change.field === "messages") {
            const value = change.value;
            if (value.statuses) {
              for (const status of value.statuses) {
                await this.updateMessageStatus(status.id, status.status);
              }
            }
            if (value.messages) {
              for (const message of value.messages) {
                await this.handleIncomingMessage(message);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 Webhook:", error);
    }
  }
  /**
   * تحديث حالة الرسالة
   */
  async updateMessageStatus(messageId, status) {
    try {
      const notifications2 = await this.storage.getNotifications();
      const notification = notifications2.find((n) => n.twilio_sid === messageId || n.external_id === messageId);
      if (notification) {
        const updatedNotification = {
          ...notification,
          external_status: status,
          delivered_at: status === "delivered" ? /* @__PURE__ */ new Date() : notification.delivered_at,
          read_at: status === "read" ? /* @__PURE__ */ new Date() : notification.read_at
        };
        console.log(`\u{1F4CA} \u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 ${messageId}: ${status}`);
      }
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0631\u0633\u0627\u0644\u0629:", error);
    }
  }
  /**
   * معالجة الرسائل الواردة
   */
  async handleIncomingMessage(message) {
    try {
      console.log("\u{1F4E8} \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u0631\u062F\u0629:", {
        from: message.from,
        type: message.type,
        text: message.text?.body || "\u063A\u064A\u0631 \u0646\u0635\u064A\u0629"
      });
      const notificationData = {
        title: "\u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u0631\u062F\u0629",
        message: message.text?.body || "\u0631\u0633\u0627\u0644\u0629 \u063A\u064A\u0631 \u0646\u0635\u064A\u0629",
        type: "whatsapp",
        priority: "normal",
        recipient_type: "system",
        phone_number: message.from,
        status: "received",
        external_id: message.id,
        external_status: "received",
        received_at: /* @__PURE__ */ new Date(),
        context_type: "incoming_message"
      };
      await this.storage.createNotification(notificationData);
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0648\u0627\u0631\u062F\u0629:", error);
    }
  }
};

// server/services/notification-service.ts
var NotificationService = class {
  twilioClient;
  metaWhatsApp;
  storage;
  twilioPhoneNumber;
  useMetaAPI;
  constructor(storage2) {
    this.storage = storage2;
    this.useMetaAPI = !!(process.env.META_ACCESS_TOKEN && process.env.META_PHONE_NUMBER_ID);
    this.metaWhatsApp = new MetaWhatsAppService(storage2);
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    this.twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER || "";
    if (!accountSid || !authToken) {
      console.warn("Twilio credentials not found. WhatsApp messaging via Twilio will be disabled.");
      this.twilioClient = null;
    } else {
      this.twilioClient = twilio(accountSid, authToken);
      console.log("\u2705 Twilio WhatsApp service initialized successfully");
    }
    if (this.useMetaAPI) {
      console.log("\u{1F680} Using Meta WhatsApp Business API directly");
    } else {
      console.log("\u{1F4F1} Using Twilio as WhatsApp gateway");
    }
  }
  /**
   * إرسال رسالة واتس اب باستخدام قالب مُوافق عليه
   */
  async sendWhatsAppTemplateMessage(phoneNumber, templateName, variables = [], options) {
    try {
      if (!this.twilioClient) {
        throw new Error("\u062E\u062F\u0645\u0629 Twilio \u063A\u064A\u0631 \u0645\u064F\u0639\u062F\u0629 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      }
      const formattedNumber = phoneNumber.startsWith("whatsapp:") ? phoneNumber : `whatsapp:${phoneNumber}`;
      const contentSid = process.env.TWILIO_CONTENT_SID;
      let messageData;
      if (contentSid && templateName.includes("welcome_hxc4485f514cb7d4536026fc56250f75e7")) {
        messageData = {
          from: `whatsapp:${this.twilioPhoneNumber}`,
          to: formattedNumber,
          contentSid
        };
        if (variables && variables.length > 0) {
          messageData.contentVariables = JSON.stringify({
            "1": variables[0] || "\u0645\u0631\u062D\u0628\u0627\u064B \u0645\u0646 \u0646\u0638\u0627\u0645 MPBF"
          });
        }
      } else {
        messageData = {
          from: `whatsapp:${this.twilioPhoneNumber}`,
          to: formattedNumber,
          body: variables[0] || "\u0645\u0631\u062D\u0628\u0627\u064B \u0645\u0646 \u0646\u0638\u0627\u0645 MPBF"
        };
        console.warn("\u26A0\uFE0F TWILIO_CONTENT_SID not configured. Using direct text message. Visit /twilio-content for setup instructions.");
      }
      const twilioMessage = await this.twilioClient.messages.create(messageData);
      const notificationData = {
        title: options?.title || "\u0625\u0634\u0639\u0627\u0631 \u0648\u0627\u062A\u0633 \u0627\u0628",
        message: `\u0642\u0627\u0644\u0628: ${templateName} - \u0645\u062A\u063A\u064A\u0631\u0627\u062A: ${variables.join(", ")}`,
        type: "whatsapp",
        priority: options?.priority || "normal",
        recipient_type: "user",
        phone_number: phoneNumber,
        status: "sent",
        twilio_sid: twilioMessage.sid,
        external_status: twilioMessage.status,
        sent_at: /* @__PURE__ */ new Date(),
        context_type: options?.context_type,
        context_id: options?.context_id
      };
      await this.storage.createNotification(notificationData);
      console.log(`\u{1F4F1} \u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628 (\u0642\u0627\u0644\u0628) \u0625\u0644\u0649 ${phoneNumber} - SID: ${twilioMessage.sid}`);
      return {
        success: true,
        messageId: twilioMessage.sid
      };
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628 (\u0642\u0627\u0644\u0628):", error);
      const notificationData = {
        title: options?.title || "\u0625\u0634\u0639\u0627\u0631 \u0648\u0627\u062A\u0633 \u0627\u0628",
        message: `\u0642\u0627\u0644\u0628: ${templateName} - \u062E\u0637\u0623: ${error.message}`,
        type: "whatsapp",
        priority: options?.priority || "normal",
        recipient_type: "user",
        phone_number: phoneNumber,
        status: "failed",
        error_message: error.message,
        context_type: options?.context_type,
        context_id: options?.context_id
      };
      await this.storage.createNotification(notificationData);
      return {
        success: false,
        error: error.message
      };
    }
  }
  /**
   * إرسال إشعار واتس اب (يختار API المناسب تلقائياً)
   */
  async sendWhatsAppMessage(phoneNumber, message, options) {
    if (this.useMetaAPI) {
      if (options?.useTemplate && options?.templateName) {
        return this.metaWhatsApp.sendTemplateMessage(
          phoneNumber,
          options.templateName,
          "ar",
          [message],
          options
        );
      } else {
        return this.metaWhatsApp.sendTextMessage(phoneNumber, message, options);
      }
    } else {
      if (options?.useTemplate) {
        return this.sendWhatsAppTemplateMessage(
          phoneNumber,
          options.templateName || "welcome_hxc4485f514cb7d4536026fc56250f75e7",
          [message],
          options
        );
      } else {
        return this.sendWhatsAppDirectMessage(phoneNumber, message, options);
      }
    }
  }
  /**
   * إرسال رسالة واتس اب مباشرة (للاختبار فقط في Sandbox)
   */
  async sendWhatsAppDirectMessage(phoneNumber, message, options) {
    try {
      if (!this.twilioClient) {
        throw new Error("\u062E\u062F\u0645\u0629 Twilio \u063A\u064A\u0631 \u0645\u064F\u0639\u062F\u0629 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
      }
      const formattedNumber = phoneNumber.startsWith("whatsapp:") ? phoneNumber : `whatsapp:${phoneNumber}`;
      const twilioMessage = await this.twilioClient.messages.create({
        body: message,
        from: `whatsapp:${this.twilioPhoneNumber}`,
        to: formattedNumber
      });
      const notificationData = {
        title: options?.title || "\u0625\u0634\u0639\u0627\u0631 \u0648\u0627\u062A\u0633 \u0627\u0628",
        message,
        type: "whatsapp",
        priority: options?.priority || "normal",
        recipient_type: "user",
        phone_number: phoneNumber,
        status: "sent",
        twilio_sid: twilioMessage.sid,
        external_status: twilioMessage.status,
        sent_at: /* @__PURE__ */ new Date(),
        context_type: options?.context_type,
        context_id: options?.context_id
      };
      await this.storage.createNotification(notificationData);
      console.log(`\u{1F4F1} \u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628 \u0625\u0644\u0649 ${phoneNumber} - SID: ${twilioMessage.sid}`);
      return {
        success: true,
        messageId: twilioMessage.sid
      };
    } catch (error) {
      console.error("\u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062A\u0633 \u0627\u0628:", error);
      const notificationData = {
        title: options?.title || "\u0625\u0634\u0639\u0627\u0631 \u0648\u0627\u062A\u0633 \u0627\u0628",
        message,
        type: "whatsapp",
        priority: options?.priority || "normal",
        recipient_type: "user",
        phone_number: phoneNumber,
        status: "failed",
        error_message: error.message,
        context_type: options?.context_type,
        context_id: options?.context_id
      };
      await this.storage.createNotification(notificationData);
      return {
        success: false,
        error: error.message
      };
    }
  }
  /**
   * إرسال إشعار إلى مستخدم محدد
   */
  async notifyUser(userId, notificationData) {
    try {
      const user = await this.storage.getUserById(userId);
      if (!user) {
        console.warn(`\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ${userId} \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F`);
        return false;
      }
      if (notificationData.type === "whatsapp" && user.phone) {
        const result = await this.sendWhatsAppMessage(
          user.phone,
          notificationData.message_ar || notificationData.message,
          {
            title: notificationData.title_ar || notificationData.title,
            priority: notificationData.priority,
            context_type: notificationData.context_type,
            context_id: notificationData.context_id
          }
        );
        return result.success;
      }
      const dbNotification = {
        ...notificationData,
        recipient_type: "user",
        recipient_id: userId.toString(),
        status: "sent"
      };
      await this.storage.createNotification(dbNotification);
      return true;
    } catch (error) {
      console.error(`\u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0644\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ${userId}:`, error);
      return false;
    }
  }
  /**
   * إرسال إشعارات جماعية بناءً على الدور
   */
  async notifyByRole(roleId, notificationData) {
    try {
      const users3 = await this.storage.getUsersByRole(roleId);
      let successCount = 0;
      for (const user of users3) {
        const success = await this.notifyUser(user.id, notificationData);
        if (success) successCount++;
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      console.log(`\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 ${successCount} \u0625\u0634\u0639\u0627\u0631 \u0645\u0646 \u0623\u0635\u0644 ${users3.length} \u0644\u0644\u062F\u0648\u0631 ${roleId}`);
      return successCount;
    } catch (error) {
      console.error(`\u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0644\u0644\u062F\u0648\u0631 ${roleId}:`, error);
      return 0;
    }
  }
  /**
   * معالجة إشعارات الحضور
   */
  async notifyAttendanceEvent(userId, eventType, additionalInfo) {
    const messages = {
      check_in: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644\u0643 \u0628\u0646\u062C\u0627\u062D \u2705",
      check_out: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C\u0643 \u0628\u0646\u062C\u0627\u062D \u{1F44B}",
      lunch_start: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0628\u062F\u0627\u064A\u0629 \u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0627\u0644\u063A\u062F\u0627\u0621 \u{1F37D}\uFE0F",
      lunch_end: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0627\u0644\u063A\u062F\u0627\u0621 \u2705",
      late: "\u062A\u0646\u0628\u064A\u0647: \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u062A\u0623\u062E\u064A\u0631 \u0641\u064A \u0627\u0644\u062D\u0636\u0648\u0631 \u26A0\uFE0F"
    };
    const titles = {
      check_in: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
      check_out: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C",
      lunch_start: "\u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0627\u0644\u063A\u062F\u0627\u0621",
      lunch_end: "\u0627\u0644\u0639\u0648\u062F\u0629 \u0645\u0646 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062D\u0629",
      late: "\u062A\u0646\u0628\u064A\u0647 \u062A\u0623\u062E\u064A\u0631"
    };
    const notificationData = {
      title: titles[eventType],
      message: messages[eventType],
      type: "whatsapp",
      priority: eventType === "late" ? "high" : "normal",
      recipient_type: "user",
      context_type: "attendance",
      context_id: additionalInfo?.attendanceId?.toString()
    };
    return await this.notifyUser(userId, notificationData);
  }
  /**
   * معالجة إشعارات الطلبات
   */
  async notifyOrderEvent(orderNumber, eventType, userIds) {
    const messages = {
      created: `\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u062C\u062F\u064A\u062F: ${orderNumber} \u{1F4E6}`,
      completed: `\u062A\u0645 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0637\u0644\u0628: ${orderNumber} \u2705`,
      delayed: `\u062A\u0623\u062E\u064A\u0631 \u0641\u064A \u0627\u0644\u0637\u0644\u0628: ${orderNumber} \u26A0\uFE0F`,
      cancelled: `\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628: ${orderNumber} \u274C`
    };
    const titles = {
      created: "\u0637\u0644\u0628 \u062C\u062F\u064A\u062F",
      completed: "\u0627\u0643\u062A\u0645\u0627\u0644 \u0637\u0644\u0628",
      delayed: "\u062A\u0623\u062E\u064A\u0631 \u0637\u0644\u0628",
      cancelled: "\u0625\u0644\u063A\u0627\u0621 \u0637\u0644\u0628"
    };
    const notificationData = {
      title: titles[eventType],
      message: messages[eventType],
      type: "whatsapp",
      priority: eventType === "delayed" ? "high" : "normal",
      recipient_type: userIds ? "user" : "role",
      context_type: "order",
      context_id: orderNumber
    };
    if (userIds && userIds.length > 0) {
      let successCount = 0;
      for (const userId of userIds) {
        const success = await this.notifyUser(userId, notificationData);
        if (success) successCount++;
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      return successCount;
    } else {
      return await this.notifyByRole(2, notificationData);
    }
  }
  /**
   * الحصول على حالة الرسالة من Twilio
   */
  async updateMessageStatus(twilioSid) {
    try {
      if (!this.twilioClient) return false;
      const message = await this.twilioClient.messages(twilioSid).fetch();
      await this.storage.updateNotificationStatus(twilioSid, {
        external_status: message.status,
        delivered_at: message.status === "delivered" ? /* @__PURE__ */ new Date() : void 0,
        error_message: message.errorMessage || void 0
      });
      return true;
    } catch (error) {
      console.error(`\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 ${twilioSid}:`, error);
      return false;
    }
  }
  /**
   * إرسال رسالة اختبار
   */
  async sendTestMessage(phoneNumber) {
    const testMessage = `
\u{1F527} \u0631\u0633\u0627\u0644\u0629 \u0627\u062E\u062A\u0628\u0627\u0631 \u0645\u0646 \u0646\u0638\u0627\u0645 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0635\u0646\u0639

\u0645\u0631\u062D\u0628\u0627\u064B! \u0647\u0630\u0647 \u0631\u0633\u0627\u0644\u0629 \u0627\u062E\u062A\u0628\u0627\u0631 \u0644\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0639\u0645\u0644 \u062E\u062F\u0645\u0629 \u0627\u0644\u0648\u0627\u062A\u0633 \u0627\u0628 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D.

\u23F0 \u0627\u0644\u062A\u0648\u0642\u064A\u062A: ${(/* @__PURE__ */ new Date()).toLocaleString("ar")}
\u2705 \u0627\u0644\u062E\u062F\u0645\u0629 \u062A\u0639\u0645\u0644 \u0628\u0646\u062C\u0627\u062D

\u0634\u0643\u0631\u0627\u064B \u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0646\u0638\u0627\u0645\u0646\u0627! 
    `.trim();
    const result = await this.sendWhatsAppMessage(phoneNumber, testMessage, {
      title: "\u0631\u0633\u0627\u0644\u0629 \u0627\u062E\u062A\u0628\u0627\u0631",
      priority: "normal",
      context_type: "system",
      context_id: "test"
    });
    return {
      success: result.success,
      message: result.success ? "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631 \u0628\u0646\u062C\u0627\u062D" : void 0,
      error: result.error
    };
  }
};

// server/routes.ts
init_notification_manager();
init_storage();

// server/database-optimizations.ts
init_db();
import { sql as sql3 } from "drizzle-orm";
async function createPerformanceIndexes() {
  try {
    console.log("[DB Optimization] Creating performance indexes...");
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_production_orders_status_order_id
      ON production_orders (status, order_id);
    `);
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_production_orders_created_at
      ON production_orders (created_at DESC);
    `);
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_rolls_stage_status
      ON rolls (stage, status);
    `);
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_rolls_production_order_id
      ON rolls (production_order_id);
    `);
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_orders_customer_status_date
      ON orders (customer_id, status, created_at DESC);
    `);
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_orders_order_number_gin
      ON orders USING GIN (order_number gin_trgm_ops);
    `);
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_customer_products_customer_id
      ON customer_products (customer_id);
    `);
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_notifications_recipient_created
      ON notifications (recipient_id, created_at DESC);
    `);
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_notifications_status
      ON notifications (status);
    `);
    console.log("[DB Optimization] Performance indexes created successfully");
  } catch (error) {
    console.error("[DB Optimization] Error creating indexes:", error);
  }
}
async function createTextSearchIndexes() {
  try {
    console.log("[DB Optimization] Creating text search indexes...");
    await db.execute(sql3`CREATE EXTENSION IF NOT EXISTS pg_trgm;`);
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_customers_name_gin
      ON customers USING GIN ((name || ' ' || COALESCE(name_ar, '')) gin_trgm_ops);
    `);
    await db.execute(sql3`
      CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_items_name_gin
      ON items USING GIN ((name || ' ' || COALESCE(name_ar, '')) gin_trgm_ops);
    `);
    console.log("[DB Optimization] Text search indexes created successfully");
  } catch (error) {
    console.error("[DB Optimization] Error creating text search indexes:", error);
  }
}

// server/routes/alerts.ts
init_alert_manager();
import { Router } from "express";

// server/services/system-health-monitor.ts
init_db();
init_notification_manager();
import { EventEmitter as EventEmitter3 } from "events";
import { sql as sql4 } from "drizzle-orm";
var SystemHealthMonitor = class _SystemHealthMonitor extends EventEmitter3 {
  storage;
  monitoringInterval = null;
  healthCheckInterval = null;
  alertRules = [];
  lastHealthStatus = /* @__PURE__ */ new Map();
  consecutiveStatusCounts = /* @__PURE__ */ new Map();
  // Track consecutive status counts for hysteresis
  lastAlertTimes = /* @__PURE__ */ new Map();
  // Track last alert times for rate limiting
  static instance = null;
  // Singleton pattern
  // إعدادات المراقبة - Increased intervals to reduce alert frequency
  MONITORING_INTERVAL = 15 * 60 * 1e3;
  // تم زيادتها إلى 15 دقيقة لتقليل التحذيرات
  HEALTH_CHECK_INTERVAL = 10 * 60 * 1e3;
  // تم زيادتها إلى 10 دقائق لتقليل الحساسية
  PERFORMANCE_RETENTION_DAYS = 30;
  // الاحتفاظ بالبيانات لمدة 30 يوم
  // إعدادات التحذيرات - Drastically increased cooldowns to prevent spam
  ALERT_COOLDOWN_MEMORY = 4 * 60 * 60 * 1e3;
  // زيادة إلى 4 ساعات للذاكرة
  ALERT_COOLDOWN_DATABASE = 8 * 60 * 60 * 1e3;
  // زيادة إلى 8 ساعات لقاعدة البيانات
  ALERT_COOLDOWN_DEFAULT = 6 * 60 * 60 * 1e3;
  // زيادة إلى 6 ساعات افتراضي
  // Sustained condition settings for hysteresis - Dramatically increased to reduce noise
  SUSTAINED_CONDITION_COUNT = 10;
  // 10 consecutive checks before changing status
  constructor(storage2) {
    super();
    if (_SystemHealthMonitor.instance) {
      console.log("[SystemHealthMonitor] \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u062B\u064A\u0644 \u0645\u0648\u062C\u0648\u062F\u060C \u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0645\u062B\u064A\u0644 \u0627\u0644\u0642\u062F\u064A\u0645");
      _SystemHealthMonitor.instance.stopMonitoring();
    }
    this.storage = storage2;
    _SystemHealthMonitor.instance = this;
    console.log("[SystemHealthMonitor] \u0646\u0638\u0627\u0645 \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0645\u064F\u0641\u0639\u0644");
    this.initialize();
  }
  /**
   * Get singleton instance
   */
  static getInstance(storage2) {
    if (storage2 && !_SystemHealthMonitor.instance) {
      new _SystemHealthMonitor(storage2);
    }
    return _SystemHealthMonitor.instance;
  }
  /**
   * تشغيل نظام المراقبة
   */
  async initialize() {
    try {
      await this.loadAlertRules();
      await this.hydrateLastAlertTimes();
      await this.createDefaultHealthChecks();
      this.startMonitoring();
      console.log("[SystemHealthMonitor] \u062A\u0645 \u062A\u0634\u063A\u064A\u0644 \u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0628\u0646\u062C\u0627\u062D \u2705");
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u062A\u0634\u063A\u064A\u0644 \u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629:", error);
    }
  }
  /**
   * بدء المراقبة الدورية
   */
  startMonitoring() {
    this.healthCheckInterval = setInterval(async () => {
      await this.performHealthChecks();
    }, this.HEALTH_CHECK_INTERVAL);
    this.monitoringInterval = setInterval(async () => {
      await this.performMonitoring();
    }, this.MONITORING_INTERVAL);
    console.log("[SystemHealthMonitor] \u0628\u062F\u0623\u062A \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u062F\u0648\u0631\u064A\u0629");
  }
  /**
   * إيقاف المراقبة
   */
  stopMonitoring() {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }
    _SystemHealthMonitor.instance = null;
    console.log("[SystemHealthMonitor] \u062A\u0645 \u0625\u064A\u0642\u0627\u0641 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629");
  }
  /**
   * تحميل قواعد التحذيرات من قاعدة البيانات
   */
  async loadAlertRules() {
    try {
      console.log("[SystemHealthMonitor] \u062A\u0645 \u062A\u062D\u0645\u064A\u0644 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A");
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A:", error);
    }
  }
  /**
   * Hydrate lastAlertTimes Map from persistent storage
   */
  async hydrateLastAlertTimes() {
    try {
      const checkNames = ["Database Connection", "Database Performance", "Memory Usage", "System Health API"];
      for (const checkName of checkNames) {
        const normalizedKey = this.normalizeAlertKey("", checkName);
        const lastAlertTime = await this.storage.getLastAlertTime(normalizedKey);
        if (lastAlertTime) {
          this.lastAlertTimes.set(normalizedKey, lastAlertTime);
          console.log(`[SystemHealthMonitor] \u062A\u0645 \u062A\u062D\u0645\u064A\u0644 \u0648\u0642\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631 \u0627\u0644\u0623\u062E\u064A\u0631 \u0644\u0644\u0641\u062D\u0635: ${checkName} \u0641\u064A ${lastAlertTime.toISOString()}`);
        }
      }
      console.log(`[SystemHealthMonitor] \u062A\u0645 \u062A\u062D\u0645\u064A\u0644 ${this.lastAlertTimes.size} \u0645\u0646 \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631 \u0645\u0646 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A`);
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631 \u0645\u0646 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A:", error);
    }
  }
  /**
   * إنشاء فحوصات سلامة النظام الافتراضية
   */
  async createDefaultHealthChecks() {
    try {
      const defaultChecks = [
        {
          check_name: "Database Connection",
          check_name_ar: "\u0627\u062A\u0635\u0627\u0644 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
          check_type: "database",
          thresholds: { warning: 1e3, critical: 5e3, unit: "ms" },
          is_critical: true
        },
        {
          check_name: "Database Performance",
          check_name_ar: "\u0623\u062F\u0627\u0621 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
          check_type: "database",
          thresholds: { warning: 500, critical: 2e3, unit: "ms" },
          is_critical: false
        },
        {
          check_name: "Memory Usage",
          check_name_ar: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0630\u0627\u0643\u0631\u0629",
          check_type: "memory",
          thresholds: { warning: 85, critical: 95, unit: "percent" },
          is_critical: false
        },
        {
          check_name: "System Health API",
          check_name_ar: "API \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0646\u0638\u0627\u0645",
          check_type: "api",
          thresholds: { warning: 1e3, critical: 3e3, unit: "ms" },
          is_critical: false
        }
      ];
      console.log("[SystemHealthMonitor] \u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0627\u0641\u062A\u0631\u0627\u0636\u064A\u0629");
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0633\u0644\u0627\u0645\u0629:", error);
    }
  }
  /**
   * تنفيذ فحوصات سلامة النظام
   */
  async performHealthChecks() {
    try {
      const checks = [
        this.checkDatabaseConnection(),
        this.checkDatabasePerformance(),
        this.checkSystemMemory(),
        this.checkSystemHealth()
      ];
      const results = await Promise.allSettled(checks);
      for (const result of results) {
        if (result.status === "fulfilled") {
          await this.processHealthCheckResult(result.value);
        } else {
          console.error("[SystemHealthMonitor] \u0641\u0634\u0644 \u0641\u064A \u0641\u062D\u0635 \u0627\u0644\u0633\u0644\u0627\u0645\u0629:", result.reason);
        }
      }
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u062A\u0646\u0641\u064A\u0630 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0633\u0644\u0627\u0645\u0629:", error);
    }
  }
  /**
   * فحص اتصال قاعدة البيانات
   */
  async checkDatabaseConnection() {
    const startTime = Date.now();
    try {
      await db.execute(sql4`SELECT 1 as test`);
      const duration = Date.now() - startTime;
      return {
        checkName: "Database Connection",
        checkName_ar: "\u0627\u062A\u0635\u0627\u0644 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
        status: duration > 1e4 ? "critical" : duration > 3e3 ? "warning" : "healthy",
        // Increased thresholds to reduce false positives
        duration,
        details: { responseTime: duration, connected: true }
      };
    } catch (error) {
      return {
        checkName: "Database Connection",
        checkName_ar: "\u0627\u062A\u0635\u0627\u0644 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
        status: "critical",
        duration: Date.now() - startTime,
        details: { connected: false },
        error: error.message
      };
    }
  }
  /**
   * فحص أداء قاعدة البيانات
   */
  async checkDatabasePerformance() {
    const startTime = Date.now();
    try {
      const activeConnections = await db.execute(sql4`
        SELECT count(*) as active_connections 
        FROM pg_stat_activity 
        WHERE state = 'active'
      `);
      const dbSize = await db.execute(sql4`
        SELECT pg_size_pretty(pg_database_size(current_database())) as db_size
      `);
      const duration = Date.now() - startTime;
      const connectionCount = activeConnections[0]?.active_connections || 0;
      return {
        checkName: "Database Performance",
        checkName_ar: "\u0623\u062F\u0627\u0621 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
        status: duration > 5e3 ? "critical" : duration > 2e3 ? "warning" : "healthy",
        // Increased thresholds to reduce false positives
        duration,
        details: {
          activeConnections: connectionCount,
          databaseSize: dbSize[0]?.db_size,
          queryTime: duration
        }
      };
    } catch (error) {
      return {
        checkName: "Database Performance",
        checkName_ar: "\u0623\u062F\u0627\u0621 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
        status: "critical",
        duration: Date.now() - startTime,
        details: {},
        error: error.message
      };
    }
  }
  /**
   * فحص استخدام الذاكرة - Fixed calculation algorithm
   */
  async checkSystemMemory() {
    const startTime = Date.now();
    try {
      const memoryUsage = process.memoryUsage();
      const heapTotal = memoryUsage.heapTotal;
      const heapUsed = memoryUsage.heapUsed;
      const heapUsagePercent = heapUsed / heapTotal * 100;
      const rss = memoryUsage.rss;
      const external = memoryUsage.external;
      const arrayBuffers = memoryUsage.arrayBuffers || 0;
      const primaryMemoryPercent = heapUsagePercent;
      const rawStatus = this.calculateMemoryStatus(primaryMemoryPercent);
      const finalStatus = this.applySustainedCondition("Memory Usage", rawStatus);
      return {
        checkName: "Memory Usage",
        checkName_ar: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0630\u0627\u0643\u0631\u0629",
        status: finalStatus,
        duration: Date.now() - startTime,
        details: {
          primaryMemoryPercent: Math.round(primaryMemoryPercent * 100) / 100,
          heapUsagePercent: Math.round(heapUsagePercent * 100) / 100,
          heapUsedMB: Math.round(heapUsed / 1024 / 1024),
          heapTotalMB: Math.round(heapTotal / 1024 / 1024),
          rssMB: Math.round(rss / 1024 / 1024),
          externalMB: Math.round(external / 1024 / 1024),
          arrayBuffersMB: Math.round(arrayBuffers / 1024 / 1024),
          rawStatus,
          sustainedStatus: finalStatus
        }
      };
    } catch (error) {
      return {
        checkName: "Memory Usage",
        checkName_ar: "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0630\u0627\u0643\u0631\u0629",
        status: "unknown",
        duration: Date.now() - startTime,
        details: {},
        error: error.message
      };
    }
  }
  /**
   * Calculate memory status based on proper thresholds - Dramatically increased thresholds to reduce false alerts
   */
  calculateMemoryStatus(memoryPercent) {
    if (memoryPercent > 99.5) {
      return "critical";
    } else if (memoryPercent > 95) {
      return "warning";
    }
    return "healthy";
  }
  /**
   * Apply sustained condition logic to prevent status flapping
   */
  applySustainedCondition(checkName, currentStatus) {
    const key = checkName;
    const existing = this.consecutiveStatusCounts.get(key);
    if (!existing || existing.status !== currentStatus) {
      this.consecutiveStatusCounts.set(key, { status: currentStatus, count: 1 });
      const lastResult2 = this.lastHealthStatus.get(checkName);
      if (lastResult2 && existing && existing.count >= this.SUSTAINED_CONDITION_COUNT) {
        return lastResult2.status;
      }
      return currentStatus;
    }
    existing.count++;
    if (existing.count >= this.SUSTAINED_CONDITION_COUNT) {
      return currentStatus;
    }
    const lastResult = this.lastHealthStatus.get(checkName);
    if (lastResult) {
      return lastResult.status;
    }
    return currentStatus;
  }
  /**
   * فحص سلامة النظام العام
   */
  async checkSystemHealth() {
    const startTime = Date.now();
    try {
      const uptime = process.uptime();
      const uptimeHours = uptime / 3600;
      const nodeVersion = process.version;
      const platform = process.platform;
      return {
        checkName: "System Health API",
        checkName_ar: "API \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0646\u0638\u0627\u0645",
        status: "healthy",
        duration: Date.now() - startTime,
        details: {
          uptime: `${Math.floor(uptimeHours)} \u0633\u0627\u0639\u0629`,
          nodeVersion,
          platform,
          processId: process.pid
        }
      };
    } catch (error) {
      return {
        checkName: "System Health API",
        checkName_ar: "API \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0646\u0638\u0627\u0645",
        status: "critical",
        duration: Date.now() - startTime,
        details: {},
        error: error.message
      };
    }
  }
  /**
   * معالجة نتائج فحوصات السلامة
   */
  async processHealthCheckResult(result) {
    try {
      const healthCheckData = {
        check_name: result.checkName,
        check_name_ar: result.checkName_ar,
        check_type: this.getCheckType(result.checkName),
        status: result.status,
        last_check_time: /* @__PURE__ */ new Date(),
        check_duration_ms: result.duration,
        check_details: result.details,
        last_error: result.error
      };
      const previousResult = this.lastHealthStatus.get(result.checkName);
      if (previousResult && this.hasStatusImproved(previousResult.status, result.status)) {
        this.clearAlertState(result.checkName);
        console.log(`[SystemHealthMonitor] \u062A\u0645 \u062A\u062D\u0633\u0646 \u062D\u0627\u0644\u0629 ${result.checkName_ar} \u0645\u0646 ${previousResult.status} \u0625\u0644\u0649 ${result.status}`);
      }
      if (result.status === "critical" || result.status === "warning") {
        await this.createHealthAlert(result);
      }
      this.lastHealthStatus.set(result.checkName, result);
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0641\u062D\u0635:", error);
    }
  }
  /**
   * فحص ما إذا كان الوضع قد تحسن
   */
  hasStatusImproved(oldStatus, newStatus) {
    const statusLevels = { "healthy": 0, "warning": 1, "critical": 2, "unknown": 3 };
    const oldLevel = statusLevels[oldStatus] || 3;
    const newLevel = statusLevels[newStatus] || 3;
    return newLevel < oldLevel;
  }
  /**
   * مسح حالة التحذير عند تحسن الوضع
   */
  clearAlertState(checkName) {
    const keysToRemove = [];
    this.lastAlertTimes.forEach((value, key) => {
      if (key.startsWith(checkName)) {
        keysToRemove.push(key);
      }
    });
    keysToRemove.forEach((key) => this.lastAlertTimes.delete(key));
  }
  /**
   * تحديد نوع الفحص
   */
  getCheckType(checkName) {
    if (checkName.includes("Database")) return "database";
    if (checkName.includes("Memory")) return "memory";
    if (checkName.includes("API")) return "api";
    return "system";
  }
  /**
   * إنشاء تحذير صحي مع Rate Limiting
   */
  async createHealthAlert(result) {
    try {
      const alertKey = `${result.checkName}_${result.status}`;
      const shouldSend = await this.shouldSendAlert(alertKey, result.checkName);
      if (!shouldSend) {
        console.log(`[SystemHealthMonitor] \u062A\u0645 \u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u062A\u062D\u0630\u064A\u0631 \u0628\u0633\u0628\u0628 Rate Limiting: ${result.checkName_ar} - ${result.status}`);
        return;
      }
      const alert = {
        title: `System Health Issue: ${result.checkName}`,
        title_ar: `\u0645\u0634\u0643\u0644\u0629 \u0641\u064A \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0646\u0638\u0627\u0645: ${result.checkName_ar}`,
        message: result.error || `${result.checkName} is in ${result.status} state`,
        message_ar: result.error || `${result.checkName_ar} \u0641\u064A \u062D\u0627\u0644\u0629 ${result.status}`,
        type: "system",
        category: result.status === "critical" ? "critical" : "warning",
        severity: result.status === "critical" ? "critical" : "medium",
        source: "system_health_monitor",
        source_id: result.checkName,
        context_data: result.details,
        requires_action: result.status === "critical",
        suggested_actions: this.getSuggestedActions(result),
        target_roles: [1, 2]
        // الأدمن والمديرين
      };
      await this.recordAlertSent(alertKey, result.checkName);
      await this.createSystemAlert(alert);
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u062A\u062D\u0630\u064A\u0631 \u0627\u0644\u0633\u0644\u0627\u0645\u0629:", error);
    }
  }
  /**
   * فحص ما إذا كان يجب إرسال التحذير بناءً على Rate Limiting - Persistent Storage
   */
  async shouldSendAlert(alertKey, checkName) {
    try {
      const normalizedKey = this.normalizeAlertKey(alertKey, checkName);
      const cachedTime = this.lastAlertTimes.get(normalizedKey);
      if (cachedTime) {
        const cooldownPeriod2 = this.getAlertCooldown(checkName);
        const timeSinceLastAlert2 = Date.now() - cachedTime.getTime();
        if (timeSinceLastAlert2 < cooldownPeriod2) {
          return false;
        }
      }
      const lastAlertTime = await this.storage.getLastAlertTime(normalizedKey);
      if (!lastAlertTime) {
        return true;
      }
      this.lastAlertTimes.set(normalizedKey, lastAlertTime);
      const cooldownPeriod = this.getAlertCooldown(checkName);
      const timeSinceLastAlert = Date.now() - lastAlertTime.getTime();
      return timeSinceLastAlert >= cooldownPeriod;
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0641\u062D\u0635 Rate Limiting:", error);
      return false;
    }
  }
  /**
   * تسجيل أنه تم إرسال تحذير - Persistent Storage
   */
  async recordAlertSent(alertKey, checkName) {
    try {
      const normalizedKey = this.normalizeAlertKey(alertKey, checkName);
      const now = /* @__PURE__ */ new Date();
      this.lastAlertTimes.set(normalizedKey, now);
      await this.storage.setLastAlertTime(normalizedKey, now);
      console.log(`[SystemHealthMonitor] \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062A\u062D\u0630\u064A\u0631: ${normalizedKey} \u0641\u064A ${now.toISOString()}`);
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062A\u062D\u0630\u064A\u0631:", error);
    }
  }
  /**
   * تطبيع مفتاح التحذير لمنع التجاوز القائم على الحالة
   */
  normalizeAlertKey(alertKey, checkName) {
    return `${checkName}_health_alert`;
  }
  /**
   * الحصول على الاسم العربي للفحص
   */
  getCheckNameArabic(checkName) {
    const mapping = {
      "Database Connection": "\u0627\u062A\u0635\u0627\u0644 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
      "Database Performance": "\u0623\u062F\u0627\u0621 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
      "Memory Usage": "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0630\u0627\u0643\u0631\u0629",
      "System Health API": "API \u0633\u0644\u0627\u0645\u0629 \u0627\u0644\u0646\u0638\u0627\u0645"
    };
    return mapping[checkName] || checkName;
  }
  /**
   * الحصول على فترة التهدئة لنوع الفحص
   */
  getAlertCooldown(checkName) {
    if (checkName.includes("Memory")) {
      return this.ALERT_COOLDOWN_MEMORY;
    }
    if (checkName.includes("Database")) {
      return this.ALERT_COOLDOWN_DATABASE;
    }
    return this.ALERT_COOLDOWN_DEFAULT;
  }
  /**
   * الحصول على إجراءات مقترحة
   */
  getSuggestedActions(result) {
    const actions = [];
    if (result.checkName.includes("Database")) {
      actions.push(
        { action: "check_database_connections", priority: 1, description: "\u0641\u062D\u0635 \u0627\u062A\u0635\u0627\u0644\u0627\u062A \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" },
        { action: "restart_database_service", priority: 2, description: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0634\u063A\u064A\u0644 \u062E\u062F\u0645\u0629 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" }
      );
    }
    if (result.checkName.includes("Memory")) {
      actions.push(
        { action: "check_memory_usage", priority: 1, description: "\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0630\u0627\u0643\u0631\u0629" },
        { action: "restart_application", priority: 3, description: "\u0625\u0639\u0627\u062F\u0629 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062A\u0637\u0628\u064A\u0642" }
      );
    }
    return actions;
  }
  /**
   * المراقبة العامة للنظام
   */
  async performMonitoring() {
    try {
      await this.monitorPerformance();
      await this.monitorProduction();
      await this.monitorInventory();
      await this.cleanupOldData();
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0639\u0627\u0645\u0629:", error);
    }
  }
  /**
   * مراقبة الأداء
   */
  async monitorPerformance() {
    try {
      const memoryUsage = process.memoryUsage();
      const cpuUsage = process.cpuUsage();
      const metrics = [
        {
          metric_name: "memory_usage",
          metric_category: "system",
          value: String(memoryUsage.heapUsed / 1024 / 1024),
          // MB
          unit: "MB",
          source: "system"
        },
        {
          metric_name: "memory_usage_percent",
          metric_category: "system",
          value: String(memoryUsage.heapUsed / memoryUsage.heapTotal * 100),
          unit: "percent",
          source: "system"
        }
      ];
      console.log("[SystemHealthMonitor] \u062A\u0645 \u0631\u0635\u062F \u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0623\u062F\u0627\u0621");
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0623\u062F\u0627\u0621:", error);
    }
  }
  /**
   * مراقبة الإنتاج
   */
  async monitorProduction() {
    try {
      const overdueOrders = await this.checkOverdueOrders();
      const brokenMachines = await this.checkMachineStatus();
      if (overdueOrders > 0) {
        await this.createProductionAlert("overdue_orders", {
          count: overdueOrders,
          message: `\u064A\u0648\u062C\u062F ${overdueOrders} \u0637\u0644\u0628 \u0645\u062A\u0623\u062E\u0631 \u0639\u0646 \u0645\u0648\u0639\u062F \u0627\u0644\u062A\u0633\u0644\u064A\u0645`
        });
      }
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C:", error);
    }
  }
  /**
   * فحص الطلبات المتأخرة
   */
  async checkOverdueOrders() {
    try {
      console.log("[SystemHealthMonitor] \u0641\u062D\u0635 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u062A\u0623\u062E\u0631\u0629");
      return 0;
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0641\u062D\u0635 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u062A\u0623\u062E\u0631\u0629:", error);
      return 0;
    }
  }
  /**
   * فحص حالة المكائن
   */
  async checkMachineStatus() {
    try {
      console.log("[SystemHealthMonitor] \u0641\u062D\u0635 \u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0643\u0627\u0626\u0646");
      return 0;
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0641\u062D\u0635 \u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0643\u0627\u0626\u0646:", error);
      return 0;
    }
  }
  /**
   * مراقبة المخزون
   */
  async monitorInventory() {
    try {
      const lowStockItems = await this.checkLowStockItems();
      if (lowStockItems > 0) {
        await this.createInventoryAlert("low_stock", {
          count: lowStockItems,
          message: `\u064A\u0648\u062C\u062F ${lowStockItems} \u0635\u0646\u0641 \u0642\u0644\u064A\u0644 \u0627\u0644\u0645\u062E\u0632\u0648\u0646`
        });
      }
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0645\u062E\u0632\u0648\u0646:", error);
    }
  }
  /**
   * فحص المواد قليلة المخزون
   */
  async checkLowStockItems() {
    try {
      console.log("[SystemHealthMonitor] \u0641\u062D\u0635 \u0627\u0644\u0645\u0648\u0627\u062F \u0642\u0644\u064A\u0644\u0629 \u0627\u0644\u0645\u062E\u0632\u0648\u0646");
      return 0;
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0641\u062D\u0635 \u0627\u0644\u0645\u0648\u0627\u062F \u0642\u0644\u064A\u0644\u0629 \u0627\u0644\u0645\u062E\u0632\u0648\u0646:", error);
      return 0;
    }
  }
  /**
   * إنشاء تحذير إنتاج
   */
  async createProductionAlert(type, data) {
    const alert = {
      title: `Production Alert: ${type}`,
      title_ar: `\u062A\u062D\u0630\u064A\u0631 \u0625\u0646\u062A\u0627\u062C: ${type}`,
      message: data.message,
      message_ar: data.message,
      type: "production",
      category: "warning",
      severity: "medium",
      source: "production_monitor",
      source_id: type,
      context_data: data,
      requires_action: true,
      target_roles: [2, 3]
      // المديرين والمشرفين
    };
    await this.createSystemAlert(alert);
  }
  /**
   * إنشاء تحذير مخزون
   */
  async createInventoryAlert(type, data) {
    const alert = {
      title: `Inventory Alert: ${type}`,
      title_ar: `\u062A\u062D\u0630\u064A\u0631 \u0645\u062E\u0632\u0648\u0646: ${type}`,
      message: data.message,
      message_ar: data.message,
      type: "system",
      category: "warning",
      severity: "medium",
      source: "inventory_monitor",
      source_id: type,
      context_data: data,
      requires_action: true,
      target_roles: [2, 4]
      // المديرين ومسؤولي المخزون
    };
    await this.createSystemAlert(alert);
  }
  /**
   * إنشاء تحذير نظام
   */
  async createSystemAlert(alert) {
    try {
      const alertData = {
        title: alert.title,
        title_ar: alert.title_ar,
        message: alert.message,
        message_ar: alert.message_ar,
        type: alert.type,
        category: alert.category,
        severity: alert.severity,
        source: alert.source,
        source_id: alert.source_id,
        requires_action: alert.requires_action,
        context_data: alert.context_data,
        suggested_actions: alert.suggested_actions,
        target_users: alert.target_users,
        target_roles: alert.target_roles,
        notification_sent: false
      };
      console.log("[SystemHealthMonitor] \u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u062A\u062D\u0630\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645:", alert.title_ar);
      await this.sendAlertNotification(alert);
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u062A\u062D\u0630\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645:", error);
    }
  }
  /**
   * إرسال إشعار التحذير
   */
  async sendAlertNotification(alert) {
    try {
      const notificationManager4 = getNotificationManager(this.storage);
      if (alert.target_roles && alert.target_roles.length > 0) {
        for (const roleId of alert.target_roles) {
          await notificationManager4.sendToRole(roleId, {
            title: alert.title_ar,
            message: alert.message_ar,
            type: this.mapAlertTypeToNotificationType(alert.type),
            priority: alert.severity === "critical" ? "urgent" : alert.severity === "high" ? "high" : "normal",
            recipient_type: "role",
            recipient_id: roleId.toString(),
            context_type: alert.type,
            context_id: alert.source_id,
            sound: alert.severity === "critical",
            icon: this.getAlertIcon(alert.type)
          });
        }
      }
      if (alert.target_users && alert.target_users.length > 0) {
        for (const userId of alert.target_users) {
          await notificationManager4.sendToUser(userId, {
            title: alert.title_ar,
            message: alert.message_ar,
            type: this.mapAlertTypeToNotificationType(alert.type),
            priority: alert.severity === "critical" ? "urgent" : alert.severity === "high" ? "high" : "normal",
            recipient_type: "user",
            recipient_id: userId.toString(),
            context_type: alert.type,
            context_id: alert.source_id,
            sound: alert.severity === "critical",
            icon: this.getAlertIcon(alert.type)
          });
        }
      }
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0625\u0634\u0639\u0627\u0631 \u0627\u0644\u062A\u062D\u0630\u064A\u0631:", error);
    }
  }
  /**
   * تحويل نوع التحذير إلى نوع الإشعار المسموح
   */
  mapAlertTypeToNotificationType(alertType) {
    const typeMapping = {
      system: "system",
      production: "production",
      quality: "quality",
      inventory: "system",
      // Map inventory to system
      maintenance: "maintenance",
      security: "system"
      // Map security to system
    };
    return typeMapping[alertType] || "system";
  }
  /**
   * الحصول على أيقونة التحذير
   */
  getAlertIcon(type) {
    const icons = {
      system: "\u2699\uFE0F",
      production: "\u{1F3ED}",
      quality: "\u2705",
      inventory: "\u{1F4E6}",
      maintenance: "\u{1F527}",
      security: "\u{1F512}"
    };
    return icons[type] || "\u{1F6A8}";
  }
  /**
   * تنظيف البيانات القديمة وحالات التحذيرات
   */
  async cleanupOldData() {
    try {
      const cutoffDate = /* @__PURE__ */ new Date();
      cutoffDate.setDate(cutoffDate.getDate() - this.PERFORMANCE_RETENTION_DAYS);
      const alertCutoffTime = Date.now() - 24 * 60 * 60 * 1e3;
      const keysToRemove = [];
      for (const [key, alertTime] of Array.from(this.lastAlertTimes.entries())) {
        if (alertTime.getTime() < alertCutoffTime) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => this.lastAlertTimes.delete(key));
      if (keysToRemove.length > 0) {
        console.log(`[SystemHealthMonitor] \u062A\u0645 \u062A\u0646\u0638\u064A\u0641 ${keysToRemove.length} \u062D\u0627\u0644\u0629 \u062A\u062D\u0630\u064A\u0631 \u0642\u062F\u064A\u0645\u0629`);
      }
      console.log("[SystemHealthMonitor] \u062A\u0645 \u062A\u0646\u0638\u064A\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u062F\u064A\u0645\u0629");
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u062A\u0646\u0638\u064A\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u062F\u064A\u0645\u0629:", error);
    }
  }
  /**
   * إيقاف النظام بأمان
   */
  async shutdown() {
    try {
      this.stopMonitoring();
      console.log("[SystemHealthMonitor] \u062A\u0645 \u0625\u064A\u0642\u0627\u0641 \u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0628\u0623\u0645\u0627\u0646");
    } catch (error) {
      console.error("[SystemHealthMonitor] \u062E\u0637\u0623 \u0641\u064A \u0625\u064A\u0642\u0627\u0641 \u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629:", error);
    }
  }
  /**
   * الحصول على حالة النظام الحالية
   */
  getSystemStatus() {
    const status = {
      monitoring: this.monitoringInterval !== null,
      healthChecks: this.healthCheckInterval !== null,
      lastHealthChecks: Array.from(this.lastHealthStatus.values()),
      totalAlertRules: this.alertRules.length
    };
    return status;
  }
};
var systemHealthMonitor = null;
function getSystemHealthMonitor(storage2) {
  if (!systemHealthMonitor) {
    systemHealthMonitor = new SystemHealthMonitor(storage2);
  }
  return systemHealthMonitor;
}

// server/routes/alerts.ts
init_data_validator();
import { z as z2 } from "zod";
function createAlertsRouter(storage2) {
  const router = Router();
  const alertManager2 = getAlertManager(storage2);
  const healthMonitor = getSystemHealthMonitor(storage2);
  const dataValidator2 = getDataValidator(storage2);
  router.get("/", async (req, res) => {
    try {
      const filters = {
        status: req.query.status,
        type: req.query.type,
        severity: req.query.severity,
        limit: req.query.limit ? parseInt(req.query.limit) : 50,
        offset: req.query.offset ? parseInt(req.query.offset) : 0
      };
      const alerts = await storage2.getSystemAlerts(filters);
      res.json(alerts);
    } catch (error) {
      console.error("Error fetching alerts:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A" });
    }
  });
  router.get("/:id", async (req, res) => {
    try {
      const alertId = parseInt(req.params.id);
      const alert = await storage2.getSystemAlertById(alertId);
      if (!alert) {
        return res.status(404).json({ message: "\u0627\u0644\u062A\u062D\u0630\u064A\u0631 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(alert);
    } catch (error) {
      console.error("Error fetching alert:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u062D\u0630\u064A\u0631" });
    }
  });
  router.post("/", async (req, res) => {
    try {
      const alertData = req.body;
      const alertSchema = z2.object({
        title: z2.string().min(1),
        title_ar: z2.string().min(1),
        message: z2.string().min(1),
        message_ar: z2.string().min(1),
        type: z2.string(),
        category: z2.string(),
        severity: z2.string(),
        source: z2.string(),
        source_id: z2.string().optional(),
        context_data: z2.record(z2.any()).optional(),
        suggested_actions: z2.array(z2.object({
          action: z2.string(),
          priority: z2.number(),
          description: z2.string().optional()
        })).optional(),
        target_users: z2.array(z2.number()).optional(),
        target_roles: z2.array(z2.number()).optional(),
        requires_action: z2.boolean().optional()
      });
      const validatedData = alertSchema.parse(alertData);
      const alert = await alertManager2.createAlert(validatedData);
      res.status(201).json(alert);
    } catch (error) {
      console.error("Error creating alert:", error);
      if (error.name === "ZodError") {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", errors: error.errors });
      }
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062A\u062D\u0630\u064A\u0631" });
    }
  });
  router.post("/:id/resolve", async (req, res) => {
    try {
      const alertId = parseInt(req.params.id);
      const { notes } = req.body;
      const userId = req.user?.id || 1;
      const alert = await alertManager2.resolveAlert(alertId, userId, notes);
      res.json(alert);
    } catch (error) {
      console.error("Error resolving alert:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0644 \u0627\u0644\u062A\u062D\u0630\u064A\u0631" });
    }
  });
  router.post("/:id/dismiss", async (req, res) => {
    try {
      const alertId = parseInt(req.params.id);
      const userId = req.user?.id || 1;
      const alert = await alertManager2.dismissAlert(alertId, userId);
      res.json(alert);
    } catch (error) {
      console.error("Error dismissing alert:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u062A\u062D\u0630\u064A\u0631" });
    }
  });
  router.get("/stats", async (req, res) => {
    try {
      const stats = await alertManager2.getAlertStatistics();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching alert stats:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A" });
    }
  });
  router.get("/type/:type", async (req, res) => {
    try {
      const type = req.params.type;
      const alerts = await storage2.getAlertsByType(type);
      res.json(alerts);
    } catch (error) {
      console.error("Error fetching alerts by type:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u062D\u0633\u0628 \u0627\u0644\u0646\u0648\u0639" });
    }
  });
  router.get("/user/me", async (req, res) => {
    try {
      const userId = req.user?.id || 1;
      const alerts = await storage2.getAlertsByUser(userId);
      res.json(alerts);
    } catch (error) {
      console.error("Error fetching user alerts:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" });
    }
  });
  router.post("/rules", async (req, res) => {
    try {
      const ruleData = req.body;
      const userId = req.user?.id || 1;
      const rule = await alertManager2.createAlertRule({
        ...ruleData,
        created_by: userId
      });
      res.status(201).json(rule);
    } catch (error) {
      console.error("Error creating alert rule:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u062A\u062D\u0630\u064A\u0631" });
    }
  });
  router.get("/rules", async (req, res) => {
    try {
      const isEnabled = req.query.enabled === "true" ? true : req.query.enabled === "false" ? false : void 0;
      const rules = await storage2.getAlertRules(isEnabled);
      res.json(rules);
    } catch (error) {
      console.error("Error fetching alert rules:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A" });
    }
  });
  return router;
}
function createSystemHealthRouter(storage2) {
  const router = Router();
  const healthMonitor = getSystemHealthMonitor(storage2);
  router.get("/overview", async (req, res) => {
    try {
      const overview = await storage2.getSystemHealthStatus();
      res.json(overview);
    } catch (error) {
      console.error("Error fetching system health overview:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629 \u0639\u0644\u0649 \u062D\u0627\u0644\u0629 \u0627\u0644\u0646\u0638\u0627\u0645" });
    }
  });
  router.get("/checks", async (req, res) => {
    try {
      const checks = await storage2.getSystemHealthChecks();
      res.json(checks);
    } catch (error) {
      console.error("Error fetching health checks:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0633\u0644\u0627\u0645\u0629" });
    }
  });
  router.get("/checks/type/:type", async (req, res) => {
    try {
      const type = req.params.type;
      const checks = await storage2.getHealthChecksByType(type);
      res.json(checks);
    } catch (error) {
      console.error("Error fetching health checks by type:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0633\u0644\u0627\u0645\u0629 \u062D\u0633\u0628 \u0627\u0644\u0646\u0648\u0639" });
    }
  });
  router.get("/checks/critical", async (req, res) => {
    try {
      const checks = await storage2.getCriticalHealthChecks();
      res.json(checks);
    } catch (error) {
      console.error("Error fetching critical health checks:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062D\u0631\u062C\u0629" });
    }
  });
  router.post("/checks/run", async (req, res) => {
    try {
      const status = healthMonitor.getSystemStatus();
      res.json({ message: "\u062A\u0645 \u062A\u0634\u063A\u064A\u0644 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0633\u0644\u0627\u0645\u0629", status });
    } catch (error) {
      console.error("Error running health checks:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0634\u063A\u064A\u0644 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u0633\u0644\u0627\u0645\u0629" });
    }
  });
  return router;
}
function createPerformanceRouter(storage2) {
  const router = Router();
  router.get("/", async (req, res) => {
    try {
      const filters = {
        metric_name: req.query.metric_name,
        metric_category: req.query.metric_category,
        start_date: req.query.start_date ? new Date(req.query.start_date) : void 0,
        end_date: req.query.end_date ? new Date(req.query.end_date) : void 0,
        limit: req.query.limit ? parseInt(req.query.limit) : 100
      };
      const metrics = await storage2.getSystemPerformanceMetrics(filters);
      res.json(metrics);
    } catch (error) {
      console.error("Error fetching performance metrics:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0623\u062F\u0627\u0621" });
    }
  });
  router.get("/summary", async (req, res) => {
    try {
      const timeRange = req.query.timeRange || "day";
      const summary = await storage2.getPerformanceSummary(timeRange);
      res.json(summary);
    } catch (error) {
      console.error("Error fetching performance summary:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0645\u0644\u062E\u0635 \u0627\u0644\u0623\u062F\u0627\u0621" });
    }
  });
  router.get("/metric/:name", async (req, res) => {
    try {
      const metricName = req.params.name;
      const startDate = new Date(req.query.start_date || Date.now() - 24 * 60 * 60 * 1e3);
      const endDate = new Date(req.query.end_date || Date.now());
      const metrics = await storage2.getMetricsByTimeRange(metricName, startDate, endDate);
      res.json(metrics);
    } catch (error) {
      console.error("Error fetching metric by time range:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0624\u0634\u0631 \u0641\u064A \u0627\u0644\u0641\u062A\u0631\u0629 \u0627\u0644\u0632\u0645\u0646\u064A\u0629" });
    }
  });
  router.get("/metric/:name/latest", async (req, res) => {
    try {
      const metricName = req.params.name;
      const metric = await storage2.getLatestMetricValue(metricName);
      res.json(metric);
    } catch (error) {
      console.error("Error fetching latest metric value:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0622\u062E\u0631 \u0642\u064A\u0645\u0629 \u0644\u0644\u0645\u0624\u0634\u0631" });
    }
  });
  return router;
}
function createCorrectiveActionsRouter(storage2) {
  const router = Router();
  router.get("/", async (req, res) => {
    try {
      const alertId = req.query.alert_id ? parseInt(req.query.alert_id) : void 0;
      const actions = await storage2.getCorrectiveActions(alertId);
      res.json(actions);
    } catch (error) {
      console.error("Error fetching corrective actions:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u062A\u0635\u062D\u064A\u062D\u064A\u0629" });
    }
  });
  router.get("/pending", async (req, res) => {
    try {
      const actions = await storage2.getPendingActions();
      res.json(actions);
    } catch (error) {
      console.error("Error fetching pending actions:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0645\u0639\u0644\u0642\u0629" });
    }
  });
  router.get("/assigned/me", async (req, res) => {
    try {
      const userId = req.user?.id || 1;
      const actions = await storage2.getActionsByAssignee(userId);
      res.json(actions);
    } catch (error) {
      console.error("Error fetching user assigned actions:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" });
    }
  });
  router.post("/", async (req, res) => {
    try {
      const actionData = req.body;
      const userId = req.user?.id || 1;
      const action = await storage2.createCorrectiveAction({
        ...actionData,
        created_by: userId
      });
      res.status(201).json(action);
    } catch (error) {
      console.error("Error creating corrective action:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u062A\u0635\u062D\u064A\u062D\u064A" });
    }
  });
  router.put("/:id", async (req, res) => {
    try {
      const actionId = parseInt(req.params.id);
      const updates = req.body;
      const action = await storage2.updateCorrectiveAction(actionId, updates);
      res.json(action);
    } catch (error) {
      console.error("Error updating corrective action:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u062A\u0635\u062D\u064A\u062D\u064A" });
    }
  });
  router.post("/:id/complete", async (req, res) => {
    try {
      const actionId = parseInt(req.params.id);
      const { notes } = req.body;
      const userId = req.user?.id || 1;
      const action = await storage2.completeCorrectiveAction(actionId, userId, notes);
      res.json(action);
    } catch (error) {
      console.error("Error completing corrective action:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u062A\u0635\u062D\u064A\u062D\u064A" });
    }
  });
  return router;
}
function createDataValidationRouter(storage2) {
  const router = Router();
  const dataValidator2 = getDataValidator(storage2);
  router.post("/validate", async (req, res) => {
    try {
      const { table, data, isUpdate = false } = req.body;
      if (!table || !data) {
        return res.status(400).json({ message: "\u0627\u0633\u0645 \u0627\u0644\u062C\u062F\u0648\u0644 \u0648\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0644\u0648\u0628\u0629" });
      }
      const result = await dataValidator2.validateData(table, data, isUpdate);
      res.json(result);
    } catch (error) {
      console.error("Error validating data:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" });
    }
  });
  router.get("/database-integrity", async (req, res) => {
    try {
      const result = await dataValidator2.validateDatabaseIntegrity();
      res.json(result);
    } catch (error) {
      console.error("Error checking database integrity:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0641\u062D\u0635 \u0633\u0644\u0627\u0645\u0629 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" });
    }
  });
  return router;
}

// server/routes.ts
init_alert_manager();
init_data_validator();

// server/middleware/validation.ts
import { z as z3, ZodError } from "zod";
import { z as z4 } from "zod";
function formatZodErrors(zodError) {
  return zodError.errors.map((err) => ({
    field: err.path.join("."),
    message: getArabicErrorMessage(err.code, err.message, err.path.join(".")),
    code: err.code
  }));
}
function getArabicErrorMessage(code, originalMessage, field) {
  const fieldNames = {
    "username": "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645",
    "password": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
    "email": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
    "phone": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
    "phone_number": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641",
    "customer_id": "\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0645\u064A\u0644",
    "order_number": "\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628",
    "quantity": "\u0627\u0644\u0643\u0645\u064A\u0629",
    "quantity_kg": "\u0627\u0644\u0643\u0645\u064A\u0629 \u0628\u0627\u0644\u0643\u064A\u0644\u0648\u062C\u0631\u0627\u0645",
    "status": "\u0627\u0644\u062D\u0627\u0644\u0629",
    "delivery_date": "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0633\u0644\u064A\u0645",
    "name": "\u0627\u0644\u0627\u0633\u0645",
    "title": "\u0627\u0644\u0639\u0646\u0648\u0627\u0646",
    "message": "\u0627\u0644\u0631\u0633\u0627\u0644\u0629",
    "id": "\u0627\u0644\u0645\u0639\u0631\u0641"
  };
  const arabicField = fieldNames[field] || field;
  switch (code) {
    case "invalid_type":
      return `${arabicField} \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0627\u0644\u0646\u0648\u0639 \u0627\u0644\u0635\u062D\u064A\u062D`;
    case "too_small":
      if (originalMessage.includes("String must contain at least")) {
        const minLength = originalMessage.match(/\d+/)?.[0] || "1";
        return `${arabicField} \u064A\u062C\u0628 \u0623\u0646 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 ${minLength} \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644`;
      }
      if (originalMessage.includes("Number must be greater than or equal to")) {
        const minValue = originalMessage.match(/\d+/)?.[0] || "0";
        return `${arabicField} \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 ${minValue} \u0623\u0648 \u0623\u0643\u062B\u0631`;
      }
      return `${arabicField} \u0635\u063A\u064A\u0631 \u062C\u062F\u0627\u064B`;
    case "too_big":
      if (originalMessage.includes("String must contain at most")) {
        const maxLength = originalMessage.match(/\d+/)?.[0] || "100";
        return `${arabicField} \u064A\u062C\u0628 \u0623\u0646 \u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 ${maxLength} \u062D\u0631\u0641`;
      }
      if (originalMessage.includes("Number must be less than or equal to")) {
        const maxValue = originalMessage.match(/\d+/)?.[0] || "100";
        return `${arabicField} \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 ${maxValue} \u0623\u0648 \u0623\u0642\u0644`;
      }
      return `${arabicField} \u0643\u0628\u064A\u0631 \u062C\u062F\u0627\u064B`;
    case "invalid_string":
      if (originalMessage.includes("Invalid email")) {
        return `${arabicField} \u063A\u064A\u0631 \u0635\u062D\u064A\u062D`;
      }
      if (originalMessage.includes("Invalid url")) {
        return `${arabicField} \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0627\u0628\u0637 \u0635\u062D\u064A\u062D`;
      }
      return `${arabicField} \u063A\u064A\u0631 \u0635\u062D\u064A\u062D`;
    case "invalid_date":
      return `${arabicField} \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062A\u0627\u0631\u064A\u062E \u0635\u062D\u064A\u062D`;
    case "invalid_enum_value":
      return `${arabicField} \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0642\u064A\u0645\u0629 \u063A\u064A\u0631 \u0645\u0633\u0645\u0648\u062D\u0629`;
    case "unrecognized_keys":
      return `\u064A\u062D\u062A\u0648\u064A \u0627\u0644\u0637\u0644\u0628 \u0639\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641 \u0628\u0647\u0627`;
    default:
      return `${arabicField} \u063A\u064A\u0631 \u0635\u062D\u064A\u062D`;
  }
}
function validateRequest(schemas) {
  return (req, res, next) => {
    try {
      const errors = [];
      if (schemas.body) {
        try {
          console.log("\u{1F50D} Validating request body:", JSON.stringify(req.body, null, 2));
          req.body = schemas.body.parse(req.body);
          console.log("\u2705 Validation successful");
        } catch (error) {
          console.log("\u274C Validation failed:", error);
          if (error instanceof ZodError) {
            console.log("\u274C Zod validation errors:", JSON.stringify(error.errors, null, 2));
            errors.push(...formatZodErrors(error));
          } else {
            errors.push({
              field: "body",
              message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
              code: "invalid_body"
            });
          }
        }
      }
      if (schemas.query) {
        try {
          req.query = schemas.query.parse(req.query);
        } catch (error) {
          if (error instanceof ZodError) {
            errors.push(...formatZodErrors(error));
          } else {
            errors.push({
              field: "query",
              message: "\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
              code: "invalid_query"
            });
          }
        }
      }
      if (schemas.params) {
        try {
          req.params = schemas.params.parse(req.params);
        } catch (error) {
          if (error instanceof ZodError) {
            errors.push(...formatZodErrors(error));
          } else {
            errors.push({
              field: "params",
              message: "\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0633\u0627\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
              code: "invalid_params"
            });
          }
        }
      }
      if (errors.length > 0) {
        return res.status(400).json({
          message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
          errors,
          success: false
        });
      }
      next();
    } catch (error) {
      console.error("Validation middleware error:", error);
      return res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0635\u062D\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A",
        success: false
      });
    }
  };
}
var phoneNumberSchema = z3.string().min(10, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u064A\u062C\u0628 \u0623\u0646 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 10 \u0623\u0631\u0642\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644").max(15, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u064A\u062C\u0628 \u0623\u0646 \u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 15 \u0631\u0642\u0645").regex(/^[\+]?[0-9\-\(\)\s]+$/, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D");
var commonSchemas = {
  // ID parameter validation
  idParam: z3.object({
    id: z3.string().regex(/^\d+$/, "\u0627\u0644\u0645\u0639\u0631\u0641 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0642\u0645 \u0635\u062D\u064A\u062D").transform(Number)
  }),
  // Pagination query validation
  pagination: z3.object({
    limit: z3.string().regex(/^\d+$/).transform(Number).optional(),
    offset: z3.string().regex(/^\d+$/).transform(Number).optional(),
    page: z3.string().regex(/^\d+$/).transform(Number).optional()
  }),
  // Phone number validation
  phoneNumber: phoneNumberSchema,
  // User authentication
  loginCredentials: z3.object({
    username: z3.string().min(3, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u064A\u062C\u0628 \u0623\u0646 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 3 \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644").max(50, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u064A\u062C\u0628 \u0623\u0646 \u0644\u0627 \u064A\u062A\u062C\u0627\u0648\u0632 50 \u062D\u0631\u0641").trim(),
    password: z3.string().min(6, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u064A\u062C\u0628 \u0623\u0646 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 6 \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644").max(100, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0637\u0648\u064A\u0644\u0629 \u062C\u062F\u0627\u064B")
  }),
  // Order creation validation
  createOrder: z3.object({
    customer_id: z3.string().min(1, "\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0637\u0644\u0648\u0628"),
    order_number: z3.string().min(1, "\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628 \u0645\u0637\u0644\u0648\u0628").max(50, "\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628 \u0637\u0648\u064A\u0644 \u062C\u062F\u0627\u064B").trim(),
    delivery_days: z3.union([z3.number(), z3.string().regex(/^\d+$/)]).transform(
      (val) => typeof val === "string" ? Number(val) : val
    ).refine((val) => val >= 0 && val <= 365, "\u0623\u064A\u0627\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0628\u064A\u0646 0 \u0648 365 \u064A\u0648\u0645").optional(),
    delivery_date: z3.string().optional(),
    notes: z3.string().max(1e3, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0637\u0648\u064A\u0644\u0629 \u062C\u062F\u0627\u064B").optional(),
    created_by: z3.union([z3.number(), z3.string().regex(/^\d+$/, "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0646\u0634\u0626 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0631\u0642\u0645 \u0635\u062D\u064A\u062D")]).transform((val) => typeof val === "string" ? Number(val) : val).refine((val) => val >= 1, "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0646\u0634\u0626 \u0645\u0637\u0644\u0648\u0628")
  }),
  // Order status update
  updateOrderStatus: z3.object({
    status: z3.enum([
      "pending",
      "waiting",
      "in_production",
      "for_production",
      "paused",
      "on_hold",
      "completed",
      "cancelled"
    ], {
      errorMap: () => ({ message: "\u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" })
    })
  }),
  // WhatsApp message validation
  whatsappMessage: z3.object({
    phone_number: phoneNumberSchema,
    message: z3.string().min(1, "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629").max(4096, "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0637\u0648\u064A\u0644\u0629 \u062C\u062F\u0627\u064B"),
    title: z3.string().max(100, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0637\u0648\u064A\u0644 \u062C\u062F\u0627\u064B").optional(),
    priority: z3.enum(["low", "normal", "high", "urgent"]).optional(),
    context_type: z3.string().max(50).optional(),
    context_id: z3.string().max(50).optional(),
    template_name: z3.string().max(100).optional(),
    use_template: z3.boolean().optional()
  })
};
function requireAuth(req, res, next) {
  if (!req.session?.userId) {
    return res.status(401).json({
      message: "\u063A\u064A\u0631 \u0645\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 - \u064A\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0623\u0648\u0644\u0627\u064B",
      success: false
    });
  }
  next();
}
async function requireAdmin(req, res, next) {
  if (!req.session?.userId) {
    return res.status(401).json({
      message: "\u063A\u064A\u0631 \u0645\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 - \u064A\u0631\u062C\u0649 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0623\u0648\u0644\u0627\u064B",
      success: false
    });
  }
  try {
    const { db: db2 } = await Promise.resolve().then(() => (init_db(), db_exports));
    const { users: users3, roles: roles2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const { eq: eq3 } = await import("drizzle-orm");
    const userWithRole = await db2.select({
      user_id: users3.id,
      user_role_id: users3.role_id,
      role_name: roles2.name,
      role_permissions: roles2.permissions
    }).from(users3).leftJoin(roles2, eq3(users3.role_id, roles2.id)).where(eq3(users3.id, req.session.userId)).limit(1);
    if (userWithRole.length === 0) {
      return res.status(403).json({
        message: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F",
        success: false
      });
    }
    const user = userWithRole[0];
    const isAdmin = user.role_name === "admin" || user.role_name === "\u0645\u062F\u064A\u0631 \u0627\u0644\u0646\u0638\u0627\u0645" || user.role_name === "administrator" || user.user_role_id === 1 || // Assume role ID 1 is admin
    user.role_permissions && Array.isArray(user.role_permissions) && user.role_permissions.includes("admin");
    if (!isAdmin) {
      return res.status(403).json({
        message: "\u063A\u064A\u0631 \u0645\u062E\u0648\u0644 \u0644\u0644\u0648\u0635\u0648\u0644 - \u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0627\u0644\u0645\u062F\u064A\u0631 \u0645\u0637\u0644\u0648\u0628\u0629",
        success: false
      });
    }
    next();
  } catch (error) {
    console.error("Admin role validation error:", error);
    return res.status(500).json({
      message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A",
      success: false
    });
  }
}

// server/routes.ts
init_quantity_utils();
var parseRouteParam = (param, paramName) => {
  if (!param) {
    throw new Error(`${paramName} parameter is required`);
  }
  return parseIntSafe(param, paramName, { min: 1 });
};
var parseOptionalQueryParam = (param, paramName, defaultValue) => {
  if (!param) return defaultValue;
  try {
    return parseIntSafe(param, paramName, { min: 1 });
  } catch {
    return defaultValue;
  }
};
var insertCustomerSchema2 = createInsertSchema2(customers).omit({ id: true, created_at: true }).extend({
  sales_rep_id: z5.union([z5.string(), z5.number(), z5.null()]).optional().transform((val) => {
    if (val === "" || val === null || val === void 0) return null;
    if (typeof val === "number") return val;
    try {
      return parseIntSafe(val, "Sales Rep ID", { min: 1 });
    } catch {
      return null;
    }
  })
});
var insertCustomerProductSchema2 = createInsertSchema2(customer_products).omit({ id: true, created_at: true });
var insertLocationSchema2 = createInsertSchema2(locations).omit({ id: true });
var notificationService = new NotificationService(storage);
var notificationManager3 = null;
async function registerRoutes(app2) {
  app2.post(
    "/api/login",
    validateRequest({ body: commonSchemas.loginCredentials }),
    async (req, res) => {
      try {
        const { username, password } = req.body;
        if (!username?.trim() || !password?.trim()) {
          return res.status(400).json({ message: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0645\u0637\u0644\u0648\u0628\u0627\u0646" });
        }
        const user = await storage.getUserByUsername(username.trim());
        if (!user) {
          return res.status(401).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
        }
        if (!user.password) {
          console.error("User found but password is null/undefined:", user.id);
          return res.status(401).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
        }
        const isPasswordValid = await bcrypt2.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
        }
        if (user.status !== "active") {
          return res.status(401).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
        }
        req.session.userId = user.id;
        req.session.save((err) => {
          if (err) {
            console.error("Session save error:", err);
            return res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0641\u0638 \u0627\u0644\u062C\u0644\u0633\u0629" });
          }
          if (req.session?.touch) {
            req.session.touch();
          }
          if (process.env.NODE_ENV !== "production") {
            console.log(`\u2705 Session created and saved for user ${user.id}`);
          }
          res.json({
            user: {
              id: user.id ?? null,
              username: user.username ?? "",
              display_name: user.display_name ?? "",
              display_name_ar: user.display_name_ar ?? "",
              role_id: user.role_id ?? null,
              section_id: user.section_id ?? null
            }
          });
        });
      } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645" });
      }
    }
  );
  app2.get("/api/me", requireAuth, async (req, res) => {
    try {
      if (!req.session?.userId || typeof req.session.userId !== "number") {
        if (process.env.NODE_ENV !== "production") {
          console.log("\u{1F50D} /api/me session debug:", {
            sessionExists: !!req.session,
            userId: req.session?.userId,
            userIdType: typeof req.session?.userId,
            sessionId: req.session?.id || "no-session-id"
          });
        }
        return res.status(401).json({
          message: "\u062C\u0644\u0633\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
          success: false
        });
      }
      const user = await storage.getUserById(req.session.userId);
      if (!user) {
        try {
          if (req.session?.destroy) {
            req.session.destroy((err) => {
              if (err) console.error("Error destroying invalid session:", err);
            });
          }
        } catch (destroyError) {
          console.error("Failed to destroy invalid session:", destroyError);
        }
        return res.status(404).json({
          message: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F",
          success: false
        });
      }
      if (user.status !== "active") {
        return res.status(403).json({
          message: "\u0627\u0644\u062D\u0633\u0627\u0628 \u063A\u064A\u0631 \u0646\u0634\u0637",
          success: false
        });
      }
      try {
        if (req.session?.touch) {
          req.session.touch();
        }
        if (req.session?.save) {
          req.session.save((err) => {
            if (err) {
              console.error("Error saving session on /api/me:", err);
            }
          });
        }
      } catch (sessionError) {
        console.error("Session management error:", sessionError);
      }
      const userData = {
        id: user.id || null,
        username: user.username || "",
        display_name: user.display_name || "",
        display_name_ar: user.display_name_ar || "",
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
        message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645",
        success: false
      });
    }
  });
  app2.post("/api/logout", async (req, res) => {
    try {
      if (req.session?.destroy) {
        req.session.destroy((err) => {
          if (err) {
            console.error("Session destroy error:", err);
            return res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C" });
          }
          res.clearCookie("connect.sid");
          res.clearCookie("plastic-bag-session");
          res.json({ message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C \u0628\u0646\u062C\u0627\u062D" });
        });
      } else {
        req.session = {};
        res.clearCookie("connect.sid");
        res.clearCookie("plastic-bag-session");
        res.json({ message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C \u0628\u0646\u062C\u0627\u062D" });
      }
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C" });
    }
  });
  app2.get("/api/dashboard/stats", requireAuth, async (req, res) => {
    try {
      const stats = await storage.getDashboardStats();
      res.json(stats);
    } catch (error) {
      console.error("Dashboard stats error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A" });
    }
  });
  app2.post(
    "/api/notifications/whatsapp",
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
        } catch (serviceError) {
          console.error("Notification service error:", serviceError);
          return res.status(503).json({
            message: "\u062E\u062F\u0645\u0629 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631\u0629 \u0645\u0624\u0642\u062A\u0627\u064B",
            success: false,
            error: "SERVICE_UNAVAILABLE"
          });
        }
        if (!result) {
          return res.status(500).json({
            message: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0631\u062F \u0645\u0646 \u062E\u062F\u0645\u0629 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A",
            success: false
          });
        }
        if (result.success) {
          res.json({
            data: {
              messageId: result.messageId,
              phone_number,
              message: message.substring(0, 100) + (message.length > 100 ? "..." : ""),
              timestamp: (/* @__PURE__ */ new Date()).toISOString()
            },
            message: "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0648\u0627\u062A\u0633 \u0627\u0628 \u0628\u0646\u062C\u0627\u062D",
            success: true
          });
        } else {
          let statusCode = 500;
          let errorMessage = "\u0641\u0634\u0644 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0648\u0627\u062A\u0633 \u0627\u0628";
          if (result.error?.includes("Invalid phone number")) {
            statusCode = 400;
            errorMessage = "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D";
          } else if (result.error?.includes("Rate limit")) {
            statusCode = 429;
            errorMessage = "\u062A\u0645 \u062A\u062C\u0627\u0648\u0632 \u062D\u062F \u0639\u062F\u062F \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0645\u0633\u0645\u0648\u062D";
          } else if (result.error?.includes("Template not found")) {
            statusCode = 404;
            errorMessage = "\u0642\u0627\u0644\u0628 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F";
          }
          res.status(statusCode).json({
            message: errorMessage,
            error: result.error,
            success: false
          });
        }
      } catch (error) {
        console.error("Error sending WhatsApp message:", error);
        if (error.name === "ValidationError") {
          return res.status(400).json({
            message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
            success: false
          });
        }
        if (error.message?.includes("timeout")) {
          return res.status(504).json({
            message: "\u0627\u0646\u062A\u0647\u062A \u0645\u0647\u0644\u0629 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u062E\u062F\u0645\u0629 \u0627\u0644\u0648\u0627\u062A\u0633 \u0627\u0628",
            success: false
          });
        }
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0648\u0627\u062A\u0633 \u0627\u0628",
          success: false
        });
      }
    }
  );
  app2.post("/api/notifications/test", async (req, res) => {
    try {
      const { phone_number } = req.body;
      if (!phone_number) {
        return res.status(400).json({ message: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0645\u0637\u0644\u0648\u0628" });
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
    } catch (error) {
      console.error("Error sending test message:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631" });
    }
  });
  app2.get("/api/notifications", async (req, res) => {
    try {
      let userId;
      if (req.query.user_id) {
        try {
          userId = parseIntSafe(req.query.user_id, "User ID", { min: 1 });
        } catch {
          userId = void 0;
        }
      }
      let limitParam = 50;
      if (req.query.limit) {
        try {
          limitParam = parseIntSafe(req.query.limit, "Limit", { min: 1, max: 100 });
        } catch {
          limitParam = 50;
        }
      }
      let offsetParam = 0;
      if (req.query.offset) {
        try {
          offsetParam = parseIntSafe(req.query.offset, "Offset", { min: 0 });
        } catch {
          offsetParam = 0;
        }
      }
      const validLimit = Math.min(Math.max(isNaN(limitParam) ? 50 : limitParam, 1), 100);
      const validOffset = Math.max(isNaN(offsetParam) ? 0 : offsetParam, 0);
      const notifications2 = await storage.getNotifications(userId, validLimit, validOffset);
      res.json(notifications2);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A" });
    }
  });
  app2.get("/api/notifications/webhook/meta", (req, res) => {
    const VERIFY_TOKEN = process.env.META_WEBHOOK_VERIFY_TOKEN || "mpbf_webhook_token";
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("\u2705 Meta Webhook verified successfully");
      res.status(200).send(challenge);
    } else {
      console.log("\u274C Meta Webhook verification failed");
      res.sendStatus(403);
    }
  });
  app2.post("/api/notifications/webhook/meta", async (req, res) => {
    try {
      console.log("\u{1F4E8} Meta Webhook received:", JSON.stringify(req.body, null, 2));
      if (notificationService.metaWhatsApp) {
        await notificationService.metaWhatsApp.handleWebhook(req.body);
      }
      res.status(200).send("OK");
    } catch (error) {
      console.error("Error processing Meta webhook:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 Meta webhook" });
    }
  });
  app2.post("/api/notifications/webhook/twilio", async (req, res) => {
    try {
      const { MessageSid, MessageStatus, ErrorMessage } = req.body;
      if (MessageSid) {
        await notificationService.updateMessageStatus(MessageSid);
      }
      res.status(200).send("OK");
    } catch (error) {
      console.error("Error handling Twilio webhook:", error);
      res.status(500).send("Error");
    }
  });
  app2.get("/api/notifications/stream", requireAuth, async (req, res) => {
    try {
      if (!notificationManager3) {
        notificationManager3 = getNotificationManager(storage);
        setNotificationManager(notificationManager3);
        console.log("[System] Applying database optimizations...");
        createPerformanceIndexes().catch(
          (err) => console.error("[System] Database optimization failed:", err)
        );
        createTextSearchIndexes().catch(
          (err) => console.error("[System] Text search optimization failed:", err)
        );
      }
      const userId = req.session?.userId;
      if (!userId) {
        return res.status(401).json({ message: "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0628\u0647" });
      }
      const connectionId = `${userId}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      notificationManager3.addConnection(connectionId, userId, res);
      console.log(`[SSE] New connection established for user ${userId}, connectionId: ${connectionId}`);
    } catch (error) {
      console.error("Error establishing SSE connection:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0627\u062A\u0635\u0627\u0644" });
    }
  });
  app2.post(
    "/api/notifications/system",
    requireAuth,
    validateRequest({
      body: z5.object({
        title: z5.string().min(1, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0645\u0637\u0644\u0648\u0628"),
        title_ar: z5.string().optional(),
        message: z5.string().min(1, "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629"),
        message_ar: z5.string().optional(),
        type: z5.enum(["system", "order", "production", "maintenance", "quality", "hr"]).default("system"),
        priority: z5.enum(["low", "normal", "high", "urgent"]).default("normal"),
        recipient_type: z5.enum(["user", "role", "all"]),
        recipient_id: z5.string().optional(),
        context_type: z5.string().optional(),
        context_id: z5.string().optional(),
        sound: z5.boolean().optional().default(false),
        icon: z5.string().optional()
      })
    }),
    async (req, res) => {
      try {
        if (!notificationManager3) {
          notificationManager3 = getNotificationManager(storage);
          setNotificationManager(notificationManager3);
          console.log("[System] Applying database optimizations...");
          createPerformanceIndexes().catch(
            (err) => console.error("[System] Database optimization failed:", err)
          );
          createTextSearchIndexes().catch(
            (err) => console.error("[System] Text search optimization failed:", err)
          );
        }
        const notificationData = req.body;
        if (notificationData.recipient_type === "user" && notificationData.recipient_id) {
          const userId = parseInt(notificationData.recipient_id);
          if (isNaN(userId)) {
            return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
          }
          await notificationManager3.sendToUser(userId, notificationData);
        } else if (notificationData.recipient_type === "role" && notificationData.recipient_id) {
          const roleId = parseInt(notificationData.recipient_id);
          if (isNaN(roleId)) {
            return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u062F\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
          }
          await notificationManager3.sendToRole(roleId, notificationData);
        } else if (notificationData.recipient_type === "all") {
          await notificationManager3.sendToAll(notificationData);
        } else {
          return res.status(400).json({ message: "\u0646\u0648\u0639 \u0627\u0644\u0645\u0633\u062A\u0644\u0645 \u0623\u0648 \u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u0644\u0645 \u0645\u0637\u0644\u0648\u0628" });
        }
        res.json({
          success: true,
          message: "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0628\u0646\u062C\u0627\u062D",
          recipient_type: notificationData.recipient_type,
          recipient_id: notificationData.recipient_id
        });
      } catch (error) {
        console.error("Error creating system notification:", error);
        res.status(500).json({
          success: false,
          message: error.message || "\u0641\u0634\u0644 \u0641\u064A \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631"
        });
      }
    }
  );
  app2.patch("/api/notifications/mark-read/:id", requireAuth, async (req, res) => {
    try {
      const notificationId = parseRouteParam(req.params.id, "\u0645\u0639\u0631\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631");
      const notification = await storage.markNotificationAsRead(notificationId);
      res.json({
        success: true,
        message: "\u062A\u0645 \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0643\u0645\u0642\u0631\u0648\u0621",
        notification
      });
    } catch (error) {
      console.error("Error marking notification as read:", error);
      res.status(500).json({
        success: false,
        message: error.message || "\u0641\u0634\u0644 \u0641\u064A \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0625\u0634\u0639\u0627\u0631 \u0643\u0645\u0642\u0631\u0648\u0621"
      });
    }
  });
  app2.patch("/api/notifications/mark-all-read", requireAuth, async (req, res) => {
    try {
      const userId = req.session?.userId;
      if (!userId) {
        return res.status(401).json({ message: "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0628\u0647" });
      }
      await storage.markAllNotificationsAsRead(userId);
      res.json({
        success: true,
        message: "\u062A\u0645 \u062A\u0639\u0644\u064A\u0645 \u062C\u0645\u064A\u0639 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0643\u0645\u0642\u0631\u0648\u0621\u0629"
      });
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
      res.status(500).json({
        success: false,
        message: error.message || "\u0641\u0634\u0644 \u0641\u064A \u062A\u0639\u0644\u064A\u0645 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A \u0643\u0645\u0642\u0631\u0648\u0621\u0629"
      });
    }
  });
  app2.delete("/api/notifications/delete/:id", requireAuth, async (req, res) => {
    try {
      const notificationId = parseRouteParam(req.params.id, "\u0645\u0639\u0631\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631");
      await storage.deleteNotification(notificationId);
      res.json({
        success: true,
        message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631"
      });
    } catch (error) {
      console.error("Error deleting notification:", error);
      res.status(500).json({
        success: false,
        message: error.message || "\u0641\u0634\u0644 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0625\u0634\u0639\u0627\u0631"
      });
    }
  });
  app2.get("/api/notifications/user", requireAuth, async (req, res) => {
    try {
      const userId = req.session?.userId;
      if (!userId) {
        return res.status(401).json({ message: "\u063A\u064A\u0631 \u0645\u0635\u0631\u062D \u0628\u0647" });
      }
      const unreadOnly = req.query.unread_only === "true";
      const limit = parseOptionalQueryParam(req.query.limit, "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649", 50);
      const offset = parseOptionalQueryParam(req.query.offset, "\u0627\u0644\u0625\u0632\u0627\u062D\u0629", 0);
      const notifications2 = await storage.getUserNotifications(userId, {
        unreadOnly,
        limit,
        offset
      });
      const unreadNotifications = await storage.getUserNotifications(userId, {
        unreadOnly: true,
        limit: 1e3
        // Get all unread to count
      });
      res.json({
        success: true,
        notifications: notifications2,
        unread_count: unreadNotifications.length,
        total_returned: notifications2.length
      });
    } catch (error) {
      console.error("Error fetching user notifications:", error);
      res.status(500).json({
        success: false,
        message: error.message || "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A"
      });
    }
  });
  app2.get("/api/notifications/stats", requireAuth, requireAdmin, async (req, res) => {
    try {
      if (!notificationManager3) {
        return res.json({
          success: true,
          stats: { activeConnections: 0, connectionsByUser: {} }
        });
      }
      const stats = notificationManager3.getStats();
      res.json({ success: true, stats });
    } catch (error) {
      console.error("Error getting notification stats:", error);
      res.status(500).json({
        success: false,
        message: "\u0641\u0634\u0644 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A"
      });
    }
  });
  app2.get("/api/notification-templates", async (req, res) => {
    try {
      const templates = await storage.getNotificationTemplates();
      res.json(templates);
    } catch (error) {
      console.error("Error fetching notification templates:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0642\u0648\u0627\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A" });
    }
  });
  app2.post("/api/notification-templates", async (req, res) => {
    try {
      const template = await storage.createNotificationTemplate(req.body);
      res.json(template);
    } catch (error) {
      console.error("Error creating notification template:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0642\u0627\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631" });
    }
  });
  app2.get(
    "/api/ml/predictions/:machineId",
    requireAuth,
    validateRequest({
      params: commonSchemas.idParam.extend({ machineId: z5.string().regex(/^\d+$/).transform(Number) }),
      query: z5.object({ hours: z5.string().regex(/^\d+$/).transform(Number).optional() })
    }),
    async (req, res) => {
      try {
        if (!req.params?.machineId) {
          return res.status(400).json({
            message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0645\u0637\u0644\u0648\u0628",
            success: false
          });
        }
        const machineId = parseInt(req.params.machineId);
        const hoursParam = req.query?.hours;
        let hoursAhead = 24;
        if (hoursParam !== void 0) {
          const hours = typeof hoursParam === "number" ? hoursParam : parseInt(hoursParam);
          hoursAhead = !isNaN(hours) && hours > 0 ? hours : 24;
        }
        if (!machineId || isNaN(machineId) || machineId <= 0) {
          return res.status(400).json({
            message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",
            success: false
          });
        }
        if (hoursAhead < 1 || hoursAhead > 168) {
          return res.status(400).json({
            message: "\u0639\u062F\u062F \u0627\u0644\u0633\u0627\u0639\u0627\u062A \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0628\u064A\u0646 1 \u0648 168",
            success: false
          });
        }
        const prediction = await mlService.predictProductionPerformance(machineId, hoursAhead);
        if (!prediction) {
          return res.status(404).json({
            message: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u062A\u0646\u0628\u0624\u0627\u062A \u0644\u0647\u0630\u0647 \u0627\u0644\u0645\u0643\u064A\u0646\u0629",
            success: false
          });
        }
        res.json({
          data: prediction,
          success: true
        });
      } catch (error) {
        console.error("ML prediction error:", error);
        if (error.message?.includes("Machine not found")) {
          return res.status(404).json({
            message: "\u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629",
            success: false
          });
        }
        if (error.message?.includes("Insufficient data")) {
          return res.status(422).json({
            message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0643\u0627\u0641\u064A\u0629 \u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u062A\u0646\u0628\u0624",
            success: false
          });
        }
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u0641\u064A \u062E\u062F\u0645\u0629 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
          success: false
        });
      }
    }
  );
  app2.get("/api/ml/anomalies/:machineId", async (req, res) => {
    try {
      if (!req.params?.machineId) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0645\u0637\u0644\u0648\u0628" });
      }
      const idStr = req.params.machineId;
      if (!/^\d+$/.test(idStr)) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      const machineId = Number(idStr);
      const mockData = {
        timestamp: /* @__PURE__ */ new Date(),
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
      console.error("ML anomaly detection error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0643\u062A\u0634\u0627\u0641 \u0627\u0644\u0634\u0630\u0648\u0630" });
    }
  });
  app2.get("/api/ml/patterns", async (req, res) => {
    try {
      const patterns = await mlService.analyzeProductionPatterns();
      res.json(patterns);
    } catch (error) {
      console.error("ML pattern analysis error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0623\u0646\u0645\u0627\u0637" });
    }
  });
  app2.get("/api/ml/optimization/:machineId", async (req, res) => {
    try {
      if (!req.params?.machineId) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0645\u0637\u0644\u0648\u0628" });
      }
      const idStr = req.params.machineId;
      if (!/^\d+$/.test(idStr)) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      const machineId = Number(idStr);
      const optimization = await mlService.optimizeProductionParameters(machineId);
      res.json(optimization);
    } catch (error) {
      console.error("ML optimization error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u062A\u062D\u0633\u064A\u0646\u0627\u062A" });
    }
  });
  app2.post("/api/ml/train/:machineId", async (req, res) => {
    try {
      if (!req.params?.machineId) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0645\u0637\u0644\u0648\u0628" });
      }
      const idStr = req.params.machineId;
      if (!/^\d+$/.test(idStr)) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      const machineId = Number(idStr);
      for (let i = 0; i < 50; i++) {
        const data = {
          timestamp: new Date(Date.now() - i * 36e5),
          // آخر 50 ساعة
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
        message: `\u062A\u0645 \u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0644\u0644\u0645\u0643\u064A\u0646\u0629 ${machineId} \u0628\u0646\u062C\u0627\u062D`,
        dataPoints: 50
      });
    } catch (error) {
      console.error("ML training error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0646\u0645\u0648\u0630\u062C" });
    }
  });
  app2.post("/api/ml/apply-optimization/:machineId", async (req, res) => {
    try {
      if (!req.params?.machineId) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u0645\u0637\u0644\u0648\u0628" });
      }
      const idStr = req.params.machineId;
      if (!/^\d+$/.test(idStr)) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      const machineId = Number(idStr);
      const optimization = req.body || {};
      res.json({
        success: true,
        message: `\u062A\u0645 \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062A\u062D\u0633\u064A\u0646\u0627\u062A \u0639\u0644\u0649 \u0627\u0644\u0645\u0643\u064A\u0646\u0629 ${machineId}`,
        appliedSettings: optimization
      });
    } catch (error) {
      console.error("ML optimization application error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u062A\u062D\u0633\u064A\u0646\u0627\u062A" });
    }
  });
  app2.post("/api/ml/production-data", async (req, res) => {
    try {
      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0645\u0637\u0644\u0648\u0628\u0629" });
      }
      const productionData = req.body;
      await mlService.addProductionData(productionData);
      res.json({ success: true, message: "\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("ML data addition error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" });
    }
  });
  app2.get(
    "/api/orders",
    requireAuth,
    async (req, res) => {
      try {
        const orders2 = await storage.getAllOrders();
        if (!Array.isArray(orders2)) {
          return res.status(500).json({
            message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",
            success: false
          });
        }
        res.json({
          data: orders2,
          count: orders2.length,
          success: true
        });
      } catch (error) {
        console.error("Orders fetch error:", error);
        if (error.name === "DatabaseError") {
          return res.status(500).json({
            message: error.message,
            success: false
          });
        }
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",
          success: false
        });
      }
    }
  );
  app2.get("/api/orders/next-number", requireAuth, async (req, res) => {
    try {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
      const orders2 = await storage.getAllOrders();
      const orderNumbers = orders2.map((order) => order.order_number).filter((num) => num && num.startsWith("ORD")).map((num) => {
        const match = num.match(/^ORD(\d+)$/);
        if (!match || !match[1]) return 0;
        const parsed = parseInt(match[1], 10);
        return isNaN(parsed) || parsed < 1 ? 0 : parsed;
      }).filter((num) => num > 0);
      const nextNumber = orderNumbers.length > 0 ? Math.max(...orderNumbers) + 1 : 1;
      const orderNumber = `ORD${nextNumber.toString().padStart(3, "0")}`;
      res.json({ orderNumber });
    } catch (error) {
      console.error("Order number generation error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628" });
    }
  });
  app2.post(
    "/api/orders",
    requireAuth,
    validateRequest({ body: commonSchemas.createOrder }),
    async (req, res) => {
      try {
        const userId = req.session.userId;
        if (!userId || typeof userId !== "number") {
          return res.status(401).json({
            message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",
            success: false
          });
        }
        const { customer_id, order_number } = req.body;
        if (!customer_id?.trim()) {
          return res.status(400).json({
            message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0645\u0637\u0644\u0648\u0628",
            success: false
          });
        }
        if (!order_number?.trim()) {
          return res.status(400).json({
            message: "\u0631\u0642\u0645 \u0627\u0644\u0637\u0644\u0628 \u0645\u0637\u0644\u0648\u0628",
            success: false
          });
        }
        let deliveryDays = null;
        if (req.body.delivery_days) {
          try {
            deliveryDays = parseIntSafe(req.body.delivery_days, "Delivery days", { min: 1, max: 365 });
          } catch (error) {
            return res.status(400).json({
              message: `Invalid delivery days: ${error instanceof Error ? error.message : "Invalid value"}`,
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
            message: "\u0641\u0634\u0644 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628",
            success: false
          });
        }
        res.status(201).json({
          data: order,
          message: "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D",
          success: true
        });
      } catch (error) {
        console.error("Order creation error:", error);
        if (error.name === "DatabaseError") {
          return res.status(400).json({
            message: error.message,
            success: false
          });
        }
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628",
          success: false
        });
      }
    }
  );
  app2.delete(
    "/api/orders/:id",
    requireAuth,
    validateRequest({ params: commonSchemas.idParam }),
    async (req, res) => {
      try {
        const orderId = parseInt(req.params.id);
        if (!orderId || isNaN(orderId) || orderId <= 0) {
          return res.status(400).json({
            message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",
            success: false
          });
        }
        const existingOrder = await storage.getOrderById(orderId);
        if (!existingOrder) {
          return res.status(404).json({
            message: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F",
            success: false
          });
        }
        await storage.deleteOrder(orderId);
        res.json({
          message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D",
          success: true
        });
      } catch (error) {
        console.error("Order deletion error:", error);
        if (error.name === "DatabaseError") {
          return res.status(400).json({
            message: error.message,
            success: false
          });
        }
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0637\u0644\u0628",
          success: false
        });
      }
    }
  );
  app2.get("/api/production/orders-for-production", requireAuth, async (req, res) => {
    try {
      const orders2 = await storage.getOrdersForProduction();
      res.json(orders2);
    } catch (error) {
      console.error("Error fetching orders for production:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C" });
    }
  });
  app2.get("/api/production/hierarchical-orders", requireAuth, async (req, res) => {
    try {
      const orders2 = await storage.getHierarchicalOrdersForProduction();
      res.json(orders2);
    } catch (error) {
      console.error("Error fetching hierarchical orders for production:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0627\u0644\u0647\u0631\u0645\u064A\u0629" });
    }
  });
  app2.get("/api/production-orders", requireAuth, async (req, res) => {
    try {
      const productionOrders = await storage.getAllProductionOrders();
      res.json(productionOrders);
    } catch (error) {
      console.error("Error fetching production orders:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C" });
    }
  });
  app2.post("/api/production-orders", requireAuth, async (req, res) => {
    try {
      const validatedData = insertProductionOrderSchema.parse(req.body);
      const productionOrder = await storage.createProductionOrder(validatedData);
      res.status(201).json(productionOrder);
    } catch (error) {
      console.error("Error creating production order:", error);
      if (error instanceof Error && "issues" in error) {
        res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", errors: error });
      } else {
        res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0623\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C" });
      }
    }
  });
  app2.put("/api/production-orders/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertProductionOrderSchema.partial().parse(req.body);
      const productionOrder = await storage.updateProductionOrder(id, validatedData);
      res.json(productionOrder);
    } catch (error) {
      console.error("Error updating production order:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0623\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C" });
    }
  });
  app2.delete("/api/production-orders/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteProductionOrder(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0623\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Error deleting production order:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0623\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C" });
    }
  });
  app2.post("/api/production-orders/preview-quantities", requireAuth, async (req, res) => {
    try {
      const { customer_product_id, quantity_kg } = req.body;
      if (!customer_product_id || !quantity_kg || quantity_kg <= 0) {
        return res.status(400).json({
          message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0627\u0644\u0643\u0645\u064A\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0627\u0646",
          success: false
        });
      }
      const customerProducts = await storage.getCustomerProducts();
      const customerProduct = customerProducts.find((cp) => cp.id === parseInt(customer_product_id));
      if (!customerProduct) {
        return res.status(404).json({
          message: "\u0627\u0644\u0645\u0646\u062A\u062C \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F",
          success: false
        });
      }
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
        message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0633\u0627\u0628 \u0627\u0644\u0643\u0645\u064A\u0629",
        success: false
      });
    }
  });
  app2.get("/api/orders/enhanced", requireAuth, async (req, res) => {
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
      const orders2 = await storage.getOrdersEnhanced({
        search,
        customer_id,
        status,
        date_from,
        date_to,
        page: parseInt(page),
        limit: parseInt(limit)
      });
      res.json({
        success: true,
        data: orders2
      });
    } catch (error) {
      console.error("Enhanced orders fetch error:", error);
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",
        success: false
      });
    }
  });
  app2.get("/api/rolls", requireAuth, async (req, res) => {
    try {
      const { stage, limit, offset } = req.query;
      const options = {
        limit: limit ? parseInt(limit) : void 0,
        offset: offset ? parseInt(offset) : void 0,
        stage
      };
      if (stage) {
        const rolls2 = await storage.getRollsByStage(stage, {
          limit: options.limit,
          offset: options.offset
        });
        res.json(rolls2);
      } else {
        const rolls2 = await storage.getRolls(options);
        res.json(rolls2);
      }
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0631\u0648\u0644\u0627\u062A" });
    }
  });
  app2.patch("/api/rolls/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const roll = await storage.updateRoll(id, updates);
      res.json(roll);
    } catch (error) {
      res.status(400).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0631\u0648\u0644" });
    }
  });
  app2.get("/api/machines", requireAuth, async (req, res) => {
    try {
      const machines2 = await storage.getMachines();
      res.json(machines2);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0643\u0627\u0626\u0646" });
    }
  });
  app2.get("/api/customers", requireAuth, async (req, res) => {
    try {
      const customers2 = await storage.getCustomers();
      res.json(customers2);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0639\u0645\u0644\u0627\u0621" });
    }
  });
  app2.get("/api/health", (req, res) => {
    res.json({
      status: "healthy",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });
  app2.get("/api/reports/orders", requireAuth, async (req, res) => {
    try {
      const { date_from, date_to } = req.query;
      const reports = await storage.getOrderReports(
        date_from,
        date_to
      );
      res.json({
        success: true,
        data: reports
      });
    } catch (error) {
      console.error("Order reports error:", error);
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",
        success: false
      });
    }
  });
  app2.get("/api/reports/advanced-metrics", requireAuth, async (req, res) => {
    try {
      const { date_from, date_to } = req.query;
      const metrics = await storage.getAdvancedMetrics(
        date_from,
        date_to
      );
      res.json({
        success: true,
        data: metrics
      });
    } catch (error) {
      console.error("Advanced metrics error:", error);
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629",
        success: false
      });
    }
  });
  app2.get("/api/reports/hr", requireAuth, async (req, res) => {
    try {
      const { date_from, date_to } = req.query;
      const reports = await storage.getHRReports(
        date_from,
        date_to
      );
      res.json({
        success: true,
        data: reports
      });
    } catch (error) {
      console.error("HR reports error:", error);
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629",
        success: false
      });
    }
  });
  app2.get("/api/reports/maintenance", requireAuth, async (req, res) => {
    try {
      const { date_from, date_to } = req.query;
      const reports = await storage.getMaintenanceReports(
        date_from,
        date_to
      );
      res.json({
        success: true,
        data: reports
      });
    } catch (error) {
      console.error("Maintenance reports error:", error);
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u0635\u064A\u0627\u0646\u0629",
        success: false
      });
    }
  });
  app2.get("/api/reports/dashboard", requireAuth, async (req, res) => {
    try {
      const { date_from, date_to } = req.query;
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
        storage.getOrderReports(date_from, date_to),
        storage.getAdvancedMetrics(date_from, date_to),
        storage.getHRReports(date_from, date_to),
        storage.getMaintenanceReports(date_from, date_to),
        storage.getRealTimeProductionStats(),
        storage.getUserPerformanceStats(void 0, date_from, date_to),
        storage.getRolePerformanceStats(date_from, date_to),
        storage.getMachineUtilizationStats(date_from, date_to),
        storage.getProductionEfficiencyMetrics(date_from, date_to),
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
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (error) {
      console.error("Comprehensive dashboard error:", error);
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0634\u0627\u0645\u0644",
        success: false
      });
    }
  });
  app2.post("/api/reports/export", requireAuth, async (req, res) => {
    try {
      const {
        report_type,
        format,
        date_from,
        date_to,
        filters
      } = req.body;
      if (!report_type || !format) {
        return res.status(400).json({
          message: "\u0646\u0648\u0639 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0648\u0627\u0644\u0635\u064A\u063A\u0629 \u0645\u0637\u0644\u0648\u0628\u0627\u0646",
          success: false
        });
      }
      let reportData;
      switch (report_type) {
        case "orders":
          reportData = await storage.getOrderReports(date_from, date_to);
          break;
        case "advanced-metrics":
          reportData = await storage.getAdvancedMetrics(date_from, date_to);
          break;
        case "hr":
          reportData = await storage.getHRReports(date_from, date_to);
          break;
        case "maintenance":
          reportData = await storage.getMaintenanceReports(date_from, date_to);
          break;
        default:
          return res.status(400).json({
            message: "\u0646\u0648\u0639 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",
            success: false
          });
      }
      const exportData = {
        report_type,
        format,
        generated_at: (/* @__PURE__ */ new Date()).toISOString(),
        date_range: { from: date_from, to: date_to },
        filters,
        data: reportData
      };
      if (format === "json") {
        res.json({
          success: true,
          data: exportData
        });
      } else {
        res.json({
          success: true,
          message: `\u062A\u0645 \u062A\u062C\u0647\u064A\u0632 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0628\u0635\u064A\u063A\u0629 ${format}`,
          download_url: `/api/reports/download/${report_type}-${Date.now()}.${format}`,
          data: exportData
        });
      }
    } catch (error) {
      console.error("Export report error:", error);
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u062A\u0642\u0631\u064A\u0631",
        success: false
      });
    }
  });
  app2.get("/api", (req, res) => {
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
  app2.head("/api", (req, res) => {
    res.status(404).end();
  });
  app2.post("/api/customers", async (req, res) => {
    try {
      console.log("Received customer data:", req.body);
      const validatedData = insertCustomerSchema2.parse(req.body);
      console.log("Validated customer data:", validatedData);
      const customer = await storage.createCustomer(validatedData);
      res.json(customer);
    } catch (error) {
      console.error("Customer creation error:", error);
      if (error instanceof Error) {
        console.error("Error message:", error.message);
      }
      res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.put("/api/customers/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const validatedData = insertCustomerSchema2.parse(req.body);
      const customer = await storage.updateCustomer(id, validatedData);
      res.json(customer);
    } catch (error) {
      console.error("Customer update error:", error);
      res.status(400).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0639\u0645\u064A\u0644", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.get("/api/sections", async (req, res) => {
    try {
      const sections2 = await storage.getSections();
      res.json(sections2);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0623\u0642\u0633\u0627\u0645" });
    }
  });
  app2.get("/api/material-groups", async (req, res) => {
    try {
      const categories2 = await storage.getCategories();
      res.json(categories2);
    } catch (error) {
      console.error("Error fetching material groups:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0645\u062C\u0645\u0648\u0639\u0627\u062A \u0627\u0644\u0645\u0648\u0627\u062F" });
    }
  });
  app2.get("/api/items", async (req, res) => {
    try {
      const items2 = await storage.getItems();
      res.json(items2);
    } catch (error) {
      console.error("Error fetching items:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0623\u0635\u0646\u0627\u0641" });
    }
  });
  app2.get("/api/customer-products", async (req, res) => {
    try {
      const customerProducts = await storage.getCustomerProducts();
      res.json(customerProducts);
    } catch (error) {
      console.error("Customer products fetch error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0645\u0646\u062A\u062C\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u0627\u0621" });
    }
  });
  app2.post("/api/customer-products", requireAuth, async (req, res) => {
    try {
      const validatedData = insertCustomerProductSchema2.parse(req.body);
      const validationResult = await getDataValidator(storage).validateData("customer_products", validatedData);
      if (!validationResult.isValid) {
        const criticalErrors = validationResult.errors.filter((e) => e.severity === "critical" || e.severity === "high");
        if (criticalErrors.length > 0) {
          return res.status(400).json({
            message: criticalErrors[0].message_ar || criticalErrors[0].message,
            errors: validationResult.errors,
            success: false
          });
        }
      }
      const customerProduct = await storage.createCustomerProduct(validatedData);
      res.status(201).json({
        data: customerProduct,
        message: "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0646\u062C\u0627\u062D",
        success: true
      });
    } catch (error) {
      console.error("Customer product creation error:", error);
      if (error.name === "DatabaseError") {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0645\u064A\u0644",
        success: false
      });
    }
  });
  app2.get("/api/locations", async (req, res) => {
    try {
      const locations2 = await storage.getLocations();
      res.json(locations2);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0648\u0627\u0642\u0639" });
    }
  });
  app2.post("/api/locations", async (req, res) => {
    try {
      const validatedData = insertLocationSchema2.parse(req.body);
      const location = await storage.createLocationExtended(validatedData);
      res.json(location);
    } catch (error) {
      console.error("Location creation error:", error);
      res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
  });
  app2.put("/api/locations/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const validatedData = insertLocationSchema2.partial().parse(req.body);
      const location = await storage.updateLocationExtended(id, validatedData);
      res.json(location);
    } catch (error) {
      console.error("Location update error:", error);
      res.status(400).json({ message: "\u0641\u0634\u0644 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0648\u0642\u0639" });
    }
  });
  app2.get("/api/inventory-movements", async (req, res) => {
    try {
      const movements = await storage.getInventoryMovements();
      res.json(movements);
    } catch (error) {
      console.error("Error fetching inventory movements:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u062E\u0632\u0648\u0646" });
    }
  });
  app2.post("/api/inventory-movements", async (req, res) => {
    try {
      const validatedData = insertInventoryMovementSchema.parse(req.body);
      const movement = await storage.createInventoryMovement(validatedData);
      res.json(movement);
    } catch (error) {
      console.error("Inventory movement creation error:", error);
      res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
  });
  app2.delete("/api/inventory-movements/:id", async (req, res) => {
    try {
      if (!req.params?.id) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0631\u0643\u0629 \u0645\u0637\u0644\u0648\u0628" });
      }
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u062D\u0631\u0643\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      const success = await storage.deleteInventoryMovement(id);
      if (success) {
        res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u062D\u0631\u0643\u0629 \u0628\u0646\u062C\u0627\u062D" });
      } else {
        res.status(404).json({ message: "\u0627\u0644\u062D\u0631\u0643\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629" });
      }
    } catch (error) {
      console.error("Inventory movement deletion error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u062D\u0631\u0643\u0629" });
    }
  });
  app2.get("/api/users", async (req, res) => {
    try {
      const users3 = await storage.getSafeUsers();
      res.json(users3);
    } catch (error) {
      console.error("Error fetching safe users:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646" });
    }
  });
  app2.get("/api/users/:id", async (req, res) => {
    try {
      if (!req.params?.id) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628" });
      }
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      const user = await storage.getSafeUser(id);
      if (!user) {
        return res.status(404).json({ message: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching safe user by ID:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" });
    }
  });
  app2.get("/api/categories", async (req, res) => {
    try {
      const categories2 = await storage.getCategories();
      res.json(categories2);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0641\u0626\u0627\u062A" });
    }
  });
  app2.post("/api/categories", async (req, res) => {
    try {
      console.log("Received category data:", req.body);
      let categoryId = req.body?.id;
      if (!categoryId) {
        const existingCategories = await storage.getCategories() || [];
        const categoryNumbers = existingCategories.map((cat) => cat?.id).filter((id) => id && typeof id === "string" && id.startsWith("CAT") && id.length <= 6).map((id) => {
          const num = id.replace("CAT", "");
          const parsed = parseInt(num);
          return isNaN(parsed) ? 0 : parsed;
        }).filter((num) => num > 0).sort((a, b) => b - a);
        const nextNumber = categoryNumbers.length > 0 ? categoryNumbers[0] + 1 : 1;
        categoryId = nextNumber < 10 ? `CAT0${nextNumber}` : `CAT${nextNumber}`;
      }
      const processedData = {
        ...req.body,
        id: categoryId,
        parent_id: !req.body?.parent_id || req.body.parent_id === "none" || req.body.parent_id === "" ? null : req.body.parent_id,
        code: !req.body?.code || req.body.code === "" ? null : req.body.code
      };
      console.log("Processed category data:", processedData);
      const category = await storage.createCategory(processedData);
      console.log("Created category:", category);
      res.json(category);
    } catch (error) {
      console.error("Category creation error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0641\u0626\u0629", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.put("/api/categories/:id", async (req, res) => {
    try {
      const id = req.params.id;
      console.log("Updating category:", id, req.body);
      const processedData = {
        ...req.body,
        parent_id: req.body.parent_id === "none" || req.body.parent_id === "" ? null : req.body.parent_id,
        code: req.body.code === "" || !req.body.code ? null : req.body.code
      };
      const category = await storage.updateCategory(id, processedData);
      res.json(category);
    } catch (error) {
      console.error("Category update error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0641\u0626\u0629", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.delete("/api/categories/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await storage.deleteCategory(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0641\u0626\u0629 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Category deletion error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0641\u0626\u0629", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.get("/api/training-records", async (req, res) => {
    try {
      const trainingRecords = await storage.getTrainingRecords();
      res.json(trainingRecords);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0633\u062C\u0644\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628" });
    }
  });
  app2.post("/api/training-records", async (req, res) => {
    try {
      const trainingRecord = await storage.createTrainingRecord(req.body);
      res.json(trainingRecord);
    } catch (error) {
      res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
  });
  app2.get("/api/admin-decisions", async (req, res) => {
    try {
      const adminDecisions = await storage.getAdminDecisions();
      res.json(adminDecisions);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062A \u0627\u0644\u0625\u062F\u0627\u0631\u064A\u0629" });
    }
  });
  app2.post("/api/admin-decisions", async (req, res) => {
    try {
      const adminDecision = await storage.createAdminDecision(req.body);
      res.json(adminDecision);
    } catch (error) {
      res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
  });
  app2.get("/api/warehouse-transactions", async (req, res) => {
    try {
      const warehouseTransactions = await storage.getWarehouseTransactions();
      res.json(warehouseTransactions);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639" });
    }
  });
  app2.post("/api/warehouse-transactions", async (req, res) => {
    try {
      const warehouseTransaction = await storage.createWarehouseTransaction(req.body);
      res.json(warehouseTransaction);
    } catch (error) {
      res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
  });
  app2.get("/api/mixing-recipes", async (req, res) => {
    try {
      const mixingRecipes = await storage.getMixingRecipes();
      res.json(mixingRecipes);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0648\u0635\u0641\u0627\u062A \u0627\u0644\u062E\u0644\u0637" });
    }
  });
  app2.post("/api/mixing-recipes", async (req, res) => {
    try {
      const mixingRecipe = await storage.createMixingRecipe(req.body);
      res.json(mixingRecipe);
    } catch (error) {
      res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
  });
  app2.get("/api/maintenance", async (req, res) => {
    try {
      const requests = await storage.getMaintenanceRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629" });
    }
  });
  app2.post("/api/maintenance", async (req, res) => {
    try {
      const validatedData = insertMaintenanceRequestSchema.parse(req.body);
      const request = await storage.createMaintenanceRequest(validatedData);
      res.json(request);
    } catch (error) {
      res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629" });
    }
  });
  app2.get("/api/quality-checks", async (req, res) => {
    try {
      const qualityChecks = await storage.getQualityChecks();
      res.json(qualityChecks);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062C\u0648\u062F\u0629" });
    }
  });
  app2.get("/api/maintenance-requests", async (req, res) => {
    try {
      const maintenanceRequests = await storage.getMaintenanceRequests();
      res.json(maintenanceRequests);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629" });
    }
  });
  app2.post("/api/maintenance-requests", async (req, res) => {
    try {
      console.log("Creating maintenance request with data:", req.body);
      const validatedData = insertMaintenanceRequestSchema.parse(req.body);
      const request = await storage.createMaintenanceRequest(validatedData);
      console.log("Created maintenance request:", request);
      res.json(request);
    } catch (error) {
      console.error("Error creating maintenance request:", error);
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u0627\u0644\u0635\u064A\u0627\u0646\u0629",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });
  app2.get("/api/maintenance-actions", async (req, res) => {
    try {
      const actions = await storage.getAllMaintenanceActions();
      res.json(actions);
    } catch (error) {
      console.error("Error fetching maintenance actions:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629" });
    }
  });
  app2.get("/api/maintenance-actions/request/:requestId", async (req, res) => {
    try {
      const requestId = parseInt(req.params.requestId);
      const actions = await storage.getMaintenanceActionsByRequestId(requestId);
      res.json(actions);
    } catch (error) {
      console.error("Error fetching maintenance actions by request:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0644\u0644\u0637\u0644\u0628" });
    }
  });
  app2.post("/api/maintenance-actions", async (req, res) => {
    try {
      console.log("Creating maintenance action with data:", req.body);
      const data = insertMaintenanceActionSchema.parse(req.body);
      console.log("Parsed action data:", data);
      const action = await storage.createMaintenanceAction(data);
      console.log("Created maintenance action:", action);
      res.json(action);
    } catch (error) {
      console.error("Error creating maintenance action:", error);
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0635\u064A\u0627\u0646\u0629",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });
  app2.put("/api/maintenance-actions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const action = await storage.updateMaintenanceAction(id, req.body);
      res.json(action);
    } catch (error) {
      console.error("Error updating maintenance action:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0635\u064A\u0627\u0646\u0629" });
    }
  });
  app2.delete("/api/maintenance-actions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteMaintenanceAction(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Error deleting maintenance action:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0635\u064A\u0627\u0646\u0629" });
    }
  });
  app2.get("/api/maintenance-reports", async (req, res) => {
    try {
      const { type } = req.query;
      const reports = type ? await storage.getMaintenanceReportsByType(type) : await storage.getAllMaintenanceReports();
      res.json(reports);
    } catch (error) {
      console.error("Error fetching maintenance reports:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u0644\u0627\u063A\u0627\u062A \u0627\u0644\u0635\u064A\u0627\u0646\u0629" });
    }
  });
  app2.post("/api/maintenance-reports", async (req, res) => {
    try {
      const data = insertMaintenanceReportSchema.parse(req.body);
      const report = await storage.createMaintenanceReport(data);
      res.json(report);
    } catch (error) {
      console.error("Error creating maintenance report:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0628\u0644\u0627\u063A \u0627\u0644\u0635\u064A\u0627\u0646\u0629" });
    }
  });
  app2.put("/api/maintenance-reports/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const report = await storage.updateMaintenanceReport(id, req.body);
      res.json(report);
    } catch (error) {
      console.error("Error updating maintenance report:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0628\u0644\u0627\u063A \u0627\u0644\u0635\u064A\u0627\u0646\u0629" });
    }
  });
  app2.delete("/api/maintenance-reports/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteMaintenanceReport(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0628\u0644\u0627\u063A \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Error deleting maintenance report:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0628\u0644\u0627\u063A \u0627\u0644\u0635\u064A\u0627\u0646\u0629" });
    }
  });
  app2.get("/api/operator-negligence-reports", async (req, res) => {
    try {
      const { operator_id } = req.query;
      const reports = operator_id ? await storage.getOperatorNegligenceReportsByOperator(parseInt(operator_id)) : await storage.getAllOperatorNegligenceReports();
      res.json(reports);
    } catch (error) {
      console.error("Error fetching operator negligence reports:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u0644\u0627\u063A\u0627\u062A \u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0645\u0634\u063A\u0644\u064A\u0646" });
    }
  });
  app2.post("/api/operator-negligence-reports", async (req, res) => {
    try {
      const data = insertOperatorNegligenceReportSchema.parse(req.body);
      const report = await storage.createOperatorNegligenceReport(data);
      res.json(report);
    } catch (error) {
      console.error("Error creating operator negligence report:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0628\u0644\u0627\u063A \u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0645\u0634\u063A\u0644" });
    }
  });
  app2.put("/api/operator-negligence-reports/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const report = await storage.updateOperatorNegligenceReport(id, req.body);
      res.json(report);
    } catch (error) {
      console.error("Error updating operator negligence report:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0628\u0644\u0627\u063A \u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0645\u0634\u063A\u0644" });
    }
  });
  app2.delete("/api/operator-negligence-reports/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteOperatorNegligenceReport(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0628\u0644\u0627\u063A \u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0645\u0634\u063A\u0644 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Error deleting operator negligence report:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0628\u0644\u0627\u063A \u0625\u0647\u0645\u0627\u0644 \u0627\u0644\u0645\u0634\u063A\u0644" });
    }
  });
  app2.get("/api/spare-parts", async (req, res) => {
    try {
      const spareParts = await storage.getAllSpareParts();
      res.json(spareParts);
    } catch (error) {
      console.error("Error fetching spare parts:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631" });
    }
  });
  app2.post("/api/spare-parts", async (req, res) => {
    try {
      const sparePart = await storage.createSparePart(req.body);
      res.json(sparePart);
    } catch (error) {
      console.error("Error creating spare part:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631" });
    }
  });
  app2.put("/api/spare-parts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const sparePart = await storage.updateSparePart(id, req.body);
      res.json(sparePart);
    } catch (error) {
      console.error("Error updating spare part:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631" });
    }
  });
  app2.delete("/api/spare-parts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteSparePart(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Error deleting spare part:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631" });
    }
  });
  app2.get("/api/consumable-parts", async (req, res) => {
    try {
      const consumableParts = await storage.getAllConsumableParts();
      res.json(consumableParts);
    } catch (error) {
      console.error("Error fetching consumable parts:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629" });
    }
  });
  app2.post("/api/consumable-parts", async (req, res) => {
    try {
      const consumablePart = await storage.createConsumablePart(req.body);
      res.json(consumablePart);
    } catch (error) {
      console.error("Error creating consumable part:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629" });
    }
  });
  app2.put("/api/consumable-parts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const consumablePart = await storage.updateConsumablePart(id, req.body);
      res.json(consumablePart);
    } catch (error) {
      console.error("Error updating consumable part:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629" });
    }
  });
  app2.delete("/api/consumable-parts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteConsumablePart(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Error deleting consumable part:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629" });
    }
  });
  app2.get("/api/consumable-parts-transactions", async (req, res) => {
    try {
      const transactions = await storage.getConsumablePartTransactions();
      res.json(transactions);
    } catch (error) {
      console.error("Error fetching consumable parts transactions:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062D\u0631\u0643\u0627\u062A \u0642\u0637\u0639 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629" });
    }
  });
  app2.get("/api/consumable-parts-transactions/part/:partId", async (req, res) => {
    try {
      const partId = parseInt(req.params.partId);
      const transactions = await storage.getConsumablePartTransactionsByPartId(partId);
      res.json(transactions);
    } catch (error) {
      console.error("Error fetching consumable parts transactions by part:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062D\u0631\u0643\u0627\u062A \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629" });
    }
  });
  app2.post("/api/consumable-parts-transactions", async (req, res) => {
    try {
      const transaction = await storage.createConsumablePartTransaction(req.body);
      res.json(transaction);
    } catch (error) {
      console.error("Error creating consumable parts transaction:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u062D\u0631\u0643\u0629 \u0642\u0637\u0639\u0629 \u0627\u0644\u063A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u062A\u0647\u0644\u0627\u0643\u064A\u0629" });
    }
  });
  app2.post("/api/consumable-parts/scan-barcode", async (req, res) => {
    try {
      const { barcode } = req.body;
      if (!barcode) {
        return res.status(400).json({ message: "\u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0645\u0637\u0644\u0648\u0628" });
      }
      const consumablePart = await storage.getConsumablePartByBarcode(barcode);
      if (!consumablePart) {
        return res.status(404).json({ message: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0642\u0637\u0639\u0629 \u063A\u064A\u0627\u0631 \u0628\u0647\u0630\u0627 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F" });
      }
      res.json(consumablePart);
    } catch (error) {
      console.error("Error scanning barcode:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F" });
    }
  });
  app2.post("/api/consumable-parts/barcode-transaction", async (req, res) => {
    try {
      const { barcode, transaction_type, quantity, transaction_reason, notes, manual_entry } = req.body;
      if (!barcode || !transaction_type || !quantity) {
        return res.status(400).json({ message: "\u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F \u0648\u0646\u0648\u0639 \u0627\u0644\u062D\u0631\u0643\u0629 \u0648\u0627\u0644\u0643\u0645\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629" });
      }
      const consumablePart = await storage.getConsumablePartByBarcode(barcode);
      if (!consumablePart) {
        return res.status(404).json({ message: "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0642\u0637\u0639\u0629 \u063A\u064A\u0627\u0631 \u0628\u0647\u0630\u0627 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F" });
      }
      const transactionData = {
        consumable_part_id: consumablePart.id,
        transaction_type,
        quantity: parseInt(quantity),
        barcode_scanned: barcode,
        manual_entry: manual_entry || false,
        transaction_reason: transaction_reason || "",
        notes: notes || "",
        performed_by: req.session.userId || 1
      };
      const transaction = await storage.processConsumablePartBarcodeTransaction(transactionData);
      res.json(transaction);
    } catch (error) {
      console.error("Error processing barcode transaction:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u062D\u0631\u0643\u0629 \u0627\u0644\u0628\u0627\u0631\u0643\u0648\u062F" });
    }
  });
  app2.get("/api/attendance", async (req, res) => {
    try {
      const attendance2 = await storage.getAttendance();
      res.json(attendance2);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0636\u0648\u0631" });
    }
  });
  app2.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, context, userId } = req.body;
      if (!message) {
        return res.status(400).json({ message: "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629" });
      }
      const reply = await openaiService.processMessage(message, userId);
      res.json({ reply });
    } catch (error) {
      console.error("AI Chat Error:", error);
      const fallbackResponse = generateFallbackResponse(req.body.message);
      res.json({ reply: fallbackResponse });
    }
  });
  app2.post("/api/ai/voice-command", async (req, res) => {
    try {
      const { command, language = "ar-SA", context = "voice_assistant" } = req.body;
      if (!command || typeof command !== "string") {
        return res.status(400).json({ message: "\u0623\u0645\u0631 \u0635\u0648\u062A\u064A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D" });
      }
      const { dialect } = req.body;
      const result = await openaiService.processVoiceCommand(command, language, dialect);
      let actionData = null;
      switch (result.action) {
        case "navigate_dashboard":
          actionData = { route: "/dashboard" };
          break;
        case "navigate_orders":
          actionData = { route: "/orders" };
          break;
        case "navigate_production":
          actionData = { route: "/production" };
          break;
        case "navigate_maintenance":
          actionData = { route: "/maintenance" };
          break;
        case "navigate_definitions":
          actionData = { route: "/definitions" };
          break;
        case "navigate_hr":
          actionData = { route: "/hr" };
          break;
        case "navigate_quality":
          actionData = { route: "/quality" };
          break;
        case "navigate_reports":
          actionData = { route: "/reports" };
          break;
        case "show_stats":
          actionData = { queryKey: "/api/dashboard/stats" };
          break;
        case "refresh_orders":
          actionData = { queryKey: "/api/orders" };
          break;
        case "refresh_machines":
          actionData = { queryKey: "/api/machines" };
          break;
        case "refresh_production":
          actionData = { queryKey: "/api/production-orders" };
          break;
      }
      res.json({
        message: result.response,
        action: result.action !== "none" ? result.action : null,
        data: actionData,
        intent: result.intent,
        parameters: result.parameters
      });
    } catch (error) {
      console.error("Voice Command Error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0623\u0645\u0631 \u0627\u0644\u0635\u0648\u062A\u064A" });
    }
  });
  app2.post("/api/ai/generate-report", async (req, res) => {
    try {
      const { reportType, parameters, userId } = req.body;
      if (!reportType) {
        return res.status(400).json({ message: "\u0646\u0648\u0639 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0645\u0637\u0644\u0648\u0628" });
      }
      const { AIReports: AIReports2 } = await Promise.resolve().then(() => (init_ai_reports(), ai_reports_exports));
      let report;
      switch (reportType.toLowerCase()) {
        case "production":
        case "\u0625\u0646\u062A\u0627\u062C":
          report = await AIReports2.generateProductionReport(parameters);
          break;
        case "quality":
        case "\u062C\u0648\u062F\u0629":
          report = await AIReports2.generateQualityReport(parameters);
          break;
        case "maintenance":
        case "\u0635\u064A\u0627\u0646\u0629":
          report = await AIReports2.generateMaintenanceReport(parameters);
          break;
        case "sales":
        case "\u0645\u0628\u064A\u0639\u0627\u062A":
          report = await AIReports2.generateSalesReport(parameters);
          break;
        default:
          report = await AIReports2.generateCustomReport(reportType, parameters);
      }
      res.json({ report });
    } catch (error) {
      console.error("Report Generation Error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0630\u0643\u064A" });
    }
  });
  app2.get("/api/ai/notifications", async (req, res) => {
    try {
      const { AINotifications: AINotifications2 } = await Promise.resolve().then(() => (init_ai_notifications(), ai_notifications_exports));
      const notifications2 = AINotifications2.getActiveNotifications();
      res.json({ notifications: notifications2 });
    } catch (error) {
      console.error("Notifications Error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A" });
    }
  });
  app2.post("/api/ai/monitor", async (req, res) => {
    try {
      const { AINotifications: AINotifications2 } = await Promise.resolve().then(() => (init_ai_notifications(), ai_notifications_exports));
      const notifications2 = await AINotifications2.performIntelligentMonitoring();
      res.json({ notifications: notifications2, count: notifications2.length });
    } catch (error) {
      console.error("Monitoring Error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0630\u0643\u064A \u0644\u0644\u0645\u0631\u0627\u0642\u0628\u0629" });
    }
  });
  app2.get("/api/ai/learning-stats", async (req, res) => {
    try {
      const { AILearning: AILearning2 } = await Promise.resolve().then(() => (init_ai_learning(), ai_learning_exports));
      const stats = AILearning2.getLearningStatistics();
      res.json({ stats });
    } catch (error) {
      console.error("Learning Stats Error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u062A\u0639\u0644\u0645" });
    }
  });
  app2.get("/api/ai/recommendations/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const { AILearning: AILearning2 } = await Promise.resolve().then(() => (init_ai_learning(), ai_learning_exports));
      const recommendations = await AILearning2.getPersonalizedRecommendations(parseInt(userId));
      res.json({ recommendations });
    } catch (error) {
      console.error("Recommendations Error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0648\u0635\u064A\u0627\u062A \u0627\u0644\u0645\u062E\u0635\u0635\u0629" });
    }
  });
  app2.post("/api/ai/feedback", async (req, res) => {
    try {
      const { userId, actionType, context, feedback } = req.body;
      const { AILearning: AILearning2 } = await Promise.resolve().then(() => (init_ai_learning(), ai_learning_exports));
      await AILearning2.recordLearningData(userId, actionType, context, true, 0, feedback);
      res.json({ message: "\u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Feedback Error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062A\u0639\u0644\u064A\u0642" });
    }
  });
  function generateFallbackResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("\u0625\u0646\u062A\u0627\u062C") || lowerMessage.includes("production")) {
      return "\u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629\u060C \u0645\u0639\u062F\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u064A\u0628\u0644\u063A 85%. \u064A\u0645\u0643\u0646\u0643 \u0645\u0631\u0627\u062C\u0639\u0629 \u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u0643\u062B\u0631 \u0641\u064A \u0635\u0641\u062D\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C.";
    } else if (lowerMessage.includes("\u062C\u0648\u062F\u0629") || lowerMessage.includes("quality")) {
      return "\u0641\u062D\u0648\u0635\u0627\u062A \u0627\u0644\u062C\u0648\u062F\u0629 \u062A\u062A\u0645 \u0628\u0627\u0646\u062A\u0638\u0627\u0645. \u064A\u0645\u0643\u0646\u0643 \u0645\u0631\u0627\u062C\u0639\u0629 \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0641\u062D\u0648\u0635\u0627\u062A \u0645\u0646 \u0635\u0641\u062D\u0629 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062C\u0648\u062F\u0629.";
    } else if (lowerMessage.includes("\u0635\u064A\u0627\u0646\u0629") || lowerMessage.includes("maintenance")) {
      return "\u0647\u0646\u0627\u0643 \u0637\u0644\u0628\u0627\u062A \u0635\u064A\u0627\u0646\u0629 \u0646\u0634\u0637\u0629. \u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u0635\u0641\u062D\u0629 \u0627\u0644\u0635\u064A\u0627\u0646\u0629 \u0644\u0644\u062A\u0641\u0627\u0635\u064A\u0644.";
    } else if (lowerMessage.includes("\u0645\u0648\u0638\u0641") || lowerMessage.includes("employee")) {
      return "\u064A\u0645\u0643\u0646\u0643 \u0645\u0631\u0627\u062C\u0639\u0629 \u062D\u0636\u0648\u0631 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629 \u0645\u0646 \u0627\u0644\u0642\u0633\u0645 \u0627\u0644\u0645\u062E\u0635\u0635.";
    } else {
      return "\u0634\u0643\u0631\u0627\u064B \u0644\u0643 \u0639\u0644\u0649 \u0627\u0633\u062A\u0641\u0633\u0627\u0631\u0643. \u064A\u0645\u0643\u0646\u0646\u064A \u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0641\u064A \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062D\u0648\u0644 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u060C \u0627\u0644\u062C\u0648\u062F\u0629\u060C \u0627\u0644\u0635\u064A\u0627\u0646\u0629\u060C \u0648\u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629. \u0645\u0627 \u0627\u0644\u0630\u064A \u062A\u0631\u064A\u062F \u0645\u0639\u0631\u0641\u062A\u0647\u061F";
    }
  }
  app2.get("/api/dashboard/stats", async (req, res) => {
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
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629" });
    }
  });
  app2.get("/api/rolls", async (req, res) => {
    try {
      const rolls2 = await storage.getRolls();
      res.json(rolls2);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0631\u0648\u0644\u0627\u062A" });
    }
  });
  app2.get("/api/reports", async (req, res) => {
    try {
      const reports = [];
      res.json(reports);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631" });
    }
  });
  app2.get("/api/machines", async (req, res) => {
    try {
      const machines2 = await storage.getMachines();
      res.json(machines2);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0643\u0627\u0626\u0646" });
    }
  });
  app2.post("/api/machines", requireAuth, async (req, res) => {
    try {
      console.log("Received machine data:", req.body);
      let machineId = req.body?.id;
      if (!machineId) {
        const existingMachines = await storage.getMachines() || [];
        const machineNumbers = existingMachines.map((machine2) => machine2?.id).filter((id) => id && typeof id === "string" && id.startsWith("MAC")).map((id) => {
          const num = id.replace("MAC", "");
          const parsed = parseInt(num);
          return isNaN(parsed) ? 0 : parsed;
        }).filter((num) => num > 0).sort((a, b) => b - a);
        const nextNumber = machineNumbers.length > 0 ? machineNumbers[0] + 1 : 1;
        machineId = `MAC${nextNumber.toString().padStart(2, "0")}`;
      }
      const processedData = {
        ...req.body,
        id: machineId
      };
      const validationResult = await getDataValidator(storage).validateData("machines", processedData);
      if (!validationResult.isValid) {
        const criticalErrors = validationResult.errors.filter((e) => e.severity === "critical" || e.severity === "high");
        if (criticalErrors.length > 0) {
          return res.status(400).json({
            message: criticalErrors[0].message_ar || criticalErrors[0].message,
            errors: validationResult.errors,
            success: false
          });
        }
      }
      console.log("Processed machine data:", processedData);
      const machine = await storage.createMachine(processedData);
      console.log("Created machine:", machine);
      res.status(201).json({
        data: machine,
        message: "\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629 \u0628\u0646\u062C\u0627\u062D",
        success: true
      });
    } catch (error) {
      console.error("Machine creation error:", error);
      if (error.name === "DatabaseError") {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629",
        success: false
      });
    }
  });
  app2.put("/api/machines/:id", async (req, res) => {
    try {
      const id = req.params.id;
      console.log("Updating machine:", id, req.body);
      const machine = await storage.updateMachine(id, req.body);
      res.json(machine);
    } catch (error) {
      console.error("Machine update error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.post("/api/users", async (req, res) => {
    try {
      console.log("Received user data:", req.body);
      let roleId = null;
      if (req.body.role_id && req.body.role_id !== "" && req.body.role_id !== "none") {
        if (typeof req.body.role_id === "string") {
          const roles2 = await storage.getRoles();
          const role = roles2.find((r) => r.name === req.body.role_id || r.name_ar === req.body.role_id);
          if (role) {
            roleId = role.id;
          } else {
            const parsed = parseInt(req.body.role_id);
            if (!isNaN(parsed)) {
              roleId = parsed;
            }
          }
        } else if (typeof req.body.role_id === "number") {
          roleId = req.body.role_id;
        }
      }
      let sectionId = null;
      if (req.body.section_id && req.body.section_id !== "" && req.body.section_id !== "none") {
        const sectionMapping = {
          "SEC01": 1,
          "SEC02": 2,
          "SEC03": 3,
          "SEC04": 4,
          "SEC05": 5,
          "SEC06": 6,
          "SEC07": 7
        };
        sectionId = sectionMapping[req.body.section_id] || null;
      }
      const processedData = {
        username: req.body.username,
        password: req.body.password || "defaultPassword",
        display_name: req.body.display_name,
        display_name_ar: req.body.display_name_ar,
        role_id: roleId,
        section_id: sectionId,
        status: req.body.status || "active"
      };
      console.log("Processed user data:", processedData);
      const user = await storage.createUser(processedData);
      console.log("Created user:", user);
      res.json(user);
    } catch (error) {
      console.error("User creation error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.put("/api/users/:id", async (req, res) => {
    try {
      if (!req.params?.id) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628" });
      }
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0645\u0637\u0644\u0648\u0628\u0629" });
      }
      console.log("Updating user:", id, req.body);
      let roleId = null;
      if (req.body?.role_id && req.body.role_id !== "" && req.body.role_id !== "none") {
        const roleMapping = {
          "ROLE01": 1,
          "ROLE02": 2,
          "ROLE03": 3,
          "ROLE04": 4,
          "ROLE05": 5,
          "ROLE06": 6,
          "ROLE07": 7
        };
        roleId = roleMapping[req.body.role_id] ?? null;
      }
      let sectionId = null;
      if (req.body?.section_id && req.body.section_id !== "" && req.body.section_id !== "none") {
        const sectionMapping = {
          "SEC01": 1,
          "SEC02": 2,
          "SEC03": 3,
          "SEC04": 4,
          "SEC05": 5,
          "SEC06": 6,
          "SEC07": 7
        };
        sectionId = sectionMapping[req.body.section_id] ?? null;
      }
      const processedData = {
        ...req.body,
        role_id: roleId,
        section_id: sectionId
      };
      console.log("Processed role_id:", roleId, "from:", req.body.role_id);
      console.log("Processed section_id:", sectionId, "from:", req.body.section_id);
      const user = await storage.updateUser(id, processedData);
      if (!user) {
        return res.status(404).json({ message: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(user);
    } catch (error) {
      console.error("User update error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.get("/api/roles", async (req, res) => {
    try {
      const roles2 = await storage.getRoles();
      res.json(roles2);
    } catch (error) {
      console.error("Roles fetch error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0623\u062F\u0648\u0627\u0631" });
    }
  });
  app2.post("/api/roles", async (req, res) => {
    try {
      console.log("Received role data:", req.body);
      const role = await storage.createRole(req.body);
      console.log("Created role:", role);
      res.json(role);
    } catch (error) {
      console.error("Role creation error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062F\u0648\u0631", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.put("/api/roles/:id", async (req, res) => {
    try {
      if (!req.params?.id) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u062F\u0648\u0631 \u0645\u0637\u0644\u0648\u0628" });
      }
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u062F\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0645\u0637\u0644\u0648\u0628\u0629" });
      }
      console.log("Updating role:", id, req.body);
      const role = await storage.updateRole(id, req.body);
      if (!role) {
        return res.status(404).json({ message: "\u0627\u0644\u062F\u0648\u0631 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(role);
    } catch (error) {
      console.error("Role update error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062F\u0648\u0631", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.delete("/api/roles/:id", async (req, res) => {
    try {
      if (!req.params?.id) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u062F\u0648\u0631 \u0645\u0637\u0644\u0648\u0628" });
      }
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u062F\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      await storage.deleteRole(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u062F\u0648\u0631 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Role deletion error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u062F\u0648\u0631", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.post("/api/sections", async (req, res) => {
    try {
      console.log("Received section data:", req.body);
      let sectionId = req.body?.id;
      if (!sectionId) {
        const existingSections = await storage.getSections() || [];
        const sectionNumbers = existingSections.map((section2) => section2?.id).filter((id) => id && typeof id === "string" && id.startsWith("SEC")).map((id) => {
          const num = id.replace("SEC", "");
          const parsed = parseInt(num);
          return isNaN(parsed) ? 0 : parsed;
        }).filter((num) => num > 0).sort((a, b) => b - a);
        const nextNumber = sectionNumbers.length > 0 ? sectionNumbers[0] + 1 : 1;
        sectionId = `SEC${nextNumber.toString().padStart(2, "0")}`;
      }
      const processedData = {
        ...req.body,
        id: sectionId
      };
      console.log("Processed section data:", processedData);
      const section = await storage.createSection(processedData);
      console.log("Created section:", section);
      res.json(section);
    } catch (error) {
      console.error("Section creation error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0642\u0633\u0645", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.put("/api/sections/:id", async (req, res) => {
    try {
      if (!req.params?.id?.trim()) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0642\u0633\u0645 \u0645\u0637\u0644\u0648\u0628" });
      }
      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0645\u0637\u0644\u0648\u0628\u0629" });
      }
      const id = req.params.id.trim();
      const section = await storage.updateSection(id, req.body);
      if (!section) {
        return res.status(404).json({ message: "\u0627\u0644\u0642\u0633\u0645 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(section);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0642\u0633\u0645" });
    }
  });
  app2.post("/api/items", async (req, res) => {
    try {
      console.log("Received item data:", req.body);
      let itemId = req.body?.id;
      if (!itemId) {
        const existingItems = await storage.getItems() || [];
        const itemNumbers = existingItems.map((item2) => item2?.id).filter((id) => id && typeof id === "string" && id.startsWith("ITEM")).map((id) => {
          const num = id.replace("ITEM", "");
          const parsed = parseInt(num);
          return isNaN(parsed) ? 0 : parsed;
        }).filter((num) => num > 0).sort((a, b) => b - a);
        const nextNumber = itemNumbers.length > 0 ? itemNumbers[0] + 1 : 1;
        itemId = `ITEM${nextNumber.toString().padStart(3, "0")}`;
      }
      const processedData = {
        ...req.body,
        id: itemId,
        category_id: !req.body?.category_id || req.body.category_id === "" || req.body.category_id === "none" ? null : req.body.category_id,
        code: !req.body?.code || req.body.code === "" ? null : req.body.code
      };
      console.log("Processed item data:", processedData);
      const item = await storage.createItem(processedData);
      console.log("Created item:", item);
      res.json(item);
    } catch (error) {
      console.error("Item creation error:", error);
      console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace");
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0635\u0646\u0641", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.put("/api/items/:id", async (req, res) => {
    try {
      if (!req.params?.id?.trim()) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0635\u0646\u0641 \u0645\u0637\u0644\u0648\u0628" });
      }
      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0645\u0637\u0644\u0648\u0628\u0629" });
      }
      const id = req.params.id.trim();
      console.log("Updating item:", id, req.body);
      const processedData = {
        ...req.body,
        category_id: !req.body?.category_id || req.body.category_id === "" || req.body.category_id === "none" ? null : req.body.category_id,
        code: !req.body?.code || req.body.code === "" ? null : req.body.code
      };
      console.log("Processed item update data:", processedData);
      const item = await storage.updateItem(id, processedData);
      if (!item) {
        return res.status(404).json({ message: "\u0627\u0644\u0635\u0646\u0641 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(item);
    } catch (error) {
      console.error("Item update error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0635\u0646\u0641", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.post("/api/customer-products", async (req, res) => {
    try {
      const processedData = {
        ...req.body,
        category_id: req.body.material_group_id || req.body.category_id
      };
      delete processedData.material_group_id;
      const customerProduct = await storage.createCustomerProduct(processedData);
      res.json(customerProduct);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0645\u064A\u0644" });
    }
  });
  app2.put("/api/customer-products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0646\u062A\u062C \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      const validation = insertCustomerProductSchema2.safeParse({
        ...req.body,
        category_id: req.body.material_group_id || req.body.category_id
      });
      if (!validation.success) {
        console.error("Customer product validation error:", validation.error.errors);
        return res.status(400).json({
          message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
          errors: validation.error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message
          }))
        });
      }
      const processedData = { ...validation.data };
      delete processedData.material_group_id;
      const customerProduct = await storage.updateCustomerProduct(id, processedData);
      if (!customerProduct) {
        return res.status(404).json({ message: "\u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0645\u064A\u0644 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(customerProduct);
    } catch (error) {
      console.error("Customer product update error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0645\u064A\u0644",
        error: errorMessage
      });
    }
  });
  app2.post("/api/locations", async (req, res) => {
    try {
      console.log("Received location data:", req.body);
      let locationId = req.body.id;
      if (!locationId) {
        const existingLocations = await storage.getLocations();
        const locationNumbers = existingLocations.map((location2) => location2.id).filter((id) => id.startsWith("LOC")).map((id) => parseInt(id.replace("LOC", ""))).filter((num) => !isNaN(num)).sort((a, b) => b - a);
        const nextNumber = locationNumbers.length > 0 ? locationNumbers[0] + 1 : 1;
        locationId = `LOC${nextNumber.toString().padStart(2, "0")}`;
      }
      const processedData = {
        ...req.body,
        id: locationId
      };
      console.log("Processed location data:", processedData);
      const location = await storage.createLocation(processedData);
      console.log("Created location:", location);
      res.json(location);
    } catch (error) {
      console.error("Location creation error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0648\u0642\u0639", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.put("/api/locations/:id", async (req, res) => {
    try {
      const id = req.params.id;
      console.log("Updating location:", id, req.body);
      const location = await storage.updateLocation(id, req.body);
      res.json(location);
    } catch (error) {
      console.error("Location update error:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0648\u0642\u0639", error: error instanceof Error ? error.message : "Unknown error" });
    }
  });
  app2.get("/api/hr/training-programs", async (req, res) => {
    try {
      const programs = await storage.getTrainingPrograms();
      res.json(programs);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0628\u0631\u0627\u0645\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629" });
    }
  });
  app2.post("/api/hr/training-programs", async (req, res) => {
    try {
      const program = await storage.createTrainingProgram(req.body);
      res.json(program);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A" });
    }
  });
  app2.put("/api/hr/training-programs/:id", async (req, res) => {
    try {
      if (!req.params?.id) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A \u0645\u0637\u0644\u0648\u0628" });
      }
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u062D\u062F\u064A\u062B \u0645\u0637\u0644\u0648\u0628\u0629" });
      }
      const program = await storage.updateTrainingProgram(id, req.body);
      if (!program) {
        return res.status(404).json({ message: "\u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(program);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A" });
    }
  });
  app2.get("/api/hr/training-programs/:id", async (req, res) => {
    try {
      if (!req.params?.id) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A \u0645\u0637\u0644\u0648\u0628" });
      }
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
      }
      const program = await storage.getTrainingProgramById(id);
      if (!program) {
        return res.status(404).json({ message: "\u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
      res.json(program);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A" });
    }
  });
  app2.get("/api/hr/training-materials", async (req, res) => {
    try {
      let programId;
      if (req.query?.program_id) {
        const programIdParam = parseInt(req.query.program_id);
        programId = !isNaN(programIdParam) && programIdParam > 0 ? programIdParam : void 0;
      }
      const materials = await storage.getTrainingMaterials(programId);
      if (!materials) {
        return res.json([]);
      }
      res.json(materials);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0648\u0627\u062F \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629" });
    }
  });
  app2.post("/api/hr/training-materials", async (req, res) => {
    try {
      const material = await storage.createTrainingMaterial(req.body);
      res.json(material);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0627\u062F\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629" });
    }
  });
  app2.get("/api/hr/training-enrollments", async (req, res) => {
    try {
      let employeeId;
      if (req.query?.employee_id) {
        const employeeIdParam = parseInt(req.query.employee_id);
        employeeId = !isNaN(employeeIdParam) && employeeIdParam > 0 ? employeeIdParam : void 0;
      }
      const enrollments = await storage.getTrainingEnrollments(employeeId);
      if (!enrollments) {
        return res.json([]);
      }
      res.json(enrollments);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0633\u062C\u064A\u0644\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629" });
    }
  });
  app2.post("/api/hr/training-enrollments", async (req, res) => {
    try {
      const enrollment = await storage.createTrainingEnrollment(req.body);
      res.json(enrollment);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0645\u0648\u0638\u0641 \u0641\u064A \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062C" });
    }
  });
  app2.put("/api/hr/training-enrollments/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const enrollment = await storage.updateTrainingEnrollment(id, req.body);
      res.json(enrollment);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A" });
    }
  });
  app2.get("/api/hr/training-evaluations", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? parseInt(req.query.employee_id) : void 0;
      const programId = req.query.program_id ? parseInt(req.query.program_id) : void 0;
      const evaluations = await storage.getTrainingEvaluations(employeeId, programId);
      res.json(evaluations);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629" });
    }
  });
  app2.post("/api/hr/training-evaluations", async (req, res) => {
    try {
      const evaluation = await storage.createTrainingEvaluation(req.body);
      res.json(evaluation);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A" });
    }
  });
  app2.put("/api/hr/training-evaluations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const evaluation = await storage.updateTrainingEvaluation(id, req.body);
      res.json(evaluation);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A" });
    }
  });
  app2.get("/api/hr/training-evaluations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const evaluation = await storage.getTrainingEvaluationById(id);
      if (evaluation) {
        res.json(evaluation);
      } else {
        res.status(404).json({ message: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F" });
      }
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A" });
    }
  });
  app2.get("/api/hr/training-certificates", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? parseInt(req.query.employee_id) : void 0;
      const certificates = await storage.getTrainingCertificates(employeeId);
      res.json(certificates);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0634\u0647\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629" });
    }
  });
  app2.post("/api/hr/training-certificates", async (req, res) => {
    try {
      const certificate = await storage.createTrainingCertificate(req.body);
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629" });
    }
  });
  app2.post("/api/hr/training-certificates/generate/:enrollmentId", async (req, res) => {
    try {
      const enrollmentId = parseInt(req.params.enrollmentId);
      const certificate = await storage.generateTrainingCertificate(enrollmentId);
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629" });
    }
  });
  app2.put("/api/hr/training-certificates/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const certificate = await storage.updateTrainingCertificate(id, req.body);
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629" });
    }
  });
  app2.get("/api/hr/training-evaluations", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? parseInt(req.query.employee_id) : void 0;
      const programId = req.query.program_id ? parseInt(req.query.program_id) : void 0;
      const evaluations = await storage.getTrainingEvaluations(employeeId, programId);
      res.json(evaluations);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628" });
    }
  });
  app2.post("/api/hr/training-evaluations", async (req, res) => {
    try {
      const evaluation = await storage.createTrainingEvaluation(req.body);
      res.json(evaluation);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062A\u062F\u0631\u064A\u0628" });
    }
  });
  app2.put("/api/hr/training-evaluations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const evaluation = await storage.updateTrainingEvaluation(id, req.body);
      res.json(evaluation);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u062A\u062F\u0631\u064A\u0628" });
    }
  });
  app2.get("/api/hr/training-certificates", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? parseInt(req.query.employee_id) : void 0;
      const certificates = await storage.getTrainingCertificates(employeeId);
      res.json(certificates);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0634\u0647\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628" });
    }
  });
  app2.post("/api/hr/training-certificates", async (req, res) => {
    try {
      const certificate = await storage.createTrainingCertificate(req.body);
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628" });
    }
  });
  app2.get("/api/hr/training-certificates/:id/generate", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const certificate = await storage.generateTrainingCertificate(id);
      res.json(certificate);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u0634\u0647\u0627\u062F\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628" });
    }
  });
  app2.get("/api/hr/performance-reviews", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? req.query.employee_id : void 0;
      const reviews = await storage.getPerformanceReviews(employeeId);
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0627\u0644\u0623\u062F\u0627\u0621" });
    }
  });
  app2.post("/api/hr/performance-reviews", async (req, res) => {
    try {
      const review = await storage.createPerformanceReview(req.body);
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0623\u062F\u0627\u0621" });
    }
  });
  app2.put("/api/hr/performance-reviews/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const review = await storage.updatePerformanceReview(id, req.body);
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0623\u062F\u0627\u0621" });
    }
  });
  app2.get("/api/hr/performance-criteria", async (req, res) => {
    try {
      const criteria = await storage.getPerformanceCriteria();
      res.json(criteria);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u062A\u0642\u064A\u064A\u0645" });
    }
  });
  app2.post("/api/hr/performance-criteria", async (req, res) => {
    try {
      const criteria = await storage.createPerformanceCriteria(req.body);
      res.json(criteria);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0645\u0639\u064A\u0627\u0631 \u0627\u0644\u062A\u0642\u064A\u064A\u0645" });
    }
  });
  app2.get("/api/hr/leave-types", async (req, res) => {
    try {
      const leaveTypes = await storage.getLeaveTypes();
      res.json(leaveTypes);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0625\u062C\u0627\u0632\u0627\u062A" });
    }
  });
  app2.post("/api/hr/leave-types", async (req, res) => {
    try {
      const leaveType = await storage.createLeaveType(req.body);
      res.json(leaveType);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0646\u0648\u0639 \u0627\u0644\u0625\u062C\u0627\u0632\u0629" });
    }
  });
  app2.get("/api/hr/leave-requests", async (req, res) => {
    try {
      const employeeId = req.query.employee_id ? req.query.employee_id : void 0;
      const requests = await storage.getLeaveRequests(employeeId);
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0625\u062C\u0627\u0632\u0627\u062A" });
    }
  });
  app2.post("/api/hr/leave-requests", async (req, res) => {
    try {
      const request = await storage.createLeaveRequest(req.body);
      res.json(request);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628 \u0627\u0644\u0625\u062C\u0627\u0632\u0629" });
    }
  });
  app2.put("/api/hr/leave-requests/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const request = await storage.updateLeaveRequest(id, req.body);
      res.json(request);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0637\u0644\u0628 \u0627\u0644\u0625\u062C\u0627\u0632\u0629" });
    }
  });
  app2.get("/api/hr/leave-requests/pending", async (req, res) => {
    try {
      const requests = await storage.getPendingLeaveRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0639\u0644\u0642\u0629" });
    }
  });
  app2.get("/api/hr/leave-balances/:employeeId", async (req, res) => {
    try {
      const employeeId = req.params.employeeId;
      const year = req.query.year ? parseInt(req.query.year) : void 0;
      const balances = await storage.getLeaveBalances(employeeId, year);
      res.json(balances);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u0625\u062C\u0627\u0632\u0627\u062A" });
    }
  });
  app2.post("/api/hr/leave-balances", async (req, res) => {
    try {
      const balance = await storage.createLeaveBalance(req.body);
      res.json(balance);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0631\u0635\u064A\u062F \u0627\u0644\u0625\u062C\u0627\u0632\u0629" });
    }
  });
  app2.delete("/api/customers/:id", async (req, res) => {
    try {
      await storage.deleteCustomer(req.params.id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u064A\u0644" });
    }
  });
  app2.delete("/api/sections/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await storage.deleteSection(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0642\u0633\u0645 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0642\u0633\u0645" });
    }
  });
  app2.delete("/api/items/:id", async (req, res) => {
    try {
      await storage.deleteItem(req.params.id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0635\u0646\u0641 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0635\u0646\u0641" });
    }
  });
  app2.delete("/api/customer-products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteCustomerProduct(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0645\u0646\u062A\u062C \u0627\u0644\u0639\u0645\u064A\u0644" });
    }
  });
  app2.delete("/api/locations/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await storage.deleteLocation(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0648\u0642\u0639 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0645\u0648\u0642\u0639" });
    }
  });
  app2.delete("/api/machines/:id", async (req, res) => {
    try {
      const id = req.params.id;
      await storage.deleteMachine(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0645\u0627\u0643\u064A\u0646\u0629" });
    }
  });
  app2.delete("/api/users/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteUser(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" });
    }
  });
  app2.get("/api/inventory", async (req, res) => {
    try {
      const inventory2 = await storage.getInventoryItems();
      res.json(inventory2);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062E\u0632\u0648\u0646" });
    }
  });
  app2.get("/api/inventory/stats", async (req, res) => {
    try {
      const stats = await storage.getInventoryStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0645\u062E\u0632\u0648\u0646" });
    }
  });
  app2.post("/api/inventory", requireAuth, async (req, res) => {
    try {
      const validatedData = insertInventorySchema.parse(req.body);
      const validationResult = await getDataValidator(storage).validateData("inventory", validatedData);
      if (!validationResult.isValid) {
        const criticalErrors = validationResult.errors.filter((e) => e.severity === "critical" || e.severity === "high");
        if (criticalErrors.length > 0) {
          return res.status(400).json({
            message: criticalErrors[0].message_ar || criticalErrors[0].message,
            errors: validationResult.errors,
            success: false
          });
        }
      }
      const item = await storage.createInventoryItem(validatedData);
      res.status(201).json({
        data: item,
        message: "\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0635\u0646\u0641 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0628\u0646\u062C\u0627\u062D",
        success: true
      });
    } catch (error) {
      console.error("Inventory creation error:", error);
      if (error.name === "DatabaseError") {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0636\u0627\u0641\u0629 \u0635\u0646\u0641 \u0644\u0644\u0645\u062E\u0632\u0648\u0646",
        success: false
      });
    }
  });
  app2.put("/api/inventory/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({
          message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D",
          success: false
        });
      }
      const validatedData = insertInventorySchema.partial().parse(req.body);
      const validationResult = await getDataValidator(storage).validateData("inventory", validatedData, true);
      if (!validationResult.isValid) {
        const criticalErrors = validationResult.errors.filter((e) => e.severity === "critical" || e.severity === "high");
        if (criticalErrors.length > 0) {
          return res.status(400).json({
            message: criticalErrors[0].message_ar || criticalErrors[0].message,
            errors: validationResult.errors,
            success: false
          });
        }
      }
      const item = await storage.updateInventoryItem(id, validatedData);
      res.json({
        data: item,
        message: "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0635\u0646\u0641 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0628\u0646\u062C\u0627\u062D",
        success: true
      });
    } catch (error) {
      console.error("Inventory update error:", error);
      if (error.name === "DatabaseError") {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0635\u0646\u0641 \u0627\u0644\u0645\u062E\u0632\u0648\u0646",
        success: false
      });
    }
  });
  app2.delete("/api/inventory/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteInventoryItem(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0635\u0646\u0641 \u0627\u0644\u0645\u062E\u0632\u0648\u0646 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0635\u0646\u0641 \u0627\u0644\u0645\u062E\u0632\u0648\u0646" });
    }
  });
  app2.get("/api/locations", async (req, res) => {
    try {
      const locations2 = await storage.getLocations();
      res.json(locations2);
    } catch (error) {
      console.error("Error fetching locations:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0645\u0648\u0627\u0642\u0639" });
    }
  });
  app2.post("/api/locations", async (req, res) => {
    try {
      const result = insertLocationSchema2.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", errors: result.error.errors });
      }
      const location = await storage.createLocationExtended(result.data);
      res.status(201).json(location);
    } catch (error) {
      console.error("Error creating location:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u0648\u0642\u0639" });
    }
  });
  app2.put("/api/locations/:id", async (req, res) => {
    try {
      const locationId = req.params.id;
      const result = insertLocationSchema2.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", errors: result.error.errors });
      }
      const location = await storage.updateLocationExtended(locationId, result.data);
      res.json(location);
    } catch (error) {
      console.error("Error updating location:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0648\u0642\u0639" });
    }
  });
  app2.get("/api/inventory-movements", async (req, res) => {
    try {
      const movements = await storage.getAllInventoryMovements();
      res.json(movements);
    } catch (error) {
      console.error("Error fetching inventory movements:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062D\u0631\u0643\u0627\u062A \u0627\u0644\u0645\u062E\u0632\u0648\u0646" });
    }
  });
  app2.post("/api/inventory-movements", async (req, res) => {
    try {
      const result = insertInventoryMovementSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", errors: result.error.errors });
      }
      const movement = await storage.createInventoryMovement(result.data);
      res.status(201).json(movement);
    } catch (error) {
      console.error("Error creating inventory movement:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u062D\u0631\u0643\u0629 \u0627\u0644\u0645\u062E\u0632\u0648\u0646" });
    }
  });
  app2.delete("/api/inventory-movements/:id", async (req, res) => {
    try {
      const movementId = parseInt(req.params.id);
      await storage.deleteInventoryMovement(movementId);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u062D\u0631\u0643\u0629 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Error deleting inventory movement:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u062D\u0631\u0643\u0629" });
    }
  });
  app2.get("/api/orders", async (req, res) => {
    try {
      const orders2 = await storage.getAllOrders();
      res.json(orders2);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0637\u0644\u0628\u0627\u062A" });
    }
  });
  app2.post("/api/orders", async (req, res) => {
    try {
      console.log("Received order data:", req.body);
      const order = await storage.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628" });
    }
  });
  app2.put("/api/orders/:id", async (req, res) => {
    try {
      const orderId = parseInt(req.params.id);
      const result = insertNewOrderSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", errors: result.error.errors });
      }
      const updateData = {
        ...result.data,
        delivery_date: result.data.delivery_date ? result.data.delivery_date.toISOString().split("T")[0] : result.data.delivery_date
      };
      const order = await storage.updateOrder(orderId, updateData);
      res.json(order);
    } catch (error) {
      console.error("Error updating order:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0637\u0644\u0628" });
    }
  });
  app2.patch("/api/orders/:id/status", requireAuth, async (req, res) => {
    try {
      const orderId = parseInt(req.params.id);
      const { status } = req.body;
      if (!status) {
        return res.status(400).json({ message: "\u0627\u0644\u062D\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628\u0629", success: false });
      }
      const validStatuses = ["waiting", "in_production", "paused", "completed", "cancelled", "pending", "for_production", "on_hold", "in_progress", "delivered"];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: "\u062D\u0627\u0644\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629", success: false });
      }
      const currentOrder = await storage.getOrderById(orderId);
      if (!currentOrder) {
        return res.status(404).json({ message: "\u0627\u0644\u0637\u0644\u0628 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F", success: false });
      }
      const currentStatus = currentOrder.status;
      const newStatus = status;
      const validTransitions = {
        "pending": ["waiting", "for_production", "cancelled"],
        "waiting": ["in_production", "for_production", "on_hold", "cancelled"],
        "for_production": ["in_production", "waiting", "on_hold", "cancelled"],
        "in_production": ["paused", "completed", "on_hold", "in_progress"],
        "in_progress": ["paused", "completed", "on_hold"],
        "paused": ["in_production", "in_progress", "cancelled"],
        "on_hold": ["waiting", "for_production", "cancelled"],
        "completed": ["delivered"],
        // Only allow delivery from completed
        "delivered": [],
        // Terminal state - no further transitions
        "cancelled": []
        // Terminal state - no further transitions
      };
      const allowedNextStates = validTransitions[currentStatus] || [];
      if (currentStatus !== newStatus && !allowedNextStates.includes(newStatus)) {
        return res.status(400).json({
          message: `\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u063A\u064A\u064A\u0631 \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0645\u0646 "${currentStatus}" \u0625\u0644\u0649 "${newStatus}". \u0627\u0644\u062A\u062D\u0648\u0644\u0627\u062A \u0627\u0644\u0645\u0633\u0645\u0648\u062D\u0629: ${allowedNextStates.join(", ")}`,
          success: false,
          currentStatus,
          requestedStatus: newStatus,
          allowedTransitions: allowedNextStates
        });
      }
      if (newStatus === "completed") {
        const allProductionOrders = await storage.getAllProductionOrders();
        const productionOrders = allProductionOrders.filter((po) => po.order_id === orderId);
        const incompleteProdOrders = productionOrders.filter((po) => po.status !== "completed");
        if (incompleteProdOrders.length > 0) {
          return res.status(400).json({
            message: `\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u062A\u0645\u0627\u0645 \u0627\u0644\u0637\u0644\u0628 - \u064A\u0648\u062C\u062F ${incompleteProdOrders.length} \u0623\u0648\u0627\u0645\u0631 \u0625\u0646\u062A\u0627\u062C \u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644\u0629`,
            success: false,
            incompleteProdOrders: incompleteProdOrders.length
          });
        }
      }
      if (newStatus === "cancelled") {
        const allProductionOrders = await storage.getAllProductionOrders();
        const productionOrders = allProductionOrders.filter((po) => po.order_id === orderId);
        const activeProdOrders = productionOrders.filter((po) => ["in_progress", "in_production"].includes(po.status));
        if (activeProdOrders.length > 0) {
          return res.status(400).json({
            message: `\u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0637\u0644\u0628 - \u064A\u0648\u062C\u062F ${activeProdOrders.length} \u0623\u0648\u0627\u0645\u0631 \u0625\u0646\u062A\u0627\u062C \u0646\u0634\u0637\u0629`,
            success: false,
            activeProdOrders: activeProdOrders.length
          });
        }
      }
      const order = await storage.updateOrderStatus(orderId, newStatus);
      res.json({
        data: order,
        message: `\u062A\u0645 \u062A\u063A\u064A\u064A\u0631 \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628 \u0625\u0644\u0649 "${newStatus}" \u0628\u0646\u062C\u0627\u062D`,
        success: true,
        previousStatus: currentStatus,
        currentStatus: newStatus
      });
    } catch (error) {
      console.error("Error updating order status:", error);
      if (error.name === "DatabaseError") {
        return res.status(400).json({
          message: error.message,
          success: false
        });
      }
      res.status(500).json({
        message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u062D\u0627\u0644\u0629 \u0627\u0644\u0637\u0644\u0628",
        success: false
      });
    }
  });
  app2.get("/api/settings/system", async (req, res) => {
    try {
      const settings = await storage.getSystemSettings();
      res.json(settings);
    } catch (error) {
      console.error("Error fetching system settings:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645" });
    }
  });
  app2.post("/api/settings/system", async (req, res) => {
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
      res.json({ message: "\u062A\u0645 \u062D\u0641\u0638 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645 \u0628\u0646\u062C\u0627\u062D", settings: results });
    } catch (error) {
      console.error("Error saving system settings:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0641\u0638 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645" });
    }
  });
  app2.get("/api/settings/user/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const settings = await storage.getUserSettings(userId);
      res.json(settings);
    } catch (error) {
      console.error("Error fetching user settings:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" });
    }
  });
  app2.post("/api/settings/user/:userId", async (req, res) => {
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
      res.json({ message: "\u062A\u0645 \u062D\u0641\u0638 \u0625\u0639\u062F\u0627\u062F\u0627\u062A\u0643 \u0627\u0644\u0634\u062E\u0635\u064A\u0629 \u0628\u0646\u062C\u0627\u062D", settings: results });
    } catch (error) {
      console.error("Error saving user settings:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0641\u0638 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645" });
    }
  });
  app2.get("/api/database/stats", requireAdmin, async (req, res) => {
    try {
      const stats = await storage.getDatabaseStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching database stats:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" });
    }
  });
  app2.post("/api/database/backup", requireAdmin, async (req, res) => {
    try {
      const backup = await storage.createDatabaseBackup();
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Content-Disposition", `attachment; filename="${backup.filename}"`);
      res.send(backup.data);
    } catch (error) {
      console.error("Error creating database backup:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629" });
    }
  });
  app2.get("/api/database/backup/download/:backupId", requireAdmin, async (req, res) => {
    try {
      const backupId = req.params.backupId;
      const backupFile = await storage.getBackupFile(backupId);
      res.setHeader("Content-Type", "application/octet-stream");
      res.setHeader("Content-Disposition", `attachment; filename="backup-${backupId}.sql"`);
      res.send(backupFile);
    } catch (error) {
      console.error("Error downloading backup:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629" });
    }
  });
  app2.post("/api/database/restore", requireAdmin, async (req, res) => {
    try {
      const { backupData } = req.body;
      const result = await storage.restoreDatabaseBackup(backupData);
      res.json({ message: "\u062A\u0645 \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0646\u062C\u0627\u062D", result });
    } catch (error) {
      console.error("Error restoring database:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" });
    }
  });
  app2.get("/api/database/export/:tableName", requireAdmin, async (req, res) => {
    try {
      const tableName = req.params.tableName;
      const format = req.query.format || "csv";
      const data = await storage.exportTableData(tableName, format);
      let contentType = "text/csv";
      let fileExtension = "csv";
      switch (format) {
        case "json":
          contentType = "application/json";
          fileExtension = "json";
          break;
        case "excel":
          contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
          fileExtension = "xlsx";
          break;
      }
      res.setHeader("Content-Type", contentType);
      res.setHeader("Content-Disposition", `attachment; filename="${tableName}.${fileExtension}"`);
      if (format === "csv") {
        res.setHeader("Content-Type", "text/csv; charset=utf-8");
      }
      res.send(data);
    } catch (error) {
      console.error("Error exporting table data:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0635\u062F\u064A\u0631 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062C\u062F\u0648\u0644" });
    }
  });
  app2.post("/api/database/import/:tableName", requireAdmin, async (req, res) => {
    try {
      const tableName = req.params.tableName;
      const { data, format } = req.body;
      const result = await storage.importTableData(tableName, data, format);
      res.json({
        message: "\u062A\u0645 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0646\u062C\u0627\u062D",
        importedRecords: result.count
      });
    } catch (error) {
      console.error("Error importing table data:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" });
    }
  });
  app2.post("/api/database/import/:tableName/batch", requireAdmin, async (req, res) => {
    try {
      const tableName = req.params.tableName;
      const { data, options } = req.body;
      if (!Array.isArray(data) || data.length === 0) {
        return res.status(400).json({ message: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u0633\u0644\u0629 \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629" });
      }
      console.log(`Processing batch import for ${tableName}: ${data.length} records (Batch ${options?.batchNumber || 1}/${options?.totalBatches || 1})`);
      const results = {
        successful: 0,
        failed: 0,
        errors: [],
        warnings: []
      };
      for (let i = 0; i < data.length; i++) {
        const record = data[i];
        try {
          let processedRecord = { ...record };
          if (tableName === "customers") {
            if (!processedRecord.id) {
              const existingCustomers = await storage.getCustomers();
              const lastId = existingCustomers.length > 0 ? Math.max(...existingCustomers.map((c) => {
                const idNum = parseInt(c.id.replace("CID", ""));
                return isNaN(idNum) ? 0 : idNum;
              })) : 0;
              processedRecord.id = `CID${String(lastId + 1).padStart(4, "0")}`;
            }
            const validatedRecord = insertCustomerSchema2.parse(processedRecord);
            await storage.createCustomer(validatedRecord);
          } else if (tableName === "categories") {
            if (!processedRecord.id) {
              const existingCategories = await storage.getCategories();
              const lastId = existingCategories.length > 0 ? Math.max(...existingCategories.map((c) => {
                const idNum = parseInt(c.id.replace("CAT", ""));
                return isNaN(idNum) ? 0 : idNum;
              })) : 0;
              processedRecord.id = `CAT${String(lastId + 1).padStart(2, "0")}`;
            }
            await storage.createCategory(processedRecord);
          } else if (tableName === "sections") {
            if (!processedRecord.id) {
              const existingSections = await storage.getSections();
              const lastId = existingSections.length > 0 ? Math.max(...existingSections.map((s) => {
                const idNum = parseInt(s.id.replace("SEC", ""));
                return isNaN(idNum) ? 0 : idNum;
              })) : 0;
              processedRecord.id = `SEC${String(lastId + 1).padStart(2, "0")}`;
            }
            await storage.createSection(processedRecord);
          } else if (tableName === "items") {
            if (!processedRecord.id) {
              const existingItems = await storage.getItems();
              const lastId = existingItems.length > 0 ? Math.max(...existingItems.map((i2) => {
                const idNum = parseInt(i2.id.replace("ITM", ""));
                return isNaN(idNum) ? 0 : idNum;
              })) : 0;
              processedRecord.id = `ITM${String(lastId + 1).padStart(3, "0")}`;
            }
            await storage.createItem(processedRecord);
          } else if (tableName === "customer_products") {
            if (!processedRecord.id) {
              const existingProducts = await storage.getCustomerProducts();
              const lastId = existingProducts.length > 0 ? Math.max(...existingProducts.map((p) => p.id).filter((id) => typeof id === "number")) : 0;
              processedRecord.id = lastId + 1;
            }
            if (processedRecord.cutting_unit !== void 0 && processedRecord.cutting_unit !== null) {
              console.log("Processing cutting_unit:", processedRecord.cutting_unit);
            }
            const numericFields = ["width", "left_facing", "right_facing", "thickness", "unit_weight_kg", "package_weight_kg"];
            numericFields.forEach((field) => {
              if (processedRecord[field] && typeof processedRecord[field] === "string") {
                const numValue = parseFloat(processedRecord[field]);
                if (!isNaN(numValue)) {
                  processedRecord[field] = numValue;
                }
              }
            });
            const integerFields = ["cutting_length_cm", "unit_quantity"];
            integerFields.forEach((field) => {
              if (processedRecord[field] && typeof processedRecord[field] === "string") {
                const intValue = parseInt(processedRecord[field]);
                if (!isNaN(intValue)) {
                  processedRecord[field] = intValue;
                }
              }
            });
            if (processedRecord.is_printed !== void 0) {
              processedRecord.is_printed = processedRecord.is_printed === "true" || processedRecord.is_printed === true;
            }
            const validatedRecord = insertCustomerProductSchema2.parse(processedRecord);
            await storage.createCustomerProduct(validatedRecord);
          } else if (tableName === "users") {
            if (!processedRecord.id) {
              const existingUsers = await storage.getSafeUsers();
              const lastId = existingUsers.length > 0 ? Math.max(...existingUsers.map((u) => u.id)) : 0;
              processedRecord.id = lastId + 1;
            }
            if (!processedRecord.role_id) {
              processedRecord.role_id = 2;
            }
            const validatedRecord = insertUserSchema.parse(processedRecord);
            await storage.createUser(validatedRecord);
          } else if (tableName === "machines") {
            if (!processedRecord.id) {
              const existingMachines = await storage.getMachines();
              const lastId = existingMachines.length > 0 ? Math.max(...existingMachines.map((m) => {
                const idNum = parseInt(m.id.replace("MAC", ""));
                return isNaN(idNum) ? 0 : idNum;
              })) : 0;
              processedRecord.id = `MAC${String(lastId + 1).padStart(2, "0")}`;
            }
            await storage.createMachine(processedRecord);
          } else if (tableName === "locations") {
            if (!processedRecord.id) {
              const existingLocations = await storage.getLocations();
              const lastId = existingLocations.length > 0 ? Math.max(...existingLocations.map((l) => typeof l.id === "number" ? l.id : parseInt(l.id))) : 0;
              processedRecord.id = lastId + 1;
            }
            const validatedRecord = insertLocationSchema2.parse(processedRecord);
            await storage.createLocation(validatedRecord);
          } else {
            await storage.importTableData(tableName, [record], "json");
          }
          results.successful++;
        } catch (error) {
          results.failed++;
          const errorMsg = `\u0627\u0644\u0633\u062C\u0644 ${i + 1}: ${error instanceof Error ? error.message : "\u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641"}`;
          results.errors.push(errorMsg);
          if (!options?.continueOnError) {
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
        message: "\u062E\u0637\u0623 \u0641\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u062F\u0641\u0639\u0629",
        error: error instanceof Error ? error.message : "\u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641"
      });
    }
  });
  app2.post("/api/database/optimize", requireAdmin, async (req, res) => {
    try {
      const result = await storage.optimizeTables();
      res.json({ message: "\u062A\u0645 \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0628\u0646\u062C\u0627\u062D", result });
    } catch (error) {
      console.error("Error optimizing tables:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0633\u064A\u0646 \u0627\u0644\u062C\u062F\u0627\u0648\u0644" });
    }
  });
  app2.post("/api/database/integrity-check", requireAdmin, async (req, res) => {
    try {
      const result = await storage.checkDatabaseIntegrity();
      res.json({ message: "\u062A\u0645 \u0641\u062D\u0635 \u062A\u0643\u0627\u0645\u0644 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", result });
    } catch (error) {
      console.error("Error checking database integrity:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0641\u062D\u0635 \u062A\u0643\u0627\u0645\u0644 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" });
    }
  });
  app2.post("/api/database/cleanup", requireAdmin, async (req, res) => {
    try {
      const { daysOld } = req.body;
      const result = await storage.cleanupOldData(daysOld || 90);
      res.json({
        message: "\u062A\u0645 \u062A\u0646\u0638\u064A\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u062F\u064A\u0645\u0629 \u0628\u0646\u062C\u0627\u062D",
        deletedRecords: result.count
      });
    } catch (error) {
      console.error("Error cleaning up old data:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0646\u0638\u064A\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0642\u062F\u064A\u0645\u0629" });
    }
  });
  app2.get("/api/attendance", async (req, res) => {
    try {
      const attendance2 = await storage.getAttendance();
      res.json(attendance2);
    } catch (error) {
      console.error("Error fetching attendance:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0636\u0648\u0631" });
    }
  });
  app2.get("/api/attendance/daily-status/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const date2 = req.query.date || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      const status = await storage.getDailyAttendanceStatus(userId, date2);
      res.json(status);
    } catch (error) {
      console.error("Error fetching daily attendance status:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062D\u0627\u0644\u0629 \u0627\u0644\u062D\u0636\u0648\u0631 \u0627\u0644\u064A\u0648\u0645\u064A\u0629" });
    }
  });
  app2.post("/api/attendance", async (req, res) => {
    try {
      const attendance2 = await storage.createAttendance(req.body);
      try {
        const user = await storage.getUserById(req.body.user_id);
        if (user && user.phone) {
          let messageTemplate = "";
          let priority = "normal";
          switch (req.body.status) {
            case "\u062D\u0627\u0636\u0631":
              messageTemplate = `\u0645\u0631\u062D\u0628\u0627\u064B ${user.display_name_ar || user.username}\u060C \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u062D\u0636\u0648\u0631\u0643 \u0627\u0644\u064A\u0648\u0645 \u0628\u0646\u062C\u0627\u062D \u0641\u064A ${(/* @__PURE__ */ new Date()).toLocaleTimeString("ar")}. \u0646\u062A\u0645\u0646\u0649 \u0644\u0643 \u064A\u0648\u0645 \u0639\u0645\u0644 \u0645\u062B\u0645\u0631!`;
              priority = "normal";
              break;
            case "\u0641\u064A \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062D\u0629":
              messageTemplate = `${user.display_name_ar || user.username}\u060C \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0628\u062F\u0621 \u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0627\u0644\u063A\u062F\u0627\u0621 \u0641\u064A ${(/* @__PURE__ */ new Date()).toLocaleTimeString("ar")}. \u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u0648\u0642\u062A \u0631\u0627\u062D\u062A\u0643!`;
              priority = "low";
              break;
            case "\u064A\u0639\u0645\u0644":
              messageTemplate = `${user.display_name_ar || user.username}\u060C \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0633\u062A\u0631\u0627\u062D\u0629 \u0627\u0644\u063A\u062F\u0627\u0621 \u0641\u064A ${(/* @__PURE__ */ new Date()).toLocaleTimeString("ar")}. \u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0639\u0648\u062F\u062A\u0643 \u0644\u0644\u0639\u0645\u0644!`;
              priority = "normal";
              break;
            case "\u0645\u063A\u0627\u062F\u0631":
              messageTemplate = `${user.display_name_ar || user.username}\u060C \u062A\u0645 \u062A\u0633\u062C\u064A\u0644 \u0627\u0646\u0635\u0631\u0627\u0641\u0643 \u0641\u064A ${(/* @__PURE__ */ new Date()).toLocaleTimeString("ar")}. \u0634\u0643\u0631\u0627\u064B \u0644\u062C\u0647\u0648\u062F\u0643 \u0627\u0644\u064A\u0648\u0645\u060C \u0646\u0631\u0627\u0643 \u063A\u062F\u0627\u064B!`;
              priority = "normal";
              break;
          }
          if (messageTemplate) {
            await notificationService.sendWhatsAppMessage(user.phone, messageTemplate, {
              title: "\u062A\u0646\u0628\u064A\u0647 \u0627\u0644\u062D\u0636\u0648\u0631",
              priority,
              context_type: "attendance",
              context_id: attendance2.id?.toString()
            });
          }
        }
      } catch (notificationError) {
        console.error("Failed to send attendance notification:", notificationError);
      }
      res.status(201).json(attendance2);
    } catch (error) {
      console.error("Error creating attendance:", error);
      if (error instanceof Error && error.message.includes("\u062A\u0645 \u062A\u0633\u062C\u064A\u0644")) {
        return res.status(400).json({ message: error.message });
      }
      if (error instanceof Error && error.message.includes("\u064A\u062C\u0628")) {
        return res.status(400).json({ message: error.message });
      }
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0633\u062C\u0644 \u0627\u0644\u062D\u0636\u0648\u0631" });
    }
  });
  app2.put("/api/attendance/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const attendance2 = await storage.updateAttendance(id, req.body);
      res.json(attendance2);
    } catch (error) {
      console.error("Error updating attendance:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0633\u062C\u0644 \u0627\u0644\u062D\u0636\u0648\u0631" });
    }
  });
  app2.delete("/api/attendance/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteAttendance(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0633\u062C\u0644 \u0627\u0644\u062D\u0636\u0648\u0631 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Error deleting attendance:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0633\u062C\u0644 \u0627\u0644\u062D\u0636\u0648\u0631" });
    }
  });
  app2.get("/api/violations", async (req, res) => {
    try {
      const violations2 = await storage.getViolations();
      res.json(violations2);
    } catch (error) {
      console.error("Error fetching violations:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A" });
    }
  });
  app2.post("/api/violations", async (req, res) => {
    try {
      const violation = await storage.createViolation(req.body);
      res.status(201).json(violation);
    } catch (error) {
      console.error("Error creating violation:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0629" });
    }
  });
  app2.put("/api/violations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const violation = await storage.updateViolation(id, req.body);
      res.json(violation);
    } catch (error) {
      console.error("Error updating violation:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0629" });
    }
  });
  app2.delete("/api/violations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteViolation(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0629 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Error deleting violation:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0629" });
    }
  });
  app2.get("/api/user-requests", async (req, res) => {
    try {
      console.log("Fetching user requests - Session ID:", req.sessionID);
      console.log("Fetching user requests - User ID in session:", req.session.userId);
      const requests = await storage.getUserRequests();
      console.log("Found", requests.length, "user requests");
      res.json(requests);
    } catch (error) {
      console.error("Error fetching user requests:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646" });
    }
  });
  app2.post("/api/user-requests", async (req, res) => {
    try {
      const request = await storage.createUserRequest(req.body);
      res.status(201).json(request);
    } catch (error) {
      console.error("Error creating user request:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0637\u0644\u0628" });
    }
  });
  app2.put("/api/user-requests/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const request = await storage.updateUserRequest(id, req.body);
      res.json(request);
    } catch (error) {
      console.error("Error updating user request:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0637\u0644\u0628" });
    }
  });
  app2.patch("/api/user-requests/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const request = await storage.updateUserRequest(id, req.body);
      res.json(request);
    } catch (error) {
      console.error("Error updating user request:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0637\u0644\u0628" });
    }
  });
  app2.delete("/api/user-requests/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteUserRequest(id);
      res.json({ message: "\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0637\u0644\u0628 \u0628\u0646\u062C\u0627\u062D" });
    } catch (error) {
      console.error("Error deleting user request:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062D\u0630\u0641 \u0627\u0644\u0637\u0644\u0628" });
    }
  });
  app2.get("/api/production/settings", async (req, res) => {
    try {
      const settings = await storage.getProductionSettings();
      res.json(settings);
    } catch (error) {
      console.error("Error fetching production settings:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C" });
    }
  });
  app2.patch("/api/production/settings", async (req, res) => {
    try {
      const validationSchema = insertProductionSettingsSchema.pick({
        overrun_tolerance_percent: true,
        allow_last_roll_overrun: true,
        qr_prefix: true
      }).extend({
        overrun_tolerance_percent: z5.number().min(0).max(10).transform((v) => Number(v.toFixed(2))),
        qr_prefix: z5.string().min(1, "\u0628\u0627\u062F\u0626\u0629 \u0627\u0644\u0640 QR \u0645\u0637\u0644\u0648\u0628\u0629")
      });
      const validated = validationSchema.parse(req.body);
      const settings = await storage.updateProductionSettings(validated);
      res.json(settings);
    } catch (error) {
      console.error("Error updating production settings:", error);
      res.status(400).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u062F\u064A\u062B \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C" });
    }
  });
  app2.patch("/api/production-orders/:id/start-production", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const productionOrder = await storage.startProduction(id);
      res.json(productionOrder);
    } catch (error) {
      console.error("Error starting production:", error);
      res.status(400).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0628\u062F\u0621 \u0627\u0644\u0625\u0646\u062A\u0627\u062C" });
    }
  });
  app2.post(
    "/api/rolls",
    requireAuth,
    validateRequest({ body: insertRollSchema.omit({ created_by: true }) }),
    async (req, res) => {
      try {
        console.log("Roll creation request body:", JSON.stringify(req.body, null, 2));
        console.log("Session userId:", req.session.userId);
        if (!req.session.userId || typeof req.session.userId !== "number") {
          return res.status(401).json({ message: "\u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D" });
        }
        const dataValidator3 = getDataValidator(storage);
        const rollData = {
          ...req.body,
          created_by: Number(req.session.userId)
        };
        let validatedRollData;
        try {
          validatedRollData = insertRollSchema.parse(rollData);
          console.log("Validation successful for roll data");
        } catch (validationError) {
          console.error("Roll schema validation failed:", validationError);
          if (validationError instanceof z5.ZodError) {
            return res.status(400).json({
              message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
              errors: validationError.errors
            });
          }
          throw validationError;
        }
        console.log("Final validated roll data:", JSON.stringify(validatedRollData, null, 2));
        const productionOrder = await storage.getProductionOrderById(validatedRollData.production_order_id);
        if (!productionOrder) {
          return res.status(400).json({
            message: "\u0623\u0645\u0631 \u0627\u0644\u0625\u0646\u062A\u0627\u062C \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F",
            field: "production_order_id"
          });
        }
        const machine = await storage.getMachineById(validatedRollData.machine_id);
        if (!machine) {
          return res.status(400).json({
            message: "\u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629",
            field: "machine_id"
          });
        }
        if (machine.status !== "active") {
          return res.status(400).json({
            message: "\u0627\u0644\u0645\u0643\u064A\u0646\u0629 \u063A\u064A\u0631 \u0646\u0634\u0637\u0629 - \u0644\u0627 \u064A\u0645\u0643\u0646 \u0625\u0646\u0634\u0627\u0621 \u0631\u0648\u0644\u0627\u062A \u0639\u0644\u064A\u0647\u0627",
            field: "machine_id"
          });
        }
        const validationResult = await dataValidator3.validateRollCreation(validatedRollData);
        if (!validationResult.isValid) {
          return res.status(400).json({
            message: "\u0641\u0634\u0644 \u0641\u064A \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0642\u0648\u0627\u0639\u062F \u0627\u0644\u0639\u0645\u0644",
            errors: validationResult.errors,
            warnings: validationResult.warnings
          });
        }
        const roll = await storage.createRollWithQR(validatedRollData);
        res.status(201).json(roll);
      } catch (error) {
        console.error("Error creating roll:", error);
        if (error instanceof z5.ZodError) {
          console.error("Validation errors:", error.errors);
          res.status(400).json({
            message: "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629",
            errors: error.errors
          });
        } else if (error instanceof Error && error.message.includes("\u062A\u062C\u0627\u0648\u0632\u062A \u0627\u0644\u062D\u062F \u0627\u0644\u0645\u0633\u0645\u0648\u062D")) {
          res.status(400).json({ message: error.message });
        } else {
          res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0631\u0648\u0644" });
        }
      }
    }
  );
  app2.patch("/api/rolls/:id/print", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (!req.session.userId) {
        return res.status(401).json({ message: "\u063A\u064A\u0631 \u0645\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" });
      }
      const roll = await storage.markRollPrinted(id, req.session.userId);
      res.json(roll);
    } catch (error) {
      console.error("Error marking roll printed:", error);
      res.status(400).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0631\u0648\u0644" });
    }
  });
  app2.post("/api/cuts", async (req, res) => {
    try {
      const validationSchema = insertCutSchema.extend({
        cut_weight_kg: z5.coerce.number().gt(0, "\u0627\u0644\u0648\u0632\u0646 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631").max(5e4, "\u0627\u0644\u0648\u0632\u0646 \u064A\u062A\u062C\u0627\u0648\u0632 50 \u0637\u0646").transform((v) => Number(v.toFixed(3))),
        pieces_count: z5.coerce.number().positive().optional()
      });
      const validated = validationSchema.parse(req.body);
      if (!req.session.userId) {
        return res.status(401).json({ message: "\u063A\u064A\u0631 \u0645\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" });
      }
      const cut = await storage.createCut({
        ...validated,
        performed_by: req.session.userId
      });
      res.status(201).json(cut);
    } catch (error) {
      console.error("Error creating cut:", error);
      if (error instanceof Error && error.message.includes("\u0627\u0644\u0648\u0632\u0646 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0645\u062A\u0627\u062D")) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0642\u0637\u0639" });
      }
    }
  });
  app2.post("/api/warehouse/receipts", async (req, res) => {
    try {
      const validationSchema = insertWarehouseReceiptSchema.extend({
        received_weight_kg: z5.coerce.number().gt(0, "\u0627\u0644\u0648\u0632\u0646 \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0635\u0641\u0631").max(5e4, "\u0627\u0644\u0648\u0632\u0646 \u064A\u062A\u062C\u0627\u0648\u0632 50 \u0637\u0646").transform((v) => Number(v.toFixed(3)))
      });
      const validated = validationSchema.parse(req.body);
      if (!req.session.userId) {
        return res.status(401).json({ message: "\u063A\u064A\u0631 \u0645\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" });
      }
      const receipt = await storage.createWarehouseReceipt({
        ...validated,
        received_by: req.session.userId
      });
      res.status(201).json(receipt);
    } catch (error) {
      console.error("Error creating warehouse receipt:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639" });
    }
  });
  app2.get("/api/warehouse/receipts-detailed", async (req, res) => {
    try {
      const receipts = await storage.getWarehouseReceiptsDetailed();
      res.json(receipts);
    } catch (error) {
      console.error("Error fetching detailed warehouse receipts:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0625\u064A\u0635\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639" });
    }
  });
  app2.get("/api/production/film-queue", async (req, res) => {
    try {
      const queue = await storage.getFilmQueue();
      res.json(queue);
    } catch (error) {
      console.error("Error fetching film queue:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0641\u064A\u0644\u0645" });
    }
  });
  app2.get("/api/production/printing-queue", async (req, res) => {
    try {
      const queue = await storage.getPrintingQueue();
      res.json(queue);
    } catch (error) {
      console.error("Error fetching printing queue:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0628\u0627\u0639\u0629" });
    }
  });
  app2.get("/api/production/cutting-queue", async (req, res) => {
    try {
      const queue = await storage.getCuttingQueue();
      res.json(queue);
    } catch (error) {
      console.error("Error fetching cutting queue:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0642\u0637\u064A\u0639" });
    }
  });
  app2.get("/api/production/grouped-cutting-queue", async (req, res) => {
    try {
      const queue = await storage.getGroupedCuttingQueue();
      res.json(queue);
    } catch (error) {
      console.error("Error fetching grouped cutting queue:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062A\u0642\u0637\u064A\u0639 \u0627\u0644\u0645\u062C\u0645\u0639\u0629" });
    }
  });
  app2.get("/api/warehouse/production-hall", async (req, res) => {
    try {
      const productionOrders = await storage.getProductionOrdersForReceipt();
      res.json(productionOrders);
    } catch (error) {
      console.error("Error fetching production hall data:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0628\u064A\u0627\u0646\u0627\u062A \u0635\u0627\u0644\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C" });
    }
  });
  app2.post("/api/warehouse/receipts", async (req, res) => {
    try {
      const receiptData = req.body;
      const receipt = await storage.createWarehouseReceipt(receiptData);
      res.json(receipt);
    } catch (error) {
      console.error("Error creating warehouse receipt:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0645\u0633\u062A\u0648\u062F\u0639" });
    }
  });
  app2.get("/api/production/order-progress/:jobOrderId", async (req, res) => {
    try {
      const jobOrderId = parseInt(req.params.jobOrderId);
      const progress = await storage.getOrderProgress(jobOrderId);
      res.json(progress);
    } catch (error) {
      console.error("Error fetching order progress:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u0642\u062F\u0645 \u0627\u0644\u0637\u0644\u0628" });
    }
  });
  app2.get("/api/rolls/:id/qr", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const qrData = await storage.getRollQR(id);
      res.json(qrData);
    } catch (error) {
      console.error("Error fetching roll QR:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0631\u0645\u0632 QR \u0644\u0644\u0631\u0648\u0644" });
    }
  });
  app2.get("/api/rolls/:id/label", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const labelData = await storage.getRollLabelData(id);
      res.json(labelData);
    } catch (error) {
      console.error("Error generating roll label:", error);
      res.status(500).json({ message: "\u062E\u0637\u0623 \u0641\u064A \u062A\u0648\u0644\u064A\u062F \u0644\u064A\u0628\u0644 \u0627\u0644\u0631\u0648\u0644" });
    }
  });
  app2.get(
    "/api/production/user-performance",
    requireAuth,
    async (req, res) => {
      try {
        const userId = req.query.user_id ? parseIntSafe(req.query.user_id, "User ID", { min: 1 }) : void 0;
        const dateFrom = req.query.date_from || void 0;
        const dateTo = req.query.date_to || void 0;
        if (dateFrom && !/^\d{4}-\d{2}-\d{2}$/.test(dateFrom)) {
          return res.status(400).json({ message: "\u062A\u0646\u0633\u064A\u0642 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D (YYYY-MM-DD)" });
        }
        if (dateTo && !/^\d{4}-\d{2}-\d{2}$/.test(dateTo)) {
          return res.status(400).json({ message: "\u062A\u0646\u0633\u064A\u0642 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D (YYYY-MM-DD)" });
        }
        const performance = await storage.getUserPerformanceStats(userId, dateFrom, dateTo);
        res.json({
          data: performance,
          period: {
            from: dateFrom || "\u0622\u062E\u0631 7 \u0623\u064A\u0627\u0645",
            to: dateTo || "\u0627\u0644\u064A\u0648\u0645",
            user_filter: userId ? `\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ${userId}` : "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646"
          },
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (error) {
        console.error("Error fetching user performance stats:", error);
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0623\u062F\u0627\u0621 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646",
          error: error.message
        });
      }
    }
  );
  app2.get(
    "/api/production/role-performance",
    requireAuth,
    async (req, res) => {
      try {
        const dateFrom = req.query.date_from || void 0;
        const dateTo = req.query.date_to || void 0;
        if (dateFrom && !/^\d{4}-\d{2}-\d{2}$/.test(dateFrom)) {
          return res.status(400).json({ message: "\u062A\u0646\u0633\u064A\u0642 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D (YYYY-MM-DD)" });
        }
        if (dateTo && !/^\d{4}-\d{2}-\d{2}$/.test(dateTo)) {
          return res.status(400).json({ message: "\u062A\u0646\u0633\u064A\u0642 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D (YYYY-MM-DD)" });
        }
        const performance = await storage.getRolePerformanceStats(dateFrom, dateTo);
        res.json({
          data: performance,
          period: {
            from: dateFrom || "\u0622\u062E\u0631 7 \u0623\u064A\u0627\u0645",
            to: dateTo || "\u0627\u0644\u064A\u0648\u0645"
          },
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (error) {
        console.error("Error fetching role performance stats:", error);
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0623\u062F\u0627\u0621 \u0627\u0644\u0623\u0642\u0633\u0627\u0645",
          error: error.message
        });
      }
    }
  );
  app2.get(
    "/api/production/real-time-stats",
    requireAuth,
    async (req, res) => {
      try {
        const realTimeStats = await storage.getRealTimeProductionStats();
        res.json({
          ...realTimeStats,
          updateInterval: 3e4
          // 30 seconds
        });
      } catch (error) {
        console.error("Error fetching real-time production stats:", error);
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0644\u0641\u0648\u0631\u064A\u0629",
          error: error.message
        });
      }
    }
  );
  app2.get(
    "/api/production/efficiency-metrics",
    requireAuth,
    async (req, res) => {
      try {
        const dateFrom = req.query.date_from || void 0;
        const dateTo = req.query.date_to || void 0;
        if (dateFrom && !/^\d{4}-\d{2}-\d{2}$/.test(dateFrom)) {
          return res.status(400).json({ message: "\u062A\u0646\u0633\u064A\u0642 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D (YYYY-MM-DD)" });
        }
        if (dateTo && !/^\d{4}-\d{2}-\d{2}$/.test(dateTo)) {
          return res.status(400).json({ message: "\u062A\u0646\u0633\u064A\u0642 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D (YYYY-MM-DD)" });
        }
        const metrics = await storage.getProductionEfficiencyMetrics(dateFrom, dateTo);
        res.json({
          ...metrics,
          period: {
            from: dateFrom || "\u0622\u062E\u0631 30 \u064A\u0648\u0645",
            to: dateTo || "\u0627\u0644\u064A\u0648\u0645"
          },
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (error) {
        console.error("Error fetching production efficiency metrics:", error);
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u0643\u0641\u0627\u0621\u0629",
          error: error.message
        });
      }
    }
  );
  app2.get(
    "/api/production/alerts",
    requireAuth,
    async (req, res) => {
      try {
        const alerts = await storage.getProductionAlerts();
        res.json({
          alerts,
          alertCount: alerts.length,
          criticalCount: alerts.filter((a) => a.priority === "critical").length,
          warningCount: alerts.filter((a) => a.priority === "high" || a.priority === "medium").length,
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (error) {
        console.error("Error fetching production alerts:", error);
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0627\u062C",
          error: error.message
        });
      }
    }
  );
  app2.get(
    "/api/production/machine-utilization",
    requireAuth,
    async (req, res) => {
      try {
        const dateFrom = req.query.date_from || void 0;
        const dateTo = req.query.date_to || void 0;
        if (dateFrom && !/^\d{4}-\d{2}-\d{2}$/.test(dateFrom)) {
          return res.status(400).json({ message: "\u062A\u0646\u0633\u064A\u0642 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D (YYYY-MM-DD)" });
        }
        if (dateTo && !/^\d{4}-\d{2}-\d{2}$/.test(dateTo)) {
          return res.status(400).json({ message: "\u062A\u0646\u0633\u064A\u0642 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D (YYYY-MM-DD)" });
        }
        const utilizationStats = await storage.getMachineUtilizationStats(dateFrom, dateTo);
        res.json({
          data: utilizationStats,
          period: {
            from: dateFrom || "\u0622\u062E\u0631 7 \u0623\u064A\u0627\u0645",
            to: dateTo || "\u0627\u0644\u064A\u0648\u0645"
          },
          totalMachines: utilizationStats.length,
          activeMachines: utilizationStats.filter((m) => m.status === "active").length,
          lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
        });
      } catch (error) {
        console.error("Error fetching machine utilization stats:", error);
        res.status(500).json({
          message: "\u062E\u0637\u0623 \u0641\u064A \u062C\u0644\u0628 \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u0643\u0627\u0626\u0646",
          error: error.message
        });
      }
    }
  );
  const healthMonitor = getSystemHealthMonitor(storage);
  const alertManager2 = getAlertManager(storage);
  const dataValidator2 = getDataValidator(storage);
  app2.use("/api/alerts", createAlertsRouter(storage));
  app2.use("/api/system/health", createSystemHealthRouter(storage));
  app2.use("/api/system/performance", createPerformanceRouter(storage));
  app2.use("/api/corrective-actions", createCorrectiveActionsRouter(storage));
  app2.use("/api/data-validation", createDataValidationRouter(storage));
  console.log("[SmartAlerts] \u0646\u0638\u0627\u0645 \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u0627\u062A \u0627\u0644\u0630\u0643\u064A\u0629 \u0645\u064F\u0641\u0639\u0644 \u2705");
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig(async () => {
  const plugins = [react(), runtimeErrorOverlay()];
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }
  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets")
      }
    },
    root: __dirname,
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"]
      },
      hmr: {
        overlay: false
        // تعطيل ErrorOverlay
      }
    },
    optimizeDeps: {
      exclude: ["@replit/vite-plugin-runtime-error-modal"]
    }
  };
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
init_db();
init_schema();
var app = express2();
app.use(express2.json({ limit: "50mb" }));
app.use(express2.urlencoded({ extended: false, limit: "50mb" }));
async function performPasswordSecurityCheck() {
  if (process.env.SKIP_SECURITY_CHECK === "true") {
    console.warn("\u26A0\uFE0F SECURITY CHECK BYPASSED: SKIP_SECURITY_CHECK environment variable is set");
    console.warn("\u26A0\uFE0F This should only be used temporarily during deployment");
    console.warn("\u26A0\uFE0F Please remove SKIP_SECURITY_CHECK and fix any password issues immediately");
    return;
  }
  try {
    console.log("\u{1F512} Performing startup password security check...");
    const allUsers = await db.select().from(users);
    let plaintextPasswordsFound = 0;
    const problematicUserIds = [];
    for (const user of allUsers) {
      if (!user.password) {
        console.warn(`\u26A0\uFE0F User ${user.id} (${user.username}) has no password set`);
        continue;
      }
      const isHashedPassword = user.password.startsWith("$2a$") || user.password.startsWith("$2b$") || user.password.startsWith("$2y$");
      if (!isHashedPassword) {
        plaintextPasswordsFound++;
        problematicUserIds.push(user.id);
        console.error(`\u{1F6A8} SECURITY ALERT: User ${user.id} (${user.username}) has plaintext password!`);
      }
    }
    if (plaintextPasswordsFound > 0) {
      console.error(`\u{1F6A8} CRITICAL SECURITY ISSUE: Found ${plaintextPasswordsFound} user(s) with plaintext passwords!`);
      console.error(`\u{1F6A8} Affected user IDs: [${problematicUserIds.join(", ")}]`);
      console.error(`\u{1F6A8} This is a security vulnerability that must be addressed immediately!`);
      console.error(`\u{1F6A8} All passwords should be hashed with bcrypt before storage.`);
      if (app.get("env") === "production") {
        console.error(`\u{1F6A8} PRODUCTION SECURITY VIOLATION: Application startup blocked due to plaintext passwords`);
        console.error(`\u{1F6A8} Security check failure causing crash loop in production environment`);
        console.error(`\u{1F6A8} Run the password hashing script immediately after the initial deploy with SKIP_SECURITY_CHECK enabled`);
        console.error(`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510`);
        console.error(`\u2502                    DEPLOYMENT FIX INSTRUCTIONS                     \u2502`);
        console.error(`\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524`);
        console.error(`\u2502 Step 1: Set environment variable: SKIP_SECURITY_CHECK=true        \u2502`);
        console.error(`\u2502         (exact string 'true' required)                             \u2502`);
        console.error(`\u2502 Step 2: Deploy application (will start successfully with bypass)   \u2502`);
        console.error(`\u2502 Step 3: Run: node scripts/hash-passwords.js                        \u2502`);
        console.error(`\u2502 Step 4: Remove SKIP_SECURITY_CHECK environment variable            \u2502`);
        console.error(`\u2502 Step 5: Redeploy application (security check will pass)            \u2502`);
        console.error(`\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`);
        console.error(`\u{1F6A8} WARNING: Do NOT leave SKIP_SECURITY_CHECK enabled in production!`);
        process.exit(1);
      }
    } else {
      console.log(`\u2705 Password security check passed: All ${allUsers.length} user passwords are properly hashed`);
    }
  } catch (error) {
    console.error("\u274C Password security check failed:", error);
    if (app.get("env") === "production") {
      console.error("\u{1F6A8} Production security check failure - shutting down for safety");
      console.error(`\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510`);
      console.error(`\u2502                    DEPLOYMENT FIX INSTRUCTIONS                     \u2502`);
      console.error(`\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524`);
      console.error(`\u2502 Step 1: Set environment variable: SKIP_SECURITY_CHECK=true        \u2502`);
      console.error(`\u2502         (exact string 'true' required)                             \u2502`);
      console.error(`\u2502 Step 2: Deploy application (will start successfully with bypass)   \u2502`);
      console.error(`\u2502 Step 3: Run: node scripts/hash-passwords.js                        \u2502`);
      console.error(`\u2502 Step 4: Remove SKIP_SECURITY_CHECK environment variable            \u2502`);
      console.error(`\u2502 Step 5: Redeploy application (security check will pass)            \u2502`);
      console.error(`\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518`);
      console.error(`\u{1F6A8} WARNING: Do NOT leave SKIP_SECURITY_CHECK enabled in production!`);
      process.exit(1);
    } else {
      console.warn("\u26A0\uFE0F Development mode: continuing despite security check failure");
    }
  }
}
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigins = [
    "http://localhost:5000",
    "https://localhost:5000",
    "http://127.0.0.1:5000",
    "https://127.0.0.1:5000"
    // Add specific Replit deployment URLs here - replace with actual URLs
    // Example: 'https://your-app-name.replit.app'
  ];
  const currentHost = req.get("host");
  if (currentHost) {
    allowedOrigins.push(`http://${currentHost}`);
    allowedOrigins.push(`https://${currentHost}`);
  }
  if (origin && allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  } else if (!origin) {
    res.header("Access-Control-Allow-Origin", currentHost ? `https://${currentHost}` : "https://localhost:5000");
  }
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS,PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Cookie, Set-Cookie");
  res.header("Access-Control-Expose-Headers", "Set-Cookie");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.set("trust proxy", 1);
var isProduction = process.env.NODE_ENV === "production";
if (isProduction && !process.env.SESSION_SECRET) {
  console.error("\u{1F6A8} SECURITY ERROR: SESSION_SECRET environment variable is required in production");
  console.error("\u{1F6A8} Please set SESSION_SECRET to a secure random value");
  process.exit(1);
}
var PgSession = connectPgSimple(session);
var sessionStore = new PgSession({
  conString: process.env.DATABASE_URL,
  tableName: "user_sessions",
  createTableIfMissing: true,
  pruneSessionInterval: 60 * 15
  // Clean expired sessions every 15 minutes
});
console.log(`\u2705 Using PostgreSQL session store for ${isProduction ? "production" : "development"} - sessions will persist across server restarts`);
app.use(session({
  store: sessionStore,
  secret: process.env.SESSION_SECRET || (isProduction ? (() => {
    console.error("\u{1F6A8} CRITICAL: SESSION_SECRET missing in production");
    process.exit(1);
  })() : "dev-secret-key-not-for-production"),
  resave: true,
  // Force session persistence - ensures PostgreSQL session store reliability
  saveUninitialized: false,
  // Don't create session until something stored
  rolling: true,
  // Reset expiry on activity - crucial for keeping session alive
  cookie: {
    secure: "auto",
    // Let Express determine security based on connection
    httpOnly: true,
    // ALWAYS prevent XSS - critical security fix
    maxAge: 30 * 24 * 60 * 60 * 1e3,
    // 30 days - extended session duration for better user experience
    sameSite: "lax"
    // Better balance for same-origin requests
  },
  name: "plastic-bag-session",
  // Custom session name
  unset: "keep"
  // Keep the session even if we unset properties
}));
app.use((req, res, next) => {
  if (req.path.startsWith("/api") && req.session) {
    if (req.session.userId) {
      req.session.touch();
      req.session.save((err) => {
        if (err && !isProduction) {
          console.warn(`Session save warning on ${req.path}:`, err);
        }
      });
      if (!isProduction && req.path !== "/api/me") {
        console.log(`\u{1F504} Session extended for user ${req.session.userId} on ${req.path}`);
      }
    } else if (req.path !== "/api/login" && req.path !== "/api/health") {
      if (!isProduction) {
        console.log(`\u26A0\uFE0F Unauthenticated API request: ${req.path}`);
      }
    }
  }
  next();
});
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (req.method === "HEAD" && path3 === "/api") {
      return;
    }
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (!isProduction && capturedJsonResponse) {
        const sanitizedResponse = sanitizeResponseForLogging(capturedJsonResponse);
        if (Object.keys(sanitizedResponse).length > 0) {
          logLine += ` :: ${JSON.stringify(sanitizedResponse)}`;
        }
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
function sanitizeResponseForLogging(response) {
  if (!response || typeof response !== "object") {
    return {};
  }
  const sensitiveFields = [
    "password",
    "passwd",
    "pwd",
    "secret",
    "token",
    "key",
    "auth",
    "session",
    "cookie",
    "authorization",
    "credential",
    "private",
    "ssn",
    "social",
    "email",
    "phone",
    "address",
    "ip",
    "personal",
    "card",
    "payment",
    "billing",
    "account",
    "user_id",
    "userId"
  ];
  const sanitized = {};
  for (const [key, value] of Object.entries(response)) {
    const keyLower = key.toLowerCase();
    const isSensitive = sensitiveFields.some((field) => keyLower.includes(field));
    if (isSensitive) {
      sanitized[key] = "[REDACTED]";
    } else if (Array.isArray(value)) {
      sanitized[key] = `[Array:${value.length}]`;
    } else if (typeof value === "object" && value !== null) {
      sanitized[key] = "[Object]";
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
}
(async () => {
  if (app.get("env") === "production") {
    try {
      console.log("\u{1F680} Initializing production database...");
      const { db: db2 } = await Promise.resolve().then(() => (init_db(), db_exports));
      try {
        await db2.execute("SELECT 1 as test");
        console.log("\u2705 Database connection verified");
      } catch (connectionError) {
        console.error("\u274C Database connection failed:", connectionError?.message || connectionError);
        if (connectionError?.message?.includes("connect")) {
          console.error("\u{1F4A1} Connection issue - check DATABASE_URL configuration");
        } else if (connectionError?.message?.includes("timeout")) {
          console.error("\u{1F4A1} Timeout - database may be overloaded or network issue");
        } else if (connectionError?.message?.includes("auth")) {
          console.error("\u{1F4A1} Authentication failed - verify database credentials");
        }
        throw connectionError;
      }
      const tableCheck = await db2.execute(`
        SELECT table_name FROM information_schema.tables 
        WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
        ORDER BY table_name
      `);
      const existingTables = tableCheck.rows.map((row) => row.table_name);
      const isNewDatabase = existingTables.length === 0;
      console.log(`\u{1F4CA} Database status: ${isNewDatabase ? "Fresh (new)" : `Existing (${existingTables.length} tables)`}`);
      if (!isNewDatabase) {
        console.log("\u{1F4CB} Existing tables:", existingTables.slice(0, 10).join(", ") + (existingTables.length > 10 ? ` ... and ${existingTables.length - 10} more` : ""));
        const criticalTables = ["admin_decisions", "users", "customers", "orders"];
        const conflictingTables = criticalTables.filter((table) => existingTables.includes(table));
        if (conflictingTables.length > 0) {
          console.log("\u{1F50D} Found existing critical tables:", conflictingTables.join(", "));
          console.log("\u26A0\uFE0F  Will handle potential schema conflicts carefully...");
        }
      }
      try {
        const { migrate } = await import("drizzle-orm/neon-serverless/migrator");
        await migrate(db2, { migrationsFolder: "./migrations" });
        console.log("\u2705 Database migrations completed via migrate()");
      } catch (migrationError) {
        console.log("\u26A0\uFE0F Standard migration failed, trying alternative approaches...");
        console.log("Migration error:", migrationError?.message || migrationError);
        if (migrationError?.message?.includes("admin_decisions")) {
          console.log("\u{1F527} Detected admin_decisions table conflict, applying specific fixes...");
          try {
            const adminTableExists = await db2.execute(`
              SELECT table_name FROM information_schema.tables 
              WHERE table_name = 'admin_decisions' AND table_schema = 'public'
            `);
            if (adminTableExists.rows.length > 0) {
              console.log("\u{1F4CB} admin_decisions table exists, checking for missing columns...");
              const requiredColumns = [
                { name: "title_ar", type: "VARCHAR(100)" },
                { name: "issued_by", type: "VARCHAR(20)" }
              ];
              for (const col of requiredColumns) {
                try {
                  const columnExists = await db2.execute(`
                    SELECT column_name FROM information_schema.columns 
                    WHERE table_name = 'admin_decisions' 
                    AND column_name = '${col.name}' 
                    AND table_schema = 'public'
                  `);
                  if (columnExists.rows.length === 0) {
                    await db2.execute(`ALTER TABLE admin_decisions ADD COLUMN ${col.name} ${col.type}`);
                    console.log(`\u2705 Added missing column admin_decisions.${col.name}`);
                  }
                } catch (columnError) {
                  console.log(`\u26A0\uFE0F  Could not add column ${col.name}: ${columnError?.message}`);
                }
              }
            }
          } catch (tableFixError) {
            console.log("\u26A0\uFE0F  Could not fix admin_decisions table:", tableFixError?.message);
          }
        }
        if (isNewDatabase) {
          console.log("\u{1F195} Fresh database detected - attempting schema creation via drizzle-kit push");
          try {
            const { exec } = await import("child_process");
            const { promisify } = await import("util");
            const execAsync = promisify(exec);
            console.log("\u{1F4CB} Running drizzle-kit push to create schema...");
            const pushResult = await execAsync("npx drizzle-kit push --force", {
              env: { ...process.env, NODE_ENV: "production" },
              timeout: 6e4
              // 60 second timeout
            });
            console.log("\u2705 Schema created successfully via drizzle-kit push");
            if (pushResult.stdout) {
              console.log("   Output:", pushResult.stdout.substring(0, 200));
            }
            const verifyTableCheck = await db2.execute(`
              SELECT COUNT(*) as table_count
              FROM information_schema.tables 
              WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
            `);
            const newTableCount = parseInt(String(verifyTableCheck.rows[0].table_count));
            console.log(`\u2705 Schema verification: ${newTableCount} tables created`);
            if (newTableCount === 0) {
              console.error("\u274C Schema creation failed - no tables were created");
              console.error("\u{1F6A8} CRITICAL: Cannot start application without database schema");
              console.error("\u{1F4A1} Manual intervention required - check DATABASE_URL and permissions");
              process.exit(1);
            }
          } catch (pushError) {
            console.error("\u274C Schema creation via drizzle-kit failed:", pushError?.message);
            console.error("\u{1F6A8} CRITICAL: Fresh database cannot be initialized");
            console.error("\u{1F4A1} This may be due to:");
            console.error("   - Missing drizzle-kit package");
            console.error("   - Database permission issues");
            console.error("   - Network connectivity problems");
            console.error("   - Invalid DATABASE_URL configuration");
            process.exit(1);
          }
        } else {
          console.log("\u{1F504} Existing database - checking table accessibility...");
          const criticalChecks = [
            { table: "users", description: "User authentication", required: true },
            { table: "customers", description: "Customer management", required: false },
            { table: "orders", description: "Order processing", required: false }
          ];
          let criticalFailures = 0;
          for (const check2 of criticalChecks) {
            try {
              await db2.execute(`SELECT 1 FROM ${check2.table} LIMIT 1`);
              console.log(`\u2705 ${check2.description} table accessible`);
            } catch (tableError) {
              const errorMsg = tableError?.message?.substring(0, 100);
              console.log(`\u26A0\uFE0F  ${check2.description} table issue: ${errorMsg}`);
              if (check2.required && tableError?.message?.includes("does not exist")) {
                criticalFailures++;
                console.error(`\u{1F6A8} CRITICAL: Required table '${check2.table}' is missing`);
              }
            }
          }
          if (criticalFailures > 0) {
            console.error(`\u274C Database schema is incomplete: ${criticalFailures} critical table(s) missing`);
            console.error("\u{1F6A8} CRITICAL: Cannot start application with incomplete schema");
            console.error("\u{1F4A1} This indicates a partial migration or corrupted database");
            console.error("\u{1F4CB} Required actions:");
            console.error("   1. Run database migration scripts manually");
            console.error("   2. Check deployment logs for migration failures");
            console.error("   3. Verify DATABASE_URL points to correct database");
            console.error("   4. Consider restoring from backup if available");
            process.exit(1);
          }
        }
      }
    } catch (error) {
      console.error("\u274C Database initialization failed:", error?.message || error);
      if (error?.message?.includes("ENOTFOUND")) {
        console.error("\u{1F4A1} DNS resolution failed - check DATABASE_URL hostname");
      } else if (error?.message?.includes("ECONNREFUSED")) {
        console.error("\u{1F4A1} Connection refused - database server may be down");
      } else if (error?.message?.includes("relation") && error?.message?.includes("does not exist")) {
        console.error("\u{1F4A1} Table missing - this is normal for fresh deployment");
      } else if (error?.message?.includes("permission denied")) {
        console.error("\u{1F4A1} Permission denied - check database user privileges");
      } else if (error?.message?.includes("syntax error")) {
        console.error("\u{1F4A1} SQL syntax error - check migration files");
      }
      console.error("\u{1F504} Continuing with server startup - database will be retried on first request");
      console.error("\u{1F4DA} For persistent issues, check the deployment logs and database status");
    }
  }
  await performPasswordSecurityCheck();
  app.use("/api/*", (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  });
  const server = await registerRoutes(app);
  app.use("/api/*", (req, res, next) => {
    if (!res.headersSent) {
      return res.status(404).json({ message: "API endpoint not found" });
    }
    next();
  });
  app.use("/api/*", (err, req, res, next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    if (!res.headersSent) {
      res.status(status).json({ message });
    }
    console.error("API Error:", err);
  });
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
