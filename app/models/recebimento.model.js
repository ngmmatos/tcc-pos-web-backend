module.exports = (sequelize, Sequelize) => {
    const Recebimento = sequelize.define("Recebimento", {
      id_recebimento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_status_recebimento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
        validate: {
          notEmpty: {
            msg: "Campo id_status_recebimento não pode ser vazio"
            }
          }
        },
        id_atendimento: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: false,
            validate: {
              notEmpty: {
                msg: "Campo id_atendimento não pode ser vazio"
                }
              }
            },
      informacao: {
        type: Sequelize.STRING,
        allowNull: true,
          },
        data_recebimento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
            msg: "Campo data_recebimento não pode ser vazio"
            }
            }
        },
        },{
      timestamps: false,
      freezeTableName: true
    });
    Recebimento.associate = (models) => {
      Recebimento.belongsTo(models.StatusRecebimento,
      {foreignKey: 'id_status_recebimento'});
    Recebimento.belongsTo(models.Atendimento,
      {foreignKey: 'id_atendimento'});
    };
      
    return Recebimento;
  };