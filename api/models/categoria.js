'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      // relações do modelo categoria

      Categoria.belongsTo(models.Cliente, {
        foreignKey: "cod_cliente"
      })
      Categoria.hasMany(models.Itens_categorias, {
        foreignKey: "cod_categoria"
      })
    }
  }
  Categoria.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'O campo nome está vazio. Por favor, insira um nome para a categoria.'
        }
      }
    },
    descricao: DataTypes.STRING
  }, {
    // opções de configuração do modelo Categoria
    paranoid: true,
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};