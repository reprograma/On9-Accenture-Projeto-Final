# Controle autônomo

## Sobre o projeto
Essa API tem o intuito de ajudar dos microempreendedores que estão iniciando (ou não), e que possuem equipes reduzidas facilitando a administração dos produtos que oferecem. O objetivo dessa API é fazer o controle de estoque para autônomos que possuem a dificuldade de administrar a saída e entrada dos produtos que oferecem. 

Nessa API é possível cadastrar produtos (estoque) e emitir pedidos (vendas), que para uma melhor organização serão registrados em duas coleções diferentes, utilizando o MongoDB. A emissão de cada pedido está relacionada diretamente com o estoque, fazendo a subtração (venda) ou soma ( abastecimento ou estorno) na quantidade existente do estoque do produto cadastrado que será vendido, permitindo sempre uma atualização simultânea da venda com o estoque.

## Estrutura do Projeto

## Dependências requeridas

    "bcrypt": "^5.0.0",
    "express": "^4.17.1",
    "mongoose": "^5.11.1",
    "nodemon": "^2.0.6",
    "yup": "^0.32.1"

## Rotas

### Estoque

- GET

```
@route GET estoque
@desc Retorna todos os produtos
@access Public 
@endpoint http://localhost:8080/estoque/
```

- GET

```
route GET estoque/:nomeProduto
@desc Retorna produto pelo nome
@access Public 
@endpoint http://localhost:8080/estoque/:nomeProduto
```

- POST

```
@route POST estoque/add
@desc Cadastrar novo produto
@access Public 
@endpoint http://localhost:8080/estoque/cadastro
```
    
 - Body necessário

    ```
    {
    "nomeProduto": "String",
    "descricao": "String",
    "estoque": Number,
    "valorFabrica": Number
    }
    ```

- PATCH


```
@route PATCH estoque/abastecimento
@desc Abastecer o estoque de um produto
@access Public 
@endpoint http://localhost:8080/estoque/abastecimento
```

 - Body necessário

    ```
    {
    "nomeProduto": "String",
    "estoque": Number,
    }
    ```

- DELETE

```
@route DELETE /:id
@desc Deletar um produto
@access Private 
@endpoint http://localhost:8080/estoque/:id
```

### Vendas



- GET

```
@route GET venda
@desc Retorna todas as vendas
@access Public 
@endpoint http://localhost:8080/venda/
```

- GET

```
@route GET venda/:data
@desc Retorna todas as vendas do dia 
@access Public 
@endpoint http://localhost:8080/venda/:data 
```

- POST

```

@route POST venda/produto
@desc Registrar uma nova venda
@access Public 
@endpoint http://localhost:8080/venda/produto

```

- Body necessário

    ```
    {
    "nomeProduto": "String",
    "valorVenda": Number,
    "quantidade": Number,
    "vendedor": "String",
    "clienteContato": [
        "String",
        Number
        ]
    }
    ```


- DELETE

```
@route DELETE /:id
@desc delete task
@access Private 
@endpoint http://localhost:8080/venda/:id
```

## Como ter acesso?

Para ter o acesso na sua máquina, fazer os seguintes comandos no seu terminal:

```
git clone <link repositório>
npm install
npm start

```

### Contato

E-mail: anareis1706@gmail.com

Linkedin:  www.linkedin.com/in/anarei-s