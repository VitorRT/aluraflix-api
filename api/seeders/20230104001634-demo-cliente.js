'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Cliente', [
        {
          nome: "Victor Barberino",
          email: "vitu.barberino@gmail.com",
          senha: "adm123",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Alexandre P. Sobral",
          email: "alexandre.psobral@gmail.com",
          senha: 'tico123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Sara alcantara",
          email: "saraarh.alcantara@gmail.com",
          senha: "mylover123",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Luis Reis",
          email: "luisgrande.rei@gmail.com",
          senha: "batatinhafrita1234",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Raquel Neves",
          email: "raquellinda@gmail.com",
          senha: "meuvivis2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Pablo Carlos",
          email: "pabloo.manito@gmail.com",
          senha: "craftdes123@sd",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Pedro Moura",
          email: "pedrorodrigues.moura@gmail.com",
          senha: "sevenpecaids@best",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Mirela S2",
          email: "taigaa.mih@gmail.com",
          senha: "mr.taiga@potato",
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cliente', null, {});     
  }
};
