# Alerta de Gatilho (versão 1.0) - Documentação

# Sejam bem vindos!
Olá, essa API chamada Alerta de Gatilho tem como propósito listar livros que possuem gatilhos, cenas sensíveis que podem afetar estado psíquico do leitor e que nem sempre estão claros na sinopse. Dessa forma, a pessoa já inicia a leitura sabendo de tópicos que serão abordados, podendo assim saber se está preparada psicologicamente ou não para embarcar na leitura da obra sem que essa faça mal ao indivíduo. Considerando que a leitura pode fazer com que a pessoa se prenda na história, e isso pode trazer reflexos bons ou ruins ao indivíduo, dependendo do que é tratado na obra.

## Contato
Desenvolvido por *Íris Brito*

**e-mail:** irisbritox@gmail.com

**linkedin:** https://www.linkedin.com/in/iris-brito/

## Arquitetura do Projeto
O projeto foi desenvolvido utilizando a estrutura MVC + Rotas, considerando que a parte de View que é Front-end não foi realizada, porque o foco está no Back-end.

## Dependências utilizadas
 - Express
 - Nodemon
 - Mongoose
 - Dotenv

## Rotas

### GET 
Retornar todos os livros do sistema:
http://localhost:8080/alertaDeGatilho 

Retornar o livro de acordo com o id:
http://localhost:8080/alertaDeGatilho/:id

Retornar o livro de acordo com o título:
http://localhost:8080/alertaDeGatilho/titulo?title=*titulo*

Retornar os livros de acordo com o nome do(a) autor(a)
http://localhost:8080/alertaDeGatilho/autor?author=nome do autor

Retornar os livros que têm gatilhos:
http://localhost:8080/alertaDeGatilho/temgatilho

Retornar os livros que não tem gatilhos:
http://localhost:8080/alertaDeGatilho/naotemgatilho

### POST
Adicionar um novo livro:
http://localhost:8080/alertaDeGatilho/cadastro

O body deve conter:

    {
        "title": "Raio de Sol",
        "author": "Kim Holden",
        "hasTrigger": true,
        "triggers": ["transtorno alimentar", "bulimia", "suicidio", "aborto", "homofobia", "assédio", "violencia", "abuso parental"],
        "synopsis": "Faça épico, costuma dizer Kate Sedgwick quando quer estimular alguém a dar o melhor de si. Nascida numa família-problema, com direito a mortes e abandono, a garota de dezenove anos sempre buscou fazer a diferença. Em vez de passar os dias lamentando os infortúnios da vida, como tantos fariam em seu lugar, sempre vê as coisas pelo lado positivo não é por outro motivo que Gus, seu melhor amigo, a chama de Raio de Sol.E é por isso que, quando passa na faculdade e se muda da ensolarada San Diego, na Califórnia, para a fria cidade de Grant, em Minnesota, ela leva consigo apenas boas lembranças e perspectivas. O que ela não espera é que será surpreendida pelo amor único aspecto da vida em relação ao qual nunca quis ser otimista ao conhecer Keller Banks, um rapaz que parece corresponder aos seus sentimentos. Acontece que tanto ele quanto ela têm um segredo. E segredos, às vezes, podem mudar tudo."
    }


Resposta [200]:

    {
    "hasTrigger": true,
    "triggers": [
        "transtorno alimentar",
        "bulimia",
        "suicidio",
        "aborto",
        "homofobia",
        "assédio",
        "violencia",
        "abuso parental"
    ],
    "_id": "5fd4ff934f5ede0017ed6adf",
    "title": "Raio de Sol",
    "author": "Kim Holden",
    "synopsis": "Faça épico, costuma dizer Kate Sedgwick quando quer estimular alguém a dar o melhor de si. Nascida numa família-problema, com direito a mortes e abandono, a garota de dezenove anos sempre buscou fazer a diferença. Em vez de passar os dias lamentando os infortúnios da vida, como tantos fariam em seu lugar, sempre vê as coisas pelo lado positivo não é por outro motivo que Gus, seu melhor amigo, a chama de Raio de Sol.E é por isso que, quando passa na faculdade e se muda da ensolarada San Diego, na Califórnia, para a fria cidade de Grant, em Minnesota, ela leva consigo apenas boas lembranças e perspectivas. O que ela não espera é que será surpreendida pelo amor único aspecto da vida em relação ao qual nunca quis ser otimista ao conhecer Keller Banks, um rapaz que parece corresponder aos seus sentimentos. Acontece que tanto ele quanto ela têm um segredo. E segredos, às vezes, podem mudar tudo.",
    "createdAt": "2020-12-12T17:36:19.129Z",
    "updatedAt": "2020-12-12T17:36:19.129Z",
    "__v": 0
}

Resposta [400]:

    "Impossível cadastrar o livro. Confira as informações e se ele já não está cadastrado."

### PATCH

Atualizar os gatilhos de um livro:

http://localhost:8080/alertaDeGatilho/alterargatilho/:id

O body deve conter: 

    { 
	    "_id": 9517861964548hgdjs
	    "triggers": ["bullying", "trauma", "suicídio", "depressão", "ansiedade"]   
    }

Resposta [200]:

    "message": "{id} triggers have been updated"


Resposta [400]:

    "Não foi possível deletar o livro."


### DELETE

Deletar um livro:

http://localhost:8080/alertaDeGatilho/:id

Resposta [200]:

    "Livro deletado com sucesso!"

Resposta [400]:

    "Não foi possível deletar o livro."


# Regras de negócios

- Não aceitar incluir gatilhos iguais no mesmo livro
- Não aceitar cadastrar livro com título e autor existente no banco de dados
- Não permitir que um livro que está cadastrado que não tem gatilho tenha inclusão de gatilhos
- Não permitir que um livro que está cadastrado que tem gatilho fique com o campo de gatilhos em branco
- Não permitir que qualquer pessoa possa alterar ou excluir livros


# Para rodar o projeto

 1. Faça o **git clone** do projeto
 2. Dê **npm install**  para instalar as todas as dependências do projeto em sua máquina
 3. Para executar o projeto utilize o comando: **npm start**


# Observação

Esse projeto está em constante desenvolvimento e vocês podem ficar a vontade para propor atualizações, correções de bugs e fazer um pull request. Obrigada!