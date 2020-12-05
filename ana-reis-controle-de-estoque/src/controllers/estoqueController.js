const { request, response } = require("express")
const mongoose = require("mongoose");
const Produtos = require("../models/Produtos");


//GET
const estoqueGeral = (request, response) => {

    Produtos.find()
        .then((Produtos) => {
            response.status(200).json(Produtos);
        })
        .catch(err => next(err));
}

//GET

const getByName = async (request, response) => {

    /*
        const { nomeProduto } = request.query;
    
    try {
        let produto = await Produtos.findOne({ nomeProduto });

        return response.status(201).json(produto);

    }
    catch (err) {

        return response.status(400).json({ error: err.message })

    }
}


const getByName = (request, response) => {

    const {nomeProduto} = request.params;

    console.log(nomeProduto)


    Produtos.findOne(nomeProduto)
        .then((produto) => {
            response.status(200).json(produto);
        })
        .catch(err => next(err));


}
*/
}

//POST
const addProduto = (request, response) => {
    let { nomeProduto, descricao, estoque, valorFabrica } = request.body;

    const novoProduto = new Produtos({
        nomeProduto,
        descricao,
        estoque,
        valorFabrica,
    });

    
    novoProduto.save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch(err => next(err));

}


//PATCH
const abastecerEstoque = async (request, response) => {

    
    const { nomeProduto, estoque } = request.body;
    
    try {
        let produto = await Produtos.findOne({ nomeProduto });

        produto.estoque = produto.estoque + estoque

        await produto.save();

        return response.status(201).json("Estoque abastecido!");

    }
    catch (err) {

        return response.status(400).json({ error: err.message })

    }
}


//DELETE
/**
 * com senha
 */

const deletarProduto = (request, response) => {
    const { id } = request.params

    
                Produtos.findByIdAndDelete(id)
                    .then(() => {
                        response.status(200).json("Produto deletado!");
                    })
                    .catch((err) => {
                        throw new Error(err);
                    });
            }
        

module.exports = {
    estoqueGeral,
    getByName,
    addProduto,
    abastecerEstoque,
    deletarProduto
}