# Alugue Aí 

**Documentação de API (versão 1.0)**

### **Sobre o que é o projeto ?**

Conectar pessoas que possuem objetos ociosos a pessoas que precisam momentaneamente deste mesmo objeto. A ideia é aproveitar objetos que não estão em uso por um período de tempo, gerando uma renda extra ao proprietário e prevenindo que o locador faça uma compra de momento, assim economizando.

### **O que é necessário para fazer funcionar ?**

**Instalações:**

- Node.js

**Iniciando:**

Baixar as dependências na raiz do projeto com o comando `npm install`

Depois de ter instalado as dependências, usar o comando `npm start` para rodar o servidor e iniciar a aplicação.

# **Rotas**

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

## GET

**/objeto**/

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

Resposta [404]

```jsx
{
  "message": "Este objeto não esta cadastrado"
}
```

**Projeto em desenvolvimento**