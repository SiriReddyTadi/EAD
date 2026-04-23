const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Student API!");
});

let students = [
  { id: 101, name: "Siri", branch: "IT" },
  { id: 102, name: "Srujana", branch: "IT" },
  { id: 103, name: "Vainavi", branch: "IT" },
  { id: 104, name: "Pramoda", branch: "IT" }
];

let nextId = 105;

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const { name, branch } = req.body;

  if (!name || !branch) {
    return res.status(400).json({ message: "Name and branch required" });
  }

  const newStudent = {
    id: nextId++,
    name,
    branch
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added",
    student: newStudent
  });
});

app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, branch } = req.body;

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (name) student.name = name;
  if (branch) student.branch = branch;

  res.json({
    message: "Student updated",
    student
  });
});

app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deleted = students.splice(index, 1);

  res.json({
    message: "Student deleted",
    student: deleted[0]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});