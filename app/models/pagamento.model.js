module.exports = (sequelize, Sequelize) => {
    const Pagamento = sequelize.define("Pagamento", {
      id_pagamento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_conta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Campo id_conta não pode ser vazio"
            }
          }
        },
        id_adm: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
              notEmpty: {
                msg: "Campo id_adm não pode ser vazio"
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
        data_pagamento: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: false,
            validate: {
              notEmpty: {
                msg: "Campo data_pagamento não pode ser vazio"
                }
              }
            },
        esporadico: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            unique: false,
            },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
          },
        },{
      timestamps: false,
      freezeTableName: true
    });
    Pagamento.associate = (models) => {
      Pagamento.belongsTo(models.Conta, 
        { foreignKey: 'id_conta' });

    Pagamento.belongsTo(models.Administrador, 
      { foreignKey: 'id_adm' });
    };

    return Pagamento;
  };