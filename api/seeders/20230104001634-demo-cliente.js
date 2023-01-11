'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Clientes', [
        {
          // id: 1
          nome: "Victor Barberino",
          email: "vitu.barberino@gmail.com",
          senha: "adm123",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // id: 2
          nome: "Alexandre P. Sobral",
          email: "alexandre.psobral@gmail.com",
          senha: 'tico123',
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // id: 3
          nome: "Sara alcantara",
          email: "saraarh.alcantara@gmail.com",
          senha: "mylover123",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // id: 4
          nome: "SS Clips",
          email: "ssbest.clipsmoreira@gmail.com",
          senha: "batatinhafrita1234",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // id: 5
          nome: "Raquel Neves",
          email: "raquellinda@gmail.com",
          senha: "meuvivis2",
          ativo: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // id: 6
          nome: "Pablo Carlos",
          email: "pabloo.manito@gmail.com",
          senha: "Craftdes123@sd",
          ativo: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // id: 7
          nome: "Proximity",
          email: "proximity.contact@gmail.com",
          senha: "bestPromoi10",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // id: 8
          nome: "Mirela S2",
          email: "taigaa.mih@gmail.com",
          senha: "mr.taiga@potato561",
          ativo: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          // id: 9
          nome: "anxiety aleatório",
          email: "lari.aleatorio@gmail.com",
          senha: "billiebest@love",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // id: 10
          nome: "Plasterbrain",
          email: "plasterbrain.contact@gmail.com",
          senha: "plasticBrain@love",
          ativo: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});     
  }
};
