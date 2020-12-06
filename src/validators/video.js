const yup = require("yup");
const Categoria = require("./categoria");

exports.videoSchema = yup
  .object()
  .shape({
    titulo: yup.string().required("Título é obrigatório"),
    urlVideo: yup.string().url().required("URL obrigatória"),
    categoriaId: yup.isSchema(Categoria),
  })
  .required("O formulário não pode ser vazio");
