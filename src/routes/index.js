const express = require('express');
const app = require('../app');
const router = express.Router();

router.get('/', (request, response) => {
    response.status(200).json({
        name: "Aqui tem vacina!",
        version:"1.0.0",
        description: "Aqui tem Vacina é uma API, cujo objetivo é mostrar a distribuição e disponibilidade das vacinas por Unidades de Saúde em tempo real, permitindo ao SUS conferir se e quais vacinas estão disponíveis perto da sua casa, antes de fazer o deslocamente até o Postinho.",
        Author: "Allana Caldas"
    })
})

module.exports = router