module.exports = (sequelize, Sequelize) => {
  const Cliente = sequelize.define("Cliente", {
    id_cliente: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Campo nome não pode ser vazio"
          }
        }
      },
    },
    {
    timestamps: false,
    freezeTableName: true
  });
  Cliente.associate = (models) => {
    Cliente.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario'
    });
    };
  return Cliente;
};