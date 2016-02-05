'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'WindowPageConfigurations',
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

        PageConfigurationId: {
          type: Sequelize.BIGINT,
          references: { model: "PageConfigurations", key: "id" },          
          onUpdate: "CASCADE",
          onDelete: "RESTRICT"
        },

        WindowConfigurationId: {
          type: Sequelize.BIGINT,
          references: { model: "WindowConfigurations", key: "id" },          
          onUpdate: "CASCADE",
          onDelete: "RESTRICT"
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('WindowPageConfigurations')
  }
};
