import { useEffect, useState } from 'react'
import {Product} from '../../Types/Product'
import IntroCard from '../../components/Carousel-card/IntroCard'
import Filter from '../../components/AllProducts/Filter'
import CardAdmin from '../../components/Admin/CardAdmin'
import { Link } from 'react-router-dom'

export default function AllProducts() {
  const [products,setProucts] = useState<Product[]>([])
  const getData = async()=>{
    try{
      const response = await fetch('http://localhost:4000/products/all?limit=20', {
        method: "GET", 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json(); 
      console.log(data.result)
      setProucts(data.result)
    
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    window.scrollTo(0,0)
})
  useEffect(()=>{
    getData()
  },[])
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
          {products.map((e)=>{
            return(<Link to={`/product/${e.name}`} state={{description:e.description,price:e.price,images:e.images,size:e.size,name:e.name }} > <CardAdmin description={e.description} gender={e.gender} images={e.images} name={e.name} offer={e.offer} price={e.price} rating={e.rating} reviews={e.reviews} sale={e.sale} size={e.size} stock={e.stock}  /></Link>)
          })}     
        </div>
       
      </div>
      </div>
      </section> 
    </>
  )
}
