import React from 'react'
import Navbar from '../../components/Navbar'
import Main from '../../components/Main'
// import Footer from '../../components/Footer'

const Home = () => {
  return (
        <div >
          <Navbar/>
          <div className=' px-10 '>
            <h2 id='accueil' className='text-2xl font-mont text-left  my-4'>L'accord parfait de votre style</h2>
          </div>
          <Main/>
          {/* <Footer/> */}
        </div>
      
  )
}

export default Home