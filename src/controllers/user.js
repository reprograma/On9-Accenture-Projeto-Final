const User = require("../models/User");
const Favorite = require("../models/Favorite");
const { userSchema } = require("../validators/user");
const mongoose = require("mongoose");

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
      res.status(200).json({ message: "Usuário deletado." });
    })
    .catch((err) => {
      throw new Error(err); // throw new Error => mostra o erro
    });
};

exports.favoriteLike = async (req, res) => {
  try {
    const { userid, videoid } = req.params || req.body;

    await favorite(userid, videoid, true);

    return res.status(204).send();
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
