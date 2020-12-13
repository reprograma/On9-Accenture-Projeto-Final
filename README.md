# 🔒 Viajante Sobre Rodas

# Hospedagem com acessibilidade! 👩‍🦽👨‍🦽

# 🎯 Qual a finalidade da API?

  Viajante Sobre Rodas é uma API criada para facilitar a hospedagem de pessoas com deficiência física. Para isso, utilizando-se do MongoDB, estão sendo cadastrados hotéis e pousadas que estejam de acordo com os princípios da acessibilidade, considerando características imprescindíveis para uma boa experiência durante a hospedagem, como banheiros planejados, vagas de estacionamento exclusivas e rampas de acesso.
  
  No Brasil, ser cadeirante significa, quase sempre, ser impedido de planejar viagens e se limitar a um reduzido convívio social. São muitas as pessoas que lutam contra o capacitismo diariamente e poucos os lugares com planejamento efetivo que as integrem. Há muito trabalho a ser feito para que todas as pessoas possam se conectar verdadeiramente aos espaços físicos de suas cidades e se sintam pertencentes ao mundo que também merecem explorar. O objetivo desse projeto é contribuir um pouco com esse processo.


# 🚀 Routes

/ → Frontend 
-Início da prototipagem de telas pelo Figma
https://www.figma.com/file/PUB6m7h26oOZNdEEIxneYu/Hospedagem-Acess%C3%ADvel?node-id=0%3A1

/cadastro-usuario 
(Objetivo: permitir que outras pessoas deem sugestões de hospedagens que ainda não foram cadastradas no site e relatem experiências com os locais cadastrados)

- Cadastrar (Publico) (POST)
https://viajante-sobre-rodas.herokuapp.com/api/user/register

- Retornar todos os usuários cadastrados (GET)
https://viajante-sobre-rodas.herokuapp.com/api/user/all

- Autenticar login (POST) 
(Email, Senha) → JWT Token (Publico)
https://viajante-sobre-rodas.herokuapp.com/api/auth/authenticate


/hospedagem

- Cadastrar (POST)
https://viajante-sobre-rodas.herokuapp.com/api/hosting/createhosting

- Editar hospedagem (PUT)
https://viajante-sobre-rodas.herokuapp.com/api/hosting/updatehosting/:id

- Listar todas as hospedagens (GET)
https://viajante-sobre-rodas.herokuapp.com/api/hosting/all

- Listar hospedagens por estado (GET)
https://viajante-sobre-rodas.herokuapp.com/api/hosting/state/:state

- Listar hospedagens por cidade (GET)
https://viajante-sobre-rodas.herokuapp.com/api/hosting/city/:cidade

- Excluir hospedagem (DELETE)
https://viajante-sobre-rodas.herokuapp.com/api/hosting/deletehosting/:id


## 📃 Models

**Hospedagem:**

- Nome
- Site
- Telefone
- Acessibilidade (Object)
    - Rampa → (Boolean)
    - Garagem → (Boolean)
    - Banheiro → (Boolean)
- Cidade
- Bairro
- Endereço
- Site

**Usuário Colaborador:**

- ID
- nome
- email
- senha