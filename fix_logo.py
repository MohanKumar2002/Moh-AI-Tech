import re

with open(r'c:\Projects\Moh-AI-Tech-master\src\app\page.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

# Replace the img tag that contains data:image/jpeg;base64 with a clean logo.png tag
pattern = r'<img src="data:image/[^"]+" alt="Moh-AI Tech Logo" style={{[^}]+}} />'
replacement = '<img src="/logo.png" alt="Moh-AI Tech Logo" style={{ height: "42px", width: "auto", display: "block", objectFit: "contain" }} />'

page = re.sub(pattern, replacement, page)

with open(r'c:\Projects\Moh-AI-Tech-master\src\app\page.tsx', 'w', encoding='utf-8') as f:
    f.write(page)

print("Fixed logo")
