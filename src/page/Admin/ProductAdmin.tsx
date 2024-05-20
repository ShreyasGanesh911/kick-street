import React from 'react'
import Card from '../../components/Card'

export default function ProductAdmin() {
  return (
    <>
     <section className='adminPage bg-white p-2 flex items-center justify-center flex-col'>
      <h1 className='p-3 text-2xl font-semibold w-full'>Products</h1>
        <div className='w-full flex justify-evenly items-center mt-5' >
          <input type="search" className='w-3/5 p-3 outline-none rounded text-xl border border-indigo-500' placeholder='Search' />
          <button className='bg-indigo-600 text-white p-4 rounded-md mr-5 hover:bg-indigo-800'><i className="fa-solid fa-plus"></i>  Add product</button>
        </div>
        <div className='w-11/12 flex flex-wrap justify-center items-center border my-9 border-slate-200'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          
        </div>
      </section> 
    </>
  )
} 
