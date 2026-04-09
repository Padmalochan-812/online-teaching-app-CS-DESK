import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Admin() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    videoUrl: ""
  });

  const [pdf, setPdf] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("videoUrl", form.videoUrl);
    data.append("pdf", pdf);

    await API.post("/course/add", data);

    alert("Course Uploaded 🚀");
  };

  return (
    <>
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">
          <h2>🚀 Upload New Course</h2>

          <form onSubmit={handleSubmit}>
            <input placeholder="Course Title"
              onChange={(e)=>setForm({...form, title:e.target.value})} />

            <textarea placeholder="Description"
              onChange={(e)=>setForm({...form, description:e.target.value})} />

            <input placeholder="YouTube Link"
              onChange={(e)=>setForm({...form, videoUrl:e.target.value})} />

            <input type="file"
              onChange={(e)=>setPdf(e.target.files[0])} />

            <button className="btn">Upload Course 🚀</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Admin;