import React from 'react'
import logo from '../../Assets/shoePic.png'
export default function Sale() {
  return (
    <>
        <div className='w-full flex  pl-14 h-full items-center  '>
        <img src={logo} alt="" />
            <div className='bg-white p-5 rounded-lg sm:w-1/3 w-full h-4/6'>
                
            <p className='text-6xl border p-2 rounded bg-white mt-5'>Kick street</p>
            <p className='text-sm font-semibold my-2'>Under retail for sure </p>
           <div className='my-10'>
           <p><span className='text-sm'>Use coupon code</span> <span className='text-black font-medium'>DISCOUNT20</span> </p>
            <p className='text-sm'>For <span className='text-black font-medium text-xl'>20%</span> off on your first order</p>
           </div>
            </div>
        </div> 
    </>
  )
}
