const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { signupSchema } = require('../validators/mentoredValidators')
const { hashPassword } = require('../helpers/hashPassword')
const Mentored = require("../models/Mentored");
const Mentor = require("../models/Mentor");

const createMentored = async(request, response) => {
    try {
        const validatedBody = await signupSchema.validate(request.body)
        const newMentored = new Mentored(validatedBody)
        const passwordHashed = await hashPassword(newMentored.password, response)

        Mentored.findOne({ email: validatedBody.email })
            .then(async existingMentored => {
                if (existingMentored) {
                    return response.status(400).json({
                        errors: ['Já existe uma conta com esse e-mail']
                    })
                }

                newMentored.password = passwordHashed

                newMentored.save()
                    .then(() => {
                        Mentored.findOneAndUpdate({ _id: newMentored._id }, { $push: { mentor: request.params.mentorId } })
                            .then(() => {
                                Mentor.findOneAndUpdate({ _id: request.params.mentorId }, { $push: { mentored: newMentored._id } })
                                    .then(() => {
                                        response.status(201).json('new mentored');
                                    })
                                    .catch((err) => {
                                        throw new Error(err);
                                    });
                            })
                            .catch((err) => {
                                throw new Error(err);
                            });
                    })
                    .catch(err => next(err));
            })
    } catch (e) {
        console.log(e)
        return response.status(400).json(e)
    }
};

const getAll = (request, response) => {
    Mentored.find()
        .then((mentoreds) => {
            response.status(200).json(mentoreds);
        })
        .catch((err) => next(err));
};

const getByDestinyCountry = (request, response) => {
    const destinyCountry = request.query.destinyCountry

    Mentor.find({ destinyCountry: destinyCountry })
        .then((mentor) => {
            response.status(200).json(mentor)
        })
        .catch((error) => {
            response.status(400).json({ error: `Falha na pesquisa de país de destino.` })
        })
};

const getByConcluded = (request, response) => {
    const concluded = request.query.concluded

    Mentor.find({ concluded: concluded })
        .then((mentor) => {
            response.status(200).json(mentor)
        })
        .catch((error) => {
            response.status(400).json({ error: `Falha na pesquisa.` })
        })
};


const editMentored = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: "Specified id is not valid" });
        return;
    }
    Mentored.findByIdAndUpdate(id, request.body)
        .then(() => {
            response
                .status(200)
                .json({ message: `${request.params.id} is updated successfully.` });
        })
        .catch((err) => {
            response.json(err);
        });
};

//atualizar o campo disponibilidade
const updateMentoredConcluded = (request, response) => {
    const { id } = request.params;
    const { concluded } = request.body;

    Mentored.findByIdAndUpdate(id, { $set: { concluded } })
        .then((mentored) => {
            response.status(200).json({
                message: `${request.params.id} mentored concluded is updated.`,
            });
        })
        .catch((err) => {
            response.json(err);
        });
};

// deletar mentor, mas se estiver com disponibilidade true ele não deleta
const deleteMentored = (request, response) => {
    const { id } = request.params;

    Mentored.findById(id).then((mentored) => {
        if (mentored.concluded == true) {
            Mentored.findByIdAndDelete(id)
                .then(() => {
                    response.status(200).json("Mentored deleted");
                })
                .catch((err) => {
                    throw new Error(err);
                });
        }
    });
};

module.exports = {
    getAll,
    getByDestinyCountry,
    getByConcluded,
    createMentored,
    editMentored,
    updateMentoredConcluded,
    deleteMentored,
};