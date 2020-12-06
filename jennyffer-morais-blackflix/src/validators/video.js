const yup = require("yup");
const Categoria = require("./categoria");

exports.videoSchema = yup
  .object()
  .shape({
    titulo: yup.string().required("Título é obrigatório"),
    url: yup.string().required("URL obrigatória"),
    categoria: yup.isSchema(Categoria),
  })
  .required("O formulário não pode ser vazio");
