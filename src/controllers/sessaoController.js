const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth")
const bcrypt = require("bcrypt")
const Vendedor = require("../models/Vendedores")


function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password)
}

exports.accessToken = async (req, res) => {
   
  const { name, password: passwordEntry } = req.body;

  if(name=="Admin") {

  try {
           
        Vendedor.findOne({nome: name})
        .then((user) => {

          const {id, nome, hashPass } = user;

            if(!checkPassword(passwordEntry,hashPass)) {res.status(401).json({message: "Senha incorreta"})}
            
         
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
              return res.status(401).json({ error: 'erro1' });
            }
          
        })
        
        .catch((e) => {
          return res.status(401).json({ error: 'Usuário não encontrado' });
        });

    } catch (e) {
      return res.status(401).json({ error: 'erro2' });
    }

  } else{
    return res.status(401).json({ error: 'Não autorizado' });
  }   
  }
  
