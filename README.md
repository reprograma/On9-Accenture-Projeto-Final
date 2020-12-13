## Turma On9 (Accenture) - Projeto Final

### Prisma Educação Financeira

A estrutura de um **Prisma** recebe uma iluminação e dissipa em várias outras cores. Assim como um prisma que multiplica algo, o projeto possui o objetivo de democratizar o conhecimento acerca da educação financeira, e empoderar a sociedade, para que possam disseminar o aprendizado e ajudar a instruir os outros ao seu redor sobre as melhores práticas para manejar as suas finanças. Vem com a **Prisma Educação Financeira**! Tome as rédeas da sua vida financeira, sem conflito de interesse e que pode lhe proporcionar mais rentabilidade.

---

### Índice

- [Contexto](#contexto)
- [Formulário](#formulário-de-perguntas)
- [Análise das Respostas](#análise-das-respostas-do-formulário)
- [Matriz CSD](#matriz-csd)
- [Card Sorting](#card-sorting)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Documentação de API (versão 1.0)](#documentação-de-api)
- [Rotas](#rotas)
- [Arquitetura MVC](#arquitetura-mvc)
- [Agradecimentos](#agradecimentos)
- [Contribuições](#contribuições)

---

### Contexto

Busquei em mim algum ponto de dor, alguma necessidade que eu pudesse sanar mediante a realização de um projeto. Após a validação que será explicada aqui, defini que abordaria sobre Educação Financeira. Iniciei uma pesquisa no padrão Double-Diamond, com realização de protótipo e etapa final de codificação.

---

### Formulário de Perguntas

<sub> Perguntas realizadas: </sub>

<img src="https://github.com/Fabicaneyu/On9-Accenture-Projeto-Final/blob/a96bab003cc1fa1a33293d427363c479cfe139a7/fabiola-canedo-prisma-educa%C3%A7%C3%A3o-financeira/imgs/Perguntas_Formulario.PNG" alt="imagem com as perguntas do formulário" width="750" />

---

### Análise das respostas do formulário

<sub> Compilado com as alternativas mais respondidas pelos usuários. Presença maior de uma faixa etária de 30 a 39 anos na amostra, de ambos os sexos, e que referem que possuem um grau de conhecimento 3 em uma escala de 1 a 5 sobre finanças </sub>

<img src="https://github.com/Fabicaneyu/On9-Accenture-Projeto-Final/blob/a96bab003cc1fa1a33293d427363c479cfe139a7/fabiola-canedo-prisma-educa%C3%A7%C3%A3o-financeira/imgs/Respostas_Formulario.PNG" alt="imagem com as respostas do formulário" width="750" />

---

### Matriz CSD

<sub> A 1ª Versão da matriz CSD era composta apenas por cards amarelos. Após a análise das respostas provenientes do formulário realizei uma 2ª versão da matriz. Os cards amarelos representam o que eu pesquisei acerca do tópico, e os cards azuis representam o que eu comprovei mediante a análise das respostas do formulário. </sub>

<img src="https://github.com/Fabicaneyu/On9-Accenture-Projeto-Final/blob/a96bab003cc1fa1a33293d427363c479cfe139a7/fabiola-canedo-prisma-educa%C3%A7%C3%A3o-financeira/imgs/Matriz_CSD.PNG" alt="2ª versão da matriz da matriz CSD" width="750" />

---

### Card Sorting

<sub> Aqui nesta etapa, realizei um agrupamento em 3 grandes tópicos: O que descobri acerca de dados pessoais, sobre temas relacionados a atualidades, e finanças. </sub>

<img src="https://github.com/Fabicaneyu/On9-Accenture-Projeto-Final/blob/a96bab003cc1fa1a33293d427363c479cfe139a7/fabiola-canedo-prisma-educa%C3%A7%C3%A3o-financeira/imgs/Card_Sorting.PNG" alt="respostas da pesquisa de card sorting" width="750" />

---

## Tecnologias Utilizadas

<p align="left">
  <a>
    <a href="https://git-scm.com/"><img alt="Git version" src="https://img.shields.io/badge/Git/GitHub-blueviolet">
    <a href="https://nodejs.org/pt-br/"><img alt="Node version" src="https://img.shields.io/badge/NodeJS-blueviolet">
    <a href="https://www.mongodb.com/cloud/atlas"><img alt="Node version" src="https://img.shields.io/badge/MongoDB%20Atlas-blueviolet">
    <a href="https://herokuapp.com/"><img alt="Deploy on Heroku" src="https://img.shields.io/badge/Heroku-blueviolet">
    <br/>
    <a href="https://www.npmjs.com/"><img alt="npm version" src="https://img.shields.io/badge/npm-6.14.6-blueviolet">
    <a href="https://expressjs.com/pt-br/"><img alt="Express version" src="https://img.shields.io/badge/express-4.17.1-blueviolet">
    <a href="https://mongoosejs.com/"><img alt="Mongoose version" src="https://img.shields.io/badge/mongoose-5.10.17-blueviolet">
    <a href="https://www.npmjs.com/package/dotenv-safe"><img alt="Dotenv-safe version" src="https://img.shields.io/badge/dotenv-8.2.0-blueviolet">
    <a href="https://www.npmjs.com/package/bcryptjs"><img alt="Bcrypt version" src="https://img.shields.io/badge/bcrypt-5.0.0-blueviolet">
    <a href="https://www.npmjs.com/package/jsonwebtoken"><img alt="Jsonwebtoken version" src="https://img.shields.io/badge/jsonwebtoken-8.5.1-blueviolet">
    <a href="https://www.npmjs.com/package/nodemon"><img alt="Nodemon version" src="https://img.shields.io/badge/nodemon-2.0.6-blueviolet">
  </a> 
</p>

---

## Documentação de API (versão 1.0)

### Rotas

Agora na segunda fase do projeto temos os seguintes requisitos:

- [x] _Get_

  - [x] status code: 200 (ok)

    - [x] "/" Retorna index com apresentação

      {

      mensagem: bem vinda a lista de todos os materiais sobre finanças

      }

  - [x] "/financas" retorna todos os dados do banco de dados sobre finanças
  - [x] "/financas/contacorrente" Retorna as finanças do tipo conta corrente

- [x] _Post_
  - [x] "/financas" cria uma nova modalidade de finanças
  - [x] "" cria um novo material de investimento
- [x] _Put_
  - [x] ""
  - [x] ""
- [x] _Delete_
  - [x] ""
  - [x] ""

---

### Arquitetura MVC

```bash
\--📂 NOME-DO-SEU-SERVIDOR
		 |   .gitignore
		 |   package-lock.json
		 |   package.json
	   |   **server.js**
			\--📂 node_modules
			\--📂src
			    |   **app.js**
			    |
			    📂---controller
			    |       **NOMEController.js**
			    |
			    📂---model
			    |       **NOMESchema.js
					|       Repository.js**
			    |
			    📂---routes
			            **NOMERoute.js
									index.js**
```

---

## Agradecimentos

Minha profunda gratidão a minha amada Reprograma <3
Accenture, Dé, Robs, professoras, monitoras, minhas maravilhosas colegas de turma,
agradeço por todo apoio e conhecimento transmitido, cada risada dentro de sala de aula, cada código que deu errado e que juntas conseguimos resolver! Realmente uma experiência única e marcante em minha vida. Vamos juntas reprogramar o mundo :D

---

## Contribuições

Alô pessoas desenvolvedoras, aceito contribuições ao meu projeto, abra seu PR e faça do github um mundo mais open source.
