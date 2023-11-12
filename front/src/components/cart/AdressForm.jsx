import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '../../components/Button'

export default function AddressForm({adressFormSubmit}) {


  const [formData, setFormData]= useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  }
 )

  const changeInput = (event) =>{
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const formSubmitPayment = () =>{
    adressFormSubmit(formData)
    
  }
  console.log(formSubmitPayment);

  return (
    <>
    <section className='px-10'>
      <Typography variant="h6" gutterBottom>
        Adresse de livraison
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Prénom"
            value={formData.firstName}
            onChange={changeInput}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nom"
            value={formData.lastName}
            onChange={changeInput}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Adresse"
            value={formData.address}
            onChange={changeInput}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ville"
            value={formData.city}
            onChange={changeInput}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            value={formData.state}
            onChange={changeInput}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Code postal"
            value={formData.zip}
            onChange={changeInput}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            value={formData.country}
            onChange={changeInput}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Button 
        onClick={formSubmitPayment}
        textButton='Enregistrer' 
        classbutton='block rounded bg-[#7AB8BF] w-full px-5 py-3 text-lg mx-6 text-white transition hover:bg-gray-600' />
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      </section>
      
    </>
  );
}