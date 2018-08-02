'use strict';
module.exports = (sequelize, DataTypes) => {
  var Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    image: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    level: DataTypes.STRING
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
    Course.hasMany(models.Tutorial)
    Course.hasMany(models.Challenge)
    Course.belongsToMany(models.User, {
      through: models.TakeCourse
    })
  };
  return Course;
};