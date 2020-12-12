const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require ('../config/auth');
const User = require('../models/userModels.js');

function verificarSenha(senhaEntrada, senha) {
    return bcrypt.compareSync(senhaEntrada, senha);
  }
  
  const loginUser = (req, res) => {
    try {
      const { email, senha: senhaEntrada } = req.body;
      console.log(senhaEntrada)
      
      User.findOne({email: email})
        .then((user) => {
            const {id, nome, senha: senhaEncriptada } = user;
            console.log(senhaEncriptada);
            
  
            try {
              verificarSenha(senhaEntrada, senhaEncriptada);
            } catch(e) {
              return res.status(401).json({ error: 'senha errada' });
            }
  
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
          return res.status(401).json({ error: 'usuário não encontrado' });
        });
  
    } catch (e) {
      return res.status(401).json({ error: 'erro' });
    }
  }

  module.exports = {
    loginUser,
}