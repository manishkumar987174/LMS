import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/layout.css";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
