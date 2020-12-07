var unless = require('express-unless');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { promisify } = require('util');

module.exports = async (req, res, next) => {

    if (req.path === '/usuarios/criar' || req.path === '/login') {
        next();
    } else {
        const authHeader = req.headers.authorization;
        const [token] = authHeader.split(' ');

        try {
            const decoded = await promisify(jwt.verify)(token, authConfig.secret);
            req.userId = decoded.id;
            return next();
        } catch (err) {
            return res.status(401).json({ error: 'Token invalid' });
        }
        next();
    }
};
