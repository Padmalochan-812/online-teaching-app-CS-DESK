import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/login", form);
      alert("Login Success 🚀");

      // redirect to home after login
      navigate("/");
    } catch (err) {
      alert("Login Failed ❌");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2>🔐 Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            required
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          {/* 👁 Show/Hide Password */}
          <p
            style={{ cursor: "pointer", fontSize: "13px", color: "#fff" }}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </p>

          <button className="btn">Login</button>

        </form>

        {/* Register Link */}
        <p style={{ marginTop: "15px" }}>
          Don’t have an account?{" "}
          <Link to="/register" style={{ color: "#ffd700", fontWeight: "bold" }}>
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;