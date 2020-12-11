const mongoose = require('mongoose')
const { response } = require('../app')
const Users = require('../models/User')
/*const bcrypt = require("bcrypt");
//const User = require('../models/User');
const bcryptSalt = 8;
*/

exports.getAll = (req, res, next) => {
    Users.find() 
        .then((users) => {
            res.status(200).json(users)
        })
        .catch(err => {
        res.status(500).json({ message: err })
        console.log('ERRO')
          //  next(err)
        })
}

exports.getByCity = (req, res, next) => {
    const {city} = req.body;

    Users.find({city: city})
    .then((users) => {
        response.status(200).json(users)
    })
    .catch(err => {
        next(err)
    })
}

/*exports.getByGameType = (req, res, next) {
    const {type} = req.query
} */

exports.post = async (req, res, next) => { 
    const { name, email, city, type, description } = req.body;
    //const salt = bcrypt.genSaltSync(bcryptSalt);
    try {
     // const hashPass = await bcrypt.hashSync(password, salt);
  
      const newUser = new Users({
        name,
        email,
       // hashPass,
        city,
        type,
        description,
      });
      newUser.save()
        .then((user) => {
            res.status(201).json(user);
        })
        .catch(err => next(err));
    } catch (e) {
      return res.status(401).json({ error: 'erro' });
      console.log('ERRO')
    }
  }

//exports.put = (req, res, next)
  