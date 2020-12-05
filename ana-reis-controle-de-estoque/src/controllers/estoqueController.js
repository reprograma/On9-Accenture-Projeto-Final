const { request, response } = require("express")
const mongoose = require("mongoose");
const Produtos = require("../models/Produtos");


//GET
const getAll = (request, response) => {

    Produtos.find()
        .then((Produtos) => {
            response.status(200).json(Produtos);
        })
        .catch(err => next(err));
}

//GET
const getByName = (request, response) => {

    const { name } = request.params;

    Produtos.findByname(name)
        .then((name) => {
            response.status(200).json(name);
        })
        .catch(err => next(err));


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
/**
 * 
 *Atualizar descrição
 */
const collabTask = (request, response) => {
    
    const { id } = request.params;
    const { collab } = request.body;

    Task.findByIdAndUpdate(id, {$set: {collab}})
        .then((task) => {
            response.status(200).json({message: "collab updated"});
        })
        .catch((err) => {
            response.json(err);
        })
}

//DELETE
/**
 * com senha
 */
module.exports = {
    getAll,
    getByName,
    addProduto
}