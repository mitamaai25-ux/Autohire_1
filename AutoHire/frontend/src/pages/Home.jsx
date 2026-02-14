import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="hero-page">
      <header className="hero-card">
        <p className="brand">AutoHire</p>
        <h1>Hire faster with AI-assisted recruiting workflows</h1>
        <p>
          AutoHire helps hiring teams discover top talent, track interviews, and
          make better hiring decisions from one clean dashboard.
        </p>
        <div className="actions">
          <Link to="/register" className="btn primary">
            Get Started
          </Link>
          <Link to="/login" className="btn secondary">
            Sign In
          </Link>
        </div>
      </header>
    </main>
  );
}

export default Home;
