module.exports = (sequelize, Sequelize) => {
  const ProcedimentoAgendamento = sequelize.define('ProcedimentoAgendamento');
  const Agendamento = sequelize.define('Agendamento',);
  const Procedimento = sequelize.define("Procedimento", {
    id_procedimento: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    procedimento: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo procedimento não pode ser vazio"
        }
      }
    },
    valor: {
      type: Sequelize.FLOAT,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo valor não pode ser vazio"
        }
      }
    },
    tempo_medio: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo tempo medio não pode ser vazio"
        }
      }
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    }, 
  },{
    timestamps: false,
    freezeTableName: true
  });
  Procedimento.belongsToMany(Agendamento, { through: ProcedimentoAgendamento});
  return Procedimento;
};