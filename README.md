# Alugue Aí 

**Documentação de API (versão 2.0)**

### **Sobre o que é o projeto ?**

Conectar pessoas que possuem objetos ociosos a pessoas que precisam momentaneamente deste mesmo objeto. A ideia é aproveitar objetos que não estão em uso por um período de tempo, gerando uma renda extra ao proprietário e prevenindo que o locador faça uma compra de momento, assim economizando.

### **O que é necessário para fazer funcionar ?**

**Instalações:**

- Node.js

**Iniciando:**

Baixar as dependências na raiz do projeto com o comando `npm install`

Depois de ter instalado as dependências, usar o comando `npm start` ou `npm run dev` para rodar o servidor e iniciar a aplicação localmente.

# **Rotas Públicas**

### POST

**/cliente**/cadastrar

**/anunciante**/cadastrar

body necessário

```jsx
{
	"nome":"",
	"telefone":"",
	"endereco":"",
	"email":"",
	"senha":"" 
}
```

senha com no mínimo 8 caracteres

Resposta [201]

```jsx
{
  "mensagem": "Cadastro realizado com sucesso"
}
```

### POST

**sessao/cliente**

**sessao/anunciante**

body necessário

```jsx
{
	"mail":"",
	"senhaEntrada":""
}
```

Resposta [200]

```jsx
{
  "cliente": {
    "id": "",
    "email": ""
  },
  "token": ""
}
```

# **Rotas Privadas**

necessário token para acessa-las

### **POST**

**/objeto**/cadastrar/:id

```jsx
{
	"nome":"",
	"preco": numero,
	"foto":""	
}
```

Resposta [201]

```jsx
{
  "mensagem": "Objeto cadastrado com sucesso"
}
```

### **POST**

**aluguel/alugar**

```jsx
{
	"idObjeto":"",
	"IdCliente":""
}
```

Resposta [200]

```jsx
{
  "mensagem": "Sucesso"
}
```

## GET

**/objeto**

Resposta [200]

```jsx
[
	{ "isAlugado": boolean,
    "_id": "",
    "nome": "",
    "preco": numero,
    "foto": "",
    "anuncianteId": ""
	}
]
```

**/objeto**/:nome

Resposta [200]

```jsx
[
	{ "isAlugado": boolean,
    "_id": "",
    "nome": "",
    "preco": numero,
    "foto": "",
    "anuncianteId": ""
	}
]
```

## GET

**/aluguel**

Resposta [200]

```jsx
[
	{ "_id": "",
    "objetoId": "",
    "clienteId": "",
	}
]
```

## GET

**/anunciante**

Resposta [200]

```jsx
[
	{
    "objetos": [
      ""
    ],
    "_id": "",
    "nome": "",
    "telefone": "",
    "endereco": "",
    "email": "",
    "senha": ""
	}
]
```

## GET

**/cliente**

Resposta [200]

```jsx
[
	{
		"objetosAlugados": [
	      ""
	    ],
	    "_id": "",
	    "nome": "",
	    "telefone": "",
	    "endereco": "",
	    "email": "",
	    "senha": ""
	}
]
```

## PUT

**/objeto/atualizar/:id**

body necessário

```jsx
[
	{
		"nome":"",
		"preco": numero,
		"foto":""	
	}
]
```

## PUT

**/anunciante/atualizar/:id**

body necessário

```jsx
[
	{
		"nome":"",
		"telefone":"",
		"endereco":"",
		"email":"",
		"senha":""
	}
]
```

## PUT

**/cliente/atualizar/:id**

body necessário

```jsx
[
	{
		"nome":"",
		"telefone":"",
		"endereco":"",
		"email":"",
		"senha":""
	}
]
```

## DELETE

**/objeto/:id**

Resposta[200]

```jsx
{
  "mensagem": "Objeto Removido !"
}
```

Resposta[400]

```jsx
{
	"mensagem": "Não é possivel remover objetos alugados"
}
```

## DELETE

**/aluguel/devolver/:id**

Resposta[200]

```jsx
{
  "mensagem": "Devolução realizada"
}
```

## DELETE

**/anunciante/:id**

Resposta[200]

```jsx
{
  "mensagem": "Conta deletada !"
}
```

Resposta[400]

```jsx
{
  "mensagem": "Não é possivel remover conta com objetos alugados"
}
```

## DELETE

**/cliente/:id**

Resposta[200]

```jsx
{
  "mensagem": "Conta deletada !"
}
```

Resposta[400]

```jsx
{
  "mensagem": "'Faça devolução dos objetos alugados para deletar conta"
}
```

# **O que foi usado no projeto ?**

### Arquitetura MVC

### MongoDB

### Dependencias:

- express
- nodemon
- mongoose
- jsonwebtoken
- bcrypt
- dotenv
- cors
- yup

# Melhorias

Reescrever todo código para inglês

Separar middlewares, separar as funcionalidade dos usuários

Contar o tempo entre o aluguel e a devolução e calcular o preço

Melhorar validações

Inserir mais validações

Mais sugestões ? Entra em contato :D