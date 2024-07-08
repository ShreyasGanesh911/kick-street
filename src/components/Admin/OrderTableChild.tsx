import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  orderId : string,
  date : string,
  name : string,
  amount: number,
  emailId : string,
  status : string,
  paymentStatus:string
}
export default function OrderTableChild({orderId,date,name,amount,emailId,status,paymentStatus}:Props) {
  return (
    <>
     <tr className='border-b h-12 rounded hover:bg-neutral-100 w-full '>
              <td className=' w-1/6 text-center py-5'><Link to={`/admin/orders/${orderId}`}><span className='hover:text-indigo-700 cursor-pointer text-sm'>{orderId}</span></Link></td>
              <td className=' w-1/6 text-center py-5'>{date.slice(0,10)}</td>
              <td className='w-1/6 text-center py-5 '>{emailId}</td>
              <td className='w-1/6 text-center py-5 capitalize'>{paymentStatus}</td>
              <td className='w-1/6 text-center py-5'><span className={`bg-green-400 rounded p-1  `}>{status}</span></td>
              <td className='w-1/6 text-center py-5'>₹ {amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
             
            </tr> 
    </>
  )
}
