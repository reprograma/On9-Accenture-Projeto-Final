const jwt = require("jsonwebtoken");
const config = require("../config");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, config.secret);
    req.userId = decoded.id;
    req.isAdmin = decoded.tipo == 1;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid" });
  }
};
