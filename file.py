import os

# Define the directory structure
dirs = [
    "backend/app/models",
    "backend/app/schemas",
    "backend/app/crud",
    "backend/app/api/routes",
    "backend/app/db",
    "backend/alembic"
]

# Define the files to create in each directory
files = {
    "backend/app/__init__.py": "",
    "backend/app/main.py": "# FastAPI app entrypoint\n",
    "backend/app/models/__init__.py": "",
    "backend/app/models/user.py": "# User model\n",
    "backend/app/models/blog.py": "# Blog model\n",
    "backend/app/schemas/user.py": "",
    "backend/app/schemas/blog.py": "",
    "backend/app/crud/user.py": "",
    "backend/app/crud/blog.py": "",
    "backend/app/api/__init__.py": "",
    "backend/app/api/deps.py": "# Dependency injection\n",
    "backend/app/api/routes/auth.py": "",
    "backend/app/api/routes/blog.py": "",
    "backend/app/api/routes/user.py": "",
    "backend/app/db/__init__.py": "",
    "backend/app/db/base.py": "",
    "backend/app/db/session.py": "# Connects to PostgreSQL\n",
    "backend/.env": "# Store DB credentials securely\n",
    "backend/requirements.txt": "# FastAPI, psycopg2, etc.\n",
    "backend/run.py": "# Start the server\n"
}

# Create directories
for d in dirs:
    os.makedirs(d, exist_ok=True)  # exist_ok avoids errors if dir exists[3]

# Create files (and parent dirs if needed)
for filepath, content in files.items():
    dirpath = os.path.dirname(filepath)
    os.makedirs(dirpath, exist_ok=True)
    with open(filepath, "w") as f:
        f.write(content)
