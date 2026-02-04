const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  },
  instituteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute"
  },
  issuedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Certificate", certificateSchema);
