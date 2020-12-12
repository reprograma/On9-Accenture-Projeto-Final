const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const { promisify } = require("util");

module.exports = async (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).json({ erro: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    //const decoded = await promisify(jwt.verify)(token, authCofig.secret);
    const decoded = await promisify(jwt.verify)(token, `${process.env.SECRET}`);
    request.userId = decoded.id;
    return next();
  } catch (err) {
    return response.status(401).json({ error: "Token invalid" });
  }
};
