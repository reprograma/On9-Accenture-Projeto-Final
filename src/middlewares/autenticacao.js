  
const jwt = require('jsonwebtoken');
//const authConfig = require('../config/auth');
const { promisify } = require('util');

module.exports = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("middle")
    if (!authHeader) {
        return res.status(401).json({ error: 'Token não informado' });
    }

    const [, token] = authHeader.split(' ');

    try {
        //const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
        req.userId = decoded.id;
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
}