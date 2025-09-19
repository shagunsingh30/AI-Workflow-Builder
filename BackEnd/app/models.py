# app/models.py
from sqlalchemy import Column, Integer, String, DateTime, func
from sqlalchemy.dialects.postgresql import JSONB
from .database import Base

# shape of each entity that will be stored in the db
class Stack(Base):
    __tablename__ = "stacks" # represents the tablename in postgres.

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, unique=True, index=True)
    description = Column(String, nullable=True)
    components = Column(JSONB, nullable=False)         # stores the 4 default components
    created_at = Column(DateTime(timezone=True), server_default=func.now())
