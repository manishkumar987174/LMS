const Institute = require("../models/Institute");

exports.createInstitute = async (req, res) => {
  try {
    const institute = await Institute.create(req.body);
    res.json(institute);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
