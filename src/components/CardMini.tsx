import React from 'react'
import img from '../Assets/Shoe.webp'
import {Product} from "../Types/Product"
import { motion } from 'framer-motion'
type Props = {
  name:string,
  price:number,
}
export default function Card({name,price}:Props) {
  return (
    <>
      <div className='bg-white rounded w-40 h-56 sm:w-60 sm:h-80 border m-2 hover:border-black  '>
            <motion.div whileHover={{scale:0.95}}  className='h-3/5 sm:h-3/4 overflow-hidden'>
                <img src={img} className="object-contain overflow-hidden" alt="" />
            </motion.div>
            <div className='h-2/5 sm:h-1/4 border-t flex items-center flex-col justify-evenly'>
            <p className="font-thin capitalize text-center sm:text-base text-sm  ">{name}</p>
            <p className='sm:text-base text-sm'>Price : <span className="font-semibold">Rs. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> </p>
            </div>
      </div>
    </>
  )
}
