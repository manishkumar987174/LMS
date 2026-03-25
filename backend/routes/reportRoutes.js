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


router.get(
  "/admin",
  verifyToken,
  allowRoles("admin"),
  adminReport
);


router.get(
  "/student",
  verifyToken,
  allowRoles("student"),
  studentReport
);

module.exports = router;
