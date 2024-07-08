import React from 'react'
type Props = {
  zipcode:number,
  line1:string,
  line2:string,
  city:string,
  state:string,

}
export default function AddressCard({zipcode,line1,city,state,line2}:Props) {
  return (
    <>
        <div className='w-3/4 h-32 border border-slate-400 my-2 rounded p-2 hover:bg-gray-50 hover:border-black '>
            <p className='text-2xl truncate'>{line1}</p>
            <p className='truncate'>{line2}</p>
            <p className='truncate'><span>{city}</span>,<span>{state}</span></p>
            <p>{zipcode}</p>
         </div> 
    </>
  )
}
