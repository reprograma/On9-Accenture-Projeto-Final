const { response, request } = require("express");
const mongoose = require("mongoose")
const Mentor = require("../models/Mentor")

const getAll = (request, response) => {
    Mentor.find()
        .then((mentors) => {
            response.status(200).json(mentors);
        })
        .catch(err => next(err));
}

const createMentor = (request, response) => {
    let { mentorName, visitedCountry, mentoringType, descripition, availability } = request.body

    const newMentor = new Mentor({
        mentorName,
        visitedCountry,
        mentoringType,
        descripition,
        availability
    });

    newMentor.save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch(err => next(err));
}

const updateMentor = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: "Specified id is not valid" });
        return;
    }
    Mentor.findByIdAndUpdate(id, request.body)
        .then(() => {
            response.status(200).json({ message: `${request.params.id} is updated successfully.` });
        })
        .catch((err) => {
            response.json(err);
        });
}

//atualizar o campo disponibilidade
const updateMentorAvailable = (request, response) => {
    const { id } = request.params;
    const { availability } = request.body

    Mentor.findByIdAndUpdate(id, { $set: { availability } })
        .then((mentor) => {
            response.status(200).json({ message: `${request.params.id} mentor availability is updated.` });
        })
        .catch((err) => {
            response.json(err);
        });
}

// deletar mentor, mas se estiver com disponibilidade true ele não deleta
const deleteMentor = (request, response) => {
    const { id } = request.params;

    Mentor.findById(id)
        .then((mentor) => {
            if (mentor.availability == false) {
                Mentor.findByIdAndDelete(id)
                    .then(() => {
                        response.status(200).json("Mentor deleted");
                    })
                    .catch((err) => {
                        throw new Error(err);
                    });
            }
        })
}

module.exports = {
    getAll,
    createMentor,
    updateMentor,
    updateMentorAvailable,
    deleteMentor
}

