import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Items } from '../../Types/About'
type Data = {
    success:true,
    result:Result
}

type Result = {
    amount:number, 
    items:Items[],
    orderDate:string,
    payment : string,
    user : {
        name:string,
        email:string,
        phone:number,
        _id:string
    },
    _id : string,
    status:string
  }
export default function OrderDetails() {
    const location = useLocation()
    const navigate = useNavigate()
    const [orderDetails,setOrderDetails] = useState<Result>()
    console.log(location.pathname.split('/')[3])
    const getData = async()=>{
        const orderId = location.pathname.split('/')[3]
        const response = await fetch(`http://localhost:4000/order/userorder?orderId=${orderId}`,{
            method: "GET", 
              mode: "cors", 
              credentials: "include", 
              headers: {
                "Content-Type": "application/json",
              },
          })
          if(response.status === 500)
              return navigate('/admin/orders')
          const data:Data = await response.json()
          console.log(data.result.user)
        //   setOrders(data.orders)
        //   setDetails(data.userDetails[0])
        setOrderDetails(data.result)

    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
     <section className="adminPage bg-white flex justify-center items-start pt-16">
        <div className='w-9/12  '>
                <div className='w-1/2 h-20  flex items-center  px-3'>
                    <button className=' py-2 px-3  text-xl rounded text-indigo-700' onClick={()=>navigate('/admin/orders')}><i className="fa-solid fa-arrow-left"></i></button>
                    <p>Order details</p>
                </div>
                <div className='w-full flex'>
                    <div className='w-3/4 flex justify-start items-center flex-col pt-5 '>   
                        <div className='border bg-white rounded-lg w-11/12'>    
                            {
                                orderDetails?.items.map(e=>
                                <div className='flex my-5'>

                                    <div className='w-1/2 h-20   flex justify-evenly items-center'>
                                        <div className='h-16 w-16 bg-black'></div>
                                        <div className='w-3/4'>
                                        <p className='capitalize font-semibold'>{e.pId.name}</p>
                                        <p className='text-sm text-gray-600'>{e.pId._id}</p>
                                        <p>UK : <span className='text-indigo-700 font-bold'>{e.size}</span></p>
                                        </div>
                                    </div>
                                    <div className='w-1/4 h-20   flex justify-evenly items-center'>
                                    ₹ {e.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} X {e.qty}
                                    </div>
                                    <div className='w-1/4 h-20   flex justify-evenly items-center'>
                                    ₹ {(e.price * e.qty).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")    }
                                    </div>
                                </div>)
                            
                            }
                            <div className='flex text-center flex-row-reverse  w-full border-t h-14 pt-3'>
                                <div className='w-1/4 '> ₹ {orderDetails?.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                                <div className='w-1/4  font-bold'> Total</div>
                                <div className='w-1/2 text-center  '> <span className='font-bold'>Date:</span> {orderDetails?.orderDate.slice(0,10)}</div>
                            </div>
                            </div>

                        <div>aa</div>
                    </div>
                    <div className='w-1/4 border rounded-lg p-3 m-3'>
                            <h1 className='font-bold text-xl'>Customer</h1>
                            <div className=' border-b py-3 capitalize'>
                              <p className='font-bold'>Customer ID</p>
                              <p className='cursor-pointer hover:text-indigo-700'> <Link to={`/admin/users/${orderDetails?.user._id}`}>{orderDetails?.user._id}</Link></p>
                            </div>
                            <div className=' border-b py-3 capitalize'>
                              <p className='font-bold'>Name</p>
                              <p> {orderDetails?.user.name}</p>
                            </div>
                            <div className=' border-b py-3'>
                              <p className='font-bold'>Email</p>
                              <p> {orderDetails?.user.email}</p>
                            </div>
                            <div className=' border-b py-3'>
                              <p className='font-bold'>Phone</p>
                              <p> {orderDetails?.user.phone}</p>
                            </div>
                    </div>
                </div>
        </div>
    </section> 
    </>
  )
}
