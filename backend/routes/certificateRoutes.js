const express = require("express");
const router = express.Router();
const { generateCertificate } = require("../controllers/certificateController");
const { verifyToken, allowRoles } = require("../middleware/authMiddleware");

router.post(
  "/generate",
  verifyToken,
  allowRoles("student"),
  generateCertificate
);

module.exports = router;
