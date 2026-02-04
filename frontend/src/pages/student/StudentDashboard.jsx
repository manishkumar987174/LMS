import Layout from "../../components/Layout";
import "../../styles/dashboard.css";

function StudentDashboard() {
  return (
    <Layout>
      <h2>Student Dashboard</h2>

      <div className="card-grid">
        <div className="card">Total Courses: 12</div>
        <div className="card">Enrolled: 4</div>
        <div className="card">Completed: 2</div>
        <div className="card">Certificates: 2</div>
      </div>
    </Layout>
  );
}

export default StudentDashboard;
