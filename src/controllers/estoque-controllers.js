const helper = require('../helpers/helper');
const Estoque = require('../models/estoque')

const obterTodosProduto = (requisicao, resposta) =>{
    resposta.status(200).json(estoqueSimplificado);
}

const obterProdutoPorId = (requisicao, resposta) =>{
    resposta.status(200).json(estoqueSimplificado);
}

const entradaEstoque = (req, res, next) =>{
    const { modelo, cor, tamanho, quantidade } = req.body;    
    const novoEstoque = new Estoque({        
        modelo: modelo,
        cor: cor,
        tamanho: tamanho,
        quantidade: quantidade,
    })
    novoEstoque.save()
        .then(estoque => res.status(201).json(estoque))
        .catch(err => next(err));     
}

/**
 * 
 * 
 */
const atualizarEstoque = (requisicao, resposta) => {
    const { id } = requisicao.params;
    const { modelo } = requisicao.body;
    const atualizar = estoqueSimplificado.find(atualizar => atualizar.id == id);
  
    atualizar.modelo = modelo;
  
    resposta.status(204).json({ mensagem: `Produto atualizado com sucesso!`})
  
   }

/**
 * DELETE
 * 
 */
const excluirEstoque = (requisicao, resposta) => {
    const { id } = requisicao.params;
    
    estoqueSimplificado.filter(estoque => estoque.id != id);
    resposta.json({mensagem: `Produto excluido com sucesso!`})
  
  
   }

const atualizarQuantidadeEstoque = (requisicao, resposta) => {
    const { id } = requisicao.params;
    
    estoqueSimplificado.filter(estoque => estoque.id != id);
    resposta.json({mensagem: `Produto excluido com sucesso!`})
  
  
   }

module.exports={
    atualizarQuantidadeEstoque,
    obterTodosProduto,
    obterProdutoPorId,
    entradaEstoque,
    atualizarEstoque,
    excluirEstoque
}