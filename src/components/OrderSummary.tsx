import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
type Props = {
  sum : number
}
export default function OrderSummary({sum}:Props) {
  const [checkOut,setCheckOut] = useState<boolean>(false)
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    

  }
  const checkUser = async()=>{
    try{
      const response = await fetch('http://localhost:4000/user/check', {
        method: "GET", 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
      });
      response.status===200 ? setCheckOut(true):setCheckOut(false)
    }catch(e){console.log(e)}
  }
  useEffect(()=>{
      checkUser()
  },[])
  return (
    <>
        <div className='border rounded sm:w-1/5 w-11/12 ml-5 sm:sticky top-32 py-3' >
          <h2 className='sm:text-3xl text-2xl text-center sm:text-start p-2 border-b '>Order summary</h2>
          <div className='px-2 flex justify-around'>
            <p>Sub total </p>
            <p>₹ {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</p>
          </div>
          <div className='px-2 flex justify-around border-t'>
            <p>Total </p>
            <p>₹ {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</p>
          </div>
          <div className='flex flex-row-reverse m-3 '>
          {checkOut ?
           <Link to='/checkout'> <button className='border border-white bg-gray-800 hover:bg-gray-600 rounded p-3 text-white ' onClick={handleClick}>Check out</button></Link> :
           <Link to='/login'> <button className='border border-white bg-gray-800 hover:bg-gray-600 rounded p-3 text-white'>Login to checkout</button></Link>}
          </div>
        </div>
    </>
  )
}
