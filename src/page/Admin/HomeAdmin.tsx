import React from 'react'

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
            <div className='w-1/3 h-40 bg-slate-500'></div>
            <div className='w-1/3 h-40 bg-slate-500'></div>
          </div>
          <div className='w-1/2 flex justify-around'>
            <div className='w-1/3 h-40 bg-slate-500'></div>
            <div className='w-1/3 h-40 bg-slate-500'></div>
          </div>
        </div>
        <div className='flex items-center justify-around '>
          <div className='w-1/2 flex justify-center '>
          <div className='w-5/6 h-96 bg-slate-500'></div>
          </div>
          <div className='w-1/2 flex justify-center '>
          <div className='w-5/6 h-96 bg-slate-500'></div>
          </div>
        </div>

        <div className=' flex justify-center items-start py-5'>
          <div className='w-5/6 bg-green-500'>
            <h3>Orders</h3>
            <div className='w-full h-96'></div>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}
