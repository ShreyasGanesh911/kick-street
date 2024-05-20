import '@radix-ui/themes/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './global/Navbar';
import Footer from './global/Footer';
import Home from './page/User/Home';
import Login from './page/User/Login';
import Product from './components/Product';
import Notfound from './global/Notfound';
import Cart from './page/User/Cart';
import About from './page/About';
import AllProducts from './page/User/AllProducts';
import HomeAdmin from './page/Admin/HomeAdmin';
import Sidebar from './global/Admin/SidebarMenu';
import OrderAdmin from './page/Admin/OrderAdmin';
import ProductAdmin from './page/Admin/ProductAdmin';
function App() {
  return (

    <>
      <BrowserRouter>
      
      <Routes> 
          
          <Route path = "/" element={<Navbar/>}>
          <Route path='' element={<Home/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path="product/:productId" element={<Product/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path = "login" element={<Login/>}></Route>
          <Route path = "about" element={<About/>}></Route>
          <Route path = "all" element={<AllProducts/>}></Route>
        </Route>
        
          <Route path="/admin/" element={<Sidebar/>}>
          
          <Route path='' element={<HomeAdmin/>}></Route>
          <Route path='orders' element={<OrderAdmin/>}></Route>
          <Route path='products' element={<ProductAdmin/>}></Route>
          <Route path='users' element={<ProductAdmin/>}></Route>
          <Route path='settings' element={<ProductAdmin/>}></Route>
          <Route path='payment' element={<ProductAdmin/>}></Route>
        </Route> 
        <Route path='*' element={<Notfound/>}></Route>
      </Routes> 
      <Footer/>
    </BrowserRouter>

    
    </>
  )
}

export default App;
/* 
        
*/