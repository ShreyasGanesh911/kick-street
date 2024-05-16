import React from 'react'

export default function TableChild() {
  return (
    <>
    <tr className='h-28 border-b '>
        <td className='w-1/4 text-center '>
            <div className='flex'>
                <div className='w-1/2 bg-red-400 h-20 mx-3'></div>
                <div className='w-1/2'>
                    <p className='text-start'>Nike air zoom pegasus 35</p>
                    <p className='text-start text-sm'>Size: M</p>
                    <button className='text-red-600'><span><i className="fa-solid fa-trash mx-2 text-sm"></i></span>Remove</button>
                </div>
            </div>
        </td>
        <td className='w-1/4 text-center'>$411.00</td>
        <td className='w-1/4 text-center'>1</td>
        <td className='w-1/4 text-center'>$411.00</td>
    </tr>
    </>
  )
}
