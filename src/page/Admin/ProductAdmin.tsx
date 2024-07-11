import React, { useEffect, useState } from 'react'
import { Product } from '../../Types/Product'
import ModalWrapper from '../../components/Modal/ModalWrapper'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../components/Admin/ProductCard'
import UseFetchGet from '../../Hooks/UseFetchGet'
export default function ProductAdmin() {
  const navigate = useNavigate()
  const [sort,setSort] = useState<number>(1)
  const [brands,setBrands] = useState<string[]>([])
  const [show,setShow] = useState<boolean>(false)
  const [data,setData] = useState<Product[]>()
  const [productId,setProductId] = useState<string>("")
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
  },[setShow,show])
  return (
    <>
    {show ? <ModalWrapper  setShow={setShow} productId={productId}/>:<></>}
     <section className='adminPage bg-white p-2 flex items-center justify-center flex-col'>
      <h1 className='p-3 text-2xl font-semibold w-full'>Products</h1>
        <div className='w-full flex justify-evenly items-center mt-5' >
          <input type="search" className='w-3/5 p-3 outline-none rounded text-xl border border-indigo-500' placeholder='Search' />
          <button className='bg-indigo-600 text-white p-4 rounded-md mr-5 hover:bg-indigo-800' onClick={handleClick}><i className="fa-solid fa-plus"></i>  Add product</button>
        </div>
        <div className='text-white mt-5 w-11/12  flex flex-row-reverse py-2'>
          <div>
          <span className='bg-black text-white p-3 px-5 capitalize'>{data?.length} Records</span>
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
        <div className='flex w-11/12 font-bold py-5 border mt-5'>
            <p className='w-1/4 flex justify-center items-center'>Thumbnail</p>
            <p className='w-1/4 flex justify-center items-center'>Product Name</p>
            <p className='w-1/4 flex justify-center items-center'>Price</p>
            <p className='w-1/4 flex justify-center items-center'>Stock</p>
            </div>
        <div className='w-11/12 flex flex-wrap justify-start items-center   py-2 border-slate-200 flex-col' >
          
          {data?.map((e)=>{
            return(
                  <ProductCard _id={e._id} handleClick={handleClick} name={e.name} price={e.price} stock={e.stock} key={e._id} images={e.images}/>
              )
          })}
        </div>
      </section> 
    </>
  )
} 
