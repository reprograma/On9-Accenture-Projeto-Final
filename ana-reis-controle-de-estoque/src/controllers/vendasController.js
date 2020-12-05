/**
 * nomeProduto, valorVenda, Lucro ( valorVenda-ValorFabrica), vendedor, 
clienteContato(Array com nome e telefone)

Só vai ter GET (getAll, getByDate, lucro (com senha)), POST (emitir pedido), DELETE (só com senha)


 */

const { request, response } = require("express")
const mongoose = require("mongoose");
const Vendas = require("../models/Vendas");
const Produtos = require("../models/Produtos");
const { findOne } = require("../models/Vendas");



//GET 
/** 
 * Retorna todas as Vendas
*/
const getAll = (request, response) => {

    Vendas.find()
        .then((Vendas) => {
            response.status(200).json(Vendas);
        })
        .catch(err => next(err));
}

//GET
/**
 * Retorna todas as vendas daquela data
 */

 //GET
 /** 
  * Retorna o Lucro por produto com senha
  * Fazer se der tempo
  */


//POST
/** 
 * Emite um pedido
 * Faz um POST na coleção Vendas e um PATCH no estoque do produto em Produtos
 * faço um helper e coloco na rota?
 * 
*/


const emitirPedido = async (request, response) => {
    let { nomeProduto, valorVenda, quantidade, vendedor, clienteContato, } = request.body;
 
    const novoPedido = new Vendas({
        nomeProduto,
        valorVenda,
        quantidade,
        vendedor,
        clienteContato
    });

    novoPedido.save()
        .then((res) => {
            response.status(201).json(res).message(estoqueNovo);
        })
        .catch(err => next(err));

try {
    let produto = await Produtos.findOne({nomeProduto: request.body.produto.nomeProduto});
   
    //let estoqueAtual = await Produtos.find({ estoque: request.body.produto.estoque })
    
    produto.estoque = produto.estoque - quantidade
         
    await Produtos.updateOne({nomeProduto: request.body.produto.nomeProduto}, {estoque: estoqueNovo});
    
    await produto.save();

    return request.status(201).json("Estoque atualizado!");

}
catch (err){
    return response.status(400).json({ error: err.message("erro aqui")})
}
}


  
   /*   
    const produto = await Produtos.find({ nomeProduto: request.params.nomeProduto })

    let estoqueAtual = await Produtos.find({ estoque: request.params.estoque })
    
    let estoqueNovo = estoqueAtual-quantidade
    
        Produtos.findOneAndUpdate({nomeProduto: produto}, {estoque: estoqueNovo}, {returnOriginal: false})
        .then((id) => {
            response.status(200).json(id);
        })
        .catch(err => next(err));
        */
//DELETE
/** 
 * Deletar uma venda somente com senha
 */

 /**
  * 
  */
module.exports = {
    getAll,
    emitirPedido
}