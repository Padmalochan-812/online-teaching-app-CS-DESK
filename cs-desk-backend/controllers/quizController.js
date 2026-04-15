const Result = require("../models/Result");
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

// SUBMIT QUIZ
exports.submitQuiz = async (req, res) => {
  const { lectureId, answers } = req.body;

  // Get all quiz questions
  const quizzes = await Quiz.find({ lecture: lectureId });

  let score = 0;

  quizzes.forEach((q, index) => {
    if (answers[index] === q.correctAnswer) {
      score++;
    }
  });

  // Save result
  const result = await Result.create({
    user: req.user,
    lecture: lectureId,
    score,
    total: quizzes.length
  });

  res.json({
    message: "Quiz submitted",
    score,
    total: quizzes.length
  });
};

// GET MY RESULTS
exports.getMyResults = async (req, res) => {
  try {
    const results = await Result.find({ user: req.user })
      .populate("lecture"); // get lecture details

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};