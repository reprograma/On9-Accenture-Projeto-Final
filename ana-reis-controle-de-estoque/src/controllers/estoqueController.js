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
/**
 * Aplicar Validação
 * Fazer funcionar 
 */
const nomeProduto = (request, response) => {

    const {nomeProduto} = request.query;

    console.log(nomeProduto)


    Produtos.find({nomeProduto: nomeProduto})
        .then((produto) => {
            response.status(200).json(produto);
        })
        .catch(err => next(err));


}

//POST
/**
 * Aplicar Validação
 * Regra de negócio: não cadastrar produto já existente
 */
const cadastroProduto = (request, response) => {
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
/**
 *Aplicar Validação 
 */
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
 *  Aplicar Validação
 * Colocar senha
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
    nomeProduto,
    cadastroProduto,
    abastecerEstoque,
    deletarProduto
}