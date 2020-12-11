const yup = require("yup")


exports.produtoSchema = yup.object().shape({
    nomeProduto: yup.string().required('O nome do produto é obrigatório'),
    descricao: yup.string().required('A descrição é obrigatório'),
    estoque: yup.number().required('O campo estoque é obrigatório'),
    valorFabrica: yup.number().required('Esse campo é obrigatório')
  }).required('O formulário não pode ser vazio')


  exports.estoqueSchema = yup.object().shape({
    nomeProduto: yup.string().required('O nome do produto é obrigatório'),
    estoque: yup.number().required('O campo estoque é obrigatório'),
  }).required('O formulário não pode ser vazio')

  yup.setLocale({
    string:{
      nomeProduto: "Dado inserido incorretamente",
      descricao: "Dado inserido incorretamente",
      estoque: "Dado inserido incorretamente",
      valorFabrica: "Dado inserido incorretamente",
    },   
})
