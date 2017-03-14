'use strict';

const express = require('express');
const fs = require('fs');
const config = require('config');
const app = express();
const bodyParser = require('body-parser');
const validator = require('express-validator');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(validator({}));

// import routers
app.use(require('./routers'));

module.exports = app;
