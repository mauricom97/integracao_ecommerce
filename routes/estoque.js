const estoque = require('../controllers/estoque')
const express = require('express');

var router = express.Router();

router.get('/', estoque.index)
router.get('/:id', estoque.get)
router.put('/:id', estoque.update)
router.post('/', estoque.create)
router.delete('/:id', estoque.delete)


module.exports = router