module.exports = (sequelize, Sequelize) => {
    const StatusAtendimento = sequelize.define("StatusAtendimento", {
      id_status_atendimento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      status_atendimento: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Campo status_atendimento não pode ser vazio"
            }
          }
        },
        msg: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: false
            },
        },{
      timestamps: false,
      freezeTableName: true
    });
    StatusAtendimento.associate = (models) => {
    StatusAtendimento.hasMany(models.Atendimento,
      {foreignKey: 'id_status_atendimento'});
    };
      
    return StatusAtendimento;
  };