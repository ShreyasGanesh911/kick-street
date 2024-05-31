import React from 'react'
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
                name: "Acme Corp",
                description: "Test Transaction",
                image: "https://example.com/your_logo",
                order_id: order.id, 
                callback_url: "http://localhost:4000/payment/verify",
                prefill: {
                    name: "Gaurav Kumar",
                    email: "gaurav.kumar@example.com",
                    contact: "9000090000"
                },
                notes: {
                    address: "Razorpay Corporate Office"
                },
                theme: {
                    color: "#fff"
                }
            };
            //console.log(window.Razorpay)
            const razor= new window.Razorpay(options);
            razor.open();

        }catch(e){
            console.log(e)
        }
    }
  return (
    <>
    <section className='page flex justify-center items-center'>
        <button className='border border-black p-3 rounded bg-red-400' onClick={handleCheckout}>handleCheckout</button>
    </section> 
    </>
  )
}
