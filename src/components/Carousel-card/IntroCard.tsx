import React from 'react'

export default function IntroCard() {
  return (
    <> 
        <div className='w-full flex flex-row-reverse pr-14 h-full items-center backGround-car '>
            <div className='bg-white p-5 rounded-lg w-1/3 h-4/6'>
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
