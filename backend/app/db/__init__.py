# backend/app/db/init_db.py
from .session import Base, engine
from app.models import user, blog  # Add other models here

def init_db():
    Base.metadata.create_all(bind=engine)
