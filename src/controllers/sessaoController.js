const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth")
const bcrypt = require("bcrypt")
const Vendedor = require("../models/Vendedores")


function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password)
}

exports.accessToken = async (req, res) => {
    try {
      const { name, password: passwordEntry } = req.body;
        
      Vendedor.findOne({nome: name})
        .then((user) => {
            const {id, nome, hashPass } = user;

            if(!checkPassword(passwordEntry,hashPass)) {res.status(401).json({message: "senha incorreta"})}
  
            try {
              return res.json({
                user: {
                  id,
                  nome,
                },
                token: jwt.sign({ id }, authConfig.secret, {
                  expiresIn: authConfig.expiresIn,
                }),
              });
            } catch (e) {
              return res.status(401).json({ error: 'erro' });
            }
  
        })
        .catch((e) => {
          return res.status(401).json({ error: 'user not found' });
        });
  
    } catch (e) {
      return res.status(401).json({ error: 'erro' });
    }
  }
  