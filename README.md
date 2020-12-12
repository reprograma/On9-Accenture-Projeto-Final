### Sejam todos bem vindes!

## Descrição do Projeto

Em nosso país, muitos animais são abandonados diariamente, tamanho abandono que não tem um número exato . Com gatos, a situação ainda é pior, pois a fêmea pode ter de 1 a 6 filhotes por parto, e pode ter até 3 ninhadas ao ano.

Com isto, algumas pessoas disponibilizam seus lares para abrigo temporário para gatos que estejam em situação de risco, e estas pessoas utilizam redes sociais que muitas vezes, dispersam este tipo de informação que tanto poderia ajudar um gatinho. 

Pensando nisso, desenvolvi uma API que possibilita a estas pessoas cadastrarem seus lares e ter  acesso as informações de gatos, também cadastrados por outros usuários, que tenham conhecimento de algum felino vulnerável. 

Os usuários que cadastram um gato, também terá acesso as informações de lares disponíveis para possível negociação de abrigo.

## Rota (Index)

### GET

- Exibe informação de boas vindas e nome do projeto

[https://abrigue-um-miau.herokuapp.com/](https://abrigue-um-miau.herokuapp.com/)

## Rotas (Lar Temporário)

### POST

- Cadastro um novo lar temporário:

[https://abrigue-um-miau.herokuapp.com/home/new](https://abrigue-um-miau.herokuapp.com/home/new)

Como é o body:

```jsx
{
	"name": "type: string",
	"email": "type: string",
	"password": "type: string",
	"contact": "type: number",
	"city": "type: string",
	"neighborhood": "type: string",
	"homeDescription": "type: string",
	"available": {"type: boolean", "default": true}
}

```

Resposta (200) status de sucesso

```jsx
{
	"available": true,
	"name": "Nome Sobrenone",
	"email": "email@email.com",
	"password": "password",
	"contact": "000000000",
	"city": "Cidade",
	"neighborhood": "Bairro",
	"homeDescription": "Apê telado, sem rota de fuga",
	"favoriteCats": []
}
```

Resposta (400) status de erro

```jsx
{
	"error": "Não foi possível cadastrar."
}
```

### POST

- Insere no campo "favoriteCats" o ID de um gato favoritado através do ID do usuário que está oferecendo um lar:

[https://abrigue-um-miau.herokuapp.com/home/favorite/5fd4e9acccaaa600245f98a6](https://abrigue-um-miau.herokuapp.com/home/favorite/5fd4e9acccaaa600245f98a6)

Como é o body:

```jsx
{
	"favoriteCats": "5fcd07993e62460a8457be16"
}
```

Resposta(200) status sucesso:

```jsx
{
	"message": "Miau favoritado!"
}
```

Resposta (400) status erro:

```jsx
{
	"error": "Não foi possível favoritar."
}
```

### GET

Estas rotas GET irão retornar as informações dos gatos, pois não é de interesse que um usuário que ofereça um lar tenha acesso a outro usuário ofertante:

- Realiza busca de todos os gatos cadastrados que estão disponíveis:

[https://abrigue-um-miau.herokuapp.com/home/all](https://abrigue-um-miau.herokuapp.com/home/all)

- Realiza busca de gatos por cidade através de query. Ex: São+Paulo:

[https://abrigue-um-miau.herokuapp.com/home/by-city?city=São+Paulo](https://abrigue-um-miau.herokuapp.com/home/by-city?city=S%C3%A3o+Paulo)

- Realiza busca de gatos por bairro através de query. Ex: Cachoeirinha :

[https://abrigue-um-miau.herokuapp.com/home/by-district?neighborhood=Cachoeirinha](https://abrigue-um-miau.herokuapp.com/home/by-district?neighborhood=Cachoeirinha)

### GET

- Mostra ao usuário as informações dos gatos que foram favoritados por ele através de seu ID:

[https://abrigue-um-miau.herokuapp.com/home/favorites/5fd4e9acccaaa600245f98a6](https://abrigue-um-miau.herokuapp.com/home/favorites/5fd4e9acccaaa600245f98a6)

Resposta (200) status sucesso:

```jsx
{
    "user": {
        "id": "5fd23eeb07d27800e81a53af"
    },
    "favoriteCats": [
        {
            "available": true,
            "_id": "5fd2a57aa29adc3bbc96de0a",
            "responsible": "Name",
            "contact": Number,
            "city": "city",
            "neighborhood": "neighborhood",
            "nicknameCat": "Leo"
        }
    ]
}
```

Resposta (400) status erro:

```jsx
{
	"error": "Não foi encontrado um miau favorito."
}
```

### PUT

- Atualiza todo cadastro do usuário de lar temporário utilizando o ID:

[https://abrigue-um-miau.herokuapp.com/home/update/5fd282d87e6a950fd8d4e31e](https://abrigue-um-miau.herokuapp.com/home/update/5fd282d87e6a950fd8d4e31e)

Como é o body:

```jsx
{
	"name": "Nome Sobrenone",
	"email": "email@email.com",
	"password": "password",
	"contact": "000000000",
	"city": "Cidade",
	"neighborhood": "Bairro",
	"homeDescription": "Apê telado, sem rota de fuga",
	"available": true
}
```

Resposta (200) status de sucesso:

```jsx
{
	"message": "Cadastro atualizado."
}
```

Reposta (400) status de erro:

```jsx
{
    "error": "Não foi possível atualizar cadastro"
}
```

### PATCH

- Atualiza apenas o campo de disponibilidade do lar temporário utilizando o ID:

[https://abrigue-um-miau.herokuapp.com/home/available/5fd2bc063269dd14e0dd2ede](https://abrigue-um-miau.herokuapp.com/home/available/5fd2bc063269dd14e0dd2ede)

Como é o body:

```jsx
{
    "available": false
}
```

Resposta (200) status de sucesso:

```jsx
{
    "message": "Atualizado com sucesso."
}
```

Resposta (400) status de erro:

```jsx
{
    "error": "Não foi possível atualizar."
}
```

### DELETE

- Exclui o cadastro do lar temporário utilizando o ID:

[https://abrigue-um-miau.herokuapp.com/home/delete/:id](https://abrigue-um-miau.herokuapp.com/home/delete/:id)

## Rotas (Gatos)

### POST

- Cadastra um novo gato contendo as informações dele(a) e também da pessoa que tem o conhecimento do felino:

[https://abrigue-um-miau.herokuapp.com/cat/new-cat](https://abrigue-um-miau.herokuapp.com/cat/new-cat)

Como é o body:

```jsx
{
    "responsible": "type: string",
    "email": "type: string",
    "contact": "type: number",
    "password": "type: string",
    "city": "type: string",
    "neighborhood": "type: string",
    "nicknameCat": "type: string",
    "aboutTheMiau": "type: string",
    "avaiable": {"type": "boolean", "default": true}
}
```

Resposta (200) status sucesso:

```jsx
{

    "responsible": "Nome",
    "email": "email@email.com",
    "contact": 11010111010,
    "password": "password",
    "city": "Cidade",
    "neighborhood": "Bairro",
    "nicknameCat": "Apelido gato",
    "aboutTheMiau": "Fêmea, adulta e está prestes a parir. Necessita de um abrigo.",
    "avaiable": true

}
```

Resposta (400) status erro:

```jsx
{
   "error": "Erro ao cadastrar."
}
```

### GET

Assim como as rotas do lar temporário, as rotas GET de usuários que cadastrarão os gatos, mostrará apenas usuários que cadastraram um lar para abrigo:

- Busca todos os lares temporários disponíveis:

[https://abrigue-um-miau.herokuapp.com/cat/all-homes](https://abrigue-um-miau.herokuapp.com/cat/all-homes)

- Busca todos os lares temporários por cidade através de query. Ex: São+Paulo:

[https://abrigue-um-miau.herokuapp.com/cat/by-city?city=São+Paulo](https://abrigue-um-miau.herokuapp.com/cat/by-city?city=S%C3%A3o+Paulo)

- Busca todos os lares temporários por bairro através de query. Ex: Centro:

[https://abrigue-um-miau.herokuapp.com/cat/by-district?neighborhood=Centro](https://abrigue-um-miau.herokuapp.com/cat/by-district?neighborhood=Centro)

### PUT

- Atualiza todo o cadastro do usuário que realizou o cadastro do felino utilizando o ID:

[https://abrigue-um-miau.herokuapp.com/cat/update-registration/5fd2a57aa29adc3bbc96de0a](https://abrigue-um-miau.herokuapp.com/cat/update-registration/5fd2a57aa29adc3bbc96de0a)

Estrutura do body:

```jsx
{
    "responsible": "Nome",
    "email": "email@email.com",
    "contact": 11010111010,
    "password": "222288966",
    "city": "Cidade",
    "neighborhood": "Bairro",
    "nicknameCat": "Mel",
    "aboutTheCat": "Amarelo, filhote e já está na rua por um bom tempo",
    "avaiable": true

}
```

Resposta (200) status de sucesso:

```jsx
{
    "message": "Cadastro atualizado."
}
```

Resposta (400) status de erro:

```jsx
{
   "error": "Erro ao atualizar."
}
```

### PATCH

- Atualiza apenas o campo de disponibilidade do felino utilizando o ID:

[https://abrigue-um-miau.herokuapp.com/cat/update-available/5fd4fdaf2b810e00249de423](https://abrigue-um-miau.herokuapp.com/cat/update-available/5fd4fdaf2b810e00249de423)

Estrutura do body:

```jsx
{
    "available": false
}
```

Resposta (200) status de sucesso:

```jsx
{
    "message": "Atualizado com sucesso."
}
```

Resposta (400) status de erro:

```jsx
{
	"error": "Não foi possível atualizar."
}
```

### DELETE

- Exclui o cadastro do usuário juntamente com as informações do gato utilizando ID:

[https://abrigue-um-miau.herokuapp.com/cat/delete/:id](https://abrigue-um-miau.herokuapp.com/cat/delete/:id)

## Considerações

Comunidade, este projeto está em fase inicial e em estará em constante mudanças. Fiquem a vontade para contribuírem utilizando PR's ou abrindo issue's.

## Como faço para rodar este projeto?

- Faça clone ou fork do repositório
- No terminal, use o comando npm install para baixar as dependências
- Em seguida, use o comando npm start e o projeto irá rodar

# Obrigada por chegarem até aqui! 👩‍💻😺