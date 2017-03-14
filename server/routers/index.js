'use strict';

const express = require('express'),
  router = express.Router();

router.use('/api', require('./apis'));
router.use('/', require('./pages'));

module.exports = router;
