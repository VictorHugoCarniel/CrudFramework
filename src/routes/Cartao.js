const Cartao = require('../models/Cartao')
const Pessoa = require('../models/Pessoa')
async function rotasCartao(fastify, options) {
    //busca
    fastify.get('/cartao', async (request, reply) => {
        try {
            getCartao = await Cartao.findAll();
            reply.code(200).send(getCartao);
        } catch {
            reply.code(500).send({ error: 'Erro ao buscar cartões' });
        }
    });

    //insere
    fastify.post('/cartao', async (request, reply) => {
        try {
            if (Array.isArray(request.body)) {
                const cartoes = await Cartao.bulkCreate(request.body);
                reply.code(201).send(cartoes);
            } else {
                const { numero, dataValidade, cvv, bandeira, idPessoa } = request.body;
                const cartao = await Cartao.create({ numero, dataValidade, cvv, bandeira, idPessoa });
                reply.code(201).send(cartao);
            }
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao criar cartão' });
        }
    });

    //edita
    fastify.put('/editaCartaoPorPessoaECartao/:idPessoa/:id', async (request, reply) => {
        try {
            const { idPessoa, id } = request.params;
            await Cartao.update(request.body, { where: { idPessoa: idPessoa, idCartao: id } });
            return { mensagem: 'Cartão atualizado com sucesso!' };
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao atualizar cartão' });
        }
    });

    //deletaunde v
    fastify.delete('/excluiCartaoPorPessoa/:idPessoa/:id', async (request, reply) => {
        try {
            const { idPessoa, id } = request.params;
            await Cartao.destroy({ where: { idPessoa: idPessoa, idCartao: id } });
            return { mensagem: 'Cartão deletado com sucesso!' };
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao deletar cartão' });
        }
    });

    //busca cartao por pessoa e id do cartão
    fastify.get('/cartaoPorPessoaECartao/:idPessoa/:id', async (request, reply) => {
        try {
            const { idPessoa, id } = request.params;
            const cartao = await Cartao.findOne({ where: { idPessoa, idCartao: id } });
            if (!cartao) {
                reply.code(404).send({ error: 'Cartão não encontrado' });
                return;
            }
            reply.code(200).send(cartao);
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao buscar cartão' });
        }
    });

    //busca cartao por pessoa 
    fastify.get('/cartaoPorPessoa/:idPessoa', async (request, reply) => {
        try {
            const { idPessoa } = request.params;
            const cartao = await Cartao.findAll({ where: { idPessoa: idPessoa } });
            if (cartao.length === 0) {
                reply.code(404).send({ error: 'Cartão não encontrado' });
                return;
            }
            reply.code(200).send(cartao);
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao buscar cartoes por pessoa' });
        }
    });
}

module.exports = rotasCartao;