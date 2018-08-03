'use strict';
module.exports = (sequelize, DataTypes) => {
  var TutorialCourse = sequelize.define('TutorialCourse', {
    CourseId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    TutorialId: DataTypes.INTEGER,
    status_tutorial: DataTypes.BOOLEAN,
    ChallengeId: DataTypes.INTEGER,
    status_challenge: DataTypes.BOOLEAN
  }, {});
  TutorialCourse.associate = function(models) {
    // associations can be defined here
    TutorialCourse.belongsTo(models.Tutorial)
    TutorialCourse.belongsTo(models.User)
  };
  return TutorialCourse;
};