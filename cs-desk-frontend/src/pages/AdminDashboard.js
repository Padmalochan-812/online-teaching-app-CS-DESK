import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2>👨‍🏫 Admin Dashboard</h2>

        <div className="card">
          <Link to="/admin/courses">
            <button className="btn">📚 Manage Courses</button>
          </Link>

          <br /><br />

          <Link to="/admin/lectures">
            <button className="btn">🎬 Manage Lectures</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;