const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getUsers,
  toggleUser
} = require("../controllers/authController");

const { verifyToken, allowRoles } = require("../middleware/authMiddleware");
const User = require("../models/User");


router.post("/register", register);
router.post("/login", login);


router.get("/me", verifyToken, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});


router.get("/users", verifyToken, allowRoles("admin"), getUsers);
router.put("/toggle/:id", verifyToken, allowRoles("admin"), toggleUser);

module.exports = router;
