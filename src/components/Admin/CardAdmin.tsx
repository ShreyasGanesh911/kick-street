import React from 'react'
import img from '../../Assets/Shoe.webp'
export default function CardAdmin() {
  return (
    <>
      <div className='bg-white rounded w-60 h-80 border m-2'>
            <div className='h-3/4 overflow-hidden'>
                <img src={img} className="object-contain overflow-hidden" alt="" />
            </div>
            <div className='h-1/4 border-t flex items-center flex-col justify-evenly'>
            <p className="font-thin text-">Air Jordan 1 Low 'Bred Toe 2.0'</p>
            <p >Price : <span className="font-semibold">Rs. 9999</span> </p>
            </div>
      </div>
    </>
  )
}
