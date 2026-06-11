import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/layout/navbar';
import ChatbotPlaceholder from '@/components/chatbot-placeholder';
import { LanguageProvider } from '@/components/i18n-provider';

export const metadata: Metadata = {
  title: 'Moh-AI Tech | Custom AI Solutions & Intelligent Automation',
  description: 'Enterprise AI automation company in India. We specialize in custom RAG chatbots, computer vision pipelines, and intelligent web platforms for businesses globally.',
  keywords: 'hire RAG developer India, computer vision company India, custom AI automation company, enterprise NLP developer, custom AI solutions, AI agency India',
  openGraph: {
    title: 'Moh-AI Tech | Custom AI Solutions',
    description: 'Enterprise AI automation company in India.',
    url: 'https://moh-ai-tech.vercel.app',
    siteName: 'Moh-AI Tech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moh-AI Tech | Custom AI Solutions',
    description: 'MSME Registered AI development company in Namakkal, India.',
  },
  robots: {
    index: true,
    follow: true,
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
        
      </body>
    </html>
  );
}
