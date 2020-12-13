const express = require("express");
const Hosting = require("../models/hosting");
const { request, response } = require("express");

const allHostings = (request, response) => {
    Hosting.find()
        .then((list) => response.status(200).json(list))
        .catch((err) => response.status(400));
};

const getByCity = (request, response) => {
    let { city } = request.params;
    Hosting.find({ city: city })
        .then((hostings) => {
            if (hostings.length > 0) {
                return response.status(200).json({
                    message: "Essas são as hospedagens que possuem acessbilidade nessa cidade!",
                    hostings
                })
            } else {
                return response.status(204).json({
                    message: "Infelizmente, ainda não há hospedagens cadastradas nessa cidade!"
                })
            }

        }).catch((err) => response.status(500))
};

const getByState = (request, response) => {
    let { state } = request.params
    Hosting.find({ state: state })
        .then((hostings) => { response.status(200).json(hostings) })
        .catch((error) => response.status(500).send({ error }))
};

const createHosting = async (request, response) => {
    let { name, state, city, phone, accessibility, address, site } = request.body;

    try {
        const newHosting = await Hosting.create({ name, state, city, phone, accessibility, address, site })
        response.status(201).json({ message: "Hospedagem adicionada ao banco de dados! o/", newHosting });
    } catch (error) {
        response.status(400).send({ message: error.message });
    }
};

const updateHosting = (request, response) => {
    const { id } = request.params;
    let { name, state, city, phone, accessibility, address, site } = request.body;

    Hosting.findByIdAndUpdate(id, request.body)
        .then(() => response.status(200).json({ message: "Hospedagem atualizada com sucesso!" }))
        .catch(() => response.status(500).json(err))
};

const deleteHosting = (request, response) => {
    const { id } = request.query;

    Hosting.deleteOne(id)
        .then(() => response.status(204).json({ message: "Hospedagem deletada com sucesso!" }))
        .catch(() => response.status(500).json(err))
};

module.exports = {
    allHostings,
    getByCity,
    getByState,
    createHosting,
    updateHosting,
    deleteHosting,
};