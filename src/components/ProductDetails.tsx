import React, { useState } from 'react'

export default function ProductDetails() {
  const [qty,setQty] = useState(1)
  return (
    <>
        <div className='p-5 overflow-y-hidden h-auto bg-neutral-50 rounded-lg'>
      <h1 className='text-4xl capitalize py-5'>adidas OZWEEGO</h1>
        <div className='my-3'>
        <p className='text-2xl'>RS. <span className='text-black font-semibold space-x-1 tracking-wider'>11999/-</span></p>
      <p className='text-2xl'>Brand: <span>Adidas</span></p>
        </div>
      <ul className='inline-flex  p-1 my-3'>
        <li><button className={`text-white px-4 py-2  bg-gray-800 hover:bg-black rounded text-3xl ${qty===0 ? "cursor-not-allowed bg-gray-500":'' }`} disabled={qty===0? true:false} onClick={()=> setQty(qty-1) }>-</button></li>
        <li className='px-4 py-2 pt-3 mx-1 text-center border rounded border-black'>{qty}</li>
        <li><button className='text-white px-4 py-2 bg-gray-800 hover:bg-black rounded text-3xl' onClick={()=>setQty(qty+1)}>+</button></li>
      </ul>
      <br />
      <button className={`p-3 text-white border bg-gray-800 hover:bg-black rounded mb-5  ${qty===0 ? "cursor-not-allowed bg-gray-500":'' }`} disabled={qty===0? true: false}>Add to cart</button>
      <p>sizes</p>
      <div className='flex justify-start m-2'>
        <div className='w-10 h-10 border mx-3 flex justify-center items-center border-black'>8</div>
        <div className='w-10 h-10 border mx-3 flex justify-center items-center border-black'>9</div>
        <div className='w-10 h-10 border mx-3 flex justify-center items-center border-black'>10</div>
        <div className='w-10 h-10 border mx-3 flex justify-center items-center border-black'>11</div>

      </div>

      <h4 className='text-2xl mb-3'>Description</h4>
      <p>SPORTY SHOES WITH A FUTURISTIC OUTLOOK
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam dolore placeat quia ipsam distinctio vero consequuntur illum? Deserunt pariatur blanditiis exercitationem unde amet consectetur odit laudantium dolores ipsam placeat?
      </p>
    </div>

    </>
  )
}
