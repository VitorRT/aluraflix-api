'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {

    static associate(models) {
      // relacionamentos de cliente...
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  }, {
    // configurações do modelo cliente...
  });
  return Cliente;
};