import React, { useEffect, useState } from 'react'
import { toastError, toastSuccesss } from '../../components/Toast'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
    const navigate = useNavigate()
    const [cred,setCred] = useState({userEmail:'',password:''})
    const handleClick = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
            try{
                const response = await fetch('http://localhost:4000/user/login', {
                    method: "POST", 
                    credentials: "include", 
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(cred), 
                });
                if(response.status === 404)
                    return toastError("User doesn't exist")
                if(response.status === 401)
                    return toastError("Incorrect password")
                const data = await  response.json()
                if(data.success)
                    toastSuccesss("Logged in ")
                    setTimeout(()=>{
                        navigate("/admin")
                    },2000)
                
            }catch(e){
                toastError("Internal server Error")
            }
    }
    
  return (
    <>
     <section  className='page bg-white flex justify-center items-center flex-col'>
     <h1 className='text-5xl text-center w-full my-3 font-mono'>Kick Street</h1>
            <form className='w-1/4 h-96 border rounded-lg text-indigo-600 py-2'>
                    <h1 className='text-2xl font-bold text-indigo-600  w-full my-3  px-5 '>Sign in to your account</h1>
                    <div className='w-full flex justify-center items-start flex-col px-5'>
                        <label className='w-full text-start  '>Your Email</label>
 
                        <input className='outline-none py-2 px-3 border rounded w-11/12' type="email" name="email" placeholder='email' value={cred.userEmail} onChange={(e)=>setCred({...cred,userEmail:e.target.value})}/>
                    </div>
                    <div className='w-full flex justify-center items-start flex-col px-5 py-5'>
                        <label className='w-full text-start  '>Password</label>
 
                        <input className='outline-none py-2 px-3 border rounded w-11/12' type="password" name="password" placeholder='password' onChange={(e)=>setCred({...cred,password:e.target.value})}/>
                    </div>
                   
                    <div className='flex justify-center items-center my-5'>
                    <button className='w-3/4 py-3 border rouned text-white bg-indigo-700 rounded hover:bg-indigo-800' onClick={handleClick}>Sign in</button>
                    </div>
            </form>
            <ToastContainer/>
    </section> 
    </> 
  )
}
