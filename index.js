'use strict';

const express = require('express');
const app = require('./server')
var debug = require('debug')('dark-server')

app.use('/images', express.static('./client/images'));
app.use('/css', express.static('./client/css'));
app.use('/js', express.static('./client/js'));

// start server
const server = app.listen(3000, '0.0.0.0', function () {
  const host = server.address().address;
  const port = server.address().port;
  debug('Server start at http://%s:%s', host, port);
});

module.exports = app;
