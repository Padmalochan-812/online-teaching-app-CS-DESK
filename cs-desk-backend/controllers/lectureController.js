const Lecture = require("../models/Lecture");

// ADD LECTURE
exports.addLecture = async (req, res) => {
  const lecture = await Lecture.create({
    ...req.body,
    pdf: req.files?.pdf?.[0]?.filename,
    ppt: req.files?.ppt?.[0]?.filename
  });

  res.json(lecture);
};

// GET LECTURES BY COURSE
exports.getLectures = async (req, res) => {
  const lectures = await Lecture.find({
    course: req.params.courseId
  });

  res.json(lectures);
};

// DELETE
exports.deleteLecture = async (req, res) => {
  await Lecture.findByIdAndDelete(req.params.id);
  res.json({ message: "Lecture deleted" });
};