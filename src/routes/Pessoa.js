const Pessoa = require('../models/Pessoa');

async function rotasPessoa(fastify, options) {
    fastify.post('/pessoa', async (request, reply) => {
        try {
            if (Array.isArray(request.body)) {
                const pessoas = await Pessoa.bulkCreate(request.body);
                reply.code(201).send(pessoas);
            } else {
                const { nome, sobrenome, apelido, cpf, dataNascimento } = request.body;
                const pessoa = await Pessoa.create({ nome, sobrenome, apelido, cpf, dataNascimento });
                reply.code(201).send(pessoa);
            }
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao criar pessoa' });
        }
    });

    fastify.get('/pessoa', async (request, reply) => {
        try {
            const pessoa = await Pessoa.findAll();
            reply.code(200).send(pessoa);
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao buscar pessoas' });
        }
    });

    fastify.put('/pessoa/:id', async (request, reply) => {
        try {
            const { id } = request.params;
            await Pessoa.update(request.body, { where: { idPessoa: id } });
            return { mensagem: 'Pessoa atualizada com sucesso!' };
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao atualizar pessoa' });
        }
    });

    fastify.delete('/pessoa/:id', async (request, reply) => {
        try {
            const { id } = request.params;
            await Pessoa.destroy({ where: { idPessoa: id } });
            return { mensagem: 'Pessoa deletada com sucesso!' };
        } catch (error) {
            reply.code(500).send({ error: 'Erro ao deletar pessoa' });
        }
    });
}
module.exports = rotasPessoa;