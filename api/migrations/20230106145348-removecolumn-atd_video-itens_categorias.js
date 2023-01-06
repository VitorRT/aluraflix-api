'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Itens_Categorias','qtd_video');
  },

  async down (queryInterface, Sequelize) {
  }
};
