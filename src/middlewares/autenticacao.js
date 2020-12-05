const jwt = require('jsonwebtoken');
const autenticacaoConfig = require('../config/autenticacao');
const { promissify } = require('util');

module.exports = async(req, res, next) => {
    const autenticacaoHeader = req.headers.authorization;
    if (!autenticacaoHeader) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }
    const [, token] = autenticacaoHeader.split(' ');

    try {
        const decoded = await promissify(jwt.verify)(token, autenticacaoConfig.secret);
        req.anuncianteId = decoded.id;
        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Token invalid' });
    }
}