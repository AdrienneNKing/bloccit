const express = require("express");
const router = express.Router();

const marco = require("../controllers/marco.js");

router.get("/marco", (req, res, next) => {
  res.send("Polo");
});

module.exports = router;
