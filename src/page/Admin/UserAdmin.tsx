import React from 'react'
import TableChildAdmin from '../../components/Admin/TableChildAdmin'

export default function UserAdmin() {
  return (
    <>
      <section className='adminPage bg-white p-2'>
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
          <TableChildAdmin/>
          <TableChildAdmin/>
          <TableChildAdmin/>
          <TableChildAdmin/>
          <TableChildAdmin/>
            

            
 
          </table>
          </div>
      </section>  
    </>
  )
}
