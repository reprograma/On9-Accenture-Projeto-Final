const yup = require('yup')

exports.ambulanceSchema = yup.object().shape({
    email: yup.string().required('Email é obrigatório.'),
    password: yup.string().required('A senha é obrigatória.'),
    driverName: yup.string().required('O nome do motorista é obrigatório'),
    driverCPF: yup.string().min(11).required('O número do CPF é obrigatório.'),
    licensePlate: yup.string().required('O número da placa da ambulância é obritaório.'),
    location: yup.string().required('Sua locação é obrigatória.'),
    destination: yup.string().required("Seu local de destino é obrigatório."),
    telephoneNumber: yup.string().min(11)("Seu número de telefone com o DDD é obrigatório."),
    ambulanceId: yup.string().required('O id do usuário é obrigatório.')
}).required('O formulário não pode ser vazio.')