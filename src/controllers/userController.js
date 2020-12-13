const jwt = require('jsonwebtoken');
const user = require('../Models/userModel');
const bcrypt = require('bcrypt');

const getAll = (req, res) => {
    user.find()
        .then(user => res.status(200).json(user))

        .catch(err => { response.status(500).json(err) })

}


const register = async (request, response) => {
    const { name, email, password } = request.body;
    try {
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user.create({
            name: name,
            email: email,
            password: hashedPassword
        })
            .then((res) => { response.status(200).json({ message: `Usuário criado com sucesso`, res }) })
            .catch(err => { response.status(500).json(err) })

    } catch (err) { response.status(500).json(err) }
}

function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password)
}


const signup = async (req, res) => {
    const { email, password: passwordEntry } = request.body;
    try {
        user.findOne({ email: email })
            .then((user) => {
                const { id, email, password } = user;
                if (!checkPassword(passwordEntry, password)) {
                    return response.status(401).json({ message: `Senha incorreta!` })
                }

                return response.status(200).json({
                    user: {
                        id,
                        email
                    },
                    token: jwt.sign({ id }, `${process.env.SECRET}`, {
                        expiresIn: `${process.env.EXPIRESIN}`
                    })
                })


            })
            .catch(err => { response.status(203).json({ message: `Não encontramos esse usuário cadastrado na nossa base de dados` }) })


    }
    catch (e) {
        console.log(e)
        return res.status(400).json(e)
    }
}

module.exports = { 
    getAll,
    register,
    signup
}