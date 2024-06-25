import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import { Result } from '../../Types/About'

type UserDetails = {
  name:string,
  email:string,
  phone: number,
  type:string
}
type Data = {
  success : boolean,
  orders : Result[] ,
  userDetails : UserDetails[]
}
export default function AboutUserAdmin() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.pathname.split('/')[3])
  const [orders,setOrders] = useState<Result[]>()
  const [details,setDetails] = useState<UserDetails>()
  const getData = async()=>{
    const user = location.pathname.split('/')[3]
    // if(!user)
   
    const response = await fetch(`http://localhost:4000/admin/userdetails?userId=${user}`,{
      method: "GET", 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
    })
    if(response.status === 500)
        return navigate('/admin/users')
    const data:Data = await response.json()
    console.log(data)
    setOrders(data.orders)
    setDetails(data.userDetails[0])
  }
  useEffect(()=>{
      getData()
  },[])
  return (
    <>
      <section className="adminPage bg-white text-black flex pt-12">
              <div className=' w-4/6 mx-5  '>
                <h2 className='text-2xl p-2'>Order history</h2>
              {
                orders?.length ?
                <>
              {orders?.map(e=>
              <div className='border-b hover:bg-gray-50 flex   justify-evenly h-16 items-center '>
                <p className='w-1/5 underline text-start cursor-pointer'>#{e._id}</p>
               
                <p className='w-1/5 text-center'>{e.orderDate.slice(0,10)}</p>
                <p className='w-1/5 text-center'>{e.status}</p>
                <p className='w-1/5 text-center'>{e.amount}</p>
                
              </div>)}
                </>:<h1 className='p-3 mx-5 w-full text-center text-xl text-gray-600'>No orders have been placed by the customer</h1>
              }
              </div>
              <div className='w-2/6    h-64 px-5'>
              <div className='w-full flex justify-center flex-col border'>
                <div className=' w-full border-b p-3'>
                  <label className='w-1/2 font-bold'>Name</label>
                  <p className='w-1/2'>{details?.name}</p>
                </div>
                <div className=' w-full border-b p-3'>
                  <label className='w-1/2 font-bold'>Email</label>
                  <p className='w-1/2'>{details?.email}</p>
                </div>
                <div className=' w-full border-b p-3'>
                  <label className='w-1/2 font-bold'>Phone</label>
                  <p className='w-1/2'>{details?.phone}</p>
                </div>
              </div>
              </div>

      </section>
    </>
  )
}
