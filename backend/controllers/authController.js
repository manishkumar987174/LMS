const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password, role, instituteId } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed,
      role,
      instituteId,
      active: true   // 👈 default active
    });

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ msg: "User not found" });

    if (!user.active)
      return res.status(403).json({ msg: "Account blocked" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ msg: "Wrong password" });

    const token = jwt.sign(
      { id: user._id, role: user.role, instituteId: user.instituteId },
      "SECRET123",          // 👈 SAME SECRET AS MIDDLEWARE
      { expiresIn: "1d" }
    );

    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET ALL USERS (admin)
exports.getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// TOGGLE USER ACTIVE/BLOCK
exports.toggleUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.active = !user.active;
  await user.save();
  res.json(user);
};
