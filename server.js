//const helpers = require('../helpers/helpersUser');
const app = require ("./src/app")
const port = 8000

app.listen(process.env.PORT || port, () => {
    console.log(`app rodando na porta ${port}`)
})
