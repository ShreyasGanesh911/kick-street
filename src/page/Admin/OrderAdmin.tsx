import React from 'react'
import OrderTableChild from '../../components/Admin/OrderTableChild'

export default function OrderAdmin() {
  return (
    <>
     <section className='adminPage bg-white p-2'>
      <h1 className='p-3 text-2xl font-semibold w-full'>Orders</h1>
        <div className='w-full flex justify-evenly items-center mt-5' >
          <input type="search" className='w-3/5 p-3 outline-none rounded text-xl border border-indigo-500 ' placeholder='Search' />
         
        </div>  
        <div className='w-11/12 flex flex-wrap justify-center items-center  my-9'>
        <table className='w-full my-14 py-5'>
            <tr className='border-b'>
              <th className=' w-1/6 py-5'>ORDER ID</th>
              <th className=' w-1/6 py-5'>DATE</th>
              <th className='w-1/6 py-5'>NAME</th>
              <th className='w-1/6 py-5'>AMOUNT</th>
              <th className='w-1/6 py-5'>PAYMENT</th>
              <th className='w-1/6 py-5'>STATUS</th>
            </tr>
            <OrderTableChild/>
            <OrderTableChild/>
            <OrderTableChild/>
            <OrderTableChild/>
            <OrderTableChild/>
            <OrderTableChild/>
            <OrderTableChild/>
            <OrderTableChild/>
            

            
 
          </table>
          </div>
      </section>  
    </>
  )
}
