import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await API.get("/course");
      setCourses(res.data);
    };
    fetchCourses();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>📚 All Courses</h2>

        {courses.map((c) => (
          <div className="card" key={c._id}>
            <h3>{c.title}</h3>
            <p>{c.description}</p>

            {/* PDF */}
            {c.pdf && (
              <a
                href={`http://localhost:5000/uploads/${c.pdf}`}
                target="_blank"
                rel="noreferrer"
              >
                📄 View Notes
              </a>
            )}

            <br /><br />

            {/* 🎬 Watch Video Button */}
            <button
              className="btn"
              onClick={() => navigate(`/video/${c._id}`)}
            >
              ▶️ Watch Video
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;