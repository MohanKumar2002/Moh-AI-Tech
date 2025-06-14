import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import { AuthProvider } from '@/contexts/auth-context';
import ChatbotPlaceholder from '@/components/chatbot-placeholder';
import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';

export const metadata: Metadata = {
  title: 'Moh-AI Tech',
  description: 'Innovative AI Solutions for a Smarter Future.',
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
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <AuthProvider>
              <Navbar />
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>

              {/* 🔽 Custom Footer with Legal Info and Links */}
              <footer className="w-full border-t mt-10 py-6 text-sm text-gray-500">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 flex-wrap">
    
    {/* Left - Copyright */}
    <div className="text-center md:text-left w-full md:w-auto">
      © {new Date().getFullYear()} MOH AI TECH<br />
    </div>

    {/* Center - Legal Links */}
    <div className="flex gap-4 justify-center">
      <a href="/terms" className="hover:text-black transition">Terms</a>
      <a href="/privacy" className="hover:text-black transition">Privacy</a>
      <a href="/refund" className="hover:text-black transition">Refund</a>
    </div>

    {/* Right - Social Links */}
    <div className="flex gap-4 justify-center">
      <a href="https://instagram.com/moh.aitech" target="_blank" className="hover:text-pink-600">Instagram</a>
      <a href="https://linkedin.com/company/moh-aitech" target="_blank" className="hover:text-blue-700">LinkedIn</a>
      <a href="https://x.com/moh_aitech" target="_blank" className="hover:text-gray-800">X</a>
      <a href="https://facebook.com/moh.aitech" target="_blank" className="hover:text-blue-600">Facebook</a>
    </div>
    
  </div>
</footer>



              <ChatbotPlaceholder />
              <Toaster />
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
