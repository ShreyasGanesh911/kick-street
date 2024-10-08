import { useEffect, useState } from 'react'
import {Product} from '../../Types/Product'
import img from '../../Assets/725b1b77-89e7-405d-a902-5a8896f5338b.jpg'
import Filter from '../../components/AllProducts/Filter'
import CardMini from '../../components/CardMini'
import { Link, useLocation } from 'react-router-dom'

export default function AllProducts() {
  const location = useLocation()
  const [products,setProucts] = useState<Product[]>([])
  const [sort,setSort] = useState<number>(1)
  const [show,setShow] = useState(false)
  const [brands,setBrands] = useState<string[]>([])
  const handleSort = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    e.preventDefault()
    setSort(Number(e.currentTarget.value))
  } 
  const getData = async()=>{
    let gender = undefined
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
  },[sort,brands])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
     <section className='page flex justify-start items-center flex-col overflow-hidden'>

      <div className='sm:w-3/4 w-11/12 sm:h-72 h-36 mt-10 bg-red-400'>
        <img src={img} alt="" className='w-full h-full object-cover'/>
      </div>
        <h1 className='text-5xl p-2 mt-6 font-extralight '>All sneakers</h1>
      <div className='w-full flex mt-14 overflow-hidden'>
        {show && <Filter brands={brands} setBrands={setBrands} setShow={setShow} />}
        <div className='w-1/4 hidden sm:block'>
        <Filter brands={brands} setBrands={setBrands} setShow={setShow}/>
        </div>
      <div className='sm:w-3/4 w-full  '>
        <div className='flex flex-row-reverse w-11/12 justify-between  p-2'>
         
          <select name="sort" className='border p-2 rounded-none outline-none border-black' onChange={handleSort}>
            <option value="1" className='p-2 border bg-white outline-none  rounded-none' >Low to High</option>
            <option value="-1" className='p-2 border bg-white outline-none  rounded-none' >High to Low</option>
          </select>
          <button onClick={()=>setShow(true)} className=' sm:hidden border ml-5 py-2 px-3 '><i className="fa-solid fa-filter mx-1"></i>Filter</button>
        </div>
        <div className='w-full flex flex-wrap py-5 justify-center items-center '>
          {products.map((e)=>{
            return(<Link to={`/product/${e.name}`} key={e._id}  > <CardMini key={e._id} name={e.name} price={e.price} images={e.images} /></Link>)
          })}     
        </div>
       
      </div>
      </div>
      </section> 
    </>
  )
}
