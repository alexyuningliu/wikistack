var express = require('express');
var router = express.Router();
var models = require('../models/');

/* GET home page. */
router.get('/', function(req, res, next) {
	var docs = models.Page.find(function (err, docs) {
		if (err) return console.error(err);
		res.render('index', { title: 'BROWSE MY WIKISTACK', docs: docs });
	});
});

/* GET a particular page */
router.get('/wiki/:url_name', function(req, res) {
	var doc = models.Page.findOne({ "url_name" : req.params.url_name}, function (err, doc) {
		if (err) return console.log(err);
		res.render('show', { doc: doc });
	});
});

module.exports = router;
