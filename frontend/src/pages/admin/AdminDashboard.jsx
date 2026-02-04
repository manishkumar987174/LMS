import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import "../../styles/dashboard.css";

function AdminDashboard() {
  return (
    <Layout>
      <h1 className="page-title">Admin Dashboard</h1>

      {/* Top Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Books</h3>
          <p>128</p>
        </div>
        <div className="stat-card">
          <h3>Total Students</h3>
          <p>42</p>
        </div>
        <div className="stat-card">
          <h3>Issued Books</h3>
          <p>36</p>
        </div>
        <div className="stat-card">
          <h3>Pending Fines</h3>
          <p>₹ 1240</p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="feature-grid">
        <Link to="/admin/books" className="feature-card">
          📚 Manage Books
        </Link>
        {/* <Link to="/admin/courses" className="feature-card">
          🎓 Manage Courses
        </Link> */}
       
        <div className="feature-card">👨‍🎓 Students</div>
        <div className="feature-card">📖 Issues</div>
        <div className="feature-card">💰 Fines</div>
        <div className="feature-card">📊 Reports</div>
        <div className="feature-card">⚙️ Settings</div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-box">
        <h3>Recent Activity</h3>
        <ul>
          <li>Admin added "Let Us C"</li>
          <li>Rahul issued "Java Basics"</li>
          <li>Neha returned "DBMS"</li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-box">
        <h3>Quick Actions</h3>
        <div className="quick-actions">
          <Link to="/admin/books">
            <button>Add Book</button>
          </Link>
          <button>View Reports</button>
          <button>Block User</button>
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;
