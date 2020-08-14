const express = require("express");
const router = express.Router();

// definindo rotas
// /privacy
router.get('/', (req, res) =>{
    res.render("index/privacy")
})


module.exports = router