import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Create your AutoHire account</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          required
        />
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
          Register
        </button>
        <p>
          Already registered? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
