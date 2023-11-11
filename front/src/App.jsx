import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
// import SignUp from "./pages/SignUp/SignUp";
// import Product from './pages/Product/Product';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login/>}/>  */}
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/product/:id" element={<Product/>}/> */}
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/signup" element={<SignUp/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
