const express = require("express");
const router = express.Router();

const {
  addBook,
  getBooks,
  deleteBook
} = require("../controllers/bookController");

const { verifyToken, allowRoles } = require("../middleware/authMiddleware");

router.post("/add", verifyToken, allowRoles("admin"), addBook);
router.get("/all", verifyToken, getBooks);
router.delete("/:id", verifyToken, allowRoles("admin"), deleteBook);

module.exports = router;
