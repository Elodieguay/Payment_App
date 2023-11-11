import React, { useEffect, useState } from 'react'
import Button from '@mui/joy/Button';
import addToCart from '../../../functions/addToCart';
import deleteToCart from '../../../functions/deleteToCart';
import{RxCross1} from "react-icons/rx"

const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const Cart = () => {
 
  const [cartItems, setCartItems] = useCart();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${host}:${port}/details`);
      console.log("request cart:", response);
      const jsonData = await response.json();
      console.log("request cart:",jsonData);
      
      const initialQuantities = {};
      jsonData.forEach((item) => {
        initialQuantities[item.id] = item.quantity;
      });
      setQuantities(initialQuantities);

      setCartItems(jsonData);
      console.log("json:",setCartItems);
    } catch (error) {
      console.log("Error pas cool:", error);
    }
  };
  const updateQuantity = (itemId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Panier</h1>
          </header>
          <div className="mt-8">
            {cartItems.map((item) => (
              <div key={item.id} className="mt-8 border-t border-gray-400 pt-8">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                  
                    <div>
                      <h3 className="text-base  text-gray-900">{item.name}</h3>
                    </div>
                    <Button
                        size="small"
                        // disableElevation
                        variant="contained"
                        onClick={() => {
                          const newQuantity = Math.max(0, quantities[item.id] - 1);
                          updateQuantity(item.id, newQuantity);
                        }}
                      >
                        -
                      </Button>
                      <p>{item.quantity}</p>
                      <Button
                        size="small"
                        // disableElevation
                        variant="contained"
                        onClick={() => {
                          const newQuantity = quantities[item.id] + 1;
                          updateQuantity(item.id, newQuantity);
                        }}

                      >
                        +
                      </Button>
                    <div className="flex flex-1 items-center justify-end gap-2 font-medium text-base">
                      <p></p>
                      <p>{item.price}€</p>
                      <p className='flex items-center'>
                      <RxCross1 className="text-gray-600 transition hover:text-red-600"
                      onClick={() => deleteToCart(item.id)}
                      /> Supprimer</p>                       
                    </div>
                  </li>
                </ul>
              </div>
            ))}
            <div className="mt-8 flex justify-end border-t border-gray-400 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Sous-total</dt>
                    {/* <dd>{subtotals}€</dd> */}
                  </div>
                  <div className="flex justify-between">
                    <dt>Taxes incluses</dt>
                    <dd>20%</dd>
                  </div>
                  {/* <div class="flex justify-between">
                    <dt>Code Promo</dt>
                    <dd><input placeholder='Code Promo' value={promoMessage} onChange={messageChange} onKeyDown={messagePress} className='  text-right border-solid border-gray-800' onen></input></dd>
                    <dd>{effectivePromotion}€</dd>
                  </div> */}
                  <div className="flex justify-between !text-base font-medium ">
                    <dt>Total</dt>
                    {/* <dd>{total}€</dd> */}
                  </div>
                </dl>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart 




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