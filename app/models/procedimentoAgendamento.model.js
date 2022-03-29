module.exports = (sequelize, Sequelize) => {
  const Agendamento = sequelize.define('Agendamento');
  const Procedimento = sequelize.define('Procedimento');
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
      references: { model: Procedimento, key: 'id_procedimento' },
      validate: {
        notEmpty: {
          msg: "Campo id_procedimento não pode ser vazio"
        }
      }
    },
    id_agendamento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: Agendamento, key: 'id_agendamento' },
      validate: {
        notEmpty: {
          msg: "Campo id_agendamento não pode ser vazio"
        }
      }
    }
  },{
    timestamps: false,
    freezeTableName: true
  });
  ProcedimentoAgendamento.associate = (models) => {
    ProcedimentoAgendamento.belongsTo(models.Agendamento, {
      foreignKey: 'id_agendamento'
    });
    ProcedimentoAgendamento.belongsTo(models.Procedimento, {
       foreignKey: 'id_procedimento'
    });
  };
  return ProcedimentoAgendamento;
};


