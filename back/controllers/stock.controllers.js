const connect = require('../sql/connexion');

const productStock = (req, res, next) => {
  const productId = req.params.id;
  const quantity = req.body.quantity; // Assurez-vous d'avoir la quantité souhaitée du produit

  const checkStockQuery = 'SELECT id, name, price, inventory FROM products WHERE id = ?';
  connect.query(checkStockQuery, [productId], (error, productResults) => {
    if (error) {
      console.error('Erreur lors de la récupération du produit', error);
      res.status(500).send('Erreur lors de la récupération du produit.');
    } else {
      if (productResults.length === 0) {
        res.status(404).send('Produit non trouvé.');
      } else {
        const product = productResults[0];

        if (product.inventory < quantity) {
          res.status(400).send('Quantité en stock insuffisante.');
        } else {
          // Si le stock est suffisant, vous pouvez renvoyer une réponse 200 OK
          res.status(200).send('Le produit est disponible en stock.');
        }
      }
    }
  });
};

module.exports = { productStock };