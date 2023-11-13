
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
          res.status(200).json('Produit ajouté au panier');
        }  
    
  });
})

const getCartDetails = (req, res, next) => {
  const query = `
    SELECT cart.id, cart.quantity, products.id AS productId, products.name AS name, products.price AS price
    FROM cart
    JOIN products ON cart.productId = products.id;
  `;

  connect.query(query, (error, results) => {
    if (error) {
      console.error("Erreur nulle", error);
      res.status(500).send("Erreur lors de la récupération des détails du panier");
    } else {
      res.status(200).send(results);
    }
  });
};

const removeFromCart = async (req, res, next) => {
  const cartId = req.params.id;
  try {
    const query = "DELETE FROM cart WHERE id = ?";
    const values = [cartId];

    connect.query(query, values, (error, results) => {
      if (error) {
        console.error("Erreur lors de la suppression de l'article du panier", error);
        res.status(500).json("Erreur lors de la suppression de l'article du panier");
      } else {
        res.status(200).json("Article supprimé du panier avec succès");
      }
    });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'article du panier", error);
    res.status(500).json("Erreur lors de la suppression de l'article du panier");
  }
};

const updateQuantity = (req, res, next) => {
  const cartId = req.params.id;
  // console.log("cartId:",cartId);
  const updateType = req.query.type; // 'inc' ou 'dec'
  
  if (updateType !== 'inc' && updateType !== 'dec') {
    return res.status(400).json({ error: 'Type de mise à jour invalide' });
  }

  // Définir la quantité à ajouter ou soustraire en fonction du type
  const quantityUpdate = updateType === 'inc' ? 1 : -1;

  const query = 'UPDATE cart SET quantity = quantity + ? WHERE id = ?';
  const values = [quantityUpdate, cartId];

  connect.query(query, values, (error, results) => {
      if (error) {
          console.error('Erreur lors de la mise à jour de la quantité', error);
          res.status(500).json("Erreur lors de la mise à jour de la quantité");
      } else {
          res.status(200).json("Quantité mise à jour avec succès");
      }
  });
};

const getCheckCart = (req, res, next) => {
  const query = `
    SELECT cart.id, cart.quantity, products.id AS productId, products.name AS name, products.price AS price
    FROM cart
    JOIN products ON cart.productId = products.id;
  `;

  connect.query(query, (error, results) => {
    if (error) {
      console.error("Erreur lors de la récupération des détails du panier", error);
      res.status(500).send("Erreur lors de la récupération des détails du panier");
    } else {
      // console.log("Détails du panier récupérés avec succès");
      res.status(200).send(results);
    }
  });
};


module.exports = {addToCart, getCartDetails, removeFromCart, updateQuantity, getCheckCart}


