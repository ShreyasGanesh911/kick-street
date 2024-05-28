import React from 'react'
type Props = {
  name:string,
  price:number,
  qty:number,
  pId:string
}
export default function TableChild({name,price,qty,pId}:Props) {
  return (
    <>
    <tr className='h-28 border-b '>
        <td className='w-1/4 text-center '>
            <div className='flex'>
                <div className='w-1/2 bg-red-400 h-20 mx-3'></div>
                <div className='w-1/2'>
                    <p className='text-start capitalize'>{name}</p>
                    <p className='text-start text-sm'>Size: M{pId}</p>
                    <button className='text-red-600'><span><i className="fa-solid fa-trash mx-2 text-sm"></i></span>Remove</button>
                </div>
            </div>
        </td>
        <td className='w-1/4 text-center'>{price}</td>
        <td className='w-1/4 text-center'>{qty}</td>
        <td className='w-1/4 text-center'>${qty*price}</td>
    </tr>
    </>
  )
}
