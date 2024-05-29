import React, { useEffect, useState } from 'react'
import { Product } from '../Types/Product'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, updateQty } from '../Redux/Slice/Cart/Index'
import { RootState } from '../Redux/Store'
import { ToastContainer } from 'react-toastify'
import { toastSuccesss, toastWarning } from './Toast'

export default function ProductDetails({description,name,price,size,_id}:Product) {
  const [qty,setQty] = useState(1)

  const [shoeSize,setShoeSize] = useState<number>(0)
  console.log('product id',_id)
  const handleSize = (e:React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
    e.preventDefault()
    setShoeSize(Number(e.currentTarget.value))
  }
  const handleAddTocart = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    if(shoeSize === 0 )
      return toastWarning("Please select a size")
    let myCart = cart
    let exist = false
    let num = 0
    for(let i=0;i<myCart.length;i++){
      if(cart[i].pId === _id){
        console.log("Product exists in the cart")
        num = i
        exist = true
        break 
      }
    }
    if(exist){
      dispatch(updateQty({id:cart[num].pId,qty}))
      console.log('after removing',cart)       
    }
    else{
      localStorage.setItem('cart',JSON.stringify([...cart,{pId:_id,price:price,qty:qty,name:name,size:shoeSize}]))
      dispatch(addToCart([...cart,{pId:_id,price:price,qty:qty,name:name,size:shoeSize}]))
    }
      toastSuccesss("Item added to cart")
  }
  const cart = useSelector((state: RootState) => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()
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
      <button onClick={handleAddTocart} className={`p-4 px-7 text-xl text-white border bg-gray-800 hover:bg-black rounded mb-5  ${qty===0 ? "cursor-not-allowed bg-gray-500":'' }`} disabled={qty===0? true: false}>{"Add to cart"}</button>
      <p>sizes (UK)</p>
      
      <div className='flex justify-start m-2'>
      {size.map((e)=>{
       //return <input/>
        return <div>
            <input type='radio' name='size' value={e.size} className={`w-12 h-12 border mx-3 opacity-0   relative z-40    hover:bg-neutral-200 `} onClick={handleSize}/>
            <span className={`w-12 h-12 border mx-3 flex justify-center items-center relative bottom-12 ${shoeSize===Number(e.size) ? 'border border-black' : 'border border-slate-300'}`} about=''>{e.size}</span>

        </div>
      })}
      </div>

      <h4 className='text-2xl mb-3'>Description</h4>
      <p>{description}</p>
    </div>
      <ToastContainer/>
    </>
  )
}
