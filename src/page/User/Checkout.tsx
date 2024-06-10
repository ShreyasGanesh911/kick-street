import React, { useEffect, useState } from 'react'
import AddressField from '../../components/Checkout/AddressField';
import CheckoutForm from '../../components/Checkout/CheckoutForm';
import { useNavigate } from 'react-router-dom';
import AddressCard from '../../components/Checkout/AddressCard';
type Props = {
    user:{},
    addressLine1: string,
    addressLine2: string,
    city: string,
    state: string,
    zipcode: number,
    country: string,
}
  type Data = {
        success:boolean,
        response : Props[]
  }
export default function Checkout() {
    const navigate = useNavigate()
    const [addresses,setAddresses] = useState<Props[]>()
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
      },[])

  return (
    <>
    <section className='page flex justify-evenly items-start mt-20'>
        <div className='w-1/3 min-h-96 h-auto border flex justify-start items-center pt-5 flex-col ' style={{height:'70vh'}}>
            {show ? <AddressField setShow={setShow} show={show}/>:
            <>
            { addresses?.length ? <>
            {addresses.map(e=><AddressCard/>)}
            <br />
            <button className=' h-28 border w-3/4 border-black capitalize' onClick={()=>setShow(true)}> add address <span className='text-xl'>+</span></button>
            </> : <>No addresses</> }
            </>
}

            
             
        </div>
        <div className='w-1/3 h-96 '>
            <CheckoutForm/>
            <div className="border w-3/5 h-48  bg-black  text-white rounded-xl flex justify-start items-end pb-12 mt-10">
               <div className='w-full'>
               <p className='ml-10 mb-2 text-lg'>5267 3181 8797 5449	</p>
               <div className='w-full  justify-around flex'><span>TEST USER</span> <span>06/25</span></div>
               </div>
            </div>
        </div>
    </section> 
    </>
  )
}
