
'use client';

import Link from 'next/link';
import Image from 'next/image'; // Added Image import
import { usePathname } from 'next/navigation';
import { LogIn, LogOut, UserPlus, LayoutDashboard, Menu, X } from 'lucide-react'; // Removed Bot icon as it's replaced by logo
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { APP_NAME, NAV_LINKS } from '@/lib/constants';
import { useAuth } from '@/contexts/auth-context';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/contexts/language-context';
import type { NavLinkItem } from '@/types';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { language, t } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const translatedNavLinks: NavLinkItem[] = NAV_LINKS.map(link => ({
    ...link,
    labelTranslations: link.labelTranslations,
  }));

  const appNameTranslated = isMounted ? APP_NAME[language] : APP_NAME['en'];

  const renderAuthButtons = () => {
    if (!isMounted) {
      return (
        <>
          <Button variant="ghost" size="sm" disabled>{t({ en: 'Login', ta: 'உள்நுழை' })}</Button>
          <Button size="sm" disabled>{t({ en: 'Register', ta: 'பதிவு' })}</Button>
        </>
      );
    }
    if (user) {
      return (
        <>
          {user.role === 'admin' && (
            <Button variant="ghost" size="sm" asChild>
              <Link href="/admin/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" /> {t({ en: 'Admin', ta: 'நிர்வாகம்' })}
              </Link>
            </Button>
          )}
          <Button variant="outline" size="sm" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" /> {t({ en: 'Logout', ta: 'வெளியேறு' })}
          </Button>
        </>
      );
    }
    return (
      <>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/login">
            <LogIn className="mr-2 h-4 w-4" /> {t({ en: 'Login', ta: 'உள்நுழை' })}
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/register">
            <UserPlus className="mr-2 h-4 w-4" /> {t({ en: 'Register', ta: 'பதிவு' })}
          </Link>
        </Button>
      </>
    );
  };

  const navItems = translatedNavLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
      }`}
    >
      {link.labelTranslations[language]}
    </Link>
  ));
  
  const mobileNavItems = translatedNavLinks.map((link) => (
    <SheetClose asChild key={link.href}>
      <Link
        href={link.href}
        className={`block px-4 py-2 text-base font-medium transition-colors hover:text-primary ${
          pathname === link.href ? 'text-primary bg-accent/10' : 'text-foreground'
        }`}
      >
        {link.labelTranslations[language]}
      </Link>
    </SheetClose>
  ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label={appNameTranslated}>
          {isMounted ? (
            <Image 
              src="/images/general/logo.png" 
              alt={appNameTranslated} 
              width={100} // Adjust as needed
              height={30} // Adjust as needed
              className="h-auto" // To maintain aspect ratio if width/height are for bounding box
              priority 
            />
          ) : (
            // Fallback or skeleton while not mounted to prevent layout shift
            <div style={{ width: '100px', height: '30px' }} className="bg-muted rounded"></div>
          )}
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems}
        </nav>

        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            {renderAuthButtons()}
          </div>
          <LanguageToggle />
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t({ en: "Toggle Menu", ta: "மெனுவை மாற்று" })}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                    <Link href="/" className="flex items-center gap-2" aria-label={appNameTranslated}>
                       {isMounted ? (
                        <Image 
                          src="/images/general/logo.png" 
                          alt={appNameTranslated} 
                          width={90} // Adjust as needed for mobile
                          height={28} // Adjust as needed for mobile
                          className="h-auto"
                        />
                      ) : (
                        <div style={{ width: '90px', height: '28px' }} className="bg-muted rounded"></div>
                      )}
                    </Link>
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon"><X className="h-5 w-5"/></Button>
                    </SheetClose>
                  </div>
                  <nav className="flex-grow py-4 space-y-1">
                    {mobileNavItems}
                  </nav>
                  <div className="p-4 border-t space-y-2">
                    {isMounted && user ? (
                       <>
                        {user.role === 'admin' && (
                          <SheetClose asChild>
                          <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link href="/admin/dashboard">
                              <LayoutDashboard className="mr-2 h-4 w-4" /> {t({ en: 'Admin Dashboard', ta: 'நிர்வாக டாஷ்போர்டு' })}
                            </Link>
                          </Button>
                          </SheetClose>
                        )}
                        <Button variant="outline" className="w-full" onClick={logout}>
                          <LogOut className="mr-2 h-4 w-4" /> {t({ en: 'Logout', ta: 'வெளியேறு' })}
                        </Button>
                      </>
                    ) : isMounted ? (
                      <>
                        <SheetClose asChild>
                        <Button variant="ghost" className="w-full justify-start" asChild>
                          <Link href="/login">
                            <LogIn className="mr-2 h-4 w-4" /> {t({ en: 'Login', ta: 'உள்நுழை' })}
                          </Link>
                        </Button>
                        </SheetClose>
                        <SheetClose asChild>
                        <Button className="w-full" asChild>
                          <Link href="/register">
                            <UserPlus className="mr-2 h-4 w-4" /> {t({ en: 'Register', ta: 'பதிவு' })}
                          </Link>
                        </Button>
                        </SheetClose>
                      </>
                    ) : null}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
