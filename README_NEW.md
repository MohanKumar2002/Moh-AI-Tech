# Moh-AI Tech Platform - Vercel Deployment

A comprehensive full-stack AI platform with FastAPI backend and Next.js frontend, featuring Tamil and English language support, admin analytics, and multiple AI products.

## 🚀 Features

### Core Functionality
- **Multi-language Support**: Tamil and English interface
- **Authentication**: JWT-based authentication with admin privileges
- **Admin Dashboard**: Analytics and content management
- **AI Products**: 5 distinct AI-powered services
- **Database**: PostgreSQL with SQLAlchemy ORM
- **Deployment**: Optimized for Vercel

### Admin Access
- **Email**: mohanmohanmk684@gmail.com
- **Password**: Mohanmk2801@m
- **Features**: Analytics dashboard, user management, content control

### AI Products (Implementation Ready)
1. **AI Resume Builder** - Professional resume creation with ATS optimization
2. **Smart Chatbot** - Bilingual conversational AI
3. **Video Generator** - AI-powered video content creation
4. **OCR Engine** - Text extraction from images and documents
5. **Text Summarizer** - Intelligent document summarization

## 📁 Project Structure

```
├── backend/                 # FastAPI Backend
│   ├── main.py             # Main application
│   ├── database.py         # Database configuration
│   ├── models.py           # SQLAlchemy models
│   ├── schemas.py          # Pydantic schemas
│   ├── auth.py             # Authentication logic
│   ├── requirements.txt    # Python dependencies
│   └── products/           # AI Product implementations
│       ├── ai_resume_builder.py
│       ├── smart_chatbot.py
│       ├── video_generator.py
│       ├── ocr_engine.py
│       └── text_summarizer.py
├── frontend/               # Next.js Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── lib/           # Utilities and configurations
│   │   │   ├── auth.ts    # Authentication service
│   │   │   └── i18n.ts    # Internationalization
│   │   └── pages/         # Next.js pages
│   ├── package.json       # Node.js dependencies
│   └── next.config.js     # Next.js configuration
└── vercel.json            # Vercel deployment config
```

## 🛠 Local Development Setup

### Prerequisites
- Python 3.9+
- Node.js 18+
- PostgreSQL database

### Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
export DATABASE_URL="postgresql://user:password@localhost/mohai_tech"
export SECRET_KEY="your-secret-key"

# Run the server
python main.py
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Set environment variables
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# Run development server
npm run dev
```

## 🚀 Vercel Deployment

### 1. Prepare Repository
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/mohai-tech-platform.git
git push -u origin main
```

### 2. Database Setup
Set up a PostgreSQL database (recommended: Neon, PlanetScale, or Supabase)

### 3. Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   ```
   DATABASE_URL=your_postgresql_connection_string
   SECRET_KEY=your_jwt_secret_key
   NEXT_PUBLIC_API_URL=https://your-domain.vercel.app
   ```
3. Deploy using the provided `vercel.json` configuration

### 4. Post-Deployment
- Admin user will be automatically created on first backend startup
- Access admin dashboard at `/admin` with provided credentials
- Test all AI product endpoints for functionality

## 🔧 Environment Variables

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@host:port/database
SECRET_KEY=your-jwt-secret-key-min-32-characters
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000  # Development
NEXT_PUBLIC_API_URL=https://your-domain.vercel.app  # Production
```

## 📊 Admin Dashboard Features

### Analytics Overview
- Total users count
- Booking statistics
- Blog post metrics
- Contact form submissions

### Management Capabilities
- User management
- Content moderation
- Booking status updates
- System monitoring

### Multi-language Support
- English and Tamil interfaces
- Translatable content
- Localized admin panel

## 🎯 AI Product Implementation

Each product has a dedicated file in `backend/products/` with:
- API endpoint definitions
- Authentication requirements
- Feature placeholders for implementation
- Multilingual support structure

### Implementation Priority
1. **Smart Chatbot** - Basic conversation functionality
2. **OCR Engine** - Image to text conversion
3. **Text Summarizer** - Document processing
4. **AI Resume Builder** - Template-based generation
5. **Video Generator** - Advanced multimedia creation

## 🔐 Security Features

### Authentication
- JWT token-based authentication
- Secure password hashing with bcrypt
- Admin role-based access control
- Protected API endpoints

### Database Security
- SQL injection prevention
- Input validation with Pydantic
- Environment variable protection
- Connection encryption

## 🌍 Language Support

### Current Languages
- **English** (en): Default interface language
- **Tamil** (ta): Complete translation support

### Adding New Languages
1. Update `frontend/src/lib/i18n.ts`
2. Add translation resources
3. Update language selector component
4. Test all interface elements

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Dark/light theme support

## 🔄 Development Workflow

### Adding New Features
1. Update database models in `backend/models.py`
2. Create corresponding schemas in `backend/schemas.py`
3. Implement API endpoints in `backend/main.py`
4. Create frontend components
5. Add translations to `i18n.ts`
6. Test functionality

### Code Quality
- Type checking with TypeScript
- Python type hints
- ESLint configuration
- Automated testing setup

## 📞 Support & Contact

For technical support or feature requests:
- Admin: mohanmohanmk684@gmail.com
- Platform: Moh-AI Tech Solutions
- Documentation: Check inline comments and type definitions

## 📄 License

This project is proprietary software developed for Moh-AI Tech. All rights reserved.

---

**Ready for Production Deployment** ✅
- Vercel-optimized configuration
- Database integration complete
- Authentication system implemented
- Admin dashboard functional
- Multi-language support active
- AI product structure ready