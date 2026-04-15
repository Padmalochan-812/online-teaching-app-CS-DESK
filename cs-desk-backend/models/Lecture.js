const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  pdf: String,
  ppt: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  }
});
module.exports = mongoose.model("Lecture", lectureSchema);