const { DataTypes } = require('sequelize');

const sequelize = require('../config/database');

const Pessoa = sequelize.define('Pessoa', {
    idPessoa: {
        type : DataTypes.INTEGER, 
        primaryKey: true,         
        autoIncrement: true       
    },
    nome: {
        type: DataTypes.STRING, 
        allowNull: false        
    },
    sobrenome: {
        type: DataTypes.STRING, 
        allowNull: false        
    },
    apelido: {
        type: DataTypes.STRING, 
        allowNull: false        
    },
    cpf: {
        type: DataTypes.STRING, 
        allowNull: false        
    },
    dataNascimento: {
        type: DataTypes.DATE, 
        allowNull: false      
    }
});
module.exports = Pessoa;