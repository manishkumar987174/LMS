const express = require("express");
const router = express.Router();

const {
  adminReport,
  studentReport
} = require("../controllers/reportController");

const {
  verifyToken,
  allowRoles
} = require("../middleware/authMiddleware");

/**
 * ADMIN REPORTS
 * URL: /api/reports/admin
 */
router.get(
  "/admin",
  verifyToken,
  allowRoles("admin"),
  adminReport
);

/**
 * STUDENT REPORTS
 * URL: /api/reports/student
 */
router.get(
  "/student",
  verifyToken,
  allowRoles("student"),
  studentReport
);

module.exports = router;
