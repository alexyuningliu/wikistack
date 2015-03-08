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

/* UPDATE a particular page */
router.get('/wiki/:url_name/edit', function(req, res) {
	console.log("EDITING A PAGE");
	var doc = models.Page.findOne({ "url_name" : req.params.url_name}, function (err, doc) {
		if (err) return console.log(err);
		res.render('edit', { title: 'Editing ' + doc.title, doc: doc });
	});
});

router.post('/wiki/:url_name/edit', function(req, res) {
	var title = req.body.title;
	var body = req.body.body;
	models.Page.update({ "url_name" : req.params.url_name}, {$set: { "title" : title, "body" : body }}, function (err, doc) {
		if (err) return console.log(err);
		console.log("UPDATING A PAGE");
		res.redirect('/');
	});
});

/* DELETE a particular page */
router.get('/wiki/:url_name/delete', function(req, res) {
		models.Page.findOne({ "url_name" : req.params.url_name})
		.remove(function (err) {
			if (err) return console.log(err);
			console.log("DELETED A PAGE");
			res.redirect('/');
		});
});

module.exports = router;
