import React, { useState } from 'react'
import { Product } from '../Types/Product'
export default function ProductDetails({description,name,price,size}:Product) {
  const [qty,setQty] = useState(1)
  const [select,setSelect] = useState(false)
  console.log(name)
  return (
    <>
        <div className='p-5 overflow-y-hidden h-auto bg-neutral-50 rounded-lg'>
      <h1 className='text-4xl capitalize py-5'>{name}</h1>
        <div className='my-3'>
        <p className='text-2xl'>RS. <span className='text-black font-semibold space-x-1 tracking-wider'>{price}/-</span></p>
      <p className='text-2xl'>Brand: <span className='font-semibold'>Adidas</span></p>
        </div>
      <ul className='inline-flex  p-1 my-3'>
        <li><button className={`text-white px-4 py-2  bg-gray-800 hover:bg-black rounded text-3xl ${qty===0 ? "cursor-not-allowed bg-gray-500":'' }`} disabled={qty===0? true:false} onClick={()=> setQty(qty-1) }>-</button></li>
        <li className='px-4 py-2 pt-3 mx-1 text-center border rounded border-black'>{qty}</li>
        <li><button className='text-white px-4 py-2 bg-gray-800 hover:bg-black rounded text-3xl' onClick={()=>setQty(qty+1)}>+</button></li>
      </ul>
      <br />
      <button className={`p-3 text-white border bg-gray-800 hover:bg-black rounded mb-5  ${qty===0 ? "cursor-not-allowed bg-gray-500":'' }`} disabled={qty===0? true: false}>Add to cart</button>
      <p>sizes (UK)</p>
      
      <div className='flex justify-start m-2'>
      {size.map((e)=>{
        return <button value={e.size} className={`w-10 h-10 border mx-3 flex justify-center items-center   hover:bg-neutral-200 ${select? 'border border-green-400':'border border-black'}`} onClick={()=>select?setSelect(false):setSelect(true)}>{e.size}</button>
      })}
      </div>

      <h4 className='text-2xl mb-3'>Description</h4>
      <p>{description}</p>
    </div>

    </>
  )
}
