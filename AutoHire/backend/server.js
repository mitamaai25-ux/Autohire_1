import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [];

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "AutoHire API" });
});

app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const exists = users.find((user) => user.email === email);
  if (exists) {
    return res.status(409).json({ message: "User already exists." });
  }

  const user = { id: Date.now().toString(), name, email, password };
  users.push(user);

  return res.status(201).json({
    message: "Registration successful.",
    user: { id: user.id, name: user.name, email: user.email }
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const user = users.find((item) => item.email === email && item.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  return res.json({
    message: "Login successful.",
    token: "autohire-demo-token",
    user: { id: user.id, name: user.name, email: user.email }
  });
});

app.listen(PORT, () => {
  console.log(`AutoHire backend running on http://localhost:${PORT}`);
});
