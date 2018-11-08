var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test af Titel for index.js ', anotherOne: 'Testing serverside variables' });
});

module.exports = router;
