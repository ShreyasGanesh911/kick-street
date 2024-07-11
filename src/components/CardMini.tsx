import React from 'react'
import img from '../Assets/Shoe.webp'
import {Images, Product} from "../Types/Product"
import { motion } from 'framer-motion'
type Props = {
  name:string,
  price:number,
  images:Images[]
}

export default function Card({name,price,images}:Props) {
  console.log(images[0])
  return (
    <>
      <div className='bg-white rounded w-40 h-56 sm:w-60 sm:h-80 border m-2 hover:border-black  '>
            <motion.div whileHover={{scale:0.95}}  className='h-3/5 sm:h-3/4 overflow-hidden'>
                <img src={images[0]?images[0].url:img} className="object-contain overflow-hidden h-full w-full" alt="" />
            </motion.div>
            <div className='h-2/5 sm:h-1/4 border-t flex items-center flex-col justify-evenly'>
            <p className="font-thin capitalize text-center sm:text-base text-sm  ">{name}</p>
            <p className='sm:text-base text-sm'>Price : <span className="font-semibold">Rs. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> </p>
            </div>
      </div>
    </>
  )
}
