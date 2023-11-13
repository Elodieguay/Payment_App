import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import deleteToCart from '../../../functions/deleteToCart';
import Button from "../../components/Button"
import CartItem from '../../components/cart/CartItem';
import CartTotal from '../../components/cart/CartTotal';

const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const Cart = () => {
 
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(cartItems.id);
  console.log(setQuantity);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${host}:${port}/details`);
      console.log("request cart:", response);
      const jsonData = await response.json();

      console.log("request cart:",jsonData);
      setCartItems(jsonData);
      console.log("json:",setCartItems);
    } catch (error) {
      console.log("Error pas cool:", error);
    }
  };

  const handleQuantity = async(type,itemId) => {
    console.log("je suis dans handlequantity");
    
    setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === itemId
        ? {
            ...item,
            quantity:
              type === 'dec' ? item.quantity - 1 : item.quantity + 1,
            price:
              type === 'dec'
                ? item.price - (item.quantity * item.price) 
                : item.price + (item.quantity * item.price),
          }
        : item
    )
  );
    
      console.log("cart de setCartItem:", setCartItems );
    // mise à jour de la quantité dans la base de données

    const url = `${host}:${port}/updatequantity/${itemId}?type=${type}`;
    
    console.log("handleQuantityID:",itemId);
     const response = await fetch(url, {
        method: 'PUT',
      });
      const jsonData = await response.json();
      console.log(jsonData);
    
    
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    return total.toFixed(2);
  };

  const deleteItem = (itemId) => {
    deleteToCart(itemId);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  
  const handleCheckout = () => {
    const checkoutData = {items: cartItems, itemCount: cartItems.length, total: calculateTotal()};
    navigate('/checkout', { state: { orderSummary : checkoutData}});
    console.log("handlecheckout:", checkoutData);
  };
  
  return (
    <section className='min-h-screen  '>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Panier</h1>
          </header>
          <div className="mt-8">
            {cartItems.map((item) => (
              <CartItem
              key={item.id}
              item={item}
              handleQuantity={handleQuantity}
              deleteItem={deleteItem}
            />
            ))}
            <div className="mt-8 flex justify-end border-t border-gray-400 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                <CartTotal total={calculateTotal()} />
                  <div className="flex justify-between">
                    <dt>dont taxes incluses</dt>
                    <dd>20%</dd>
                  </div>
                </dl>
                <div className="flex flex-col items-center justify-end">
                  <Button onClick={handleCheckout} textButton='Payer' classbutton='"block rounded bg-[#7AB8BF] w-full px-5 py-3 text-lg text-white transition hover:bg-gray-600 text-center '/>          
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart 

 {/* <button
                  className="block rounded bg-[#7AB8BF] w-full px-5 py-3 text-lg text-white transition hover:bg-gray-600"
                  onClick={handleCheckout}
                  > Payer </button>   */}


// const location=useLocation()
//   console.log(location)
//   // const product= location.state?.product
//   // console.log({product.id})


//   const [productCart, setProductCart] = useState({});

//   useEffect(() => {
    

//       fetchData();
//   }, []);
  
//   const fetchData = async () => {

//   try {
//     const response = await fetch(`http://localhost:${port}/products/${product.id}`);
//     const jsonData = await response.json();

//     console.log(jsonData);
//     setProductCart(jsonData);

//   } catch (error) {
//     console.log("Error:", error);
//   }
// };
//   // Fonction pour supprimer un article du panier
// const removeFromCart = (productId) => {
//   const updatedCart = cart.filter((item) => item.id !== productId);
//   setCart(updatedCart);
// };

// // Fonction pour vider le panier
// const clearCart = () => {
//   setCart([]);
// };