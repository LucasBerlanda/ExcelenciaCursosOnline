const express = require("express");
const router = express.Router();

// definindo rotas
router.get('/', (req, res) => {
    res.render("index/index")
})



module.exports = router