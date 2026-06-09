import re

# 1. Update navbar.tsx
with open(r'c:\Projects\Moh-AI-Tech-master\src\components\layout\navbar.tsx', 'r', encoding='utf-8') as f:
    nav = f.read()

pattern_nav = r'<a href="#" className="logo" style={{gap: \'0\'}}>\s*<img src="/logo.png" [^>]+ />\s*</a>'
repl_nav = '''<a href="#" className="logo">
        <img src="/logo.png" alt="Moh-AI Tech Logo" style={{ height: "42px", width: "auto", display: "block", objectFit: "contain" }} />
        <span>MOH-AI TECH</span>
      </a>'''
nav = re.sub(pattern_nav, repl_nav, nav)

with open(r'c:\Projects\Moh-AI-Tech-master\src\components\layout\navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(nav)

# 2. Update page.tsx
with open(r'c:\Projects\Moh-AI-Tech-master\src\app\page.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

pattern_page = r'<a href="#" className="logo" style={{\'gap\': \'0\'}}>\s*<img src="/logo.png" [^>]+ />\s*</a>'
repl_page = '''<a href="#" className="logo">
          <img src="/logo.png" alt="Moh-AI Tech Logo" style={{ height: "42px", width: "auto", display: "block", objectFit: "contain" }} />
          <span>MOH-AI TECH</span>
          </a>'''
page = re.sub(pattern_page, repl_page, page)

with open(r'c:\Projects\Moh-AI-Tech-master\src\app\page.tsx', 'w', encoding='utf-8') as f:
    f.write(page)

print('Added text next to logo')
