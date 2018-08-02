'use strict';
module.exports = (sequelize, DataTypes) => {
  var Challenge = sequelize.define('Challenge', {
    challenge_name: DataTypes.STRING,
    soal: DataTypes.TEXT,
    jawaban: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    nilai_challenge: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER
  }, {});
  Challenge.associate = function(models) {
    // associations can be defined here
  };
  return Challenge;
};