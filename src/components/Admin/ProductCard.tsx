import React from 'react'
type Props = {
    handleClick : (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    _id:string,
    price:number,
    stock:number,
    name:string
}
export default function ProductCard({handleClick,_id,price,stock,name}:Props) {
  return (
    <>
    <div className='w-full h-20 my-2 border-b py-5 flex'>
        <div className='w-1/4 flex justify-center items-center'><div className='w-16 h-16 bg-black'></div></div>
            <div className='w-1/4 flex justify-center items-center '>
                  <button className='w-full capitalize hover:underline hover:text-indigo-800 font-semibold' value={_id} onClick={handleClick}>{name}</button></div>
                <div className='w-1/4 flex justify-center items-center'>₹ {price}</div>
                <div className='w-1/4 flex justify-center items-center'>{stock}</div>

              </div> 
    </>
  )
}
