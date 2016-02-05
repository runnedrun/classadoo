'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'LessonComponents',
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

        index: {
          type: Sequelize.INTEGER
        },

        LessonId: {
          type: Sequelize.BIGINT,
          references: { model: "Lessons", key: "id" },          
          onUpdate: "CASCADE",
          onDelete: "RESTRICT"
        },

        TaskId: {
          type: Sequelize.BIGINT,
          references: { model: "Tasks", key: "id" },          
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
    return queryInterface.dropTable('LessonComponents')  
  }
};
