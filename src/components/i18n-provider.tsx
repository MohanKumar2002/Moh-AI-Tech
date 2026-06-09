'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const TR: Record<string, Record<string, string>> = {
  en: {
    nav_services: "Services",
    nav_solutions: "Solution Architectures",
    nav_agents: "AI Agents",
    nav_industries: "Industries",
    nav_process: "Process",
    nav_contact: "Contact Us",
    hero_badge: "MSME Registered · Namakkal, India",
    hero_h1_1: "Custom AI.",
    hero_h1_2: "Real Results.",
    hero_sub: "We design and build AI, Machine Learning, Computer Vision, and Data Intelligence solutions for businesses and institutions worldwide. No fake claims — just focused, honest engineering.",
    hero_btn1: "Book a Free Call →",
    hero_btn2: "View Services",
    chip1: "Available for global projects",
    chip2: "React + FastAPI stack",
    chip3: "Custom AI development",
    trust_label: "What we stand for",
    tag_services: "What we build",
    h2_services: "Every AI capability your business needs",
    lead_services: "From custom model development to business intelligence dashboards — we cover the full stack of intelligent technology.",
    tag_solutions: "Solution Architectures",
    h2_solutions: "Tested Solution Architectures",
    lead_solutions: "These aren't off-the-shelf products — each is a solution architecture we design, customize, and build for your specific problem.",
    tag_agents: "AI Agents",
    h2_agents: "Autonomous agents that work for you",
    lead_agents: "Pre-designed agent frameworks we customize for your workflow. Available as tailored implementations — not generic bots.",
    tag_industries: "Industries",
    h2_industries: "We work across sectors",
    lead_industries: "Our solutions adapt to your domain. We bring both AI expertise and context-specific understanding.",
    tag_tech: "Technology",
    h2_tech: "Built on the best-in-class stack",
    lead_tech: "We use proven, production-grade tools — chosen for the right job, not for trend.",
    tag_process: "Our Process",
    h2_process: "From idea to deployed AI — transparently",
    lead_process: "A clear, structured delivery process. You see every step, every decision, every demo.",
    tag_global: "Global Reach",
    h2_global: "India-based. Available worldwide.",
    lead_global: "We take on remote projects globally. If you're a startup, business, or institution anywhere in the world — we can work with you.",
    tag_pricing: "Pricing",
    h2_pricing: "Transparent pricing. No surprises.",
    lead_pricing: "Straightforward engagement models. Custom quotes always available — reach out and we'll scope it honestly.",
    tag_contact: "Contact",
    h2_contact: "Let's talk about your project",
    lead_contact: "Book a free 30-minute call. We'll understand your problem, suggest the right approach, and give you a rough estimate — no pressure.",
    cta_h: "Ready to explore what AI can do for your business?",
    cta_sub: "Start with a free conversation. No pitch deck. Just honest talk about your goals.",
    cta_btn1: "Book Free Call →",
    cta_btn2: "Email Us",
    agent_available: "Available as custom implementation",
    sol_concept: "Solution we build & customize",
  },
  ta: {
    nav_services: "சேவைகள்",
    nav_solutions: "தீர்வுகள்",
    nav_agents: "AI ஏஜெண்டுகள்",
    nav_industries: "துறைகள்",
    nav_process: "செயல்முறை",
    nav_contact: "தொடர்பு கொள்க",
    hero_badge: "MSME பதிவு செய்யப்பட்டது · மதுரை, இந்தியா",
    hero_h1_1: "தனிப்பயன் AI.",
    hero_h1_2: "உண்மையான முடிவுகள்.",
    hero_sub: "வணிகங்கள் மற்றும் நிறுவனங்களுக்கு AI, Machine Learning, Computer Vision மற்றும் Data Intelligence தீர்வுகளை வடிவமைக்கிறோம். தவறான கூற்றுகள் இல்லை — நேர்மையான பொறியியல் மட்டுமே.",
    hero_btn1: "இலவச அழைப்பு பதிவு செய்க →",
    hero_btn2: "சேவைகளை பார்க்க",
    chip1: "உலக அளவில் திட்டங்களுக்கு கிடைக்கும்",
    chip2: "React + FastAPI தொழில்நுட்பம்",
    chip3: "தனிப்பயன் AI உருவாக்கம்",
    trust_label: "நாங்கள் நம்பும் மதிப்புகள்",
    tag_services: "நாங்கள் கட்டுவது",
    h2_services: "உங்கள் வணிகத்திற்கு தேவையான AI திறன்கள்",
    lead_services: "மாதிரி உருவாக்கம் முதல் Business Intelligence வரை — முழு AI தொழில்நுட்ப அடுக்கையும் கவரிக்கிறோம்.",
    tag_solutions: "நாங்கள் கட்டும் தீர்வுகள்",
    h2_solutions: "குறிப்பிட்ட தீர்வுகள், உண்மையான செயலாக்கம்",
    lead_solutions: "இவை தயாரான பொருட்கள் அல்ல — உங்கள் குறிப்பிட்ட சிக்கலுக்காக வடிவமைக்கப்படுகின்றன.",
    tag_agents: "AI ஏஜெண்டுகள்",
    h2_agents: "உங்களுக்காக செயல்படும் தன்னாட்சி ஏஜெண்டுகள்",
    lead_agents: "உங்கள் பணிப்பாய்வுக்கு தனிப்பயனாக்கப்படும் AI ஏஜெண்ட் கட்டமைப்புகள்.",
    tag_industries: "துறைகள்",
    h2_industries: "பல்வேறு துறைகளில் பணிபுரிகிறோம்",
    lead_industries: "எங்கள் தீர்வுகள் உங்கள் துறைக்கு ஏற்றவாறு மாற்றியமைக்கப்படுகின்றன.",
    tag_tech: "தொழில்நுட்பம்",
    h2_tech: "சிறந்த கருவிகளில் கட்டப்பட்டது",
    lead_tech: "ஒவ்வொரு திட்டத்திற்கும் சரியான கருவிகளை தேர்வு செய்கிறோம்.",
    tag_process: "எங்கள் செயல்முறை",
    h2_process: "யோசனையிலிருந்து AI வரை — வெளிப்படையாக",
    lead_process: "தெளிவான, கட்டமைக்கப்பட்ட டெலிவரி செயல்முறை. ஒவ்வொரு படியும் நீங்கள் காண்பீர்கள்.",
    tag_global: "உலக அளவு",
    h2_global: "இந்தியாவை தளமாகக் கொண்டு. உலகம் முழுவதும் கிடைக்கும்.",
    lead_global: "உலகின் எங்கிருந்தும் தொலைதூர திட்டங்களை எடுக்கிறோம்.",
    tag_pricing: "விலை நிர்ணயம்",
    h2_pricing: "வெளிப்படையான விலை நிர்ணயம்.",
    lead_pricing: "எளிமையான ஈடுபாட்டு மாதிரிகள். தொடர்பு கொண்டால் நேர்மையான மதிப்பீடு தருவோம்.",
    tag_contact: "தொடர்பு",
    h2_contact: "உங்கள் திட்டத்தைப் பற்றி பேசுவோம்",
    lead_contact: "30 நிமிட இலவச அழைப்பை பதிவு செய்யுங்கள். உங்கள் சிக்கலை புரிந்துகொண்டு சரியான அணுகுமுறையை பரிந்துரைப்போம்.",
    cta_h: "AI உங்கள் வணிகத்திற்கு என்ன செய்யும் என்று ஆராய தயாரா?",
    cta_sub: "இலவச உரையாடலில் தொடங்குங்கள். நேர்மையான பேச்சு மட்டுமே.",
    cta_btn1: "இலவச அழைப்பு பதிவு செய்க →",
    cta_btn2: "மின்னஞ்சல் அனுப்புக",
    agent_available: "தனிப்பயன் செயலாக்கமாக கிடைக்கும்",
    sol_concept: "நாங்கள் கட்டி தனிப்பயனாக்கும் தீர்வு",
  },
  de: {
    nav_services: "Leistungen",
    nav_solutions: "Lösungen",
    nav_agents: "KI-Agenten",
    nav_industries: "Branchen",
    nav_process: "Prozess",
    nav_contact: "Kontakt",
    hero_badge: "MSME registriert · Namakkal, Indien",
    hero_h1_1: "Maßgeschneiderte KI.",
    hero_h1_2: "Echte Ergebnisse.",
    hero_sub: "Wir entwickeln KI-, Machine-Learning-, Computer-Vision- und Datenintelligenz-Lösungen für Unternehmen weltweit. Keine leeren Versprechen — nur ehrliches Engineering.",
    hero_btn1: "Kostenloses Gespräch buchen →",
    hero_btn2: "Leistungen ansehen",
    chip1: "Weltweit für Projekte verfügbar",
    chip2: "React + FastAPI Stack",
    chip3: "Individuelle KI-Entwicklung",
    trust_label: "Wofür wir stehen",
    tag_services: "Was wir entwickeln",
    h2_services: "Jede KI-Fähigkeit, die Ihr Unternehmen braucht",
    lead_services: "Von der Modellentwicklung bis zu Business Intelligence — wir decken den gesamten KI-Technologie-Stack ab.",
    tag_solutions: "Lösungen die wir bauen",
    h2_solutions: "Gezielte Lösungen, echte Umsetzung",
    lead_solutions: "Keine Standardprodukte — jede Lösung wird speziell für Ihr Problem entwickelt.",
    tag_agents: "KI-Agenten",
    h2_agents: "Autonome Agenten, die für Sie arbeiten",
    lead_agents: "Vordesignte Agenten-Frameworks, die wir für Ihren Workflow anpassen.",
    tag_industries: "Branchen",
    h2_industries: "Branchenübergreifend tätig",
    lead_industries: "Unsere Lösungen passen sich Ihrer Branche an.",
    tag_tech: "Technologie",
    h2_tech: "Auf erstklassigem Stack gebaut",
    lead_tech: "Bewährte, produktionsreife Werkzeuge — für die richtige Aufgabe gewählt.",
    tag_process: "Unser Prozess",
    h2_process: "Von der Idee zur KI — transparent",
    lead_process: "Ein klarer, strukturierter Lieferprozess. Jeder Schritt sichtbar.",
    tag_global: "Globale Reichweite",
    h2_global: "Standort Indien. Weltweit verfügbar.",
    lead_global: "Wir übernehmen Remote-Projekte weltweit — für Startups, Unternehmen und Institutionen.",
    tag_pricing: "Preise",
    h2_pricing: "Transparente Preise. Keine Überraschungen.",
    lead_pricing: "Einfache Engagement-Modelle. Individuelle Angebote auf Anfrage.",
    tag_contact: "Kontakt",
    h2_contact: "Sprechen wir über Ihr Projekt",
    lead_contact: "Buchen Sie ein kostenloses 30-Minuten-Gespräch. Wir verstehen Ihr Problem und schlagen den richtigen Ansatz vor.",
    cta_h: "Bereit zu erkunden, was KI für Ihr Unternehmen tun kann?",
    cta_sub: "Starten Sie mit einem kostenlosen Gespräch. Kein Verkaufsdruck — nur ehrlicher Austausch.",
    cta_btn1: "Kostenloses Gespräch buchen →",
    cta_btn2: "E-Mail senden",
    agent_available: "Als individuelle Implementierung verfügbar",
    sol_concept: "Lösung, die wir entwickeln & anpassen",
  }
};

type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string | Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key: string | Record<string, string>) => typeof key === 'string' ? key : key['en'] || '',
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const t = (key: string | Record<string, string>) => {
    if (typeof key === 'object') {
      return key[lang] || key['en'] || '';
    }
    return TR[lang]?.[key] || TR['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}

export function useLanguage() {
  return useContext(LanguageContext);
}
