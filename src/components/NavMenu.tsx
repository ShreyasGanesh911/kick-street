import { motion } from 'framer-motion'
import React, { Dispatch, SetStateAction } from 'react'
import { NavLink } from 'react-router-dom'
type Props = {
    setMenu : Dispatch<SetStateAction<boolean>>
}
export default function NavMenu({setMenu}:Props) {
  return (
    <>
    <motion.section initial={{x:-200}} animate={{x:0}}  className='fixed top-0 bottom-0 left-0  w-5/6 h-full bg-white z-50 translate-x-0' >
        <button className='absolute left-3 top-3  text-6xl' onClick={()=>setMenu(false)}>&times;</button> 
        <div className=' mt-24 pl-5'>
          <p className=' text-lg border-b'>Shopping</p>
            <button className='block py-2' onClick={()=>setMenu(false)}><NavLink to='/men'><i className="fa-solid fa-mars px-1"></i>Men</NavLink></button>
            <button className='block py-2' onClick={()=>setMenu(false)}><NavLink to='/women'><i className="fa-solid fa-venus px-1"></i>Women</NavLink></button>
            <button className='block py-2' onClick={()=>setMenu(false)}><NavLink to='/men'><i className="fa-solid fa-chart-line px-1"></i>Trending</NavLink></button>
        </div>
        <div className=' mt-2 pl-5'>
          <p className=' text-lg border-b'>Account</p>
            <button className='block py-2' onClick={()=>setMenu(false)}><NavLink to='/account'><i className="fa-solid fa-user px-1 "></i>Account</NavLink></button>
            <button className='block py-2' onClick={()=>setMenu(false)}><NavLink to='/cart'><i className="fa-solid fa-bag-shopping px-1  z-30"></i>Cart</NavLink></button>
            <button className='block py-2' onClick={()=>setMenu(false)}><NavLink to='/about'><i className="fa-solid fa-circle-info px-1"></i>About</NavLink></button>
        </div>
     </motion.section> 
    </>
  )
}
