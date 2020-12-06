const { res, req } = require('express')
const Users = require('../models/user')


const createUser = (req, res, next) =>{
    let {name, email, password} = req.body
    
    const newUser = new Users({
        name,
        email,
        password,
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