const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const Users = require('../models/User');

function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password);
  }
  
exports.accessToken = (req, res) => {

  try {
    const { email, password: passwordEntry } = req.body;
    Users.findOne({email: email})
      .then((user) => {
        const { id, email, password } = user;
       if(!checkPassword(passwordEntry, password)) {
            return res.status(401).json({ error: 'Incorret Password. Try again!' })
          } 
        try {
          return res.json({
            user: {
              id,
              email,
            },
            token: jwt.sign({ id }, `${process.env.SECRET}`, {
              expiresIn: `${process.env.EXPIRESIN}`,
            }),
          });
        } catch (e) {
          return res.status(401).json({ error: 'erro' });
          console.log(user);
        }
      }) 
      .catch((error) => {
        return res.status(401).json({ error: 'user not found' });
        
      });
  
  } catch (e) {
    return res.status(401).json({ error: 'erro' });
  }

}