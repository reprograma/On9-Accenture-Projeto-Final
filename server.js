const app = require("./src/app")
const port = 8080

app.listen(process.env.PORT || port, function(){
    console.log(`app rodando na porta ${port}`)
})