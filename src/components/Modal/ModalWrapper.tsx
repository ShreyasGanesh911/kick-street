import React, { Dispatch, SetStateAction } from 'react'
type Props = {
  show : boolean,
  setShow :Dispatch<SetStateAction<boolean>>
}
export default function ModalWrapper({show,setShow}:Props) {
  const closeModal = ()=>{
    document.body.style.overflow = "scroll"
    setShow(false)
  }
  return (
    <>
     <section className=' z-50 fixed top-0 bottom-0 right-0 left-0   flex justify-center items-center overflow-hidden' style={{height:"100vh",width:"100vw",backgroundColor:'rgb(253 253 253 / 86%)'}}>
            <div className='w-9/12 h-5/6 bg-zinc-50 rounded border'>
              <div className='w-full flex flex-row-reverse  '><button onClick={closeModal} className='py-3 px-5  rounded border border-black m-3 hover:bg-slate-100 '>X</button></div>




                <form className='h-5/6  w-full pt-10 '>
                    <div className='w-full h-full flex'>
                        <div className='w-1/2 h-full  px-5 '>
                            <div className='my-3'>
                              <label className='p-1 font-bold text-zinc-700 text-sm'>Product Name</label>
                              <br />
                              <input type="text" className='border outline-none py-2 w-4/5 px-2 rounded bg-zinc-50   border-slate-500' />
                            </div>
                            <div className='my-3'>
                              <label className='p-1 font-bold text-zinc-700 text-sm'>Brand</label>
                              <br />
                              <input type="text" className='border outline-none py-2 w-4/5 px-2 rounded bg-zinc-50  border-slate-500'  />
                            </div>
                            <div className='my-3'>
                              <label className='p-1 font-bold text-zinc-700 text-sm'>Product Name</label>
                              <br />
                              <input type="text" className='border outline-none py-2 w-4/5 px-2 rounded bg-zinc-50  border-slate-500' />
                            </div>
                            <div className='my-3'>
                              <label className='p-1 font-bold text-zinc-700 text-sm'>Gender</label>
                              <br />
                              <select name="gender" className='px-5 py-3 outline-none border bg-zinc-50 border-slate-500 rounded' > 
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="unisex">Unisex</option>
                              </select>
                            </div>
                            <div className='my-3'>
                              <label className='p-1 font-bold text-zinc-700 text-sm'>Description</label>
                              <br />
                              <textarea className='w-2/3 h-44 rounded p-3 border-slate-500 border outline-none bg-zinc-50'></textarea>
                            </div>

                        
                        </div>
                        <div className='w-1/2 h-full  '>
                        <label className='p-1 font-bold text-zinc-700 text-sm'>Product images</label>
                        <div className='h-2/5 w-full   px-3 displayFlex'>
                          
                            <div className='border h-5/6 w-1/2 border-slate-500 '></div>
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
                            <input type="text" className='px-2 py-1 outline-none border bg-zinc-50 border-slate-500 rounded' value={900}/>
                            </div>
                            <div className='mx-2'>
                            <label htmlFor=""><span className='p-1 font-bold text-zinc-700 text-sm'>Discount</span> <span className='text-gray-600 text-sm'>(Optional)</span></label>
                            <br />
                            <input type="text" className='px-2 py-1 outline-none border bg-zinc-50 border-slate-500 rounded' value={900}/>
                            </div>
                            <div className='mx-2'>
                            <label className='p-1 font-bold text-zinc-700 text-sm'>Discount Price</label>
                            <br />
                            <input type="text" className='px-2 py-1 outline-none border bg-zinc-50 border-slate-500 rounded' value={900}/>
                            </div>
                           </div>
                           <h2 className='my-3 px-1 text-lg font-bold text-zinc-700'>Stock</h2>
                           <div className='flex flex-wrap  border border-slate-200 mr-3'>
                            
                                
                                <div className='w-24 h-16 p-1 border border-dashed bg-zinc-100 rounded m-2'>
                                    <p className='text-center'>UK : 6</p>
                                    <input type="number" className=' text-center w-full px-2 outline-none rounded border py-1' value={5} />
                                </div>
                                <div className='w-24 h-16 p-1 border border-dashed bg-zinc-100 rounded m-2'>
                                    <p className='text-center'>UK : 7</p>
                                    <input type="number" className=' text-center w-full px-2 outline-none rounded border py-1' value={5} />
                                </div>
                                <div className='w-24 h-16 p-1 border border-dashed bg-zinc-100 rounded m-2'>
                                    <p className='text-center'>UK : 8</p>
                                    <input type="number" className=' text-center w-full px-2 outline-none rounded border py-1' value={5} />
                                </div>
                                <div className='w-24 h-16 p-1 border border-dashed bg-zinc-100 rounded m-2'>
                                    <p className='text-center'>UK : 9</p>
                                    <input type="number" className=' text-center w-full px-2 outline-none rounded border py-1' value={5} />
                                </div>
                                
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
