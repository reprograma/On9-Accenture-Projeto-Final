const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const TransitAgentUser = require("../models/TransitAgents");
const AmbulanceUser = require("../models/Ambulances");

function checkPassword(passwordEntry, password) {
  return bcrypt.compareSync(passwordEntry, password);
}

exports.accessToken = (req, res) => {
  try {
    const { name, password: passwordEntry } = req.body;
      
    TransitAgentUser.findOne({nome: name})
      .then((user) => {
          const {id, nome, hashPass } = user;

          try {
            checkPassword(passwordEntry, hashPass);
          } catch(e) {
            return res.status(401).json({ error: 'password does not match' });
          }

          try {
            return res.json({
              user: {
                id,
                nome,
              },
              token: jwt.sign({ id }, `${process.env.SECRET}`, {
                expiresIn: `${process.env.EXPIREIN}`,
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
