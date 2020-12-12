const express = require("express");
const Hosting = require("../models/hosting");
const { request, response } = require("express");
const User = require("../models/user");
const bcrypt = require('bcrypt')

const userAuthenticate = async (request, response) =>{
    const {email, password} = request.body;
    
    const user = await User.findOne({ email }).select('+password');


    if(!user)
    return response.status(400).send({ error: 'Ops! User not found!'})

    if(!await bcrypt.compare(password, user.password))
    return response.status(400).send({ error: 'Invalid password' })
    
    response.send({ user })

}    

module.exports = {
    userAuthenticate
}