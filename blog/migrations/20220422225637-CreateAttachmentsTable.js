'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Attachments',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      mime: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB('long')
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    },{sync: {force: true}}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Attachments');
  }
};