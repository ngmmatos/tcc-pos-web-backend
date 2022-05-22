module.exports = (sequelize, Sequelize) => {
  const InsumoProcedimento = sequelize.define('InsumoProcedimento');
  const Procedimento = sequelize.define('Procedimento',);
  const Insumo = sequelize.define("Insumo", {
    id_insumo: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_fornecedor: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: false,
      validate: {     
        notEmpty: {
          msg: "Campo id_fornecedor não pode ser vazio"
          }
        }
      },
    insumo: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo insumo não pode ser vazio"
          }
        }
      },
    estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo estoque não pode ser vazio"
          },
       }
      },
    ultimo_valor: {
      type: Sequelize.FLOAT,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo ultimo valor não pode ser vazio"
        }
      }
    }, 
  }, {
    timestamps: false,
    freezeTableName: true
  });
  Insumo.associate = (models) => {
  Insumo.belongsTo(models.Fornecedor,
    { foreignKey: 'id_fornecedor' })
  };
  Insumo.belongsToMany(Procedimento, { through: InsumoProcedimento});
  return Insumo;
};