'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      title: 'John Doe',
      author: 'João 1',
      pageQuantity: 10,
      createAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt:Sequelize.literal('CURRENT_TIMESTAMP')
    }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Books', null, {});
  }
};
