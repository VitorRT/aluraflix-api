'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    static associate(models) {
      // Relações do modelo video..

      Video.belongsTo(models.Cliente, {
        foreignKey: "cod_cliente",
        onDelete: 'CASCADE'
      })
      Video.hasMany(models.Itens_Playlist, {
        foreignKey: "cod_video",
        onDelete: 'CASCADE'
      })
      Video.hasMany(models.Itens_Categorias, {
        foreignKey: "cod_video",
        onDelete: 'CASCADE'
      })
    }
  }
  Video.init({
    titulo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "O campo titulo está vazio. Por favor, insira um titulo para o vídeo."
        },
      }
    },
    descricao: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "O campo url está vazio. Por favor, insira a url do vídeo."
        }
      } 
    },
    publico: DataTypes.BOOLEAN
  }, {
    //opções de configuração do modelo video...
    sequelize,
    modelName: 'Video',
  });
  return Video;
};