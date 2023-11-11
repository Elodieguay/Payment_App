const express = require('express')
const router = express.Router()
const cartControllers = require('../controllers/cart.controllers')

// const stockControllers = require('../controllers/stock.controllers')


router.post('/addcart', cartControllers.addToCart);
router.get('/details', cartControllers.getCartDetails);
router.delete('/remove/:id', cartControllers.removeFromCart);


module.exports = router 



// router.post('/cart/stock/:id', stockControllers.productStock);

// router.post('/cart/remove', controllers.displayCartRemove)
// router.post('/cart/clear', controllers.displayCartClear)
// router.post('/cart/checkout', controllers.displayCartCheckout)
