const { request, response } = require("express")
const mongoose = require("mongoose");
const Estoque = require("../models/Estoque");


//GET
const estoqueGeral = (request, response) => {

    Estoque.find()
        .then((Produtos) => {
            response.status(200).json(Produtos);
        })
        .catch((err) => {
            response.status(400).json(err);
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
            response.status(400).json(err);
        });
}

//POST
const cadastroProduto = async (request, response) => {
   
    const {nomeProduto, descricao, estoque, valorFabrica} = request.body;
    
    try {
          
    Estoque.findOne({nomeProduto: nomeProduto})
        .then((produto) => {

            if (produto){              
                response.status(400).json("Produto já cadastrado");
            }else {
                const novoProduto = new Estoque ({ nomeProduto, descricao, estoque, valorFabrica});
                novoProduto.save()
                .then((res) => {
                    response.status(201).json(res);
                })
                .catch((err) => {
                    response.status(400).json(err);
                });
            }
        })
        .catch((err) => {
            response.status(500).json(err);
        });
    }catch (err) {
        return response.status(400).json({ error: err.message })
    }
}

//PATCH
const abastecerEstoque = async (request, response) => {

    const {nomeProduto, estoque} = request.body;
        
    try {
        let produto = await Estoque.findOne({nomeProduto: nomeProduto});

        produto.estoque = produto.estoque + estoque

        await produto.save();

        return response.status(201).json("Estoque abastecido!");

    }
    catch (err) {

        return response.status(400).json({ error: err.message });
    }
}

//DELETE
const deletarProduto = (request, response) => {
    const { id } = request.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({message: "Id inválido"});
        return;
    }
       
        Estoque.findByIdAndDelete(id)
                    .then(() => {
                        response.status(200).json("Produto excluido!");
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