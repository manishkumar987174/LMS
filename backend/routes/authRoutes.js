const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getUsers,
  toggleUser
} = require("../controllers/authController");

const { verifyToken, allowRoles } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);

// Admin only routes
router.get("/users", verifyToken, allowRoles("admin"), getUsers);
router.put("/toggle/:id", verifyToken, allowRoles("admin"), toggleUser);

module.exports = router;
