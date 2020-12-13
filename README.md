### Bem Vindas ao Mulher ao mar

## Sobre o projeto

Assim como na programação, os praticantes de surf são predominantemente homens. Porém, a cada dia que passa, mais mulheres se desafiam a adentrar esses espaços que antes não eram possíveis pra nós. Encontrei neste projeto, uma forma de unificar duas paixões que carrego, afim de incentivar mais mulheres a conhecer projetos e vivenciar uma nova experiência em um ambiente seguro.

Em diversas praias, ocorrem os chamados "surfdays", projetos onde instrutoras e praticantes do esporte se reunem para surfar juntas, além de outras práticas integrativas como yoga e rodas de debates. Não há restrição quanto ao nível de experiência no mar, basta saber nadar e ter interesse em aprender.

Essa API tem como objetivo informar sobre esses eventos. A usuária pode localizá-los a partir da localização desejada e verificar se as inscrições estão abertas, e, caso seja cadastrada, é possível criar novos eventos, adiá-los ou até mesmo alterar o local da prática.

# Rotas

### GET: /events

- **Buscar todos eventos**

https://mulher-ao-mar.herokuapp.com/events

Retorno:

```jsx
[
  {
    id: "_id_",
    eventTitle: "titulo evento",
    state: "estado",
    beach: "praia",
    surfDay: "aa/mm/aaaa",
    openApply: boolean,
  },
  {
    id: "_id_",
    eventTitle: "titulo evento",
    state: "estado",
    beach: "praia",
    surfDay: "aa/mm/aaaa",
    openApply: boolean,
  },
];
```

- **Buscar eventos abertos a inscrição**

https://mulher-ao-mar.herokuapp.com/events/open

Retorno:

```jsx
{
     id: "_id_",
    eventTitle: "titulo evento",
    state: "estado",
    beach: "praia",
    surfDay: "aa/mm/aaaa",
    "openApply": true
  }
```

### POST

- **Criar novo evento**

https://mulher-ao-mar.herokuapp.com/events/create

body necessário:

```jsx
{
    "eventTitle": "titulo evento",
    "state": "estado",
    "beach": "praia",
    "surfDay": "dd/mm/aaaa",
 }
```

Retorno:

[201] Created

```jsx
{
  "message": "Event created successfully"
}
```

- **Criar novo usuário**

https://mulher-ao-mar.herokuapp.com/users/create

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
  "password": "token"
}
```

### PUT

- Editar localização

https://mulher-ao-mar.herokuapp.com/events/edit/:id

body necessário:

```jsx
{
  "eventTitle": "titulo evento",
  "state": "estado",
  "beach": "praia",
  "surfDay": "dd/mm/aaaa"}
```

Retorno:

[200] OK

```jsx
{
  "message": " _id_ is updated"
}
```

### PATCH

- Encerrar incrições do evento

https://mulher-ao-mar.herokuapp.com/events/open/:id

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

https://mulher-ao-mar.herokuapp.com/events/:id

Retorno:

[200] OK

```jsx
"Evento canceled";

```

### Para rodar o projeto

1. git clone
2. npm install
3. npm start

### Obrigada!

Linkedin: [https://www.linkedin.com/in/thaisgpisani/](https://www.linkedin.com/in/thaisgpisani/)

E-mail: thaispisani_@hotmail.com
