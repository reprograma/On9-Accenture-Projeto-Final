const express = require("express");
const Hosting = require("../models/hosting");
const { request, response } = require("express");

/*Mostra todas as hospedagens*/
const allHostings = (request, response) => {
    Hosting.find()
        .then((list) => response.status(200).json(list))
        .catch((err) => next(err));
};

/*Mostra todas as hospedagens por estado*/
const getByCity = async (request, response) => {
    try {
        let hostingFromCity = await Hosting.find({ city: request.query.city });
        if (hostingFromCity) {
            response
                .status(200)
                .json(hostingFromCity)
                .send({
                    message:
                        "Aqui estão as opções de hospedagens acessíveis nessa cidade",
                });
        } else {
            response
                .status(400)
                .send({
                    message:
                        "Infelizmente, ainda não foram cadastradas hospedagens nessa cidade!",
                });
        }
    } catch (error) {
        response.status(400).send({ message: error.message });
    }
};

/*Mostra todas as hospedagens por cidade*/
const getByState = async (request, response) => {
    try {
        let hostingFromState = await Hosting.find({ state: request.query.state });
        if (hostingFromState) {
            response
                .status(200)
                .send({
                    message:
                        "Aqui estão as opções de hospedagens acessíveis nesse estado",
                    hostingFromState,
                });
        } else {
            response.status(400).send({ message: "State not found!" });
        }
    } catch (error) {
        response.status(400).send({ message: error.message });
    }
};

/*Cria nova hospedagem*/
const createHosting = (request, response) => {
    let { name, state, city, phone, accessibility, address, site } = request.body;

    const newHosting = new Hosting({
        name,
        state,
        city,
        phone,
        accessibility,
        address,
        site,
    });

    newHosting
        .save()
        .then((res) => {
            response
                .status(201)
                .json({ message: "Hospedagem adicionada ao banco de dados! o/" });
        })
        .catch((err) => next(err));
};

/*Atualiza hospedagem*/
const updateHosting = (request, response) => {
    const { id } = request.params;
    const hostingFound = Hosting.find((host) => host.id == id);

    let { name, state, city, phone, accessibility, address, site } = request.body;

    response.status(200).json({ message: "Updated hosting", hosting });
};

/*Deleta hospedagem*/
const deleteHosting = (request, response) => {
    const { id } = request.params;

    let filteredList = Hosting.filter((hosting) => hosting.id != id);
    Hosting = filteredList;

    response.status(204).json({ mensagem: "Postagem deletada com sucesso! :D" });
};

module.exports = {
    allHostings,
    getByCity,
    getByState,
    createHosting,
    deleteHosting,
};
