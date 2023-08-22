const express = require('express')
var router = express.Router();
const menuControllers = require("../controllers/menuControllers.js")

router.get("/",menuControllers.menu)

module.exports = router;