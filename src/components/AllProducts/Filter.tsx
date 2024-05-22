import React, { useState } from 'react'
import MultiRangeSlider,{ChangeResult} from "multi-range-slider-react";
    const brand:string[] = ['adidas','reebok','Puma','ASICS']
    const size:string[] = ['6','7','8','9','10','11','12']

export default function Filter() {
    
    const [minValue, set_minValue] = useState(0);
    const [maxValue, set_maxValue] = useState(15000);
    const handleInput = (e:ChangeResult) => {
    	set_minValue(e.minValue);
    	set_maxValue(e.maxValue);
    };
  return (
    <>
        <div className='w-1/4 min-h-60 h-auto pl-16 pt-12 flex flex-col '>
        <h2 className='text-2xl  w-3/4 py-2 border-gray-400'>SHOP BY</h2>
        <div className='my-5'>
        <h3 className='text-lg pb-2 border-b w-3/4'>PRICE</h3>
        <div className='flex justify-between w-3/4'>
        <input type="number" className='w-3/12 ' value={minValue} onChange={(e)=>set_minValue(Number(e.target.value))}/>
        <input type="number" className='w-3/12 ' value={maxValue} onChange={(e)=>set_maxValue(Number(e.target.value))}/>
        </div>
        
        <MultiRangeSlider onInput={handleInput} style={{border:"none",boxShadow:'none',WebkitAppearance:"none",width:'75%'}} label={false} ruler={false} thumbLeftColor='black' thumbRightColor='black' barInnerColor='grey' barLeftColor='white' subSteps={false}
			max={15000}
			step={5}
			minValue={minValue}
			maxValue={maxValue}
			
		/>
        </div>
        <div className='my-5'>
          <h3 className='text-lg pb-2 border-b w-3/4'>BRAND</h3>
          <div >
          {brand.map((e)=>{
            return(<>
                <input type="checkbox" name='brand' className='p-2 bg-red-300' value={e} />
                <p className='inline-block px-3'>{e}</p>
                <br />
            </>)
          })}
          </div>
        </div>
        <div>
          <h3 className='text-lg border-b w-3/4 pb-2'>SIZE</h3>
          <div>
          {size.map((e)=>{
            return(<>
                <input type="checkbox" name='brand'  className='p-2 bg-red-300' value={e} />
                <p className='inline-block px-3'>{e}</p>
                <br />
            </>)
          })}
          </div>
        </div>
      </div> 
    </>
  )
}
