# app/schemas.py
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from datetime import datetime
from typing import Generic, TypeVar, Optional
from pydantic.generics import GenericModel

T = TypeVar("T")
# shape of each component in the stack
class WorkflowComponent(BaseModel):
    id: str
    type: str  # e.g. "User Query" component type 
    config: Optional[Dict[str, Any]] = {}
    class Config:
        orm_mode = True 
# request body when creating a stack (sent from frontend)
class StackCreate(BaseModel):
    name: str
    description: Optional[str] = None
    components: Optional[List[WorkflowComponent]] = None
    class Config:
        orm_mode = True 
# what we send back in responses from backend
class StackResponse(BaseModel):
    id: int
    name: str
    description: Optional[str]
    components: List[WorkflowComponent]
    created_at: datetime

    class Config:
        orm_mode = True  # allows SQLAlchemy objects to be returned directly


class ApiResponse(GenericModel, Generic[T]):
    success: bool
    message: str
    data: Optional[T] = None