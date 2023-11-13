import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Checkout from './pages/Cart/Checkout';



function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
