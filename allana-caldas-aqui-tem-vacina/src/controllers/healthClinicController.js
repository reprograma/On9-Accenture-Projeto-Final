const healthClinic = require('../models/HealthClinic.js');
const mongoose = require('mongoose');


const getAll = async (request, response) => {

    healthClinic.find()
        .then((list) => { response.status(200).json(list) })
        .catch(err => { response.status(500).json({ message: err }) })
}

const getByBorough = async (request, response) => {
    const { borough } = request.query;

    healthClinic.find({ borough: borough })
        .then((list) => {
            if (!list.length > 0) { return response.status(200).json({ message: `Não foi encontrada nenhuma Unidade de Saúde no bairro selecionado`, list }) }
            response.status(200).json(list)
        })
        .catch(err => { response.status(500).json(err) })

}

const getByVaccine = async (request, response) => {
    const { vaccine } = request.query;

    healthClinic.find({ "vaccines.name": vaccine })
        .then((list) => {
            if (!list.length > 0) { return response.status(200).json({ message: `A vacina selecionada não foi encontrada em nenhum posto de Saúde` }) }
            response.status(200).json(list)
        })
        .catch(err => { response.status(500).json(err) })
}


const getByVacAndBorough = async (request, response) => {
    const { borough } = request.query;
    const { vaccine } = request.query;

    healthClinic.find({ $and: [{ "vaccines.name": vaccine }, { borough: borough }] })
        .then((list) => {
            if (!list.length > 0) { return response.status(200).json({ message: `Não foram encontrados resultados para sua pesquisa` }) }
            response.status(200).json(list)
        })
        .catch(err => { response.status(500).json(err) })
}


const registerHealthClinic = async (request, response) => {
    const newRegister = request.body;

    healthClinic.create({
        type: newRegister.type,
        address: newRegister.address,
        borough: newRegister.borough,
        openingHours: newRegister.openingHours,
        accessibility: newRegister.accessibility,
        vaccines: newRegister.vaccines,
    })
        .then((newRegister) => { response.status(200).json({ message: `Nova unidade de Saúde registrada com sucesso`, newRegister }) })
        .catch(err => { response.status(500).json({ message: `Infelizmente, o registro de uma nova unidade de Saúde não pode ser efetuada.`, err }) })


}


const updateHealthClinic = async (request, response) => {

    const { id } = request.params;
    if (!mongoose.Types.ObjectId.isValid(id)) { return response.status(400).json({ message: 'O ID inserido é inválido' }) }

    healthClinic.findByIdAndUpdate(id, request.body)
        .then((update) => { response.status(200).json(`A unidade de Saúde selecionada ${request.params.id} foi atualizada com sucesso`, update) })
        .catch((err) => response.status(500).json(err))

}

const updateAddress = async (request, response) => {
    const { id } = request.params;
    const { address } = request.body;

    healthClinic.findByIdAndUpdate(id, { $set: { address: address } })
        .then((update) => { response.status(200).json(`O endereço da unidade de Saúde selecionada ${request.params.id} foi atualizado com sucesso`, update) })
        .catch((err) => response.status(500).json(err))

}

const updateVaccinesList = async (request, response) => {
    const { id } = request.params;
    const { vaccines } = request.body;

    healthClinic.findByIdAndUpdate(id, { $set: { vaccines: vaccines } })
        .then((update) => { response.status(200).json(`A lista de vacinas da unidade de Saúde selecionada ${request.params.id} foi atualizada com sucesso`, update) })
        .catch((err) => response.status(500).json(err))

}



const deleteHealthClinic = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) { return response.status(400).json({ message: 'O ID inserido é inválido' }) }

    healthClinic.findByIdAndDelete(id)
        .then((list) => { response.status(200).json({ message: `A unidade de saúde selecionada (id:${id}) foi excluída da base de dados com sucesso` }) })
        .catch(err => { response.status(500).json(err) })
}



module.exports = {
    getAll,
    getByBorough,
    getByVaccine,
    getByVacAndBorough,
    registerHealthClinic,
    updateHealthClinic,
    updateAddress,
    updateVaccinesList,
    deleteHealthClinic,
}