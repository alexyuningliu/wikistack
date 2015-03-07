var express = require('express');
var router = express.Router();

/* GET the ADD form. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* POST a form. */
router.post('/submit', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
