const { req, res } = require('express');
const mongoose = require('mongoose');
const { signupAnuncianteSchema } = require('../validators/anunciante');
const Anunciante = require('../model/Anunciante');
const Objeto = require('../model/Objeto');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;


const obterTodos = async(req, res) => {
    Anunciante.find()
        .then((existeAnunciante) => {
            if (existeAnunciante) {
                res.status(200).json(existeAnunciante)
            }
        })
        .catch((e) => {
            res.status(500).json(e)
        })
}

const atualizarAnunciante = async(req, res, next) => {
    const { id } = req.params;

    Anunciante.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.status(200).json({ mensagem: ` ${req.params.id} foi atualizado.` });
        })
        .catch(err => next(err));

}


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
        return res.status(500).json(e)
    }
}

const deletarAnunciante = async(req, res, next) => {
    const { id } = req.params;

    Anunciante.findById(id)
        .then(async(anunciante) => {
            if ((anunciante.objetos).length > 0) {
                anunciante.objetos.forEach(objeto => {
                    Objeto.findById(objeto)
                        .then(async(obj) => {
                            if (obj.isAlugado == true) {
                                return res.status(400).json({ mensagem: 'Não é possivel remover conta com objetos alugados' })
                            }
                            await Objeto.findByIdAndRemove(obj)
                            await Anunciante.findByIdAndRemove(id)
                            res.status(200).json({ mensagem: 'Conta deletada !' })
                        })
                        .catch((err) => {
                            res.status(400).json(err)
                        })
                });
            } else {
                Anunciante.findByIdAndRemove(id)
                    .then(() => {
                        res.status(200).json({ mensagem: 'Conta deletada !' })
                    })
                    .catch((err) => {
                        res.status(400).json(err, { mensagem: 'Não foi possivel deletar conta' })
                    })
            }

        })
        .catch(err => next(err))

}


module.exports = {
    obterTodos,
    atualizarAnunciante,
    salvarAnunciante,
    deletarAnunciante
}