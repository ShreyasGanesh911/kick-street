import React from 'react'

export default function TableChildAdmin() {
  return (
    <>
      <tr className='border-b h-12 rounded hover:bg-neutral-100 '>
              <td className=' w-1/5 text-center py-5'>S658w4dwdji<button><i className="fa-solid fa-copy mx-2"></i></button></td>
              <td className=' w-1/5 text-center py-5'>Shreyas</td>
              <td className='w-1/5 text-center py-5'>9945333584<button><i className="fa-solid fa-copy mx-2"></i></button></td>
              <td className='w-1/5 text-center py-5'>EMAIL@gmail.com <button><i className="fa-solid fa-copy mx-2"></i></button></td>
              <td className='w-1/5 text-center py-5'><button className='text-red-500'><i className="fa-solid fa-pen-to-square mx-3"></i>EDIT</button></td>
            </tr>
    </>
  )
}
