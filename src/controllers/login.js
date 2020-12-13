const jwt = require("jsonwebtoken");
const config = require("../config");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { signupSchema } = require("../validators/user");
const { hashPassword } = require("../helpers/user");
const { userSchema } = require("../validators/user");

function checkPassword(passwordEntry, password) {
  return bcrypt.compareSync(passwordEntry, password);
}

exports.accessToken = (req, res) => {
  try {
    const { email, password: passwordEntry } = req.body;

    User.findOne({ email: email })
      .then((user) => {
        const { id, email, password: hashPassword, tipo } = user;

        try {
          checkPassword(passwordEntry, hashPassword); //comparando a senha de entrada com a do banco
        } catch (e) {
          return res.status(401).json({ message: "password does not match" });
        }

        try {
          return res.json({
            //se a senha conferiu, retorna id e nome do usuário
            user: {
              id,
              email,
              tipo,
            },
            token: jwt.sign({ id }, config.secret, {
              //gera o token a partir do id
              expiresIn: config.expiresIn,
            }),
          });
        } catch (e) {
          return res.status(500).json({ message: "erro" });
        }
      })
      .catch((e) => {
        return res.status(404).json({ message: "user not found" });
      });
  } catch (e) {
    return res.status(500).json({ message: "erro" });
  }
};

exports.signup = async (req, res) => {
  // Lógica de salvar usuários no nosso banco
  // Recebemos pelo req.body, os valores para popular o nosso banco com um Usuário novo
  try {
    // 1- Validação do corpo do usuário
    const validatedBody = await signupSchema.validate(req.body);

    // 2- Criar o nosso usuário com o Model User
    const newUser = new User(validatedBody);

    // 3 - Procuramos se existe algum usuário no banco com esse e-mail
    User.findOne({ email: validatedBody.email }).then(async (existingUser) => {
      // 4 - Verificar se existe algum usuário com esse e-mail
      if (existingUser) {
        // Se existir, retornamos um erro
        return res.status(400).json({
          message: "Já existe uma conta com esse e-mail",
        });
      }

      // 5- Criptografar a senha inserida pelo usuário
      // hashPassword é um Promise, e para ser guardado dentro de uma variável, precisamos do await
      const passwordHashed = await hashPassword(newUser.password, res);

      // 6- Substituir a nossa senha vinda da requisição com a senha criptografada
      newUser.password = passwordHashed;

      // 7 - Salvar no banco
      newUser
        .save()
        // 8 - Caso a requisição seja bem sucedida, retornar o usuário criado com status 200
        .then((user) => {
          return res.status(200).json({
            id: user._id,
            tipo: user.tipo,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          });
        })
        // 9 - Caso a requisição não seja bem sucedida, retornar status 500 com o erro
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};
