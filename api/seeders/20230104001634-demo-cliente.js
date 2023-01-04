'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Clientes', [
        {
          nome: "Victor Barberino",
          email: "vitu.barberino@gmail.com",
          senha: "Adm123",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Alexandre P. Sobral",
          email: "alexandre.psobral@gmail.com",
          senha: 'Tico123',
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Sara alcantara",
          email: "saraarh.alcantara@gmail.com",
          senha: "Mylover123",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Luis Reis",
          email: "luisgrande.rei@gmail.com",
          senha: "Batatinhafrita1234",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Raquel Neves",
          email: "raquellinda@gmail.com",
          senha: "Meuvivis2",
          ativo: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Pablo Carlos",
          email: "pabloo.manito@gmail.com",
          senha: "Craftdes123@sd",
          ativo: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: "Pedro Moura",
          email: "pedrorodrigues.moura@gmail.com",
          senha: "Sevenpecaids@best23",
          createdAt: new Date(),
          ativo: true,
          updatedAt: new Date()
        },
        {
          nome: "Mirela S2",
          email: "taigaa.mih@gmail.com",
          senha: "Mr.taiga@potato561",
          createdAt: new Date(),
          ativo: false,
          updatedAt: new Date()
        }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});     
  }
};
