import React, { useEffect, useState } from 'react'
import img from "../Assets/Shoe.webp"
import ProductDetails from './ProductDetails'
import { useLocation } from 'react-router-dom'
import { Product } from '../Types/Product'

export default function ProductCard() {
  const [details,setDetails] = useState<Product>({description:'',gender:'',images:[''],name:'aa',offer:0,price:0,rating:0,reviews:[''],sale:false,size:[],stock:0,_id:''})
  const location = useLocation()
  console.log(location.state.size[0].stock)
    useEffect(()=>{
        window.scrollTo(0,0)
        setDetails(location.state)
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
            <ProductDetails _id={location.state._id} description={location.state.description} gender={location.state.gender} images={location.state.images} name={details.name} offer={location.state.offer} price={location.state.price} rating={location.state.rating} reviews={location.state.reviews} sale={location.state.sale} size={location.state.size} stock={location.state.stock} />    
        </div>    
        </div>  
    </section> 
    </>
  )
}
