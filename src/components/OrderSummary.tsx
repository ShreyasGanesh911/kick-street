import React from 'react'

export default function OrderSummary() {
  return (
    <>
        <div className='border rounded w-1/5 ml-5 ' style={{minHeight:"60vh",height:"auto"}}>
          <h2 className='text-3xl p-2 border-b '>Order summary</h2>
          <div className='px-2 flex justify-around'>
            <p>Sub total </p>
            <p>411.00</p>
          </div>
          <div className='px-2 flex justify-around border-t'>
            <p>Total </p>
            <p>411.00</p>
          </div>
        </div>
    </>
  )
}
