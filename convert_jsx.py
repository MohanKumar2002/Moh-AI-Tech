import re
import json

def convert_html_to_jsx(html):
    # Change class to className
    jsx = html.replace('class=', 'className=')
    
    # Replace style string with style objects: style="key:value; key2:value2;" -> style={{key: 'value', key2: 'value2'}}
    def style_replacer(match):
        style_str = match.group(1)
        styles = []
        for prop in style_str.split(';'):
            prop = prop.strip()
            if not prop:
                continue
            if ':' not in prop:
                continue
            k, v = prop.split(':', 1)
            k = k.strip()
            v = v.strip()
            # camelCase the key
            parts = k.split('-')
            k_camel = parts[0] + ''.join(x.capitalize() for x in parts[1:])
            styles.append(f"'{k_camel}': '{v}'")
        return 'style={{' + ', '.join(styles) + '}}'
    
    jsx = re.sub(r'style="([^"]*)"', style_replacer, jsx)
    
    # Self-closing tags
    jsx = re.sub(r'<img(.*?)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<br>', r'<br />', jsx)
    jsx = re.sub(r'<hr>', r'<hr />', jsx)
    jsx = re.sub(r'<input(.*?)>', r'<input\1 />', jsx)
    
    # Fix for/htmlFor in labels
    jsx = jsx.replace('for=', 'htmlFor=')
    
    # Replace data-t with translations
    # Actually, we can just let it be data-t="key" and use the context t() inside. Wait, data-t="key" will just render the attribute. To make it use translation:
    # Instead of: <span data-t="hero_badge">Default</span>
    # We want: <span data-t="hero_badge">{t('hero_badge')}</span>
    def data_t_replacer(match):
        tag_start = match.group(1)
        key = match.group(2)
        tag_rest = match.group(3)
        default_text = match.group(4)
        tag_end = match.group(5)
        # We will keep data-t but replace the inner HTML with {t('key')}
        return f"{tag_start}data-t=\"{key}\"{tag_rest}>{{t('{key}')}}{tag_end}"

    # Regex to match <tag ... data-t="key" ...>Text</tag>
    jsx = re.sub(r'(<[^>]+?)data-t="([^"]+)"([^>]*?)>([^<]*?)(</[^>]+>)', data_t_replacer, jsx)
    
    return jsx

# Process Nav
with open("nav_raw.html", "r", encoding="utf-8") as f:
    nav_html = f.read()

nav_jsx = convert_html_to_jsx(nav_html)

navbar_content = f"""'use client';

import React, {{ useState }} from 'react';
import {{ useLanguage }} from '@/components/i18n-provider';
import {{ useTheme }} from 'next-themes';

export function Navbar() {{
  const {{ lang, setLang, t }} = useLanguage();
  const {{ theme, setTheme }} = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {{
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }};

  const toggleMenu = () => {{
    setMenuOpen(!menuOpen);
  }};

  return (
    <nav>
      <a href="#" className="logo" style={{{{gap: '0'}}}}>
        <img src="/logo.png" alt="Moh-AI Tech Logo" style={{{{'height': '42px', 'width': 'auto', 'display': 'block', 'objectFit': 'contain'}}}} />
      </a>
      <ul className="nav-center" id="nav-links" style={{{{ display: menuOpen ? 'flex' : '' }}}}>
        <li><a href="#services" data-t="nav_services">{{t('nav_services')}}</a></li>
        <li><a href="#solutions" data-t="nav_solutions">{{t('nav_solutions')}}</a></li>
        <li><a href="#agents" data-t="nav_agents">{{t('nav_agents')}}</a></li>
        <li><a href="#industries" data-t="nav_industries">{{t('nav_industries')}}</a></li>
        <li><a href="#process" data-t="nav_process">{{t('nav_process')}}</a></li>
        <li><a href="#contact" data-t="nav_contact">{{t('nav_contact')}}</a></li>
      </ul>
      <div className="nav-right">
        <div className="lang-select">
          <button className={{`lang-btn ${{lang === 'en' ? 'active' : ''}}`}} data-lang="en" onClick={{() => setLang('en')}}>EN</button>
          <button className={{`lang-btn ${{lang === 'ta' ? 'active' : ''}}`}} data-lang="ta" onClick={{() => setLang('ta')}}>தமிழ்</button>
          <button className={{`lang-btn ${{lang === 'de' ? 'active' : ''}}`}} data-lang="de" onClick={{() => setLang('de')}}>DE</button>
        </div>
        <button className="theme-btn" onClick={{toggleTheme}} title="Toggle theme">
          <span id="theme-icon">{{theme === 'dark' ? '☀️' : '🌙'}}</span>
        </button>
        <a href="#contact" className="nav-cta" data-t="nav_contact">{{t('nav_contact')}}</a>
        <button className="menu-toggle" onClick={{toggleMenu}} aria-label="Menu">☰</button>
      </div>
    </nav>
  );
}}
"""

with open(r"c:\Projects\Moh-AI-Tech-master\src\components\layout\navbar.tsx", "w", encoding="utf-8") as f:
    f.write(navbar_content)

# Process Body
with open("body_raw.html", "r", encoding="utf-8") as f:
    body_html = f.read()

# some manual cleanup before regex
body_html = body_html.replace('onclick="submitForm()"', 'onClick={submitForm}')
body_html = convert_html_to_jsx(body_html)

# Add <em ...> replacement because the regex doesn't catch nested elements if they are deeply nested
# Wait, let's just make the page component output the HTML mostly and we can manually fix minor syntax issues.
page_content = f"""'use client';

import React, {{ useEffect }} from 'react';
import {{ useLanguage }} from '@/components/i18n-provider';

export default function Home() {{
  const {{ t }} = useLanguage();

  useEffect(() => {{
    const obs = new IntersectionObserver((entries) => {{
      entries.forEach(e => {{
        if (e.isIntersecting) e.target.classList.add('vis');
      }});
    }}, {{ threshold: 0.08 }});
    
    document.querySelectorAll('.fu').forEach(el => obs.observe(el));
    setTimeout(() => {{
      document.querySelectorAll('.hero-content .fu').forEach(el => el.classList.add('vis'));
    }}, 120);
  }}, []);

  const submitForm = () => {{
    const n = (document.getElementById('f-name') as HTMLInputElement).value.trim();
    const e = (document.getElementById('f-email') as HTMLInputElement).value.trim();
    if (!n || !e) {{ alert('Please fill in your name and email.'); return; }}
    const s = document.getElementById('form-success');
    if (s) s.style.display = 'block';
    setTimeout(() => {{ if (s) s.style.display = 'none'; }}, 6000);
  }};

  return (
    <>
{body_html}
    </>
  );
}}
"""

with open(r"c:\Projects\Moh-AI-Tech-master\src\app\page.tsx", "w", encoding="utf-8") as f:
    f.write(page_content)

print("Conversion complete!")
