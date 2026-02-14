import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const data = await loginUser(form);
      localStorage.setItem("autohire_token", data.token);
      localStorage.setItem("autohire_user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Welcome back</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button className="btn primary" type="submit">
          Sign In
        </button>
        <p>
          Need an account? <Link to="/register">Create one</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
