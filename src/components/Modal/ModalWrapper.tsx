import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {Product,Size} from "../../Types/Product"
type Props = {
  setShow :Dispatch<SetStateAction<boolean>>,
  productId:string
}
type Data = {
  success:boolean,
  result : Product
}
export default function ModalWrapper({setShow,productId}:Props) {
  const [details,setDetails] = useState({name:'',gender:'',description:'',price:0,discount:0,stock:0})
  const [size,setSize] = useState<Size[]>()
  const closeModal = ()=>{
    document.body.style.overflow = "scroll"
    setShow(false)
  }
  const getData = async()=>{
    try{
      const response = await fetch(`http://localhost:4000/admin/product`, {
        method: "POST", 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id:productId})
      });
      const data:Data = await response.json();
      const {result }= data
      console.log(data) 
      setDetails({description:result.description,gender:result.gender,name:result.name,price:result.price,discount:result.offer,stock:result.stock})
      setSize(result.size)  
    }catch(e){
      console.log(e)
    }
  }

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    console.log(details)
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value
    const name = e.target.name
    console.log(value)
   setDetails({...details,[name]:value})
    console.log(details)
  }
  useEffect(()=>{
    productId && getData() 
  },[])
  return (
    <>
     <section className=' z-50 fixed top-0 bottom-0 right-0 left-0   flex justify-center items-center overflow-hidden' style={{height:"100vh",width:"100vw",backgroundColor:'rgb(253 253 253 / 86%)'}}>
            <div className='w-9/12 h-5/6 bg-white rounded border'>
              <div className='w-full flex flex-row-reverse pr-5 '><button onClick={closeModal} className='border-black m-3 font-thin text-6xl'>&times;</button></div>
                <form className='h-5/6  w-full pt-5 '>
                <div className=' w-full h-16 flex flex-row-reverse py-2 font-medium'>
                <button className='py-2 px-8 border mx-5 bg-green-400 rounded hover:bg-green-500' onClick={handleSubmit}>{productId? 'Update' : 'Add'}</button>
                  {productId && <button  className='py-2 px-8 border bg-red-500 rounded hover:bg-red-600'>Delete</button>}
                 
                </div>
                    <div className='w-full h-full flex'>
                        <div className='w-1/2 h-full  px-5 '>
                            <div className='my-3'>
                              <label className='p-1 font-bold text-zinc-700 text-sm'>Product Name</label>
                              <br />
                              <input type="text" className='border outline-none py-2 w-4/5 px-2 rounded border-slate-300   ' name='name' onChange={handleChange} value={details.name} />
                            </div>
                            <div className='my-3'>
                              <label className='p-1 font-bold text-zinc-700 text-sm'>Brand</label>
                              <br />
                              <input type="text" className='border outline-none py-2 w-4/5 px-2 rounded border-slate-300'  />
                            </div>
                            <div className='my-3'>
                              <label className='p-1 font-bold text-zinc-700 text-sm'>Gender</label>
                              <br />
                              <select name="gender" className='px-5 py-3 outline-none border  border-slate-300 rounded' value={details.gender} onChange={(e)=>setDetails({...details,gender:e.target.value})}> 
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unisex">Unisex</option>
                              </select>
                            </div>
                            <div className='my-3'>
                              <label className='p-1 font-bold text-zinc-700 text-sm'>Description</label>
                              <br />
                              <textarea className='w-4/5 h-56 rounded p-3 border-slate-300 border outline-none ' name='description' onChange={(e)=>setDetails({...details,description:e.currentTarget.value})} value={details.description}></textarea>
                            </div>

                        </div>
                        <div className='w-1/2 h-full  '>
                        <label className='p-1 font-bold text-zinc-700 text-sm'>Product images</label>
                        <div className='h-2/5 w-full   px-3 displayFlex'>
                          
                            <div className='border h-5/6 w-1/2  '></div>
                            <div className=' h-5/6 w-1/2 flex justify-center items-center'>
                              <div className='border w-3/4 h-3/4 border-dashed border-slate-800 flex justify-center items-center '>
                                  <input type="file" placeholder='Click here to add images' accept="image/*" className=' opacity-0 w-full h-full border cursor-pointer' />
                                  <span className='text-slate-500 fixed '>Click here to add images</span>
                              </div>
                            </div>
                        </div>
                        <div className='h-3/5 w-full '>
                           <div className='flex flex-wrap'>
                            <div className='mx-2'>
                            <label className='p-1 font-bold text-zinc-700 text-sm'>Price</label>
                            <br />
                            <input type="text" className='px-2 py-1 outline-none border border-slate-300 rounded' name='price' onChange={handleChange} value={details.price}/>
                            </div>
                            <div className='mx-2'>
                            <label htmlFor=""><span className='p-1 font-bold text-zinc-700 text-sm'>Discount</span> <span className='text-gray-600 text-sm'>(Optional)</span></label>
                            <br />
                            <input type="text" className='px-2 py-1 outline-none border border-slate-300 rounded'name='discount' onChange={handleChange} value={details.discount}/>
                            </div>
                            <div className='mx-2'>
                            <label className='p-1 font-bold text-zinc-700 text-sm'>Discount Price</label>
                            <br />
                            <input type="text" className='px-2 py-1 outline-none border bg-white border-slate-300 rounded' disabled value={ details.price - (details.price * details.discount/100)}/>
                            </div>
                           </div>
                           <h2 className='my-3 px-1 text-lg font-bold text-zinc-700'>Stock ({details.stock})</h2>
                           <div className='flex flex-wrap  border border-slate-200 mr-3'>
                                {size?.map(e=>
                                   <div className='w-24 h-16 p-1 border border-dashed bg-zinc-100 rounded m-2'>
                                    <p className='text-center'>UK : {e.size}</p>
                                    <input type="number" className=' text-center w-full px-2 outline-none rounded border py-1' value={e.stock} />
                                </div>)}    
                                <div className='w-24 h-16 p-1 border border-dashed bg-zinc-100 rounded m-2'> <button className='w-full h-full  text-sm text-violet-700'>{productId? 'Add more +' : 'Add size'}</button> </div>                            
                           </div>
                        </div>  
                        </div>     
                                 
                    </div>
                </form>
            </div>
    </section> 
    </>
  )
}
