import React, { useState } from 'react'
import OrderTableChild from '../../components/Admin/OrderTableChild'
import {Items} from "../../Types/About"
import { ToastContainer } from 'react-toastify'
import UseFetchGet from '../../Hooks/UseFetchGet'
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
export default function OrderAdmin() {
  const [data] = UseFetchGet<Result[]>("http://localhost:4000/order/all",'/admin/login')
  const [name,setName] = useState<string>("")
  return (
    <>
     <section className='adminPage bg-white p-2'>
      <h1 className='p-3 text-2xl font-semibold w-full'>Orders</h1>
        <div className='w-full flex justify-center items-center mt-5' >
          <input type="search" className='w-3/5 p-3 outline-none rounded text-xl border border-indigo-500 ' onChange={(e)=>{setName(e.target.value)}} placeholder='Search Order ID' />
         
        </div>  
        <div className='w-full flex flex-wrap justify-center items-center  my-9'>
        <table className='w-full my-10 py-5'>
            <tr className='border-b'>
              <th className=' w-1/6 py-5'>ORDER ID</th>
              <th className=' w-1/6 py-5'>DATE</th>
              <th className='w-1/6 py-5'>EMAIL ID</th>
              <th className='w-1/6 py-5'>NAME</th>
              <th className='w-1/6 py-5'>STATUS</th>
              <th className='w-1/6 py-5'>AMOUNT</th>
            </tr>
            {
              data?.filter((f)=>f._id.includes(name)).map((e)=>{
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
