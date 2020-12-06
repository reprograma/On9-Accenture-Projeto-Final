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


const signUp = async (req, res) => {
    const { password } = req.body
    const salt = bcrypt.genSaltSync(bcryptSalt)

    try {
        const validatedBody = await signupUserSchema.validate(req.body)

        const user = new User(validatedBody)

        User.findOne({ email: validatedBody.email }).then(async (existingUser) => {
            if (existingUser) {
                return res.status(400).json({
                    error: ["Conta de e-mail já cadastrado."],
                })
            }

            const passwordHashed = await bcrypt.hashSync(password, salt)
            user.password = passwordHashed

            user.save()
                .then((user) => res.status(200).json(user))
                .catch((err) => {
                    return res.status(500).json(err)
                })
        })
            .catch((err) => {
                res.status(400).json(err)
            })
    } catch (e) {
        return res.status(400).json(e)
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

module.exports = { deleteUser, signUp, getUser, getUserById, createUser }