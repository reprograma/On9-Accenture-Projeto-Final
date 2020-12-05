const yup = require('yup');

yup.setLocale({
    string: {
        email: 'Esse e-mail não é válido',
        min: 'A senha precisa ter no mínimo 8 caracteres'
    }
});

exports.signupClienteSchema = yup.object().shape({
    nome: yup.string().required('Esse campo é obrigatório'),
    telefone: yup.string().required('Esse campo é obrigatório'),
    endereco: yup.string().required('Esse campo é obrigatório'),
    email: yup.string().email().required('Esse campo é obrigatório'),
    senha: yup.string().min(8).required('Esse campo é obrigatório'),
}).required('Esse objeto não pode ser vazio');