
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ADMIN_NAV_LINKS, APP_NAME } from '@/lib/constants';
import { Power } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { useLanguage } from '@/contexts/language-context';
import { useState, useEffect } from 'react';
import { getIconComponent } from '@/lib/icon-map'; // Import the helper

// Map English labels to icon names (keys from LUCIDE_ICON_MAP)
const ADMIN_ICON_NAME_MAP: { [key: string]: string } = {
  'Dashboard': 'LayoutDashboard',
  'Manage Blog': 'Newspaper',
  'Manage Careers': 'Briefcase',
  'Manage Team': 'Users',
  'Manage Products': 'Package',
};

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const { language, t } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const appNameAdminTranslatedBase = APP_NAME[language] || APP_NAME['en'];
  const adminSuffixTranslated = t({en: 'Admin', ta: 'நிர்வாகம்'});
  const appNameAdminTranslated = isMounted ? `${appNameAdminTranslatedBase} ${adminSuffixTranslated}` : `${APP_NAME['en']} Admin`;


  return (
    <aside className="w-64 bg-card border-r p-4 flex flex-col space-y-4 sticky top-16 h-[calc(100vh-4rem)]">
      <Link href="/admin/dashboard" className="flex items-center gap-2 pb-4 border-b mb-2">
        {isMounted ? (
          <Image 
            src="/images/logo.png"
            alt={appNameAdminTranslated}
            width={20}
            height={20}
            className="h-auto"
          />
        ) : (
          <div style={{ width: '30px', height: '30px' }} className="bg-muted rounded"></div>
        )}
        <span className="font-headline text-lg font-semibold">{appNameAdminTranslated}</span>
      </Link>
      <nav className="flex-grow">
        <ul className="space-y-2">
          {ADMIN_NAV_LINKS.map((link) => {
            const iconName = ADMIN_ICON_NAME_MAP[link.labelTranslations['en']] || 'LayoutDashboard';
            const Icon = getIconComponent(iconName);
            const isActive = pathname === link.href || (link.href !== '/admin/dashboard' && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Button
                  variant={isActive ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  asChild
                >
                  <Link href={link.href}>
                    <Icon className="mr-2 h-4 w-4" />
                    {link.labelTranslations[language]}
                  </Link>
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <Button variant="outline" className="w-full justify-start" onClick={logout}>
          <Power className="mr-2 h-4 w-4" />
          {t({ en: 'Logout', ta: 'வெளியேறு' })}
        </Button>
      </div>
    </aside>
  );
}
