const { req, res } = require('express');
const mongoose = require('mongoose');
const { userSchema } = require('../validators/userValidator');
const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

const cadastrarUser = async(req, res, next) => {
   
    const { nome, sobrenome, endereco, nascimento, email, senha } = req.body;
    const salt = bcrypt.genSaltSync(bcryptSalt);

    try {
        const validacaoUser = await userSchema.validate(req.body);
        
        const novoUser = new User(validacaoUser);

        User.findOne({ email: validacaoUser.email })
            .then(async existeUser => {
                if (existeUser) {
                    return res.status(400).json({
                        errors: ['Já existe uma conta com esse e-mail']
                    })
                }

        const senhaEncriptada = await bcrypt.hashSync(senha, salt);
        novoUser.senha = senhaEncriptada;

                novoUser.save()
                    .then((user) => {
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


const deletarUser = async(req, res) =>{
    const { id } = req.params
    console.log(id)
     User.findByIdAndDelete(id)
         .then(() => {
             res.status(200).json('Cadastro removido com sucesso');
         })
         .catch((err) => {
             throw new Error(err);
         });
 }

module.exports = {
    cadastrarUser,
    deletarUser,
}