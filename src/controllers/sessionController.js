
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");
const bcrypt = require("bcrypt");
const Users = require("../models/Usuarios");

const adm = async (req, response) => {
    const { nome ,email, password } = req.body
    const salt = await bcrypt.genSalt(6);
    const hashedPassword = await bcrypt.hash(password,salt);
    const novoRegistro = new Users ({ 
        nome: nome,
        email: email,
        hashPass: hashedPassword
    })
    novoRegistro.save()
    .then((res) => { response.status(200).json({ message : "Usuário criado", res}) })
    .catch(err => { response.status(500).json(err)})
}


function checkPassword(passwordEntry, password) {
    return bcrypt.compareSync(passwordEntry, password);
}


const accessToken =  (request,response) => {
    try {
        const { email, password: passwordEntry } = request.body;

        Users.findOne({ email: email})
          .then((users) => {
            const {id , email, hashPass} = users;
            if(!checkPassword(passwordEntry, hashPass)) {response.status(401).json({message: "A senha inserida está incorreta!"})}

            try {
                return response.status(200).json({ 
                    users:{ 
                        id,
                        email
                    },
                    token: jwt.sign({ id }, authConfig.secret,{
                        expiresIn: authConfig.expiresIn,
                    }),
                });
            } 
            catch (err) { return response.status(401).json({ erro: "erro"}); }
            
        })
        .catch((err) => {
             response.status(401).json({ error: "usuário não encontrado"});
        })

    } catch (err){
        response.status(401).json({ erro: "erro"});
    }
}


module.exports ={
    adm,
    accessToken
}
