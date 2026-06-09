import re

def add_grad_text(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the plain span with the grad-text span
    content = content.replace('<span>MOH-AI TECH</span>', '<span className="grad-text" style={{ marginLeft: "8px", fontWeight: "800", fontSize: "18px", letterSpacing: "1px" }}>MOH-AI TECH</span>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

add_grad_text(r'c:\Projects\Moh-AI-Tech-master\src\components\layout\navbar.tsx')
add_grad_text(r'c:\Projects\Moh-AI-Tech-master\src\app\page.tsx')

print('Added grad-text class and styling to logo text')
