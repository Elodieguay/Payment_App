const express = require('express')
const router = express.Router()
const cartControllers = require('../controllers/cart.controllers')
const stockControllers = require('../controllers/stock.controllers')


router.post('/addcart', cartControllers.addToCart);
router.get('/details', cartControllers.getCartDetails);
router.delete('/remove/:id', cartControllers.removeFromCart);

// Mettre à jour la quantité dans le panier
router.patch('/cart/updateQuantity/:itemId', cartControllers.updateQuantity);

// Récupérer le stock disponible
router.get('/stock/:itemId', stockControllers.getStock);


module.exports = router 



// router.post('/cart/stock/:id', stockControllers.productStock);

// router.post('/cart/remove', controllers.displayCartRemove)
// router.post('/cart/clear', controllers.displayCartClear)
// router.post('/cart/checkout', controllers.displayCartCheckout)
