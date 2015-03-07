var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET the ADD form. */
router.get('/', function(req, res) {
  res.render('add', {title: "ADD A PAGE"});
});

/* POST a form. */
router.post('/submit', function(req, res) {
  var generateUrlName = function(name) {
    if (typeof name != "undefined" && name !== "") {
      // Removes all non-alphanumeric characters from name
      // And make spaces underscore
      return name.replace(/\s/ig,"_").replace(/\W/ig,"");
    } else {
      // Generates random 5 letter string
      return Math.random().toString(36).substring(2,7);
    }
  };

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `body` and `url_name` variables here

  console.log(req.body.title);
  console.log(req.body.body);

  var title = req.body.title;
  var body = req.body.body;
  var url_name = generateUrlName(req.body.title);

  var p = new models.Page({ "title": title, "body": body, "url_name": url_name });
  p.save();
  res.redirect('/');
});

module.exports = router;
