const app = require("./src/app");
const port = 8080

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running at http://localhost:${port}.`)
    console.log('Press CTRL-C to stop\n')
})