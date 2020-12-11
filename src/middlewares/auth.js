const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (request, response, next) => {
    const authHeader = request.headers.authorization;
    if (!authHeader) { return response.status(401).json({ error: `The token wasn't provided` }) }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.SECRET);
        request.id = decoded.id
        return next()
    }
    catch (err) { return response.status(401).json({ error: `The token is invalid` }) }
}