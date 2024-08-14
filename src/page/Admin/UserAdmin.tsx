import TableChildAdmin from '../../components/Admin/TableChildAdmin'
import { ToastContainer } from 'react-toastify'
import UseFetchGet from '../../Hooks/UseFetchGet'
type Result = {
  email : string,
  name : string,
  phone : number,
  type : string,
  _id : string
}
export default function UserAdmin() {
  const [data] = UseFetchGet<Result[]>("http://localhost:4000/admin/details?type=user",'/admin/login')
  return (
    <>
    
      <section className='adminPage bg-white p-2 flex justify-start flex-col items-center'>
  
      <h1 className='p-3 text-2xl font-semibold w-full'>Users</h1>
        <div className='w-full flex justify-evenly items-center mt-5' >
          <input type="search" className='w-3/5 p-3 outline-none rounded text-xl border border-indigo-500 ' placeholder='Search' />
        </div>  
        <div className='w-11/12 flex flex-wrap justify-center items-center  my-9'>
        <table className='w-full my-14 py-5'>
            <tr className='border-b'>
              <th className=' w-1/5 py-5'>USER ID</th>
              <th className=' w-1/5 py-5'>Name</th>
              <th className='w-1/5 py-5'>PHONE</th>
              <th className='w-1/5 py-5'>EMAIL</th>
              <th className='w-1/5 py-5'>ACTION</th>
            </tr>
            {data?.map((e)=>{
              return <TableChildAdmin email={e.email} name={e.name} phone={e.phone} userId={e._id} key={e._id}/>
            })}          
          </table>
          </div>
      </section>  
      <ToastContainer/>
    </>
  )
}
