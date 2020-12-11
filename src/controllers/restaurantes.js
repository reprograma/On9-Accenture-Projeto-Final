const { req, res } = require('express');
const bcrypt = require('bcrypt');
const Restaurante = require('../models/restaurantes');
const Usuario = require('../models/usuarios');
const { senhaHash } = require('../helpers/usuario')

const todosRestaurantes = (req, res) => {
    Restaurante.find()
        .then((restaurantes) => {
            if (Restaurante.length < 0) {
                res.status(204).json({ message: 'não existem restaurantes cadastrados' })
            } else {
                res.status(200).json(restaurantes)
            }
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

//function checaSenha(senhaHash, senha) {
//    return bcrypt.compareSync(senhaHash, senha)
//}

const cadastroRestaurante = (req, res) => {
    const { nome, senha, restaurante, especialidades, rua } = req.body
    try {
        bcrypt.compare(senha, senhaHash, function (err, result) {
            console.log(result)
            if (result) {

                try {
                    const restaurante = new Restaurante({
                        nome,
                        restaurante,
                        especialidades,
                        rua
                    });

                    restaurante.save()
                        .then((restaurante) => {
                            res.status(201).json(restaurante);
                        })
                        .catch(err => next(err));
                } catch (e) {
                    return res.status(401).json({ error: 'erro' });
                }
            }
        })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ error: 'erro' });
    }
}

const adicionarComentario = (req, res) => {
    const { id } = request.params
    const { avaliacao, nota } = request.body
    Restaurante.findByIdAndUpdate(id, { comentario })
    try {
        const comentario = new Restaurante.comentario({
            avaliacao,
            nota
        });
        comentario.push()
            .then((comentario) => {
                res.status(201).json(comentario);
            })
            .catch(err => next(err));
    } catch (e) {
        return res.status(401).json({ error: 'erro' });
    }
}

module.exports = {
    todosRestaurantes,
    restaurantePorId,
    cadastroRestaurante,
    adicionarComentario
}
