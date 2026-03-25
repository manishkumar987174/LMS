import Layout from "../../components/Layout";
import "../../styles/studentdashboard.css";
import { useEffect, useState } from "react";
import api from "../../services/api";

function StudentDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/auth/me")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log("USER LOAD ERROR:", err);
      });
  }, []);

  // Loading state
  if (!user) {
    return (
      <Layout>
        <p style={{ color: "black" }}>Loading..</p>
      </Layout>
    );
  }

  const stats = {
    total: 12,
    enrolled: 4,
    completed: 2,
    certificates: 2,
  };

  const recentCourses = [
    { title: "Let Us C", progress: 80 },
    { title: "Java Basics", progress: 45 },
    { title: "Web Development", progress: 20 },
  ];

  return (
    <Layout>
      <h2 style={{ color: "black" }}>Welcome, {user.name}...</h2>
      {/* Stats */}
      <div className="card-grid">
        <div className="card">Total Courses: {stats.total}</div>
        <div className="card">Enrolled: {stats.enrolled}</div>
        <div className="card">Completed: {stats.completed}</div>
        <div className="card">Certificates: {stats.certificates}</div>
      </div>

      {/* My Courses */}
      <h3 style={{ color: "black", marginTop: 30 }}>My Courses</h3>
      <div className="course-list">
        {recentCourses.map((c, i) => (
          <div className="course-card" key={i}>
            <h4>{c.title}</h4>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: c.progress + "%" }}
              />
            </div>
            <p>{c.progress}% completed</p>
            <button className="btn">Continue</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default StudentDashboard;

