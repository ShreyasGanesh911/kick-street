import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';


import { Autoplay,Pagination } from 'swiper/modules';
import IntroCard from './Carousel-card/IntroCard';
import Sale from './Carousel-card/Sale';
export default function CarouselDiv() {
  return (
    <>
    <div className=' sm:my-12 my-2 rounded sm:w-3/4 sm:h-96 w-11/12 h-48' >
      <Swiper   modules={[Autoplay,Pagination]} className="mySwiper rounded-lg" autoplay={{delay:90000}}>
        <SwiperSlide className='text-black' style={{backgroundColor:"slategrey"}}><IntroCard/></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"red"}}><Sale/></SwiperSlide>
        <SwiperSlide style={{backgroundColor:"green"}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"yellow"}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"blue"}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"red"}}>Slide 6</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"pink"}}>Slide 7</SwiperSlide>

      </Swiper>
    </div>
    </>
  )
}
