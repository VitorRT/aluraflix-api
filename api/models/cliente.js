'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      // relações do modelo clientes...
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
          msg: 'E-mail Inválido!'
        }
      }
    },
    senha: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    // opções de configuração do modelo cliente...
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};