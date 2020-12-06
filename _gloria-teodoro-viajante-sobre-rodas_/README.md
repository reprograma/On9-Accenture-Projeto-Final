# 🔒viajantesobrerodas.com.br

# Hospedagem com acessibilidade! 👩‍🦽👨‍🦽

# 🎯 Qual a finalidade da API?

  Viajante Sobre Rodas é uma API criada para facilitar a hospedagem de pessoas com deficiência física. Para isso, utilizando-se do MongoDB, serão cadastrados hotéis e pousadas que estejam de acordo com os princípios da acessibilidade, considerando características imprescindíveis para uma boa experiência durante a hospedagem, como banheiros planejados, vaga de estacionamento exclusiva e rampas de acesso.
  
  No Brasil, ser cadeirante significa, quase sempre, ser impedido de planejar viagens, de sonhar com profissões e se limitar a um reduzido convívio social. São poucos os lugares com planejamento efetivo que integre essas pessoas e poucas as pessoas que se preocupam com a saúde mental de quem vive a luta contra o capacitismo todos os dias. Há muito trabalho a ser feito para que todas as pessoas possam se conectar verdadeiramente aos espaços físicos de suas cidades e se sintam pertencentes ao mundo que também merecem explorar. O objetivo desse projeto é contribuir um pouco com esse processo.

# 🚀 Routes

/ → Frontend

/cadastro-usuario

- Cadastrar (Publico)
- Editar

/login

- Post (Email, Senha) → JWT Token (Publico)

/estados

- Cadastrar
- Editar
- Excluir
- Listar (Publico)

/cidades

- Cadastrar
- Editar
- Excluir
- Listar (Publico)

/hospedagem

- Cadastrar
- Cadastrar-obs
- Editar
- Excluir
- Listar (Publico)

## 📃 Models

**Estado:**

- Nome
- Regiao
- Imagem

**Cidade:**

- Nome
- Estado
- imagem

**Hospedagem:**

- Nome
- Site
- Telefone
- Acessibilidade
    - Rampa → (Boolean, Text)
    - Garagem → (Boolean, Text)
    - Banheiro → (Boolean, Text)
- Confirmado → True e False
- Comentarios (Sugestão)
    - Array → sugestões {ID-User, nome, msg, data, hora, avaliacao}
- Endereco
    - Rua
    - Cidade
    - Bairro
    - Numero

**Usuário Colaborador:**

- ID
- nome
- email
- senha