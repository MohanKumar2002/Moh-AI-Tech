from fastapi import FastAPI
from app.api.routes import user, auth

app = FastAPI(title="Moh AI Tech Backend")

app.include_router(user.router)
app.include_router(auth.router)

@app.get("/")
async def root():
    return {"message": "Welcome to Moh AI Tech Backend!"}
