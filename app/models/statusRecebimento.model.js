module.exports = (sequelize, Sequelize) => {
    const StatusRecebimento = sequelize.define("StatusRecebimento", {
      id_status_recebimento: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      status_recebimento: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Campo status_agenda não pode ser vazio"
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
    StatusRecebimento.associate = (models) => {
      StatusRecebimento.hasMany(models.Recebimento,
        {foreignKey: 'id_status_recebimento'});
      };
      
    return StatusRecebimento;
  };