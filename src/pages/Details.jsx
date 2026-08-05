import React, { useState } from 'react'
import Container from '../components/layout/Container'
import { Navigation, Pagination, FreeMode, Thumbs} from 'swiper/modules';
import banner1 from "../assets/image/Banner1.webp"
import banner2 from "../assets/image/Banner2.webp"
import banner3 from "../assets/image/Banner3.webp"
import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


const Details = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // slider 1
  let slider = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 12,
    slidesPerView: 4,
    loop: true,
    direction:'vertical',
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      prevEl: ".prev-detail",
      nextEl: ".next-detail",
    },
    modules: [Navigation, FreeMode, Thumbs,],
  }
  // slider 2
  let slider2 = {
    thumbs:{ swiper: thumbsSwiper },
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    freeMode: true,
    modules: [ FreeMode, Thumbs],
  }
  
  return (
    <section>
      <Container>
        <div className="flex justify-between">
          <div className="flex justify-between gap-3">
            <div className="w-20 h-83 relative flex flex-col items-center">
              <div className="prev-detail z-30 w-7 h-7 sm:h-12.5 sm:w-12.5 text-sm sm:text-2xl text-gray-400">
                <FaAngleUp/>
              </div>
              <Swiper {...slider} className='detailsThumbSwiper w-full h-full'>
                <SwiperSlide><img src={banner1} className="w-full" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner2} className="w-full" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner3} className="w-full" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner3} className="w-full" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner3} className="w-full" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner3} className="w-full" alt="banner" /></SwiperSlide>
              </Swiper>
              <div className="next-detail z-30 w-7 h-7 sm:h-12.5 sm:w-12.5 text-sm sm:text-2xl text-gray-400">
                <FaAngleDown/>
              </div>
            </div>
            <div className="w-115">
              <Swiper {...slider2} className="detailsMainSwiper">
                <SwiperSlide><img src={banner1} className="w-full" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner2} className="w-full" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner3} className="w-full" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner3} className="w-full" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner3} className="w-full" alt="banner" /></SwiperSlide>
                <SwiperSlide><img src={banner3} className="w-full" alt="banner" /></SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="bg-amber-800">h</div>
        </div>
      </Container>
      <Container>Details 1</Container>
      <Container>Details 2</Container>
    </section>
  )
}

export default Details