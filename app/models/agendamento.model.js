module.exports = (sequelize, Sequelize) => {
  const Agendamento = sequelize.define("Agendamento", {
    id_agendamento: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_agenda: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo id_agenda não pode ser vazio"
          }
        }
      },
    id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Campo id cliente não pode ser vazio"
            }
          }
        },
    data_realizacao: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo nome não pode ser vazio"
        }
      }
    },
    data_agendamento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo nome não pode ser vazio"
        }
      }
    }, 
  }, {
    timestamps: false,
    freezeTableName: true
  });
  Agendamento.associate = (models) => {
    Agendamento.belongsTo(models.Agenda, {
      foreignKey: 'id_agenda'
    });
    Agendamento.belongsTo(models.Cliente, {
       foreignKey: 'id_cliente'
    });
  };
  return Agendamento;
};