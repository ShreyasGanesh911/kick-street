import img from "../Assets/Shoe.webp"
import {Product} from '.././Types/Product'
export default function Card({description,name,price,size}:Product) {
  return (
<>
        <div className='  border-slate-300 item-container sm:mx-8 mx-4 w-32 sm:h-80 sm:w-80'> 
     
          <div className=' h-full sm:h-3/4 overflow-hidden'>
            <img src={img} className="object-contain overflow-hidden" alt="" />
          </div>
          <div className=' h-1/4  flex items-center flex-col justify-evenly'> 
            <p className="font-thin capitalize text-sm sm:text-base text-center">{name}</p>
            <p className="text-sm sm:text-base">Price : <span className="font-semibold text-sm sm:text-base">Rs. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> </p>
          </div>
        </div>
</>
  )
}
