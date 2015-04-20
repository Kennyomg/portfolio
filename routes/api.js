var express = require('express');
var _ = require('lodash');
var router = express.Router();

var mongoose = require('mongoose');
var Games = require('../models/Games.js');
var Websites = require('../models/Websites.js');
var Softwares = require('../models/Softwares.js');

/* GET /api/games listing. */
router.get('/games', function(req, res, next) {
  Games.find(function (err, games) {
    if (err) return next(err);
    res.json(games);
  });
});

/* POST /api/games */
router.post('/games', function(req, res, next) {
  console.log(req.body);
  console.log(req.files);
  Games.create(_.extend(req.body, { image_url: req.files.file.path.replace('public\\', '') }), function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /api/games/id */
router.get('/games/:id', function(req, res, next) {
  Games.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /api/games/:id */
router.put('/games/:id', function(req, res, next) {
  Games.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /api/games/:id */
router.delete('/games/:id', function(req, res, next) {
  Games.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /api/websites listing. */
router.get('/websites', function(req, res, next) {
  Websites.find(function (err, websites) {
    if (err) return next(err);
    res.json(websites);
  });
});

/* POST /api/websites */
router.post('/websites', function(req, res, next) {
  Websites.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /api/websites/id */
router.get('/websites/:id', function(req, res, next) {
  Websites.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /api/websites/:id */
router.put('/websites/:id', function(req, res, next) {
  Websites.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /api/websites/:id */
router.delete('/websites/:id', function(req, res, next) {
  Websites.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /api/softwares listing. */
router.get('/softwares', function(req, res, next) {
  Softwares.find(function (err, softwares) {
    if (err) return next(err);
    res.json(softwares);
  });
});

/* POST /api/softwares */
router.post('/softwares', function(req, res, next) {
  Softwares.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /api/softwares/id */
router.get('/softwares/:id', function(req, res, next) {
  Softwares.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /api/softwares/:id */
router.put('/softwares/:id', function(req, res, next) {
  Softwares.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /api/softwares/:id */
router.delete('/softwares/:id', function(req, res, next) {
  Softwares.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;