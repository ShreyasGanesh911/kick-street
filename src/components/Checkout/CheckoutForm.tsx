import React from 'react'
declare global {
    interface Window {
        Razorpay: any; // Replace `any` with the appropriate type if known
    }
  }
export default function CheckoutForm() {
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
        <div className='border rounded w-full  ' style={{minHeight:"30vh",height:"auto"}}>
          <h2 className='text-3xl p-2 border-b '>Order summary</h2>
          <div className='px-2 flex justify-around'>
            <p>Sub total </p>
            {/* <p>₹ {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</p> */}
          </div>
          <div className='px-2 flex justify-around border-t'>
            <p>Total </p>
            {/* <p>₹ {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00</p> */}
          </div>
          <div className='flex flex-row-reverse m-3 '>
          <button className='border border-white bg-gray-800 hover:bg-gray-600 rounded p-3 text-white ' onClick={handleCheckout}>Place order</button>
          </div>
        </div>
    </>
  )
}
