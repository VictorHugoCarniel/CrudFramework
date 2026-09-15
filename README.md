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
* **Ferramentas de Dev:** Nodemon & Postman

---

## Relatório Técnico da Aplicação

### Ficha Técnica
| Item | Detalhe |
| :--- | :--- |
| **Licença de Software** | MIT License (Livre / Open Source) |
| **Responsáveis** | OpenJS Foundation (Node.js) e Comunidade Open Source (Fastify / Sequelize) |
| **Servidores Web** | HTTP/HTTPS nativo do Node.js (em produção: Nginx como Proxy Reverso, PM2 ou Docker) |

---

### Vantagens e Desvantagens

#### Vantagens
* **Alta Performance:** O Fastify entrega um tempo de resposta extremamente baixo e suporta grande volume de requisições por segundo.
* **Abstração do SQL:** O Sequelize gerencia a criação de tabelas, relacionamentos e buscas através de sintaxe orientada a objetos em JavaScript.
* **Modularidade:** Organização clara de responsabilidades dividida entre configurações (`config`), modelos (`models`) e rotas (`routes`).

#### Desvantagens
* **Single-Thread:** Tarefas de processamento pesado de CPU podem travar o Event Loop do Node.js.
* **Gestão de Dependências:** O ecossistema `npm` exige atenção frequente à segurança e atualização de pacotes.

---

### Principais Características
* Arquitetura de entrada e saída (I/O) assíncrona e não-bloqueante.
* Inserção de dados individual ou em lote (*Bulk Insert*).
* Sincronização automática das tabelas no banco de dados (`sequelize.sync()`).

---

## Configuração e Instalação

### Pré-requisitos
* **Node.js** (v18 ou superior)
* **PostgreSQL** rodando na porta padrão `5432`
* Banco de dados criado com o nome `wallet`
