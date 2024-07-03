import Carousel from '../../components/CarouselDiv'
import "../../Styles/Home.css"
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Product} from '../../Types/Product'
//import UseFetch from '../../Hooks/UseFetch'

export default function Home() {
  const [products,setProucts] = useState<Product[]>([])
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      e.preventDefault()
      const value = e.currentTarget.value
      console.log(value)
  }
  const getData = async()=>{
    try{
      const response = await fetch('http://localhost:4000/products/all?limit=12', {
        method: "GET", 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json(); 
      console.log(data.result[0]._id)
      setProucts(data.result)
    
    }catch(e){
      console.log(e)
    }
  }
  //const [data] = UseFetch('http://localhost:4000/products/all?limit=12')
  
  useEffect(()=>{
   getData()
    
  },[])
  return (
    <>
     <section className='page displayFlex flex-col relative'>
      <Carousel />
      <div className='container-div py-20 w-full overflow-x-hidden'>  
      {products.map((e)=>{
        return (<Link key={e._id} to={`/product/${e.name}`} state={{description:e.description,price:e.price,images:e.images,size:e.size,name:e.name,_id:e._id }}> <Card key={e._id} _id={e._id} description={e.description} gender={e.gender} images={e.images} name={e.name} offer={e.offer} price={e.price} rating={e.rating} reviews={e.reviews} sale={e.sale} size={e.size} stock={e.stock}  /></Link>)
      })}
      </div>
      <div className='mb-14'><Link to='/all ' state={{gender:""}}><button className='border p-4 font-medium border-black text-lg hover:bg-neutral-200 '>View all</button></Link></div>
      <h2 className='w-3/4 text-3xl'>Shop by category</h2>
      <div className='container-div py-20 w-3/4 text-white'>
      <Link to ='/men' ><button className='w-72 h-72 bg-black flex justify-center items-center text-2xl hover:text-3xl hover:delay-100 hover:duration-150' value='men'>
          Men
        </button></Link>
        <Link to='/women' ><button className='w-72 h-72 bg-black flex justify-center items-center text-2xl hover:text-3xl hover:delay-75 hover:duration-150'  value='women'>Women</button></Link>
        <button className='w-72 h-72 bg-black flex justify-center items-center text-2xl hover:text-3xl hover:delay-75 hover:duration-150' onClick={handleClick} value='trending'>Trending</button>
      </div>
      <div></div>
     </section>
   
    </>
  )
}
