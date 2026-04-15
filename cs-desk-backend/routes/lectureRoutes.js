const router = require("express").Router();
const {
  addLecture,
  getLectures,
  deleteLecture
} = require("../controllers/lectureController");

const protect = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

// ✅ ADD LECTURE (WITH FILE UPLOAD)
router.post(
  "/",
  protect,
  isAdmin,
  upload.fields([
    { name: "pdf", maxCount: 1 },
    { name: "ppt", maxCount: 1 }
  ]),
  addLecture
);

// GET LECTURES BY COURSE
router.get("/:courseId", getLectures);

// DELETE LECTURE
router.delete("/:id", protect, isAdmin, deleteLecture);

module.exports = router;