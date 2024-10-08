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
export default function TableChild({name,price,qty,pId,size,image}:Props) {
  const dispatch = useDispatch()
  const handleRemove = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    dispatch(removeFromCart(pId))
  }
  return (
    <>
    <tr className='h-28 border-b  '>
        <td className='w-1/4 text-center '>
            <div className='flex'>
                <div className='w-1/2  h-20 mx-3'>
                  <img src={image} alt="" className='object-contain overflow-hidden h-full w-full' />
                </div>
                <div className='w-1/2'>
                    <p className='text-start capitalize'>{name}</p>
                    <p className='text-start text-sm'>Size: {size}</p>
                    <button className='text-red-600' onClick={handleRemove}><span><i className="fa-solid fa-trash mx-2 text-sm"></i></span>Remove</button>
                </div>
            </div>
        </td>
        <td className='w-1/4 text-center'>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        <td className='w-1/4 text-center'>{qty}</td>
        <td className='w-1/4 text-center'>₹ {(qty*price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
    </tr>
    {/* <div className='flex sm:hidden w-'>
            <div className='w-1/2  p-2 h-40'>
                <div className='bg-red-500 w-full h-full'></div>
            </div>    
            <div className='w-1/2 h-40'>
            <p className='font-bold'>Name <span className='font-normal capitalize'>{name}</span></p>
            <p className='font-bold'>Price <span className='font-normal capitalize'>{price}</span></p>
            <p className='font-bold'>qty: <span className='font-normal capitalize'>{qty}</span></p>
            <button className='text-red-600' onClick={handleRemove}><span><i className="fa-solid fa-trash mx-2 text-sm"></i></span>Remove</button>
            </div>    
    </div>  */}
    </>
  )
}
