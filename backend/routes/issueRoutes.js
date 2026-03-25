const express = require("express");
const router = express.Router();

const {
  issueBook,
  getMyIssues,
  returnBook
} = require("../controllers/issueController");

const {
  verifyToken,
  allowRoles
} = require("../middleware/authMiddleware");

// Admin issues book
router.post(
  "/admin/issue",
  verifyToken,
  allowRoles("admin"),
  issueBook
);

// Student sees issued books
router.get(
  "/my",
  verifyToken,
  allowRoles("student"),
  getMyIssues
);

// Return book
router.post(
  "/return/:id",
  verifyToken,
  returnBook
);

module.exports = router;
