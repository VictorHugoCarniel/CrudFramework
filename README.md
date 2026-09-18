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

### 1. Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
* [Node.js](https://nodejs.org/) (versão 18 ou superior).
* [PostgreSQL](https://www.postgresql.org/) (rodando na porta padrão `5432`).
* Um cliente para testar rotas, como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

### 2. Configuração do Banco de Dados
1. Abra o seu PostgreSQL.
2. Crie um banco de dados em branco chamado `wallet`:
   ```sql
   CREATE DATABASE wallet;
   ```
3. **Importante:** Verifique o arquivo `config/database.js` do projeto e confirme se o usuário e a senha do banco de dados configurados lá batem com os da sua máquina local (geralmente o usuário padrão é `postgres`).

### 3. Instalação das Dependências
Abra o terminal na pasta raiz do projeto e execute o comando abaixo para baixar o Fastify, Sequelize e demais pacotes:
```bash
npm install
```

### 4. Inicializando a Aplicação
Com o banco de dados criado e as dependências instaladas, inicie o servidor:
```bash
node server.js
```
*(Se você configurou o Nodemon no `package.json`, pode usar `npm run dev`).*

### 5. Validação
Se tudo estiver correto, você verá no terminal as mensagens:
* `Tabelas sincronizadas` (O Sequelize criou as tabelas `Pessoas` e `Cartaos` automaticamente no banco `wallet`).
* `Servidor disponível em: http://localhost:3000`.

---

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