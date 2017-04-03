'use strict';
const express = require('express'),
  router = express.Router();

router.use('/v1/users', require('./users'));
router.use('/v1/posts', require('./posts'));

module.exports = router;
