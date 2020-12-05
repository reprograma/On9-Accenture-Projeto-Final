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

//POST
const vendaProduto = async (request, response) => {
    let { nomeProduto, valorVenda, quantidade, vendedor, clienteContato } = request.body;

    const novoPedido = new Vendas({
        nomeProduto,
        valorVenda,
        quantidade,
        vendedor,
        clienteContato
    });

    await novoPedido.save()

    try {
        let produto = await Produtos.findOne({ nomeProduto });
            
        produto.estoque = produto.estoque - quantidade

        if (produto.estoque < 0){
            return response.status(400).json("Quantidade insuficiente! Favor abastecer");
        }else{
            await produto.save();

            return response.status(201).json("Estoque atualizado!, restam " + produto.estoque + "unidades")
        }
        

    }
    catch (err) {

        return response.status(400).json({ error: err.message })

    }
}


//DELETE

module.exports = {
    vendas,
    vendaProduto
}