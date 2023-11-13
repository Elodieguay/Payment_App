const connect  = require('../sql/connexion');

const displayProducts = ((req,res,next)=>{
    connect.query('SELECT id,name,price,inventory,category_id FROM products', (error, results) => {
      if (error) {
        console.error("Erreur de récupération", error);
      } else {
        res.status(200).send(results);
      }
      });
})

// Feature à réaliser : filtrer par catégorie
const displayCategory = ((req,res,next)=>{
    connect.query('SELECT products.*, category.name AS name FROM products INNER JOIN category ON products.category_id = category.id;', (error, results) => {
        if (error) {
          res.status(500).json("Erreur de récupération des produits par catégorie")
          console.error("Erreur de récupération", error);
        } else {
            res.status(200).json(results);
        }

    })
})

module.exports = {displayProducts, displayCategory}