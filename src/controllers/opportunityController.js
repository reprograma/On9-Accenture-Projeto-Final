const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { signupSchema } = require('../validators/opportunityValidators')
const { hashPassword } = require('../helpers/hashPassword')
const Opportunity = require("../models/Opportunity");

const createOpportunity = async(request, response) => {
    try {
        const validatedBody = await signupSchema.validate(request.body)
        const newOpportunity = new Opportunity(validatedBody)
        const passwordHashed = await hashPassword(newOpportunity.password, response)

        Opportunity.findOne({ email: validatedBody.email })
            .then(async existingOpportunity => {
                if (existingOpportunity) {
                    return response.status(400).json({
                        errors: ['Já existe uma conta com esse e-mail']
                    })
                }

                newOpportunity.password = passwordHashed

                newOpportunity.save()
                    .then(newOpportunity => response.status(200).json(newOpportunity))
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

const getAll = (request, response) => {
    Opportunity.find()
        .then((opportunities) => {
            response.status(200).json({ message: 'Oportunidades encontradas', opportunities });
        })
        .catch((err) => next(err));
};

const updateOpportunity = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: "Specified id is not valid" });
        return;
    }
    Opportunity.findByIdAndUpdate(id, request.body)
        .then(() => {
            response.status(200).json({ message: `Opportunity from ID ${request.params.id} is updated successfully.` });
        })
        .catch((err) => {
            response.json(err);
        });
};

const deleteOpportunity = (request, response) => {
    const { id } = request.params;

    Opportunity.findById(id).then((opportunity) => {
        if (opportunity.active == false) {
            Opportunity.findByIdAndDelete(id)
                .then(() => {
                    response.status(200).json("Opportunity deleted");
                })
                .catch((err) => {
                    throw new Error(err); //ARRUMAR MENSAGEM DE RETORNO DO ERRO
                });
        }
    });
};

module.exports = {
    getAll,
    createOpportunity,
    updateOpportunity,
    deleteOpportunity,
};