import React, { useEffect, useState } from 'react'
import TableChild from '../../components/TableChild'
import OrderSummary from '../../components/OrderSummary'
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from '../../Redux/Store'
export default function Cart() {
  let sum = 0
  const cart = useSelector((state: RootState) => state.cart.cart)
  
  const dispatch = useDispatch()
  useEffect(()=>{

  },[])
  return (
    <>
      <section className='page flex justify-center items-start p-5 text-black'>
        <div className='w-1/2  bg-neutral-50 rounded-lg ' style={{minHeight:"60vh",height:"auto"}}>
        {
          cart.length===0 ? <div className='w-full h-96  flex items-center justify-center  flex-col' >
            <h1 className='text-3xl text-center font-'>Oh no, your cart looks empty!</h1>
            
          </div>:
          <table className='w-full my-14 py-5'>
          <tr >
            <th className=' w-2/5'>PRODUCT</th>
            <th className='w-1/5'>PRICE</th>
            <th className='w-1/5'>QUANTITY</th>
            <th className='w-1/5'>TOTAL</th>
          </tr>
          {cart.map((e)=>{
            sum += e.price * e.qty
            
            return <TableChild name={e.name} price={e.price} qty={e.qty} key={e.pId} pId={e.pId} size={e.size}/>
          })}
        </table>
        }
        </div>
          {cart.length ? <OrderSummary sum={sum}/> : <></>}
      </section>
    </>
  )
}
