import React, { useState } from "react";

const initialStudents = [
  { id: 1, name: "Alice", present: false },
  { id: 2, name: "Bob", present: false },
  { id: 3, name: "Charlie", present: false },
  { id: 4, name: "Diana", present: false },
];

function AttendanceTracker() {
  const [students, setStudents] = useState(initialStudents);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>📋 Attendance Tracker</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        <span style={{ color: "green" }}>✅ Present: {presentCount}</span>
        <span style={{ color: "red" }}>❌ Absent: {absentCount}</span>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((student) => (
          <li
            key={student.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
              padding: "8px",
              border: "1px solid #eee",
              borderRadius: "6px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: student.present ? "green" : "red",
              }}
            >
              {student.name}
            </span>

            <button
              onClick={() => toggleAttendance(student.id)}
              style={{
                padding: "6px 10px",
                cursor: "pointer",
                backgroundColor: student.present ? "#ffdddd" : "#ddffdd",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              Mark {student.present ? "Absent" : "Present"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceTracker;
