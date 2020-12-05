# Vacina em Dia (versão 1.0)
Projeto elaborado para conclusão do Bootcamp de Back-End promovido pela {reprograma} ocorrido entre Agosto e Dezembro de 2020 com duração de 18 semanas.

## Sobre o Projeto
Sabemos da importância de manter em dia a vacinação para prevenir doenças como hepatites e sarampo, porém, muitas pessoas não fazem ideia de onde guardaram o seu cartão de vacina ou muitas vezes ele está muito antigo e de difícil leitura. Foi a partir desse problema que surgiu a ideia de uma API de um cartão de vacina virtual que tem a proposta das pessoas poderem ter o controle de suas vacinas.

## Objetivo
O objetivo do projeto é possibilitar o registro de usuários e vacinas, visualizar todos ou por ID, fazer atualizações de campo específico, assim como ser possível deletar registros. Todo o desenvolvimento da API foi pensado na utilização de boas práticas e estrutura de pastas, seguindo o design MVC.

## Status
🚧 Em construção... 🚧

## Rotas
### Apresentação da API

**POST:** /

Apresenta o título da API e sua versão.

Resposta [200]:

~~~Javascript
{
    "titulo": "Vacina em Dia",
    "versao": "1.0.0"
}
~~~

### Administrador

**POST:** admin/register

Criar novo usuário administrador.

Body necessário:

~~~Javascript
{
    "name": "string",
    "email": "string",
    "password": "string"
}
~~~

Resposta [200]:

~~~Javascript
{
    "_id": "object ID",
    "name": "string",
    "email": "string",
    "password": "string"
}
~~~

Resposta [400]:

~~~Javascript
{
    "error": [
        "Já existe uma conta com esse e-mail."
    ]
}
~~~

### Login
Fazer login na API para gerar o JSON Web Token que será enviado em todas as requisições protegidas que apenas o usuário administrador terá acesso.

**POST:** /login

Body necessário:

~~~Javascript
    {
        "nameAdmin": "string",
        "password": "string"
    }
~~~

Resposta [200]:

~~~Javascript
    {
        {
            "admin": {
                "id": "object ID",
                "name": "string"
            },
            "token": "string"
        }
    }
~~~

### Usuários
**GET:** /users

Lista todos os usuários. É necessário autorização com token no padrão: Bearer Token.

Resposta [200]:

~~~Javascript
[
    {
        "_id": "object ID",
        "vaccinesTaken": "array",
        "name": "string",
        "email": "string",
        "password": "string",
        "cpf": "string",
        "phone": "string",
    }
]
~~~

Resposta [401]:

~~~Javascript
{
    "error": "Token não fornecido."
}
~~~

**POST:** /register

Criar novo usuário.

Body necessário:

~~~Javascript
{
    "name": "string",
    "email": "string",
    "password": "string",
    "cpf": "string",
    "phone": "string"
}
~~~

Resposta [200]:

~~~Javascript
{
    "_id": "object ID",
    "vaccinesTaken": "array",
    "name": "string",
    "email": "string",
    "password": "string",
    "cpf": "string",
    "phone": "string",
}
~~~

Resposta [400]:

~~~Javascript
{
    "error": [
        "Já existe uma conta com esse e-mail."
    ]
}
~~~

**GET:** /users/{id}

Visualizar usuário por ID.

Resposta [200]:

Usuário com o ID informado.

~~~Javascript
{
    "_id": "object ID",
    "vaccinesTaken": "array",
    "name": "string",
    "email": "string",
    "password": "string",
    "cpf": "string",
    "phone": "string",
}
~~~

**PATCH:** /phone/{id}

Edita o telefone do usuário com o ID indicado.

Body necessário:

~~~Javascript
{
    "phone":"string"
}
~~~

Resposta [200]:

~~~Javascript
{
    "message": "O telefone do usuário de id: {id} foi atualizado com sucesso."
}
~~~

Resposta [400]:

Quando o ID informado está incorreto.

~~~Javascript
{
    "message": "O ID especificado não é válido."
}
~~~

**DELETE:** /:id

Deletar um usuário a partir do seu ID. É necessário autorização com token no padrão: Bearer Token.

Resposta [200]:

~~~Javascript
{
    "message": "Usuário deletado com sucesso."
}
~~~

Resposta [401]:

~~~Javascript
{
    "error": "Token não fornecido."
}
~~~

### Vacinas

**GET:** /vaccines

Listar todas as vacinas

Resposta [200]:

~~~Javascript
[
    {
        "_id": "object ID",
        "name": "string",
        "date": "date",
        "dose": "string"
    }
]
~~~

**POST:** /register

Cadastrar nova vacina.

Body necessário:

~~~Javascript
{
    "name": "string",
    "dose": "string",
    "avoidedDiseases": "string"
}
~~~

Resposta [201]:

~~~Javascript
{
    "_id": "object ID",
    "name": "string",
    "date": "date",
    "dose": "string",
    "avoidedDiseases": "string"
}
~~~

**GET:** /vaccines/{id}

Visualizar vacina pelo seu ID.

Resposta [200]:

Vacina com o ID informado.

~~~Javascript
{
    "_id": "object ID",
    "name": "string",
    "date": "date",
    "dose": "string",
    "avoidedDiseases": "string"
}
~~~

**POST:** /register/{id}

Registrar vacina no cartão do usuário.

Body necessário:

~~~Javascript
{
    "name": "string",
    "dose": "string",
    "avoidedDiseases": "string"
}
~~~

Resposta [201]:

~~~Javascript
{
    "_id": "object ID",
    "name": "string",
    "dose": "string",
    "avoidedDiseases": "string",
    "userId": "object ID"
}
~~~

**DELETE:** /:id

Deletar uma vacina a partir do seu ID. É necessário autorização com token no padrão: Bearer Token.

Resposta [200]:

~~~Javascript
{
    "message": "Vacina deletada com sucesso."
}
~~~

Resposta [401]:

~~~Javascript
{
    "error": "Token não fornecido."
}
~~~

## Regras de negócio

- Não pode existir usuários iguais.
- O CPF não pode ser alterado.
- Apenas o usuário administrador poderá cadastrar e deletar vacinas.
- Apenas o usuário administrador poderá atualizar as vacinas tomadas.
- Apenas o usuário administrador poderá visualizar todos os usuários.
- Apenas o usuário administrador poderá deletar os usuários.

## Para rodar o projeto
- Clone esse repositório
- Faça **npm install** em seu terminal para instalar as dependências.

    ~~~Shell
        npm install
    ~~~

- Para rodar o servidor em ambiente de desenvolvimento, digite **npm run dev** no terminal:

    ~~~Shell
        npm run dev
    ~~~

- Ou se preferir, apenas **npm start**:
    ~~~Shell
        npm start
    ~~~

## Tecnologias

Foram utilizadas no desenvolvimento do projeto as seguintes tecnologias:

- Git e Github;
- Visual Studio Code;
- Node.js;
- Express.js;
- Nodemon;
- MongoDB;
- Mongoose;
- Cors;
- Bcrypt;
- Yup;
- Jsonwebtoken.

Obs.: O Nodemon está como dependência de desenvolvimento.

## Melhorias futuras
- Opção de filtrar por vacinas específicas de acordo com a idade da pessoa.
- Visualizar as vacinas que o usuário ainda precisa tomar.


Este projeto encontra-se em desenvolvimento e está aberto para pull request.

Feito com ❤️ por Irla Andrade 👋🏽 Entre em contato:

[![Linkedin Badge](https://img.shields.io/badge/-irlaandrade-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/irlaandrade/)](https://www.linkedin.com/in/irlaandrade/)

[![Gmail Badge](https://img.shields.io/badge/gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:paula.irla@gmail.com)](mailto:paula.irla@gmail.com)