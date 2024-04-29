import React, { useEffect } from 'react'
import img from "../Assets/Shoe.webp"
import ProductDetails from './ProductDetails'
export default function Product() {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    <>
     <section className="page flex justify-between items-center ">
        <div className='w-1/2  flex items-center justify-center' style={{height:"90vh"}}> 
            <div className=' w-3/4 h-5/6 mt-10'>
            <img src={img} className="object-contain overflow-hidden" alt="" />
            </div>
        </div>  
        <div className='w-1/2 flex items-start justify-center' style={{height:"90vh"}}>
        <div className='  w-3/4 h-5/6 mt-10 flex justify-center items-center'>
            <ProductDetails/>    
        </div>    
        </div>  
    </section> 
    </>
  )
}
