module.exports = (sequelize, Sequelize) => {
    const Conta = sequelize.define("Conta", {
      id_conta: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
    dt_pagamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
            msg: "Campo dt_pagamento não pode ser vazio"
            }
            }
        },
    dt_vencimento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
          notEmpty: {
          msg: "Campo dt_vencimento não pode ser vazio"
          }
          }
      },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
        validate: {
            notEmpty: {
            msg: "Campo descricao não pode ser vazio"
            }
            }
        },
      },
      {
      timestamps: false,
      freezeTableName: true
    });
    Conta.associate = (models) => {
      Conta.hasOne(models.Pagamento, {
        foreignKey: 'id_conta'
      });
      };
    return Conta;
  };