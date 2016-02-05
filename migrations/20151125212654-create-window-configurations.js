'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'WindowConfigurations',
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

        name: {
          type: Sequelize.TEXT,
          unique: true,
          allowNull: false
        },

        description: {
          type: Sequelize.TEXT
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('WindowConfigurations')
  }
};
