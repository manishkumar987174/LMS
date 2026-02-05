// const Issue = require("../models/Issue");
// const Book = require("../models/Book");

// exports.issueBook = async (req, res) => {
//   try {
//     const { userId, bookId, issueDate, returnDate, remarks } = req.body;

//     const book = await Book.findById(bookId);
//     if (!book) {
//       return res.status(404).json({ msg: "Book not found" });
//     }

//     if (book.quantity <= 0) {
//       return res.status(400).json({ msg: "Book not available" });
//     }

//     const issue = await Issue.create({
//       userId,
//       bookId,
//       issueDate,
//       returnDate,
//       remarks
//     });

//     book.quantity -= 1;
//     await book.save();

//     res.json(issue);
//   } catch (err) {
//     console.log("ISSUE ERROR:", err);
//     res.status(500).json({ msg: err.message });
//   }
// };


const Issue = require("../models/Issue");
const Book = require("../models/Book");

exports.issueBook = async (req, res) => {
  try {
    const { userId, bookId, issueDate, returnDate, remarks } = req.body;

    const book = await Book.findById(bookId);
    if (!book || book.quantity <= 0) {
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
    res.status(500).json({ msg: err.message });
  }
};

exports.getMyIssues = async (req, res) => {
  const issues = await Issue.find({
    userId: req.user.id,
    returned: false
  }).populate("bookId");

  res.json(issues);
};

exports.returnBook = async (req, res) => {
  const issue = await Issue.findById(req.params.id).populate("bookId");

  if (!issue) return res.status(404).json({ msg: "Issue not found" });

  const today = new Date();
  const dueDate = new Date(issue.returnDate);

  let fine = 0;
  if (today > dueDate) {
    const diffDays = Math.ceil(
      (today - dueDate) / (1000 * 60 * 60 * 24)
    );
    fine = diffDays * 5;
  }

  issue.returned = true;
  issue.actualReturnDate = today;
  issue.fine = fine;
  await issue.save();

  issue.bookId.quantity += 1;
  await issue.bookId.save();

  res.json({ msg: "Book returned", fine });
};
