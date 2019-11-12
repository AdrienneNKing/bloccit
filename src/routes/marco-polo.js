const express = require("express");
const router = express.Router();
const marco = require("../controllers/marco.js");

router.get("/marco", (request, response, next) => {
  response.send("polo");
});
module.exports = router;
