const mongoose = require('mongoose')
const User = require('../models/user')
const { signupUserSchema } = require('../validators/user')
const bcrypt = require('bcrypt')
const bcryptSalt = 8

const getUser = function (req, res, next) {
    User.find()
        .then((user) => {
            res.status(200).json(user)
        })
        .catch((err) => next(err))
}

const getUserById = function (req, res, next) {
    const { id } = req.params
    User.findById(id)
        .then((user) => {
            res.status(200).json(user)
        })
        .catch((err) => next(err))
}

const createUser = async (request, response, next) => {
    const { name, password, email } = request.body
    const salt = bcrypt.genSaltSync(bcryptSalt);
    try {
        const hashPass = await bcrypt.hashSync(password, salt);
        const newUser = new User({
            name,
            email,
            hashPass
        })

        newUser.save()
            .then((users) => {
                response.status(201).json(users);
            })
            .then(() => {
                response.send('Usuário Criado!')
            })
            .catch(err => next(err));
    } catch (e) {
        return response.status(401).json({ error: 'Error' });
    }
}

const deleteUser = function (req, res) {
    const { id } = req.params

    User.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: `Usuário deletado com sucesso.` })
        })
        .catch((err) => {
            throw new Error(err)
        })
}

module.exports = { deleteUser, getUser, getUserById, createUser }