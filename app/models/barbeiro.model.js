module.exports = (sequelize, Sequelize) => {
  const Barbeiro = sequelize.define("Barbeiro", {
    id_barbeiro: {
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
  Barbeiro.associate = (models) => {
  Barbeiro.hasMany(models.Agenda,
    { foreignKey: 'id_barbeiro' });
  Barbeiro.belongsTo(models.Usuario, 
  { foreignKey: 'id_usuario' });
  };
    
  return Barbeiro;
};