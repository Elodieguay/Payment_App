import React, { useEffect, useState } from 'react'
import AddressForm from '../../components/cart/AdressForm'
import Payment from '../../components/cart/PaymentForm'
import { useLocation } from 'react-router'

const Checkout = () => {

  const location = useLocation();
  const orderSummary = location?.state?.orderSummary || {};
  const { items, itemCount, total } = orderSummary;
  
  
  const [addressData, setAddressData] = useState([]);

  const handleAddressFormSubmit = (formData) => {
    setAddressData([formData]);
  };
  
  return (
    <div className='sm:h-screen  '>
        <div className='sm:flex max-sm:space-y-10 pt-10 px-10 justify-center items-center'>
        <div><AddressForm adressFormSubmit={handleAddressFormSubmit}/></div>
        <div><Payment  orderSummary={orderSummary} addressData={addressData}/></div>
        </div>        
    </div>
  )
}

export default Checkout