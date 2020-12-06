const mongoose = require('mongoose')
const Users = require('../models/User')
// const bcrypt = require("bcrypt")
// const bcryptSalt = 8;

exports.getAll = (req, res, next) => {
    Users.find() 
    .then((users) => {
        res.status(200).json(users)
    })
    .catch(err => next(err))
}
