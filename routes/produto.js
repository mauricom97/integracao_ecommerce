const produto = require('../controllers/produto')
const express = require('express');

var router = express.Router();

router.get('/', produto.index)
router.get('/:id', produto.get)
router.put('/:id', produto.update)
router.post('/', produto.create)
router.delete('/:id', produto.delete)


module.exports = router