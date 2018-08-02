'use strict';
module.exports = (sequelize, DataTypes) => {
  var TakeCourse = sequelize.define('TakeCourse', {
    UserId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER,
    total_progress: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  TakeCourse.associate = function(models) {
    // associations can be defined here
    TakeCourse.belongsTo(models.Course)
    TakeCourse.belongsTo(models.User)
  };
  return TakeCourse;
};