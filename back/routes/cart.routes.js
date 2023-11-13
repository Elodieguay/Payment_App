const express = require('express')
const router = express.Router()
const cartControllers = require('../controllers/cart.controllers')



router.post('/addcart', cartControllers.addToCart);
router.get('/details', cartControllers.getCartDetails);
router.get('/checkcart', cartControllers.getCheckCart)
router.delete('/remove/:id', cartControllers.removeFromCart);
router.put('/updatequantity/:id', cartControllers.updateQuantity);

module.exports = router 


