import "../Styles/Navbar.css"
import logo from "../Assets/Logo.png"
import { NavLink, Outlet ,Link} from "react-router-dom"
export default function Navbar() {
  
  return (
    <>
    <nav className='border border-slate-950 nav displayFlex'>
      <div className="displayFlex nav-div">
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
