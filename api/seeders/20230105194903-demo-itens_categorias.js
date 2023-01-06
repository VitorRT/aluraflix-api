'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Itens_Categorias', [
      {
        // id: 1
        cod_categoria: 1,
        cod_video: 9,
        qtd_video: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 2
        cod_categoria: 1,
        cod_video: 2,
        qtd_video: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 3
        cod_categoria: 1,
        cod_video: 5,
        qtd_video: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 4
        cod_categoria: 2,
        cod_video: 9,
        qtd_video: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 5
        cod_categoria: 2,
        cod_video: 6,
        qtd_video: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 6
        cod_categoria: 2,
        cod_video: 3,
        qtd_video: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 7
        cod_categoria: 3,
        cod_video: 7,
        qtd_video: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 8
        cod_categoria: 3,
        cod_video: 8,
        qtd_video: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 1
        cod_categoria: 1,
        cod_video: 9,
        qtd_video: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Itens_Categorias', null, {});
  }
};
