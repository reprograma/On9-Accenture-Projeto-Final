const express = require('express');
const User = require('../models/user')
const { request, response } = require("express")
//const jwt = require('jsonwebtoken')
//const authConfig = require('../config/auth.json')


const createUser = async (request, response) => {
    const { email } = request.body;

    try {
        if (await User.findOne({ email }))
            return response.status(400).send({ error: "User already exists" });

        const user = await User.create(request.body);

        user.password = undefined

        return response.send({ user })

    } catch (err) {
        return response.status(400)({ error: 'Registration failed' });
    }
}

const allUsers = (request, response) => {
    User.find()
        .then((list) => response.status(200).json(list))
        .catch((err) => response.status(400));
};


module.exports = {
    createUser,
    allUsers
}
