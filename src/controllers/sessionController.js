const jwt = require("jsonwebtoken")
const authConfig = require("../config/auth")
const bcrypt = require("bcrypt")
const TransitAgentUser = require("../models/TransitAgents")
const AmbulanceUser = require("../models/Ambulances")

function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password)
} 

exports.acessToken = (request, response) => {
    try {
        const { name, passwordEntry } = req.body;

       TransitAgentUser.findOne({nome: name})
       .then((user)) 
    }
}