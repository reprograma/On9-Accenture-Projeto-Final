const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels.js');

function verificarSenha(senhaEntrada, senha) {
  console.log('senhaEntrada: ', senhaEntrada);
  console.log('senha: ', senha);
    return bcrypt.compareSync(senhaEntrada, senha);
  }
  
  const loginUser = (req, res) => {
    try {
      const { email, senha: senhaEntrada } = req.body;
      console.log('email: ', email);
      console.log('senha: ', senhaEntrada);
      User.findOne({email: email})
        .then((user) => {
            const {id, nome, senha: senhaEncriptada } = user;
            console.log('verificar senha');
            try {
              if (!verificarSenha(senhaEntrada, senhaEncriptada)) {
                return res.status(401).json({ error: 'senha errada' });
              }
            } catch(e) {
              return res.status(401).json({ error: 'senha errada' });
            }
  
            try {
              return res.json({
                user: {
                  id,
                  nome,
                },
                token: jwt.sign({ id }, process.env.SECRET, {
                  expiresIn: process.env.EXPIRES_IN,
                }),
              });
            } catch (e) {
              return res.status(401).json({ error: 'erro' });
            }
  
        })
        .catch((e) => {
          return res.status(401).json({ error: 'usuário não encontrado' });
        });
  
    } catch (e) {
      return res.status(401).json({ error: 'erro' });
    }
  }

  module.exports = {
    loginUser,
}