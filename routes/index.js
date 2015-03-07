var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var models = require('../models/');
	var docs = models.Page.find(function (err, docs) {
		if (err) return console.error(err);
		console.log(docs);
		res.render('index', { title: 'BROWSE MY WIKISTACK', docs: docs });
	});
});

module.exports = router;
