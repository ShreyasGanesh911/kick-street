import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import CardAdmin from '../../components/Admin/CardAdmin'
import { Product } from '../../Types/Product'
import { motion } from 'framer-motion'
import ModalWrapper from '../../components/Modal/ModalWrapper'
import { useNavigate } from 'react-router-dom'
export default function ProductAdmin() {
  const navigate = useNavigate()
  const [products,setProucts] = useState<Product[]>([])
  const [sort,setSort] = useState<number>(1)
  const [brands,setBrands] = useState<string[]>([])
  const [show,setShow] = useState<boolean>(false)
  const [productId,setProductId] = useState<string>("")
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setProductId(e.currentTarget.value)
    document.body.style.overflow = "hidden"
      setShow(true)
  }
  const getData = async()=>{
    try{
      const response = await fetch(`http://localhost:4000/admin/check`, {
        method: "GET", 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.status === 402)
        return navigate('/admin/login')
    }catch(e){
      console.log(e)
    }
    try{
      const response = await fetch(`http://localhost:4000/products/all?limit=20`, {
        method: "GET", 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data) 
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
    {show && <ModalWrapper  setShow={setShow} productId={productId}/>}
     <section className='adminPage bg-white p-2 flex items-center justify-center flex-col'>
      <h1 className='p-3 text-2xl font-semibold w-full'>Products</h1>
        <div className='w-full flex justify-evenly items-center mt-5' >
          <input type="search" className='w-3/5 p-3 outline-none rounded text-xl border border-indigo-500' placeholder='Search' />
          <button className='bg-indigo-600 text-white p-4 rounded-md mr-5 hover:bg-indigo-800'><i className="fa-solid fa-plus"></i>  Add product</button>
        </div>
        <div className='text-white mt-5 w-11/12  flex flex-row-reverse py-2'>
          <div>
          <span className='bg-black text-white p-3 px-5 capitalize'>104 Records</span>
          <select name="sort" className='border p-2 mx-2 rounded outline-none border-black text-black capitalize' >
            <option value="1" className='p-2 border bg-white outline-none  rounded-none'>Price high to low</option>
            <option value="2" className='p-2 border bg-white outline-none  rounded-none'>Price low to high</option>
            <option value="2" className='p-2 border bg-white outline-none  rounded-none'>stock high to low</option>
            <option value="2" className='p-2 border bg-white outline-none  rounded-none'>stock low to high</option>
          </select>
          <button className='bg-black p-3 rounded mx-2'><i className="fa-solid fa-arrow-left"></i></button>
          <span className='bg-black p-3 px-4 rounded mx-2'>1</span>
          <button className='bg-black p-3 rounded mx-2'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <motion.div className='w-11/12 flex flex-wrap justify-center items-center border my-2 py-2 border-slate-200' >
          {products.map((e)=>{
            return(<button value={e._id} onClick={handleClick}><CardAdmin _id={e._id} description={e.description} gender={e.gender} images={e.images} name={e.name} offer={e.offer} price={e.price} rating={e.rating} reviews={e.reviews} sale={e.sale} size={e.size} stock={e.stock} key={e._id}/></button>)
          })}
        </motion.div>
      </section> 
    </>
  )
} 
