## 🛫🌎 Sobre o Projeto

<h1 align="center">
	<img alt="Project Screenshots" src="https://uploaddeimagens.com.br/images/002/991/809/full/docBanner.png?1607199592" />
</h1>

<p>O Learn&Share é um projeto que faz jus ao nome, aprender e compartilhar. O projeto visa ser uma plataforma onde você possa ter mentorias gratuitas
sobre oportunidades internacionais, com mentores que já passaram pelo mesmo processo de aplicação e conseguiram uma oportunidade no exterior. Sabemos o quão salgado é o valor de uma mentoria e o quanto as agências não querem que saibamos disso, ou não né? Já que é um assunto que atualmente não é tão abordado como o ENEM. Geralmente encontramos algumas informaçõpes sobre essas oportunidades em grupos de telegram, whatsapp, no instagram e até mesmo em alguns dos poucos blogs que abordam o assunto, mas nunca são bem completos como uma mentoria. A partir dai nasceu o Learn&Share, para ajudar e oferecer uma mentoria gratuita e completa para quem não tem condição de pagar por uma e tem esse sonho/objetivo de conseguir algo no exterior. Na plataforma serão oferecidas mentorias de graduação, pós graduação, mestrado, ensino médio, trabalho de verão e inverno, intercambio voluntário.
</p>

## ROTAS MENTOR 📜

## POST
- A senha precisa ter no mínimo 8 caracteres
- Ele retorna o cadastro do mentor com a senha hasheada, Id gerado e um array que irá conter os mentorados associados a ele.
- É importante que primeiro seja feito o cadastro do mentor, pois no momento de realizar o cadastro do mentorado deverá passar o ID do mentor que o mentorado deseja. Com o cadastro do mentorado feito automaticamente seu ID irá se relacionar com o cadastro do mentor.
- Rota https://learn-and-share.herokuapp.com/mentor/register
- Body necessário:
```javascript
  {
    "email": "ana@gmail.com",
    "password": "123456789",
    "mentorName": "Ana Beatriz",
    "visitedCountry": "EUA",
    "mentoringType": "Graduação",
    "descripition": "Ensino como aplicar para oportunidades de estágio de verão nos EUA.",
    "available": true
  }
```
- Retorno
```javascript
{
  "mentored": [],
  "available": true,
  "_id": "5fd4e0e4d013080017e81bca",
  "email": "ana@gmail.com",
  "password": "$2b$10$eMilQPwI2G8ZEDQ6ymMVyOVNe1bSJv8tYE6XkSuBlnAG4daM9Of7i",
  "mentorName": "Ana Beatriz",
  "visitedCountry": "EUA",
  "mentoringType": "Graduação",
  "descripition": "Ensino como aplicar para oportunidades de estágio de verão nos EUA.",
  "createdAt": "2020-12-12T15:25:24.497Z",
  "updatedAt": "2020-12-12T15:25:24.497Z",
  "__v": 0
}
```
- Ao tentar criar uma conta com o mesmo e-mail um erro é retornado
```javascript
{
  "errors": [
    "Já existe uma conta com esse e-mail"
  ]
}
```

## GET:/
- Rota https://learn-and-share.herokuapp.com/mentor
```javascript
  {
    "mentored": [],
    "available": true,
    "_id": "5fd3da2e2ae0c20d6879c710",
    "email": "matheus@gmail.com",
    "password": "$2b$10$wLfKoGlHysLTKMXGlp17Me..1Bw3PhxKcg2YbPgatpQ72rgk.wOLe",
    "mentorName": "Matheus",
    "visitedCountry": "EUA",
    "mentoringType": "Graduação",
    "descripition": "Ensino como aplicar para oportunidades de graduação nos EUA para bolsas fulbright",
    "createdAt": "2020-12-11T20:44:31.050Z",
    "updatedAt": "2020-12-11T20:44:31.050Z",
    "__v": 0
  }
```
- Retornor após efetuar cadastro de um mentorado e relacionar ele com o mentor.
```javascript
  {
    "mentored": [
      "5fd4ebadd013080017e81bcc"
    ],
    "available": false,
    "_id": "5fd41c0b461db70017508e5c",
    "email": "joao@gmail.com",
    "password": "joao123456",
    "mentorName": "João",
    "visitedCountry": "Espanha",
    "mentoringType": "Ensino médio",
    "descripition": "Ensino como aplicar para oportunidades de ensino médio na Espanha",
    "createdAt": "2020-12-12T01:25:31.894Z",
    "updatedAt": "2020-12-12T16:11:25.198Z",
    "__v": 0
  }
```

# GET por país visitado
- Rota https://learn-and-share.herokuapp.com/mentor/visitedCountry?visitedCountry=EUA

# GET por disponibilidade
- Rota http://localhost:8080/mentor/available?available=true
- Ao passar uma rota incorreta o retorno será uma mensagem de erro
```javascript
{
  "error": "Falha na pesquisa de disponibilidade do mentor."
}
```
# GET por tipo de mentoria
- Rota https://learn-and-share.herokuapp.com/mentor/mentoringType?mentoringType=Graduação

## PUT
- Rota https://learn-and-share.herokuapp.com/mentor/edit/:id
- Body necessário:
```javascript
{
	"email": "joao@gmail.com",
	"password": "joao123456",
	"mentorName": "João",
  "visitedCountry": "Espanha",
  "mentoringType": "Ensino médio",
  "descripition": "Ensino como aplicar para oportunidades de ensino médio na Espanha.",
	"available": false
}
```
- Mensagem de sucesso retornada:
```javascript
{
  "message": "Cadastro de ID (id mentor) atualizado com sucesso!"
}
```
- Caso o ID inserido não seja válido aparece mensagem de erro:
```javascript
{
  "message": "O ID não é válido"
}
```

## PATCH
- Atualiza o campo de disponibilidade do mentor.
- Rota https://learn-and-share.herokuapp.com/mentor/update/:id
- Body necessário:
```javascript
  {
    "available": true
  }
```
Retorno: 
```javascript
{
  "message": "O mentor de ID (id mentor) foi atualizado com sucesso!."
}
```

## DELETE
- Rota https://learn-and-share.herokuapp.com/mentor/:id
- Resultado:
```javascript
{
  "message": "Cadastro excluido com sucesso"
}
```
- Caso o Id inserido não seja válido retorna:
```javascript
{
  "message": "O ID inserido é inválido"
}
```

## ROTAS MENTORADO 📜

## POST
- A senha precisa ter no mínimo 8 caracteres
- Ele retorna o cadastro do mentorado com a senha hasheada, Id gerado e um array que irá conter os mentores associados a ele.
- Ao realizar o cadastro do mentorado é necessário passar o ID do mentor que ele deseja ter a mentoria no fim da rota, para relacionar ambos, após isso o mentor também será atualizado e o ID do mentorado será inserido em seus dados de cadastro.
- Rota https://learn-and-share.herokuapp.com/mentored/register/:idMentor
- Body necessário:
```javascript
  {
	"email": "fernando@gmail.com",
	"password": "123456789",
	"mentoredName": "Fernando",
  "destinyCountry": "Espanha",
  "mentoringType": "Ensino médio",
	"concluded": false
  }
```
- Retorno
"Novo mentorado cadastrado com sucesso"

- Ao tentar criar uma conta com o mesmo e-mail um erro é retornado
```javascript
{
  "errors": [
    "Já existe uma conta com esse e-mail"
  ]
}
```

## GET:/
- No retorno vem os dados de cadastro do mentorado e o Id do mentor que ele escolheu para a mentoria
- Rota https://learn-and-share.herokuapp.com/mentored
```javascript
  {
    "mentor": [
      "5fd41c0b461db70017508e5c"
    ],
    "concluded": false,
    "_id": "5fd4ebadd013080017e81bcc",
    "email": "fernando@gmail.com",
    "password": "$2b$10$NhHVbFU2PwRG1CUk9i.UuuMAYUCeWM1PGnH6nB9sUUkMK0aq2iK1S",
    "mentoredName": "Fernando",
    "destinyCountry": "Espanha",
    "mentoringType": "Ensino médio",
    "createdAt": "2020-12-12T16:11:25.178Z",
    "updatedAt": "2020-12-12T16:11:25.189Z",
    "__v": 0
  }
```

## PUT
- Rota https://learn-and-share.herokuapp.com/mentored/edit/:id
- Body necessário:
```javascript
  {
	"email": "luis@gmail.com",
	"password": "123456789",
	"mentoredName": "Luis Augusto",
  "destinyCountry": "EUA",
  "mentoringType": "Graduação",
	"concluded": true
  }
```
- Mensagem de sucesso retornada:
```javascript
{
  "message": "Edição no ID 5fd41da9461db70017508e5e editado com sucesso."
}
```
- Caso o ID inserido não seja válido aparece mensagem de erro:
```javascript
{
  "message": "O ID não é válido"
}
```

## PATCH
- Atualiza o campo de disponibilidade do mentor.
- Rota https://learn-and-share.herokuapp.com/mentored/update/:id
- Body necessário:
```javascript
  {
    "concluded": true
  }
```
Retorno: 
```javascript
{
  "message": "O campo concluido do mentorado de ID (id mentorado) foi atualizado com sucesso!"
}
```

## DELETE
- Rota https://learn-and-share.herokuapp.com/mentor/:id
- Resultado:
```javascript
{
  "message": "Cadastro excluido com sucesso"
}
```
- Caso o Id inserido não seja válido retorna:
```javascript
{
  "message": "O ID inserido é inválido"
}
```

## 👩‍💻 Iniciando o projeto

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)


Clone o projeto e acesse a pasta

$ git clone https://github.com/aline-pereira/On9-Accenture-Projeto-Final/tree/aline-santos



### Siga os passos abaixo

Instale as dependências

$ npm i ou npm install

Execute o projeto

$ npm start

### Link do heroku:
https://learn-and-share.herokuapp.com/

Made with ❤ by Aline Santos 💁🏽‍♀️ LinkedIn (https://www.linkedin.com/in/aline-pereira010/)
