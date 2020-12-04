let estoqueSimplificado = require('../models/estoque-models');
const helper = require('../helpers/helper');
const estoque = require('../models/estoque-models')

const obterTodosProduto = (requisicao, resposta) =>{
    resposta.status(200).json(estoqueSimplificado);
}

const obterProdutoPorId = (requisicao, resposta) =>{
    resposta.status(200).json(estoqueSimplificado);
}

const entradaEstoque = ( requisicao, resposta) =>{
    const { modelo, cor, tamanho, quantidade, entrada, saida } = requisicao.body;
  
    const novaTarefa ={
        id: helper.obterInformacoes(estoqueSimplificado),
        modelo: modelo,
        cor: cor,
        tamanho: tamanho,
        quantidade: quantidade,
        entrada: helper.novaData(estoqueSimplificado),
        saida: helper.novaData(estoqueSimplificado)

    }
    estoqueSimplificado.push(novaTarefa);

    resposta.status(201).json(novaTarefa);
    
}

const atualizarEntradaEstoque = (requisicao, resposta) => {
    const { id } = requisicao.params;
    const { modelo } = requisicao.body;
    const atualizar = estoqueSimplificado.find(atualizar => atualizar.id == id);
  
    atualizar.modelo = modelo;
  
    resposta.status(204).json({ mensagem: `Produto atualizado com sucesso!`})
  
   }

   const excluirEstoque = (requisicao, resposta) => {
    const { id } = requisicao.params;
    const { modelo } = requisicao.body;
    const atualizar = estoqueSimplificado.find(atualizar => atualizar.id == id);
  
    atualizar.modelo = modelo;
  
    resposta.status(204).json({ mensagem: `Produto atualizado com sucesso!`})
  
   }

module.exports={
    obterTodosProduto,
    obterProdutoPorId,
    entradaEstoque,
    atualizarEntradaEstoque,
    excluirEstoque
}