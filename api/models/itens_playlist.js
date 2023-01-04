'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens_Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Itens_Playlist.init({
    qtd_video: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Itens_Playlist',
  });
  return Itens_Playlist;
};