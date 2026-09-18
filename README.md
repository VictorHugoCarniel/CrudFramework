# Wallet API — Fastify & Sequelize
API RESTful desenvolvida para gerenciamento de carteira digital (cadastros de **Pessoas** e **Cartões de Crédito**), utilizando Node.js, Fastify e Sequelize ORM integrado ao PostgreSQL.

---

## Sobre o Projeto
O projeto consiste no backend de uma aplicação de carteira virtual. Ele permite o cadastro completo (CRUD) de usuários e seus respectivos cartões de crédito, estabelecendo um relacionamento de chave estrangeira (`1:N`) entre `Pessoa` e `Cartao`.

---

## Tecnologias Utilizadas

* **Runtime:** Node.js
* **Framework Web:** Fastify
* **ORM:** Sequelize
* **Banco de Dados:** PostgreSQL
* **Ferramentas de Dev:** Postman

---

## Configuração e Instalação
### Pré-requisitos
* **Node.js** (v18 ou superior)
* **PostgreSQL** rodando na porta padrão `5432`
* Banco de dados criado com o nome `wallet`


## Endpoints e Exemplos de Uso (CRUD)
Abaixo estão os payloads em formato JSON para testar as principais rotas da API em ferramentas como Postman ou Insomnia.

### 1. Cadastrar Pessoa (POST)
**Endpoint:** `POST /pessoa`
`localhost:3000/pessoa`
Cria um novo usuário no banco de dados.
```json
{
  "nome": "Carlos",
  "sobrenome": "Andrade",
  "apelido": "carlos.dev",
  "cpf": "123.456.789-00",
  "dataNascimento": "1995-08-20"
}
```

### 2. Atualizar Dados da Pessoa (PUT)
**Endpoint:** `PUT /pessoa/1`
`localhost:3000/pessoa/idPessoa`
Atualiza os dados de um usuário existente (o `1` na URL corresponde ao `idPessoa`).
```json
{
  "apelido": "carlos.tech",
  "sobrenome": "Andrade Silva"
}
```

### 3. Cadastrar Cartão (POST)
**Endpoint:** `POST /cartao`
`localhost:3000/cartao`
Vincula um cartão à pessoa criada anteriormente (substitua o `idPessoa` pelo ID correto).
```json
{
  "numero": "1111 2222 3333 4444",
  "cvv": "123",
  "dataValidade": "2029-12-01",
  "bandeira": "Mastercard",
  "idPessoa": 1
}
```

### 4. Buscar Cartões de uma Pessoa (GET)
**Endpoint:** `GET /cartaoPorPessoa/1`
`localhost:3000/cartaoPorPessoa/idPessoa`
Retorna todos os cartões vinculados ao ID da pessoa informado. Caso a pessoa não tenha cartões, retorna erro `404 Not Found`.

### 5. Atualizar Dados do Cartão (PUT)
**Endpoint:** `PUT /cartao/1`
`localhost:3000/editaCartaoPorPessoaECartao/1`
Atualiza os dados do cartão cadastrado (o `1` na URL corresponde ao `idCartao`).
```json
{
  "cvv": "999"
}
```

### 6. Excluir Cartão (DELETE)
**Endpoint:** `DELETE /excluiCartaoPorPessoa/:idPessoa/:id`
`localhost:3000/excluiCartaoPorPessoa/:idPessoa/:id`
Remove um cartão específico validando a qual pessoa ele pertence 