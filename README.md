# Moh-AI Tech

**Moh-AI Tech** (MOH = **M**astering **O**utstanding **H**orizons with AI Technology) is the official company website and product showcase for Moh-AI Tech — an MSME-registered AI software engineering startup based in Namakkal, Tamil Nadu, India.

> 🔗 Live site: [https://moh-ai-tech.com](https://moh-ai-tech.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| UI Components | ShadCN UI |
| Styling | Tailwind CSS + Custom CSS Variables |
| Database | SQLite via Prisma ORM |
| Auth | Custom session-based auth (Prisma backend) |
| AI Integration | Google Genkit (AI flows) |
| Analytics | Google Analytics (GA4) |
| Deployment | Firebase App Hosting / Vercel |

---

## Key Features

- **🤖 AI Products Showcase** — Docu-Mind AI, HR Recruiter AI, AeroAudit AI, SpinGuard
- **📝 Engineering Blog** — Technical teardowns with full article pages (`/blog`)
- **🌐 Multilingual** — English & Tamil language toggle
- **🎨 Theme** — Dark mode optimised design with CSS variable theming
- **📬 Contact / Booking** — Discovery call booking form with backend
- **📖 The Playbook** — Company culture & philosophy page (`/playbook`)
- **💬 AI Chatbot Placeholder** — Embedded floating chatbot UI
- **📄 Docu-Mind AI App** — Full SaaS sub-app at `/documind` (login, dashboard, chat, pricing)
- **📱 Responsive** — Mobile-first design across all pages

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage (hero, products, blog preview, contact)
│   ├── about/              # About page with brand disambiguation
│   ├── blog/               # Blog listing + article pages ([slug])
│   ├── products/           # AI products showcase
│   ├── playbook/           # Company culture page
│   ├── documind/           # Docu-Mind SaaS sub-app
│   │   ├── login/
│   │   ├── signup/
│   │   ├── dashboard/
│   │   ├── chat/
│   │   ├── pricing/
│   │   ├── privacy/
│   │   └── terms/
│   ├── privacy/            # Main site privacy policy
│   ├── terms/              # Main site terms
│   ├── refund/             # Refund policy
│   ├── sitemap.ts          # Dynamic XML sitemap
│   └── robots.ts           # Robots.txt rules
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # ShadCN UI primitives
│   ├── booking-form.tsx    # Discovery call form
│   ├── chatbot-placeholder.tsx
│   ├── i18n-provider.tsx   # EN/Tamil language context
│   └── waitlist-form.tsx
├── actions/                # Next.js Server Actions
├── lib/                    # Utilities & helpers
├── hooks/                  # Custom React hooks
└── types/                  # TypeScript type definitions

prisma/
└── schema.prisma           # Database schema

public/
└── images/                 # Static images (blog, team, products)
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
git clone https://github.com/MohanKumar2002/Moh-AI-Tech.git
cd Moh-AI-Tech
npm install
```

### Database Setup

```bash
npx prisma generate
npx prisma db push
```

### Running Locally

```bash
npm run dev
# Runs on http://localhost:3000
```

### AI Flows (Genkit) — Optional

```bash
npm run genkit:dev    # Genkit dev server on http://localhost:3400
npm run genkit:watch  # With file watching
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | ESLint check |
| `npm run genkit:dev` | Genkit AI dev server |
| `npm run genkit:watch` | Genkit with file watching |

---

## SEO & Security

- Full **Open Graph + Twitter Card** metadata on all pages
- **JSON-LD structured data** — Organization, Brand, WebSite, FAQPage schemas
- **Brand disambiguation** — MOH explicitly defined as Mastering Outstanding Horizons (not Ministry of Health)
- Dynamic `sitemap.xml` including all blog posts
- `robots.txt` with private route exclusions
- Security headers: **HSTS**, **CSP**, **Permissions-Policy**, **X-Frame-Options**, **X-Content-Type-Options**
- `X-Robots-Tag: noindex` on all auth/dashboard routes

---

## Brand

**MOH** = **M**astering **O**utstanding **H**orizons with AI Technology

Moh-AI Tech is a **private AI technology company** — not affiliated with any Ministry of Health (MOH) or government body.

- 📍 Namakkal, Tamil Nadu, India
- 🏢 MSME Reg: UDYAM-TN-14-0088280
- 📧 info@moh-ai-tech.com
- 🔗 [linkedin.com/company/moh-ai-tech](https://in.linkedin.com/company/moh-ai-tech)

---

*Founded by Mohan Kumar Subramanian*
