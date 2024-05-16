import React from 'react'
import TableChild from '../../components/TableChild'
import OrderSummary from '../../components/OrderSummary'

export default function Cart() {
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
            <TableChild/>
            <TableChild/>
            <TableChild/>
            <TableChild/>
            <TableChild/>
          </table>
        </div>
          <OrderSummary/>
      </section>
    </>
  )
}
