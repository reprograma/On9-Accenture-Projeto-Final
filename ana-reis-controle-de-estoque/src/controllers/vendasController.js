/**
 * nomeProduto, valorVenda, Lucro ( valorVenda-ValorFabrica), vendedor, 
clienteContato(Array com nome e telefone)

Só vai ter GET (getAll, getByDate, lucro (com senha)), POST (emitir pedido), DELETE (só com senha)


 */

const { request, response } = require("express")
const mongoose = require("mongoose");
const Vendas = require("../models/Vendas");
const Produtos = require("../models/Produtos");



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
const emitirPedido = (request, response) => {
    let { nomeProduto, valorVenda, vendedor, clienteContato, } = request.body;

   /**
    * Produtos.findOne({nomeProduto: nomeProduto}) 
        .then(subtrair => {
            let novoEstoque = Produtos.novoEstoque - 1
            Produtos.estoque = novoEstoque

        })
        .then
    *  */ 

    const novoPedido = new Vendas({
        nomeProduto,
        valorVenda,
        vendedor,
        clienteContato
    });

    novoPedido.save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch(err => next(err));

}

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