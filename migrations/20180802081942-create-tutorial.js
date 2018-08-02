'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tutorials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tutorial_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      CourseId: {
        type: Sequelize.INTEGER
      },
      nilai_tutorial: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tutorials');
  }
};