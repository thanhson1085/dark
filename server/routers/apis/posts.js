'use strict';
const express = require('express'),
  db = require('../../models'),
  os = require('os'),
  moment = require('moment'),
  router = express.Router();

// Create a new POST API
router.post('/create', function(req, res, next) {
  db.Post.save({
    secret: req.body.secret,
    description: req.body.description
  }).then(() => {
    return res.json({});
  }).catch();

});

module.exports = router;
