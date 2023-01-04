'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Playlist.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    publica: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};