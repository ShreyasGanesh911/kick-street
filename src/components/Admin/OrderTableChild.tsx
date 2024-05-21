import React from 'react'

export default function OrderTableChild() {
  return (
    <>
     <tr className='border-b h-12 rounded hover:bg-neutral-100 '>
              <td className=' w-1/6 text-center py-5'>S658w4dwdji<button><i className="fa-solid fa-copy mx-2"></i></button></td>
              <td className=' w-1/6 text-center py-5'>{Date.now()}</td>
              <td className='w-1/6 text-center py-5 capitalize'>shreyas</td>
              <td className='w-1/6 text-center py-5'>8268.00 </td>
              <td className='w-1/6 text-center py-5 capitalize'>Credit card</td>
              <td className='w-1/6 text-center py-5'><span className={`bg-green-400 rounded p-1  `}>Completed</span></td>
            </tr> 
    </>
  )
}
