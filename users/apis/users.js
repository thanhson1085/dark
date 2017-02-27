'use strict';
const express = require('express'),
  db = require('../models'),
  utils = require('../helpers/utils'),
  config = require('config'),
  os = require('os'),
  logger = require('../helpers/logger'),
  p = require('phone'),
  moment = require('moment'),
  router = express.Router();

// Login API
router.post('/login', function(req, res, next) {
});

module.exports = router;
