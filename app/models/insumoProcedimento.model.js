module.exports = (sequelize, Sequelize) => {
  const InsumoProcedimento = sequelize.define("InsumoProcedimento", {
    id_insumo_procedimento: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_insumo: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo id_insumo não pode ser vazio"
        }
      }
    },
    id_procedimento: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo id_procedimento não pode ser vazio"
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