import React from 'react'
import { toastSuccesss } from '../Toast'

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
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    navigator.clipboard.writeText(e.currentTarget.value)
    toastSuccesss("Copied Order ID")
  }
  return (
    <>
     <tr className='border-b h-12 rounded hover:bg-neutral-100 w-full '>
              <td className=' w-1/6 text-center py-5'>{orderId}<button value={orderId} onClick={handleClick}><i className="fa-solid fa-copy mx-2"></i></button></td>
              <td className=' w-1/6 text-center py-5'>{date.slice(0,10)}</td>
              <td className='w-1/6 text-center py-5 '>{emailId}</td>
              <td className='w-1/6 text-center py-5 capitalize'>{paymentStatus}</td>
              <td className='w-1/6 text-center py-5'><span className={`bg-green-400 rounded p-1  `}>{status}</span></td>
              <td className='w-1/6 text-center py-5'>{amount}</td>
             
            </tr> 
    </>
  )
}
