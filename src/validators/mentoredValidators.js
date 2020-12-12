const yup = require("yup");

yup.setLocale({
    string: {
        email: 'Esse campo não é valido',
        min: 'A senha precisa ter no mínimo 8 caracteres'
    }
})

exports.signupSchema = yup.object().shape({
    email: yup.string().email().required('Esse campo é obrigatório'),
    password: yup.string().min(8).required('O campo senha é obrigatório'),
    mentoredName: yup.string().required(),
    destinyCountry: yup.string().required(),
    mentoringType: yup.string(),
    mentor: yup.array(),
    concluded: yup.boolean().required()
})