const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Cartao = sequelize.define('Cartao', {
    idCartao: {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numero: {
        type: DataTypes.STRING,
    },
    cvv: {
        type: DataTypes.STRING,
    },
    dataValidade: {
        type: DataTypes.DATE,
    }
});
module.exports = Cartao;