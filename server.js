const app = require("./src/app");
const dotenv = require("dotenv")
const PORT = process.env.PORT || 8080
const errorhandler = require('errorhandler')

/* Load enviroment variables from .env file, where API keys and password are configured */
dotenv.config()

/* Error Handler */
if (process.env.NODE_ENV === "development") {
  app.use(errorHandler())
} else {
  app.use((err, request, response, next) => {
    console.error(err)
    response.status(500).send("erver Error")
  })
}

/* Start express server */
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}.`)
  console.log('Press CTRL-C to stop\n')
})