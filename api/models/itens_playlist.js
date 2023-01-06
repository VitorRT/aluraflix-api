'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens_Playlist extends Model {
    static associate(models) {
      // relações do modelo itens_playlist

      Itens_Playlist.belongsTo(models.Playlist, {
        foreignKey: "cod_playlist",
        onDelete: 'CASCADE'
      })
      Itens_Playlist.belongsTo(models.Video, {
        foreignKey: "cod_video",
        onDelete: 'CASCADE'
      })
    }
  }
  Itens_Playlist.init({
  }, {
    // opções de configuração do modelo Itens_playlist
    sequelize,
    modelName: 'Itens_Playlist',
  });
  return Itens_Playlist;
};