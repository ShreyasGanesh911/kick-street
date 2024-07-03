import React, { useEffect, useState } from 'react'
import img from "../Assets/Shoe.webp"
import ProductDetails from './ProductDetails'
import { useLocation, useNavigate } from 'react-router-dom'
import { Product ,Images} from '../Types/Product'
import UseFetchGet from '../Hooks/UseFetchGet'
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
     <section className="page flex justify-between items-center ">
        <div className='w-1/2  flex items-center justify-center' style={{height:"90vh"}}> 
            <div className=' w-3/4 h-5/6 mt-10'>
            <img src={img} className="object-contain overflow-hidden" alt="" />
            </div>
        </div>  
        <div className='w-1/2 flex items-start justify-center' style={{height:"90vh"}}>
        <div className='  w-3/4 h-5/6 mt-10 flex justify-center items-center'>
            <ProductDetails _id={details._id} description={details.description} gender={details.gender} images={details.images} name={details.name} offer={details.offer} price={details.price} rating={details.rating} reviews={details.reviews} sale={details.sale} size={details.size} stock={details.stock} />    
        </div>    
        </div>  
    </section> 
    </>
  )
}
