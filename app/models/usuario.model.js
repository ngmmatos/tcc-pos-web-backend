module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("Usuario", {
    id_usuario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo nome não pode ser vazio"
        }
      }
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo cpf não pode ser vazio"
        },
        is:{
          args: /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/,
          msg: "Campo cpf tem de ser um cpf com formato válido"
        }
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo email não pode ser vazio"
        },
        isEmail:{
          msg: "Campo email precisa ser um e-mail válido"
        }
      }
    },
    sexo: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo sexo não pode ser vazio"
        },
        isIn: {
          args: [["m", "M", "f", "F"]],
          msg: "Campo sexo aceita valores m(M) ou f(F)"
        }
      }
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo senha não pode ser vazio"
        },
        len: {
          args: [6, 8],
          msg: "Canpo senha deve conter entre 6 e 8 caracteres" 
        }
      }
    },
    data_nascimento: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo data_nascimento não pode ser vazio"
        }
      }
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo telefone não pode ser vazio"
        }
      }
    }, 
  }, {
    timestamps: false,
    freezeTableName: true
  });
    Usuario.associate = function(models) {
    Usuario.hasOne(models.Cliente, {
      foreignKey: 'id_usuario',
      sourceKey: 'id_cliente'
    }) 
    Usuario.belongsTo(models.Barbeiro, {
      foreignKey: 'id_usuario',
      sourceKey: 'id_barbeiro'
    })
    Usuario.belongsTo(models.Administrador, {
      foreignKey: 'id_usuario',
      sourceKey: 'id_adm'
    })
  }
  return Usuario;
};