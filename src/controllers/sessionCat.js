const jwt = require('jsonwebtoken')
const authConfig = require('../config/authCat')
const bcrypt = require('bcrypt')
const Cat = require('../models/Cat')

function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password)
}

exports.createToken = (request, response) => {
    try {
        const { email, password: passwordEntry } = request.body

        Cat.findOne({ email: email })
            .then((userCat) => {
                const { id, email, hashPass } = userCat

                try {
                    checkPassword(passwordEntry, hashPass)
                } catch (error) {
                    return response.status(400).json({ error: `Senha inválida` })
                }

                try {
                    return response.json({
                        userCat: {
                            id,
                            email,
                        },
                        token: jwt.sign({ id }, authConfig.secret, {
                            expiresIn: authConfig.expiresIn,
                        }),
                    })
                } catch (error) {
                    return response.status(400).json({ error: `Erro ao processar` })
                }

            })
            .catch((error) => {
                return response.status(400).json({ error: `Usuário não encontrado` })
            })
    } catch (error) {
        return response.status(400).json({ error: `Erro ao gerar o token` })
    }
}