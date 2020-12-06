const Categoria = require("../models/Categoria");
const { categoriaSchema } = require("../validators/categoria");

exports.getAll = async (req, res) => {
  try {
    Categoria.find({})
      .exec()
      .then(async (categorias) => {
        const status = categorias && categorias.length > 0 ? 200 : 204;

        return res.status(status).send(categorias);
      });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;

    Categoria.findOne({ _id: id })
      .exec()
      .then(async (categoria) => {
        const status = categoria ? 200 : 204;

        return res.status(status).send(categoria);
      });
  } catch (e) {
    console.log(e);
    return res.status(400).json(e);
  }
};

exports.criarCategoria = async (req, res) => {
  try {
    console.log(req.body);
    // 1 - Checar se o corpo da requisição é válido
    const validatedCategoria = await categoriaSchema.validate(req.body);

    // 2 - Buscar a partir da urlCanal se essa categoria já existe no nosso banco
    return Categoria.findOne({ urlCanal: validatedCategoria.urlCanal }).then(
      async (existingCategoria) => {
        let newCategoria;
        // 3- Caso essa Categoria não esteja no nosso banco, criar ela na coleção Categorias e salvar
        console.log(existingCategoria);
        if (!existingCategoria) {
          // Criando uma nova categoria
          newCategoria = new Categoria(validatedCategoria);
          // Salvando
          newCategoria
            .save()
            .then((newCategoria) => {
              return res.status(201).json(newCategoria);
            })
            .catch((e) => {
              console.log(e);
              // Retornando a nossa função mais cedo caso haja um erro ao salvar a categoria
              return res.status(303).json({
                errors: ["Houve um erro ao criar uma entrada na tabela "],
              });
            });
        } else {
          //Se a categoria já existir
          return res
            .status(409)
            .json({ mensagem: "Essa categoria já está cadastrada." });
        }
      }
    );
  } catch (e) {
    // Retornando erro de validação
    console.log({ e });
    return res.status(200).json(e);
  }
};
