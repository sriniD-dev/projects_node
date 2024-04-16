const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

app.use("/api/contacts", require("./router/routeHandlers"))

app.listen(process.env.PORT, () => {
    console.log(`server is running in port ${process.env.PORT}`)
})