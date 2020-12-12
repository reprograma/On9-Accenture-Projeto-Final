const app = require("./src/app")
const port = 8080;

app.listen(process.env.PORT || port, function(){
    console.log(`This APP is running in the service port ${port}`)
})