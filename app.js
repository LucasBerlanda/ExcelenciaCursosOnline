// carregando modulos
const express = require("express")
const html = require("html")
const bodyParser = require("body-parser")
const app = express()

// modulos referentes à rotas
const index = require("./routes/index")
const privacy = require("./routes/privacy")

const path = require("path")

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
app.use('/privacy', privacy)

app.listen(process.env.PORT || 8080);