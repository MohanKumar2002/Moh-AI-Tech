# backend/app/api/routes/user.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserResponse
from app.db.session import SessionLocal
from app.crud import user as crud_user

router = APIRouter(prefix="/users", tags=["Users"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = crud_user.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud_user.create_user(db, user)
# backend/app/api/routes/user.py (add this route below others)

from app.dependencies.auth import get_current_user
from app.models.user import User as DBUser

@router.get("/me", response_model=UserResponse)
def read_current_user(current_user: DBUser = Depends(get_current_user)):
    return current_user
