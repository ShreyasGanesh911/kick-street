import React, { useState } from 'react'
import state from "../../JSON/State.json"
import { myList} from '../../JSON/test'

export default function AddressField() {
    const [stateValue,setStateValue] = useState<string>()
    const[options,setOptions] = useState<string[]>([])
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setStateValue(e.target.value)
        const value = e.target.value
        const myArray = myList.filter(e=>e.state === value)
        setOptions(myArray[0].cities)
    }
   // console.log(myList.filter((e)=>e.state === stateValue))
  return (
    <>
    <form className='px-10'>
        <div>
            <label>Address Line 1 <span className='text-red-500'>*</span></label>
            <br />
            <input className='p-2 border outline-none w-3/4' type="text" name="addressLine1" />
        </div>
        <div>
            <label>Address Line 2</label>
            <br />
            <input className='p-2 border outline-none w-3/4' type="text" name="addressLine1" />
        </div>
        <div>
            <label>State <span className='text-red-500'>*</span></label>
            <br />
            <select className='p-3 border outline-none border-slate-200 rounded  w-3/4' onChange={handleChange} >
            <option style={{display:'none'}}>Select a state</option>
            {state.map(e=><option value={e.state}>{e.state}</option>)}
            </select>
        </div>
        <div>
            <label>City <span className='text-red-500'>*</span></label>
            <br />
            <select className='p-3 border outline-none border-slate-200 rounded  w-3/4'>
            <option style={{display:'none'}}>Select a city</option>
                {/* {options.length ? options.map(e=>{<options>{}</options>):<></>} */}
              
                {options.map((e)=>{
                    return (<option>{e}</option>)
                })}
            </select>
        </div>
        <div>
            <label>Country <span className='text-red-500'>*</span></label>
            <br />
            <input className='p-2 border outline-none w-3/4' type="text" name="addressLine1" disabled value='India' />
        </div>
        <div>
            <label>Postcode <span className='text-red-500'>*</span></label>
            <br />
            <input className='p-2 border outline-none w-3/4' type="text" name="addressLine1" />
        </div>
    </form> 
    </>
  )
}
