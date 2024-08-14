import React, { Dispatch, SetStateAction,useState } from 'react'
import state from "../../JSON/State.json"
import { myList} from '../../JSON/test'

type Props = {
    show:boolean,   
    setShow : Dispatch<SetStateAction<boolean>>
}
export default function AddressField({show,setShow}:Props) {
    const[form,setForm] = useState({al1:"",al2:'',state:'',city:'',postcode:undefined,country:'India'})
    const[options,setOptions] = useState<string[]>([])
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        const value = e.target.value
        setForm({...form,state:value})
        const myArray = myList.filter(e=>e.state === value)
        setOptions(myArray[0].cities)
    }
    const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        const name = e.target.name
        setForm({...form,[name]:value})
    }
   const handleClick = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    const body = {addressLine1:form.al1,addressLine2:form.al2,city:form.city,state:form.state,zipcode:form.postcode,country:form.country}
    try{
        const response = await fetch('http://localhost:4000/user/addAddress', {
            method: "POST", 
            mode: "cors", 
            credentials: "include", 
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(body)
          });
          if(response.status===200){
                setShow(false)
          }
    }catch(e){
        console.log(e)
    }
    
   }

  return (
    <>
    <form className='px-10 w-full'>
        <button className='border px-3 py-2 border-black bg-black text-white' onClick={()=>setShow(false)}><i className="fa-solid fa-arrow-left"></i> Go Back</button>
        <div className='my-4'>
            <label>Address Line 1 <span className='text-red-500'>*</span></label>
            <br />
            <input className='p-2 border outline-none w-3/4' type="text" name="al1" placeholder='Address Line 1' value={form.al1} onChange={handleFormChange}/>
        </div>
        <div className="my-4">
            <label>Address Line 2</label>
            <br />
            <input className='p-2 border outline-none w-3/4' type="text" name="al2" placeholder='Address Line 2' value={form.al2} onChange={handleFormChange}/>
        </div>
        <div className="my-4">
            <label>State <span className='text-red-500'>*</span></label>
            <br />
            <select className='p-3 border outline-none border-slate-200 rounded  w-3/4' onChange={handleChange} >
            <option style={{display:'none'}}>Select a state</option>
            {state.map(e=><option value={e.state}>{e.state}</option>)}
            </select>
        </div>
        <div className="my-4">
            <label>City <span className='text-red-500'>*</span></label>
            <br />
            <select className='p-3 border outline-none border-slate-200 rounded  w-3/4' onChange={(e)=>setForm({...form,city:e.currentTarget.value})}>
            <option style={{display:'none'}}>Select a city</option>
                {/* {options.length ? options.map(e=>{<options>{}</options>):<></>} */}
              
                {options.map((e)=>{
                    return (<option>{e}</option>)
                })}
            </select>
        </div>
        <div className="my-4">
            <label>Country <span className='text-red-500'>*</span></label>
            <br />
            <input className='p-2 border outline-none w-3/4' type="text" name="addressLine1" disabled value='India' />
        </div>
        <div className="my-4">
            <label>Postcode <span className='text-red-500'>*</span></label>
            <br />
            <input className='p-2 border outline-none w-3/4' type="number" minLength={6} maxLength={6} name="postcode" placeholder='PostCode' value={form.postcode} onChange={handleFormChange}/>
        </div>
        <div className='flex flex-row-reverse my-5'>
        <button className='p-3 bg-black hover:bg-slate-800 text-white capitalize rounded' onClick={handleClick}>Save address</button>
        </div>
    </form> 
    </>
  )
}
