# DOCUMENTAÇÃO API incluIR (versão 1.0)
## Bem-vinde!

#### A inclusão trata-se de dar liberdade as pessoas de IR e vir, com seu acesso garantido e bem-estar aonde forem.
#### Esta API tem como propósito ser uma ferramenta de acessibilidade que busca fomentar a inclusão de pessoas com deficiência através do seu acesso livre e facilitado em todos os espaços.

## Rotas da Entidade Avaliação

#### GET: /avaliacao/estabelecimento

http://localhost:5000/avaliacao/estabelecimentoId

Objetivo: Retornar todas as avaliações por estabelecimento
Acesso: Publico

Não é passado body.

Reposta [200]

Retornará as avaliações cadastradas por estabelecimento, buscando por seu ID.

   {
        "_id": "5fd5591f5a4ce80017961388",
        "userId": "5fd554675a4ce80017961382",
        "estabelecimentoId": "5fd556635a4ce80017961385",
        "vagaPCD": true,
        "banheiro": true,
        "notaBanheiro": 5,
        "sinalizacao": true,
        "notaSinalizacao": 4,
        "tradutorLibras": true,
        "rampa": true,
        "locomocaoInterna": 5,
        "avaliacaoGeral": 5,
        "createdAt": "2020-12-12T23:58:23.709Z",
        "updatedAt": "2020-12-12T23:58:23.709Z",
        "__v": 0
    }

Reposta [404]
{
    "Não há avaliações para este estabelecimento"	
}

#### POST: /avaliacao/cadastrar

http://localhost:porta/avaliacao/cadastrar

Objetivo: Realizar cadastro de estabelecimentos
Acesso: Privado (usuário precisa ter cadastro e estar logado para poder realizar o cadastro de uma avaliação)

Body:

{
    "userId": "5fd2b3a24ae71d45c00e159e",
    "estabelecimentoId": "5fd2b1e47ec638407cea6ad6",
    "vagaPCD": true,
    "banheiro": true,
    "notaBanheiro": 5,
    "sinalizacao": true,
    "notaSinalizacao": 4,
    "tradutorLibras": true,
    "rampa": true,
   "locomocaoInterna": 5,
   "avaliacaoGeral": 5
}

Reposta [200]

   {
        "_id": "5fd5591f5a4ce80017961388",
        "userId": "5fd554675a4ce80017961382",
        "estabelecimentoId": "5fd556635a4ce80017961385",
        "vagaPCD": true,
        "banheiro": true,
        "notaBanheiro": 5,
        "sinalizacao": true,
        "notaSinalizacao": 4,
        "tradutorLibras": true,
        "rampa": true,
        "locomocaoInterna": 5,
        "avaliacaoGeral": 5,
        "createdAt": "2020-12-12T23:58:23.709Z",
        "updatedAt": "2020-12-12T23:58:23.709Z",
        "__v": 0
    }
    
Reposta [400]
Ao tentar atribuir notaBanheiro passando banheiro false:

{
    "Não é possível dar nota banheiro"	
}

Reposta [400]
Ao tentar dar atribuir notaSinalizacao passando sinalizacao false:

{
    "Não é possível dar nota Sinalizacao"	
}

Reposta [400]
Usuário tentando realizar avalialão para estabelecimentoId já avaliado:

{
    "Já foi realizada avaliação para esse estabelecimento"	
}


#### DELETE: /avaliacao/:id

http://localhost:porta/avaliacao/:id

Objetivo: Deletar a avaliação cadastrada
Acesso: Privado

Não é passado body

Reposta [200]

{
    "Avaliação removida"	
}


## Rotas da Entidade Estabelecimento

#### GET: /estabelecimentos

http://localhost:porta/estabelecimentos/

Objetivo: Retornar todos os estabelecimentos cadastrados
Acesso: Publico

Não é passado body.

Reposta [200]

Retornará todos os estabelecimentos cadastrados em JSON:

   {
        "_id": "5fd556635a4ce80017961385",
        "nome": "Shopping Patteo",
        "endereco": "R. Carmelita Muniz de Araújo, 225 - Casa Caiada",
        "cidade": "Olinda",
        "tipo": "Shopping",
        "createdAt": "2020-12-12T23:46:43.607Z",
        "updatedAt": "2020-12-12T23:46:43.607Z",
        "__v": 0
    }

Reposta [404]
{
    "Não há estabelecimentos cadastrado"	
}

#### GET: /estabelecimentos/cidade

http://localhost:porta/estabelecimentos/cidade

Objetivo: Retornar todos os estabelecimentos cadastrados por cidade
Acesso: Publico

Não é passado body.

Reposta [200]

Retornará todos os estabelecimentos cadastrados para a cidade informada:

   {
        "_id": "5fd556635a4ce80017961385",
        "nome": "Shopping Patteo",
        "endereco": "R. Carmelita Muniz de Araújo, 225 - Casa Caiada",
        "cidade": "Olinda",
        "tipo": "Shopping",
        "createdAt": "2020-12-12T23:46:43.607Z",
        "updatedAt": "2020-12-12T23:46:43.607Z",
        "__v": 0
    }

Reposta [404]
{
    "Não há estabelecimento cadastrado para esta cidade"	
}

#### GET: /estabelecimentos/nome

http://localhost:5000/estabelecimentos/nome

Objetivo: Retornar todos os estabelecimentos cadastrados por nome
Acesso: Publico

Reposta [200]

Retornará os estabelecimentos cadastrados por nome:

   {
        "_id": "5fd556635a4ce80017961385",
        "nome": "Shopping Patteo",
        "endereco": "R. Carmelita Muniz de Araújo, 225 - Casa Caiada",
        "cidade": "Olinda",
        "tipo": "Shopping",
        "createdAt": "2020-12-12T23:46:43.607Z",
        "updatedAt": "2020-12-12T23:46:43.607Z",
        "__v": 0
    }

Reposta [404]
{
    "Não há estabelecimentos cadastrado"	
}

#### GET: /estabelecimentos/tipo

http://localhost:5000/estabelecimentos/tipo

Objetivo: Retornar todos os estabelecimentos cadastrados por tipo
Acesso: Publico

Reposta [200]

Retornará todos os estabelecimentos cadastrados para o tipo informado:

   {
        "_id": "5fd556635a4ce80017961385",
        "nome": "Shopping Patteo",
        "endereco": "R. Carmelita Muniz de Araújo, 225 - Casa Caiada",
        "cidade": "Olinda",
        "tipo": "Shopping",
        "createdAt": "2020-12-12T23:46:43.607Z",
        "updatedAt": "2020-12-12T23:46:43.607Z",
        "__v": 0
    }

Reposta [404]
{
    "Não há estabelecimentos cadastrado"	
}

#### POST: /estabelecimentos/cadastrar

http://localhost:porta/estabelecimentos/cadastrar

Objetivo: Realizar cadastro de estabelecimentos
Acesso: Privado (apenas o admin realiza o cadastro de estabelecimentos)

Body:

{
"nome": "Shopping Patteo Olinda",
"endereco": "R. Carmelita Muniz de Araújo, 225 - Casa Caiada",
"cidade": "Olinda",
"tipo": "Shopping"
}

Resposta [200]

{
        "_id": "5fd556635a4ce80017961385",
        "nome": "Shopping Patteo Olinda",
        "endereco": "R. Carmelita Muniz de Araújo, 225 - Casa Caiada",
        "cidade": "Olinda",
        "tipo": "Shopping",
        "createdAt": "2020-12-12T23:46:43.607Z",
        "updatedAt": "2020-12-12T23:46:43.607Z",
}

Reposta [400]

Ao tentar realizar o cadastro de um estabelecimento com o mesmo nome de um já cadastrado:

{
    "Já existe um cadastro para este estabelecimento"	
}

#### PATCH: /estabelecimentos/:id

http://localhost:porta/estabelecimentos/:id

Objetivo: Alterar cadastro do estabelecimento (com exceção do campo tipo)
Acesso: Privado

O Id deverá ser informado na URI

Body (campos a ser atualizados):

{
"nome": "Shopping Patteo",
"endereco": "R. Carmelita Muniz de Araújo, 652 - Casa Caiada",
}

Resposta [200]

{   
    "message": " ID foi atualizado."
}

Reposta [400]

Ao informar um ID inválido:

{
    "Id invalido"	
}

Reposta [400]

Ao informar um ID válido porém que não está cadastrado:

{
    "O estabelecimento não está cadastrado"	
}

#### DELETE: /estabelecimentos/:id

http://localhost:porta/users/:id

Objetivo: Deletar cadastro do estabelecimento
Acesso: Privado

Não é passado body

Reposta [200]

{
    "Estabelecimento removido da base"	
}


## Rotas da Entidade User

#### POST: /users/cadastro

http://localhost:porta/users/cadastro

Objetivo: Realizar cadastro de usuário
Acesso: Público

Body:

{
"nome": "Rafaela",
"sobrenome": "Silva",
"nascimento": "1990-05-05T17:10:13.000Z",
"endereco": "Rua Maria Ramos, Olinda",
"email": "rafaela@teste.com.br",
"senha": "abc12345678"
}

Retorno [200]

{
    "mensagem": "Cadastro realizado com sucesso"
}

Reposta [400]

Ao cadastrar uma conta utilizando e-mail já cadastrado

{
    "errors": [
        "Já existe uma conta com esse e-mail"
    ]
}

#### DELETE: /users/:id

http://localhost:port/users/:id

Objetivo: Deletar a conta
Acesso: Privado

Não é passado body

Reposta [200]

{
    "Cadastro removido com sucesso"	
}


## Rotas da Entidade Session

#### POST: /users/login

http://localhost:porta/users/login

Objetivo: Realizar login de usuário
Acesso: Privado

Body: 

{
      "email": "rafaela@teste.com.br",
      "senha": "abcd12345678"
}

Resposta [200]:

{
    "user": {
        "id": "5fd554675a4ce80017961382",
        "nome": "Rafaela"
    },
    "token": "eyGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDU1NDY3NWE0Y2U4MDAxNzk2MTM4MiIsImlhdCI6MTYwNzgxOTAyMiwiZXhwIjoxNjA4NDIzODIyfQ.Z0ljGnKbjQlJvBiRnGXeytR3SLsHS1BqRa5G5mS7xm8"
}

Reposta [401]
{
    "error": "senha errada"
}

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

