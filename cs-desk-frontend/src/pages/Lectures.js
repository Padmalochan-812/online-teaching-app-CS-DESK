import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Lectures() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [lectures, setLectures] = useState([]);

  const [form, setForm] = useState({
    title: "",
    videoUrl: ""
  });

  // Load courses
  useEffect(() => {
    API.get("/course").then(res => setCourses(res.data));
  }, []);

  // Load lectures
  const loadLectures = async (courseId) => {
    const res = await API.get(`/lecture/${courseId}`);
    setLectures(res.data);
  };

  // Add lecture
  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/lecture", {
      ...form,
      course: selectedCourse
    });

    loadLectures(selectedCourse);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>🎬 Manage Lectures</h2>

        <div className="card">
          <select onChange={(e)=>{
            setSelectedCourse(e.target.value);
            loadLectures(e.target.value);
          }}>
            <option>Select Course</option>
            {courses.map(c => (
              <option value={c._id}>{c.title}</option>
            ))}
          </select>

          <br /><br />

          <form onSubmit={handleSubmit}>
            <input placeholder="Lecture Title" onChange={(e)=>setForm({...form, title:e.target.value})} />
            <input placeholder="YouTube URL" onChange={(e)=>setForm({...form, videoUrl:e.target.value})} />
            <button className="btn">Add Lecture</button>
          </form>
        </div>

        {lectures.map(l => (
          <div className="card" key={l._id}>
            <h4>{l.title}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default Lectures;