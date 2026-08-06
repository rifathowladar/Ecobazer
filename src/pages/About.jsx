import React from 'react'
import Container from '../components/layout/Container'
import CompanyLogo from '../components/home/CompanyLogo'
import Review from '../components/home/Review'
import Team from '../components/about/Team'
import about1 from "../assets/image/about1.webp"
import about from "../assets/image/about.webp"
import organicFood from "../assets/image/organicFood.webp"
import delivered from "../assets/image/delivered.webp"
import { FiTruck } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router'



const About = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between items-center flex-wrap gap-10 my-5 lg:my-20">
          <div className="">
            <h2 className="max-w-120 text-2xl pr-10 lg:pr-0 lg:text-5xl font-semibold text-[#1A1A1A]">100% Trusted Organic Food Store</h2>
            <p className="max-w-lg mt-3 lg:mt-8 text-[#808080] text-xs lg:text-sm">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
            </p>
          </div>
          <div className="">
            <img src={about1} alt='about1' />
          </div>
        </div>
      </Container>
      <div className="w-full" style={{ backgroundImage: `url(${about})`}}>
        <Container>
          <div className="flex justify-between items-center flex-wrap">
            <div className="">
              <img src={organicFood} alt='organicFood' />
            </div>
            <div className="">
              <div className="">
                <h3 className="max-w-120 text-2xl pr-10 lg:pr-0 lg:text-5xl font-semibold text-[#002603]">100% Trusted Organic Food Store</h3>
                <p className="max-w-md mt-3 lg:mt-8 text-[#808080] text-xs lg:text-sm">Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. </p>
              </div>
              <div className="max-w-lg mx-auto grid grid-cols-1 mt-8 sm:grid-cols-2">
                <div className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <FiTruck className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-900">
                      100% Organic food
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      100% healthy & Fresh food.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <FiTruck className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-900">
                      100% Organic food
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      100% healthy & Fresh food.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <FiTruck className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-900">
                      100% Organic food
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      100% healthy & Fresh food.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <FiTruck className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-900">
                      100% Organic food
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      100% healthy & Fresh food.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <FiTruck className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-900">
                      100% Organic food
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      100% healthy & Fresh food.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                    <FiTruck className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-gray-900">
                      100% Organic food
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      100% healthy & Fresh food.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex justify-between items-center flex-wrap mt-5 lg:mt-20">
          <div className="w-full lg:w-1/2">
            <h2 className="max-w-120 text-2xl pr-10 lg:pr-0 lg:text-5xl font-semibold text-[#1A1A1A]">We Delivered, You Enjoy Your Order.</h2>
            <p className="max-w-lg mt-3 lg:mt-8 text-[#808080] text-xs lg:text-sm">
              Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.
            </p>
            <p className='flex items-center gap-2 text-gray-500 pt-6'><span><IoIosCheckmarkCircleOutline className='text-[#2C742F] bg-primary/40 rounded-full' /></span> Sed in metus pellentesque.</p>
            <p className='flex items-center gap-2 text-gray-500 py-4'><span><IoIosCheckmarkCircleOutline className='text-[#2C742F] bg-primary/40 rounded-full' /></span> Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
            <p className='flex items-center gap-2 text-gray-500 pb-8'><span><IoIosCheckmarkCircleOutline className='text-[#2C742F] bg-primary/40 rounded-full' /></span>Maecenas ut nunc fringilla erat varius.</p>
            <span className='flex'>
              <Link className="bg-primary px-10 py-4 text-white gap-2 font-semibold flex rounded-full items-center">Shop Now <FaArrowRight /></Link>
            </span>
          </div>
          <div className="pt-5 lg:pt-0 w-full lg:w-1/2">
            <img src={delivered} alt='delivered' />
          </div>
        </div>
      </Container>
      <Team />
      <Review />
      <CompanyLogo />
    </section>
  )
}

export default About