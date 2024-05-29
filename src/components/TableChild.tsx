import React from 'react'
import { useDispatch} from 'react-redux'
import { removeFromCart } from '../Redux/Slice/Cart/Index'
type Props = {
  name:string,
  price:number,
  qty:number,
  pId:string,
  size:number
}
export default function TableChild({name,price,qty,pId,size}:Props) {
  const dispatch = useDispatch()
  const handleRemove = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    dispatch(removeFromCart(pId))
    console.log('pressed',pId)
  }
  return (
    <>
    <tr className='h-28 border-b '>
        <td className='w-1/4 text-center '>
            <div className='flex'>
                <div className='w-1/2 bg-red-400 h-20 mx-3'></div>
                <div className='w-1/2'>
                    <p className='text-start capitalize'>{name}</p>
                    <p className='text-start text-sm'>Size: {size}</p>
                    <button className='text-red-600' onClick={handleRemove}><span><i className="fa-solid fa-trash mx-2 text-sm"></i></span>Remove</button>
                </div>
            </div>
        </td>
        <td className='w-1/4 text-center'>{price}</td>
        <td className='w-1/4 text-center'>{qty}</td>
        <td className='w-1/4 text-center'>${qty*price}</td>
    </tr>
    </>
  )
}
