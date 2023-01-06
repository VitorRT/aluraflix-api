'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Playlists', [
      {
        // id: 1
        cod_cliente: 1,
        nome: "BESTS VÍDEOS! 💌",
        descricao: null,
        publica: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 2
        cod_cliente: 9,
        nome: "VÍDEOS QUE EU AMO 💕🔥",
        descricao: "Só vídeo de qualidade 😎",
        publica: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 3
        cod_cliente: 2,
        nome: "Músicas 🎶",
        descricao: null,
        publica: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 4
        cod_cliente: 7,
        nome: "Vídeos Engraçados",
        descricao: null,
        publica: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Playlists', null, {});
  }
};
