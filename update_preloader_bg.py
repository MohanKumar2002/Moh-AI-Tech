import re

with open(r'c:\Projects\Moh-AI-Tech-master\src\components\preloader.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Background colors
content = content.replace('bg-[#07080C]', 'bg-[#F7F8FC]')

# 2. Terminal text color
content = content.replace('text-cyan-400', 'text-[#2C1FA8] font-semibold')
content = content.replace('bg-cyan-400', 'bg-[#2C1FA8]')

# 3. Loading bar
content = content.replace('bg-white shadow-[0_0_8px_#fff]', 'bg-[#2C1FA8] shadow-[0_0_8px_#2C1FA8]')

with open(r'c:\Projects\Moh-AI-Tech-master\src\components\preloader.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Preloader colors updated to white/light mode.')
