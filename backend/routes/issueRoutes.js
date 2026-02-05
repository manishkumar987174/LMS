// const router = require("express").Router();
// const { verifyToken, allowRoles } = require("../middleware/authMiddleware");
// const { issueBook } = require("../controllers/issueController");
// const Issue = require("../models/Issue");

// // Admin issues book
// router.post("/admin/issue", verifyToken, allowRoles("admin"), issueBook);

// // Student views own issued books
// router.get("/my", verifyToken, async (req, res) => {
//   try {
//     const issues = await Issue.find({ userId: req.user.id })
//       .populate("bookId");
//     res.json(issues);
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });

// // Student returns book
// router.post("/return/:id", verifyToken, async (req, res) => {
//   try {
//     const issue = await Issue.findById(req.params.id).populate("bookId");

//     if (!issue)
//       return res.status(404).json({ msg: "Issue not found" });

//     // quantity back
//     issue.bookId.quantity += 1;
//     await issue.bookId.save();

//     // fine calculation
//     const today = new Date();
//     const returnDate = new Date(issue.returnDate);
//     let fine = 0;

//     if (today > returnDate) {
//       const daysLate = Math.ceil(
//         (today - returnDate) / (1000 * 60 * 60 * 24)
//       );
//       fine = daysLate * 10;
//     }

//     await Issue.findByIdAndDelete(req.params.id);

//     res.json({ msg: "Book returned", fine });
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });

// module.exports = router;

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
