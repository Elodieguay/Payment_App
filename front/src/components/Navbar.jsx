import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {PiShoppingBagThin} from 'react-icons/pi'
// import { panierContext } from '../../App';
// import { useContext,  } from 'react';


const Navbar = () =>{

  const [selectedCategory, setSelectedCategory] = useState(null);

  
  return (
    <div className='flex justify-between pt-6 px-10  text-center'>
        <div className='  '>
            <Link to="/home" className='text-[#025159]  font-semibold text-3xl '>The Bradery</Link>
        </div>
        <ul className=' flex  justify-between   items-center space-x-10  font-semibold'>
          <li id='prêt à porter' onClick={() => setSelectedCategory('prêt à porter')}>Prêt à Porter</li>
          <li id='accessoires' onClick={() => setSelectedCategory('accessoires')}>Accessoires</li>
          <li id='chaussures' onClick={() => setSelectedCategory('chaussures')}>Chaussures</li>
        </ul>   
        <div className='flex-3 mr-2.5 '>
        {/* <Link to="/cart"> */}
                <PiShoppingBagThin size={40} color='black' />
        {/* </Link> */}
        </div>
    </div>
  );
}

export default Navbar;
