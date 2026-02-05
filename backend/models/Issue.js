// const mongoose = require("mongoose");

// const issueSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
//   issueDate: Date,
//   returnDate: Date,
//   remarks: String,
//   fine: { type: Number, default: 0 },
//   returned: { type: Boolean, default: false }
// });

// module.exports = mongoose.model("Issue", issueSchema);

const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  actualReturnDate: Date,
  fine: {
    type: Number,
    default: 0,
  },
  returned: {
    type: Boolean,
    default: false,
  },
  remarks: String,
});

module.exports = mongoose.model("Issue", issueSchema);
