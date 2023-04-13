const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');

const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST, 
    dialect: dbConfig.dialect, 
    port: dbConfig.PORT,  // facultatif 
    operatorAliases: false, 
});

const db = {};
db.Sequelize = Sequelize;
db.connex = connex;
db.pastries = require('./pastry.model.js') (connex, Sequelize);
module.exports = db;
