const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth');
const bcrypt = require('bcrypt');
const Mentor = require('../models/Mentor');

function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password);
}

const accessToken = async(request, response) => {
    try {
        const { mentorName, password: passwordEntry } = request.body;

        Mentor.findOne({ mentorName: mentorName })
            .then((user) => {
                const { id, mentorName, hashPass } = user;
                try {
                    checkPassWord(passwordEntry, hashPass)
                } catch (err) {
                    return response.status(401).json({ error: 'Senha incorreta' })
                }

                try {
                    return response.status(200).json({
                        user: {
                            id,
                            mentorName
                        },
                        token: jwt.sign({ id }, authConfig.secret, {
                            expiresIn: authConfig.expiresIn
                        })
                    })
                } catch (err) {
                    return response.status(401).json({ error: err })
                }
            })
            .catch((e) => {
                return response.status(401).json({
                    message: `Usuário não encontrado na nossa base de dados`
                })
            })

    } catch (error) {
        console.log(error)

    }
}


module.exports = {
    accessToken
}