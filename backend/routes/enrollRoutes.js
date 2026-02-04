const express = require("express");
const router = express.Router();

const {
  enrollCourse,
  myCourses,
  completeCourse
} = require("../controllers/enrollController");

const { verifyToken, allowRoles } = require("../middleware/authMiddleware");

router.post("/", verifyToken, allowRoles("student"), enrollCourse);
router.get("/my", verifyToken, allowRoles("student"), myCourses);
router.post("/complete", verifyToken, allowRoles("student"), completeCourse);


// console.log(enrollCourse, myCourses, completeCourse);

module.exports = router;
