import { useState } from "react";
import Layout from "../../components/Layout";

function ManageEnrollments() {
  const [enrollments, setEnrollments] = useState([
    {
      id: 1,
      student: "Rahul",
      course: "React Basics",
      status: "Enrolled"
    },
    {
      id: 2,
      student: "Neha",
      course: "Java Fundamentals",
      status: "Completed"
    },
    {
      id: 3,
      student: "Manish",
      course: "Java Fundamentals",
      status: "Completed"
    },
    {
      id: 4,
      student: "Vijay",
      course: "Java Fundamentals",
      status: "Completed"
    }
  ]);

  const removeEnrollment = (id) => {
    setEnrollments(enrollments.filter(e => e.id !== id));
  };

  return (
    <Layout>
      <h1 className="page-title">Enrollments</h1>

      <div className="box">
        <h3>Student Enrollments</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student</th>
              <th>Course</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {enrollments.map(e => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.student}</td>
                <td>{e.course}</td>
                <td>
                  <span style={{
                    color: e.status === "Completed" ? "#22c55e" : "#eab308",
                    fontWeight: "bold"
                  }}>
                    {e.status}
                  </span>
                </td>
                <td>
                  <button onClick={() => removeEnrollment(e.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {enrollments.length === 0 && (
          <p style={{ opacity: 0.6 }}>No enrollments found.</p>
        )}
      </div>
    </Layout>
  );
}

export default ManageEnrollments;
