const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const bcrypt = require("bcrypt");
const Autor = require('../models/user');

function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password);
}

const accessToken = function (req, res) {
    try {
        const { email, password: passwordEntry } = req.body;

        Autor.findOne({ email: email })
            .then((user) => {
                const { id, email, hashPass } = user;

                try {
                    checkPassword(passwordEntry, hashPass);
                } catch (e) {
                    console.log(e)
                    return res.status(401).json({ error: 'Password does not match. Try again!...' });
                }

                try {
                    return res.json({
                        user: {
                            id,
                            email,
                        },
                        token: jwt.sign({ id }, authConfig.secret, {
                            expiresIn: authConfig.expiresIn,
                        }),
                    });
                } catch (e) {
                    return res.status(401).json({ error: 'Erro! Try again!' });
                }

            })
            .catch((e) => {
                return res.status(401).json({ error: 'Usuário não encontrado!' });
            });

    } catch (e) {
        return res.status(401).json({ error: 'Erro! Tente novamente!' });
    }
}

module.exports = { accessToken }