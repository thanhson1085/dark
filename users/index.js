'use strict';

const express = require('express');
const fs = require('fs');
const config = require('config');
const app = express();
const yaml = require('js-yaml');
const bodyParser = require('body-parser');
const logger = require('./helpers/logger');
const validator = require('express-validator');

// body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator({}));

// import middlewares
app.use(require('./middlewares/auth'));

// import routers
app.use(require('./apis'));

// error handler
app.use(require('./middlewares/error'));

// start server
const server = app.listen(config.get('server.port'), config.get('server.host'), function () {
  const host = server.address().address;
  const port = server.address().port;
  logger.info('Server start at http://%s:%s', host, port);
});

module.exports = app;
