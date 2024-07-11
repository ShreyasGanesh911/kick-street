import React from 'react'
import { Images } from '../../Types/Product'
type Props = {
    handleClick : (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    _id:string,
    price:number,
    stock:number,
    name:string,
    images:Images[]
}
export default function ProductCard({handleClick,_id,price,stock,name,images}:Props) {
  return (
    <>
    <div className='w-full h-20 my-2 border-b py-5 flex'>
        <div className='w-1/4 flex justify-center items-center'>
          <div className='w-16 h-20 '>  
          <img src={images[0]?images[0].url:""} className="object-contain overflow-hidden h-full w-full" alt="" /> 
          </div>
        </div>
            <div className='w-1/4 flex justify-center items-center '>
                  <button className='w-full capitalize hover:underline hover:text-indigo-800 font-semibold' value={_id} onClick={handleClick}>{name}</button></div>
                <div className='w-1/4 flex justify-center items-center'>₹ {price}</div>
                <div className='w-1/4 flex justify-center items-center'>{stock}</div>

              </div> 
    </>
  )
}
