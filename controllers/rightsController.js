const rights = require('../models/rightsSchema')
const mongoose = require('mongoose')

const getAll = (request, response) => {

    rights.find()
        .then((list) => { response.status(200).json(list) })
        .catch(err => { response.status(500).json({ message: err }) })
}

const addRight = (request, response) => {
    const rightBody = request.body //pegando o body que o usuario digitou
    
    rights.create({
        titleLegalSubject: rightBody.titlelegalSubject,
        description: rightBody.description,
        sourceInformation: rightBody.sourceInformation,
        dateInclusion: rightBody.dateInclusion,
    })
        .then((newRegister) => { response.status(200).json({ message: `Direito registrado com sucesso`, newRegister }) })
        .catch(err => { response.status(500).json({ message: `O direito não pode ser criado.`, err }) })

}

const updateRight = (request, response) => {
    const { id } = request.params

    rights.findByIdAndUpdate(id, request.body)
    .then((newRegister) => { response.status(200).json({ message: `Direito atualizado com sucesso`}) })
    .catch(err => { response.status(500).json({ message: `O direito não pode ser atualizado.`, err }) })

}


const deleteRight = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) { return response.status(400).json({ message: 'O ID inserido é inválido' }) }

    rights.findByIdAndDelete(id)
        .then((list) => { response.status(200).json({ message: `O direito selecionado (id:${id}) foi excluído da base de dados com sucesso` }) })
        .catch(err => { response.status(500).json(err) })
}

module.exports = {
    getAll,
    addRight,
    updateRight,
    deleteRight

}
