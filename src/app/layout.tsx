import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/layout/navbar';
import ChatbotPlaceholder from '@/components/chatbot-placeholder';
import { LanguageProvider } from '@/components/i18n-provider';

export const metadata: Metadata = {
  title: 'Moh-AI Tech | Artificial Intelligence & IT Company in Namakkal',
  description: 'Moh-AI Tech (Mastering Outstanding Horizons) is a leading Artificial Intelligence and IT company in Namakkal, India. We build custom AI automation, RAG chatbots, and enterprise AI solutions.',
  openGraph: {
    title: 'Moh-AI Tech | Artificial Intelligence & IT Company in Namakkal',
    description: 'Moh-AI Tech (Mastering Outstanding Horizons) is a leading Artificial Intelligence and IT company in Namakkal, India. We build custom AI automation, RAG chatbots, and enterprise AI solutions.',
    url: 'https://moh-ai-tech.com',
    siteName: 'Moh-AI Tech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moh-AI Tech | Artificial Intelligence & IT Company in Namakkal',
    description: 'Top Artificial Intelligence & IT company in Namakkal, India. Custom AI solutions and automation.',
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
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        
          <LanguageProvider>
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
