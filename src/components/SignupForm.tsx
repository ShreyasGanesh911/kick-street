import React, { useState } from 'react'
import { toastError, toastSuccesss,toastWarning } from './Toast'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

type Props = {
  form: boolean,
  setForm: React.Dispatch<React.SetStateAction<boolean>>
}
export default function SignupForm({ form, setForm }: Props) {
  const navigate = useNavigate()
  const [show, setShow] = useState('password')
  const [visibility, setVisibility] = useState('show')
  const [cred, setCred] = useState({ email: '', password: '', phone:'',name:'',type:'user' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    let name = e.target.name
    let value = e.target.value
    setCred({ ...cred, [name]: value })
  }
  const handleForm = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
      const response = await fetch('http://localhost:4000/user/signUp', {
        method: "POST", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cred), 
      });
      if(response.status===201){
        toastSuccesss("Account created!")
        setTimeout(()=>navigate('/'),5005)
      }
      else{
        const data = await response.json()
        toastWarning(data.message)
      }
    }catch(e){
      toastWarning("Internal server error")
    }
    console.log(cred)
  }
  const handlePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    show === 'password' ? setShow('text') : setShow('password')
    visibility === "show" ? setVisibility("hide") : setVisibility("show")
  }
  return (
    <>
      <form className=' sm:px-14 px-5   bg-white sm:w-3/4 w-11/12 sm:h-4/5  flex flex-col justify-center' onSubmit={handleForm}>
        <h1 className=' sm:text-4xl text-3xl overflow-hidden font-semibold my-3'>Create account</h1>
        <p className='py-3 sm:text-base text-sm'>Have an account!?, try  <span className='text-red-500 underline'><button onClick={() => { setForm(true) }} className='text-lg underline'>Logging in</button></span></p>
        <div className='flex justify-center items-start flex-col'>
          <div >
            <label htmlFor="email" className=' text-slate-700 tracking-wide text-lg ' >Email:</label>
          </div>
          <div className='sm:w-8/12 w-full'>
            <input className='border border-slate-400 w-full p-3 my-3 rounded tracking-wide outline-slate-400' placeholder='Your Email Address' type="email" name='email' value={cred.email} onChange={handleChange} />
          </div>
        </div>
        <div className='flex justify-center items-start flex-col'>
          <div >
            <label htmlFor="name" className=' text-slate-700 tracking-wide text-lg ' >Name:</label>
          </div>
          <div className='sm:w-8/12 w-full'>
            <input className='border border-slate-400 w-full p-3 my-3 rounded tracking-wide outline-slate-400' placeholder='Your Name Here' type="text" name='name' value={cred.name} onChange={handleChange} />
          </div>
        </div>
        <div className='flex justify-center items-start flex-col'>
          <div >
            <label htmlFor="name" className=' text-slate-700 tracking-wide text-lg ' >Phone:</label>
          </div>
          <div className='sm:w-8/12 w-full'>
            <input className='border border-slate-400 w-full p-3 my-3 rounded tracking-wide outline-slate-400' required={true} placeholder='Your Phone number' maxLength={10} type="tel" name='phone' value={cred.phone} onChange={handleChange} />
          </div>
        </div>


        <div className='flex justify-center items-start flex-col mt-3'>
          <div>
            <label htmlFor="password" className=' text-slate-700 tracking-wide text-lg ' >Password:</label>
          </div>
          <div className='sm:w-3/4 w-full flex items-center'>
            <input className='border border-slate-400 w-full p-3 my-3 rounded outline-slate-400 tracking-wide' placeholder='Password' type={show} name='password' value={cred.password} onChange={handleChange} />
            <button className="border sm:inline hidden border-slate-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label relative right-14" onClick={handlePasswordVisibility} >{visibility}</button>
          </div>
        </div>



        <div className='flex flex-row-reverse w-full my-3 px-3'>
          <button className='bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded'>Register</button>
        </div>

      </form>
      <ToastContainer/>
    </>
  )
}
