# Databse function calls 
import uuid
from sqlalchemy.orm import Session
from . import models, schemas

DEFAULT_COMPONENT_TYPES = [
    "User Query",
    "Knowledge Base",
    "LLM Engine",
    "Output",
]

# helper function to auto-generate default components
def _generate_default_components():
    comps = []
    for t in DEFAULT_COMPONENT_TYPES:
        comps.append({
            "id": uuid.uuid4().hex,  # random id for each component
            "type": t,
            "config": {}
        })
    return comps

# create a new stack
def create_stack(db: Session, stack_in: schemas.StackCreate):
    comps = stack_in.components if stack_in.components else _generate_default_components()
    db_stack = models.Stack(
        name=stack_in.name,
        description=stack_in.description,
        components=comps
    )
    db.add(db_stack)
    db.commit()
    db.refresh(db_stack)
    return db_stack

# delete stack
def delete_stack(db: Session, stack_id: int):
    stack = db.query(models.Stack).filter(models.Stack.id == stack_id).first()
    if not stack:
        return None
    db.delete(stack)
    db.commit()
    return stack

# get all stacks
def get_stacks(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Stack).offset(skip).limit(limit).all()

# get single stack by id
def get_stack(db: Session, stack_id: int):
    return db.query(models.Stack).filter(models.Stack.id == stack_id).first()

