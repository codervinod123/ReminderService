'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Remindertickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      subject: {
        type: Sequelize.STRING,
        allowNull:false
      },
      mailText: {
        type: Sequelize.STRING,
        allowNull:false
      },
      mailTo: {
        type: Sequelize.STRING,
        allowNull:false
      },
      status: {
        type: Sequelize.ENUM,
        allowNull:false,
        values:['PENDING','SUCCESS','FAILED'],
        defaultValue:'PENDING'
      },
      reminderTime: {
        type: Sequelize.DATE,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Remindertickets');
  }
};