module.exports = (sequelize, Sequelize) => {
  const Administrador = sequelize.define("Administrador", {
    id_adm: {
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
  Administrador.associate = (models) => {
    Administrador.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario'
    });
    };
  return Administrador;
};