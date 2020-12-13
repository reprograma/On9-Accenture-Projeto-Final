const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Anunciante = require('../model/Anunciante');
const Cliente = require('../model/Cliente');


function verificarSenha(senhaEntrada, senha) {
    return bcrypt.compareSync(senhaEntrada, senha);
}

exports.accessTokenAnunciante = (req, res) => {
    try {
        const { mail, senhaEntrada } = req.body;

        Anunciante.findOne({ email: mail })
            .then((anunciante) => {
                let { id, email, senha } = anunciante;

                try {
                    verificarSenha(senhaEntrada, senha);
                    if (!(verificarSenha(senhaEntrada, senha))) {
                        return res.status(401).json({ error: 'senha incorreta' });
                    }
                } catch (e) {
                    return res.status(401).json({ error: 'senha does not match' });
                }

                try {
                    return res.json({
                        anunciante: {
                            id,
                            email,
                        },
                        token: jwt.sign({ id }, `${process.env.SECRET}`, {
                            expiresIn: `${process.env.EXPIRESIN}`,
                        }),
                    });
                } catch (e) {
                    return res.status(401).json({ error: 'erro no retorno' });
                }

            })
            .catch((e) => {
                return res.status(401).json({ error: 'anunciante não encontrado' });
            });

    } catch (e) {
        return res.status(401).json({ error: 'erro' });
    }
}

exports.accessTokenCliente = (req, res) => {
    try {
        const { mail, senhaEntrada } = req.body;

        Cliente.findOne({ email: mail })
            .then((cliente) => {
                let { id, email, senha } = cliente;

                try {
                    verificarSenha(senhaEntrada, senha);
                    if (!(verificarSenha(senhaEntrada, senha))) {
                        return res.status(401).json({ error: 'senha incorreta' });
                    }
                } catch (e) {
                    return res.status(401).json({ error: 'senha does not match' });
                }

                try {
                    return res.json({
                        cliente: {
                            id,
                            email,
                        },
                        token: jwt.sign({ id }, `${process.env.SECRET}`, {
                            expiresIn: `${process.env.EXPIRESIN}`,
                        }),
                    });
                } catch (e) {
                    return res.status(401).json({ error: 'erro no retorno' });
                }

            })
            .catch((e) => {
                return res.status(401).json({ error: 'cliente nao encontrado' });
            });

    } catch (e) {
        return res.status(401).json({ error: 'erro' });
    }
}