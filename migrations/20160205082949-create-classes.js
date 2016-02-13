'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Classes',
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
          type: Sequelize.STRING,       
          allowNull: false
        },

        currentLesson: {
          type: Sequelize.STRING          
        }
      }
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Classes')
  }  
}