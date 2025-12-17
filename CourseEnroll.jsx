import React, { useState } from "react";

function CourseEnroll() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();

    if (studentName && course) {
      setEnrolledCourses([
        ...enrolledCourses,
        { name: studentName, course: course }
      ]);

      setStudentName("");
      setCourse("");
    }
  };

  return (
    <div className="enroll-container">
      <h2>🎓 Course Enrollment Form</h2>

      <form onSubmit={handleEnroll}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          required
          onChange={(e) => setStudentName(e.target.value)}
        />

        <select
          value={course}
          required
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option>Web Development</option>
          <option>Data Science</option>
          <option>Artificial Intelligence</option>
          <option>Internet of Things</option>
        </select>

        <button type="submit">Enroll</button>
      </form>

      <div className="list">
        <h3>📋 Enrolled Students</h3>

        {enrolledCourses.length === 0 && (
          <p>No enrollments yet</p>
        )}

        <ul>
          {enrolledCourses.map((item, index) => (
            <li key={index}>
              <b>{item.name}</b> – {item.course}
            </li>
          ))}
        </ul>
      </div>

      {/* Internal CSS */}
      <style>{`
        .enroll-container {
          width: 420px;
          margin: 40px auto;
          padding: 20px;
          border-radius: 10px;
          background: #f5f7fa;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        form input, form select {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        button {
          width: 100%;
          padding: 10px;
          background: #4CAF50;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #43a047;
        }

        .list {
          margin-top: 20px;
          padding: 15px;
          background: #e8f5e9;
          border-radius: 8px;
          text-align: left;
        }

        ul {
          padding-left: 18px;
        }

        li {
          margin-bottom: 6px;
        }
      `}</style>
    </div>
  );
}

export default CourseEnroll;