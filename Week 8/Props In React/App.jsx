import React from "react";
import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student Profiles</h1>

      <div className="card-container">
        <StudentCard
          name="Ravi Kumar"
          branch="CSE"
          year="3rd Year"
          image="https://via.placeholder.com/150"
        />

        <StudentCard
          name="Anjali Sharma"
          branch="IT"
          year="2nd Year"
          image="https://via.placeholder.com/150"
        />

        <StudentCard
          name="Rahul Verma"
          branch="ECE"
          year="4th Year"
          image="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
}

export default App;