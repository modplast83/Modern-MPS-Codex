# GitHub Copilot Instructions for Modern-MPS-Codex

## Project Overview

Modern-MPS-Codex is a comprehensive AI-powered ERP system specifically designed for plastic bag manufacturing companies. The system provides end-to-end management capabilities including order processing, production planning, quality control, maintenance tracking, and HR management, with full Arabic language support and RTL interface design.

### Key Business Domain
- **Industry**: Plastic bag manufacturing
- **Core Functions**: Order management, production planning, quality control, maintenance, HR
- **Language**: Primary Arabic (RTL) with English fallback
- **Users**: Manufacturing operators, supervisors, managers, and administrative staff

## Technology Stack

### Frontend
- **Framework**: React 18.3+ with TypeScript
- **Build Tool**: Vite 5.4+
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **UI Components**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with RTL support
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns library
- **Charts**: Recharts for data visualization

### Backend
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with strict mode
- **API**: RESTful endpoints with Express.js
- **Authentication**: Passport.js with local strategy and sessions
- **Session Storage**: PostgreSQL-backed sessions with connect-pg-simple

### Database
- **Database**: PostgreSQL (Neon Serverless in production)
- **ORM**: Drizzle ORM with drizzle-kit for migrations
- **Schema**: Comprehensive manufacturing schema with 39+ tables
- **Validation**: Zod schemas derived from Drizzle schema definitions

### External Integrations
- **AI**: OpenAI GPT-4 for intelligent reports and analytics
- **Messaging**: Twilio for WhatsApp Business API integration
- **File Storage**: Google Cloud Storage for document management

## Architecture Patterns

### Folder Structure
```
├── client/src/          # Frontend React application
│   ├── components/      # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components (route handlers)
│   ├── lib/            # Utility libraries and configurations
│   └── types/          # TypeScript type definitions
├── server/             # Backend Node.js application
│   ├── routes/         # API route handlers
│   ├── services/       # Business logic services
│   ├── middleware/     # Express middleware
│   └── storage.ts      # Database operations layer
├── shared/             # Shared code between client and server
│   ├── schema.ts       # Drizzle database schema
│   └── *.ts           # Shared utilities and types
├── migrations/         # Database migration files
└── scripts/           # Build and deployment scripts
```

### Data Flow Patterns
1. **Client → API → Database**: Standard CRUD operations
2. **Database → Cache → Client**: Query optimization with TanStack Query
3. **Validation**: Client-side (Zod) + Server-side (Zod) + Database constraints
4. **Error Handling**: Global error boundaries + API error responses

## Coding Standards

### TypeScript Standards
- **Strict Mode**: Always use `strict: true` in TypeScript config
- **Type Safety**: Prefer explicit types over `any`
- **Interfaces**: Use interfaces for object shapes, types for unions
- **Null Safety**: Handle null/undefined explicitly with optional chaining
- **Async/Await**: Prefer async/await over Promise chains

### React Patterns
- **Components**: Functional components with hooks
- **Props**: Use TypeScript interfaces for prop types
- **State**: useState for local state, TanStack Query for server state
- **Effects**: useEffect with proper dependency arrays
- **Error Boundaries**: Wrap components that might throw errors

### Database Patterns
- **Queries**: Use Drizzle ORM query builder, avoid raw SQL
- **Transactions**: Wrap multi-table operations in transactions
- **Validation**: Validate data with Zod schemas before database operations
- **Foreign Keys**: Always maintain referential integrity
- **Naming**: Use snake_case for database columns, camelCase for TypeScript

### API Design
- **RESTful**: Follow REST conventions for endpoints
- **Status Codes**: Use appropriate HTTP status codes
- **Error Format**: Consistent error response format with Arabic messages
- **Authentication**: Check authentication on protected routes
- **Validation**: Validate request bodies with Zod schemas

## Arabic/RTL Considerations

### UI/UX Standards
- **Direction**: All layouts must support RTL (right-to-left)
- **Text**: Primary text in Arabic, technical terms in English where appropriate
- **Numbers**: Use Arabic-Indic numerals where culturally appropriate
- **Dates**: Format dates according to Arabic/Islamic calendar preferences when relevant
- **Forms**: Label placement and field order should follow RTL patterns

### Language Implementation
- **User Messages**: All user-facing messages in Arabic
- **Error Messages**: Provide Arabic error messages with technical details in English
- **Data Display**: Format numbers, dates, and currencies for Arabic locale
- **Validation Messages**: Arabic validation feedback with clear instructions

### Tailwind RTL Classes
```css
/* Use RTL-aware classes */
text-right       /* Instead of text-left */
mr-4            /* Instead of ml-4 for margins */
pr-4            /* Instead of pl-4 for padding */
border-r        /* Instead of border-l for borders */
```

## Database Schema Patterns

### Core Manufacturing Entities
- **Orders**: Customer orders with delivery dates and specifications
- **Production Orders**: Manufacturing work orders linked to customer orders
- **Items**: Product definitions with specifications and pricing
- **Machines**: Production equipment with status tracking
- **Quality Checks**: Quality control inspections and measurements
- **Maintenance**: Equipment maintenance records and scheduling

### Business Rules
- **Quantity Consistency**: Production quantities must not exceed order quantities plus tolerance
- **State Transitions**: Entities follow valid state transition patterns
- **Referential Integrity**: All foreign key relationships must be maintained
- **Non-negative Constraints**: Inventory and quantities cannot go negative

### Common Patterns
```typescript
// Schema definition example
export const orders = pgTable('orders', {
  id: varchar('id', { length: 20 }).primaryKey(),
  customer_id: varchar('customer_id', { length: 20 }).references(() => customers.id),
  total_quantity: decimal('total_quantity', { precision: 10, scale: 2 }).notNull(),
  delivery_date: date('delivery_date').notNull(),
  status: varchar('status', { length: 20 }).default('waiting'),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow()
});

// Zod validation schema
export const insertOrderSchema = createInsertSchema(orders, {
  total_quantity: z.string().transform(parseFloatSafe),
  delivery_date: z.string().transform(val => new Date(val))
});
```

## API Response Patterns

### Success Responses
```typescript
// List endpoint
return res.json({
  data: results,
  pagination: {
    page: currentPage,
    totalPages: Math.ceil(total / limit),
    totalItems: total
  }
});

// Single item endpoint
return res.json({ data: item });
```

### Error Responses
```typescript
// Validation errors
return res.status(400).json({
  error: "بيانات غير صحيحة",
  details: validationErrors,
  code: "VALIDATION_ERROR"
});

// Not found
return res.status(404).json({
  error: "العنصر غير موجود",
  code: "NOT_FOUND"
});
```

## Common Development Patterns

### Form Handling
```typescript
// Use React Hook Form with Zod validation
const form = useForm({
  resolver: zodResolver(insertOrderSchema),
  defaultValues: { /* ... */ }
});

const onSubmit = async (data: OrderInsert) => {
  try {
    await createOrderMutation.mutateAsync(data);
    toast({ title: "تم حفظ الطلب بنجاح" });
  } catch (error) {
    toast({ 
      title: "خطأ في حفظ الطلب",
      description: error.message,
      variant: "destructive"
    });
  }
};
```

### Data Fetching
```typescript
// Use TanStack Query for server state
const { data: orders, isLoading, error } = useQuery({
  queryKey: ['orders', { page, search }],
  queryFn: () => fetchOrders({ page, search })
});
```

### Database Operations
```typescript
// Transaction example
await db.transaction(async (tx) => {
  const order = await tx.insert(orders).values(orderData).returning();
  await tx.insert(productionOrders).values(productionData);
});
```

## Testing Guidelines

### Frontend Testing
- **Unit Tests**: Jest for utility functions and hooks
- **Component Tests**: React Testing Library for component behavior
- **Integration Tests**: Test complete user workflows
- **E2E Tests**: Critical business paths with real data

### Backend Testing
- **API Tests**: Test all endpoints with various scenarios
- **Database Tests**: Validate schema constraints and business rules
- **Integration Tests**: Test external service integrations
- **Load Tests**: Ensure performance under manufacturing workloads

## Security Considerations

### Authentication & Authorization
- **Session Security**: Secure session configuration with proper timeouts
- **Password Hashing**: Use bcrypt for password storage
- **Role-Based Access**: Implement granular permissions system
- **Input Validation**: Validate and sanitize all user inputs

### Data Protection
- **SQL Injection**: Use parameterized queries through Drizzle ORM
- **XSS Prevention**: Sanitize output and use Content Security Policy
- **CSRF Protection**: Implement CSRF tokens for state-changing operations
- **Sensitive Data**: Never log passwords or sensitive information

## Performance Optimization

### Frontend Performance
- **Code Splitting**: Lazy load pages and components
- **Caching**: Use TanStack Query for intelligent caching
- **Bundle Size**: Monitor and optimize bundle size
- **Virtual Scrolling**: For large data tables

### Backend Performance
- **Database Indexing**: Index frequently queried columns
- **Query Optimization**: Use efficient Drizzle queries
- **Connection Pooling**: Proper database connection management
- **Response Caching**: Cache static or frequently accessed data

## Deployment & Production

### Environment Configuration
- **Environment Variables**: Use proper environment variable management
- **Database Migrations**: Run migrations safely in production
- **Health Checks**: Implement comprehensive health check endpoints
- **Logging**: Structured logging for production monitoring

### Production Monitoring
- **Error Tracking**: Monitor and alert on application errors
- **Performance Metrics**: Track response times and database performance
- **Business Metrics**: Monitor manufacturing KPIs and system usage
- **Uptime Monitoring**: Ensure high availability for manufacturing operations

## Common Manufacturing Workflows

### Order Processing
1. Customer places order with specifications
2. System validates product availability and delivery dates
3. Production planning creates manufacturing work orders
4. Production executes orders with quality checkpoints
5. Finished goods are delivered and invoiced

### Quality Control
1. Define quality parameters for each product type
2. Schedule quality inspections during production
3. Record measurements and pass/fail results
4. Generate quality reports and trend analysis
5. Implement corrective actions for quality issues

### Maintenance Management
1. Schedule preventive maintenance based on equipment hours
2. Track maintenance actions and spare parts usage
3. Record equipment downtime and repair costs
4. Generate maintenance efficiency reports
5. Optimize maintenance schedules based on historical data

## AI Integration Patterns

### Intelligent Reports
```typescript
// AI service integration
const analysis = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      role: "system",
      content: "أنت محلل بيانات متخصص في صناعة أكياس البلاستيك..."
    },
    {
      role: "user", 
      content: `بيانات الإنتاج: ${JSON.stringify(productionData)}`
    }
  ],
  response_format: { type: "json_object" }
});
```

### Data Analysis
- **Production Optimization**: Analyze production efficiency patterns
- **Quality Insights**: Identify quality trends and root causes
- **Maintenance Predictions**: Predict equipment maintenance needs
- **Cost Analysis**: Generate comprehensive cost breakdowns

## Error Handling Best Practices

### Client-Side Error Handling
```typescript
// Global error boundary
class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application error:', error, errorInfo);
    // Log to monitoring service
  }
}

// API error handling
const handleApiError = (error: any) => {
  const message = error?.response?.data?.error || 'حدث خطأ غير متوقع';
  toast({ title: message, variant: 'destructive' });
};
```

### Server-Side Error Handling
```typescript
// Global error handler
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Server error:', error);
  
  if (error instanceof ValidationError) {
    return res.status(400).json({
      error: 'بيانات غير صحيحة',
      details: error.details
    });
  }
  
  return res.status(500).json({
    error: 'حدث خطأ في الخادم'
  });
});
```

---

## Code Generation Guidelines

When generating code for this project:

1. **Always use Arabic for user-facing text and comments**
2. **Follow the established TypeScript patterns and strict typing**
3. **Use the existing component library (shadcn/ui) for UI elements**
4. **Implement proper error handling with Arabic error messages**
5. **Use TanStack Query for all server state management**
6. **Follow the established database patterns with Drizzle ORM**
7. **Ensure RTL compatibility in all UI components**
8. **Include proper validation with Zod schemas**
9. **Use the established folder structure and naming conventions**
10. **Implement proper authentication checks for protected operations**

Remember: This is a production manufacturing system where data integrity and reliability are critical. Always prioritize data consistency, proper error handling, and user experience in Arabic language and culture.