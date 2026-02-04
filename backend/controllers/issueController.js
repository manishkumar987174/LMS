const Issue = require("../models/Issue");
const Book = require("../models/Book");

exports.issueBook = async (req, res) => {
  try {
    const { userId, bookId, issueDate, returnDate, remarks } = req.body;

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ msg: "Book not found" });
    }

    if (book.quantity <= 0) {
      return res.status(400).json({ msg: "Book not available" });
    }

    const issue = await Issue.create({
      userId,
      bookId,
      issueDate,
      returnDate,
      remarks
    });

    book.quantity -= 1;
    await book.save();

    res.json(issue);
  } catch (err) {
    console.log("ISSUE ERROR:", err);
    res.status(500).json({ msg: err.message });
  }
};
