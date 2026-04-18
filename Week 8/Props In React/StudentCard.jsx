import React from "react";
import "./App.css";

function StudentCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="student" className="profile" />
      <h2>{props.name}</h2>
      <p><b>Branch:</b> {props.branch}</p>
      <p><b>Year:</b> {props.year}</p>
    </div>
  );
}

export default StudentCard;