const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: Number,
  department: String,
  marks: Number
});

// Model
const Student = mongoose.model("Student", studentSchema);

// GET all students
app.get("/students", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

// POST add student
app.post("/students", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json({
    message: "Student added",
    student: student
  });
});

// PUT update student
app.put("/students/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updated) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({
    message: "Student updated",
    student: updated
  });
});

// DELETE student
app.delete("/students/:id", async (req, res) => {
  const deleted = await Student.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json({
    message: "Student deleted",
    student: deleted
  });
});

// Home route
app.get("/", (req, res) => {
  res.send("Student API with MongoDB is running");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});