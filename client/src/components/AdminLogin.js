import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      localStorage.setItem("adminToken", data.token);

      navigate("/admin");
    } catch (err) {
      console.error(err);
      setError("Server connection failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-icon">🔐</div>

        <h1>Admin Login</h1>

        <p className="login-subtitle">
          Login to manage EventEase registrations
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p style={{ color: "#ffdddd", fontWeight: "bold" }}>
              {error}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <p className="login-note">
          🔒 Authorized administrators only
        </p>

      </div>
    </div>
  );
}

export default AdminLogin;