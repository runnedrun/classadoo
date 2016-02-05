'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Tasks',
      {
        id: {
          type: Sequelize.BIGINT,
          primaryKey: true,
          autoIncrement: true
        },

        createdAt: {
          type: Sequelize.DATE
        },

        updatedAt: {
          type: Sequelize.DATE
        },

        description: {
          type: Sequelize.TEXT
        },

        name: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false
        }
      }
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Tasks')  
  }
};