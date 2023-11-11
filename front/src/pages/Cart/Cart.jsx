import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

const Cart = ({product}) => {

  const location=useLocation()
  console.log(location)
  // const product= location.state?.product
  // console.log({product.id})


  const [productCart, setProductCart] = useState({});

  useEffect(() => {
    

      fetchData();
  }, []);
  
  const fetchData = async () => {

  try {
    const response = await fetch(`http://localhost:${port}/products/${product.id}`);
    const jsonData = await response.json();

    console.log(jsonData);
    setProductCart(jsonData);

  } catch (error) {
    console.log("Error:", error);
  }
};



//   // Fonction pour supprimer un article du panier
// const removeFromCart = (productId) => {
//   const updatedCart = cart.filter((item) => item.id !== productId);
//   setCart(updatedCart);
// };

// // Fonction pour vider le panier
// const clearCart = () => {
//   setCart([]);
// };

  return (
    <div>Cart</div>
  )
}

export default Cart