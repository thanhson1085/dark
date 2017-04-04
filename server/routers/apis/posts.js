'use strict';
const express = require('express'),
  db = require('../../models'),
  os = require('os'),
  moment = require('moment'),
  router = express.Router();

// Create a new POST API
router.post('/create', function(req, res, next) {
  db.Post.create({
    secret: req.body.secret,
    name: req.body.name,
    description: req.body.description
  }).then(() => {
    return res.json({});
  }).catch((e) => {
    next(e);
  });

});

module.exports = router;
