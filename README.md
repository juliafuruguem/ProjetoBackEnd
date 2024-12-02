# Projeto para uma Livraria com MVC, Helpers e Autenticação

## Descrição do Sistema

O projeto é uma API RESTful que gerencia usuários e livros. A API é construída com Node.js e Express, utilizando PostgreSQL como banco de dados.

### A aplicação segue a arquitetura MVC (Model-View-Controller), onde:

 - Controllers lidam com as requisições HTTP.
 - Models representam a estrutura dos dados.
 - Views são desnecessárias, pois a aplicação é uma API.
 - Services contêm a lógica de negócios.
 - Helpers fornecem funções auxiliares, como validação e hashing de senhas.

## Requisitos Funcionais

### Autenticação de Usuário:
 - Registro de novos usuários.
 - Login de usuários existentes com validação de senha.

### Gerenciamento de Livros:
 - Cadastro de livros com título, autor e preço.
 - Consulta de todos os livros cadastrados.

### Gerenciamento de Usuários:
 - Consulta de todos os usuários cadastrados.
 - Criação de novos usuários com validação de dados.

## Requisitos Não Funcionais 

### Desempenho:
 - Respostas rápidas e eficientes, mesmo com múltiplas requisições.

### Segurança: 
 - Senhas devem ser armazenadas com hash. Comunicação segura via HTTPS.

### Escalabilidade: 
 - O sistema deve ser capaz de crescer conforme o número de usuários aumenta.

### Usabilidade: 
 - Respostas claras da API com mensagens de erro compreensíveis.

### Confiabilidade: 
 - Manter dados seguros e registrar erros para diagnóstico.

### Manutenibilidade: 
 - Código organizado e fácil de modificar.

### Testabilidade: 
 - Sistema deve permitir testes automatizados.

### Alta Disponibilidade: 
 - O sistema deve estar disponível constantemente, com possibilidade de distribuição em múltiplos servidores.

## Rotas e Funcionalidades

### Rota de Autenticação (/auth)
POST /register: Criação de novo usuário.
POST /login: Login de usuário.

### Rota de Livros (/livros)
GET /livros: Lista todos os livros.
POST /livros: Criação de novo livro.

### Rota de Usuários (/users)
GET /users: Lista todos os usuários.
POST /users: Criação de novo usuário.

### Dependências
Express: Framework para a API.
pg: Cliente PostgreSQL.
crypto: Para hashing de senhas.
dotenv: Gerenciamento de variáveis de ambiente (não presente no código, mas recomendado).

## Conclusão
Este projeto implementa uma API para gerenciamento de livros e usuários, com autenticação segura. A estrutura em MVC facilita a manutenção e expansão do sistema.