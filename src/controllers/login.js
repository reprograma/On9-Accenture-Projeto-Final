const jwt = require("jsonwebtoken");
const config = require("../config");
const bcrypt = require("bcrypt");
const User = require("../models/User");

function checkPassword(passwordEntry, password) {
  return bcrypt.compareSync(passwordEntry, password);
}

exports.accessToken = (req, res) => {
  try {
    const { email, password: passwordEntry } = req.body;

    User.findOne({ email: email })
      .then((user) => {
        const { id, email, password: hashPassword, tipo } = user;

        try {
          checkPassword(passwordEntry, hashPassword); //comparando a senha de entrada com a do banco
        } catch (e) {
          return res.status(401).json({ error: "password does not match" });
        }

        try {
          return res.json({
            //se a senha conferiu, retorna id e nome do usuário
            user: {
              id,
              email,
              tipo
            },
            token: jwt.sign({ id }, config.secret, {
              //gera o token a partir do id
              expiresIn: config.expiresIn,
            }),
          });
        } catch (e) {
          return res.status(500).json({ error: "erro" });
        }
      })
      .catch((e) => {
        return res.status(404).json({ error: "user not found" });
      });
  } catch (e) {
    return res.status(500).json({ error: "erro" });
  }
};
