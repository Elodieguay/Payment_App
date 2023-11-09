const express = require('express')
const router = express.Router()
const controllers = require('../controllers/home.controllers')

router.get('/products',controllers.displayProducts)
router.get('/category', controllers.displayCategory)

module.exports = router 