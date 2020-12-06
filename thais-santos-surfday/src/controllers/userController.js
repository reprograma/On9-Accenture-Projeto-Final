const { res, req } = require('express')
const user = require('../models/user.json')

const createUser = (req, res) =>{
    let {name, email, password} = req.body

    const newUser = { 
        id: Math.random().toString(32).substr(2,9),
        name: name,
        email: email,
        password: password,
    }

    user.push(newUser)
    res.status(201).json(newUser)

}

module.exports = {
    createUser
    
}