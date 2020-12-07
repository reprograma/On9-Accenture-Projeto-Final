# DOCUMENTAÇÃO API incluIR (versão 1.0)
## Bem-vinde!

#### A inclusão trata-se de dar liberdade as pessoas de IR e vir, com seu acesso garantido e bem-estar aonde forem.
#### Esta API tem como propósito ser uma ferramenta de acessibilidade que busca fomentar a inclusão de pessoas com deficiência através do seu acesso livre e facilitado em todos os espaços.

## Rotas da Entidade Avaliação

#### GET: /avaliacao/estabelecimento

http://localhost:5000/avaliacao/estabelecimento

Objetivo: Retornar todas as avaliações por estabelecimento
Acesso: Publico

#### GET: /avaliacao/user

http://localhost:5000/avaliacao/user

Objetivo: Retornar todas as avaliações feitas pelo prório usuário
Acesso: Privado (apenas o próprio usuário pode realizar esse filtro)

#### POST: /avaliacao/cadastrar

http://localhost:5000/avaliacao/cadastrar

Objetivo: Realizar cadastro de estabelecimentos
Acesso: Publico

#### DELETE: /avaliacao/:id

http://localhost:5000/avaliacao/:id

Objetivo: Deletar a avaliação cadastrada
Acesso: Privado


## Rotas da Entidade Estabelecimento

#### GET: /estabelecimentos

http://localhost:5000/estabelecimentos/

Objetivo: Retornar todos os estabelecimentos cadastrados
Acesso: Publico

#### GET: /estabelecimentos/cidade

http://localhost:5000/estabelecimentos/cidade

Objetivo: Retornar todos os estabelecimentos cadastrados por cidade
Acesso: Publico

#### GET: /estabelecimentos/nome

http://localhost:5000/estabelecimentos/nome

Objetivo: Retornar todos os estabelecimentos cadastrados por nome
Acesso: Publico

#### GET: /estabelecimentos/tipo

http://localhost:5000/estabelecimentos/tipo

Objetivo: Retornar todos os estabelecimentos cadastrados por tipo
Acesso: Publico

#### POST: /estabelecimentos/cadastrar

http://localhost:5000/estabelecimentos/cadastrar

Objetivo: Realizar cadastro de estabelecimentos
Acesso: Privado (apenas o admin realiza o cadastro de estabelecimentos)

#### PATCH: /estabelecimentos/:id

http://localhost:5000/estabelecimentos/:id

Objetivo: Alterar cadastro do estabelecimento (com exceção do campo tipo)
Acesso: Privado

#### DELETE: /estabelecimentos/:id

http://localhost:5000/users/:id

Objetivo: Deletar cadastro do estabelecimento
Acesso: Privado

## Rotas da Entidade User

#### GET: /users

http://localhost:5000/users/

Objetivo: Retornar todos os usuários
Acesso: Privado

#### POST: /users/cadastro

http://localhost:5000/users/cadastro

Objetivo: Realizar cadastro de usuário
Acesso: Público

#### POST: /users/login

http://localhost:5000/users/login

Objetivo: Realizar login de usuário
Acesso: Público

#### PATCH: /users/:id

http://localhost:5000/users/:id

Objetivo: Alterar campo cidade no cadastro de usuário
Acesso: Privado

#### DELETE: /users/:id

http://localhost:5000/users/:id

Objetivo: Deletar a conta
Acesso: Privado

#### Requisitos para executar o projeto:
- Possuir VSCODE ou IDE de preferência;
- Possuir NodeJS;
- Possuir Banco MongoDB.


#### Como configurar o ambiente para o projeto:

1. Fazer o clone do projeto utilizando o comando Git a seguir:
  - git clone https://github.com/daniclericuzi/On9-Accenture-Projeto-Final/tree/danielle-cavalcanti/danielle-clericuzi-incluir
2. Iniciar o projeto: npm install
3. Instalar as dependências descritas no package.json: npm install
4. Iniciar o servidor: npm start

