'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/db.config.json');
const db = {};

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config, {
//     define: {
//       freezeTableName: true
//     }
//   });
// } else {
  
sequelize = new Sequelize(Buffer.from(config.database, 'base64').toString('ascii'), Buffer.from(config.username, 'base64').toString('ascii'),
  Buffer.from(config.password, 'base64').toString('ascii'), {
  host: Buffer.from(config.host, 'base64').toString('ascii'),
  dialect: config.dialect,
  define: {
    freezeTableName: true
  }
});

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