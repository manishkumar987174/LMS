import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const role = sessionStorage.getItem("role");

  const linkClass = ({ isActive }) =>
    isActive ? "nav-item active" : "nav-item";

  return (
    <div className="sidebar">
      {role === "student" && (
        <>
          <NavLink to="/student" end className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/student/issues" className={linkClass}>
            My Issued Books
          </NavLink>

          <NavLink to="/student/" className={linkClass}>
            My Courses
          </NavLink>

          <NavLink to="/student/certificates" className={linkClass}>
            Certificates
          </NavLink>

          <NavLink to="/student/profile" className={linkClass}>
            Profile
          </NavLink>
        </>
      )}

      {role === "admin" && (
        <>
          <NavLink to="/admin" end className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/admin/courses" className={linkClass}>
            Manage Courses
          </NavLink>

          <NavLink to="/admin/users" className={linkClass}>
            Users
          </NavLink>

          <NavLink to="/admin/enrollments" className={linkClass}>
            Enrollments
          </NavLink>

          <NavLink to="/admin/issue" className={linkClass}>
            Issue Book
          </NavLink>

          <a
            href="#"
            className="nav-item disabled"
            onClick={(e) => {
              e.preventDefault();
              alert("We can modify");
            }}
          >
            ⚙️ Settings
          </a>
        </>
      )}
    </div>
  );
}

export default Sidebar;
