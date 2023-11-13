const connect  = require('../sql/connexion');

const displayProducts = ((req,res,next)=>{
    connect.query('SELECT id,name,price,inventory FROM products', (error, results) => {
      if (error) {
        console.error("Erreur de récupération", error);
      } else {
        res.status(200).send(results);
      }
      });
})

const displayCategory = ((req,res,next)=>{
    connect.query('SELECT products.*, category.name AS category_name FROM products INNER JOIN category ON products.category_id = category.id;')
        if (error) {
            console.error("Erreur de récupération", error);
        } else {
            res.status(200).send(results);
        }
})

module.exports = {displayProducts, displayCategory}