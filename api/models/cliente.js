'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      // relações do modelo cliente...
    }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'E-mail inválido!'
        }
      }
    },
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  }, {
    // opções do modelo cliente...
  });
  return Cliente;
};