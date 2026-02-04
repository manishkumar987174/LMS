import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
        console.log("SENDING:", email, password);
      const res = await api.post("/auth/login", { email, password });
      console.log("RESPONSE:", res.data);

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("role", res.data.role);
      console.log("STORED TOKEN:", sessionStorage.getItem("token"));

      if (res.data.role === "admin")
        navigate("/admin");
      else
        navigate("/student");
    } catch (err) {
      console.log("ERROR:", err);
      setError("Invalid credentials");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login to your LMS</p>

        {error && <p className="error">{error}</p>}

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={login}>Login</button>

        <p className="link-text">
          New user? <Link to="/register">Create account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
