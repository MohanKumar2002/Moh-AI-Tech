# backend/app/main.py
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import user, auth

is_production = os.getenv("ENVIRONMENT") == "production"

app = FastAPI(
    title="Moh AI Tech Backend",
    docs_url=None if is_production else "/docs",
    redoc_url=None if is_production else "/redoc",
    openapi_url=None if is_production else "/openapi.json"
)

# Enforce strict CORS policy
allowed_origins = [
    "https://moh-ai-tech.com",
    "https://www.moh-ai-tech.com",
    "http://localhost:3000",
    "http://localhost:9002",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(user.router)
app.include_router(auth.router)
