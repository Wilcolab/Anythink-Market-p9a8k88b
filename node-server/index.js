const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory tasks storage
const tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// GET / - Return hello message
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// POST /tasks - Add a new task
app.post("/tasks", (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: "Task text is required" });
  }
  
  tasks.push(text);
  res.status(201).json({ message: "Task added successfully" });
});

// GET /tasks - Return all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json({ tasks });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
