'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      // relações do modelo clientes...

      Cliente.hasMany(models.Video, {
        foreignKey: "cod_cliente"
      }) 
      Cliente.hasMany(models.Categoria, {
        foreignKey: "cod_cliente"
      })
      Cliente.hasMany(models.Playlist, {
        foreignKey: "cod_cliente"
      })
    }
  }
  Cliente.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'O nome não pode estar vazio, por favor insira seu nome.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Ops! Esse e-mail já foi cadastrado. Tente outro.'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'O e-mail não pode estar vazio, por favor insira seu e-mail.'
        },
        isEmail: {
          args: true,
          msg: 'E-mail Inválido!'
        }
      }
    },
    senha: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'A senha não pode estar vazio, por favor insira uma senha.'
        }
      }
    },
    ativo: {
      type: DataTypes.BOOLEAN
    }
  }, {
    // opções de configuração do modelo cliente...
    sequelize,
    modelName: 'Cliente',
    defaultScope: {
      where: {
        ativo: true
      },
      attributes: { exclude: ['senha'] }
    }
  });
  return Cliente;
};