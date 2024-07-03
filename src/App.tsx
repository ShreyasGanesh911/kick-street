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
import UserAdmin from './page/Admin/UserAdmin';
import SettingsAdmin from './page/Admin/SettingsAdmin';
import PaymentAdmin from './page/Admin/PaymentAdmin';
import Checkout from './page/User/Checkout';
import SuccessPayment from './page/User/SuccessPayment';
import AboutUser from './page/User/AboutUser';
import AdminLogin from './page/Admin/AdminLogin';
import AboutUserAdmin from './page/Admin/AboutUserAdmin';
import OrderDetails from './page/Admin/OrderDetails';
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
          <Route path = "account" element={<AboutUser/>}></Route>
          <Route path = "about" element={<About/>}></Route>
          <Route path = "men"  element={<AllProducts key={'men'}/>}></Route>
          <Route path = "women"  element={<AllProducts key={'women'}/>}></Route>
          <Route path = "all" element={<AllProducts key={'all'}/>}></Route>
          <Route path = "checkout" element={<Checkout/>}></Route>
          <Route path = 'checkout/success' element={<SuccessPayment/>}></Route>
        </Route>
        
           <Route path='admin/login' element={<AdminLogin/>}></Route>
          <Route path="/admin/" element={<Sidebar/>}>
          
          <Route path='' element={<HomeAdmin/>}></Route>
         
          <Route path='orders' element={<OrderAdmin/>}></Route>
          <Route path='orders/:id' element={<OrderDetails/>}></Route>
          <Route path='products' element={<ProductAdmin/>}></Route>
          <Route path='users' element={<UserAdmin/>}></Route>
          <Route path='users/:id' element={<AboutUserAdmin/>}></Route>
          <Route path='settings' element={<SettingsAdmin/>}></Route>
          <Route path='payments' element={<PaymentAdmin/>}></Route>
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