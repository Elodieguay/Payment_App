const mysql = require('mysql');
const connect  = require('../sql/connexion');

const createOrder = async (req, res) => {
    try {
      const { items, total, addressData } = req.body;
        // console.log({items, total, addressData});
      try {
        await new Promise((resolve, reject) => {
          connect.query('BEGIN', (error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
  
        //Ajout de l'adresse dans la table "address"
        const firstAddress = Array.isArray(addressData) ? addressData[0] : addressData;
        const addressValues = [
            firstAddress.firstName,
            firstAddress.lastName,
            firstAddress.address,
            firstAddress.city,
            firstAddress.state,
            firstAddress.zip,
            firstAddress.country
          ];
        // console.log("adress:",addressValues);

        const addressQuery = 'INSERT INTO address (firstName, lastName, address, city, state, zip, country) VALUES (?, ?, ?, ?, ?, ?, ?) ';

        const addressResult = await new Promise((resolve, reject) => {
            connect.query(addressQuery, addressValues, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
        const addressId = addressResult.insertId;
  
        // Ajout de la commande dans la table "order"
        const orderQuery = 'INSERT INTO orders (total, addressId) VALUES (?, ?) ';
        const orderValues = [total, addressId];
        const orderResult = await new Promise((resolve, reject) => {
          connect.query(orderQuery, orderValues, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
        const orderId = orderResult.insertId;
  
        // Ajout de chaque article dans la table "orderItems"
        for (const item of items) {
          const orderItemsQuery = 'INSERT INTO orderitems (orderId, productId, quantity, unit_price) VALUES (?, ?, ?, ?)';
          const orderItemsValues = [orderId, item.productId, item.quantity, item.unitPrice];
          await new Promise((resolve, reject) => {
            connect.query(orderItemsQuery, orderItemsValues, (error) => {
              if (error) {
                reject(error);
              } else {
                resolve();
              }
            });
          });
  
          // Mise à jour de la quantité disponible dans la table "products"
          const updateProductQuery = 'UPDATE products SET inventory = inventory - ? WHERE id = ?';
          const updateProductValues = [item.quantity, item.productId];
          await new Promise((resolve, reject) => {
            connect.query(updateProductQuery, updateProductValues, (error) => {
              if (error) {
                reject(error);
              } else {
                resolve();
              }
            });
          });
        }
  
        // Validation de la commande
        await new Promise((resolve, reject) => {
          connect.query('COMMIT', (error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
        res.status(201).json({ message: 'Commande créée avec succès' });
      } catch (error) {
        // En cas d'erreur, annuler la commande
        await new Promise((resolve, reject) => {
          connect.query('ROLLBACK', (rollbackError) => {
            if (rollbackError) {
              reject(rollbackError);
            } else {
              resolve();
            }
          });
        });
        throw error;
      }
    } catch (error) {
      console.error('Erreur lors de la création de la commande :', error);
      res.status(500).json({ error: 'Erreur serveur lors de la création de la commande' });
    }
  };
  
  const deleteCart = async (req, res) => {
    try {
      const deleteCartQuery = 'DELETE FROM cart';
  
      await new Promise((resolve, reject) => {
        connect.query(deleteCartQuery, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
  
      res.status(200).json({ message: 'Panier vidé avec succès' });
    } catch (error) {
      console.error('Erreur lors de la suppression du panier :', error);
      res.status(500).json({ error: 'Erreur lors de la suppression du panier' });
    }
  };


  module.exports = { createOrder, deleteCart };