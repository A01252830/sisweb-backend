'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        number: '21',
        date: '2023-02-14',
        status: 'Normal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '10',
        date: '2023-01-31',
        status: 'Issus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '7',
        date: '2022-12-05',
        status: 'Issus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '12',
        date: '2023-01-04',
        status: 'Normal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
