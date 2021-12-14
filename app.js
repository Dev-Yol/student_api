
const express = require("express"),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    port = 3001


// Static Files
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())



// app.use("/api/products", require("./router/product"))
app.use("/api", require("./router"))

app.listen(port, console.log(`Listening to port ${port}!`))