'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    static associate(models) {
      // relações do modelo playlist
      
      Playlist.belongsTo(models.Cliente, {
        foreignKey: "cod_cliente",
        onDelete: 'CASCADE'
      })

      Playlist.hasMany(models.Itens_Playlist, {
        foreignKey: "cod_playlist",
        onDelete: 'CASCADE'
      })
    }
  }
  Playlist.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "O campo nome está vazio. Por favor, insira um nome para a playlist."
        }
      }
    },
    descricao: DataTypes.STRING,
    publica: DataTypes.BOOLEAN
  }, {
    // opções de configuração do modelo Playlist
    sequelize,
    modelName: 'Playlist',
    defaultScope: {
      where: {
        publica: true
      }
    },
    scopes: {
      privates: {
        where: {
          publica: false
        }
      }
    }
  });
  return Playlist;
};