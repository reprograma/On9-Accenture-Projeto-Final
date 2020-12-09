const jwt = require('jsonwebtoken')
const configAuth = require('../config/auth')
const bcrypt = require('bcrypt')
const Home = require('../models/Home')

function checkPass(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password)
}

exports.accessToken = (request, response) => {
    try {
        const { email, password: passwordEntry } = request.body

        Home.findOne({ email: email })
            .then((user) => {
                const { id, email, hashPass } = user

                try {
                    checkPass(passwordEntry, hashPass)
                } catch (error) {
                    return response.status(400).json({ error: `Senha inválida.` })
                }

                try {
                    return response.json({
                        user: {
                            id,
                            email,
                        },
                        token: jwt.sign({ id }, configAuth.secret, {
                            expiresIn: configAuth.expiresIn,
                        }),
                    })
                } catch (error) {
                    return response.status(400).json({ error: `Erro no processamento.` })
                }

            })
            .catch((error) => {
                return response.status(401).json({ error: `Usuário não encontrado.` })
            })
    } catch (error) {
        return response.status(400).json({ error: `Erro ao gerar token.` })
    }
}
