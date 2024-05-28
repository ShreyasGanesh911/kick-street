import React, { useEffect, useState } from 'react'
import { Product } from '../Types/Product'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../Redux/Slice/Cart/Index'
import { RootState } from '../Redux/Store'
import { ToastContainer } from 'react-toastify'
import { toastSuccesss } from './Toast'

export default function ProductDetails({description,name,price,size,_id}:Product) {
  const [qty,setQty] = useState(1)
  const [exist,setExist] = useState(false)
  const [select,setSelect] = useState(false)
  console.log('product id',_id)
  const handleAddTocart = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()

      localStorage.setItem('cart',JSON.stringify([...cart,{pId:_id,price:price,qty:qty,name:name}]))
      dispatch(addToCart([...cart,{pId:_id,price:price,qty:qty,name:name}]))
      toastSuccesss("Item added to cart")
  }
  const cart = useSelector((state: RootState) => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()
  // const checkProduct = ()=>{
  //   cart.forEach((e)=>{
  //       if(e.pId === name){
  //         setExist(true)
  //        setQty(e.qty)
  //       }
  //   })
  // }

  return (
    <>
        <div className='p-5 overflow-y-hidden h-auto bg-neutral-50 rounded-lg'>
      <h1 className='text-4xl capitalize py-5'>{name}</h1>
        <div className='my-3'>
        <p className='text-2xl'>RS. <span className='text-black font-semibold space-x-1 tracking-wider'>{price}/-</span></p>
      <p className='text-2xl'>Brand: <span className='font-semibold'>Adidas</span></p>
        </div>
      <ul className='inline-flex  p-1 my-3'>
        <li><button className={`text-white px-4 py-2  bg-gray-800 hover:bg-black rounded text-3xl ${qty===0 ? "cursor-not-allowed bg-gray-500":'' }`} disabled={qty===0? true:false} onClick={()=> setQty(qty-1) }>-</button></li>
        <li className='px-4 py-2 pt-3 mx-1 text-center border rounded border-black'>{qty}</li>
        <li><button className='text-white px-4 py-2 bg-gray-800 hover:bg-black rounded text-3xl' onClick={()=>setQty(qty+1)}>+</button></li>
      </ul>
      <br />
      <button onClick={handleAddTocart} className={`p-3 text-white border bg-gray-800 hover:bg-black rounded mb-5  ${qty===0 ? "cursor-not-allowed bg-gray-500":'' }`} disabled={qty===0? true: false}>{exist?"IN cart":"Add to cart"}</button>
      <p>sizes (UK)</p>
      
      <div className='flex justify-start m-2'>
      {size.map((e)=>{
        return <button value={e.size} className={`w-10 h-10 border mx-3 flex justify-center items-center   hover:bg-neutral-200 ${select? 'border border-green-400':'border border-black'}`} onClick={()=>select?setSelect(false):setSelect(true)}>{e.size}</button>
      })}
      </div>

      <h4 className='text-2xl mb-3'>Description</h4>
      <p>{description}</p>
    </div>
      <ToastContainer/>
    </>
  )
}
