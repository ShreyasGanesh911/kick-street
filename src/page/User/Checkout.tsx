import React from 'react'
import AddressField from '../../components/Checkout/AddressField';
declare global {
    interface Window {
        Razorpay: any; // Replace `any` with the appropriate type if known
    }
  }
  
export default function Checkout() {
    const handleCheckout = async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        const body = {
            amount : 499
        }
        try{
            const response = await fetch('http://localhost:4000/payment/checkout',{
                method:"POST",
                credentials:'same-origin',
                headers:{
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
              })
              const {order,key} = await response.json()
              console.log(order.id)

            
            const options = {
                key: key, 
                amount:order.amount, 
                currency: "INR",
                name: "Kick Street",
                description: "Kick Street dummy payment",
                image: "https://avatars.githubusercontent.com/u/127442299?v=4",
                order_id: order.id, 
                callback_url: "http://localhost:4000/payment/verify",
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
  return (
    <>
    <section className='page flex justify-evenly items-center'>
        <div className='w-1/3 min-h-96 h-auto border' style={{height:'70vh'}}>
            <AddressField/>
        </div>
        <div className='w-1/3 h-96 border'></div>
    </section> 
    </>
  )
}
