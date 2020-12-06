const yup = require("yup");

exports.categoriaSchema = yup
  .object()
  .shape({
    titulo: yup.string().required("Título é obrigatório"),
    cor: yup.string().required("Cor obrigatória"),
    canal: yup.string().required("Campo obrigatório"),
    urlCanal: yup.string().url().required("Campo obrigatório"),
  })
  .required("O formulário não pode ser vazio");
