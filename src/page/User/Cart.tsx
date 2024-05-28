import React, { useEffect, useState } from 'react'
import TableChild from '../../components/TableChild'
import OrderSummary from '../../components/OrderSummary'
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from '../../Redux/Store'
export default function Cart() {
  let [total,setTotal] = useState(0)
  let sum = 0
  const cart = useSelector((state: RootState) => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()
  useEffect(()=>{

  },[])
  return (
    <>
      <section className='page flex justify-center items-start p-5 text-black'>
        <div className='w-1/2  border rounded-lg ' style={{minHeight:"60vh",height:"auto"}}>
          <table className='w-full my-14 py-5'>
            <tr >
              <th className=' w-2/5'>PRODUCT</th>
              <th className='w-1/5'>PRICE</th>
              <th className='w-1/5'>QUANTITY</th>
              <th className='w-1/5'>TOTAL</th>
            </tr>
            {cart.map((e)=>{
              sum += e.price * e.qty
              
              return <TableChild name={e.name} price={e.price} qty={e.qty} key={e.pId} pId={e.pId}/>
            })}
          </table>
        </div>
          <OrderSummary sum={sum}/>
      </section>
    </>
  )
}
