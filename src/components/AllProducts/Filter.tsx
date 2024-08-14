import React, { Dispatch, SetStateAction} from 'react'
    const brand:string[] = ['adidas','jordan','nike','converse','crocs','new balance','asics']
type Props = {
  brands : string[],
  setBrands :Dispatch<SetStateAction<string[]>>;
  setShow :Dispatch<SetStateAction<boolean>>;
}
export default function Filter({brands,setBrands,setShow}:Props) {
    const handleBrandInput = (e:React.MouseEvent<HTMLInputElement, MouseEvent>)=>{
      const value = e.currentTarget.value
      let bool = false
      let count:number = 0
      let tempBrand = brands
      for(let i =0 ;i<brands.length;i++)
        if(brands[i]===value){
          bool = true
          count = i
          break
        }
          
      bool? tempBrand.splice(count,1) : tempBrand.push(value)
      setBrands([...tempBrand])
    }

  return (
    <>
        <div className='w-full h-full bg-white sm:bg-none min-h-60 sm:h-auto pl-16 pt-12 sm:flex flex-col sm:relative fixed top-0 z-50'>
        <button className='absolute top-3 right-3 text-4xl sm:hidden'onClick={()=>setShow(false)}>&times;</button>
        <h2 className='text-2xl  w-3/4 py-2 border-gray-400'>SHOP BY</h2>
        <div className='my-5'>
          <h3 className='text-lg pb-2 border-b w-3/4'>BRAND</h3>
          <div >
          {brand.map((e)=>{
            return(<div className='hover:font-medium'>
                <input type="checkbox" name='brand' className='p-2 bg-red-300 ' value={`${e}%`} onClick={handleBrandInput} />
                <p  className='inline-block px-3 capitalize  '>{e}</p>
                <br />
            </div>)
          })}
          </div>
        </div>
      </div> 
    </>
  )
}
