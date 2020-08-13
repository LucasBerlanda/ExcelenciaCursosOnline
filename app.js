// carregando modulos
const express = require("express")
const html = require("html")
const bodyParser = require("body-parser")
const app = express()
const index = require("./routes/index")
const path = require("path")


//const mongoose = require('mongoose')

//configurações
    // Body-parser

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.set('views', path.join(__dirname, 'views'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    // Public
    app.use(express.static(path.join(__dirname,"public")))


//rotas
app.use('/', index)

app.listen(process.env.PORT || 8080);