'use strict';

const express = require('express');
const app = require('./server')
var debug = require('debug')('dark-server')

app.use('/images', express.static('./client/dist/images'));
app.use('/css', express.static('./client/dist/css'));
app.use('/js', express.static('./client/dist/js'));

// start server
const server = app.listen(3000, '0.0.0.0', function () {
  const host = server.address().address;
  const port = server.address().port;
  debug('Server start at http://%s:%s', host, port);
});

module.exports = app;
