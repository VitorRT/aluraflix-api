'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens_Categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Itens_Categorias.init({
    qtd_video: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Itens_Categorias',
  });
  return Itens_Categorias;
};