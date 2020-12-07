const { response, request } = require("express");
const mongoose = require("mongoose")
const Mentored = require("../models/Mentored")

const getAll = (request, response) => {
    Mentored.find()
        .then((mentoreds) => {
            response.status(200).json(mentoreds);
        })
        .catch(err => next(err));
}

const createMentored = (request, response) => {
    let { mentoredName, destinyCountry, mentoringType, concluded } = request.body

    const newMentored = new Mentored({
        mentoredName,
        destinyCountry,
        mentoringType,
        concluded
    });

    newMentored.save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch(err => next(err));
}

const updateMentored = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: "Specified id is not valid" });
        return;
    }
    Mentored.findByIdAndUpdate(id, request.body)
        .then(() => {
            response.status(200).json({ message: `${request.params.id} is updated successfully.` });
        })
        .catch((err) => {
            response.json(err);
        });
}

//atualizar o campo disponibilidade
const updateMentoredConcluded = (request, response) => {
    const { id } = request.params;
    const { concluded } = request.body

    Mentored.findByIdAndUpdate(id, { $set: { concluded } })
        .then((mentored) => {
            response.status(200).json({ message: `${request.params.id} mentored concluded is updated.` });
        })
        .catch((err) => {
            response.json(err);
        });
}

// deletar mentor, mas se estiver com disponibilidade true ele não deleta
const deleteMentored = (request, response) => {
    const { id } = request.params;

    Mentored.findById(id)
        .then((mentored) => {
            if (mentored.concluded == true) {
                Mentored.findByIdAndDelete(id)
                    .then(() => {
                        response.status(200).json("Mentored deleted");
                    })
                    .catch((err) => {
                        throw new Error(err);
                    });
            }
        })
}

module.exports = {
    getAll,
    createMentored,
    updateMentored,
    updateMentoredConcluded,
    deleteMentored
}

