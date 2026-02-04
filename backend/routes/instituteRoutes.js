const express = require("express");
const router = express.Router();
const { createInstitute } = require("../controllers/instituteController");

router.post("/", createInstitute);

module.exports = router;
