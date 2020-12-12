const { req, res } = require('express');
const mongoose = require('mongoose');
const Cliente = require('../model/Cliente');
const Objeto = require('../model/Objeto');
const Aluguel = require('../model/Aluguel');

const obterAlugueis = async(req, res) => {
    Aluguel.find()
        .then((alugueis) => {
            if (alugueis == 0) {
                res.status(404).json({ message: 'Não há aluguel' });
            }
            res.status(200).json(alugueis);
        })
        .catch((err) => {
            res.status(500).json(err);
        });

}

const alugar = async(req, res) => {
    let { idObjeto } = req.body;
    let { IdCliente } = req.body;

    Objeto.findById(idObjeto).then(objetoEncontrado => {
        if (objetoEncontrado.isAlugado == true) {
            return res.status(400).json({ message: 'Objeto ja esta alugado' })
        }
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
                        res.status(200).json({ message: 'Sucesso' })
                    })

                })
            })
        })
    })
}

const devolver = async(req, res) => {
    let { id } = req.params;
    Aluguel.findById(id)
        .then(async(aluguel) => {
            await Objeto.findOneAndUpdate({ _id: aluguel.objetoId }, { $set: { isAlugado: false } })

            await Cliente.findOneAndUpdate({ _id: aluguel.clienteId }, { $pull: { objetosAlugados: aluguel.objetoId } })

            Aluguel.findByIdAndRemove(id)
                .then(() => {
                    res.status(200).json({ message: 'Devolução realizada' })
                })
                .catch((err) => {
                    res.status(400).json(err, { message: 'Não foi possivel realizar a devolução' })
                })
        })
        .catch((e) => {
            res.status(500).json(e)
        })

}

module.exports = {
    obterAlugueis,
    alugar,
    devolver
}