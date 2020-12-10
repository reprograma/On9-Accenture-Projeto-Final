const yup = require("yup")

exports.vendaSchema = yup.object().shape({
    nomeProduto: yup.string().required('Esse campo é obrigatório'),
    valorVenda: yup.number().required('Esse campo é obrigatório'),
    quantidade: yup.number().required('Esse campo é obrigatório'),
    vendedor: yup.string().required('Esse campo é obrigatório'),
    clienteContato: yup.array().required('Esse campo é obrigatório')
  }).required('O formulário não pode ser vazio')

