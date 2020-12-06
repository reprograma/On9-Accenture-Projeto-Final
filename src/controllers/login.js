const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')
const bcrypt = require('bcrypt')
const Admin = require('../models/Admin')

function checkPassword(passwordEntry, password) {
  return bcrypt.compareSync(passwordEntry, password)
}

exports.accessToken = (req, res) => {
  try {
    const { nameAdmin, password: passwordEntry } = req.body
    Admin.findOne({ name: nameAdmin })
      .then((admin) => {
        const { id, name, password } = admin

        try {
          checkPassword(passwordEntry, password)
        } catch (e) {
          return res.status(401).json({ error: `Senha não corresponde.` })
        }

        try {
          return res.json({
            admin: {
              id,
              name,
            },
            token: jwt.sign({ id }, authConfig.secret, {
              expiresIn: authConfig.expiresIn,
            }),
          })
        } catch (e) {
          return res.status(401).json({ error: "erro" })
        }
      })
      .catch((e) => {
        return res.status(401).json({ error: `Administrador não encontrado.` })
      })
  } catch (e) {
    return res.status(401).json({ error: "erro" })
  }
}
