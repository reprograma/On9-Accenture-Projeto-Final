const mongoose = require('express')
const bcrypt = require('bcrypt')
const bcryptSalt = 9
const Cat = require('../models/Cat')

exports.createNewCat = async (request, response) => {
    const { responsible, email, password, contact, city, neighborhood, nicknameCat, aboutTheMiau, available } = request.body
    const salt = bcrypt.genSaltSync(bcryptSalt)

    try {
        const hashPass = await bcrypt.hashSync(password, salt)

        const newCat = new Cat({
            responsible,
            email,
            hashPass,
            contact,
            city,
            neighborhood,
            nicknameCat,
            aboutTheMiau,
            available
        })
        Cat.findOne({ email: email })
            .then(registredEmail => {
                if (registredEmail) {
                    response.status(400).json({ error: `Email já registrado. Informe outro.` })
                }
                newCat.save()
                    .then(newCat =>
                        response.status(200).json(newCat))
                    .catch(error =>
                        response.status(400).json({ error: `Erro ao salvar informações.` }))
            })
    } catch (error) {
        response.status(400).json({ error: `Não foi possível cadastrar. Tente novamente.` })
    }
}

exports.getAll = (request, response) => {
    Cat.find({ available: true }, { "responsible": 1, "contact": 1, "city": 1, "neighborhood": 1, "aboutTheMiau": 1, "available": 1 })
        .then((cat) => {
            response.status(200).json(cat)
        })
        .catch((error) => {
            response.status(400).json({ error: `Não encontrado.` })
        })
}

exports.getByCity = (request, response) => {
    const city = request.query.city

    Cat.find({ city: city, available: true }, { "responsible": 1, "contact": 1, "city": 1, "neighborhood": 1, "aboutTheMiau": 1, "available": 1 })
        .then((cat) => {
            response.status(200).json(cat)
        })
        .catch((error) => {
            response.status(400).json({ error: `Falha na pesquisa.` })
        })
}

exports.getByNeighborhood = (request, response) => {
    const neighborhood = request.query.neighborhood

    Cat.find({ neighborhood: neighborhood, available: true }, { "responsible": 1, "contact": 1, "city": 1, "neighborhood": 1, "aboutTheMiau": 1, "available": 1 })
        .then((cat) => {
            response.status(200).json(cat)
        })
        .catch((error) => {
            response.status(400).json({ error: `Erro ao pesquisar.` })
        })
}

exports.updateRegistration = (request, response) => {
    const { id } = request.params

    Cat.findByIdAndUpdate(id, request.body)
        .then(() => {
            response.status(200).json({ message: `Cadastro atualizado com sucesso!` })
        })
        .catch((error) => {
            response.status(400).json({ error: `Erro ao atualizar.` })
        })
}

exports.updateAvailable = (request, response) => {
    const { id } = request.params
    const { available } = request.body

    Cat.findByIdAndUpdate(id, { $set: { available } })
        .then(() => {
            response.status(200).json({ message: `Campo atualizado.` })
        })
        .catch((error) => {
            response.status(400).json({ error: 'Não foi possível atualizar.' })
        })
}

exports.deleteRegistration = (request, response) => {
    const { id } = request.params

    Cat.findOneAndDelete(id)
        .then(() => {
            response.status(200).json({ message: `Cadastro excluido com sucesso` })
        })
        .catch((error) => {
            response.status(400).json({ error: `Não foi possível excluir` })
        })
}