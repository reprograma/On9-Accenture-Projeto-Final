const vaccine = require('../models/Vaccine.js');
//aqui vem a validação
const mongoose = require('mongoose');


const getAll = async (request, response) => {

    vaccine.find()
        .then((list) => { response.status(200).json(list) })
        .catch(err => { response.status(500).json({ message: err }) })
}

const getByBatch = (request, response) => {
    const { batch } = request.query;

    vaccine.find({ batch: batch })
        .then((list) => {
            if (!list.length > 0) { return response.status(200).json({ message: `Não foi encontrada nenhum lote de vacinas com essa numeração`, list }) }
            response.status(200).json(list)
        })
        .catch(err => { response.status(500).json(err) })

}

const getByVaccine = async (request, response) => {
    const { vaccine } = request.query;

    vaccine.find({ vaccine: vaccine })
        .then((list) => {
            if (!list.length > 0) { return response.status(200).json({ message: `A vacina selecionada não foi encontrada` }) }
            response.status(200).json(list)
        })
        .catch(err => { response.status(500).json(err) })
}

const registerVaccine = async (request, response) => {
    const newRegister = request.body;

    registerVaccine.create({
        vaccine: newRegister.vaccine,
        batch: newRegister.batch,
        doses: newRegister.doses
    })
        .then((newRegister) => { response.status(200).json({ message: `Vacina cadastrada com sucesso:`, newRegister }) })
        .catch((err) => { response.status(500).json(err) })

}

const updateVaccine = async (request, response) => {
    const { id } = request.params;
    const registerUpdate = request.body;
    registerVaccine.findByIdAndUpdate(id, registerUpdate)
        .then((registerUpdate) => { response.status(200).json({ message: `Vacina atualizada com sucesso:`, registerUpdate }) })
        .catch((err) => { response.status(500).json(err) })

}
const updateBatch = async (request, response) => {
    const { id } = request.params;
    const { batch } = request.body

    registerVaccine.findByIdAndUpdate(id, { $set: { batch: batch } })
        .then((updatedBatch) => { response.status(200).json({ message: `Lote atualizado com sucesso:`, updatedBatch }) })
        .catch((err) => { response.status(500).json(err) })

}
const updateDoses = async (request, response) => {
    const { id } = request.params;
    const { doses } = request.body


    registerVaccine.findByIdAndUpdate(id, { $set: { doses: doses } })
        .then((updatedDoses) => { response.status(200).json({ message: `Doses atualizadas com sucesso:`, updatedDoses }) })
        .catch((err) => { response.status(500).json(err) })

}

const deleteVaccine = async (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) { return response.status(400).json({ message: 'O ID inserido é inválido' }) }

    vaccine.findByIdAndDelete(id)
        .then(() => { response.status(200).json({ message: `A vacina selecionada (id:${id}) foi excluída da base de dados com sucesso` }) })
        .catch(err => { response.status(500).json(err) })
}


module.exports = {
    getAll,
    getByBatch,
    getByVaccine,
    registerVaccine,
    updateVaccine,
    updateBatch,
    updateDoses,
    deleteVaccine
}