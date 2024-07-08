import "../Styles/Navbar.css"
import logo from "../Assets/Logo.png"
import { NavLink, Outlet ,Link} from "react-router-dom"
import { useSelector} from 'react-redux'
import {RootState} from '../Redux/Store'
import { useState } from "react"
import NavMenu from "../components/NavMenu"
export default function Navbar() {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const [menu,setMenu] = useState(false)
  
  return (
    <>
    <div className="bg-black  overflow-x-hidden text-white  flex justify-center w-full ">
      <span className="p-2">FREE SHIPPING ON ALL ORDERS ABOVE 19,999/-</span>
    </div>
     {menu && <NavMenu setMenu={setMenu}/>}
    <nav className=' nav flex justify-center items-start sticky top-0 bg-white z-30 overflow-hidden'>
    <button className=" py-3 px-3 sm:hidden mt-4 " onClick={()=>setMenu(true)}><i className="fa-solid fa-bars text-3xl"></i></button>
      <div className="flex  justify-between items-center nav-div bg-white ">
        <Link to='/'><div className="object-contain sm:h-24 sm:w-48 h-20 w-36 relative sm:left-32 left-20 sm:top-2"><img className="logo" src={logo} alt="Logo Here" /></div></Link>
        <div className="sm:flex hidden">
          <ul className="flex justify-center items-center">
            <NavLink to='/men' key='male' state={{gender:'male'}}><li className="px-3 hover:font-medium">Men</li></NavLink>
            <NavLink to='/women' key='female' state={{gender:'female'}} ><li className="px-3 hover:font-medium">Women</li></NavLink>
            <NavLink to='/cart'><li className="px-3 hover:font-medium">Trending</li></NavLink>
            <NavLink to='/cart'><li className="px-3 hover:font-medium">Sale</li></NavLink>
           
          </ul>
        </div>
        <div className="sm:hidden ">
          <NavLink to='/cart'> <i className="fa-solid fa-bag-shopping px-4 text-xl z-30"></i></NavLink>
          {cart.length>0 && <span className=" bg-indigo-600 z-0 text-white h-5 w-5 rounded-full text-sm flex justify-center items-center p-2 absolute top-5 right-1">{cart.length}</span>}
          
          </div>
        
        
      
        <div className="nav-side sm:flex hidden">
          <ul className="flex text-xl">
          <li ><NavLink to='/login'><i className="fa-regular fa-user px-4 "></i></NavLink></li>
          <li><NavLink to='/about'><i className="fa-solid fa-circle-info "></i></NavLink></li>
          <li className="z-50 "><NavLink to='/cart'> <i className="fa-solid fa-bag-shopping px-4 "></i></NavLink></li>
          {cart.length>0 && <span className=" bg-indigo-600 text-white h-4 w-4 rounded-full text-sm flex justify-center items-center p-2 relative bottom-2 right-6">{cart.length}</span>}
          </ul></div>
      </div>
      
    </nav>
    <Outlet/>
    </>
    
    
  )
}

