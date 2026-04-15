import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: ""
  });

  // Load courses
  const loadCourses = async () => {
    const res = await API.get("/course");
    setCourses(res.data);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  // Add course
  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/course", form);
    loadCourses();
  };

  // Delete
  const deleteCourse = async (id) => {
    await API.delete(`/course/${id}`);
    loadCourses();
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>📚 Manage Courses</h2>

        <div className="card">
          <form onSubmit={handleSubmit}>
            <input placeholder="Title" onChange={(e)=>setForm({...form, title:e.target.value})} />
            <textarea placeholder="Description" onChange={(e)=>setForm({...form, description:e.target.value})} />
            <button className="btn">Add Course</button>
          </form>
        </div>

        {courses.map((c) => (
          <div className="card" key={c._id}>
            <h3>{c.title}</h3>
            <p>{c.description}</p>

            <button className="btn" onClick={()=>deleteCourse(c._id)}>
              ❌ Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Courses;