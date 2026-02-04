import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const role = sessionStorage.getItem("role");

  return (
    <div className="sidebar">
      {role === "student" && (
        <>
          <NavLink to="/student">Dashboard</NavLink>
          <NavLink to="/student">My Courses</NavLink>
          <NavLink to="/student">Certificates</NavLink>
          <NavLink to="/student">Profile</NavLink>
        </>
      )}

      {role === "admin" && (
        <>
          <NavLink to="/admin" end>
            Dashboard
          </NavLink>
          <NavLink to="/admin/courses">Manage Courses</NavLink>
          <NavLink to="/admin/users">Users</NavLink>
          <NavLink to="/admin/enrollments">Enrollments</NavLink>
          <NavLink
            to="#" end
            className="nav-item disabled"
            onClick={(e) => {
              e.preventDefault();
              alert("We can modify");
            }}
          >
            ⚙️ Settings
          </NavLink>
        </>
      )}
    </div>
  );
}

export default Sidebar;
