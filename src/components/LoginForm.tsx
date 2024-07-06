import React, { useState } from 'react'
import { toastError, toastSuccesss, toastWarning } from './Toast'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


type Props = {
  form: boolean,
  setForm: React.Dispatch<React.SetStateAction<boolean>>
}
export default function LoginForm({ form, setForm }: Props) {
  const navigate = useNavigate()
  const [show, setShow] = useState('password')
  const [cred, setCred] = useState({ userEmail: '', password: '' })
  const [visibility, setVisibility] = useState('show')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value
    setCred({ ...cred, [name]: value })
  }
  const handleForm = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(cred.userEmail==='')
      return toastError('Cannot leave email field empty')
    if(cred.password==='')
      return toastError('Cannot leave password field empty')
    try{
      const response = await fetch('http://localhost:4000/user/login', {
        method: "POST", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cred), 
      });
      if(response.status===200){
        toastSuccesss("Logged in!")
        setTimeout(()=>navigate('/'),5005)
      }
      else if(response.status === 401)
        return toastError("Incorrect credentials")
      else if(response.status === 404)
        return toastError("User not found")
      
    }catch(e){
      toastWarning("Internal server error")
    }
  }
  const handlePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    show === 'password' ? setShow('text') : setShow('password')
    visibility === "show" ? setVisibility("hide") : setVisibility("show")
  }
  return (
    <>
      <form className=' sm:px-14 px-5  bg-white sm:w-3/4 w-11/12 sm:h-4/5  flex flex-col justify-center' onSubmit={handleForm}>
        <h1 className=' sm:text-4xl text-3xl overflow-hidden font-semibold my-3'>Welcome back !</h1>
        <p className='py-3 sm:text-base text-sm'>Don't have an account!? <span className='text-red-500 underline'>< button className='text-lg underline' onClick={() => { setForm(false) }}>Create Account</button></span>, takes less than a minute </p>
        <div className='flex justify-center items-start flex-col'>
          <div >
            <label htmlFor="email" className=' text-slate-700 tracking-wide text-lg ' >Email:</label>
          </div>
          <div className='sm:w-8/12 w-full'>
            <input className='border border-slate-400 w-full p-3 my-3 rounded tracking-wide outline-slate-400' placeholder='Your Email Address' type="email" value={cred.userEmail} name='userEmail' onChange={handleChange} />
          </div>
        </div>

        <div className='flex justify-center items-start flex-col mt-3'>
          <div>
            <label htmlFor="password" className=' text-slate-700 tracking-wide text-lg ' >Password:</label>
          </div>
          <div className='sm:w-3/4 w-full flex items-center'>
            <input className='border border-slate-400 w-full p-3 my-3 rounded outline-slate-400 tracking-wide' placeholder='Enter Password' onChange={handleChange} type={show} value={cred.password} name='password' />
            <button className="border sm:inline hidden border-slate-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label relative right-14" onClick={handlePasswordVisibility} >{visibility}</button>
          </div>
        </div>
        <div className='sm:flex hidden justify-center items-start flex-col mt-3 p-10'>
          <p className='invisible'> q</p>
        </div>
        <div className='sm:flex hidden justify-center items-start flex-col mt-3 p-10'>
          <p className='invisible'> q</p>
        </div>

        <div className='flex flex-row-reverse w-full my-3 px-3'>
          <button className='bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded' >Login</button>
        </div>

      </form>
      <ToastContainer/>
    </>
  )
}
