import React, { useEffect, useState } from 'react'
import LoginForm from '../../components/LoginForm'
import img from "../../Assets/mural.jpg"
import SignupForm from '../../components/SignupForm'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [form , setForm] = useState(true)
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
      response.status===200 ? navigate('/account'):console.log("not logged in")
    }catch(e){console.log(e)}
  }
  useEffect(()=>{
      checkUser()
  },[])
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
        {
          form ?
          <LoginForm form = {form} setForm={setForm}/>
          :
          <SignupForm form = {form} setForm={setForm}/>
        }
        
        
      </div>
      </div>
      </section> 
      
    </>
  )
}
