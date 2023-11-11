const connect = require('../sql/connexion');

const getStock = (req, res, next) => {
  const productId = req.params.itemId;
  console.log(productId);

  const getStockQuery = 'SELECT inventory FROM products WHERE id = ?';
  
  connect.query(getStockQuery, [productId], (error, stockResults) => {
    if (error) {
      console.error('Erreur lors de la récupération du stock', error);
      res.status(500).send("Erreur lors de la récupération du stock.");
    } else {
      if (stockResults.length === 0) {
        res.status(404).send('Produit non trouvé.');
      } else {
        const stock = stockResults[0].inventory;
        res.status(200).json({ stock });
      }
    }
  });
};

module.exports = { getStock };

