# Meu Resumão (versão 1.0)
Esse projeto foi elaborado para o trabalho de conclusão do Bootcamp de BackEnd promovido pela {reprograma} ocorrido entre Agosto e Dezembro de 2020 com duração de 18 semanas.

## Sobre o Projeto
Como ex aluna de escola pública e atualmente aluna de uma universidade pública, eu senti muita dificuldade em estudar na época que eu me preparava para o ENEM, pensando nisso, desenvolvi a idéia do "Meu Resumão" para ajudar os vestibulandos do ENEM. A aplicação serve para os alunos postarem seus resumos pessoais sobre temas relacionados ao ENEM e ajudar outros alunos de forma mais simples e concentrada.

## Objetivo
O objetivo do projeto é possibilitar o registro de resumos sobre o ENEM e pesquisar por assunto e matéria.

## Status

Em desenvolvimento... 

## Rotas 


### Apresentação da API

**POST:** /

Apresenta o título da API e sua versão.

Resposta [200]:

~~~Javascript
{
    "titulo": "Meu Resumão",
    "versao": "1.0.0"
}
~~~


### Usuario
Fazer login na API para gerar o JSON Web Token que será enviado em todas as requisições protegidas que apenas o usuário cadastrado terá acesso.

**POST:** meuresumao/login

Body necessário:

~~~Javascript
    {
        "login": "string",
        "password": "string"
    }
~~~

Resposta [200]:

~~~Javascript
    {
        {
            "login": {
                "id": "object ID",
                "login": "string"
            },
            "token": "string"
        }
    }
~~~

**POST:** meuresumao/usuarios/criar

Cria um novo usuário.

Body necessário:

~~~Javascript
    {
        "name": "string",
        "login": "string",
        "password": "string"
    }
~~~


### Postagens

**GET:** meuresumao/todos

Listar todas os resumos

Resposta [200]:

~~~Javascript
[
    {
        "_id": "object ID",
        "referencias": [
            "Aqui vai ficar as referencias",
            "referencia"
        ],
        "tags": [
            "tag01",
            "tag02",
            "tag03"
        ],
        "titulo": "titulo",
        "autor": "Michelle Lícia",
        "resumo": "Aqui vai ficar o resumo",
        "materia": "Matéria",
        "assunto": "Assunto",
    }
]
~~~

**GET:** meuresumao/{id}

Listar todas os resumos pelo ID

Resposta [200]:

~~~Javascript
[
    {
        "_id": "object ID",
        "referencias": [
            "Aqui vai ficar as referencias",
            "referencia"
        ],
        "tags": [
            "tag01",
            "tag02",
            "tag03"
        ],
        "titulo": "titulo",
        "autor": "Michelle Lícia",
        "resumo": "Aqui vai ficar o resumo",
        "materia": "Matéria",
        "assunto": "Assunto",
    }
]
~~~

**GET:** meuresumao/materia

Listar todas os resumos pela matéria.

Resposta [200]:

~~~Javascript
[
    {
        "_id": "object ID",
        "referencias": [
            "Aqui vai ficar as referencias",
            "referencia"
        ],
        "tags": [
            "tag01",
            "tag02",
            "tag03"
        ],
        "titulo": "titulo",
        "autor": "Michelle Lícia",
        "resumo": "Aqui vai ficar o resumo",
        "materia": "Matéria",
        "assunto": "Assunto",
    }
]
~~~


**GET:** /meuresumao/assunto

Visualizar resumo pelo assunto do resumo.

Resposta [200]:

~~~Javascript
{
        "_id": "object ID",
        "referencias": [
            "Aqui vai ficar as referencias",
            "referencia"
        ],
        "tags": [
            "tag01",
            "tag02",
            "tag03"
        ],
        "titulo": "titulo",
        "autor": "Michelle Lícia",
        "resumo": "Aqui vai ficar o resumo",
        "materia": "Matéria",
        "assunto": "Assunto",
    }
~~~


**POST:** meuresumao/criar

Posta novo resumo. É necessário autorização com token no padrão: Bearer Token.

Body necessário:

~~~Javascript
{
        "referencias": [
            "Aqui vai ficar as referencias",
            "referencia"
        ],
        "tags": [
            "tag01",
            "tag02",
            "tag03"
        ],
        "titulo": "titulo",
        "autor": "Michelle Lícia",
        "resumo": "Aqui vai ficar o resumo",
        "materia": "Matéria",
        "assunto": "Assunto",
    }
~~~

Resposta [200]:

~~~Javascript
{
        "id": 
        "referencias": Array,
        "tags": Array,
        "titulo": String,
        "autor": String,
        "resumo": String,
        "materia": String,
        "assunto": String,
        "password": String,
        "login": String,
    }
~~~
Resposta [201]
~~~Javascript
{
        "mensagem": "Resumo postado com sucesso!"
    }
~~~


**PUT:** meuresumao/atualizar

Atualiza resumo pelo ID. É necessário autorização com token no padrão: Bearer Token.

Body necessário:

~~~Javascript
{
    {
        "id": String,
        "referencias": Array,
        "tags": Array,
        "titulo": String,
        "autor": String,
        "resumo": String,
        "materia": String,
        "assunto": String,
    }
}
~~~

**PUT:** meuresumao/atualizartitulo/:id

Atualiza o campo titulo resumo pelo ID. É necessário autorização com token no padrão: Bearer Token.

Body necessário:

~~~Javascript
{
    {
        "titulo": String,
    }
}
~~~


Resposta [200]:

~~~Javascript
{
        "mensagem": "`{ID} foi atualizado com sucesso!`"
    }
~~~



**DELETE:** meuresumao/:id

Deletar um resumo a partir do seu ID. É necessário autorização com token no padrão: Bearer Token.

Resposta [200]:

~~~Javascript
{
    "message": "A Postagem {id} foi deletada com sucesso!"
}
~~~


## Regras de negócio

- Apenas usuários cadastrados poderá realizar postagens
- Usuários poderão publicar resumos com o mesmo título.

## Para rodar o Meu Resumão.

1. Clone esse repositório

2. Digite **npm install** em seu terminal para instalar as dependências configuradas no package.

    ~~~Shell
        npm install
    ~~~

- Para rodar o servidor em ambiente de desenvolvimento **npm run dev**:

    ~~~Shell
        npm run dev
    ~~~

 - ou, simplesmente digite **npm start**:
    ~~~Shell
        npm start
    ~~~

## Tecnologias

Foram utilizadas para o desenvolvimento do projeto as seguintes tecnologias e dependências:

- Nodemon;
- MongoDB;
- Mongoose;
- Bcrypt;
- Express unless;
- Jsonwebtoken;
- Git e Github;
- Visual Studio Code;
- Node.js;
- Express.js;



## Futuras melhorias
- Adicionar a opção de comentários nos resumos.
- Adicionar a opção resumos favoritos para usuários.
- Adicionar a filtragem por Tags.


Este projeto encontra-se em desenvolvimento e está aberto para pullrequests.

Feito por: Michelle Lícia

Contatos:

[![Linkedin Badge](https://img.shields.io/badge/-michellelicia-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/michellelicia/)](https://www.linkedin.com/in/michellelicia/)

[![Gmail Badge](https://img.shields.io/badge/gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:michellelicia98@gmail.com)](mailto:michellelicia98@gmail.com)