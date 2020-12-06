const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const bcrypt = require("bcrypt");
const Autor = require('../models/post');

function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password);
}

exports.accessToken = (req, res) => {
    try {
        const { login, password: passwordEntry } = req.body;

        Autor.findOne({ login: login })
            .then((user) => {
                const { id, login, hashPass } = user;

                try {
                    checkPassword(passwordEntry, hashPass);
                } catch (e) {
                    return res.status(401).json({ error: 'Password does not match. Try again!...' });
                }

                try {
                    return res.json({
                        user: {
                            id,
                            login,
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
                return res.status(401).json({ error: 'User did not find! Try again!' });
            });

    } catch (e) {
        return res.status(401).json({ error: 'Erro! Try again!' });
    }
}
