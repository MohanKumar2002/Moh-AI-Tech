
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ADMIN_NAV_LINKS, APP_NAME } from '@/lib/constants';
import { Bot, LayoutDashboard, Newspaper, Briefcase, Power } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { useLanguage } from '@/contexts/language-context';

const ICONS_MAP: { [key: string]: React.ElementType } = {
  Dashboard: LayoutDashboard,
  'Manage Blog': Newspaper,
  'Manage Careers': Briefcase,
};

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const { language, t } = useLanguage();
  
  const appNameAdminTranslated = `${APP_NAME[language]} ${t({en: 'Admin', ta: 'நிர்வாகம்'})}`;

  return (
    <aside className="w-64 bg-card border-r p-4 flex flex-col space-y-4 sticky top-16 h-[calc(100vh-4rem)]">
      <Link href="/admin/dashboard" className="flex items-center gap-2 pb-4 border-b mb-2">
        <Bot className="h-7 w-7 text-primary" />
        <span className="font-headline text-lg font-semibold">{appNameAdminTranslated}</span>
      </Link>
      <nav className="flex-grow">
        <ul className="space-y-2">
          {ADMIN_NAV_LINKS.map((link) => {
            const Icon = ICONS_MAP[link.labelTranslations['en']] || LayoutDashboard; // Icon map keys are English
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
