const app = require('./src/app')
const port = 5000

app.listen(process.env.DATABASE_URL|| port, function () {
    console.log(`Servidor rodando ${port}`)
})
