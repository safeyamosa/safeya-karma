var express = require('express'),
router = express.Router();

//routes for phone api
router.use("/phone", require("../controllers/phone"));
//routes for login api
router.use("/login", require("../controllers/login"));

//add here other api routes

module.exports = router;