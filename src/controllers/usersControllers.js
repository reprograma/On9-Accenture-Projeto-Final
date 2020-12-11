//const { res} = require('express')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const bcryptSalt = 8;
const Users = require('../models/User');
const User = require('../models/User');

exports.post = async (req, res, next) => { 
    const { name, password, email, city, type, description } = req.body;
    Users.findOne({email: email})
    .then(async (existingUser) => {
      if(existingUser) {
        return res.status(400).json({
          error: ["User already exists"]
        })
      }

      const newUser = new Users ({
        name, 
        email,
        password,
        city, 
        type,
        description
      })

      newUser
        .save()
        .then((user) => {
          res.status(201).json(user)
        })
        .catch((err) => next (err))
    })
    .catch((err) => {
      res.status(400).json(err)
    })
    
}

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
  const city = req.query.city

    Users.find({ city: city, available: true }, { "name": 1, "email": 1, "password": 1, "city": 1, "type": 1, "description": 1})
      .then((user) => {
          response.status(200).json(user)


      }).catch((error) => {
            response.status(400).json({ error: 'City not found' })
          })
}

/*exports.getByGameType = (req, res, next) {
    const {type} = req.query
} */




//exports.put = (req, res, next)
