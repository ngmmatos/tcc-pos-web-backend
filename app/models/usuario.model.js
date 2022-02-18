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
      type: Sequelize.INTEGER,
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
    Usuario.associate = (models) => {
    Usuario.hasOne(models.Cliente, {
      foreignKey: 'id_usuario'
    }) 
    Usuario.hasOne(models.Barbeiro, {
      foreignKey: 'id_usuario'
    })
    Usuario.hasOne(models.Administrador, {
      foreignKey: 'id_usuario'
    })
  }
  
  return Usuario;
};