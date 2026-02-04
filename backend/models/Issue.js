const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
  issueDate: Date,
  returnDate: Date,
  remarks: String,
  fine: { type: Number, default: 0 },
  returned: { type: Boolean, default: false }
});

module.exports = mongoose.model("Issue", issueSchema);
