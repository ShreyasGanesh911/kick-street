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
      <Navbar/>
        <Routes>
          
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
