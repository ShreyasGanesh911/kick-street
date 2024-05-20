import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
//import logo from '../../Assets/Logo.png'
const menuList:{name:string,fav:string,path:string}[] = [{name:"Overview",fav:'fa-solid fa-chart-simple',path:'/admin'},{name:'Products',fav:'fa-solid fa-box',path:'/admin/products'},{name:"Orders",fav:"fa-solid fa-box-open",path:'/admin/orders'},{name:"Users",fav:"fa-solid fa-users",path:'/admin/users'}
  ,{name:"Payments",fav:'fa-solid fa-money-check-dollar',path:'/admin/payments'},{name:"Settings",fav:'fa-solid fa-gear',path:'/admin/settings'}
]
export default function SidebarMenu() {
  
  return (
    <>
  <Sidebar className=' inline-block ' backgroundColor='#fafafa' width='15vw' style={{display:'inline-block',position:'fixed',height:'100vh'}}>
    <Menu>
        <div className="w-full flex justify-center items-center p-5">KICK STREET</div>
        {menuList.map(({name,fav,path})=>
          <Link to={path}><MenuItem className='text-black font-semibold '><i className={`${fav}  text-indigo-700`}></i> <span >{name}</span></MenuItem></Link>
        )}
       
        <button className='p-3 bg-black text-white mx-5 rounded-md hover:bg-slate-800 absolute bottom-10 left-0' ><i className={`fa-solid fa-right-from-bracket fa-rotate-180 `}></i></button>
    </Menu>
  </Sidebar>
      <Outlet/>
    </>
    
  )
}
