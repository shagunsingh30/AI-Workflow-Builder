# 🛠️ AI Workflow Builder

AI Workflow Builder is a full-stack application that lets you create, manage, and visualize AI workflows using a drag-and-drop canvas.
It consists of a React (TypeScript) frontend and a FastAPI (Python) backend.

🚀 Features
🔹 Create and manage AI Stacks
🔹 Drag-and-drop workflow builder with React Flow
🔹 Save and load workflows from the backend
🔹 RESTful API with FastAPI
🔹 Redux Toolkit + Saga for state management
🔹 PostgreSQL (or SQLite for local dev)

## Project Structure
```
AI-Workflow-Builder/
│── backend/        # FastAPI app
│   ├── app/
│   ├── requirements.txt
│   └── ...
│
│── frontend/       # React + TS app
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md

```
### ⚙️ Backend Setup (FastAPI)

1. Navigate to the backend directory:
```
cd backend
```
2. Create a virtual environment:
```
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
```
3. Install dependencies
```
pip install -r requirements.txt
```
4. Set up environment variables in .env:
```
DATABASE_URL=sqlite:///./app.db   # Or PostgreSQL connection string
```
5. API will be available at **http://127.0.0.1:8000**

### 🎨 Frontend Setup (React + TS)
1. Navigate to the frontend directory:
``` cd FrontEnd
```
2. Install dependencies
```
npm install
```
3. Create api.ts file in frontend/store:
```typeScript
export const API_URL = "http://127.0.0.1:8000/stacks";
```
4. Run the dev server
```
npm run dev
```
## 🛠️ Scripts

1. Backend (after activating the virtual environment and doing the installations)
```
uvicorn app.main:app --reload → start backend
```

2. Frontend
```
npm run dev → start frontend dev server
```



