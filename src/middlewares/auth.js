const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')
const { promisify } = require('util')

module.exports = async (request, response, next) => {
    const authHeader = request.headers.authorization
    if (!authHeader) {
        return response.status(400).json({ error: `Token não fornecido` })
    }

    const [, token] = authHeader.split(' ')

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret)
        request.userId = decoded.id
        return next()
    } catch (error) {
        return response.status(400).json({ error: `Token inválido` })
    }
}