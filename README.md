### Sejam todos bem vindes!

## Descrição do Projeto

Em nosso país, muitos animais são abandonados diariamente, tamanho abandono que não tem um número exato . Com gatos, a situação ainda é pior, pois a fêmea pode ter de 1 a 6 filhotes por parto, e pode ter até 3 ninhadas ao ano.

Com isto, algumas pessoas disponibilizam seus lares para abrigo temporário para gatos que estejam em situação de risco, e estas pessoas utilizam redes sociais que muitas vezes, dispersam este tipo de informação que tanto poderia ajudar um gatinho. Pensando nisso, desenvolvi uma API que possibilita a estas pessoas se cadastrarem para localizar estes animais, através de usuários que cadastram estes felinos em estado de vulnerabilidade, seja por estarem prenhas, machucado ou mesmo para ter uma companhia até encontrar um lar definitivo.

## Rota (Index)

### GET

- Exibe informação de boas vindas e nome do projeto

[http://localhost:5000/index](http://localhost:5000/index)

## Rotas (Lar Temporário)

### POST

- Cadastro um novo lar temporário

[http://localhost:5000/home/new](http://localhost:5000/home/new)

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

Resposta [200] status de sucesso

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

Resposta [400] status de erro

```jsx
{
	"error": "Não foi possível cadastrar."
}
```

### GET

Todos as rotas GET irão retornar as informações dos gatos, pois não é de interesse que um usuário que ofereça um lar tenha acesso a outro usuário de lar.

- Realiza busca de todos os gatos cadastrados:

[http://localhost:5000/home/all](http://localhost:5000/home/all)

- Realiza busca de gatos por cidade:

[http://localhost:5000/home/bycity](http://localhost:5000/home/bycity)

- Realiza busca de gatos por bairro:

[http://localhost:5000/home/bydistrict](http://localhost:5000/home/bydistrict)

### PUT

- Atualiza todo cadastro do usuário de lar temporário utilizando o ID:

[http://localhost:5000/home/update/:id](http://localhost:5000/home/update/:id)

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

Resposta [200] status de sucesso:

```jsx
{
	"message": "Cadastro atualizado."
}
```

Reposta [400] status de erro:

```jsx
{
    "error": "Não foi possível atualizar cadastro"
}
```

### PATCH

- Atualiza apenas o campo de disponibilidade do lar temporário utilizando o ID:

[http://localhost:5000/home/available/:id](http://localhost:5000/home/available/:id)

Como é o body:

```jsx
{
    "available": false
}
```

Resposta [200] status de sucesso:

```jsx
{
    "message": "Atualizado com sucesso."
}
```

Resposta [400] status de erro:

```jsx
{
    "error": "Não foi possível atualizar."
}
```

### DELETE

- Exclui o cadastro do lar temporário utilizando o ID:

[http://localhost:5000/home/delete/:id](http://localhost:5000/home/delete/:id)

## Rotas (Gatos)

### POST

- Cadastra um novo gato contendo as informações dele(a) e também da pessoa que tem o conhecimento do felino

[http://localhost:5000/cat/newcat](http://localhost:5000/cat/newcat)

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
    "characters": [{"color": "string", "adult": "boolean", "puppy": "boolean", "conditions": "string"}],
    "avaiable": {"type": "boolean", "default": true}
}
```

Resposta [200] status sucesso:

```jsx
{

    "responsible": "Nome",
    "email": "email@email.com",
    "contact": 11010111010,
    "password": "password",
    "city": "Cidade",
    "neighborhood": "Bairro",
    "nicknameCat": "Apelido gato",
    "characters": [{"color": "cor", "adult": "true", "puppy": "false", "conditions": "Felino machucado"}],
    "avaiable": true

}
```

Resposta [400] status erro:

```jsx
{
   "error": "Erro ao cadastrar."
}
```

### GET

Assim como as rotas do lar temporário, as rotas GET de usuários que cadastrarão os gatos, mostrará apenas usuários que cadastraram um lar para abrigo.

- Busca todos os lares temporários disponíveis:

[http://localhost:5000/cat/allhomes](http://localhost:5000/cat/allhomes)

- Busca todos os lares temporários por cidade:

[http://localhost:5000/cat/bycity](http://localhost:5000/cat/bycity)

- Busca todos os lares temporários por bairro:

[http://localhost:5000/cat/bydistrict](http://localhost:5000/cat/bydistrict)

### PUT

- Atualiza todo o cadastro do usuário que realizou o cadastro do felino utilizando o ID

[http://localhost:5000/cat/update/:id](http://localhost:5000/cat/update/:id)

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
    "characters": [{"color": "Amarelo", "adult": "true", "puppy": "false", "conditions": "Felino machucado"}],
    "avaiable": true

}
```

Resposta [200] status de sucesso:

```jsx
{
    "message": "Cadastro atualizado."
}
```

Resposta [400] status de erro:

```jsx
{
   "error": "Erro ao atualizar."
}
```

### PATCH

- Atualiza apenas o campo de disponibilidade do felino utilizando o ID:

[http://localhost:5000/cat/updateavailable/:id](http://localhost:5000/cat/updateavailable/:id)

Estrutura do body:

```jsx
{
    "available": true
}
```

Resposta [200] status de sucesso:

```jsx
{
    "message": "Atualizado com sucesso."
}
```

Resposta [400] status de erro:

```jsx
{
	"error": "Não foi possível atualizar."
}
```

### DELETE

- Exclui o cadastro do usuário juntamente com as informações do gato utilizando ID:

[http://localhost:5000/cat/delete/:id](http://localhost:5000/cat/delete/:id)

## Considerações

Comunidade, este projeto está em fase inicial e em estará em constante mudanças. Fiquem a vontade para contribuírem utilizando PR's.

## Como faço para rodar este projeto?

- Faça clone ou fork do repositório
- No terminal, use o comando npm install para baixar as dependências
- Em seguida, use o comando npm start e o projeto irá rodar

# Obrigada por chegar até aqui! 👩‍💻😺