const { response, request } = require("express");
const mongoose = require("mongoose");
const Opportunity = require("../models/Opportunity")


const getAll = (request, response) => {
    Opportunity.find()
        .then((opportunities) => {
            response.status(200).json(opportunities);
        })
        .catch(err => next(err));
}

const createOpportunity = (request, response) => {
    let { opportunityType, destinyCountry, description, registrationDeadline, free } = request.body

    const newOpportunity = new Opportunity({
        opportunityType,
        destinyCountry,
        description,
        registrationDeadline,
        free
    });

    newOpportunity.save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch(err => next(err));
}

const updateOpportunity = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: "Specified id is not valid" });
        return;
    }
    Opportunity.findByIdAndUpdate(id, request.body)
        .then(() => {
            response.status(200).json({ message: `${request.params.id} is updated successfully.` });
        })
        .catch((err) => {
            response.json(err);
        });
}

//atualizar o campo disponibilidade
const updateOpportunityFree = (request, response) => {
    const { id } = request.params;
    const { free } = request.body

    Opportunity.findByIdAndUpdate(id, { $set: { free } })
        .then((opportunity) => {
            response.status(200).json({ message: `${request.params.id} opportunity free is updated.` });
        })
        .catch((err) => {
            response.json(err);
        });
}

// deletar mentor, mas se estiver com disponibilidade true ele não deleta
const deleteOpportunity = (request, response) => {
    const { id } = request.params;

    Opportunity.findById(id)
        .then((opportunity) => {
            if (opportunity.free == true) {
                Opportunity.findByIdAndDelete(id)
                    .then(() => {
                        response.status(200).json("Opportunity deleted");
                    })
                    .catch((err) => {
                        throw new Error(err);
                    });
            }
        })
}

module.exports = {
    getAll,
    createOpportunity,
    updateOpportunity,
    updateOpportunityFree,
    deleteOpportunity
}