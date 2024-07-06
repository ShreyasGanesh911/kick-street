import { useEffect, useState } from 'react'
import {Product} from '../../Types/Product'
import IntroCard from '../../components/Carousel-card/IntroCard'
import Filter from '../../components/AllProducts/Filter'
import CardMini from '../../components/CardMini'
import { Link, useLocation } from 'react-router-dom'

export default function AllProducts() {
  const location = useLocation()
  const [products,setProucts] = useState<Product[]>([])
  const [sort,setSort] = useState<number>(1)
  const [brands,setBrands] = useState<string[]>([])
  const handleSort = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    e.preventDefault()
    setSort(Number(e.currentTarget.value))
  } 
  const getData = async()=>{
    let gender = undefined
    console.log(location.pathname.split('/')[1])
    location.pathname.split('/')[1] ==='men' ? gender = 'male':gender = 'female'
    if(location.pathname.split('/')[1] === 'all')
      gender = ''
    try{
      const response = await fetch(`http://localhost:4000/products/all?limit=20&gender=${gender}&sort=${sort}&brand=${brands.join('')}`, {
        method: "GET", 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json(); 
      setProucts(data.result)
    
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  useEffect(()=>{
    getData()
  },[sort,brands])
  return (
    <>
     <section className='page flex justify-start items-center flex-col overflow-hidden'>

      <div className='sm:w-3/4 w-11/12 h-56 mt-10 bg-red-400'>
        
      </div>
        <h1 className='text-5xl p-2 mt-6 font-extralight '>All sneakers</h1>
      <div className='w-full flex mt-14 overflow-hidden'>
      <Filter brands={brands} setBrands={setBrands} />
      <div className='sm:w-3/4 w-full  '>
        <div className='flex flex-row-reverse w-11/12   p-2'>
          <select name="sort" className='border p-2 rounded-none outline-none border-black' onChange={handleSort}>
            <option value="1" className='p-2 border bg-white outline-none  rounded-none' >Low to High</option>
            <option value="-1" className='p-2 border bg-white outline-none  rounded-none' >High to Low</option>
          </select>
        </div>
        <div className='w-full flex flex-wrap py-5 justify-center items-center '>
          {products.map((e)=>{
            return(<Link to={`/product/${e.name}`} key={e._id}  > <CardMini key={e._id} name={e.name} price={e.price}/></Link>)
          })}     
        </div>
       
      </div>
      </div>
      </section> 
    </>
  )
}
