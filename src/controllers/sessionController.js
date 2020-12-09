const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth.js')


const registerAdmin = async (request, response) => {
    const { name, email, password } = request.body
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    User.create({
        name: name,
        email: email,
        hashPass: hashedPassword
    })
    .then((res) => { response.status(200).json({ message: `Usuário criado com sucesso`, res }) })
    .catch(err => { response.status(500).json(err) })
}

function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password)
}

const accessToken = async (request, response) => {
    try {
        const { name, password: passwordEntry } = request.body;

        User.findOne({ name: name })
            .then((user) => {
                const { id, name, hashPass } = user;
                try {
                    checkPassword(passwordEntry, hashPass);
                } catch (err) { response.status(401).json({ message: `Senha incorreta!` }) }

                try {
                    return response.status(200).json({
                        user: {
                            id,
                            name
                        },
                        token: jwt.sign({ id }, authConfig.secret, {
                            expiresIn: authConfig.expiresIn
                        })
                    })
                }
                catch (err) { return response.status(401).json({ error: err }) }

            })
            .catch(err => { response.status(203).json({ message: `Não encontramos esse usuário cadastrado na nossa base de dados` }) })
    }
    catch (err) { response.status(500).json }
}


module.exports = {
    registerAdmin,
    accessToken
}