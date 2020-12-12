const { request, response } = require("express")
const mongoose = require("mongoose");
const Estoque = require("../models/Estoque");
const {produtoSchema, estoqueSchema} = require("../validators/estoque")
const {DataSchema} = require("yup")

//GET
const estoqueGeral = (request, response) => {

    Estoque.find()
        .then((Produtos) => {
            response.status(200).json(Produtos);
        })
        .catch((err) => {
            response.status(400).json(err)
        });
}

//GET
const nomeProduto = (request, response) => {

    const {nomeProduto} = request.params;

    Estoque.find({nomeProduto: nomeProduto})
        .then((produto) => {          
            response.status(200).json(produto);
        })
        .catch((err) => {
            response.status(400).json(err)
        });
}

//POST
const cadastroProduto = async (request, response) => {
        
    const produtoValidado = await produtoSchema.validate(request.body)
  
    const checarNome = produtoValidado.nomeProduto
      
    Estoque.findOne({nomeProduto: checarNome})
        .then(produto => {
            if (produto){
                response.status(400).json("Produto já cadastrado")
            }else {
                novoProduto = new Estoque(produtoValidado)
                novoProduto.save()
                .then((res) => {
                    response.status(201).json(res);
                })
                .catch((err) => {
                    response.status(400).json(err)
                });
            }
        })
    }

//PATCH
const abastecerEstoque = async (request, response) => {

    const produtoValidado = await estoqueSchema.validate(request.body)
    const checarEstoque = produtoValidado.estoque
    const nomeProduto = produtoValidado.nomeProduto
            
    try {
        let produto = await Estoque.findOne( {nomeProduto});

        produto.estoque = produto.estoque + checarEstoque

        await produto.save();

        return response.status(201).json("Estoque abastecido!");

    }
    catch (err) {

        return response.status(400).json({ error: err.message })
    }
}

//DELETE
const deletarProduto = (request, response) => {
    const { id } = request.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({message: "Specified id is not valid"});
        return;
    }
       
        Estoque.findByIdAndDelete(id)
                    .then(() => {
                        response.status(200).json("Produto deletado!");
                    })
                    .catch((err) => {
                        throw new Error(err);
                    });
            }
        

module.exports = {
    estoqueGeral,
    nomeProduto,
    cadastroProduto,
    abastecerEstoque,
    deletarProduto
}