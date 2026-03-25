const Issue = require("../models/Issue");
const User = require("../models/User");
const Book = require("../models/Book");

/*  OVERALL REPORT */
exports.getReport = async (req, res) => {
  try {
    const totalIssued = await Issue.countDocuments();
    const returned = await Issue.countDocuments({ returned: true });

    const fineAgg = await Issue.aggregate([
      { $group: { _id: null, total: { $sum: "$fine" } } },
    ]);

    res.json({
      totalIssued,
      returned,
      totalFine: fineAgg[0]?.total || 0,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

/* ADMIN REPORT */
exports.adminReport = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalBooks = await Book.countDocuments();
    const issuedBooks = await Issue.countDocuments({ returned: false });
    const returnedBooks = await Issue.countDocuments({ returned: true });

    const fines = await Issue.find({ fine: { $gt: 0 } });
    const totalFine = fines.reduce((sum, i) => sum + i.fine, 0);

    res.json({
      totalUsers,
      totalBooks,
      issuedBooks,
      returnedBooks,
      totalFine,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

/* STUDENT REPORT*/
exports.studentReport = async (req, res) => {
  try {
    const userId = req.user.id;

    const issued = await Issue.countDocuments({ userId });
    const returned = await Issue.countDocuments({
      userId,
      returned: true,
    });

    const fines = await Issue.find({
      userId,
      fine: { $gt: 0 },
    });

    const totalFine = fines.reduce((sum, i) => sum + i.fine, 0);

    res.json({
      issued,
      returned,
      totalFine,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
