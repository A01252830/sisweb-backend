'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Will',
        phone: '1924431039',
        email: 'johnfak@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Yoa Rally',
        phone: '8530318532',
        email: 'yooooora@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mary Olen',
        phone: '9304851809',
        email: 'OlMae@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lamar Worla',
        phone: '8531293920',
        email: 'lmarwla@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
