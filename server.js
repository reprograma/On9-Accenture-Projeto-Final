const app = require("./src/app");
const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}.`)
    console.log('Press CTRL-C to stop\n')
})