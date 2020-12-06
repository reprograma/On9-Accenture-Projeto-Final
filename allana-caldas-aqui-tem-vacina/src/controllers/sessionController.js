const User = require('../models/User.js');


const registerAdmin = async (request, responde) => {
    const { name, email, password } = request.body
    User.create({
        name: name,
        email: email,
        hashPass: password
    })
}

module.exports = {
    registerAdmin
}