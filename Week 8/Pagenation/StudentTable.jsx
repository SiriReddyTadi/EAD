import React, { useState } from "react";
import "./App.css";

function StudentTable() {
  // Sample Data
  const students = [
    { id: 1, name: "Ravi Kumar", branch: "CSE", year: "3rd" },
    { id: 2, name: "Anjali Sharma", branch: "IT", year: "2nd" },
    { id: 3, name: "Rahul Verma", branch: "ECE", year: "4th" },
    { id: 4, name: "Sneha Reddy", branch: "CSE", year: "1st" },
    { id: 5, name: "Arjun Mehta", branch: "ME", year: "3rd" },
    { id: 6, name: "Pooja Singh", branch: "EEE", year: "2nd" },
    { id: 7, name: "Kiran Patel", branch: "IT", year: "4th" },
    { id: 8, name: "Neha Gupta", branch: "CSE", year: "1st" },
    { id: 9, name: "Amit Das", branch: "ECE", year: "2nd" },
    { id: 10, name: "Divya Nair", branch: "EEE", year: "3rd" }
  ];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  // Filter Logic
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination Logic
  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredStudents.length / recordsPerPage);

  return (
    <div className="container">
      <h2>Student Table</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // reset page
        }}
        className="search"
      />

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.length > 0 ? (
            currentStudents.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.branch}</td>
                <td>{s.year}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No results found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span> Page {currentPage} of {totalPages} </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default StudentTable;