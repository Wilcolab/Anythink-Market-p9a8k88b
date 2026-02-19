# Anythink Market - Multi-Server Application

This project contains both a **Python FastAPI server** and a **Node.js Express server** that provide identical endpoints for managing a task list. The Node.js server was created by migrating the Python FastAPI endpoints to Express.js.

## Project Structure

```
.
├── python-server/
│   ├── src/
│   │   ├── main.py                 # FastAPI server implementation
│   │   └── __init__.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── README.md
├── node-server/
│   ├── index.js                    # Express server implementation
│   ├── package.json
│   ├── Dockerfile
│   ├── .dockerignore
│   └── README.md
├── docker-compose.yml              # Multi-container orchestration
└── README.md
```

## Getting Started

### Option 1: Run Both Servers with Docker Compose (Recommended)

```bash
docker compose up
```

This will start both services:
- **Python Server**: http://localhost:8000
- **Node.js Server**: http://localhost:8001

### Option 2: Run Servers Individually

**Python Server:**
```bash
cd python-server
pip install -r requirements.txt
python -m uvicorn src.main:app --host 0.0.0.0 --port 8000
```

**Node.js Server:**
```bash
cd node-server
npm install
PORT=8001 npm start
```

### Option 3: Run Servers in Separate Terminals with Docker

**Terminal 1 (Python):**
```bash
docker compose up python-server
```

**Terminal 2 (Node.js):**
```bash
docker compose up node-server
```

## API Routes

Both servers provide identical API endpoints:

### GET /
Returns a greeting message.

**Response:**
```
Hello World
```

### POST /tasks
Adds a new task to the task list.

**Request Body:**
```json
{
  "text": "Your task description"
}
```

**Response:**
```json
{
  "message": "Task added successfully"
}
```

### GET /tasks
Retrieves all tasks from the task list.

**Response:**
```json
{
  "tasks": [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
  ]
}
```

## Testing the Endpoints

### Using curl:

```bash
# Test root endpoint
curl http://localhost:8001/

# Get all tasks
curl http://localhost:8001/tasks

# Add a new task
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "New task"}'
```

## Server Comparison

| Feature | Python (FastAPI) | Node.js (Express) |
|---------|------------------|-------------------|
| Framework | FastAPI | Express |
| Port | 8000 | 8001 |
| Language | Python 3.9 | JavaScript (Node 18) |
| API Format | JSON | JSON |
| Task Storage | In-memory list | In-memory array |

## Environment Variables

- `PORT`: The port on which the Node.js server runs (default: 8001)

## Docker Configuration

Both servers are containerized with:
- **Python**: Python 3.9-slim base image
- **Node.js**: Node 18-alpine base image

Volume mounts preserve code changes during development while maintaining installed dependencies in the container.
