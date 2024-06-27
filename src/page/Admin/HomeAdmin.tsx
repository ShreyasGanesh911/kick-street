import React, { useEffect, useState } from 'react'
import LineChart from '../../components/Charts/LineChart'
import BarChart from '../../components/Charts/BarChart'
import { useNavigate } from 'react-router-dom'
import UseFetchGet from '../../Hooks/UseFetchGet'
type Result ={
  orderAmount:number,
  orderCount:number,
  productCount:number,
  month:string[],
  orders:number[],
  revenue:number[]
}
type Data = {
  success :boolean,
  result:Result
}
export default function HomeAdmin() {
  const [data,loading] = UseFetchGet<Result>(`http://localhost:4000/admin/stats`,'/admin/login')
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
            <div className='w-1/3 h-40 border flex flex-col justify-around '> 
                <p className='capitalize font-bold text-indigo-700 text-xl pl-5'><i className="fa-solid fa-indian-rupee-sign mx-2 bg-indigo-700 text-white py-2 px-3 rounded"> </i>Total revenue</p>
                <p className='text-3xl text-gray-500 pb-5 text-center'>₹{data?.orderAmount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>

            </div>
            <div className='w-1/3 h-40 border flex flex-col justify-around '>
            <p className='capitalize font-bold text-indigo-700 text-xl pl-5'><i className="fa-solid fa-box mx-2 bg-indigo-700 text-white py-2 px-3 rounded"></i>Total products</p>
            <p className='text-3xl text-gray-500 pb-5 text-center'>{data?.productCount}</p>
            </div>
          </div>
          <div className='w-1/2 flex justify-around'>
            <div className='w-1/3 h-40 border flex flex-col justify-around '>
            <p className='capitalize font-bold text-indigo-700 text-xl pl-5'><i className="fa-solid fa-boxes-stacked mx-2 bg-indigo-700 text-white py-2 px-3 rounded"></i>Total orders</p>
            <p className='text-3xl text-gray-500 pb-5 text-center'>{data?.orderCount}</p>
             </div>
            <div className='w-1/3 h-40 border flex flex-col justify-around '>
            <p className='capitalize font-bold text-indigo-700 text-xl pl-5'>Total revenue</p>
            <p className='text-3xl text-gray-500 pb-5 text-center'>{data?.orderAmount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-around '>
          <div className='w-1/2 flex justify-center '>
            <LineChart month={data?.month?data.month:[]} revenue={data?.revenue? data.revenue:[]}/>
          </div>
          <div className='w-1/2 flex justify-center '>
          <BarChart  month={data?.month?data.month:[]} orders={data?.orders?data.orders:[]}/>    
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
