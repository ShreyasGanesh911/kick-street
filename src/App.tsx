import '@radix-ui/themes/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './global/Navbar';
import Footer from './global/Footer';
function App() {
  return (

    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path = "" element=""></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
