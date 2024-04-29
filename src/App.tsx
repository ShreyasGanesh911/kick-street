import '@radix-ui/themes/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './global/Navbar';
import Footer from './global/Footer';
import Home from './page/User/Home';
import Login from './page/User/Login';
import Product from './components/Product';
import Notfound from './global/Notfound';
function App() {
  return (

    <>
      <BrowserRouter>
      
      <Routes> 
        <Route path = "/" element={<Navbar/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path="product/:productId" element={<Product/>}></Route>
        
        <Route path = "login" element={<Login/>}></Route>
        </Route>

        <Route path="/admin">
          
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