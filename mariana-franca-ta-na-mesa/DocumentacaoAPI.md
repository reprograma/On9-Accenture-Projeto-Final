# Documentação de API (versão 1.0)

## Bem Vinde

## Sobre a API ta-na-Mesa

Esta API tem como propósito ser uma coleção pessoal de receitas, onde o usuário pode visualizar suas receitas, editar, adicionar, fazer buscas por campos específicas e eliminar receitas.

## Contatos

Linkedin: [www.linkedin.com/in/mariana-martiniano-de-frança-7284a642]
(http://www.linkedin.com/in/mariana-martiniano-de-fran%C3%A7a-7284a642)


Email: donafran@gmail.com

## Estrutura do JSON

```jsx
{
    "_id": " ",
		"nomeReceita": " ",
		"ingredientePrincipal": " ",
		"ingredientes": [ " " ],
    "preparo": [ " " ],
		"tipoReceita":" ",
    "receitaSelecionada": " ",
    "observacoes": " ",    
   
}
```

[ACESSOS](https://www.notion.so/6139d8ed71ec449b93a346a1e1cccc84)




## Para rodar o projeto

clone

npm install

npm start

npm bcrypt

Esse projeto está em constante desenvolvimento e aberto para pull request.

Fiquem a vontade.

## Importando no MongoDB

mongoimport --db tanaMesa --collection receitas --file Receita.json --jsonArray