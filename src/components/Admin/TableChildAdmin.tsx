import React from 'react'
import { Link } from 'react-router-dom'
import { toastSuccesss } from '../Toast'
type Props = {
  userId : string,
  name : string,
  phone : number,
  email:string
}
export default function TableChildAdmin({userId,name,phone,email}:Props) {
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    navigator.clipboard.writeText(e.currentTarget.value)
    toastSuccesss("Copied User ID")
  }
  return (
    <>
      <tr className='border-b h-12 rounded hover:bg-neutral-100 '>
              <td className=' w-1/5 text-center py-5 cursor-pointer hover:text-indigo-700'><Link to={`/admin/users/${userId}`}>{userId}</Link><button onClick={handleClick} value={userId}><i className="fa-solid fa-copy mx-2"></i></button></td>
              <td className=' w-1/5 text-center py-5'>{name}</td>
              <td className='w-1/5 text-center py-5'>{phone}</td>
              <td className='w-1/5 text-center py-5'>{email}</td>
              <td className='w-1/5 text-center py-5'><button className='text-red-500'><i className="fa-solid fa-pen-to-square mx-3"></i>EDIT</button></td>
            </tr>
    </>
  )
}
