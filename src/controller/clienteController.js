const { req, res } = require('express');
const mongoose = require('mongoose');
const { signupClienteSchema } = require('../validators/cliente');
const Cliente = require('../model/Cliente');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const obterTodos = async(req, res) => {
    Cliente.find()
        .then((existeCliente) => {
            if (existeCliente) {
                res.status(200).json(existeCliente)
            }
        })
        .catch((e) => {
            res.status(500).json(e)
        })
}

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

const atualizarCliente = async(req, res, next) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'id nao é valido' });
        return;
    }

    Cliente.findByIdAndUpdate(id, req.body)
        .then(() => {
            res.status(200).json({ message: ` ${req.params.id} foi atualizado.` });
        })
        .catch(err => next(err));

}

const deletarCliente = async(req, res, next) => {
    const { id } = req.params;

    Cliente.findById(id)
        .then(async(cliente) => {
            if ((cliente.objetosAlugados).length > 0) {
                return res.status(400).json({ message: 'Faça devolução dos objetos alugados para deletar conta' })
            }
            Cliente.findByIdAndRemove(id)
                .then(() => {
                    res.status(200).json({ message: 'Conta deletada !' })
                })
                .catch((err) => {
                    res.status(400).json(err, { message: 'Não foi possivel deletar conta' })
                })
        })
        .catch(err => next(err))
}




module.exports = {
    obterTodos,
    atualizarCliente,
    salvarCliente,
    deletarCliente
}