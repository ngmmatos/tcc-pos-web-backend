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
          msg: "Campo data não pode ser vazio"
        }
      }
    },
    periodo: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo periodo não pode ser vazio"
        },
        isIn: {
          args: [["manha", "tarde", "noite"]],
          msg: "Campo periodo aceita valores: manhã, tarde e noite"
        }
      }
    },  
    hr_inicio: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo hr_inicio não pode ser vazio"
        }
        }
    },
    hr_fim: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo hr_fim não pode ser vazio"
        }
      }
    },
  },{
    timestamps: false,
    freezeTableName: true
  });
    Agenda.associate = (models) => {
    Agenda.belongsTo(models.Barbeiro, {
      foreignKey: 'id_barbeiro'
    });
    Agenda.hasMany(models.Agendamento, {
      foreignKey: 'id_agenda'
    });
  };
  return Agenda;
};