'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/i18n-provider';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  if (pathname?.startsWith('/documind')) {
    return null; // Hide main navbar on DocuMind pages
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Link href="/" className="logo">
        <Image src="/logo.png" alt="Moh-AI Tech Logo" width={42} height={42} className="logo-img" style={{ height: "42px", width: "auto", display: "block", objectFit: "contain" }} priority />
        <span className="logo-text" style={{ marginLeft: "10px", fontWeight: "800", fontSize: "18px", letterSpacing: "0.5px", color: "var(--text)", whiteSpace: "nowrap" }}>MOH-AI TECH</span>
      </Link>
      <ul className={`nav-center ${menuOpen ? 'mobile-open' : ''}`} id="nav-links">
        <li><Link href="/" onClick={() => setMenuOpen(false)}>{t('nav_home')}</Link></li>
        <li><Link href="/products" onClick={() => setMenuOpen(false)}>{t('nav_products') || 'Products'}</Link></li>
        <li><Link href="/tools/quickinvoice" onClick={() => setMenuOpen(false)}>{t('nav_tools') || 'Tools & ROI'}</Link></li>
        <li><Link href="/industrial-ai" onClick={() => setMenuOpen(false)}>{t('nav_industrial')}</Link></li>
        <li><Link href="/ai-product-engineering" onClick={() => setMenuOpen(false)}>{t('nav_product_eng')}</Link></li>
        <li><Link href="/industries" onClick={() => setMenuOpen(false)}>{t('nav_industries')}</Link></li>
        <li><Link href="/technology" onClick={() => setMenuOpen(false)}>{t('nav_tech')}</Link></li>
        <li><Link href="/research" onClick={() => setMenuOpen(false)}>{t('nav_research')}</Link></li>
        <li><Link href="/about" onClick={() => setMenuOpen(false)}>{t('nav_about')}</Link></li>
        <li><Link href="/contact" onClick={() => setMenuOpen(false)}>{t('nav_contact')}</Link></li>
      </ul>
      <div className="nav-right">
        <div className="lang-select">
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
          <button className={`lang-btn ${lang === 'ta' ? 'active' : ''}`} onClick={() => setLang('ta')}>தமிழ்</button>
          <button className={`lang-btn ${lang === 'de' ? 'active' : ''}`} onClick={() => setLang('de')}>DE</button>
        </div>
        <Link href="/contact" className="nav-cta">{t('nav_contact')}</Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">☰</button>
      </div>
    </nav>
  );
}
