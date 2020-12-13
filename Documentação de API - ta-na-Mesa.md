<b>Documentação de API (versão 1.0)</b>

<b>Sobre a API ta-na-Mesa</b>

Esta API tem como propósito ser uma coleção pessoal de
receitas, onde o usuário pode visualizar suas receitas, editar, adicionar,
fazer buscas por campos específicas e eliminar receitas.

<b>Estrutura do JSON</b>


    {
        "id": " string ",
        "nomeReceita":" string ",
        "ingredientePrincipal":"string ",
        "ingredientes":[ "array"],
        "preparo": ["array "],
        "tipoReceita":"string ",
        "receitaSelecionada":"string",
        "observacoes": "string"
    }



<b>Para rodar o projeto</b>

- clone
- npm install
- npm bcrypt
- npm express

<b>Observações</b>:
Esse projeto está em constante desenvolvimento e aberto para pull request. Fiquem a vontade!

<b>Rota Heroku</b>

- https://ta-na-mesa.herokuapp.com/

<b>Acessos Receita</b>
 
| <b>Métodos</b> | <b>Rotas</b> | <b>Descrição</b> |
|----------------|--------------|------------------|
| GET | .../receita | Busca todas as receitas |
| GET | .../receita/id | Busca receita por Id |
| GET | .../receita/titulo | Busca por nome da receita |
| GET | .../receita/ingredienteprincipal | Busca por ingrediente principal |
| GET | .../receita/tipo | Busca receita por tipo de comida |
| GET | .../receita/receitaselecionada | Mostra as receitas selecionadas |
| GET | .../receita/receitanaoselecionada | Mostra ar receitas que não foram selecionadas |
| GET | .../receita/ordemalfabetica |Ordena as receitas em ordem alfabética |
| GET | .../receita/listarapida |Mostra uma lista rápida com onome da receita, ingredientes e preparo|
| GET | .../receita/listacompras |Faz uma lista com os ingredientes das receitas que foram selecionadas |
| POST | .../receita/cadastro | Cadastra uma nova receita |
| PUT | .../editar/id | Edita todas os campus da receita |
| PATCH | .../selecionarreceita/id | Seleciona uma receita |
| PATCH | .../editar/ingredientes/id |Edita o campo ingredientes da receita |
| PATCH | .../editar/titulo/id | Edita o campo nome da receita |
| PATCH | .../editar/ingredienteprincipal |Edita o campo ingrediente principal da receita |
| PATCH | .../editar/tiporeceita/id | Edita o campo tipo de receita |
| PATCH | .../editar/preparo/id | Edita o campo preparo da receita |
| PATCH | .../editar/observacoes/id | Edita o campo observações da receita |
| DELETE | .../receita/id | Apaga uma receita |
| POST/usuário | .../session/register | Cadastrar um usuário |
| POST/usuário | .../session | Fazer login do usuário |


