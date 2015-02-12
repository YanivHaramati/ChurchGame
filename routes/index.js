var express = require('express');
var router = express.Router();
var classes = require('../classes');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Church', msg: classes.religions.map(function (r) { return r.name; }) });
});

module.exports = router;
