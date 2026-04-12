const router = require ("express").Router();
const {
    addLecture,
    getLectures,
    deleteLecture
} = require("../controllers/lectureController");

const protect = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/isAdmin");

router.post("/", protect, isAdmin, addLecture);
router.get("/:courseId", getLectures);
router.delete("/:id", protect, isAdmin, deleteLecture);

module.exports = router;