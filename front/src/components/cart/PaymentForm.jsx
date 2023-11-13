import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useLocation, useNavigate } from 'react-router';

const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;

export default function Payment({addressData}) {
  
  const navigate = useNavigate()
  const location = useLocation()
  const orderSummary = location?.state?.orderSummary || {};
  const { items, itemCount, total } = orderSummary;
  
  const formData = addressData.length > 0 ? addressData[0] : {}
  
  // console.log({formData});
  
  const [paymentFormData, setPaymentFormData] = useState({
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });

  const [paymentFormValid, setPaymentFormValid] = useState(false);

  useEffect(()=>{
    const fieldsRequired = ['cardName', 'cardNumber', 'expDate', 'cvv']
    const paymentFormValid = fieldsRequired.every((field) => paymentFormData[field].trim() !== '')
    setPaymentFormValid(paymentFormValid)
  },[paymentFormData])
  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setPaymentFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  
  const paymentCheckout = async () => {
    const checkoutData = {
      items: items,
      total: total,
      addressData: formData,
      cardData: paymentFormData
    };
    // console.log('Data_request:',checkoutData);
    try {
      const response = await fetch(`${host}:${port}/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutData),
      });

      if (!response.ok) {
        console.error('Erreur lors de la requête POST pour le paiement');
        return;
      }

      const responseData = await response.json();
      // console.log('Réponse du serveur après le paiement :', responseData);

      await emptyCart();
      navigate("/")
      } catch (error) {
      console.error('Erreur lors de la requête POST pour le paiement :', error);
    }
  };
  
  // Requête pour vider le panier
  const emptyCart = async () => {
    try {
      const response = await fetch(`${host}:${port}/deletecart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        console.error('Erreur lors de la requête POST pour vider le panier');
      }
    } catch (error) {
      console.error('Erreur lors de la requête POST pour vider le panier :', error);
    }
  };

  return (
    <>
    <section className='px-10'>
      <Typography variant="h6" gutterBottom>
        Paiement
      </Typography>      
      <div >
        <h1 className='underline text-base  font-semibold mt-6'>Récapitulatif de la commande:</h1>
        <p className='text-base mt-4'>Nombre d'articles: {itemCount} </p>
        <div className='sm:text-sm text-xs'>
          {items && items.length > 0 ? (
            <>
              {items.map((el) => (
                <div key={el.id} className="mt-1  border-b border-gray-400 pt-8 ">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 ">
                    <div>
                      <h3 className="  text-sm sm:text-base  text-gray-900">{el.name}</h3>
                    </div>
                    <div className='flex items-center max-sm:text-sm max-sm:px-5'>
                      <p>{el.quantity}</p>
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-2 font-medium sm:text-base text-sm">
                      <p>{el.price}€</p>
                    </div>
                  </li>
                </ul>
                </div>       
              ))}
            </>
          ) : (
            <p>Aucun article dans la commande.</p>
          )}
        </div>
      </div>
      <div className=' underline text-base  mt-6 font-semibold '>
        Adresse de livraison
        <div>
            <div>
            {formData ? (
              <ul>
                <li>{formData.firstName} {formData.lastName}</li>
                <li>{formData.adress}</li>
                <li>{formData.city}{formData.zip}</li>
                <li>{formData.state}{formData.country}</li> 
              </ul>          
            ) : (          
              <p>En attente de votre adresse de livraison</p>
            )}
            </div>          
          <p></p>
        </div>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Nom"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={paymentFormData.cardName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Numéro"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={paymentFormData.cardNumber}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Date d'expiration"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={paymentFormData.expDate}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="3 derniers numéros au verso"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={paymentFormData.cvv}
            onChange={handleInputChange}
          />
        </Grid>
        <button
        className={`block rounded bg-[#7AB8BF] w-full px-5 py-3 text-lg mx-6 text-white transition hover:bg-gray-600 ${
          paymentFormValid ? '' : 'pointer-events-none opacity-50'
        }`}
        onClick={paymentCheckout}
        > Payer {total}€ </button>            
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Se souvenir de ma carte de crédit "
          />
        </Grid>
      </Grid>
      </section>
    </>
  )
}