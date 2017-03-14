'use strict';
const logger = require('../helpers/logger');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  const token = req.body.token || req.query.token || req.get('Authorization');

  const unauthorization = [
    '/api/v1/users/login',
    '/api/v1/config/get',
    '/api/v1/users/facebookLogin',
    '/api/v1/users/verifyPincode',
    '/api/v1/users/resendPincode',
    '/api/v1/users/verifyPincodeForgotPassword',
    '/api/v1/users/forgotPassword',
    '/api/v1/users/resetPassword',
    '/api/v1/users/register',
    '/api/v1/admin/users/updateUserStatus'
  ];

  if (unauthorization.indexOf(req.url) >= 0) {
    return next();
  }

  if (! token) {
    logger.debug('Failed - authenticate token', token);
    return res.status(403).json({
      message: 'Failed to authenticate token'
    });
  }

  // verifies secret and checks exp
  jwt.verify(token, config.get('jwt.key'), function(err, user) {
    if (err) {
      logger.debug('Failed - authenticate token', token);
      return res.status(403).json({
        message: 'Failed to authenticate token'
      });
    }

    req.user = user;
    req.user.token = token;
    next();
  });
};
