import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import {Data , Result} from '../../Types/About'
export default function AboutUser() {
  const [orders,setOrders] = useState<Result[]>()
  const [details,setDetails] = useState({name:"",email:""})

    const navigate = useNavigate()
    const handleLogout = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      try{
        await fetch('http://localhost:4000/logout', {
          method: "GET", 
          mode: "cors", 
          credentials: "include", 
          headers: {
            "Content-Type": "application/json",
          },
        });
          navigate('/')
      }catch(e){
        console.log(e)
      }
    }
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
          setDetails({name:data.details[0].name,email:data.details[0].email})
        }catch(e){console.log(e)}
      }
      useEffect(()=>{
          checkUser()
      },[])// eslint-disable-line react-hooks/exhaustive-deps
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
          setOrders(data.result)
        }catch(e){console.log(e)}
      }
      useEffect(()=>{
        getOrders()
      },[])
  return (
    <>
     <section className='page  flex justify-start items-center flex-col'>
      <h1 className='sm:text-4xl text-2xl p-3  text-slate-700 text'>My Account</h1>
      <div className='sm:w-3/4 w-11/12 h-auto flex sm:justify-evenly justify-center sm:flex-row flex-col-reverse  mb-10 pb-5'>
        <div className='sm:w-2/3 w-full flex justify-start items-center flex-col '>
          <h1 className='capitalize text-slate-700   p-3 text-2xl border-b border-black sm:w-3/4 w-5/6 sm:text-start text-center'>order history</h1>
          {orders?.length ? 
            <>
              {orders.map(e=>
              <div className='sm:w-3/4 w-full h-auto border-b  border-black flex sm:flex-row flex-col justify-center items-center'>
              <div className='sm:w-3/4 w-11/12 h-full flex sm:inline-block flex-col justify-start items-start'>
              {e.items.map(f=><div className='w-full  flex h-28 sm:my-5 my-3 justify-between'> 
                
                <div className='w-1/4 h-full  '>
                    <img src={f.pId.images[0].url} className='object-contain overflow-hidden h-full w-full' alt="" />
                </div>
                <div className='w-3/4 sm:px-4 px-2 py-1 sm:py-2 capitalize'>
                {}
                <p className='font-semibold text-sm sm:text-base'>{f.pId.name}</p>
                <p>qty :{f.qty}</p>
                <p>₹ {f.price.toFixed(2)} </p>
                <p>UK : <span className='font-semibold'>{f.size}</span></p>
                </div>
          
              </div>)}
                </div>  
              <div className='sm:w-1/4 w-full  h-full flex justify-between items-center flex-col'>
                <div className='sm:my-3 my-1'>
                <p className='font-semibold'>Date Placed</p>
                <p className='flex-row-reverse flex px-2 font-thin'>{e.orderDate.slice(0,10)}</p>
                </div>
                <p className='text-center  font-semibold sm:my-5 my-2 border-t border-black py-1'>Total {e.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
               
                </div>  
              
              </div>)}
            </>:
            <h1>No orders have been placed</h1>  
        }
         
        </div>
        <div className='sm:w-1/3 h-32  flex justify-start items-center flex-col relative'>
        <h1 className='capitalize text-slate-700  py-3 sm:p-3 text-2xl border-b sm:w-3/4 w-5/6 sm:text-start text-center border-black'>Account details</h1>
        <p className='w-3/4 font-medium'>Name  : {details.name}</p>
        <p className='w-3/4 font-medium'>Email  : {details.email}</p>
        <button className='border text-white sm:text-base text-sm bg-black rounded px-2 py-1 absolute right-0' onClick={handleLogout}>Logout</button>
        </div>
       
      </div>
    </section> 
    </>
  )
}
