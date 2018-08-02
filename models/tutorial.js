'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tutorial = sequelize.define('Tutorial', {
    tutorial_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    CourseId: DataTypes.INTEGER,
    nilai_tutorial: DataTypes.INTEGER
  }, {});
  Tutorial.associate = function(models) {
    // associations can be defined here
    Tutorial.belongsTo(models.Course)
  };
  return Tutorial;
};