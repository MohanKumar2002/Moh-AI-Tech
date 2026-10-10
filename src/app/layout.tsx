import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/layout/navbar';
import { LanguageProvider } from '@/components/i18n-provider';

export const metadata: Metadata = {
  title: 'Moh-AI Tech | Industrial AI & Custom AI Engineering Company India',
  description: 'Moh-AI Tech builds industrial AI systems, computer vision solutions, AI agents, and intelligent software platforms from Tamil Nadu, India for global businesses.',
  keywords: [
    'Industrial AI India',
    'Manufacturing AI Solutions',
    'AI Development Company India',
    'Computer Vision Company',
    'AI Automation Solutions',
    'Namakkal',
    'Tamil Nadu',
    'Mohan Kumar S'
  ],
  openGraph: {
    title: 'Moh-AI Tech | Industrial AI & Custom AI Engineering Company India',
    description: 'Moh-AI Tech builds industrial AI systems, computer vision solutions, AI agents, and intelligent software platforms from Tamil Nadu, India for global businesses.',
    url: 'https://moh-ai-tech.com',
    siteName: 'Moh-AI Tech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moh-AI Tech | Industrial AI & Custom AI Engineering Company India',
    description: 'Moh-AI Tech builds industrial AI systems, computer vision solutions, AI agents, and intelligent software platforms from Tamil Nadu, India for global businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://moh-ai-tech.com',
    languages: {
      'en-US': 'https://moh-ai-tech.com/en',
      'ta-IN': 'https://moh-ai-tech.com/ta',
      'de-DE': 'https://moh-ai-tech.com/de',
    },
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
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Toaster />
        </LanguageProvider>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
