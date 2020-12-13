const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'token não informado' });
    }
    const [, token] = authHeader.split(' ');
    try {
        const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
        req.userId = decoded.id; 
        return next();
    } catch (err) {
        return res.status(401).json({error: 'token invalid'});
    }
};