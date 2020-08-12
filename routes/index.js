const express = require("express");
const router = express.Router();

// definindo rotas
router.get('/', (req, res) => {
    res.render("index/index")
})

router.get('/posts', (req, res) =>{
    res.send("POSTSSSS")
})


module.exports = router