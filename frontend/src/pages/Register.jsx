import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const register = async () => {
    console.log(name,email,password,role);
    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
        role,
        instituteId: "111111111111111111111111"
      });
      alert("Account created successfully!");
      navigate("/");
    } catch (err) {
      alert("Registration failed",err);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="subtitle">Join the LMS platform</p>

        <input placeholder="Full Name" onChange={e => setName(e.target.value)} />
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

        <select onChange={e => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="admin">Librarian</option>
        </select>

        <button type="button" onClick={register}>Register</button>

        <p className="link-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
