const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { signupSchema } = require('../validators/mentorValidators')
const { hashPassword } = require('../helpers/hashPassword')
const Mentor = require("../models/Mentor");

const getAll = (request, response) => {
    Mentor.find()
        .then((list) => { response.status(200).json(list) })
        .catch((err) => {
            response.status(500).json({ message: err });
        });
};

const createMentor = async(request, response) => {
        try {
            const validatedBody = await signupSchema.validate(request.body)
            const newMentor = new Mentor(validatedBody)
            const passwordHashed = await hashPassword(newMentor.password, response)

            Mentor.findOne({ email: validatedBody.email })
                .then(async existingMentor => {
                    if (existingMentor) {
                        return response.status(400).json({
                            errors: ['Já existe uma conta com esse e-mail']
                        })
                    }

                    newMentor.password = passwordHashed

                    newMentor.save()
                        .then(newMentor => response.status(200).json(newMentor))
                        .catch(err => {
                            console.log(err)
                            return response.status(500).json(err)
                        })
                })
        } catch (e) {
            console.log(e)
            return response.status(400).json(e)
        }
    }
    // const getByMentoringType = async(request, response) => {
    //     let { mentoringType } = request.query;

//     Mentor.find({ mentoringType: mentoringType })
//         .then((mentor) => {
//             response.status(200).json(mentor);
//         })
//         .catch(err => {
//             response.status(500).json(err);
//         });
// };

// const createMentor = (request, response) => {
//     let { mentorName, visitedCountry, mentoringType, descripition, availability } = request.body;

//     const newMentor = new Mentor({
//         mentorName,
//         visitedCountry,
//         mentoringType,
//         descripition,
//         availability
//     });

//     newMentor
//         .save()
//         .then((res) => {
//             response.status(201).json(res);
//         })
//         .catch((err) => next(err));
// };

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
};

//atualizar o campo disponibilidade
const updateMentorAvailable = (request, response) => {
    const { id } = request.params;
    const { availability } = request.body;

    Mentor.findByIdAndUpdate(id, {
            $set: { availability }
        })
        .then((mentor) => {
            response.status(200).json({
                message: `${request.params.id} mentor availability is updated.`,
            });
        })
        .catch((err) => {
            response.json(err);
        });
};

// deletar mentor, mas se estiver com disponibilidade true ele não deleta
const deleteMentor = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(400).json({
            message: "O ID inserido é inválido",
        });
    }

    Mentor.findById(id).then((mentor) => {
        if (mentor.availability == false) {
            Mentor.findByIdAndDelete(id)
                .then((list) => {
                    response.status(200).json({
                        message: `O mentor de ID ${id} foi deletado com sucesso`,
                    });
                })
                .catch((err) => {
                    response.status(500).json({ message: 'Impossível deletar mentor em estado disponível' });
                });
        }
    });
};

module.exports = {
    getAll,
    // getByMentoringType,
    createMentor,
    updateMentor,
    updateMentorAvailable,
    deleteMentor,
};