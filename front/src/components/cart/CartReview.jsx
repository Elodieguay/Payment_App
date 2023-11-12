import React from 'react'
import Cart from '../../pages/Cart/Cart';
// import Typography from '@mui/material/Typography';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Grid from '@mui/material/Grid';

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