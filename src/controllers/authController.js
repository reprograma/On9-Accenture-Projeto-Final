const express = require('express');
const User = require('../models/user')
const { request, response } = require("express")


const CreateUser = async (req, res) =>{
    const { email } = req.body;

    try{
        if (await User.findOne({ email })){
            return res.status(400).send({ error: 'User already exists'})
        }

        const user = await User.create(request.body);

        user.password = undefined

        return res.send({ user })
    }catch (err) {
        return res.status(400).send({ error: 'Registration failed'})
    }
}

module.exports = {
    CreateUser
}
