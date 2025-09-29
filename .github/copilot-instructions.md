# Modern MPS Codex - AI Coding Agent Instructions

## 🏭 Project Overview
This is a **plastic bag manufacturing ERP system** built with React/TypeScript frontend, Node.js/Express backend, and PostgreSQL database using Drizzle ORM. The system manages the complete manufacturing workflow: orders → production orders → rolls → film/printing/cutting stages.

## 🎯 Core Architecture Principles

### Database-First Design with Business Invariants
- **Critical**: All business logic is enforced through database schema constraints in `shared/schema.ts`
- **Manufacturing workflow invariants** are extensively documented (lines 1-80 in schema)
- Key invariants: quantity constraints, state transitions, inventory non-negative, referential integrity
- **Never bypass schema validation** - use Drizzle's type safety and Zod schemas

### Monorepo Structure with Path Aliases
```
shared/         # Database schema, validation utilities, shared types
server/         # Express API, services, middleware  
client/src/     # React frontend with @ alias to client/src
```

Path aliases in `vite.config.ts`:
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

### Arabic/English Bilingual System
- Arabic is primary language in UI (`name_ar` fields)
- Database comments and business rules in Arabic
- Error messages in Arabic for user-facing components
- Keep English for technical/debug content

## 🔧 Key Development Patterns

### Authentication & Authorization
- **Session-based auth** with PostgreSQL session store (`connect-pg-simple`)
- **Role-based permissions** system in `roles` table with JSON permissions array
- **Critical security check**: Plaintext password detection at startup (`server/index.ts`)
- Use `useAuth()` hook for authentication state
- Protected routes use `ProtectedRoute` component wrapper

### Real-time Updates with SSE
- **Server-Sent Events** for production queue updates via `/api/notifications/stream`
- `useProductionSSE()` hook handles connection management and query invalidation
- Automatic reconnection with exponential backoff
- Production updates invalidate React Query caches for real-time UI

### AI Integration Patterns
- **OpenAI GPT-4o** integration for data extraction (`server/services/ai-helpers.ts`)
- Arabic-language prompts for customer/order data extraction from text
- AI-powered notifications and report generation
- WhatsApp integration for automated customer communication

### Database Transaction Safety
- **Critical**: Multi-table operations must use database transactions
- Production order creation involves multiple related tables
- Inventory movements require atomic updates
- Use Drizzle's transaction API for consistency

## 🚀 Development Workflow

### Local Development
```bash
npm run dev          # Start development server (TSX for hot reload)
npm run db:push      # Push schema changes to database
npm run check        # TypeScript type checking
```

### Production Deployment Security
- **Password hashing**: Use `node scripts/hash-passwords.js` for production setup
- **Migration safety**: Auto-migration runs at server startup
- **Environment variable**: `SKIP_SECURITY_CHECK=true` only for initial deployment
- Health check endpoint: `/api/health` for deployment monitoring

### Manufacturing State Flow
Valid state transitions (enforce in UI/API):
- **Orders**: `waiting` → `in_production` → `completed`/`cancelled`
- **Production Orders**: `pending` → `active` → `completed`/`cancelled`  
- **Rolls**: `film` → `printing` → `cutting` → `done`
- **Machines**: `active` ↔ `maintenance` ↔ `down`

## 📁 Key File Locations

### Critical Schema Files
- `shared/schema.ts` - Complete database schema with business invariants
- `shared/validation-utils.ts` - Shared validation helpers
- `server/db.ts` - Database connection with Neon PostgreSQL

### Authentication Flow
- `client/src/hooks/use-auth.tsx` - Authentication context and hooks
- `server/index.ts` - Session management and security checks
- `scripts/hash-passwords.js` - Production password security script

### Production Management
- `client/src/hooks/use-production-sse.ts` - Real-time production updates
- `server/services/` - AI services, notifications, ML analytics
- Production queue components in `client/src/components/production/`

### Deployment & Scripts
- `DEPLOYMENT_GUIDE.md` - Complete deployment procedures
- `scripts/` - Database migration, validation, and deployment helpers
- `.replitdeploy` configuration for Replit deployments

## ⚠️ Critical Development Rules

1. **Never modify schema without understanding business invariants** - Read schema documentation first
2. **Always use transactions** for multi-table operations involving orders/production/inventory
3. **Respect Arabic language patterns** in user-facing content and error messages
4. **Test authentication flows** - Security is paramount in manufacturing systems
5. **Validate state transitions** - Manufacturing workflow integrity is critical
6. **Use type-safe path aliases** - Follow established import patterns
7. **Handle SSE reconnection** gracefully in production monitoring features

## 🔍 Debugging Tips
- Use `npm run check` for TypeScript issues
- Monitor `/api/health` endpoint for deployment status
- Check browser DevTools for SSE connection status
- Arabic text rendering issues: verify font loading and RTL CSS
- Database constraint violations: Review business invariants in schema comments