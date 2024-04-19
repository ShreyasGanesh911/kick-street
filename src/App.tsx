import '@radix-ui/themes/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './global/Navbar';
function App() {
  return (

    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path = "" element=""></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
