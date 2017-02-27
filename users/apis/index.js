'use strict';
const express = require('express'),
  router = express.Router();

router.use('/api/v1/users', require('./users'));
router.use('/api/v1/users/report', require('./reports'));
router.use('/api/v1/users/devices', require('./devices'));
router.use('/api/v1/users/recommendations', require('./recommendations'));
router.use('/api/v1/followers', require('./followers'));
router.use('/api/v1/config', require('./config'));
router.use('/api/v1/friends', require('./friends'));

module.exports = router;
