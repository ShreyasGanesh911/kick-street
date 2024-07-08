import React, { useEffect, useState } from 'react'
import AddressField from '../../components/Checkout/AddressField';
import CheckoutForm from '../../components/Checkout/CheckoutForm';
import { useNavigate } from 'react-router-dom';
import AddressCard from '../../components/Checkout/AddressCard';
import { ToastContainer } from 'react-toastify';
type Props = {
    user:{},
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    zipcode: number,
    country: string,
    _id:string
}
  type Data = {
        success:boolean,
        response : Props[]
  }
export default function Checkout() {
    const navigate = useNavigate()
    const [addresses,setAddresses] = useState<Props[]>()
    const [select,setSelect] = useState<string>()
    const [show,setShow] = useState<boolean>(false)
      const getAddresses=async()=>{
        try{
            const response = await fetch('http://localhost:4000/user/getaddress', {
              method: "GET", 
              mode: "cors", 
              credentials: "include", 
              headers: {
                "Content-Type": "application/json",
              },
            });
            response.status===200 ? navigate('/checkout'):navigate('/cart')
            const data:Data = await response.json()
            setAddresses(data.response)
            console.log(data.response)

          }catch(e){console.log(e)}
      }
      useEffect(()=>{
        getAddresses()
      },[show,setShow])

  return (
    <>
    <section className='page flex justify-evenly items-start sm:flex-row flex-col sm:mt-20'>
        <div className='sm:w-1/3 w-full sm:min-h-96 h-auto sm:border flex justify-start items-center py-5 flex-col ' >
            {show ? <AddressField setShow={setShow} show={show}/>:
            <>
            { addresses?.length ? <>
            {addresses.map(e=>
              <>
                <AddressCard  city={e.city} line1={e.addressLine1} line2={e.addressLine2} state={e.state} zipcode={e.zipcode}/>
                <input type="radio" onChange={(f)=>setSelect(f.currentTarget.value)} className=' border-black inline-block w-96 rounded-none h-96 border mx-3 opacity-50   relative z-40 bottom-36   hover:bg-neutral-200' name='address' value={e._id}/>
              </>
            )}
            <br />
            <button className=' h-28 border w-3/4 border-black capitalize sm:my-0 my-3' onClick={()=>setShow(true)}> add address <span className='text-xl'>+</span></button>
            </> : <>No addresses</> }
            </>
}    
        </div>
        <div className='sm:w-1/3 w-full px-2 sm:h-96 '>
            <CheckoutForm select={select}/>
            <div className="border sm:w-3/5 h-48 form-radio bg-black  text-white rounded-xl flex justify-start items-end pb-12 mt-10">
               <div className='w-full'>
               <p className='ml-10 mb-2 text-lg'>5267 3181 8797 5449	</p>
               <div className='w-full  justify-around flex'><span>TEST USER</span> <span>06/25</span></div>
               </div>
            </div>
        </div>
        
    </section> 
    <ToastContainer/>
    </>
  )
}
