const hosting = require("../models/hosting")
const { request, response } = require("express")
const e = require("express")

/*Mostra todas as hospedagens por estado*/
const getByCity = async (request, response) => {
    try {
        let hostingFromCity = await hosting.find({ city: request.params.city })
        if (hostingFromCity) {
            response.status(200).json(hostingFromCity).send({ message: "Aqui estão as opções de hospedagens acessíveis nessa cidade" })
        } else {
            response.status(400).send({ message: "Infelizmente, ainda não foram cadastradas hospedagens nessa cidade!" })
        }
    } catch (error) {
        response.status(400).send({ message: error.message })
    }
}

/*Mostra todas as hospedagens por cidade*/
const getByState = async (request, response) => {

    try {
        console.log(request.params)
        let hostingFromState = await hosting.find({ state: request.params.state });
        if (hostingFromState) {
            response.status(200).send({ message: "Aqui estão as opções de hospedagens acessíveis nesse estado", hostingFromState });
        } else {
            response.status(400).send({ message: "State not found!" })
        }
    } catch (error) {
        response.status(400).send({ message: error.message })
    }
}

/*Cria nova hospedagem*/
const createHosting = (request, response) => {

    let { name, state, city, phone, accessibility, address, site } = request.body

    const newHosting = new hosting({
        name: name,
        state: state,
        city: city,
        phone: phone,
        accessibility: accessibility,
        address: address,
        site: site
    });

    newHosting.save()
        .then((res) => {
            response.status(201).json({ message: "Hospedagem adicionada ao banco de dados! o/" })
        })
        .catch(err => next(err));

}

/*Deleta hospedagens*/
const deleteHosting = (request, response) =>{

    
}


module.exports = {
    getByCity,
    getByState,
    createHosting
}

