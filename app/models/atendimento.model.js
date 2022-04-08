module.exports = (sequelize, Sequelize) => {
    const Atendimento = sequelize.define("Atendimento", {
      id_atendimento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_agendamento: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Campo id_agendamento não pode ser vazio"
            }
          }
        },
      id_status_atendimento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        validate: {
            notEmpty: {
            msg: "Campo id_status_atendimento não pode ser vazio"
            }
            }
        },
        valor: {
            type: Sequelize.FLOAT,
            allowNull: false,
            unique: false,
            validate: {
                notEmpty: {
                msg: "Campo valor não pode ser vazio"
                }
                }
            },
        data_inicio: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: false,
            validate: {
              notEmpty: {
                msg: "Campo data_inicio não pode ser vazio"
                }
              }
            },
        data_fim: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: false,
            validate: {
                notEmpty: {
                msg: "Campo data_fim não pode ser vazio"
                }
                }
            },
        },{
      timestamps: false,
      freezeTableName: true
    });
    Atendimento.associate = (models) => {
      Atendimento.belongsTo(models.Agendamento, {
          foreignKey: 'id_agendamento'
        });
      Atendimento.belongsTo(models.StatusAtendimento, {
        foreignKey: 'id_status_atendimento'
      });
      Atendimento.hasOne(models.Recebimento,
        {foreignKey: 'id_atendimento'});
    };
      
    return Atendimento;
  };