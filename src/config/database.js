const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('postgres://postgres:postgres:5432/wallet') // Example for postgres


const sequelize = new Sequelize('wallet', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    port: 5432,
    define: {
        freezeTableName: true
        //cria o nome das tabelas do jeito que esta, sequelize por padrao adiciona 's' ao final da tabela na hora da criação 
    }
})


module.exports = sequelize;