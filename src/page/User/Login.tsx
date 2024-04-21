import React from 'react'
import LoginForm from '../../components/LoginForm'
import img from "../../Assets/mural.jpg"
export default function Login() {
  return (
    <>
     <section className='page displayFlex bg-gray-50'>
      <div className=' w-full h-3/4 flex justify-around ' style={{height:"90vh"}} >
      <div className=' w-1/2 h-full  bg-gray-50 flex justify-center items-center '> 
        <div className='w-11/12 h-full bg-orange-400 flex justify-center items-center'>
          <img className='object-contain w-full h-5/6' src={img} alt="" />
        </div>
      </div>
      <div className=' w-1/2 h-full flex justify-center items-center bg-gray-50'>
      <LoginForm/>
      </div>
      </div>
      </section> 
      
    </>
  )
}
