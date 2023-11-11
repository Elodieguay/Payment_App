import checkStockAndUpdateQuantity from './checkStockAndUpdateQuantity';
import checkStockAndAddToCart from './checkStockAndAddToCart';
import updateQuantityInCart from './updateQuantityInCart';
import { cartItemContext } from '../src/App';
import { context } from './createContext';

const addToCart = async (itemId) => {
   

    const {cartItems} = useContext(cartItemContext);
    const {setCartItems} = useContext(cartItemContext);
   
    try {
        console.log("je suis dans addtocart");
        const stockData = await checkStockAndUpdateQuantity(itemId);
        
        const availableStock = stockData.stock;
        
        const existingCartItem = cartItems.find((item) => item.id === itemId);
        console.log("existingCartItem:",existingCartItem);
        if (existingCartItem) {
            const newQuantity = existingCartItem.quantity + 1;

            if (newQuantity > availableStock) {
                alert("La quantité dépasse le stock disponible.");
                return;
            }

            await updateQuantityInCart(itemId, newQuantity);
            
            setCartItems((prevCartItems) =>
                prevCartItems.map((item) =>
                    item.id === itemId ? { ...item, quantity: newQuantity } : item
                    )
                );
           
            
        } else {
            await checkStockAndAddToCart(itemId, 1, availableStock);
        }

        context(itemId);
    } catch (error) {
        console.log("Erreur lors de l'ajout au panier :", error);
    }
};

export default addToCart();