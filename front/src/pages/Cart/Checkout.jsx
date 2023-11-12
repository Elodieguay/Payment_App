import React from 'react'
import AddressForm from '../../components/cart/AdressForm'
import Payment from '../../components/cart/PaymentForm'
import CartReview from '../../components/cart/CartReview'

const Checkout = () => {
  return (
    <div className='sm:h-screen  '>
        <div className='sm:flex pt-10 px-10 justify-center items-center'>
        <div><AddressForm/></div>
        <div><Payment/></div>
        </div>        
        <div className='p-10'>Merci de votre commande</div>

        {/* <CartReview/> */}
    </div>
  )
}

export default Checkout