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
        <li><a href="#services" data-t="nav_services">{t('nav_services')}</a></li>
        <li><a href="#solutions" data-t="nav_solutions">{t('nav_solutions')}</a></li>
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
        <a href="/erp/login" className="erp-login" title="Staff / Intern Portal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--text)', border: '1px solid rgba(255,255,255,0.1)', marginLeft: '12px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        </a>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">☰</button>
      </div>
    </nav>
  );
}
