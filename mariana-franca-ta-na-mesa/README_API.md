# Documentação de API (versão 1.0)

# Sobre a API ta-na-Mesa

Esta API tem como propósito ser uma coleção pessoal de receitas, onde o usuário pode visualizar suas receitas, editar, adicionar, fazer buscas por campos específicas e eliminar receitas.

# Contatos

Linkedin: https://www.linkedin.com/in/mariana-martiniano-de-fran%C3%A7a-7284a642/
Email:  donafran@gmail.com

## Estrutura do JSON

```jsx
{
    "_id": " string ",
	"nomeReceita": " string ",
	"ingredientePrincipal": "string ",
	"ingredientes": [ "array" ],
    "preparo": [ "array " ],
	"tipoReceita":"string ",
    "receitaSelecionada": "string ",
    "observacoes": "string ",    
   
}

```
## Para rodar o projeto

clone
npm install
npm start
npm bcrypt


> **Nota:** - Esse projeto está em constante desenvolvimento e aberto para pull request. Fiquem a vontade!


## Acessos


|   MÉTODOS             |ROTAS                         |DESCRIÇÃO                        |
|----------------|-------------------------------|-----------------------------|
|GET| .../receita            |buscar todas as receita            
 GET |.../receita/:id                   |buscar receita pelo id          |            |
|GET        |...receita/titulo|buscar receita por nome|
|GET| .../receita/ingrediente            |buscar receita pelo ingrediente principal            
 GET |.../receita/tipo                 |buscar receita pelo tipo de comida      |           |
|POST        |.../receita/cadastro |cadastrar uma receita|
|PUT| .../receita/editar/:id           |editar uma receita inteira           
 PATCH |.../receita/editar/observacoes/:id                 |editar campo observações        |            |
|PATCH       |...receita/editar/ingredienteprincipal/:id|editar campo ingrediente principal|
|PATCH| .../receita/editar/titulo/:id            |editar campo nome da receita            
 PATCH|.../receita/editar/ingredientes/:id                   |editar campo ingredientes         |            |
|PATCH        |.../receita/editar/preparo/:id|editar campo preparo|
|PATCH| .../receita/editar/tipo/:id           |editar campo tipo de comida         
|DELETE        |`.../receite/:id|deletar uma receita



## Importando no MongoDB

mongoimport --db tanaMesa --collection receitas --file Receita.json --jsonArray



