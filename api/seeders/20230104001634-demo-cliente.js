'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Cliente', [
        {
          nome: "Victor Barberino",
          email: "vitu.barberino@gmail.com",
          senha: "adm123"
        },
        {
          nome: "Alexandre P. Sobral",
          email: "alexandre.psobral@gmail.com",
          senha: 'tico123'
        },
        {
          nome: "Sara alcantara",
          email: "saraarh.alcantara@gmail.com",
          senha: "mylover123"
        },
        {
          nome: "Luis Reis",
          email: "luisgrande.rei@gmail.com",
          senha: "batatinhafrita1234"
        },
        {
          nome: "Raquel Neves",
          email: "raquellinda@gmail.com",
          senha: "meuvivis2"
        },
        {
          nome: "Pablo Carlos",
          email: "pabloo.manito@gmail.com",
          senha: "craftdes123@sd"
        },
        {
          nome: "Pedro Moura",
          email: "pedrorodrigues.moura@gmail.com",
          senha: "sevenpecaids@best"
        },
        {
          nome: "Mirela S2",
          email: "taigaa.mih@gmail.com",
          senha: "mr.taiga@potato"
        }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cliente', null, {});     
  }
};
