const { req, res } = require('express');
const mongoose = require('mongoose');
const Cliente = require('../model/Cliente');
const Objeto = require('../model/Objeto');
const Aluguel = require('../model/Aluguel');

const Alugar = async(req, res) => {
    let { id } = req.body;
    let { IdCliente } = req.body;

    Objeto.findById(id).then(objetoEncontrado => {
        Cliente.findById(IdCliente).then(cliente => {
            cliente.objetosAlugados.push(objetoEncontrado._id)
            cliente.save().then(() => {
                objetoEncontrado.isAlugado = true;
                objetoEncontrado.save().then(() => {
                    objetoAlugado = {
                        objetoId: objetoEncontrado._id,
                        clienteId: IdCliente,
                    }

                    Aluguel.create(objetoAlugado).then(() => {
                        res.send('Sucess')
                    })

                })
            })
        })
    })
}

module.exports = {
    Alugar
}