import React, { useEffect } from 'react' 
import IntroCard from '../../components/Carousel-card/IntroCard'
import Filter from '../../components/AllProducts/Filter'
import CardAdmin from '../../components/Admin/CardAdmin'

export default function AllProducts() {
  useEffect(()=>{
    window.scrollTo(0,0)
})
  return (
    <>
     <section className='page flex justify-start items-center flex-col overflow-hidden'>

      <div className='w-3/4'>
      <IntroCard/>
      </div>
        <h1 className='text-5xl p-2 mt-6 font-extralight '>All sneakers</h1>
      <div className='w-full flex mt-14 overflow-hidden'>
      <Filter/>
      <div className='w-3/4  '>
        <div className='flex flex-row-reverse w-11/12   p-2'>
          <select name="sort" className='border p-2 rounded-none outline-none border-black' >
            <option value="1" className='p-2 border bg-white outline-none  rounded-none'>Low to High</option>
            <option value="2" className='p-2 border bg-white outline-none  rounded-none'>High to Low</option>
          </select>
        </div>
        <div className='w-full flex flex-wrap py-5 justify-center items-center'>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
          <CardAdmin/>
      
        </div>
       
      </div>
      </div>
      </section> 
    </>
  )
}
