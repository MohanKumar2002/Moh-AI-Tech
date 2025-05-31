# Moh-AI Tech Platform

A comprehensive full-stack web platform for Moh-AI Tech with user authentication, content management, booking system, and admin dashboard built with React and Express.js.

## Features

- **Authentication System**: Replit-based OAuth authentication with user management
- **Responsive Design**: Modern UI with dark/light theme support
- **Content Management**: Blog posts, careers, and contact submissions
- **Booking System**: Product booking with admin management
- **Admin Dashboard**: Complete admin interface for content management
- **Database Integration**: PostgreSQL with Drizzle ORM
- **API Documentation**: RESTful API with comprehensive endpoints

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Wouter for routing
- TanStack Query for data fetching
- React Hook Form for form handling
- Radix UI components
- Framer Motion for animations

### Backend
- Express.js with TypeScript
- PostgreSQL database
- Drizzle ORM
- Replit Authentication (OpenID Connect)
- Session management with connect-pg-simple

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Replit account (for authentication)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd moh-ai-tech-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/database_name
   SESSION_SECRET=your-session-secret-key
   REPL_ID=your-replit-app-id
   ISSUER_URL=https://replit.com/oidc
   REPLIT_DOMAINS=your-domain.replit.dev
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

The application will start on `http://localhost:5000` with both frontend and backend served from the same port.

### Production Build
```bash
npm run build
npm start
```

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── db.ts              # Database configuration
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data access layer
│   └── replitAuth.ts      # Authentication setup
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema and types
└── package.json
```

## API Endpoints

### Authentication
- `GET /api/login` - Initiate login flow
- `GET /api/logout` - Logout user
- `GET /api/callback` - OAuth callback
- `GET /api/auth/user` - Get current user

### Blog Management
- `GET /api/blog` - Get all blog posts
- `GET /api/blog/:slug` - Get blog post by slug
- `POST /api/blog` - Create new blog post (admin only)
- `PUT /api/blog/:id` - Update blog post (admin only)
- `DELETE /api/blog/:id` - Delete blog post (admin only)

### Booking System
- `GET /api/bookings` - Get all bookings (admin only)
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking status (admin only)

### Contact & Careers
- `GET /api/contact` - Get contact submissions (admin only)
- `POST /api/contact` - Submit contact form
- `GET /api/careers` - Get career listings
- `POST /api/careers` - Create career listing (admin only)

### Admin Dashboard
- `GET /api/admin/stats` - Get dashboard statistics (admin only)

## Pages

### Public Pages
- **Landing Page** (`/`) - Welcome page for non-authenticated users
- **About** (`/about`) - Company information
- **Products** (`/products`) - AI product showcase
- **Blog** (`/blog`) - Blog posts and articles
- **Careers** (`/careers`) - Job listings
- **Contact** (`/contact`) - Contact form
- **Support** (`/support`) - Help and support
- **Documentation** (`/docs`) - Technical documentation

### Authenticated Pages
- **Home** (`/`) - User dashboard after login
- **Admin Dashboard** (`/admin`) - Admin management interface (admin users only)

## Authentication Flow

1. Users click "Login" to start authentication
2. Redirected to Replit OAuth provider
3. After successful authentication, redirected back to the application
4. User session is maintained with secure cookies
5. Protected routes check authentication status

## Database Schema

The application uses the following main tables:
- `users` - User profiles and authentication data
- `sessions` - User session storage
- `blog_posts` - Blog content management
- `bookings` - Product booking requests
- `contact_submissions` - Contact form submissions
- `careers` - Job posting management

## Deployment

### Replit Deployment
1. Push your code to a Git repository
2. Import to Replit
3. Set up environment variables in Replit Secrets
4. The application will automatically deploy

### Manual Deployment
1. Build the application: `npm run build`
2. Set up PostgreSQL database
3. Configure environment variables
4. Start the application: `npm start`

## Development Guidelines

### Adding New Features
1. Update database schema in `shared/schema.ts`
2. Run `npm run db:push` to apply changes
3. Update storage interface in `server/storage.ts`
4. Add API routes in `server/routes.ts`
5. Create frontend components and pages

### Styling
- Use Tailwind CSS classes
- Follow dark/light theme patterns
- Maintain responsive design principles

### State Management
- Use TanStack Query for server state
- Use React hooks for local state
- Follow established patterns for data fetching

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please contact the development team or create an issue in the repository.