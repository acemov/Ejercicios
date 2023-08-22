var express = require('express');
var router = express.Router();
const indexControllers = require("../controllers/indexControllers.js")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/",indexControllers.index)

module.exports = router;
