const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.js')
const bcrypt = require("bcrypt")
const user = require('../models/user.js')

function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password)
}

const accessToken = async (request, response) => {
    const { email, password: passwordEntry } = request.body;
    try {

        user.findOne({ email: email })
            .then((user) => {

                const { id, email, password } = user;

                if (!checkPassword(passwordEntry, password)) { return response.status(401).json({ message: `Senha incorreta!` }) }
                return response.status(200).json({
                    user: {
                        id,
                        email
                    },
                    token: jwt.sign({ id }, authConfig.secret, {
                        expiresIn: authConfig.expiresIn,
                    })
                })


            })
            .catch(err => { response.status(203).json({ message: `Não encontramos esse usuário cadastrado na nossa base de dados` }) })

    } catch (err) { return response.status(500).json(err) }
}

module.exports = {
    
    accessToken
}