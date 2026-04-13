const router = require("express").Router();
const {
    createCourse,
    getCourse,
    updateCourse,
    deleteCourse
} = require("../controllers/courseController");

const protect = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

router.post("/", protect,isAdmin, createCourse);
router.get("/", getCourse);
router.put("/:id", protect, isAdmin, updateCourse);
router.delete("/:id", protect, isAdmin, deleteCourse);

module.exports = router;