import React, { useEffect, useState } from 'react'
import { Product } from '../../Types/Product'
import ModalWrapper from '../../components/Modal/ModalWrapper'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../components/Admin/ProductCard'
export default function ProductAdmin() {
  const navigate = useNavigate()
  const [show,setShow] = useState<boolean>(false)
  const [data,setData] = useState<Product[]>()
  const [productId,setProductId] = useState<string>("")
  const [name,setName] = useState<string>('')
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setProductId(e.currentTarget.value)
    document.body.style.overflow = "hidden"
      setShow(true)
  }
  type Data = {
    success:boolean,
    result : Product[]
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
      if(response.status === 402)
        return navigate('/admin/login')
      const result:Data = await response.json()
      setData(result.result)
      
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    getData()
  },[setShow,show])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
    {show ? <ModalWrapper  setShow={setShow} productId={productId}/>:<></>}
     <section className='adminPage bg-white p-2 flex items-center justify-start flex-col'>
      <h1 className='p-3 text-2xl font-semibold w-full'>Products</h1>
        <div className='w-full flex justify-evenly items-center mt-5' >
          <input type="search" className='w-3/5 p-3 outline-none rounded text-xl border border-indigo-500' placeholder='Search' onChange={(e)=>setName(e.target.value)} />
          <button className='bg-indigo-600 text-white p-4 rounded-md mr-5 hover:bg-indigo-800' onClick={handleClick}><i className="fa-solid fa-plus"></i>  Add product</button>
        </div>
        <div className='flex w-11/12 font-bold py-5 border mt-5'>
            <p className='w-1/4 flex justify-center items-center'>Thumbnail</p>
            <p className='w-1/4 flex justify-center items-center'>Product Name</p>
            <p className='w-1/4 flex justify-center items-center'>Price</p>
            <p className='w-1/4 flex justify-center items-center'>Stock</p>
            </div>
        <div className='w-11/12 flex flex-wrap justify-start items-center   py-2 border-slate-200 flex-col' >
          
          {data?.filter((f)=>f.name.includes(name)).map((e)=>{
   return(
         <ProductCard _id={e._id} handleClick={handleClick} name={e.name} price={e.price} stock={e.stock} key={e._id} images={e.images}/>
    )
 })}
        </div>
      </section> 
    </>
  )
} 
