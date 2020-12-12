const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    let authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(403).json({ message: 'Please, login' });
    }

    try {
        const user = jwt.verify(authorization.substring(7), process.env.SECRET);

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.userId = user.id;

        return next();
    } catch (e) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
}