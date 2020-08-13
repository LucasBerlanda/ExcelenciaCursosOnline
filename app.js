// carregando modulos
const express = require("express")
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const app = express()
const index = require("./routes/index")
const path = require("path")


//const mongoose = require('mongoose')

//configurações
    // Body-parser

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    // handlebars
    app.engine("handlebars", handlebars({defaultLayout: "main"}))
    app.set("view engine", "handlebars");
  //  server.set("views", __dirname + "/views");//especifica onde estarao os html


    // mongoose
        //depois, em breve...
    // Public
    app.use(express.static(path.join(__dirname,"public")))


//rotas
app.use('/', index)

app.listen(process.env.PORT || 8080);