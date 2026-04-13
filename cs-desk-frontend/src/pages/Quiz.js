import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Quiz() {
  const [form, setForm] = useState({
    lecture: "",
    question: "",
    options: "",
    correctAnswer: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/quiz", {
      ...form,
      options: form.options.split(",")
    });

    alert("Quiz Added");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>🧠 Add Quiz</h2>

        <div className="card">
          <form onSubmit={handleSubmit}>
            <input placeholder="Lecture ID" onChange={(e)=>setForm({...form, lecture:e.target.value})} />
            <input placeholder="Question" onChange={(e)=>setForm({...form, question:e.target.value})} />
            <input placeholder="Options (comma separated)" onChange={(e)=>setForm({...form, options:e.target.value})} />
            <input placeholder="Correct Answer" onChange={(e)=>setForm({...form, correctAnswer:e.target.value})} />

            <button className="btn">Add Quiz</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Quiz;