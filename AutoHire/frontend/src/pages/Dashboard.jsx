import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const jobs = [
  { title: "Frontend Engineer", location: "Remote", status: "Interviewing" },
  { title: "Product Designer", location: "Berlin", status: "Review" },
  { title: "Data Analyst", location: "New York", status: "Offer" }
];

function Dashboard() {
  const navigate = useNavigate();
  const user = useMemo(() => {
    const raw = localStorage.getItem("autohire_user");
    return raw ? JSON.parse(raw) : { name: "Recruiter" };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("autohire_token");
    localStorage.removeItem("autohire_user");
    navigate("/");
  };

  return (
    <section className="dashboard">
      <div className="dashboard-head">
        <div>
          <p className="brand">AutoHire</p>
          <h2>Hello, {user.name}</h2>
          <p>Track your active hiring pipeline in one place.</p>
        </div>
        <button className="btn secondary" onClick={handleLogout}>
          Log out
        </button>
      </div>

      <div className="grid">
        {jobs.map((job) => (
          <article key={job.title} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <span>{job.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
