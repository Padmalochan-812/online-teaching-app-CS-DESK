const router = require("express").Router();
const {
  addQuiz,
  getQuiz
} = require("../controllers/quizController");

const protect = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

router.post("/", protect, isAdmin, addQuiz);
router.get("/:lectureId", getQuiz);

module.exports = router;