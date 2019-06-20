const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");
const about = require("../controllers/about");


router.get("/", staticController.index);

router.get("/", about.index);



module.exports = router;
