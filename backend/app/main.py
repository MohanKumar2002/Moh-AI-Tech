# FastAPI app entrypoint
# backend/app/main.py
from fastapi import FastAPI
from app.api.routes import user

app = FastAPI(title="Moh AI Tech Backend")

app.include_router(user.router)
# backend/app/main.py

from fastapi import FastAPI
from app.api.routes import user, auth

app = FastAPI(title="Moh AI Tech Backend")

app.include_router(user.router)
app.include_router(auth.router)
