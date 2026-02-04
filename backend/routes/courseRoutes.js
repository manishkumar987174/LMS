const express = require("express");
const router = express.Router();
const { createCourse, getCourses } = require("../controllers/courseController");
const { verifyToken, allowRoles } = require("../middleware/authMiddleware");

router.post(
  "/create",
  verifyToken,
  allowRoles("admin", "instructor"),
  createCourse
);

router.get(
  "/all",
  verifyToken,
  getCourses
);

module.exports = router;
