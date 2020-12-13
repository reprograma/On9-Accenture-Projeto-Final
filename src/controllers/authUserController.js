const express = require("express");
const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

function generateToken(params = {}) {
    jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: 43200
    })
}     

const userAuthenticate = async (request, response) =>{
    const {email, password} = request.body;
    
    const user = await User.findOne({ email }).select('+password');

    if(!user)
    return response.status(400).send({ error: 'Ops! User not found!'})

    if(!await bcrypt.compare(password, user.password))
    return response.status(400).send({ error: 'Invalid password' })
    
    user.password = undefined

    response.send({
        user,
        token: generateToken({ id: user.id })
    })
}    

module.exports = {
    userAuthenticate,
    generateToken
}