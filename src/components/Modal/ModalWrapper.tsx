import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {Product,Size} from "../../Types/Product"
import ImageUpload from '../Admin/ImageUpload'
type Props = {
  setShow :Dispatch<SetStateAction<boolean>>,
  productId:string,
}
type Data = {
  success:boolean,
  result : Product
}
type Images= {
  url:string
}
export default function ModalWrapper({setShow,productId}:Props) {
  const [details,setDetails] = useState({name:'',gender:'male',description:'',price:0,discount:0,stock:0})
  const [size,setSize] = useState<Size[]>([])
  const[validate,setValidate] = useState({name:false,brand:false,description:false,price:false})
  const [images,setImages] = useState<Images[]>([])
  const [addMore,setAddMore] = useState<boolean>(false)
  const [newSize,setNewSize] = useState({size:"",stock:0})
  const [error,setError] = useState<string>()
  
  const closeModal = ()=>{
    document.body.style.overflow = "scroll"
    setShow(false)
  }
  const checkField = ()=>{
    let valid = true
    console.log('des',details.description)
    if(details.name === ''){
      setValidate({...validate,name:true})
      valid = false
    }
    if(details.description === ``){
      setValidate({...validate,description:true})
      valid = false
    }
    if(details.price === 0){
      setValidate({...validate,price:true})
      valid = false
    }
    if(details.name === ''){
      setValidate({...validate,name:true})
      valid = false
      }
      return valid

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
      setDetails({description:result.description,gender:result.gender,name:result.name,price:result.price,discount:result.offer,stock:result.stock})
      setSize(result.size)  
      setImages(result.images)
    }catch(e){
      console.log(e)
    }
  }
  async function handlProduct<T>(url:string,method:string,body:T){
    try{
      const response = await fetch(url, {
        method: method, 
        mode: "cors", 
        credentials: "include", 
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(body)
      });
      if(response.status === 200 || response.status === 201)
        closeModal()

    }catch(e){
      console.log(e)
    }
  }

  const handleEditProduct = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    let sale
    details.discount ? sale = true: sale = false

    const body = {_id:productId,size:size,name:details.name,description:details.description,images,price:details.price,stock:details.stock,gender:details.gender,sale,offer:details.discount}
    if(checkField()){
      handlProduct('http://localhost:4000/products/update','POST',body)
    }
    
  }

  const handleDeleteProduct = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    if(checkField()){
      handlProduct('http://localhost:4000/products/delete','DELETE',{_id:productId})
    }
  }

  const handleNewProduct = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
    let sale
      details.discount ? sale = true: sale = false
      
    const body = {size:size,name:details.name,description:details.description,images,price:details.price,stock:details.stock,gender:details.gender,sale,offer:details.discount}
    console.log(size)
    if(checkField()){
      handlProduct('http://localhost:4000/products/add','POST',body)
    }
    
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value
    const name = e.target.name
   setDetails({...details,[name]:value})

  }
  const handleNewSize = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()
   console.log(newSize.size)
   if(newSize.size ===  '')
    return setError("Size cannont be 0")
   let found = false
   size.forEach(e=>{
    if(e.size===newSize.size){
      found = true
      return setError("Size already exists")
    } 
   })
   if(!found){
    setError('')
    setSize([...size,newSize])
    setDetails({...details,stock:details.stock +=newSize.stock

    })
    setAddMore(false)
   }
    
  }

  const handleResmoveSize = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      e.preventDefault()
      const findSize = e.currentTarget.value
      console.log(size)
      let i=0,stock=0
      for(i=0;i<size.length;i++)
        if(size[i].size === findSize){
          const array = size
          stock = size[i].stock
          array.splice(i,1)
          setSize(array)
        }
      setDetails({...details,stock:details.stock-=stock})
  }


  const handleStockChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const name = e.target.name
    const value = Number(e.target.value)
    let array = size
    for(let i=0;i<size.length;i++)
      if(size[i].size === name){
          array[i].stock = 95
          console.log(array[i].stock )
          setSize(array)
      }
      console.log(array)
      
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
                
                {productId?
                  <button className='py-2 px-8 border mx-5 bg-green-500 rounded hover:bg-green-500' onClick={handleEditProduct}>Update</button>:
                  <button className='py-2 px-8 border mx-5 bg-green-500 rounded hover:bg-green-500' onClick={handleNewProduct}>Add</button>

                }
                  {productId && <button  className='py-2 px-8 border bg-red-600 rounded hover:bg-red-600 ' onClick={handleDeleteProduct}>Delete</button>}
                 
                </div>
                    <div className='w-full h-full flex'>
                        <div className='w-1/2 h-full  px-5 '>
                            <div className='my-3'>
                              <label className=' font-bold text-zinc-700 text-sm'>Product Name</label>
                              <p className={`${!validate.name && 'invisible'} text-sm text-red-500 font-medium`}>Name field cannont be left empty *</p>
                              <input required type="text" className='border outline-none py-2 w-4/5 px-2 rounded border-slate-300   ' name='name' onChange={handleChange} value={details.name} />
                              
                            </div>
                            <div className='my-3'>
                              <label className='p-1 font-bold text-zinc-700 text-sm'>Brand</label>
                              <p className={`${!validate.brand && 'invisible'} text-sm text-red-500 font-medium`}>Brand field cannont be left empty *</p>
                              <input required type="text" className='border outline-none py-2 w-4/5 px-2 rounded border-slate-300' name='brand' />
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
                              <p className={`${!validate.description && 'invisible'} text-sm text-red-500 font-medium`}>Description field cannont be left empty *</p>
                              <textarea required className='w-4/5 h-56 rounded p-3 border-slate-300 border outline-none ' name='description' onChange={(e)=>setDetails({...details,description:e.currentTarget.value})} value={details.description}></textarea>
                            </div>

                        </div>
                        <div className='w-1/2 h-full  '>
                        <label className='p-1 font-bold text-zinc-700 text-sm'>Product images</label>
                          <ImageUpload images={images} setImages={setImages}/>
                        <div className='h-3/5 w-full '>
                           <div className='flex flex-wrap'>
                            <div className='mx-2'>
                            <label className='p-1 font-bold text-zinc-700 text-sm'>Price</label>
                            <br />
                            <input required type="text" className={`px-2 py-1 outline-none border border-slate-300 rounded ${validate.price && 'border-red-400'}`} name='price' onChange={handleChange} value={details.price}/>
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
                           <div className='flex'>
                           <h2 className='my-3 px-1 text-lg font-bold text-zinc-700 '>Stock ({details.stock})</h2>
                            <p className='my-3 px-1 text-sm text-red-500 pl-10'>{error}</p>
                           </div>
                           
                           <div className='flex flex-wrap  border border-slate-200 mr-3'>
                                {size.map(e=>
                                   <div className='w-24 h-16 p-1 border border-dashed bg-zinc-100 rounded m-2 relative'>
                                    <p className='text-center'>UK : {e.size}</p>
                                    <button value={e.size} className=' absolute right-0 top-0 text-xl text-red-600  rounded-full' style={{top:"-16px",right:"-2px"}} onClick={handleResmoveSize}>&times;</button>
                                    <input disabled type="number" name={e.size} className=' text-center w-full px-2 outline-none rounded border py-1 bg-white' value={e.stock} onChange={handleStockChange}/>
                                </div>)}    
                                  {
                                    !addMore &&                                   <div className='w-24 h-16 p-1 border border-dashed bg-zinc-100 rounded m-2'> 
                                    <button className='w-full h-full  text-sm text-violet-700' onClick={()=>setAddMore(true)}>{productId? 'Add more +' : 'Add size'}</button> 
                                  </div> 
                                  }
                                  {addMore && <div className='w-24 h-16 p-1 border border-dashed bg-zinc-100 rounded m-2 flex justify-center items-center flex-col text-sm relative'>
                                      <input name='size' type="text" className='w-3/4 mb-2 outline-none border border-slate-300 text-center' placeholder='UK:' value={newSize.size} onChange={(e)=>setNewSize({...newSize,size:e.target.value})}/>
                                      <input name = 'stock' type="number" min={0} className='w-3/4  outline-none border border-slate-300 text-center' placeholder='stock' value={newSize.stock} onChange={(e)=>setNewSize({...newSize,stock:Number(e.target.value)})}/>
                                      <button className='   rounded absolute right-0 top-0  ' style={{top:"-10px",right:"-1px"}} onClick={handleNewSize}>&#x2705;</button>
                                    </div>  }
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
