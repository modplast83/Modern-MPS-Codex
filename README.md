# Modern-MPS-Codex

AI-powered ERP system for plastic bag manufacturing with comprehensive Arabic language support.

## 🏭 Overview

Modern-MPS-Codex is a comprehensive enterprise resource planning (ERP) system specifically designed for plastic bag manufacturing companies. The system provides end-to-end management capabilities with full Arabic RTL interface design.

### Key Features

- **Order Management**: Customer orders, production planning, and delivery tracking
- **Production Control**: Work orders, machine monitoring, and quality checkpoints  
- **Quality Management**: Automated inspections, measurements, and compliance tracking
- **Maintenance**: Equipment maintenance scheduling and spare parts management
- **HR Management**: Employee attendance, training programs, and payroll
- **AI Analytics**: Intelligent reports and predictive insights using OpenAI GPT-4
- **WhatsApp Integration**: Business notifications via Twilio WhatsApp API

## 🛠 Technology Stack

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with session management
- **AI**: OpenAI GPT-4 for intelligent analytics
- **Messaging**: Twilio WhatsApp Business API
- **Deployment**: Replit Deployments

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- OpenAI API key (optional, for AI features)
- Twilio account (optional, for WhatsApp notifications)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/modplast83/Modern-MPS-Codex.git
   cd Modern-MPS-Codex
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database URL and API keys
   ```

4. **Run database migrations**
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

### Production Build

```bash
npm run build
npm start
```

## 📱 System Modules

| Module | Description | Key Features |
|--------|-------------|--------------|
| **Dashboard** | Overview and KPIs | Real-time metrics, charts, quick actions |
| **Orders** | Customer order management | Order processing, delivery tracking, invoicing |
| **Production** | Manufacturing operations | Work orders, machine monitoring, roll tracking |
| **Quality** | Quality control system | Inspections, measurements, compliance reports |
| **Maintenance** | Equipment maintenance | Preventive scheduling, spare parts, downtime tracking |
| **HR** | Human resources | Attendance, training, payroll, performance |
| **Warehouse** | Inventory management | Stock levels, movements, transfers |
| **Reports** | Analytics and insights | AI-powered reports, trend analysis, forecasting |

## 🗄 Database Schema

The system uses a comprehensive PostgreSQL schema with 39+ tables covering:

- **Core Manufacturing**: Orders, production orders, items, machines
- **Quality Control**: Quality checks, measurements, standards
- **Maintenance**: Maintenance records, spare parts, schedules
- **Human Resources**: Users, attendance, training, payroll
- **Inventory**: Stock levels, movements, locations
- **System**: Roles, permissions, notifications, settings

## 🔧 Development

### Project Structure

```
├── client/src/          # React frontend application
├── server/              # Node.js backend API
├── shared/              # Shared code and database schema
├── migrations/          # Database migration files
├── scripts/             # Build and deployment scripts
└── .github/             # GitHub configuration and Copilot instructions
```

### Key Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run check` - TypeScript type checking
- `npm run db:push` - Apply database schema changes

### Code Standards

- **TypeScript**: Strict mode with comprehensive type safety
- **React**: Functional components with hooks
- **Database**: Drizzle ORM with Zod validation
- **UI**: RTL-first design with Arabic language support
- **API**: RESTful endpoints with proper error handling

## 🌐 Arabic/RTL Support

The system is built with Arabic language and RTL (right-to-left) layout as the primary interface:

- Native Arabic UI text and messages
- RTL layout for all components
- Arabic number formatting and date display
- Cultural considerations for business workflows
- English fallback for technical terms

## 📊 AI Features

Integration with OpenAI GPT-4 provides:

- **Intelligent Reports**: Automated analysis of production, quality, and maintenance data
- **Predictive Analytics**: Equipment maintenance predictions and quality trend analysis  
- **Business Insights**: Cost analysis, efficiency recommendations, and optimization suggestions
- **Arabic Language Processing**: AI responses in Arabic for better user experience

## 🔐 Security

- **Authentication**: Session-based auth with secure password hashing
- **Authorization**: Role-based access control with granular permissions
- **Input Validation**: Comprehensive validation using Zod schemas
- **SQL Injection Protection**: Parameterized queries through Drizzle ORM
- **Session Security**: Secure session configuration with proper timeouts

## 📈 Production Deployment

The system is designed for deployment on Replit with:

- Automatic database migrations on startup
- Health check endpoints for monitoring
- Environment-based configuration
- Comprehensive error logging and monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- Check the [deployment documentation](./DEPLOYMENT_GUIDE.md)
- Review the [platform issue resolution guide](./PLATFORM-ISSUE-RESOLUTION.md)
- Contact the development team

---

Built with ❤️ for plastic bag manufacturing companies