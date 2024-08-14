import React, { useEffect, useState } from 'react'
import { RootState } from '../../Redux/Store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toastError } from '../Toast';
declare global {
    interface Window {
        Razorpay: any;
    }
  }
  type Props = {
    select:string|undefined
  }
export default function CheckoutForm({select}:Props) {
  const navigate = useNavigate()
  const cart = useSelector((state: RootState) => state.cart.cart)
  const [totalAmount,setTotalAmount] = useState<number>(0)
  const [subTotal,setSubTotal] = useState<number>(0)
  const [fee,setFee] = useState<boolean>(true)
    const handleCheckout = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        if(select === undefined)
          return toastError("Please select an address")
        const body = {
            amount : totalAmount,
            cart : cart,
            address:select
        }
        try{
            const response = await fetch('http://localhost:4000/payment/checkout',{
                method:"POST",
                credentials:'include',
                headers:{
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
              })
              const {createOrder,key,orderId} = await response.json()           
            const options = {
                key: key, 
                amount:createOrder.amount, 
                currency: "INR",
                name: "Kick Street",
                description: "Kick Street dummy payment",
                image: "https://avatars.githubusercontent.com/u/127442299?v=4",
                order_id: createOrder.id, 
                callback_url: `http://localhost:4000/payment/verify?orderId=${orderId}`,
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9000090000"
                },
                theme: {
                    color: "#003366"
                }
            };
            const razor= new window.Razorpay(options);
            razor.open();

        }catch(e){
            console.log(e)
        }
    }
    const getAmount = ()=>{
      let amount:number = 0
      cart.forEach((e)=> amount += e.price)
      setSubTotal(amount)
      if(amount > 19999){
        setTotalAmount(amount+(subTotal * 0.005))

        setFee(false)
      }

      else
        setTotalAmount(amount+299+(subTotal * 0.005))
      
        
    }
    console.log(cart)
    useEffect(()=>{
      getAmount()
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(()=>{
      if(cart.length === 0){
        console.log("no items")
        return  navigate('/cart')
      }
       
    },[])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>  
        <div className='border rounded w-full  ' style={{minHeight:"30vh",height:"auto"}}>
          <h2 className='sm:text-3xl sm:text-start text-center text-2xl p-2 border-b '>Order summary</h2>
          <div className='px-2 flex justify-around'>
            <p>Sub total </p>
            <p>₹ {subTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          </div>
          <div className='px-2 flex justify-around'>
            <p>Delivery</p>
            {
              fee ?
              <p>₹ 299.00</p>:
              <p>₹ <span className='line-through'>299.00</span> <span className='text-green-400'>Free</span></p>
            }
          </div>
          <div className='px-2 flex justify-around'>
            <p>Handling Charges</p>
            <p>₹ {(subTotal * 0.005).toFixed(2).toString()}</p>
          </div>
          <div className='px-2 flex justify-around border-t'>
            <p>Total </p>
            <p>₹ {totalAmount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          </div>
          <div className='flex flex-row-reverse m-3 '>
          <button className='border border-white bg-gray-800 hover:bg-gray-600 rounded p-3 text-white ' onClick={handleCheckout}>Pay Now</button>
          </div>
        </div>
    </>
  )
}
