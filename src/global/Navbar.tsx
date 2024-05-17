import "../Styles/Navbar.css"
import logo from "../Assets/Logo.png"
import { NavLink, Outlet ,Link} from "react-router-dom"
export default function Navbar() {
 
  
  return (
    <>
    <div className="bg-black text-white  flex justify-center w-full">
      <span className="p-2">FREE SHIPPING ON ALL ORDERS ABOVE 9,999/-</span>
    </div>
    <nav className=' nav displayFlex sticky top-0 bg-white z-30'>
      <div className="displayFlex nav-div bg-white">
        <Link to='/'><div className="nav-logo"><img className="logo" src={logo} alt="Logo Here" /></div></Link>
        <div className="nav-main"><input className="nav-search" type="text" placeholder="Search" /></div>
        <div className="nav-side">
          <ul className="flex text-xl">
          <li><i className="fa-regular fa-user px-4"></i></li>
          <li><i className="fa-solid fa-circle-info"></i></li>
          <li><NavLink to='/cart'> <i className="fa-solid fa-bag-shopping px-4 "></i></NavLink></li>
          </ul></div>
      </div>
      
    </nav>
    <Outlet/>
    </>
    
    
  )
}
