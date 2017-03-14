'use strict';
const config = require('config'),
  jwt = require('jsonwebtoken');

const generateJwtToken = function(data) {
  return jwt.sign(data, config.get('jwt.key'), {
    expiresIn: config.get('jwt.expire')
  });
};

module.exports = {
  generateJwtToken: generateJwtToken
};
