import img from "../Assets/Shoe.webp"
import {Product} from '.././Types/Product'
export default function Card({description,name,price,size}:Product) {
  return (
<>
        <div className='  border-slate-300 item-container mx-8  '> 
     
          <div className='h-3/4 overflow-hidden'>
            <img src={img} className="object-contain overflow-hidden" alt="" />
          </div>
          <div className='  h-1/4  flex items-center flex-col justify-evenly'> 
            <p className="font-thin capitalize">{name}</p>
            <p >Price : <span className="font-semibold">Rs. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> </p>
          </div>
        </div>
</>
  )
}
