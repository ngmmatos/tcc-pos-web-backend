module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("Usuario", {
    id_usuario: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    senha: {
      type: Sequelize.STRING
    },
    data_nascimento: {
      type: Sequelize.STRING
    },
    telefone: {
      type: Sequelize.STRING
    }, 
  }, {
    timestamps: false
  });
  return Usuario;
};