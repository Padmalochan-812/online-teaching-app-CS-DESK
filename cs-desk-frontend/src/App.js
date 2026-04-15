import { BrowserRouter, Routes, Route } from "react-router-dom";

// User Pages
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard";
import Courses from "./pages/Courses";
import Lectures from "./pages/Lectures";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🎓 USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoPlayer />} />

        {/* 👨‍🏫 ADMIN ROUTES */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/courses" element={<Courses />} />
        <Route path="/admin/lectures" element={<Lectures />} />
        <Route path="/admin/quiz" element={<Quiz />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;