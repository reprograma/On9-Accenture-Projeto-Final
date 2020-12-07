const app = require ("./src/app")

const port = 8080

app.listen(port, function (){
    console.log ("Deu certo na porta " + port)
})