const Enrollment = require("../models/Enrollment");

// Enroll student
exports.enrollCourse = async (req, res) => {
  try {
    const { courseId } = req.body;

    const enrollment = await Enrollment.create({
      studentId: req.user.id,
      courseId,
      instituteId: req.user.instituteId
    });

    res.json(enrollment);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// My courses
exports.myCourses = async (req, res) => {
  try {
    const courses = await Enrollment.find({
      studentId: req.user.id
    }).populate("courseId");

    res.json(courses);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Complete course
exports.completeCourse = async (req, res) => {
  try {
    const { courseId } = req.body;

    const enrollment = await Enrollment.findOne({
      studentId: req.user.id,
      courseId
    });

    enrollment.progress = 100;
    await enrollment.save();

    res.json({ msg: "Course completed", enrollment });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
