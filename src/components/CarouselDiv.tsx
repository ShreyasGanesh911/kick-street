import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay,Pagination } from 'swiper/modules';
import IntroCard from './Carousel-card/IntroCard';

export default function CarouselDiv() {
  return (
    <>
    <div className=' sm:my-12 my-2 rounded sm:w-3/4 sm:h-96 w-11/12 h-48' >
      <Swiper   modules={[Autoplay,Pagination]} className="mySwiper rounded-lg" autoplay={{delay:90000}}>
        <SwiperSlide className='text-black' style={{backgroundColor:"slategrey"}}><IntroCard/></SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}
