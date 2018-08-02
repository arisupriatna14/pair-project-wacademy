'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email already use!'
        }
      }
    },
    image_profile: DataTypes.TEXT,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    salt: DataTypes.STRING,
  }, {});

  User.beforeCreate((user, option) => {
    const saltRounds = 10
    bcrypt.hash(user.password, saltRounds).then(function(hash) {
        user.password = hash
        user.save()
    })
  })

  User.associate = function(models) {
    // associations can be defined here
  };
 
  return User;
};