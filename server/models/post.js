'use strict';
const crypto = require('crypto');

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    secret: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Post;
};
