import React, { useEffect } from 'react'
import {useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { addToCart } from '../../Redux/Slice/Cart/Index';

export default function SuccessPayment() {
  const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    useEffect(()=>{
        dispatch(addToCart([]))
        localStorage.setItem('cart',JSON.stringify([]))
    },[])
    return (
    <section className='page flex justify-center items-center flex-col'>
        <div className='text-9xl p-2 text-green-500'><i className="fa-solid fa-circle-check fa-2xl"></i></div>
        <p className='mt-24 font-semibold text-xl '>Thankyou! Your order has been placed!</p>
        <p className=''>Payment ID : <span className='text-indigo-600'>{searchParams.get('payment_id')}</span> </p>
    </section>
  )
}
