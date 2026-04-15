const Course = require("../models/Course");

// Course Create 
exports.createCourse = async (req, res) => {
    const course = await Course.create(req.body);
    res.json(course);
};

//Read All Course

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find(); // ✅ correct variable

    res.json(courses); // ✅ same name
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

//Update Course
exports.updateCourse = async (req, res) => {
    const course = await Course.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.json(course);
};

//Delete Course
exports.deleteCourse = async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.json({message: "Course Deleted"});
};
