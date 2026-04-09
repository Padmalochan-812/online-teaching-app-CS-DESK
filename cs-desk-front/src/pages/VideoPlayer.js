import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function VideoPlayer() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [fullscreen, setFullscreen] = useState(false);

  // Convert YouTube URL to embed
  const getEmbedUrl = (url) => {
    if (!url) return "";

    let videoId = "";

    if (url.includes("v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1];
    }

    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Fetch course
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await API.get("/course");
        const found = res.data.find((c) => c._id === id);
        setCourse(found);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card">

          {/* 🎬 Title */}
          <h2 className="video-title">{course.title}</h2>
          <p className="video-desc">{course.description}</p>

          {/* 🎥 Normal Video */}
          <div className="video-wrapper">
            <iframe
              src={getEmbedUrl(course.videoUrl)}
              title="Video Player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <br />

          {/* 🔲 Fullscreen Button */}
          <button className="btn" onClick={() => setFullscreen(true)}>
            ⛶ Fullscreen
          </button>

          <br /><br />

          {/* 📄 PDF */}
          {course.pdf && (
            <a
              href={`http://localhost:5000/uploads/${course.pdf}`}
              target="_blank"
              rel="noreferrer"
            >
              📄 View Notes
            </a>
          )}

        </div>
      </div>

      {/* 🎬 FULLSCREEN MODAL */}
      {fullscreen && (
        <div className="video-modal">
          
          {/* ❌ Close Button */}
          <span
            className="close-btn"
            onClick={() => setFullscreen(false)}
          >
            ✖
          </span>

          {/* 🎥 Fullscreen Video */}
          <iframe
            src={getEmbedUrl(course.videoUrl) + "?autoplay=1"}
            title="Fullscreen Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>

        </div>
      )}
    </>
  );
}

export default VideoPlayer;