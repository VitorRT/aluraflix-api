'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Videos', [
    {
      // id: 1
      cod_cliente: 1,
      titulo: "takashi - nihil.mp3 (COVER)",
      descricao: `desc example`,
      url: "https://www.youtube.com/watch?v=rqi1711rGEw",
      publico: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // id: 2
      cod_cliente: 1,
      titulo: "*ZUANDO NA MADRUGA*",
      descricao: `desc example`,
      url: "https://www.youtube.com/watch?v=EWVEzxmKtdo",
      publico: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // id: 3
      cod_cliente: 9,
      titulo: "UMA FÃ MINHA ESTÁ ME COPIANDO (deu treta)",
      descricao: `desc example`,
      url: "https://www.youtube.com/watch?v=KrG9LR0XLuQ",
      publico: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // id: 4
      cod_cliente: 4,
      titulo: "ALUN0 CONFR0NTOU WAVE AO VIVO!",
      descricao: `desc example`,
      url: "https://www.youtube.com/watch?v=jbyY3WYcw6k",
      publico: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // id: 5
      cod_cliente: 9,
      titulo: "TENTANDO RESOLVER PROBLEMAS DOS MEUS INSCRITOS",
      descricao: `desc example`,
      url: "https://www.youtube.com/watch?v=o5zqFsJRu3k&t=496s",
      publico: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // id: 6
      cod_cliente: 9,
      titulo: "preparativos para o natal!!! | como fazer rabanada, comprinhas, e sobre a palavra de Deus",
      descricao: `desc example`,
      url: "https://www.youtube.com/watch?v=IXERMcsXt6E",
      publico: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // id: 7,
      cod_cliente: 7,
      titulo: "Naughty Boy ft. Sam Smith - La La La (White Panda X Gazzo Remix)",
      descricao: `desc example`,
      url: "https://www.youtube.com/watch?v=LJpOUsQ3XTE",
      publico: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      // id: 8,
      cod_cliente: 10,
      titulo: "plasterbrain - Nimbasa CORE -- Official Upload",
      descricao: `desc example`,
      url: "https://www.youtube.com/watch?v=gbpi0k4oGSI",
      publico: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      // id: 9
      cod_cliente: 7,
      titulo: "Maroon 5 - Animals (Gryffin Remix)",
      descricao: `desc example`,
      url: "https://www.youtube.com/watch?v=nedAfpJV53w",
      publico: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Videos', null, {});
  }
};
//