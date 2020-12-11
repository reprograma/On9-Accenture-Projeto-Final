//const { res} = require('express')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const bcryptSalt = 8;
const signupUserSchema = require('../validators/user')
const Users = require('../models/User');

 exports.post = async (req, res) => {
  const { password } = req.body
  const salt = bcrypt.genSaltSync(bcryptSalt)

  try {
    const validatedBody = await signupUserSchema.validate(req.body)

    const user = new Users(validatedBody)

    Users.findOne({ email: validatedBody.email })
      .then(async (existingUser) => {
        if (existingUser) {
          return res.status(400).json({
            error: [`User already exists`]
          })
        }

        const passwordHashed = await bcrypt.hashSync(password, salt)
        user.password = passwordHashed

        user.save()
          .then((user) => res.status(200).json(user))
          .catch((err) => {
            return res.status(500).json(err)
          })
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  } catch (e) {
    return res.status(400).json(e)
  }
}


/*exports.post = async (req, res, next) => { 
    const { name, password, email, city, type, description } = req.body;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    try {
     /* Users.findOne({email: email})
      .then( (existingUser) => {
        if(existingUser) {
          return res.status(400).json({
            error: ["User already exists"]
          })
        }

        const hashPass = bcrypt.hashSync(password, salt);

        const newUser = new Users ({
          name, 
          email,
          hashPass,
          city, 
          type,
          description,
      })

      newUser.save()
        .then((user) => res.status(201).json(user))
        .catch((err) => next (err))
     /* }) 
      .catch((err) => {
      res.status(400).json(err)
    }) 

  } catch (err) {
    res.status(400).json(err)
  }
} */

exports.getAll = (req, res, next) => {
  Users.find() 
    .then((users) => {
        res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({ message: err })
      console.log('ERRO')
      next(err)
      })
}

exports.getByCity = (req, res) => {
  const {city}  = req.query;

    Users.find({city: city})
      .then((user) => {
          res.status(200).json(user)
      }) .catch((error) => {
            res.status(400).json({ error: 'City not found' })
          })
}

exports.getByGameType = (req, res) => {
  const {type} = req.query;

 Users.find({type: type})
      .then((user) => {
          res.status(200).json(user)
      }) .catch((error) => {
          res.status(400).json({ error: 'Type not found' })
      })
}
