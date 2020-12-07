const express = require("express")
const app = express()

const restaurantes = require("./routes/restaurantesRoutes")

app.use("/restaurantes", restaurantes)

module.exports = app