import "../styles/navbar.css";

function Navbar() {
  const role = sessionStorage.getItem("role");
  return (
    <div className="navbar">
      <div className="logo">Acxiom</div>
      <div className="nav-right">
        <span className="user-role">
          {role}
        </span>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
