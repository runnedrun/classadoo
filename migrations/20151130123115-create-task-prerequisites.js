'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'TaskPrerequesites',
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

        TaskId: {
          type: Sequelize.BIGINT,
          references: { model: "Tasks", key: "id" },          
          onUpdate: "CASCADE",
          onDelete: "RESTRICT"
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('TaskPrerequesites')
  }
};
