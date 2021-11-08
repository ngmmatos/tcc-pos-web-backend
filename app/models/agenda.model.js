module.exports = (sequelize, Sequelize) => {
  const Agenda = sequelize.define("Agenda", {
    id_agenda: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_barbeiro: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo nome não pode ser vazio"
          }
        }
      },
    data: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo cpf não pode ser vazio"
        }
      }
    },
    periodo: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo email não pode ser vazio"
        },
        isIn: {
          args: [["manhã", "tarde", "noite"]],
          msg: "Campo periodo aceita valores: manhã, tarde e noite"
        }
      }
    },  
    hr_inicio: {
      type: Sequelize.INTEGER,
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
    hr_fim: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo senha não pode ser vazio"
        }
      }
    },
  }, {
    timestamps: false,
    freezeTableName: true
  });
    Agenda.associate = function(models) {
    Agenda.hasOne(models.Cliente, {
      foreignKey: 'id_agenda',
      sourceKey: 'id_cliente'
    }) 
  }
  return Agenda;
};