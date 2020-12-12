const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const User = require('../models/usuarios');

function checkPassword(senhaLogin, senha) {
    return bcrypt.compareSync(senhaLogin, senha)
}
const accessToken = (req, res) => {
    const { nomeUsuario, senha: senhaLogin } = req.body;
    
    User.findOne({ nome: nomeUsuario })
    .then((user) => {

        const { id, nome, hasheaSenha } = user;

        if (!checkPassword(senhaLogin, hasheaSenha)) { return res.status(401).json({ message: `Senha incorreta!` }) }

        return res.status(200).json({
            user: {
                id,
                nome
            },
            token: jwt.sign({ id }, `${process.env.SECRET}`, {
                expiresIn: `${process.env.EXPIRESIN}`
            })
        })


    })
    .catch(err => { res.status(203).json({ message: `Não encontramos esse usuário cadastrado na nossa base de dados` }) })
  
}

module.exports = {
    accessToken
}