module.exports = (sequelize, Sequelize) => {
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
  }, {
    timestamps: false,
    freezeTableName: true
  });
    Procedimento.associate = (models) => {
    Procedimento.hasOne(models.Cliente, {
      foreignKey: 'id_procedimento'
    }) 
    Procedimento.hasOne(models.Barbeiro, {
      foreignKey: 'id_procedimento'
    })
    Procedimento.hasOne(models.Administrador, {
      foreignKey: 'id_procedimento'
    })
  }
  
  return Procedimento;
};