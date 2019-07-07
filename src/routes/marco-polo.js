const express = require("express");
const router = express.Router();
const marco = require("../controllers/marco.js");

router.get("/marco", marco.index)

module.exports = router;
