import React from 'react'
import Container from '../../components/layout/Container'
import Bannar1 from '../../assets/image/Bannar1.webp'
import Bannar2 from '../../assets/image/Bannar2.webp'
import Bannar3 from '../../assets/image/Bannar3.webp'
import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Pagination, Mousewheel, } from 'swiper/modules';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";


const Bannar = () => {
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

    modules: [Navigation, Autoplay, Pagination],
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
    modules: [Autoplay, Pagination, ],
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
            <div className="max-w-218 relative">
              <Swiper {...slider1}>
                <SwiperSlide><Link to="#"><img src={Bannar1} alt="bannar1" /></Link></SwiperSlide>
                <SwiperSlide><Link to="#"><img src={Bannar2} className="w-full" alt="bannar2" /></Link></SwiperSlide>
                <SwiperSlide><Link to="#"><img src={Bannar3} className="w-full" alt="bannar3" /></Link></SwiperSlide>
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
              <div className="relative text-white">
                <Swiper {...slider2}>
                  <SwiperSlide><Link to="#"><img src={Bannar2} alt="bannar" /></Link></SwiperSlide>
                  <SwiperSlide><Link to="#"><img src={Bannar3} className="w-full" alt="bannar" /></Link></SwiperSlide>
                  <SwiperSlide><Link to="#"><img src={Bannar2} className="w-full" alt="bannar" /></Link></SwiperSlide>
                </Swiper>
              </div>
              {/* slider3 */}
              <div className="relative mt-6 flex h-72">
                <Swiper {...slider3}>
                  <SwiperSlide><Link to="#"><img src={Bannar3} className="w-full h-full" alt="bannar" /></Link></SwiperSlide>
                  <SwiperSlide><Link to="#"><img src={Bannar2} className="w-full h-full" alt="bannar" /></Link></SwiperSlide>
                  <SwiperSlide><Link to="#"><img src={Bannar3} className="w-full h-full" alt="bannar" /></Link></SwiperSlide>
                </Swiper>
              </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Bannar