const Event = require("../models/Event");
const mongoose = require("mongoose");
const { response, request } = require("express");
const { parse } = require("date-fns");


const idValidation = async id => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return { message: "Specified id is not valid" };
    }

    if (!(await Event.findById(id))) {
        return { message: "Specified id is not valid" };
    }

    return undefined;
}

const getAll = async (request, response) => {


    Event.find()
        .then((events) => {
            if (!events) {
                response.status(204).json([]);
            }
            response.status(200).json(events);
        })
        .catch((err) => next(err));
};

const getById = async (request, response) => {

    const { id } = request.params;

    const error = await idValidation(id);

    if (error) {
        response.status(400).json({ message: error.message });
    }

    Event.findById(id)
        .then((events) => {
            if (!events) {
                response.status(204).json({});
            }
            response.status(200).json(events);
        })
        .catch((err) => {
            console.error(err);
            response.status(500).json('Internal Server Error')
        });
};

const registerEvent = async (request, response, next) => {
    const { title, date, description, category, tags } = request.body;
    const newEvent = new Event({
        title,
        date: parse(date, "dd/MM/yyyy", new Date()),
        description,
        category,
        tags,
    });
    if (await Event.findOne({ title })) {
        response.status(400).json({ message: "Evento já cadastrado." });
        return;
    }
    newEvent
        .save()
        .then((res) => {
            response.status(201).json(res);
        })
        .catch((err) => next(err));
};

const updateEvent = async (request, response) => {
    const { id } = request.params;

    const error = await idValidation(id);

    if (error) {
        response.status(400).json({ message: error.message });
    }

    Event.findByIdAndUpdate(id, request.body)
        .then(() => {
            response
                .status(200)
                .json({ message: ` ${request.params.id} is updated successfully.` });
        })
        .catch((err) => {
            response.json(err);
        });
};

const deleteEvent = async (request, response) => {
    const { id } = request.params;

    const error = await idValidation(id);

    if (error) {
        response.status(400).json({ message: error.message });
    }

    Event.findByIdAndDelete(id)
        .then(() => {
            response.status(200).json({ message: "event deleted" });
        })
        .catch((err) => {
            throw new Error(err);
        });
};

module.exports = {
    getAll,
    registerEvent,
    updateEvent,
    deleteEvent,
    getById,
};
