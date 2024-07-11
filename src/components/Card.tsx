import img from "../Assets/Shoe.webp"
import {Product} from '.././Types/Product'
import { motion } from "framer-motion"
export default function Card({description,name,price,size,images}:Product) 
{
  return (
<>
        <div className='  border-slate-300 item-container sm:mx-8 mx-4 w-32 sm:h-80 sm:w-80 my-2 sm:my-0'> 
          <div className=' h-28 sm:h-3/4 w-full overflow-hidden'>
            <motion.img whileHover={{scale:0.95}} src={images[0]?images[0].url:img} className="object-contain overflow-hidden w-full h-full" alt="" />
          </div>
          <div className=' h-1/4  flex items-center flex-col justify-evenly'> 
            <p className="font-thin capitalize text-sm sm:text-base text-center">{name}</p>
            <p className="text-sm sm:text-base">Price : <span className="font-semibold text-sm sm:text-base">Rs. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> </p>
          </div>
        </div>
</>
  )
}
