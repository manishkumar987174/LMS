const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
  name: String,
  domain: String
});

module.exports = mongoose.model("Institute", instituteSchema);
