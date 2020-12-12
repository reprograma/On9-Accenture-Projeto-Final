const User = require("../models/User");
const mongoose = require("mongoose");
const { response, request } = require("express");
const { parse } = require("date-fns");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const auth = async (request, response) => {
    const { email, senha } = request.body;

    if (!email) {
        return response.status(400).json({ message: 'email should not be null' });
    }

    if (!senha) {
        return response.status(400).json({ message: 'senha should not be null' });
    }


    const user = await User.findOne({
        email
    });

    if (!user) {
        return response.status(400).json({ message: 'user not found' });
    }


    if (await bcrypt.compare(senha, user.senha)) {
        return response.status(400).json({ message: 'password incorrect' });
    }

    const token = jwt.sign({
        id: user.id
    }, process.env.SECRET, { expiresIn: '30m' });

    return response.status(200).json({ token: `Bearer ${token}` });
};

module.exports = {
    auth
};
