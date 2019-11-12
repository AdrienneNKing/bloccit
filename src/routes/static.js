const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");
const about = require("../controllers/about");


router.get("/", staticController.index);

router.get("/marco", (request, response, next) => {
  response.send("polo");
});

router.get("/about", about.index);



module.exports = router;
