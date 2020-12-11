const Vaccine = require('../models/Vaccine.js');
const { validatingRegister } = require('../validators/vaccine.js');
const mongoose = require('mongoose');


const getAll = async (request, response) => {

    Vaccine.find()
        .then((list) => { response.status(200).json(list) })
        .catch(err => { response.status(500).json({ message: err }) })
}

const getByBatch = (request, response) => {
    const { batch } = request.query;

    Vaccine.find({ batch: batch })
        .then((list) => { response.status(200).json(list) })
        .catch(err => { response.status(500).json(err) })

}

const getByVaccine = async (request, response) => {
    const { vaccine } = request.query;

    Vaccine.find({ vaccine: vaccine })
        .then((list) => { response.status(200).json(list) })
        .catch(err => { response.status(500).json(err) })
}

const registerVaccine = async (request, response) => {
    const { vaccine, batch, dose, preventableDiseases } = request.body;

    if (await validatingRegister(vaccine, batch, dose) > 0) { return response.status(401).json({ message: `Essa vacina já está registrada no nosso banco de dados` }) }

    Vaccine.create({
        vaccine: vaccine,
        batch: batch,
        dose: dose,
        preventableDiseases: preventableDiseases
    })
        .then((newVaccine) => { response.status(200).json({ message: `Vacina cadastrada com sucesso`, newVaccine }) })
        .catch(err => { response.status(500).json(err) })
}

const updateVaccine = async (request, response) => {
    const { id } = request.params;
    const { vaccine, batch, dose } = request.body;

    if (!mongoose.Types.ObjectId.isValid(id)) { return response.status(400).json({ message: 'O ID inserido é inválido' }) }
    if (await validatingRegister(vaccine, batch, dose) > 0) { return response.status(401).json({ message: `Essa vacina já está registrada no nosso banco de dados` }) }

    Vaccine.findByIdAndUpdate(id, request.body)
        .then(() => { response.status(200).json({ message: `Vacina atualizada com sucesso:` }) })
        .catch((err) => { response.status(500).json(err) })

}

const insertPreventableDisease = (request, response) => {
    const { id } = request.params;
    const { preventableDiseases } = request.body;
    const filteredList = [];

    preventableDiseases.forEach(disease => {
        if(!filteredList.includes(disease)){return response}
    });

    Vaccine.findByIdAndUpdate(id, { $push: { preventableDiseases: preventableDiseases } })
}

const deleteVaccine = async (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) { return response.status(400).json({ message: 'O ID inserido é inválido' }) }

    Vaccine.findByIdAndDelete(id)
        .then(() => { response.status(200).json({ message: `A vacina selecionada (id:${id}) foi excluída da base de dados com sucesso` }) })
        .catch(err => { response.status(500).json(err) })
}


module.exports = {
    getAll,
    getByBatch,
    getByVaccine,
    registerVaccine,
    updateVaccine,
    deleteVaccine
}