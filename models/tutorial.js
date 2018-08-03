'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tutorial = sequelize.define('Tutorial', {
    tutorial_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    CourseId: DataTypes.INTEGER,
    nilai_tutorial: DataTypes.INTEGER
  }, {});

  Tutorial.prototype.statusCompleted = function() {
    if (this.status === false) {
      return 'Not Completed'
    } else {
      return 'Completed'
    }
  }

  Tutorial.associate = function(models) {
    // associations can be defined here
    Tutorial.belongsTo(models.Course)
    Tutorial.belongsToMany(models.User, {
      through: models.TutorialCourse
    })
  };
  return Tutorial;
};