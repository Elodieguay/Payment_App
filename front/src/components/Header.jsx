import React from 'react'
import './Header.css'
import {RxDoubleArrowDown} from 'react-icons/rx'

const Header = ()=> {

  return (
   
    <div className='header flex flex-col  justify-center bg-cover text-dark-brown min-h-[85vh] bg-center'>
        <div className=' w-1/3  text-left  ml-14 mt-12'>
          <h2 className='text-5xl text-white'>Albert, Grenade, Hortense ...<br/> sont en stock</h2>
        </div>
        <div className='absolute inset-x-0 bottom-0'>
          <span className="inline-block">
          {/* <a href="#accueil"><RxDoubleArrowDown size={60} color='white'/></a> */}
          </span>
        </div>
    </div>
    
  )
  
}

export default Header