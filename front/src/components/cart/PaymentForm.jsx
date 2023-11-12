import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useLocation } from 'react-router';

export default function Payment({addressData}) {

  const location = useLocation()
  const orderSummary = location?.state?.orderSummary || {};
  const { items, itemCount, total } = orderSummary;
  console.log({itemCount, total});
  
  // const adressFormSubmit = location?.state.adressFormSubmit || {};
  // console.log(adressFormSubmit);
  const formData = addressData.length > 0 ? addressData[0] : {}
  
  console.log({formData});
  return (
    <>
    <section className='px-10'>
      <Typography variant="h6" gutterBottom>
        Paiement
      </Typography>      
      <div >récapitulatif de la commande:
        <div className='sm:text-sm text-xs'>
      {items && items.length > 0 ? (
            <>
              {items.map((el) => (
                <p key={el.id}>{el.quantity}{el.name}</p>
              ))}
            </>
          ) : (
            <p>Aucun article dans la commande.</p>
          )}
        <p className=''>Nombre d'articles: {itemCount} </p>
        <p>Total global: {total}€</p>
      </div>
      </div>
      <div>
        ADDRESS SUMMARY
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
          />
        </Grid>
        <button
        className="block rounded bg-[#7AB8BF] w-full px-5 py-3 text-lg mx-6 text-white transition hover:bg-gray-600"
        > COMMANDER </button>            
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