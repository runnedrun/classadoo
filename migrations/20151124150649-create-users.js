'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'Users',
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

        email: {
          type: Sequelize.STRING,
          unqique: true,
          allowNull: false
        },

        name: {
          type: Sequelize.STRING,       
          allowNull: false
        },

        passwordHash: {
          type: Sequelize.STRING,
          allowNull: false    
        },

        usertype: {
          type: Sequelize.ENUM('Teacher','Student','Parent'),
        },

        isAdmin: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      }
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users')
  }  
}