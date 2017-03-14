'use strict';
const express = require('express'),
  router = express.Router();

router.get('/', function(req, res, next) {
  res.render('app', {});
});


module.exports = router;
