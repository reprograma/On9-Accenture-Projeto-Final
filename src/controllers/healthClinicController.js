const healthClinic = require('../models/HealthClinic.js');
const mongoose = require('mongoose');
const { validatingBorough, sameZipcode, boroughs } = require('../validators/healthClinic.js')
const { searchingVaccines, searchingVaccineAndDose } = require('../validators/Vaccine.js');



const getAll = async (request, response) => {

    healthClinic.find().populate({ path: 'vaccines', select: 'vaccine dose preventableDiseases' })
        .then((list) => { response.status(200).json(list) })
        .catch(err => { response.status(500).json({ message: err }) })
}

const getByBorough = async (request, response) => {
    const { borough } = request.query;
    healthClinic.find({ borough: borough }).populate({ path: 'vaccines', select: 'vaccine dose preventableDiseases' })
        .then((list) => {
            if (!list.length > 0) { return response.status(200).json({ message: `Não foi encontrada nenhuma Unidade de Saúde no bairro selecionado` }) }
            response.status(200).json(list)
        })
        .catch(err => { response.status(500).json(err) })

}

const getByVaccine = async (request, response) => {
    const { vaccine } = request.query;
    if (!(await searchingVaccines(vaccine) > 0)) { return response.status(200).json('Não foram encontradas Unidades de Saúde com a vacina desejada') }

    healthClinic.find().populate({ path: 'vaccines', select: 'vaccine dose preventableDiseases', match: { vaccine: { $in: vaccine } } })
        .then((list) => { response.status(200).json(list) })
        .catch(err => { response.status(500).json(list) })

}

const getByVaccineDose = async (request, response) => {
    const { dose } = request.query;
    const { vaccine } = request.query;

    if (!(await searchingVaccineAndDose(vaccine, dose) > 0)) { return response.status(200).json('Não foram encontradas Unidades de Saúde com a vacina e a dose desejada') }
    healthClinic.find().populate({ path: 'vaccines', select: 'vaccine dose preventableDiseases', match: { $and: [{ vaccine: { $in: vaccine } }, { dose: { $in: dose } }] } })
        .then((list) => { response.status(200).json(list) })
        .catch(err => { response.status(500).json(list) })
}

const registerHealthClinic = async (request, response) => {
    const { type, address, borough, openingHours, vaccines } = request.body;

    if (!(await validatingBorough(borough))) { return response.status(401).json({ message: `Insira um bairro válido. Em caso de dúvidas, veja a lista abaixo`, boroughs }) }

    healthClinic.create({
        type: type,
        address: address,
        borough: borough,
        openingHours: openingHours,
        vaccines: vaccines,
    })
        .then((newRegister) => { response.status(200).json({ message: `Nova unidade de Saúde registrada com sucesso`, newRegister }) })
        .catch(err => { response.status(500).json({ message: `Infelizmente, o registro de uma nova unidade de Saúde não pode ser efetuada.`, err }) })

}

const updateHealthClinic = async (request, response) => {
    const { id } = request.params;
    const { borough } = request.body;
    const { zipcode } = request.body.address;

    if (!mongoose.Types.ObjectId.isValid(id)) { return response.status(400).json({ message: 'O ID inserido é inválido' }) }
    if (await sameZipcode(zipcode)) { return response.status(401).json({ message: `Já existe uma Unidade de Saúde nesse mesmo CEP` }) }
    if (!(await validatingBorough(borough))) { return response.status(401).json({ message: `Insira um bairro válido. Em caso de dúvidas, veja a lista abaixo`, boroughs }) }

    healthClinic.findByIdAndUpdate(id, request.body)
        .then(() => { response.status(200).json({ message: `A unidade de Saúde selecionada ${request.params.id} foi atualizada com sucesso` }) })
        .catch((err) => response.status(500).json(err))

}

const updateAddress = async (request, response) => {
    const { id } = request.params;
    const { address } = request.body;
    const { zipcode } = request.body.address;

    if (!mongoose.Types.ObjectId.isValid(id)) { return response.status(400).json({ message: 'O ID inserido é inválido' }) }
    if (sameZipcode(zipcode)) { return response.status(401).json({ message: `Já existe uma Unidade de Saúde nesse mesmo CEP` }) }


    healthClinic.findByIdAndUpdate(id, { $set: { address: address } })
        .then((update) => { response.status(200).json(`O endereço da unidade de Saúde selecionada ${request.params.id} foi atualizado com sucesso`, update) })
        .catch((err) => response.status(500).json(err))


}

const updateVaccinesList = async (request, response) => {
    const { id } = request.params;
    const { vaccines } = request.body;

    healthClinic.findByIdAndUpdate(id, { $push: { vaccines: vaccines } })
        .then(() => { response.status(200).json({ message: `A lista de vacinas da unidade de Saúde selecionada ${request.params.id} foi atualizada com sucesso` }) })
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
    getByVaccineDose,
    registerHealthClinic,
    updateHealthClinic,
    updateAddress,
    updateVaccinesList,
    deleteHealthClinic,
}