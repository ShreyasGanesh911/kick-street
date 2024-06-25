import React, { useEffect, useState } from 'react'
import OrderTableChild from '../../components/Admin/OrderTableChild'
import {Items} from "../../Types/About"
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
type User = {
  email : string,
  name : string,
  phone : number

}
type Result = {
  amount : number,
  items :Items
  orderDate : string,
  status : string,
  user : User,
  _id:string
}
type Response = {
  success : boolean,
  result : Result[]
}
export default function OrderAdmin() {
  const navigate = useNavigate()
  const [orders,setOrders] = useState<Result[]>()
  const getData = async()=>{
    let gender = undefined
  
    try{
      const response = await fetch(`http://localhost:4000/order/all`, {
        method: "GET", 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.status === 402)
        return navigate('/admin/login')
      const data:Response = await response.json();
      console.log(data) 
      setOrders(data.result)
      //setProucts(data.result)
    
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{getData()},[])
  return (
    <>
     <section className='adminPage bg-white p-2'>
      <h1 className='p-3 text-2xl font-semibold w-full'>Orders</h1>
        <div className='w-full flex justify-evenly items-center mt-5' >
          <input type="search" className='w-3/5 p-3 outline-none rounded text-xl border border-indigo-500 ' placeholder='Search' />
         
        </div>  
        <div className='w-full flex flex-wrap justify-center items-center  my-9'>
        <table className='w-full my-14 py-5'>
            <tr className='border-b'>
              <th className=' w-1/6 py-5'>ORDER ID</th>
              <th className=' w-1/6 py-5'>DATE</th>
              <th className='w-1/6 py-5'>EMAIL ID</th>
              <th className='w-1/6 py-5'>NAME</th>
              <th className='w-1/6 py-5'>STATUS</th>
              <th className='w-1/6 py-5'>AMOUNT</th>
            </tr>
            {
              orders?.map((e)=>{
                return <OrderTableChild paymentStatus={e.status} amount={e.amount} date={e.orderDate} name={e.user.name} emailId={e.user.email} orderId={e._id} status={e.status}/>
              })
            }         
          </table>
          </div>
      </section>  
      <ToastContainer/>
    </>
  )
}
