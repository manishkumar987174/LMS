const express = require("express");
const router = express.Router();
const { verifyToken, allowRoles } = require("../middleware/authMiddleware");

router.get(
  "/admin",
  verifyToken,
  allowRoles("admin", "superadmin"),
  (req, res) => {
    res.json({ msg: "Welcome Admin" });
  }
);

router.get(
  "/student",
  verifyToken,
  allowRoles("student"),
  (req, res) => {
    res.json({ msg: "Welcome Student" });
  }
);

module.exports = router;
