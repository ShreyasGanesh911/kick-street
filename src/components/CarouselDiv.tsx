import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
export default function CarouselDiv() {
  return (
    <>
    <div className='my-12' style={{height:"50vh",width:"75%"}}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='text-black' style={{backgroundColor:"red"}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"red"}}>wdwdwd</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"red"}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"red"}}>Slide 4</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"red"}}>Slide 5</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"red"}}>Slide 6</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"red"}}>Slide 7</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"red"}}>Slide 8</SwiperSlide>
        <SwiperSlide style={{backgroundColor:"red"}}>Slide 9</SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}
