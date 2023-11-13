import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {PiShoppingBagThin} from 'react-icons/pi'

const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;


const Navbar = () =>{

  // Gestion de la fonctionnalité filtre à implémenter pour un affichage dans le composant Main ( séparer dans un autre fichier la logique et la reprendre dans Main et NavBar)
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await fetch(`${host}:${port}/category/${selectedCategory}`);
              if (!response.ok) {
                  console.error('Erreur lors de la récupération des produits par catégorie');
                  return;
              }
              const data = await response.json();
              setProducts(data);
          } catch (error) {
              console.error('Erreur lors de la récupération des produits par catégorie :', error);
          }
      };

      if (selectedCategory) {
          fetchProducts();
      } else {
          const fetchAllProducts = async () => {
              try {
                  const response = await fetch(`${host}:${port}/products`);
                  if (!response.ok) {
                      console.error('Erreur lors de la récupération de tous les produits');
                      return;
                  }
                  const data = await response.json();
                  setProducts(data);
              } catch (error) {
                  console.error('Erreur lors de la récupération de tous les produits :', error);
              }
          };

          fetchAllProducts();
      }
  }, [selectedCategory]);
  
  return (
    <div className='sm:flex justify-between pt-6 px-10  text-center'>
        <div className='  '>
            <Link to="/" className='text-[#025159]  font-semibold text-3xl '>The Bradery</Link>
        </div>
        <ul className=' flex  justify-between max-sm:text-sm max-sm:pt-5 items-center space-x-10  font-semibold '>
          <li id='prêt à porter'className=' ' onClick={() => setSelectedCategory('prêt à porter')}>Prêt à Porter</li>
          <li id='accessoires' onClick={() => setSelectedCategory('accessoires')}>Accessoires</li>
          <li id='chaussures' onClick={() => setSelectedCategory('chaussures')}>Chaussures</li>
        </ul>   
        <div className='flex-3 mr-2.5 '>
        <Link to="/cart">
                <PiShoppingBagThin size={40} color='black' />
        </Link>
        </div>
    </div>
  );
}

export default Navbar;
