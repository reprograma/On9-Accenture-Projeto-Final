const { req, res } = require('express');
const mongoose = require('mongoose');
const { signupAnuncianteSchema } = require('../validators/anunciante');
const Anunciante = require('../model/Anunciante');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const salvarAnunciante = async(req, res, next) => {
    const { nome, telefone, endereco, email, senha } = req.body;
    const salt = bcrypt.genSaltSync(bcryptSalt);

    try {
        const validacaoAnunciante = await signupAnuncianteSchema.validate(req.body);

        const anunciante = new Anunciante(validacaoAnunciante);

        Anunciante.findOne({ email: validacaoAnunciante.email })
            .then(async existeAnunciante => {
                if (existeAnunciante) {
                    return res.status(400).json({
                        errors: ['Já existe uma conta com esse e-mail']
                    })
                }

                const senhaEncriptada = await bcrypt.hashSync(senha, salt);
                anunciante.senha = senhaEncriptada;
                anunciante.save()
                    .then((anunciante) => {
                        res.status(201).json({ mensagem: 'Cadastro realizado com sucesso' });
                    })
                    .catch(err => next(err))
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    } catch (e) {
        return res.status(400).json(e)
    }
}

module.exports = {
    salvarAnunciante,
}