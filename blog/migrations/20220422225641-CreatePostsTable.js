'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Posts',
      {
          postId: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true,
              unique: true
          },
          title: {
            type: Sequelize.STRING,
            validate: {notEmpty: {msg: "Title must not be empty."}}
          },
          body: {
            type: Sequelize.STRING,
            validate: {notEmpty: {msg: "Body must not be empty."}}
          },
          createdAt: {
              type: Sequelize.DATE,
              allowNull: false
          },
          updatedAt: {
              type: Sequelize.DATE,
              allowNull: false
          }
      },
      {
          sync: {force: true}
      }
  );
  await queryInterface.addColumn(
    'Posts',
    'attachmentId',
    {
        type: Sequelize.INTEGER,
        references: {
            model: "Attachments",
            key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Posts', 'attachmentId');
    await queryInterface.dropTable('Posts');
  }
};
