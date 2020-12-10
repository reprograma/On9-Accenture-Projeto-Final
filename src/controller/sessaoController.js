const jwt = require('jsonwebtoken');
const authConfig = require('../config/autenticacao');
const bcrypt = require('bcrypt');
const Anunciante = require('../model/Anunciante');

function verificarSenha(senhaEntrada, senha) {
    return bcrypt.compareSync(senhaEntrada, senha);
}

exports.accessToken = (req, res) => {
    try {
        const { mail, senhaEntrada } = req.body;
        console.log('email: ' + mail)
        console.log('senhaEntrada: ' + senhaEntrada)
        Anunciante.findOne({ email: mail })
            .then((anunciante) => {
                let { id, email, senha } = anunciante;

                try {
                    console.log('entrei aqui')
                    verificarSenha(senhaEntrada, senha);
                } catch (e) {
                    return res.status(401).json({ error: 'senha does not match' });
                }

                try {
                    return res.json({
                        anunciante: {
                            id,
                            email,
                        },
                        token: jwt.sign({ id }, authConfig.secret, {
                            expiresIn: authConfig.expiresIn,
                        }),
                    });
                } catch (e) {
                    return res.status(401).json({ error: 'erro no retorno' });
                }

            })
            .catch((e) => {
                return res.status(401).json({ error: 'anunciante not found' });
            });

    } catch (e) {
        return res.status(401).json({ error: 'erro' });
    }
}