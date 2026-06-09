import re

# 1. Update layout.tsx
with open(r'c:\Projects\Moh-AI-Tech-master\src\app\layout.tsx', 'r', encoding='utf-8') as f:
    layout = f.read()

# remove ThemeProvider import
layout = re.sub(r'import\s+{\s*ThemeProvider\s*}\s+from\s+[^;]+;\n', '', layout)
# replace ThemeProvider wrapper
layout = layout.replace('<ThemeProvider\n          attribute="data-theme"\n          defaultTheme="light"\n          enableSystem\n          disableTransitionOnChange\n        >', '')
layout = layout.replace('</ThemeProvider>', '')

with open(r'c:\Projects\Moh-AI-Tech-master\src\app\layout.tsx', 'w', encoding='utf-8') as f:
    f.write(layout)

# 2. Update navbar.tsx
with open(r'c:\Projects\Moh-AI-Tech-master\src\components\layout\navbar.tsx', 'r', encoding='utf-8') as f:
    nav = f.read()

# remove useTheme import
nav = re.sub(r'import\s+{\s*useTheme\s*}\s+from\s+[\'"].*?[\'"];\n', '', nav)
# remove useTheme hook call
nav = re.sub(r'\s*const\s+{\s*theme,\s*setTheme\s*}\s*=\s*useTheme\(\);\n', '', nav)
# remove toggleTheme
nav = re.sub(r'\s*const\s+toggleTheme\s*=\s*\(\)\s*=>\s*{[^}]+};\n', '', nav)
# remove button
nav = re.sub(r'\s*<button className="theme-btn".*?</button>\n', '\n', nav, flags=re.DOTALL)

with open(r'c:\Projects\Moh-AI-Tech-master\src\components\layout\navbar.tsx', 'w', encoding='utf-8') as f:
    f.write(nav)

print('Dark mode removed')
