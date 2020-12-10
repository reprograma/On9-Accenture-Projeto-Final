const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const bcryptSalt = 9
const Home = require('../models/Home')



exports.createNewHome = async (request, response,) => {
    const { name, email, password, contact, city, neighborhood, homeDescription, available } = request.body
    const salt = bcrypt.genSaltSync(bcryptSalt)

    try {
        const hashPass = await bcrypt.hashSync(password, salt)

        const newHome = new Home({
            name,
            email,
            hashPass,
            contact,
            city,
            neighborhood,
            homeDescription,
            available
        })
        Home.findOne({ email: email })
            .then(registeredEmail => {

                if (registeredEmail) {
                    return response.status(400).json({ error: `Já existe uma conta cadastrada com este email.` })
                }
                newHome.save()
                    .then(newHome =>
                        response.status(200).json(newHome))
                    .catch(error =>
                        response.status(500).json({ error: `Erro ao salvar informações.` }))
            })
    } catch (error) {
        return response.status(400).json({ error: `Não foi possível cadastrar.` })
    }
}

exports.getAll = (request, response) => {
    Home.find({ available: true }, { "name": 1, "contact": 1, "city": 1, "neighborhood": 1, "homeDescription": 1, "available": 1 })
        .then((home) => {
            response.status(200).json(home)
        })
        .catch((error) => {
            response.status(400).json({ error: 'Erro ao na busca.' })
        })
}


exports.getByCity = (request, response) => {
    const city = request.query.city

    Home.find({ city: city }, { "name": 1, "contact": 1, "city": 1, "neigborhood": 1, "homeDescription": 1, "available": true })
        .then((home) => {
            response.status(200).json(home)
        })
        .catch((error) => {
            response.status(400).json({ error: `Erro ao buscar bairro` })
        })
}

exports.getByNeighborhood = (request, response) => {
    const neighborhood = request.query.neighborhood

    Home.find({ neighborhood: neighborhood }, { "name": 1, "contact": 1, "city": 1, "neighborhood": 1, "homeDescription": 1 })
        .then((home) => {
            response.status(200).json(home)
        })
        .catch((error) => {
            response.status(400).json({ error: 'Erro ao buscar bairros.' })
        })
}

exports.getFavCats = (request, response) => {
    const { id } = request.params
    Home.findById(id).populate({ path: 'favoriteCats', select: 'responsible contact city neighborhood nicknameCat characters available' })
        .then((favorites) => {
            response.status(200).json(favorites)
        })
        .catch((error) => {
            response.status(400).json({ error: `Não foi encontrado um miau favorito` })
        })
}


exports.updateAll = (request, response) => {
    const { id } = request.params

    Home.findByIdAndUpdate(id, request.body)
        .then(() => {
            response.status(200).json({ message: `Cadastro atualizado.` })
        })
        .catch((error) => {
            response.status(400).json({ error: `Não foi possível atualizar cadastro` })
        })
}

exports.updateAvailable = (request, response) => {
    const { id } = request.params
    const { available } = request.body

    Home.findByIdAndUpdate(id, { $set: { available } })
        .then(() => {
            response.status(200).json({ message: `Atualizado com sucesso.` })
        })
        .catch((error) => {
            response.status(400).json({ error: 'Não foi possível atualizar.' })
        })
}

exports.updateFavCats = (request, response) => {
    const { id } = request.params
    const { favoriteCats } = request.body

    Home.findByIdAndUpdate(id, { $set: { favoriteCats } })
        .then(() => {
            response.status(200).json({ message: `Miau favoritado!` })
        })
        .catch((error) => {
            response.status(400).json({ error: `Não foi possível favoritar` })
        })
}

exports.deleteHome = (request, response) => {
    const { id } = request.params

    Home.findByIdAndDelete(id)
        .then(() => {
            response.status(200).json({ message: `Lar temporário deletado com sucesso.` })
        })
        .catch((error) => {
            response.status(400).json({ error: `Não foi possível deletar.` })
        })
}    