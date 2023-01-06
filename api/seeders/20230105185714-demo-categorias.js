'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categoria', [
      {
        // id: 1
        cod_cliente: 1,
        nome: "Vídeos semanais",
        descricao: "Novidades da semana." ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 2
        cod_cliente: 1,
        nome: "Em alta",
        descricao: "Os vídeos do momento!" ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 3
        cod_cliente: 2,
        nome: "Músicas chicletes",
        descricao: "As músicas que grudam e não saem mais da sua cabeça!" ,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categoria', null, {});
  }
};
