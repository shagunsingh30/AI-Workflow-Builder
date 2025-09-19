from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware

from . import models, database
from .routes import router as stacks_router

# CORS origins
origins = [
    "http://localhost:5173",  # your frontend URL
]

@asynccontextmanager
async def lifespan(app: FastAPI):
    database.Base.metadata.create_all(bind=database.engine)
    print("Tables ensured")
    yield  # App runs here
    print("Shutting down app")

# Create FastAPI app
app = FastAPI(
    title="AI Workflow Builder - Backend (Stacks)",
    lifespan=lifespan
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include your routes
app.include_router(stacks_router)
