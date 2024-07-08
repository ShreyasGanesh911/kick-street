import React from 'react'

export default function IntroCard() {
  return (
    <> 
        <div className='w-full  flex flex-row-reverse sm:pr-14 h-full sm:items-center backGround-car sm:justify-start justify-center'>
            <div className=' sm:p-5  sm:bg-white rounded-lg sm:w-1/3 w-5/6 sm:h-4/6 h-full'>
            <p className='sm:text-4xl text-2xl  p-2 rounded bg-white mt-5 underline '>Kick street</p>
            <p className='text-sm font-semibold my-2'>Under retail for sure </p>
           <div className='sm:my-10'>
           <p><span className='text-sm'>Use coupon code</span> <span className='text-black font-medium'>DISCOUNT20</span> </p>
            <p className='text-sm'>For <span className='text-black font-medium text-lg'>20%</span> off on your first order</p>
           </div>
            </div>
        </div>
    </>
  )
}
