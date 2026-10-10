'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const TR: Record<string, Record<string, string>> = {
  en: {
    nav_home: "Home",
    nav_industrial: "Industrial AI",
    nav_product_eng: "AI Product Engineering",
    nav_industries: "Industries",
    nav_tech: "Technology",
    nav_research: "Research",
    nav_about: "About",
    nav_contact: "Contact",
    hero_badge: "AI-Powered Industrial Intelligence",
    hero_h1: "Building Intelligent Systems for Industry and Business",
    hero_sub: "Moh-AI Tech develops Industrial AI solutions and custom AI products from Tamil Nadu, India — helping manufacturers improve quality, reduce downtime, and automate operations.",
    hero_cta1: "Request AI Assessment",
    hero_cta2: "View AI Capabilities",
    trust_msme: "MSME Registered | Tamil Nadu, India",
    trust_founder: "Founder-Led AI Engineering",
    trust_stack: "Computer Vision + Machine Learning",
    who_we_help_title: "Who We Work With",
    who_we_help_subtitle: "Aligning deep technical AI capabilities to target client needs.",
    problems_title: "Operational Problems We Solve",
    problems_subtitle: "Traditional manual checks and reactive downtime cost millions. We eliminate these bottlenecks through software.",
    solutions_title: "Primary Visual Pathways",
    solutions_subtitle: "Choose the path that fits your current business objectives.",
    pilot_program_title: "Industrial AI Pilot Program",
    pilot_program_subtitle: "We partner with selected factories to deploy AI prototypes on real operational challenges.",
    demos_title: "Engineering Demonstrations",
    demos_subtitle: "Explore our functional research prototypes and technical POC implementations.",
    tech_title: "Engineering Technology Stack",
    tech_subtitle: "We build on production-grade, air-gapped libraries and reliable telemetry integrations.",
    research_title: "Moh-AI Research Lab",
    research_subtitle: "Exploring next-generation prompt correction and human-aware architectures.",
    founder_title: "Founder-Led Advantage",
    founder_subtitle: "Direct architectural control and development speed with founder-level attention.",
    global_title: "Built in Tamil Nadu. Designed for Global Industry.",
    global_subtitle: "We deliver custom AI systems with robust IP rights and secure remote collaboration globally.",
    contact_title: "Request AI Assessment",
    contact_subtitle: "Discuss your automation roadmaps, factory telemetry, or custom product requirements."
  },
  ta: {
    nav_home: "முகப்பு",
    nav_industrial: "தொழில்துறை AI",
    nav_product_eng: "AI தயாரிப்பு பொறியியல்",
    nav_industries: "துறைகள்",
    nav_tech: "தொழில்நுட்பம்",
    nav_research: "ஆராய்ச்சி",
    nav_about: "எங்களைப் பற்றி",
    nav_contact: "தொடர்பு",
    hero_badge: "AI-ஆல் இயக்கப்படும் தொழில்துறை நுண்ணறிவு",
    hero_h1: "தொழில்துறை மற்றும் வணிகத்திற்கான புத்திசாலித்தனமான அமைப்புகள்",
    hero_sub: "உற்பத்தித் துறையில் தரத்தை மேம்படுத்தவும், இயந்திரப் பழுதுகளை முன்னறியவும், செயல்பாடுகளைத் தானியங்குபடுத்தவும் உதவும் தொழில்துறை AI தீர்வுகள் மற்றும் தனிப்பயன் AI தயாரிப்புகளை தமிழ்நாட்டில் இருந்து மோ-ஏஐ டெக் உருவாக்குகிறது.",
    hero_cta1: "AI மதிப்பீட்டைக் கோருக",
    hero_cta2: "AI திறன்களைக் காண்க",
    trust_msme: "MSME பதிவு செய்யப்பட்டது | தமிழ்நாடு, இந்தியா",
    trust_founder: "நிறுவனர் வழிநடத்தும் AI பொறியியல்",
    trust_stack: "கணினி பார்வை + இயந்திர கற்றல்",
    who_we_help_title: "நாங்கள் யாருடன் பணியாற்றுகிறோம்",
    who_we_help_subtitle: "வாடிக்கையாளர் தேவைகளுக்கு ஏற்ப ஆழ்ந்த தொழில்நுட்ப AI திறன்களை சீரமைத்தல்.",
    problems_title: "நாங்கள் தீர்க்கும் செயல்பாட்டு சவால்கள்",
    problems_subtitle: "பாரம்பரிய பரிசோதனை முறைகளும் இயந்திரப் பழுதுகளும் தொழிற்சாலைகளுக்கு இழப்பை ஏற்படுத்துகின்றன. நாங்கள் இவற்றை மென்பொருள் மூலம் தீர்க்கிறோம்.",
    solutions_title: "முதன்மை தீர்வுகள்",
    solutions_subtitle: "உங்கள் தற்போதைய வணிக நோக்கங்களுக்குப் பொருந்தும் பாதையைத் தேர்ந்தெடுக்கவும்.",
    pilot_program_title: "தொழில்துறை AI பைலட் திட்டம்",
    pilot_program_subtitle: "உண்மையான சவால்களில் AI முன்மாதிரிகளைப் பயன்படுத்த தேர்ந்தெடுக்கப்பட்ட தொழிற்சாலைகளுடன் நாங்கள் கூட்டாளராக இருக்கிறோம்.",
    demos_title: "பொறியியல் செய்முறை விளக்கங்கள்",
    demos_subtitle: "எங்கள் தற்போதைய முன்மாதிரிகள் மற்றும் தொழில்நுட்ப POC பயன்பாடுகளை ஆராயுங்கள்.",
    tech_title: "தொழில்நுட்ப அடுக்கு",
    tech_subtitle: "நம்பகமான மற்றும் தயாரிப்பு தரமான கட்டமைப்புகளில் நாங்கள் உருவாக்குகிறோம்.",
    research_title: "மோ-ஏஐ ஆராய்ச்சி கூடம்",
    research_subtitle: "மனிதர்களைப் புரிந்துகொள்ளும் அடுத்த தலைமுறை AI அமைப்புகளை ஆராய்தல்.",
    founder_title: "நிறுவனர் வழிநடத்தும் நன்மை",
    founder_subtitle: "நிறுவனர் அளவிலான நேரடி தொழில்நுட்ப கவனத்துடன் கூடிய பொறியியல் வேகம்.",
    global_title: "தமிழ்நாட்டில் உருவாக்கப்பட்டது. உலகளாவிய தொழில்துறைக்காக வடிவமைக்கப்பட்டது.",
    global_subtitle: "வலுவான அறிவுசார் சொத்துரிமையுடன் பாதுகாப்பான AI அமைப்புகளை நாங்கள் உலகளவில் வழங்குகிறோம்.",
    contact_title: "AI மதிப்பீட்டைக் கோருக",
    contact_subtitle: "உங்கள் தானியக்கத் தேவைகள் அல்லது தனிப்பயன் தயாரிப்பு தேவைகளைப் பற்றி பேசுவோம்."
  },
  de: {
    nav_home: "Startseite",
    nav_industrial: "Industrielle KI",
    nav_product_eng: "KI-Produktentwicklung",
    nav_industries: "Branchen",
    nav_tech: "Technologie",
    nav_research: "Forschung",
    nav_about: "Über uns",
    nav_contact: "Kontakt",
    hero_badge: "KI-gestützte industrielle Intelligenz",
    hero_h1: "Intelligente Systeme für Industrie und Wirtschaft",
    hero_sub: "Moh-AI Tech entwickelt industrielle KI-Lösungen und maßgeschneiderte KI-Produkte aus Tamil Nadu, Indien — um Herstellern zu helfen, die Qualität zu verbessern, Ausfallzeiten zu reduzieren und Abläufe zu automatisieren.",
    hero_cta1: "KI-Bewertung anfordern",
    hero_cta2: "KI-Fähigkeiten anzeigen",
    trust_msme: "MSME Registriert | Tamil Nadu, Indien",
    trust_founder: "Gründergeführtes KI-Engineering",
    trust_stack: "Computer Vision + Maschinelles Lernen",
    who_we_help_title: "Mit wem wir arbeiten",
    who_we_help_subtitle: "Ausrichtung tiefer technischer KI-Kapazitäten auf die Anforderungen unserer Kunden.",
    problems_title: "Herausforderungen, die wir lösen",
    problems_subtitle: "Manuelle Qualitätsprüfungen und reaktive Ausfallzeiten kosten Millionen. Wir beheben diese Engpässe durch Software.",
    solutions_title: "Hauptpfade",
    solutions_subtitle: "Wählen Sie den Pfad, der zu Ihren aktuellen Geschäftszielen passt.",
    pilot_program_title: "Industrielles KI-Pilotprogramm",
    pilot_program_subtitle: "Wir kooperieren mit ausgewählten Fabriken, um KI-Prototypen für reale operative Probleme bereitzustellen.",
    demos_title: "Technische Demonstrationen",
    demos_subtitle: "Erkunden Sie unsere funktionellen Forschungsprototypen und technischen POC-Implementierungen.",
    tech_title: "Technologie-Stack",
    tech_subtitle: "Wir entwickeln auf produktionsreifen, luftspaltgeschützten Bibliotheken und zuverlässigen Telemetrieschnittstellen.",
    research_title: "Moh-AI Forschungslabor",
    research_subtitle: "Erforschung von Architekturen für menschenzentrierte KI-Systeme.",
    founder_title: "Gründergeführter Vorteil",
    founder_subtitle: "Direkte architektonische Kontrolle und Entwicklungsgeschwindigkeit mit Fokus auf Gründerebene.",
    global_title: "Gebaut in Tamil Nadu. Entwickelt für globale Industrien.",
    global_subtitle: "Wir liefern maßgeschneiderte KI-Systeme mit vollen IP-Rechten weltweit.",
    contact_title: "KI-Bewertung anfordern",
    contact_subtitle: "Lassen Sie uns über Ihre Fabrikprozesse und Automatisierungsbedarfe sprechen."
  }
};

type LanguageContextType = {
  lang: string;
  language: string;
  setLang: (lang: string) => void;
  setLanguage: (lang: string) => void;
  t: (key: string | Record<string, string>) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  language: 'en',
  setLang: () => {},
  setLanguage: () => {},
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
    <LanguageContext.Provider value={{ lang, language: lang, setLang, setLanguage: setLang, t }}>
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
