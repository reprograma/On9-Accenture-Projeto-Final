const response  = require("express")
const pros = require ("../models/Models.json")

controllers.getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(pros)
}

controllers.getByCity



controllers.getByState



controllers.createProfessional



controllers.updateProfessional



controllers.updateField




controllers.deleteProfessional


