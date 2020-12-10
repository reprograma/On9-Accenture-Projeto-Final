const Usuario = require('../models/usuarios');
const bcrypt = require('bcrypt')
const { senhaHash } = require ('../helpers/usuario')


const todosUsuarios = (req, res) => {
    Usuario.find()
        .then((usuarios) => {
            if (usuarios) {
                res.status(204).send({ message: 'não existem usuarios cadastrados' })
            } else {
                res.status(200).json(usuarios)
            }
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

const cadastroUsuario = async (req, res, next) => {
    const { nome, email, senha } = req.body
    const salt = bcrypt.genSaltSync(10)

    try {
        const hasheaSenha = await senhaHash (senha, salt, res)
        console.log(hasheaSenha)
        const usuario = new Usuario({
            nome,
            email,
            hasheaSenha,
        })
        usuario.save()
            .then((usuario) => {
                res.status(200).json(usuario)
            }).catch((err) => {
                return res.status(500).json(err)
            })
    } catch (e) {
        return res.status(400).json(e)
    }
}


module.exports = {
    todosUsuarios,
    cadastroUsuario
}
