# Documentação de API (versão 1.0)

## Bem Vindos

## Sobre a API ta-na-Mesa

Esta API tem como propósito ser uma coleção pessoal de receitas, onde o usuário pode visualizar suas receitas, editar, adicionar, fazer buscas por campos específicas e eliminar receitas.

## Contatos

Linkedin: [https://www.linkedin.com/in/mariana-martiniano-de-frança-7284a642/]
Email: donafran@gmail.com

## Estrutura do JSON

```jsx
{
    "_id": " ",
		"nomeReceita": " ",
		"ingredientePrincipal": " ",
		"ingredientes": [
        " ",
        " ",
        " "
    ],
    "preparo": [
        " ",
        " ",
				" "
    ],
		"tipoReceita":" ",
    "receitaSelecionada": " ",
    "observacoes": " ",    
   
}
```

## Acessos

[Untitled](https://www.notion.so/be4674f11e7f41b6ba306036c3d7e467)

```jsx

```

[]()

## Para rodar o projeto

clone

npm install

npm start

npm bcrypt

**Observação**:

Esse projeto está em constante desenvolvimento e aberto para pull request.

Fiquem a vontade.

## Importando no MongoDB

mongoimport --db tanaMesa --collection receitas --file Receita.json --jsonArray