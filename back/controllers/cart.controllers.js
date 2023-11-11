
const mysql = require('mysql');
const connect  = require('../sql/connexion');


const addToCart = ((req, res, next) =>{
    
  const productId = req.body.productId;
  const quantity= 1;
  
  const values = [productId, quantity]
  const query = "INSERT INTO cart (productId, quantity) VALUES (?, ?)";
  
  connect.query( query, values, (error, results) => {
    if (error) {
      console.error("Erreur ajout panier", error);
      res.status(500).json("Erreur lors de l'ajout");
    } else { 
          console.log("ok inséré");       
          res.status(200).json('Produit ajouté au panier');
        }  
    
  });
})




module.exports = {addToCart}



// const displayCartAdd = ((req, res, next) =>{
    
//   const productId = req.params.id;
//   const {name, price, inventory} = req.body;
  
//   const query = "SELECT id, name, price, inventory FROM products WHERE id = ?";
//   const values = [name, price, inventory]
  
//   connect.query( query, [productId],values, (error, productResults) => {
//     if (error) {
//       console.error("Erreur de récupération du produit", error);
//       res.status(500).send("Erreur lors de la récupération du produit.");
//     } else {
//       if (productResults.length === 0) {
//         res.status(404).send("Produit non trouvé.");
//       } else {
//         const product = productResults[0];
        
//         if (product.inventory < quantity) {
//           res.status(400).send("Quantité en stock insuffisante.");
//         } else {
//         // mise à jour du stock
//         const updateStockQuery = 'UPDATE products SET inventory = ? WHERE id = ?';
//         const updatedStock = product.inventory - quantity;
      
//         connect.query( updateStockQuery, [updatedStock, productId], (updateError) => {
//           if (updateError) {
//             console.error('Erreur lors de la mise à jour des stocks', updateError);
//             res.status(500).send('Erreur lors de la mise à jour des stocks.');
//           } else {
//             // Ajoutez le produit au panier du client (vous devrez avoir une table de panier dans votre base de données)
//             // Vous devrez effectuer une autre requête SQL pour ajouter le produit au panier du client

//             res.status(200).send('Produit ajouté au panier avec succès.');
//           }
//         })
//         }
//       }
//     }
//   })
// })
// const displayCartRemove = ((req, res, next) =>{

// }) 
// const displayCartClear = ((req, res, next) =>{

// }) 
// const displayCartCheckout = ((req, res, next) =>{

// }) 

