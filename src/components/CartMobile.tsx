import React from 'react'
import { useDispatch} from 'react-redux'
import { removeFromCart } from '../Redux/Slice/Cart/Index'
type Props = {
    name:string,
  price:number,
  qty:number,
  pId:string,
  size:number,
  image:string
}
export default function CartMobile({pId,name,price,qty,size,image}:Props) {
    const dispatch = useDispatch()
    const handleRemove = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        dispatch(removeFromCart(pId))
      }
  return (
    <>
     <div className='flex'>
            <div className='w-1/2  p-2 '>
                <div className='bg-red-500 w-full h-full'>
                  <img src={image} alt="" />

                </div>
            </div>    
            <div className='w-1/2  py-2'>
            <p className='font-bold'>Name <span className='font-normal capitalize'>{name}</span></p>
            <p className='font-bold'>Price <span className='font-normal capitalize'>{price}</span></p>
            <p className='font-bold'>QTY: <span className='font-normal capitalize'>{qty}</span></p>
            <button className='text-red-600' onClick={handleRemove}><span><i className="fa-solid fa-trash mx-2 text-sm"></i></span>Remove</button>
            </div>    
    </div> 
    </>
  )
}
