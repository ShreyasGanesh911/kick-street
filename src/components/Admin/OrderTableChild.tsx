import React from 'react'
type Props = {
  orderId : string,
  date : string,
  name : string,
  amount: number,
  payment : string,
  status : string,
}
export default function OrderTableChild({orderId,date,name,amount,payment,status}:Props) {
  return (
    <>
     <tr className='border-b h-12 rounded hover:bg-neutral-100 '>
              <td className=' w-1/6 text-center py-5'>{orderId}<button><i className="fa-solid fa-copy mx-2"></i></button></td>
              <td className=' w-1/6 text-center py-5'>{date.slice(0,10)}</td>
              <td className='w-1/6 text-center py-5 capitalize'>{name}</td>
              <td className='w-1/6 text-center py-5'>{amount}</td>
              <td className='w-1/6 text-center py-5 capitalize'>{payment}</td>
              <td className='w-1/6 text-center py-5'><span className={`bg-green-400 rounded p-1  `}>{status}</span></td>
            </tr> 
    </>
  )
}
