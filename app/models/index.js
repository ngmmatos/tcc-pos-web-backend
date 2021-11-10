// const dbConfig = require("../config/db.config.js");

// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: 0,
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.agendamento= require("./agendamento.model.js")(sequelize, Sequelize);
// db.agenda= require("./agenda.model.js")(sequelize, Sequelize);
// db.barbeiro= require("./barbeiro.model.js")(sequelize, Sequelize);
// db.administrador= require("./administrador.model.js")(sequelize, Sequelize);
// db.cliente= require("./cliente.model.js")(sequelize, Sequelize);
// db.usuario= require("./usuario.model.js")(sequelize, Sequelize);

// db.agendamento.associate(db);
// db.agenda.associate(db);
// db.barbeiro.associate(db);
// db.administrador.associate(db);
// db.cliente.associate(db);
// db.usuario.associate(db);

// module.exports = db;


/* eslint-disable */

'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/db.config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;