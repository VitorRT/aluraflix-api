'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Itens_Playlists', [
      {
        // id: 1
        cod_playlist: 1,
        cod_video: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 2
        cod_playlist: 1,
        cod_video: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 3,
        cod_playlist: 1,
        cod_video: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 4
        cod_playlist: 2,
        cod_video: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 5
        cod_playlist: 2,
        cod_video: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 6
        cod_playlist: 2,
        cod_video: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 7
        cod_playlist: 3,
        cod_video: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 8
        cod_playlist: 3,
        cod_video: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 9
        cod_playlist: 3,
        cod_video: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 10
        cod_playlist: 3,
        cod_video: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 11
        cod_playlist: 4,
        cod_video: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 12
        cod_playlist: 4,
        cod_video: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // id: 13
        cod_playlist: 4,
        cod_video: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Itens_Playlists', null, {});
  }
};
