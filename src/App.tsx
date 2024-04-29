import '@radix-ui/themes/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './global/Navbar';
import Footer from './global/Footer';
import Home from './page/User/Home';
import Login from './page/User/Login';
function App() {
  return (

    <>
      <BrowserRouter>
      
        <Routes> 
          <Route path = "/" element={<Navbar/>}>
          <Route path='' element={<Home/>}></Route>
          <Route path = "login" element={<Login/>}></Route>
          </Route>

          <Route path="/admin">
            
          </Route> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
