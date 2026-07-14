'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/i18n-provider';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  if (pathname?.startsWith('/documind')) {
    return null; // Hide main navbar on DocuMind pages
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <a href="#" className="logo">
        <img src="/logo.png" alt="Moh-AI Tech Logo" className="logo-img" style={{ height: "42px", width: "auto", display: "block", objectFit: "contain" }} />
        <span className="grad-text logo-text" style={{ marginLeft: "8px", fontWeight: "800", fontSize: "18px", letterSpacing: "1px", whiteSpace: "nowrap" }}>MOH-AI TECH</span>
      </a>
      <ul className={`nav-center ${menuOpen ? 'mobile-open' : ''}`} id="nav-links">
          <li><a href="/#services" onClick={() => setMenuOpen(false)} data-t="nav_services">{t('nav_services')}</a></li>
          <li><a href="/#solutions" onClick={() => setMenuOpen(false)} data-t="nav_solutions">{t('nav_solutions')}</a></li>
          <li><a href="/products" onClick={() => setMenuOpen(false)} data-t="nav_products">{t('nav_products')}</a></li>
        <li><a href="#agents" data-t="nav_agents">{t('nav_agents')}</a></li>
        <li><a href="#industries" data-t="nav_industries">{t('nav_industries')}</a></li>
        <li><a href="#process" data-t="nav_process">{t('nav_process')}</a></li>
      </ul>
      <div className="nav-right">
        <div className="lang-select">
          <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} data-lang="en" onClick={() => setLang('en')}>EN</button>
          <button className={`lang-btn ${lang === 'ta' ? 'active' : ''}`} data-lang="ta" onClick={() => setLang('ta')}>தமிழ்</button>
          <button className={`lang-btn ${lang === 'de' ? 'active' : ''}`} data-lang="de" onClick={() => setLang('de')}>DE</button>
        </div>
        <a href="#contact" className="nav-cta" data-t="nav_contact">{t('nav_contact')}</a>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">☰</button>
      </div>
    </nav>
  );
}
