import React from 'react'

const CartTotal = ({ total }) => {
  return (
    
    <div className="flex justify-between font-bold text-lg ">
    <dt>Total</dt>
    <dd>{total}€</dd>
    </div>
       
  )
}

export default CartTotal