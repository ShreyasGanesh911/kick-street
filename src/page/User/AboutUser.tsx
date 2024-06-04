import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AboutUser() {
  const [orders,setOrders] = useState<Result[]>()
  type ProductId = {
    images:{url:string}[],
    name:string,

  }
  type Items = {
    pId:ProductId,
    price :number,
    qty : number
  }
  type Data = {
    success:boolean,
    result : Result[]
  }
  type Result = {
    amount:number, 
    items:Items[],
    orderDate:string,
    payment : string,
    user : string,
    _id : string
  }
    const navigate = useNavigate()
    const checkUser = async()=>{
        try{
          const response = await fetch('http://localhost:4000/user/check', {
            method: "GET", 
            mode: "cors", 
            credentials: "include", 
            headers: {
              "Content-Type": "application/json",
            },
          });
          response.status===200 ? navigate('/account'):navigate('/login')
        }catch(e){console.log(e)}
      }
      useEffect(()=>{
          checkUser()
      },[])
      const getOrders = async()=>{
        //http://localhost:4000/order/myorders
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
        }catch(e){console.log(e)}
      }
      useEffect(()=>{
        getOrders()
      },[])
  return (
    <>
     <section className='page  flex justify-start items-center flex-col'>
      <h1 className='text-4xl p-3  text-slate-700 text'>My Account</h1>
      <div className='w-3/4 h-auto flex justify-evenly   border'>
        <div className='w-2/3  flex justify-start items-center flex-col'>
          <h1 className='capitalize text-slate-700   p-3 text-2xl border-b border-black w-3/4'>order details</h1>
          {orders?.length ? 
            <>
              {orders.map(e=><div className='w-3/4 h-28 bg-purple-100 flex'>
              <div className='w-3/4 h-full bg-red-100'>
              {e.items.map(f=><div className='w-full bg-purple-100'> 
                <div className='w-1/4 h-'>

                </div>
                <div className='w-3/4'>
                <p>{f.pId.name}</p>
                <p>{f.price} * {f.qty}</p>
                </div>
          
              </div>)}
                </div>  
              <div className='w-1/4 h-full bg-yellow-200'>
              <p className='flex-row-reverse flex px-2 font-thin'>{e.orderDate.slice(0,10)}</p>
                <p className='text-center font-semibold my-5'>Total {e.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</p>
               
                </div>  
              
              </div>)}
            </>:
            <h1>No orders have been placed</h1>  
        }
         
        </div>
        <div className='w-1/3 h-32  flex justify-start items-center flex-col'>
        <h1 className='capitalize text-slate-700   p-3 text-2xl border-b w-3/4 border-black'>Account details</h1>
        <p className='w-3/4'>Name  : {}</p>
        <p className='w-3/4'>Email  : {}</p>
        </div>
      </div>
    </section> 
    </>
  )
}
