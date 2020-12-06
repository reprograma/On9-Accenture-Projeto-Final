

# API - DIREITOS DAS MULHERES

## Sobre
- Descrição do nosso projeto

Um API para que mulheres possam buscar informações jurídicas gratuitas sobre o que pretende saber em relação ao seu trabalho, para analisar se tem direito em algo ou saber de algum acontecimento e se é ilegal. E para mulheres que buscam conehcer os direitos para realizar a transição de carreira.

O usuário pode tanto requisitar por palavra chave (um nome título do assunto que queria) que atenda sua necessidade de conhecimento em relação ao seu direito do trabalho, que estará disponível no banco de dados.

Fazendo um pedido de de busca sobre um direiro (usando uma palavra que lhe represente. (Ex: "assédio", "licença")


## Dados para o usuário preencher para se cadastrar na API
-email: texto e obrigatório
-senha: texto e obrigatório
-profissão/ocupação: texto e obrigatório



## Dados de responsabilidade do API que retornará ao servidor após a busca/consulta:
-id: automático e obrigatorio
-título do assunto jurídico: texto e obrigatório
-descrição sobre o assunto: texto e obrigatório
-fonte de informação do direito: texto e obrigatório 

## API deve retornar seguinte JSON com dados da API:

<!-- [
  {
        "id": "",
        "titleLegalSubject": "Licença Maternidade",
        "description": "A funcionária gestante tem direito a se afastar de suas atividades profissionais, sem prejuízo de salário, por 120 dias.",
        "sourceInformation": "artigo 392 da CLT"
    }
] -->

## As rotas da API:

router.get -
"/"
RETORNA index com apresentação {mensagem: "Um api para propagar conhecimento jurídico trabalhista às mulheres que trabalham com tecnologia ou para quem deseja conhecer os direitos antes de realizar a transição de carreira."}

router.post -
"/create"
RETORNA:  "/laws/add" Cria novo campo com direito e retorna mensagem amigável.


router.put - 
"/update/:id"
RETORNA:  "/laws/update/description/[ID]" Atualiza somente a descrição do direito por id específico e retorna mensagem amigável.
OU
"/laws/atualizar/[ID]" Atualiza completamente o campo do direito e retorna mensagem amigável.

router.delete -
"/:id"
RETORNA: "/laws/delete/[ID]" Deleta o direito por id específico e retorna mensagem amigável.

## Arquitetura MVC

\ DIREITOS-DAS-MULHERES-TECH
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
          📂---data
          |     **laws.json**
          | 
			    📂---model
			    |       **NOMESchema.js
					|       Repository.js**
			    |
			    📂---routes
			            **NOMERoute.js
									index.js**


### Endpoints

- `/api/users/singup`
- `/api/users/all`
- `/api/laws/requests/new`


### links para testar o API

- **/laws/ferias/user/:id**

  - Buscar o item cadastro "férias" dentro dos arquivos dos direitos, para o usuário ler.

- **/laws/requested/user/:id**
  - Buscar todos os direitos que esse usuário requisitou.

**/laws/request/delete/:id**

- Excluir um direito (dentro da pasta direitos) cadastrado na API.


O presente projeto de API está em constante desenvolvimento.
