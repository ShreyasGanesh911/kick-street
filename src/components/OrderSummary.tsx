import React from 'react'
type Props = {
  sum : number
}
export default function OrderSummary({sum}:Props) {
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{

  }
  return (
    <>
        <div className='border rounded w-1/5 ml-5 sticky top-32 ' style={{minHeight:"30vh",height:"auto"}}>
          <h2 className='text-3xl p-2 border-b '>Order summary</h2>
          <div className='px-2 flex justify-around'>
            <p>Sub total </p>
            <p>{sum}.00</p>
          </div>
          <div className='px-2 flex justify-around border-t'>
            <p>Total </p>
            <p>{sum}.00</p>
          </div>
          <div className='flex flex-row-reverse m-3 '>
            <button className='border border-white bg-gray-800 hover:bg-gray-600 rounded p-3 text-white ' onClick={handleClick}>Check out</button>
          </div>
        </div>
    </>
  )
}
