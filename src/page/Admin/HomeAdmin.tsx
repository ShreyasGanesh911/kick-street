import React from 'react'
import LineChart from '../../components/Charts/LineChart'
import BarChart from '../../components/Charts/BarChart'

export default function HomeAdmin() {
  return (
    <>
     <section className='adminPage bg-white ' >
      <div className='w-full h-32 flex  justify-between items-center'>
        <h2 className='p-3 text-3xl ml-10'>Welcome back <span className='text-indigo-700 font-semibold '>Shreyas</span></h2>
        <div className='mr-10' >  
        <select name="sort" className='border p-2 rounded outline-none border-black' >
            <option value="1" className='p-2 border bg-white outline-none  rounded-none'>This Week</option>
            <option value="2" className='p-2 border bg-white outline-none  rounded-none'>This Month</option>
            <option value="2" className='p-2 border bg-white outline-none  rounded-none'>This Year</option>
          </select>
        </div>
      </div>
      <div className='w-full h-auto min-h-96 '>
        <div className='flex items-center justify-evenly py-5'>
          <div className='w-1/2 flex justify-around'>
            <div className='w-1/3 h-40 border'> Total revenue</div>
            <div className='w-1/3 h-40 border'>Total Products</div>
          </div>
          <div className='w-1/2 flex justify-around'>
            <div className='w-1/3 h-40 border'>Total orders </div>
            <div className='w-1/3 h-40 border'></div>
          </div>
        </div>
        <div className='flex items-center justify-around '>
          <div className='w-1/2 flex justify-center '>
            <LineChart/>
          </div>
          <div className='w-1/2 flex justify-center '>
          <BarChart/>    
          </div>
        </div>
        <div className=' flex justify-center items-start py-5'>
          <div className='w-5/6 border'>
            <h3>Orders</h3>
            <div className='w-full h-96'></div>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}
