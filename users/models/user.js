'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      isEmail: true
    },
    hashedPassword: DataTypes.STRING,
    password: {
      type: DataTypes.VIRTUAL,
      set: function(password) {
        this.salt = this.makeSalt();
        this.hashedPassword = this.encryptPassword(password);
      },
      allowNull: false
    },
    isActivated: {
      type: DataTypes.BOOLEAN(),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.TEXT('long'),
      allowNull: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    indexes: [{ fields: ['isActivated'] }],
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Usermeta);
      }
    }
  });
  User.authenticate = function (password) {
    return this.encryptPassword(password) === this.hashedPassword;
  },

  User.makeSalt = function () {
    return Math.round((new Date().valueOf() * Math.random())) + '';
  },

  User.encryptPassword = function (password) {
    if (!password) return '';
    var encrypred;
    try {
      encrypred = crypto.createHmac('sha1', this.salt).update(password).digest('hex');
      return encrypred;
    } catch (err) {
      return '';
    }
  }

  return User;
};
