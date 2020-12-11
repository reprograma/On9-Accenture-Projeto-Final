const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { signupSchema } = require('../validators/mentorValidators')
const { hashPassword } = require('../helpers/hashPassword')
const Mentor = require("../models/Mentor");

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
};

const getAll = (request, response) => {
    Mentor.find()
        .then((mentor) => { response.status(200).json(mentor) })
        .catch((error) => {
            response.status(400).json({ message: 'Não encontrado.' });
        });
};

const getByVisitedCountry = (request, response) => {
    const visitedCountry = request.query.visitedCountry

    Mentor.find({ visitedCountry: visitedCountry })
        .then((mentor) => {
            response.status(200).json(mentor)
        })
        .catch((error) => {
            response.status(400).json({ error: `Falha na pesquisa de país visitado.` })
        })
};

const getByAvailable = (request, response) => {
    const available = request.query.available

    Mentor.find({ available: available })
        .then((mentor) => {
            response.status(200).json(mentor)
        })
        .catch((error) => {
            response.status(400).json({ error: `Falha na pesquisa de disponibilidade do mentor.` })
        })
};

const getByMentoringType = (request, response) => {
    const mentoringType = request.query.mentoringType

    Mentor.find({ mentoringType: mentoringType })
        .then((mentor) => {
            response.status(200).json(mentor)
        })
        .catch((error) => {
            response.status(400).json({ error: `Falha na pesquisa de tipo de mentoria.` })
        })
};

const updateMentor = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: "O ID não é válido" });
        return;
    }
    Mentor.findByIdAndUpdate(id, request.body)
        .then(() => {
            response.status(200).json({ message: `Cadastro de ID ${request.params.id} atualizado com sucesso!` });
        })
        .catch((error) => {
            response.json({ error: 'Erro ao tentar editar.' });
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
                message: `O mentor de ID ${request.params.id} foi atualizado com sucesso!.`,
            });
        })
        .catch((error) => {
            response.json({ error: 'Erro ao atualizar o campo.' });
        });
};

const deleteMentor = (request, response) => {
    const { id } = request.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: "O ID inserido é inválido" });
    }

    Mentor.findByIdAndDelete(id)
        .then(() => {
            response.status(200).json({ message: `Cadastro excluido com sucesso` })
        })
        .catch((error) => {
            response.status(400).json({ error: `Não foi possível excluir` })
        })
};

module.exports = {
    getAll,
    getByVisitedCountry,
    getByAvailable,
    getByMentoringType,
    createMentor,
    updateMentor,
    updateMentorAvailable,
    deleteMentor,
};