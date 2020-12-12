const { req, res } = require('express');
const bcrypt = require('bcrypt');
const Restaurante = require('../models/restaurantes');
const Usuario = require('../models/usuarios');
const { senhaHash } = require('../helpers/usuario');
const mongoose = require('mongoose');

const todosRestaurantes = (req, res) => {
    Restaurante.find()
        .then((restaurantes) => {
            res.status(200).json(restaurantes)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

const restaurantePorId = (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'o id especificado não é valido' })
    }
    Restaurante.findById(id)
        .then((restaurante) => {
            res.status(200).json(restaurante);
        })
        .catch((err) => {
            res.json(err);
        })
}

const cadastroRestaurante = (req, res) => {
    const { nome, restaurante, especialidades, rua } = req.body
    try {
        const resTaurante = new Restaurante({
            nome,
            restaurante,
            especialidades,
            rua
        });
        resTaurante.save()
            .then((resTaurante) => {
                res.status(200).json(resTaurante);
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
    } catch (e) {
        return res.status(401).json({ error: 'erro' });
    }
}


const adicionarComentario = (req, res) => {
    const { id } = req.params
    const { comentarios } = req.body
    Restaurante.findByIdAndUpdate(id, { $set: { comentarios }})
        //try {
        // const comentar = new Restaurante.comentario({
        // });
        // comentar.push()
        .then(() => {
            res.status(201).json({ message: `comentario adicionado com sucesso` });
        })
        .catch(err => next(err));
}


module.exports = {
    todosRestaurantes,
    restaurantePorId,
    cadastroRestaurante,
    adicionarComentario
}
