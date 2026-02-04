const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  instituteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute"
  },
  price: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Course", courseSchema);
