const express = require('express')
const router = express.Router()
const controllers = require('../controllers/order.controllers')

router.post('/order',controllers.createOrder)
router.post('/deletecart', controllers.deleteCart)


module.exports = router 