const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  const { title, description, price } = req.body;

  const course = await Course.create({
    title,
    description,
    price,
    instructorId: req.user.id,
    instituteId: req.user.instituteId
  });

  res.json(course);
};

// Get all courses (Student)
exports.getCourses = async (req, res) => {
  const courses = await Course.find({
    instituteId: req.user.instituteId
  });
  res.json(courses);
};
