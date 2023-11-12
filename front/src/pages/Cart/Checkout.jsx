import React, { useEffect, useState } from 'react'
import AddressForm from '../../components/cart/AdressForm'
import Payment from '../../components/cart/PaymentForm'
import CartReview from '../../components/cart/CartReview'
import { useLocation } from 'react-router'

const Checkout = () => {

  const location = useLocation();
  const orderSummary = location?.state?.orderSummary || {};
  const { items, itemCount, total } = orderSummary;
  console.log("checkout:",orderSummary);
  console.log({items,itemCount, total});
  
  const [addressData, setAddressData] = useState([]);
  console.log("formcheckout:",[addressData, setAddressData]);

  const handleAddressFormSubmit = (formData) => {
    setAddressData([formData]);
  };
  
  return (
    <div className='sm:h-screen  '>
        <div className='sm:flex pt-10 px-10 justify-center items-center'>
        <div><AddressForm adressFormSubmit={handleAddressFormSubmit}/></div>
        <div><Payment  orderSummary={orderSummary} addressData={addressData}/></div>
        </div>        
        <div className='p-10'>Merci de votre commande</div>

        {/* <CartReview/> */}
    </div>
  )
}

export default Checkout