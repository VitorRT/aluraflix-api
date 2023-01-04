'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Cliente', [
        {
          nome: "Victor Barberino",
          email: "vitu.barberino@gmail.com",
          senha: "adm123"
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cliente', null, {});     
  }
};
