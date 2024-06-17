import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Data , Result} from '../../Types/About'
export default function AboutUser() {
  const [orders,setOrders] = useState<Result[]>()
  const [details,setDetails] = useState({name:"",email:""})

    const navigate = useNavigate()
    const checkUser = async()=>{
        try{
          const response = await fetch('http://localhost:4000/user/about', {
            method: "GET", 
            mode: "cors", 
            credentials: "include", 
            headers: {
              "Content-Type": "application/json",
            },
          });
          response.status===200 ? navigate('/account'):navigate('/login')
          const data = await response.json()
          console.log(data.details[0].name)
          setDetails({name:data.details[0].name,email:data.details[0].email})
        }catch(e){console.log(e)}
      }
      useEffect(()=>{
          checkUser()
      },[])
      const getOrders = async()=>{
        try{
          const response = await fetch('http://localhost:4000/order/myorders', {
            method: "GET", 
            mode: "cors", 
            credentials: "include", 
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data:Data = await response.json()
          
          console.log(data.result)
          setOrders(data.result)
          console.log("hello test ", data.result[5].items[0].pId.name)
        }catch(e){console.log(e)}
      }
      useEffect(()=>{
        getOrders()
      },[])
  return (
    <>
     <section className='page  flex justify-start items-center flex-col'>
      <h1 className='text-4xl p-3  text-slate-700 text'>My Account</h1>
      <div className='w-3/4 h-auto flex justify-evenly   border mb-10 pb-5'>
        <div className='w-2/3  flex justify-start items-center flex-col'>
          <h1 className='capitalize text-slate-700   p-3 text-2xl border-b border-black w-3/4'>order history</h1>
          {orders?.length ? 
            <>
              {orders.map(e=><div className='w-3/4 h-auto border-b border-black  flex'>
              <div className='w-3/4 h-full '>
              {e.items.map(f=><div className='w-full  flex h-28 my-5 justify-between'> 
                
                <div className='w-1/4 h-full bg-red-500 '>

                </div>
                <div className='w-3/4 px-4 py-2 capitalize'>
                {}
                <p className='font-semibold'>{f.pId.name}</p>
                <p>qty :{f.qty}</p>
                <p>₹ {f.price.toFixed(2)} </p>
                <p>UK : <span className='font-semibold'>{f.size}</span></p>
                </div>
          
              </div>)}
                </div>  
              <div className='w-1/4 h-full flex justify-between items-center flex-col'>
                <div className='my-3'>
                <p className='font-semibold'>Date Placed</p>
                <p className='flex-row-reverse flex px-2 font-thin'>{e.orderDate.slice(0,10)}</p>
                </div>
                <p className='text-center font-semibold my-5 border-t border-black py-1'>Total {e.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
               
                </div>  
              
              </div>)}
            </>:
            <h1>No orders have been placed</h1>  
        }
         
        </div>
        <div className='w-1/3 h-32  flex justify-start items-center flex-col'>
        <h1 className='capitalize text-slate-700   p-3 text-2xl border-b w-3/4 border-black'>Account details</h1>
        <p className='w-3/4 font-medium'>Name  : {details.name}</p>
        <p className='w-3/4 font-medium'>Email  : {details.email}</p>
        </div>
      </div>
    </section> 
    </>
  )
}
