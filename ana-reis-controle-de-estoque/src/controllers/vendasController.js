const { request, response } = require("express")
const mongoose = require("mongoose");
const Vendas = require("../models/Vendas");
const Produtos = require("../models/Produtos");



//GET 
const vendas = (request, response) => {

    Vendas.find()
        .then((Vendas) => {
            response.status(200).json(Vendas);
        })
        .catch(err => next(err));
}

//GET
/***
 * Aplicar Validação 
 * Criar todo o código
 */
const periodoVenda = async (request, response) => {

    const {data} = request.params;

    Produtos.find({createdAt})
        .then((produto) => {
            response.status(200).json(produto);
        })
        .catch(err => next(err));


}


//POST
/**
 * Aplicar Validação 
 */
const vendaProduto = async (request, response) => {
    let { nomeProduto, valorVenda, quantidade, vendedor, clienteContato } = request.body;

    const novoPedido = new Vendas({
        nomeProduto,
        valorVenda,
        quantidade,
        vendedor,
        clienteContato
    });

    try {
        let produto = await Produtos.findOne({ nomeProduto });

        produto.estoque = produto.estoque - quantidade

        if (produto.estoque < 0) {
            return response.status(400).json("Quantidade insuficiente! Favor abastecer");
        } else {
            await novoPedido.save()

            await produto.save();

            return response.status(201).json("Estoque atualizado!, restam " + produto.estoque + "unidades")
        }

    }
    catch (err) {

        return response.status(400).json({ error: err.message })

    }
}

//DELETE
/**
 * Aplicar Validação 
 * Aplicar senha
 */

const estorno =  (request, response) => {
    const { id } = request.params


console.log(id)

    Vendas.findById(id)
        .then((venda) => {

            let quantidadeVenda = venda.quantidade
            let produtoNome = venda.nomeProduto

            Produtos.findOne({ nomeProduto: produtoNome })
                .then(async produto => {
 
                    produto.estoque = produto.estoque + quantidadeVenda
                    await produto.save()

                     Vendas.findByIdAndDelete(id)
                        .then(() => {
                            response.status(200).json("Estorno feito com sucesso e estoque atualizado ")
                        })
                        .catch((err) => {
                            throw new Error(err);
                        });
                })

        })

}


module.exports = {
    vendas,
    periodoVenda,
    vendaProduto,
    estorno
}