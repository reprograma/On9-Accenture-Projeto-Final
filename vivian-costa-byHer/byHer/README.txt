# Documentação de API (versão 1.0)

## byHer API
Essa API tem o propósito de listar filmes dirigidos por mulheres, assim facilitando a busca dos mesmos e oferecendo uma plataforma para que diretoras cinematográficas iniciantes possam cadastrar seus filmes para ganhar mais visibilidade.

### Contato:
Linkedin: https://www.linkedin.com/in/vivian-costa-721376200/
email: vivianalessandra_@hotmail.com


##  Rotas
### GET: /
GET ALL - Para buscar todos os títulos de filmes cadastrados no Banco de Dados:
http://localhost:PORT/byHer

*Onde tem "PORT", colocar a porta que está sendo usada.


### POST: /cadastro
POST para adicionar filmes no Banco de Dados:
http://localhost:PORT/byHer/cadastro

Body necessário para cadastrar seu filme:`
{
"title":{ type:  String, required:  true }, 
"director":{ type:  String, required:  true },
"nacionality":{ type:  String, required:  true },
"year":{ type:  Number, required:  true },
"genre":{ type:  String, required:  true },
"about":{ type:  String, required:  true },
"atLeastOneFemaleWriter":{ type:  Boolean, required:  true}
}`

*No campo "nacionality", seguir o padrão: "Brazilian", "Mexican", "Korean", etc.
**No campo "year", seguir o padrão: 2000, 1997, 2015, de colocar SÓ o ano.
***No campo "genre", seguir o padrão: "Drama", "Romance", "Comedy", etc.
****No campo "atLeastOneFemaleWriter", se o filme tiver sido escrito por pelo menos uma mulher, digitar: true, se não, digitar: false.

Exemplo:

{
	"title": "Lady Bird",
  "director": "Greta Gerwig",
  "nacionality": "American",
  "year": 2017,
  "genre": "Drama",
	"about": "Descrição breve sobre premissa do filme.",
	"atLeastOneFemaleWriter": true
}
  



### GET
GET BY GENRE - Para buscar filmes por gênero:


### GET
GET BY NACIONALITY - Para buscar filmes pela nacionalidade do mesmo:


### GET
GET BY YEAR - Para buscar filmes pelo ano de lançamento:
