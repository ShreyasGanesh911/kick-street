import "../Styles/Navbar.css"
import logo from "../Assets/Logo.png"
import { Outlet } from "react-router-dom"
export default function Navbar() {
  return (
    <>
    <nav className='border border-slate-950 nav displayFlex'>
      <div className="displayFlex nav-div">
        <div className="nav-logo"><img className="logo" src={logo} alt="Logo Here" /></div>
        <div className="nav-main"><input className="nav-search" type="text" placeholder="Search" /></div>
        <div className="nav-side">
          <ul className="flex">
          <li><i className="fa-regular fa-user px-4"></i></li>
          <li><i className="fa-solid fa-circle-info"></i></li>
          <li><i className="fa-solid fa-bag-shopping px-4"></i></li>
          </ul></div>
      </div>
      
    </nav>
    <Outlet/>
    </>
    
    
  )
}
