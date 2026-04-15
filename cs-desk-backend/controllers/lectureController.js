const Lecture = require("../models/Lecture");

// ✅ ADD LECTURE
exports.addLecture = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const { title, videoUrl, course } = req.body;

    // ✅ Validate required fields
    if (!title || !videoUrl || !course) {
      return res.status(400).json({
        message: "Title, videoUrl and course are required"
      });
    }

    const lecture = await Lecture.create({
      title,
      videoUrl,
      course,
      pdf: req.files?.pdf?.[0]?.filename || "",
      ppt: req.files?.ppt?.[0]?.filename || ""
    });

    res.status(201).json(lecture);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

// ✅ GET LECTURES BY COURSE
exports.getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find({
      course: req.params.courseId
    }).sort({ createdAt: 1 });

    res.json(lectures);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE LECTURE
exports.deleteLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);

    if (!lecture) {
      return res.status(404).json({
        message: "Lecture not found"
      });
    }

    await lecture.deleteOne();

    res.json({ message: "Lecture deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};