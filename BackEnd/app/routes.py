# app/routes.py
from fastapi import APIRouter, Depends, status, HTTPException
from typing import List
from sqlalchemy.orm import Session
from . import crud, schemas, database

router = APIRouter(prefix="/stacks", tags=["stacks"])

#create stack
@router.post(
    "/",
    response_model=schemas.ApiResponse[schemas.StackResponse],
    status_code=status.HTTP_201_CREATED,
)
def create_stack(stack: schemas.StackCreate, db: Session = Depends(database.get_db)):
    db_stack = crud.create_stack(db, stack)
    return schemas.ApiResponse(
        success=True,
        message="Stack created successfully",
        data=db_stack
    )
# delete stck
@router.delete(
    "/{stack_id}",
    response_model=schemas.ApiResponse[schemas.StackResponse],
    status_code=status.HTTP_200_OK,
)
def delete_stack(stack_id: int, db: Session = Depends(database.get_db)):
    db_stack = crud.delete_stack(db, stack_id)
    if not db_stack:
        raise HTTPException(status_code=404, detail="Stack not found")
    return schemas.ApiResponse(
        success=True,
        message="Stack deleted successfully",
        data=db_stack
    )

# get stack
@router.get("/", response_model=List[schemas.StackResponse])
def list_stacks(skip: int = 0, limit: int = 50, db: Session = Depends(database.get_db)):
    return crud.get_stacks(db, skip=skip, limit=limit)

#get stack by ID
@router.get("/{stack_id}", response_model=schemas.StackResponse)
def get_stack(stack_id: int, db: Session = Depends(database.get_db)):
    s = crud.get_stack(db, stack_id)
    if not s:
        raise HTTPException(status_code=404, detail="Stack not found")
    return s
