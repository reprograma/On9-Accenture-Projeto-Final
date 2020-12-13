# 🔒 Viajante Sobre Rodas

# Hospedagem com acessibilidade! 👩‍🦽👨‍🦽

# 🎯 Qual a finalidade da API?

  Viajante Sobre Rodas é uma API criada para facilitar a hospedagem de pessoas com deficiência física. Para isso, utilizando-se do MongoDB, estão sendo cadastrados hotéis e pousadas que estejam de acordo com os princípios da acessibilidade, considerando características imprescindíveis para uma boa experiência durante a hospedagem, como banheiros planejados, vaga de estacionamento exclusiva e rampas de acesso.
  
  No Brasil, ser cadeirante significa, quase sempre, ser impedido de planejar viagens e se limitar a um reduzido convívio social. São poucos os lugares com planejamento efetivo que integre essas pessoas e poucos os que refletem sobre a saúde mental de quem vive a luta contra o capacitismo diariamente. Há muito trabalho a ser feito para que todas as pessoas possam se conectar verdadeiramente aos espaços físicos de suas cidades e se sintam pertencentes ao mundo que também merecem explorar. O objetivo desse projeto é contribuir um pouco com esse processo.


# 🚀 Routes

/ → Frontend (em construção)

/cadastro-usuario

- Cadastrar (Publico) 
https://viajante-sobre-rodas.herokuapp.com/api/user/register

- Retornar todos os usuários cadastrados
https://viajante-sobre-rodas.herokuapp.com/api/user/all

/login
- Post (Email, Senha) → JWT Token (Publico)
https://viajante-sobre-rodas.herokuapp.com/api/auth/authenticate


/hospedagem

- Cadastrar
https://viajante-sobre-rodas.herokuapp.com/api/hosting/createhosting
- Editar hospedagem
https://viajante-sobre-rodas.herokuapp.com/api/hosting/updatehosting/:id
- Listar todas as hospedagens
https://viajante-sobre-rodas.herokuapp.com/api/hosting
- Listar hospedagens por estado
https://viajante-sobre-rodas.herokuapp.com/api/hosting/state/:state
- Listar hospedagens por cidade
https://viajante-sobre-rodas.herokuapp.com/api/hosting/city/:cidade
- Excluir hospedagem
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