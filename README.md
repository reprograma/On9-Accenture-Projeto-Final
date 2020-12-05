## 🛫🌎 Sobre o Projeto

<h1 align="center">
	<img alt="Project Screenshots" src="/assets/docBanner.png" />
</h1>

<p>O Learn&Share é um projeto que faz jus ao nome, aprender e compartilhar. O projeto visa ser uma plataforma onde você possa ter mentorias gratuitas
sobre oportunidades internacionais, com mentores que já passaram pelo mesmo processo de aplicação e conseguiram uma oportunidade no exterior. Sabemos o quão salgado é o valor de uma mentoria e o quanto as agências não querem que saibamos disso. ou não né? já que é um assunto que atualmente não é tão abordado como o ENEM. Geralmente encontramos algumas informaçõpes sobre essas oportunidades em grupos de telegram, whatsapp, no instagram e até mesmo em alguns dos poucos blogs que abordam o assunto, mas nunca são bem completos como uma mentoria. A partir dai nasceu o Learn&Share, para ajudar e oferecer uma mentoria gratuita e completa para quem não tem condição de pagar por uma e tem esse sonho/objetivo de conseguir algo no exterior. Ma plataforma ser~]ao oferecidas mentorias de graduação, pós graduação, mestrado, ensino médio, trabalho de verão e inverno, intercambio voluntário.
</p>

## Rotas 📜

## GET:/

- Mentor
http://localhost:3000/mentor
```javascript
    {
        "id": 1,
        "mentorName": "Aline",
        "visitedCountry": "USA",
        "mentoringType": "Summer Job",
        "descripition": "Teaching summer job opportunities in the USA",
        "availability": true
    }
```
- Mentorado
http://localhost:3000/mentored
```javascript
    {
        "id": 1,
        "name": "João",
        "destinyCountry": "USA",
        "mentoringType": "Summer Job",
        "concluded": true
    }
```
## POST
- Mentor
http://localhost:3000/mentor/registerMentor
Body necessário:
```javascript
    {
        "mentorName": "Aline",
        "visitedCountry": "USA",
        "mentoringType": "Summer Job",
        "descripition": "Teaching summer job opportunities in the USA",
        "availability": true
    }
```

- Mentorado
http://localhost:3000/mentored/registerMentored
Body necessário:
```javascript
    {
        "name": "João",
        "destinyCountry": "USA",
        "mentoringType": "Summer Job",
        "concluded": true
    }
```

## PUT
- Mentor
http://localhost:3000/mentor/editMentor/:id
Body necessário:
```javascript
    {
        "mentorName": "Aline",
        "visitedCountry": "USA",
        "mentoringType": "Summer Job",
        "descripition": "Teaching summer job opportunities in the USA",
        "availability": true
    }
```

- Mentorado
http://localhost:3000/mentored/editMentored/:id
Body necessário:
```javascript
    {
        "name": "João",
        "destinyCountry": "USA",
        "mentoringType": "Summer Job",
        "concluded": true
    }
```

## PATCH
- Mentor
http://localhost:3000/mentor/updateAvailable/:id
Body necessário:
```javascript
    {
        "availability": true
    }
```

- Mentorado
http://localhost:3000/mentored/updateConcluded/:id
Body necessário:
```javascript
    {
        "concluded": true
    }
```

## DELETE
- Mentor
http://localhost:3000/mentor/:id
Resposta:
```javascript
    {
        "Mentor deleted"
    }
```

- Mentorado
http://localhost:3000/mentored/:id
Resposta:
```javascript
    {
        "Mentored deleted"
    }
```

## 👩‍💻 Iniciando o projeto

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)


Clone o projeto e acesse a pasta

$ git clone https://github.com/aline-pereira/On9-Accenture-Projeto-Final

$ cd LearnShare


### Siga os passos abaixo

Instale as dependências

$ npm i ou npm install

Execute o projeto

$ npm start


Made with ❤ by Aline Santos 💁🏽‍♀️ LinkedIn (https://www.linkedin.com/in/aline-pereira010/)
