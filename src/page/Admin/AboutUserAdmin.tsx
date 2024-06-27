import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { Result } from '../../Types/About'
import UseFetchGet from '../../Hooks/UseFetchGet'

type UserDetails = {
  name:string,
  email:string,
  phone: number,
  type:string
}
type Data = {

  orders : Result[] ,
  userDetails : UserDetails
  
  
}
export default function AboutUserAdmin() {
  const location = useLocation()
  const navigate = useNavigate()

  const [data,loading] = UseFetchGet<Data>(`http://localhost:4000/admin/userdetails?userId=${location.pathname.split('/')[3]}`,'/admin/users')
  console.log('a',data?.orders)
  return (
    <>
    <section className="adminPage bg-white text-black flex pt-12 flex-col justify-start items-center">
      <div className=' p-2 w-3/4 '>
        <button className=' py-2 px-3  text-xl rounded text-indigo-700' onClick={()=>navigate('/admin/orders')}>
          <i className="fa-solid fa-arrow-left"></i></button>Users
      </div>
      <div className='flex justify-center w-9/12 '>
        <div className=' w-3/4 mx-5  flex flex-col items-center justify-start'>
        <h1 className='w-full text-xl font-bold'>Order history</h1>
          {data?.orders.length ?
            
            <div className='w-full border rounded-lg my-3'>
              
              {data?.orders.map(e=>
                  <div className='border-b hover:bg-gray-50 flex   justify-evenly h-16 items-center '>
                    <p className='w-1/5 underline text-start cursor-pointer hover:text-indigo-700'>#<Link to={`/admin/orders/${e._id}`}>{e._id}</Link></p>
                    <p className='w-1/5 text-center'>{e.orderDate.slice(0,10)}</p>
                    <p className='w-1/5 text-center'>{e.status}</p>
                    <p className='w-1/5 text-center'>₹ {e.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  </div>
              )}
            </div>  :
            <h1 className='p-3 mx-5 w-full text-center text-xl text-gray-600'>No orders have been placed by the customer</h1> }
        </div>
        <div className='w-2/6 px-5 my-3'>
          <div className='w-full flex justify-center flex-col border rounded-lg'>
            <div className=' w-full border-b p-3'>
              <label className='w-1/2 font-bold'>Name</label>
              <p className='w-1/2'>{data?.userDetails.name}</p>
            </div>
            <div className=' w-full border-b p-3'>
              <label className='w-1/2 font-bold'>Email</label>
              <p className='w-1/2'>{data?.userDetails.email}</p>
            </div>
            <div className=' w-full border-b p-3'>
              <label className='w-1/2 font-bold'>Phone</label>
              <p className='w-1/2'>{data?.userDetails.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )   
}
