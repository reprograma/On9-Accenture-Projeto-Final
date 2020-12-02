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

    const novoProduto = new Task({
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

module.exports = {
    getAll,
    getByName,
    addProduto
}