import React from 'react'

const CartReview = ({ total, items }) => {
    return (
      <>
        {Array.isArray(items) ? (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <p>Nom: {item.name}</p>
                <p>Quantité: {item.quantity}</p>
                <p>Prix: {item.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Les détails des articles ne sont pas disponibles.</p>
        )}
      </>
    );
  };

export default CartReview