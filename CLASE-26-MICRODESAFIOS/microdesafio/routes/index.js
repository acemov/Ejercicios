var express = require('express');
var router = express.Router();
const index = require("../controllers/indexControllers.js")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/id",index.head)

module.exports = router;
