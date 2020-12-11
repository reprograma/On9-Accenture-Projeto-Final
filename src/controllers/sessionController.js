const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerAdmin = async (request, response) => {
    const { name, email, password } = request.body

    if (!password.length > 7) { return response.status(401).json('Insira uma senha numérica com mais de 7 dígitos') }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

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
    const { email, password: passwordEntry } = request.body;

    User.findOne({ email: email })
        .then((user) => {

            const { id, email, hashPass } = user;

            if (!checkPassword(passwordEntry, hashPass)) { return response.status(401).json({ message: `Senha incorreta!` }) }

            return response.status(200).json({
                user: {
                    id,
                    email
                },
                token: jwt.sign({ id },`${ process.env.SECRET}`, {
                    expiresIn: `${process.env.EXPIRESIN}`
                })
            })


        })
        .catch(err => { response.status(203).json({ message: `Não encontramos esse usuário cadastrado na nossa base de dados` }) })
}




module.exports = {
    registerAdmin,
    accessToken
}