const User = require("../models/User");
const Favorite = require("../models/Favorite");
const { signupSchema } = require("../validators/user");
const { hashPassword } = require("../helpers/user");
const { userSchema } = require("../validators/user");
const mongoose = require("mongoose");

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
          errors: ["Já existe uma conta com esse e-mail"],
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

exports.getAll = async (req, res) => {
  try {
    User.find({})
      .exec()
      .then(async (users) => {
        const status = users && users.length > 0 ? 200 : 204;

        users = users.map((user) => {
          return {
            id: user._id,
            tipo: user.tipo,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
          };
        });

        return res.status(status).send(users);
      });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;

    User.findOne({ _id: id })
      .exec()
      .then(async (user) => {
        const status = user ? 200 : 204;

        return res.status(200).send({
          id: user._id,
          tipo: user.tipo,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        });
      });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

exports.atualizarUser = async (req, res) => {
  const { id } = req.params; //pega o ID na URL

  if (!mongoose.Types.ObjectId.isValid(id)) {
    // verifica se o valor passado é um ID e, se é válido no BD
    res.status(400).json({ message: "Esse ID não é válido." });
    return;
  }

  User.findByIdAndUpdate(id, req.body) // método que encontra e atualiza por ID
    .then(() => {
      res.status(200).json({
        message: `O usuário com o ID: ${req.params.id} foi atualizado.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.deletarUser = (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id) // o método encontra e deleta o usuário por ID
    .then(() => {
      res.status(200).json("Usuário deletado.");
    })
    .catch((err) => {
      throw new Error(err); // throw new Error => mostra o erro
    });
};

exports.favoriteLike = async (req, res) => {
  try {
    const { userid, videoid } = req.params || req.body;

    await favorite(userid, videoid, true);

    return res.status(203).send();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Não foi possivel favoritar o video" });
  }
};

exports.favoriteDislike = async (req, res) => {
  try {
    const { userid, videoid } = req.params || req.body;

    await favorite(userid, videoid, false);

    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "Não foi possivel desfavoritar o video" });
  }
};

async function favorite(userId, videoId, isFavorite) {
  const favorite = await Favorite.findOne({
    userId,
    videoId,
  }).exec();

  if (favorite) {
    await favorite.update({ isFavorite }).exec();
  } else {
    await new Favorite({ userId, videoId, isFavorite }).save();
  }
}
