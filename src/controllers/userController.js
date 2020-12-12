const { res, req } = require('express')
const Users = require('../models/user')
const bcrypt = require("bcrypt")


const createUser = async (req, res, next) =>{
    let {name, email, password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new Users({
        name,
        email,
        password: hashedPassword,
    })
    newUser.save()
    .then((newUser) => {
        res.status(201).json(newUser)
    })
    .catch(err => next(err))

}

module.exports = {
    createUser
    
}