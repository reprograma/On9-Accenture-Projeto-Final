const { req, res } = require('express');
const mongoose = require('mongoose');
const { signupClienteSchema } = require('../validators/cliente');
const Cliente = require('../model/Cliente');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const salvarCliente = async(req, res, next) => {
    const { nome, telefone, endereco, email, senha } = req.body;
    const salt = bcrypt.genSaltSync(bcryptSalt);

    try {
        const validacaoCliente = await signupClienteSchema.validate(req.body);

        const cliente = new Cliente(validacaoCliente);

        Cliente.findOne({ email: validacaoCliente.email })
            .then(async existeCliente => {
                if (existeCliente) {
                    return res.status(400).json({
                        errors: ['Já existe uma conta com esse e-mail']
                    })
                }

                const senhaEncriptada = await bcrypt.hashSync(senha, salt);
                cliente.senha = senhaEncriptada;
                cliente.save()
                    .then((cliente) => {
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
    salvarCliente,
}