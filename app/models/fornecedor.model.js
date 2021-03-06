module.exports = (sequelize, Sequelize) => {
  const Fornecedor = sequelize.define("Fornecedor", {
    id_fornecedor: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Campo telefone não pode ser vazio"
        }
      }
    },
    fornecedor: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo fornecedor não pode ser vazio"
          }
        }
        },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Campo email não pode ser vazio"
          },
          isEmail:{
            msg: "Campo email precisa ser um e-mail válido"
          }
        }
      }
      },{
    timestamps: false,
    freezeTableName: true
  });
    Fornecedor.associate = (models) => {
    Fornecedor.hasMany(models.Insumo, 
      { foreignKey: 'id_fornecedor' });
  };
    
  return Fornecedor;
};