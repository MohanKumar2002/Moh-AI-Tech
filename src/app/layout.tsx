import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/layout/navbar';
import ChatbotPlaceholder from '@/components/chatbot-placeholder';
import { LanguageProvider } from '@/components/i18n-provider';
import { IndependenceDayNotification } from '@/components/independence-day-notification';

export const metadata: Metadata = {
  metadataBase: new URL('https://moh-ai-tech.com'),
  title: {
    default: 'Moh-AI Tech (Mastering Outstanding Horizons) | Enterprise AI Studio — Namakkal, India',
    template: '%s | Moh-AI Tech',
  },
  description: 'Moh-AI Tech — MOH stands for Mastering Outstanding Horizons with AI Technology. We build enterprise AI agents, computer vision, and custom automation in Namakkal, India. Not affiliated with Ministry of Health.',
  keywords: [
    'Moh-AI Tech',
    'MOH AI Tech',
    'Mastering Outstanding Horizons',
    'Mastering Outstanding Horizons AI',
    'enterprise AI India',
    'AI automation Namakkal',
    'AI agents India',
    'custom AI software India',
    'Docu-Mind AI',
    'HR Recruiter AI',
    'AeroAudit AI',
    'computer vision India',
  ],
  openGraph: {
    title: 'Moh-AI Tech (Mastering Outstanding Horizons) | Enterprise AI Studio',
    description: 'MOH = Mastering Outstanding Horizons with AI Technology. Enterprise AI agents, computer vision, and custom automation — built in Namakkal, Tamil Nadu, India.',
    url: 'https://moh-ai-tech.com',
    siteName: 'Moh-AI Tech',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://moh-ai-tech.com/images/team/mohan.webp',
        width: 1200,
        height: 630,
        alt: 'Moh-AI Tech — Mastering Outstanding Horizons AI Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moh-AI Tech (Mastering Outstanding Horizons) | Enterprise AI Studio',
    description: 'MOH = Mastering Outstanding Horizons with AI Technology. Enterprise AI agents, computer vision, and automation — Namakkal, India.',
    images: ['https://moh-ai-tech.com/images/team/mohan.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        
          <LanguageProvider>
            <IndependenceDayNotification />
            <Navbar />
            <main>
              {children}
            </main>
            <ChatbotPlaceholder />
            <Toaster />
          </LanguageProvider>
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
