'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'PageConfigurations',
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
        },

        url: {
          type: Sequelize.STRING,
          allowNull: false
        }      
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('PageConfigurations')  
  }
};
