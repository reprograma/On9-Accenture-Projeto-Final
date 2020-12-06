# Documentação de API (versão 1.0)

## byHer API
Essa API tem o propósito de listar filmes dirigidos por mulheres, assim facilitando a busca dos mesmos e oferecendo uma plataforma para que diretoras cinematográficas iniciantes possam cadastrar seus filmes para ganhar mais visibilidade.

### Contato:
Linkedin: https://www.linkedin.com/in/vivian-costa-721376200/
email: vivianalessandra_@hotmail.com


##  Rotas
### GET: /
**GET ALL - Para buscar todos os títulos de filmes cadastrados no Banco de Dados:**
http://localhost:5000/movies
 - Se necessário, alterar a porta.



### POST: /cadastro
**POST para adicionar filmes no Banco de Dados:**
http://localhost:5000/movies/cadastro

Body necessário para cadastrar seu filme:

`
{
"title":{ type:  String, required:  true }, 
"director":{ type:  String, required:  true },
"nacionality":{ type:  Array, required:  true },
"year":{ type:  Number, required:  true },
"genre":{ type:  Array, required:  true },
"about":{ type:  String, required:  true },
"atLeastOneFemaleWriter":{ type:  Boolean, required:  true}
}`

 - No campo **"nacionality"**, seguir o padrão: "Brazilian", "Mexican", "Korean", etc.
Se o filme tiver sido produzido em mais de um país, adicionar array.
Ex: ["Canadian", "Korean"]

 - No campo **"genre"**, seguir o padrão: "Drama", "Romance", "Comedy", etc.
Se o filme se encaixar em mais de um gênero, adicionar array.
Ex: ["Horror", "Musical"]

 - No campo **"atLeastOneFemaleWriter"**, se o filme tiver sido escrito por pelo menos uma mulher, digitar: true, se não, digitar: false.

Exemplo:

{
 "title": "Lady Bird",
 "director": "Greta Gerwig",
 "nacionality": "American",
 "year": 2017,
 "genre": ["Drama", "Comedy"]
 "about": "Descrição breve sobre premissa do filme.",
 "atLeastOneFemaleWriter": true
}
  



### GET
**GET BY GENRE - Para buscar filmes por gênero:**
http://localhost:5000/movies/genre?genre=*gênero de preferência*
Exemplo: http://localhost:5000/movies/genre?genre=Comedy

### GET
**GET BY NACIONALITY - Para buscar filmes pela nacionalidade do mesmo:**
http://localhost:5000/movies/nacionality?nacionality=*nacionalidade de preferência*
http://localhost:5000/movies/nacionality?nacionality=Canadian


### GET
**GET BY YEAR - Para buscar filmes pelo ano de lançamento:**
http://localhost:5000/movies/year?year=*ano de preferência*
http://localhost:5000/movies/year?year=2000


## Dependências
### Dependências necessárias para rodar a API:

 - Express;
 - Mongoose;
 - Nodemon.
