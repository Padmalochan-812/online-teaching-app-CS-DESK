import { useState } from "react";
import API from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    alert("Registered Successfully");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>📝 Register</h2>

        <form onSubmit={handleSubmit}>
          <input placeholder="Name"
            onChange={(e)=>setForm({...form, name:e.target.value})} />

          <input placeholder="Email"
            onChange={(e)=>setForm({...form, email:e.target.value})} />

          <input type="password" placeholder="Password"
            onChange={(e)=>setForm({...form, password:e.target.value})} />

          <button className="btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;