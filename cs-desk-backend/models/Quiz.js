const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  lecture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture"
  },

  question: String,
  options: [String],
  correctAnswer: String
});

module.exports = mongoose.model("Quiz", quizSchema);