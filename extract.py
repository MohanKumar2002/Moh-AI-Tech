import re
import json

file_path = r"c:\Users\User\Downloads\moh-ai-tech-website_2.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract style
style_match = re.search(r"<style>(.*?)</style>", content, re.DOTALL)
if style_match:
    style_content = """@tailwind base;
@tailwind components;
@tailwind utilities;

""" + style_match.group(1).strip()
    with open(r"c:\Projects\Moh-AI-Tech-master\src\app\globals.css", "w", encoding="utf-8") as f:
        f.write(style_content)

# Extract translations T object
script_match = re.search(r"const T = (\{.*?\n\});\n\nfunction", content, re.DOTALL)
if script_match:
    t_obj = script_match.group(1)
    # create i18n-provider.tsx
    i18n_content = f"""'use client';

import React, {{ createContext, useContext, useState, useEffect }} from 'react';

const TR: Record<string, Record<string, string>> = {t_obj};

type LanguageContextType = {{
  lang: string;
  setLang: (lang: string) => void;
  t: (key: string | Record<string, string>) => string;
}};

const LanguageContext = createContext<LanguageContextType>({{
  lang: 'en',
  setLang: () => {{}},
  t: (key: string | Record<string, string>) => typeof key === 'string' ? key : key['en'] || '',
}});

export function LanguageProvider({{ children }}: {{ children: React.ReactNode }}) {{
  const [lang, setLang] = useState('en');

  useEffect(() => {{
    document.documentElement.dataset.lang = lang;
  }}, [lang]);

  const t = (key: string | Record<string, string>) => {{
    if (typeof key === 'object') {{
      return key[lang] || key['en'] || '';
    }}
    return TR[lang]?.[key] || TR['en']?.[key] || key;
  }};

  return (
    <LanguageContext.Provider value={{{{ lang, setLang, t }}}}>
      {{children}}
    </LanguageContext.Provider>
  );
}}

export function useTranslation() {{
  return useContext(LanguageContext);
}}

export function useLanguage() {{
  return useContext(LanguageContext);
}}
"""
    with open(r"c:\Projects\Moh-AI-Tech-master\src\components\i18n-provider.tsx", "w", encoding="utf-8") as f:
        f.write(i18n_content)

# Extract nav
nav_match = re.search(r"(<nav>.*?</nav>)", content, re.DOTALL)
if nav_match:
    nav_html = nav_match.group(1)
    
    # We will modify the HTML to JSX syntax manually using regex:
    # 1. class -> className
    nav_html = nav_html.replace('class=', 'className=')
    # 2. onclick -> onClick, style="" to style={{}}
    # Actually, to make it easier, I'll just write a script to print the raw nav HTML and then I'll use AI to rewrite it.
    with open("nav_raw.html", "w", encoding="utf-8") as f:
        f.write(nav_html)

# Extract body
body_match = re.search(r"<!-- ===== HERO ===== -->(.*)<!-- ===== ANIMATIONS ===== -->", content, re.DOTALL)
if body_match:
    body_html = body_match.group(1).strip()
    # To fix JSX: class->className, remove <script> tags if any
    body_html = body_html.replace('class=', 'className=')
    
    # Convert style="xyz" to style={{}} - not trivial with regex for all cases, but let's just write to file
    with open("body_raw.html", "w", encoding="utf-8") as f:
        f.write(body_html)

print("Extraction completed!")
