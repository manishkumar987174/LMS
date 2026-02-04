const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  instituteId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute"
  },
  active: {
    type: Boolean,
    default: true   
  }
});

module.exports = mongoose.model("User", userSchema);
