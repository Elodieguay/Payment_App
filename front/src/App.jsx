import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Checkout from './pages/Cart/Checkout';
// import SignUp from "./pages/SignUp/SignUp";
// import Product from './pages/Product/Product';


function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Login/>}/>  */}
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/product/:id" element={<Product/>}/> */}
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
