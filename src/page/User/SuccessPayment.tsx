import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function SuccessPayment() {
    const [searchParams] = useSearchParams();
    useEffect(()=>{

    },[])
    return (
    <section className='page flex justify-center items-center flex-col'>
        <div className='text-9xl p-2 text-green-500'><i className="fa-solid fa-circle-check fa-2xl"></i></div>
        <p className='mt-24 font-semibold text-xl '>Thankyou! Your order has been placed!</p>
        <p className=''>Payment ID : <span className='text-indigo-600'>{searchParams.get('payment_id')}</span> </p>
    </section>
  )
}
