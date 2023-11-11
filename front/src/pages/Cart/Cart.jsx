import React, { useEffect, useState } from 'react'
import {IoIosRemove, IoIosAdd} from "react-icons/io"
import deleteToCart from '../../../functions/deleteToCart';
import{RxCross1} from "react-icons/rx"
const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const Cart = () => {
 
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

    const url = `http://localhost:3000/updatequantity/${itemId}?type=${type}`;
    
    console.log("handleQuantityID:",itemId);
     const response = await fetch(url, {
        method: 'PUT',
      });
      const jsonData = await response.json();
      console.log(jsonData);
    
    
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
                    <div className='flex items-center'>
                      <IoIosRemove onClick={() => handleQuantity("dec", item.id)}/> 
                      <p>{item.quantity}</p>
                      <IoIosAdd onClick={() => handleQuantity("inc", item.id)}/>
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-2 font-medium text-base">
                      <p>{item.price } {console.log("price:",item.price)}€</p>
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
                    <dd>€</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>dontTaxes incluses</dt>
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



                {/* <div className="flex flex-col items-center justify-end">
                  <button
                  className="block rounded bg-[#7AB8BF] px-5 py-3 text-sm text-white transition hover:bg-gray-600"
                  onClick={confirmPanier}> Payer en boutique</button>
                  <Modal showModal={showModal} setShowModal = {setShowModal} />
                  
                  
                </div> */}
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