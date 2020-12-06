# Alerta de Gatilho (versão 1.0) - Documentação

# Sejam bem vindos!
Olá, essa API chamada Alerta de Gatilho tem como propósito listar livros que possuem gatilhos que podem afetar estado psíquico do leitor e que nem sempre estão claros na sinopse. Dessa forma, a pessoa já inicia a leitura sabendo de tópicos que serão abordados, podendo assim saber se está preparada psicologicamente ou não para embarcar na leitura da obra sem que essa faça mal ao indivíduo. Considerando que a leitura pode fazer com que a pessoa se prenda na história, e isso pode trazer reflexos bons ou ruins ao indivíduo, dependendo do que é tratado na obra.

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


## Rotas

### GET 
Retornar todos os livros do sistema:
http://localhost:8080/alerta-de-gatilho 

Retornar o livro de acordo com o id:
http://localhost:8080/alerta-de-gatilho/:id

Retornar o livro de acordo com o título:
http://localhost:8080/alerta-de-gatilho/titulo/*titulo*

Retornar os livros de acordo com o nome do(a) autor(a)
http://localhost:8080/alerta-de-gatilho/autor/nome-do-autor

Retornar os livros que têm gatilhos:
http://localhost:8080/alerta-de-gatilho/temgatilho

Retornar os livros que não tem gatilhos:
http://localhost:8080/alerta-de-gatilho/naotemgatilho

### POST
Adicionar um novo livro:
http://localhost:8080/alerta-de-gatilho/cadastro

O body deve conter:

    { 
	    "title": "Por lugares incríveis",
	    "author": "Jennifer Niven",
	    "hasTrigger": true
	    "triggers": ["bullying", "trauma", "suicídio", "depressão", "transtorno bipolar"]
	    "synopsis": "Violet Markey tinha uma vida perfeita, mas todos os seus planos deixam de fazer sentido quando ela e a irmã sofrem um acidente de carro e apenas Violet sobrevive. Sentindo-se culpada pelo que aconteceu, Violet se afasta de todos e tenta descobrir como seguir em frente. Theodore Finch é o esquisito da escola, perseguido pelos valentões e obrigado a lidar com longos períodos de depressão, o pai violento e a apatia do resto da família. Enquanto Violet conta os dias para o fim das aulas, quando poderá ir embora da cidadezinha onde mora, Finch pesquisa diferentes métodos de suicídio e imagina se conseguiria levar algum deles adiante. Em uma dessas tentativas, ele vai parar no alto da torre da escola e, para sua surpresa, encontra Violet, também prestes a pular. Um ajuda o outro a sair dali, e essa dupla improvável se une para fazer um trabalho de geografia: visitar os lugares incríveis do estado onde moram. Nessas andanças, Finch encontra em Violet alguém com quem finalmente pode ser ele mesmo, e a garota para de contar os dias e passa a vivê-los."
	    
    }


Resposta [200]:

    "Livro cadastrado com sucesso!"

Resposta [400]:

    "Impossível cadastrar o livro. Confira as informações e se ele já não está cadastrado."

### PATCH

Atualizar os gatilhos de um livro:

http://localhost:8080/alerta-de-gatilho/alterar/:id

O body deve conter: 


    { 
	    "id": 9517861964548hgdjs
	    "triggers": ["bullying", "trauma", "suicídio", "depressão", "ansiedade"]   
    }

### DELETE

Deletar um livro:

http://localhost:8080/alerta-de-gatilho/:id

Resposta [200]:

    "Livro deletado com sucesso!"

Resposta [400]:

    "Não foi possível deletar o livro."


# Regras de négocio

- Não aceitar cadastrar livro com título e autor existente no banco de dados
- Não aceitar incluir gatilhos iguais no mesmo livro
- Não permitir que qualquer pessoa possa alterar ou excluir livros
- Não permitir que um livro que está cadastrado que não tem gatilho tenha inclusão de gatilhos
- Não permitir que um livro que está cadastrado que tem gatilho fique com o campo de gatilhos em branco


# Para rodar o projeto

 1. Faça o **git clone** do projeto
 2. Dê **npm install**  para instalar as todas as dependências do projeto em sua máquina
 3. Para executar o projeto utilize o comando: **npm start**


# Observação

Esse projeto está em constante desenvolvimento e vocês podem ficar a vontade para propor atualizações, correções de bugs e fazer um pull request. Obrigada!