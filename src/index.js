// Importa o Fastify e já liga o "logger" para vermos os avisos no terminal
const fastify = require('fastify')({ logger: true });

const sequelize = require('./config/database');
const Pessoa = require('./models/Pessoa');
const Cartao = require('./models/Cartao');

// Cria a nossa primeira Rota (O Hello World!)

Pessoa.hasMany(Cartao,
    {foreignKey: 'idPessoa'}
)

Cartao.belongsTo(Pessoa,
    {foreignKey: 'idPessoa'}
)

fastify.get('/', async (request, reply) => {
  return { 
    mensagem: 'Servidor e banco de dados conectados com sucesso!', 
  };
});

fastify.register(require('./routes/Pessoa'));

// Função principal para ligar o servidor na porta 3000
const start = async () => {
  try {
    await sequelize.sync({ alter: true});
    /*
    alter: verifica o estado da tabela e se alterou algo faz um alter no banco de dados
    sync: cria a tabela no banco de dados caso não exista, ou seja, sincroniza o modelo com o banco de dados
    sync - force: apaga a tabela inteira e cria novamente quando reinicia o servidor
    */
    console.log('Tabelas sincronizadas');

    await fastify.listen({ port: 3000 });
    console.log('Servidor disponível em: http://localhost:3000');
  } catch (erro) {
    fastify.log.error(erro);
    process.exit(1);
  }
};

// Executa a função
start();