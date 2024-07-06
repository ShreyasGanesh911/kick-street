import React, { useEffect, useState } from 'react'
import img from "../Assets/Shoe.webp"
import ProductDetails from './ProductDetails'
import { useLocation, useNavigate } from 'react-router-dom'
import { Product ,Images} from '../Types/Product'
type Data = {
  success:boolean,
  result:Product
}
export default function ProductCard() {
  const [details,setDetails] = useState<Product>({description:'',gender:'',images:[],name:'',offer:0,price:0,rating:0,reviews:[''],sale:false,size:[],stock:0,_id:''})
  const location = useLocation()
  const navigate = useNavigate()
  const getData = async()=>{
    try{
      const response = await fetch(`http://localhost:4000/products/singleProduct?name=${location.pathname.split('/')[2]}`, {
        method: "GET", 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.status === 404)
        return navigate('/')
      const data:Data = await response.json();
      console.log(data)
      setDetails(data.result)
    }catch(e){
      console.log(e)
    }
  }

    useEffect(()=>{
        window.scrollTo(0,0)
        getData()
    },[])
  return (
    <>
     <section className="page sm:flex justify-between items-center mb-5">
        <div className='sm:w-1/2 w-full flex flex-col items-center justify-center h-96 ' > 
            <div className=' sm:w-3/4 w-full sm:h-full bg-pink-200 '>
            <img  className="object-contain overflow-hidden" alt="" />
           
            </div>
            <div className='w-3/4 h-32 bg-red-500'></div>
        </div>  
        <div className='sm:w-1/2 flex items-start justify-center ' >
        <div className='  sm:w-3/4 h-5/6 mt-10 flex justify-center items-center'>
            <ProductDetails _id={details._id} description={details.description} gender={details.gender} images={details.images} name={details.name} offer={details.offer} price={details.price} rating={details.rating} reviews={details.reviews} sale={details.sale} size={details.size} stock={details.stock} />    
        </div>    
        </div>  
    </section> 
    </>
  )
}
