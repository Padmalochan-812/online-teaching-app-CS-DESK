const Quiz = require("../models/Quiz");

// ADD QUIZ
exports.addQuiz = async (req, res) => {
  const quiz = await Quiz.create(req.body);
  res.json(quiz);
};

// GET QUIZ BY LECTURE
exports.getQuiz = async (req, res) => {
  const quiz = await Quiz.find({
    lecture: req.params.lectureId
  });

  res.json(quiz);
};