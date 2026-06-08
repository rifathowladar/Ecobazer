import React from 'react'
import Container from '../../components/layout/Container'
import Banner1 from '../../assets/image/Banner1.webp'
import Banner2 from '../../assets/image/Banner2.webp'
import Banner3 from '../../assets/image/Banner3.webp'
import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay, Pagination, Mousewheel, Scrollbar} from 'swiper/modules';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";


const Banner = () => {
  let slider1 = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      prevEl: ".prev-arrow",
      nextEl: ".next-arrow",
    },
    loop: true,
    autoplay : {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },

    modules: [Navigation, Autoplay, Pagination,],
  }
  // slider2
  let slider2 = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay : {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      type: 'fraction',
    },
    scrollbar: {
      hide: false,
    },
    modules: [Autoplay, Pagination, Scrollbar],
  }
  // slider3
  let slider3 = {
    spaceBetween: 0,
    slidesPerView: 1,
    direction:'vertical',
    mousewheel: true,
    loop: true,
    autoplay : {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    modules: [Autoplay, Pagination,Mousewheel, ],
  }
  return (
    <>
    <Container>
        <div className="flex mt-6 gap-x-6">
            <div className="max-w-218 relative slider1">
              <Swiper {...slider1}>
                <SwiperSlide><Link to="#"><img src={Banner1} alt="banner1" /></Link></SwiperSlide>
                <SwiperSlide><Link to="#"><img src={Banner2} className="w-full" alt="banner2" /></Link></SwiperSlide>
                <SwiperSlide><Link to="#"><img src={Banner3} className="w-full" alt="banner3" /></Link></SwiperSlide>
              </Swiper>
              <div className="prev-arrow">
                <FiArrowLeftCircle/>
              </div>
              <div className="next-arrow">
                <FiArrowRightCircle/>
              </div>
            </div>
            <div className="max-w-105.75">
              {/* slider2 */}
              <div className="relative text-white slider2">
                <Swiper {...slider2}>
                  <SwiperSlide><Link to="#"><img src={Banner2} alt="banner" /></Link></SwiperSlide>
                  <SwiperSlide><Link to="#"><img src={Banner3} className="w-full" alt="banner" /></Link></SwiperSlide>
                  <SwiperSlide><Link to="#"><img src={Banner2} className="w-full" alt="banner" /></Link></SwiperSlide>
                </Swiper>
              </div>
              {/* slider3 */}
              <div className="relative mt-6 flex h-72 slider3">
                <Swiper {...slider3}>
                  <SwiperSlide><Link to="#"><img src={Banner3} className="w-full h-full" alt="banner" /></Link></SwiperSlide>
                  <SwiperSlide><Link to="#"><img src={Banner2} className="w-full h-full" alt="banner" /></Link></SwiperSlide>
                  <SwiperSlide><Link to="#"><img src={Banner3} className="w-full h-full" alt="banner" /></Link></SwiperSlide>
                </Swiper>
              </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Banner