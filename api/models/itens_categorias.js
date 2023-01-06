'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens_Categorias extends Model {
    static associate(models) {
      // relações do modelo itens_categorias

      Itens_Categorias.belongsTo(models.Categoria, {
        foreignKey: "cod_categoria",
        onDelete: 'CASCADE'
      })
      Itens_Categorias.belongsTo(models.Video, {
        foreignKey: "cod_video",
        onDelete: 'CASCADE'
      })
    }
  }
  Itens_Categorias.init({
  }, {
    // opções de configuração do modelo Itens_categoria
    sequelize,
    modelName: 'Itens_Categorias',
  });
  return Itens_Categorias;
};