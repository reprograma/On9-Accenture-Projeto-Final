### Bem Vindas ao Mulher ao mar

## Sobre o projeto

Assim como na programação, os praticantes de surf são predominantemente homens, a cada dia que passa, mais mulheres se desafiam a adentrar esses espaços que antes nunca eram possíveis pra nós. Encontrei nesse projeto, uma forma de unificar duas paixões que carrego, afim de incentivar mais mulheres a conhecer projetos e vivenciar uma nova experiência em um ambiente seguro.

Em diversas praias, ocorrem os chamados "surfday", projetos onde instrutoras e praticantes do esporte se reunem para surfar juntas, além de outras práticas integrativas como yoga e rodas de debates. Não há restrição quanto ao nível de experiência no mar, basta saber nadar e ter interesse em aprender.

Essa API tem como objetivo informar sobre esses eventos. A usuária pode localiza-los a partir da localização desejada e verificar se as inscrições estão abertas, e, caso seja cadastrada, é possível criar novos eventos, adiá-los ou até mesmo alterar o local da prática.

# Rotas

### GET: /events

- **Buscar todos eventos**

http://localhost:8080/events

Retorno:

```jsx
[
  {
    id: "1",
    eventTitle: "Maraca Surfday",
    state: "Pernambuco",
    beach: "Maracaipe",
    surfDay: "13/12/2020",
    openApply: true,
  },
  {
    id: "2",
    eventTitle: "Paiva Surfday",
    state: "Pernambuco",
    beach: "Paiva",
    surfDay: "06/01/2020",
    openApply: false,
  },
];
```

- **Buscar eventos abertos a inscrição**

http://localhost:8080/events/open

Retorno:

```jsx
{
    "id": "1",
    "eventTitle": "Maraca Surfday",
    "state": "Pernambuco",
    "beach": "Maracaipe",
    "surfDay": "13/12/2020",
    "openApply": true
  }
```

### POST

- **Criar novo evento**

http://localhost:8080/events/create

body necessário:

```jsx
{
    "eventTitle": "",
    "state": "",
    "beach": "",
    "surfDay": "",
 }
```

Retorno:

[201] Created

```jsx
{
"id": "nus1usvei",
"eventTitle": "Ubatuba Surfday",
"state": "Sao Paulo",
"beach": "Ubatuba",
"surfDay": "22/12/2020",
"openApply": true
}
```

- **Criar novo usuário**

http://localhost:8080/users/create

body necessário:

```jsx
{
  "name": "nome",
	"email": "email@email.com",
	"password": "senha"
  }
```

Retorno:

[201] Created

```jsx
{
  "id": "fgspv6vj0",
  "name": "nome",
  "email": "email@email.com",
  "password": "senha"
}
```

### PUT

- Editar localização

http://localhost:8080/events/edit/:id

body necessário:

```jsx
{
    "state": "",
    "beach": "",

 }
```

Retorno:

[200] OK

```jsx
{
  "message": " is updated"
}
```

### PATCH

- Encerrar incrições do evento

http://localhost:8080/events/open/:id

body necessário:

```jsx
{
    "openApply": false

 }
```

Retorno:

[200] OK

```jsx
{
  "message": "_ID_ applies are closed"
}
```

### DELETE

- Deletar evento

http://localhost:8080/events/:id

Retorno:

[200] OK

```jsx
"Evento cancelado";

```

### Para rodar o projeto

1. git clone
2. npm install
3. npm start

### Obrigada!

Linkedin: [https://www.linkedin.com/in/thaisgpisani/](https://www.linkedin.com/in/thaisgpisani/)

E-mail: thaispisani_@hotmail.com
