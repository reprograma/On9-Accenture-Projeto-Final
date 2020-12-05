# Olá bem vindos a minha API.

## Controle de estoque

Controle de estoque simples, utilizando NODE JS e MongoDB. Com funções de adicionar, atualizar e remover itens de uma do estoque.

- Cadastrar produtos (descrição do produto MODELO, COR, DETALHES e QUANTIDADE)
- Dar entrada no estoque com o produto.
- Saída do produto no estoque (BAIXA).
- Sair com produto do estoque na sua totalidade ou item a item.
- Quantidade de peças.
- Tamanhos P, M, G e XG.
- Descrição do Produto (pode colocar uma foto) - OPCIONAL

# Sobre o que é o projeto?

Ajudar o pequeno empreendedor a controlar o seu estoque de mercadorias, evitando gastos de dinheiro e tempo desnecessários.

# Instalações:

Baixar as dependências na raiz do projeto com o comando _npm install_

# Iniciando:

Depois de ter instalado as dependências, usar o comando `mongodb`
`npm start` para rodar o banco de dados e iniciar a aplicação.

# Rotas:

## GET:

- desc. Retorna todos os produtos

**Retorno**

```
  [
    {
      modelo: "Calça",
      cor: "preta",
      tamanho: "G",
      quantidade: 17
    },
    {
      modelo: "Blusa",
      cor: "amarela",
      tamanho: "M",
      quantidade: 2
    }
  ]
```

## POST:

- desc. Criar uma entrada de produto

**Entrada**

```
{
  modelo: "Blusa",
  cor: "amarela",
  tamanho: "M",
  quantidade: 2
}
```

**Retorno**

```
{
  "_id": "5fc98d732a4e791298645c64",
  "modelo": "Blusa",
  "cor": "amarela",
  "tamanho": "M",
  "quantidade": 2,
  "createdAt": "2020-12-04T01:14:27.159Z",
  "updatedAt": "2020-12-04T01:14:27.159Z",
  "__v": 0
}
```

## PUT:

![image]/\*\*

- PUT atualizar entradaEntradaEstoque
- desc. Atualizar o produto
  \*/
  router.put('/:id', estoqueController.atualizarEstoque)

## PACTH:

![image]/\*\*

- PATCH atualizar entradaEntradaEstoque
- desc. Atualizar o produto
  \*/
  router.patch('/:id', estoqueController.atualizarQuantidadeEstoque);

## DELETE:

![image]/\*\*

- DELETE deleta entradaEntradaEstoque
- desc. Excluir o produto
  \*/
  router.delete('/:id', estoqueController.excluirEstoque);
