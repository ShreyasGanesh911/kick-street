import LineChart from '../../components/Charts/LineChart'
import BarChart from '../../components/Charts/BarChart'
import UseFetchGet from '../../Hooks/UseFetchGet'
type Result ={
  orderAmount:number,
  orderCount:number,
  productCount:number,
  month:string[],
  orders:number[],
  revenue:number[],
  totalUsers:number
  user:{
    name:string,_id:string,email:string,phone:number
  }
}
export default function HomeAdmin() {
  const [data] = UseFetchGet<Result>(`http://localhost:4000/admin/stats`,'/admin/login')
  return (
    <>
     <section className='adminPage bg-white ' >
      <div className='w-full h-32 flex  justify-between items-center'>
        <h2 className='p-3 sm:text-3xl text-2xl sm:ml-10 '>Welcome back <span className='text-indigo-700 font-semibold '>{data?.user.name}</span></h2>
      </div>
      <div className='w-full h-auto min-h-96 mt-14 '>
        <div className='sm:flex items-center justify-evenly py-5'>
          <div className='sm:w-1/2 w-full flex  justify-evenly'>
            <div className='sm:w-1/3 w-1/2 sm:h-40 border flex flex-col justify-around '> 
                <p className='w-full capitalize font-bold text-indigo-700 sm:text-lg  flex justify-center items-center '><span className='hidden sm:inline'><i className="fa-solid fa-indian-rupee-sign mr-1 sm:flex hidden bg-indigo-700 text-white py-2 px-3 rounded"> </i></span>Total revenue</p>
                <p className='sm:text-2xl text-gray-500 pb-5 text-center'>₹{data?.orderAmount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>

            </div>
            <div className='sm:w-1/3 w-1/2 h-40 border flex flex-col justify-around '>
            <p className='capitalize font-bold text-indigo-700 sm:text-lg  flex justify-center items-center'><span className='hidden sm:inline'><i className="fa-solid fa-box mr-1  bg-indigo-700 text-white py-2 px-3 rounded"></i></span>Total products</p>
            <p className='sm:text-2xl text-gray-500 pb-5 text-center'>{data?.productCount}</p>
            </div>
          </div>


          <div className='sm:w-1/2 w-full flex justify-around'>
            <div className='sm:w-1/3 w-1/2 h-40 border flex flex-col justify-around '>
            <p className='capitalize font-bold text-indigo-700 sm:text-xl  flex justify-center items-center'><span className='hidden sm:inline'><i className="fa-solid fa-boxes-stacked mx-2 bg-indigo-700 text-white py-2 px-3 rounded"></i></span>Total orders</p>
            <p className='sm:text-3xl text-gray-500 pb-5 text-center'>{data?.orderCount}</p>
             </div>
            <div className='sm:w-1/3 w-1/2 h-40 border flex flex-col justify-around '>
            <p className='capitalize font-bold text-indigo-700 sm:text-xl  flex justify-center items-center'><i className="fa-solid fa-user  bg-indigo-700 text-white py-2 px-3 rounded mx-1"></i>Total Users</p>
            <p className='sm:text-3xl text-gray-500 pb-5 text-center'>{data?.totalUsers}</p>
            </div>
          </div>
        </div>
        <div className='sm:flex  items-center justify-around '>
          <div className='sm:w-1/2 w-full flex sm:pt-0 pt-5 justify-center '>
            <LineChart month={data?.month?data.month:[]} revenue={data?.revenue? data.revenue:[]}/>
          </div>
          <div className='sm:w-1/2 w-full sm:py-0 py-5 flex justify-center '>
          <BarChart  month={data?.month?data.month:[]} orders={data?.orders?data.orders:[]}/>    
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}
