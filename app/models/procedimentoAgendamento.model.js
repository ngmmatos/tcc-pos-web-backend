module.exports = (sequelize, Sequelize) => {
  const ProcedimentoAgendamento = sequelize.define("ProcedimentoAgendamento", {
    id_procedimento_agendamento: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_procedimento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo id_procedimento não pode ser vazio"
        }
      }
    },
    id_agendamento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo id_agendamento não pode ser vazio"
        }
      }
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  });
  
  return Procedimento;
};