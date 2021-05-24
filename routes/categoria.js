const categoria = require('../controllers/categoria')
const express = require('express');

var router = express.Router();

router.get('/', categoria.index)
router.get('/:id', categoria.get)
router.put('/:id', categoria.update)
router.post('/', categoria.create)
router.delete('/:id', categoria.delete)


module.exports = router