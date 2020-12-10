const yup = require("yup")

exports.vendedorSchema = yup.object().shape({
    nome: yup.string().required('Esse campo é obrigatório'),
    rg: yup.number().required('Esse campo é obrigatório'),
    passoword: yup.string().required('Esse campo é obrigatório')
  }).required('O formulário não pode ser vazio')

