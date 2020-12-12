const User = require("../models/User");
const mongoose = require("mongoose");
const { response, request } = require("express");
const { parse } = require("date-fns");
const bcrypt = require("bcryptjs");


const idValidation = async id => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return { message: "Specified id is not valid" };
    }

    if (!(await User.findById(id))) {
        return { message: "Specified id is not valid" };
    }

    return undefined;
}

const registerUser = async (request, response) => {
    const { nome, email, senha } = request.body;
    const newUser = new User({
        nome, email, senha: bcrypt.hashSync(senha)
    });



    if (await User.findOne({ email })) {
        response.status(400).json({ message: "User já cadastrado." });
        return;
    }
    newUser
        .save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch((err) => next(err));
};

const updateUser = async (request, response) => {

    request.body.senha = bcrypt.hashSync(request.body.senha);

    User.findByIdAndUpdate(request.userId, request.body)
        .then(() => {
            response
                .status(200)
                .json({ message: ` ${request.params.id} is updated successfully.` });
        })
        .catch((err) => {
            response.json(err);
        });
};

module.exports = {
    registerUser,
    updateUser
};
