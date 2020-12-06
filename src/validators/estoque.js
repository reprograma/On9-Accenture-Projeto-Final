const yup = require('yup')

exports.produtoSchema = yup.object().shape({
    nomeProduto: yup.string().required('O nome do produto é obrigatório'),
    descricao: yup.string().required('A descrição é obrigatório'),
    estoque: yup.number().required('O campo estoque é obrigatório'),
    valorFabrica: yup.number().required('Esse campo é obrigatório')
  }).required('O formulário não pode ser vazio')