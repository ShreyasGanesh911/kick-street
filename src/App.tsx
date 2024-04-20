import '@radix-ui/themes/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './global/Navbar';
import Footer from './global/Footer';
import Home from './page/User/Home';
function App() {
  return (

    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path = "/" element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
