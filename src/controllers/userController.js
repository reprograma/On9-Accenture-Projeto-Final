const express = require('express');
const User = require('../models/user')
const { request, response } = require("express")


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



module.exports = {
    createUser
}
