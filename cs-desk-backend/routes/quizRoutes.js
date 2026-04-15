const express = require("express");
const router = express.Router();

const {
  addQuiz,
  getQuiz,
  submitQuiz,
  getMyResults
} = require("../controllers/quizController");

const protect = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

// ADD QUIZ (Admin)
router.post("/", protect, isAdmin, addQuiz);

// SUBMIT QUIZ (Student)
router.post("/submit", protect, submitQuiz);

// GET MY RESULTS (Student)
router.get("/my-results", protect, getMyResults);

// GET QUIZ BY LECTURE
router.get("/:lectureId", getQuiz);

module.exports = router;