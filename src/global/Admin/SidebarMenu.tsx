import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
export default function SidebarMenu() {
  const [close,setClose] = useState(false)
  return (
    <>
  <Sidebar className='fixed left-0' backgroundColor='#ffffff'  transitionDuration={800} collapsed={close} collapsedWidth='6vw' width='15vw' style={{height:'100vh',position:'fixed'}}>
    <Menu>
      <SubMenu label="Charts">
        <MenuItem> Pie charts </MenuItem>
        <MenuItem> Line charts </MenuItem>
      </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
    </Menu>
  </Sidebar>
      <Outlet/>
    </>
    
  )
}
