
'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { APP_NAME } from '@/lib/constants';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { language, t } = useLanguage();
  const appNameTranslated = APP_NAME[language] || APP_NAME['en'];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {appNameTranslated}. {t({ en: "All rights reserved.", ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." })}
          </p>
         <div className="flex space-x-4">
  <Link
    href="https://x.com/moh_ai_tech"
    aria-label={t({ en: "Twitter", ta: "ட்விட்டர்" })}
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Twitter className="h-5 w-5" />
  </Link>
  <Link
    href="https://www.linkedin.com/company/moh-ai-tech/"
    aria-label={t({ en: "LinkedIn", ta: "லிங்க்ட்இன்" })}
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Linkedin className="h-5 w-5" />
  </Link>
  <Link
    href="https://www.instagram.com/moh_ai_tech/"
    aria-label={t({ en: "Instagram", ta: "இன்ஸ்டாகிராம்" })}
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    <Instagram className="h-5 w-5" />
  </Link>
</div>

        </div>
      </div>
    </footer>
  );
}
